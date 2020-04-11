const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Webpack = require('webpack');
const chokidar = require('chokidar');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  // TODO 1
  entry: {
    index: ['./index.js'],
    about: ['./about.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    // TODO
    filename: DEV_MODE ? '[name].js' : '[name]-[chunkhash].js',
    chunkFilename: DEV_MODE ? '[name]-chunk.js' : '[name]-chunk-[chunkhash].js',
    path: path.resolve('dist'),
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
        include: path.resolve('src/css'),
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'html-loader' },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: DEV_MODE,
              data: {
                DEV_MODE,
                MY_DATA: 'milkmidi',
              },
            },
          },
        ],
        include: path.resolve('src/html'),
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: '[path][name].[ext]?[hash:10]',
              esModule: false,
            },
          },
        ],
        include: path.resolve('src/img'),
      },
    ],
  },
  plugins: [
    // TODO
    new HtmlWebpackPlugin({
      template: './html/index.pug',
      filename: 'index.html',
      chunks: ['vendors', 'index'],
    }),
    new HtmlWebpackPlugin({
      template: './html/about.pug',
      filename: 'about.html',
      chunks: ['vendors', 'about'],
    }),
    new MiniCssExtractPlugin({
      filename: DEV_MODE ? '[name].css' : '[name]-[contenthash].css',
    }),
    // https://webpack.js.org/plugins/define-plugin/
    new Webpack.DefinePlugin({}),
    ...DEV_MODE
      ? []
      : [
        new OptimizeCSSAssetsPlugin(),
      ],
  ],
  devServer: {
    before(app, server) {;
      // hot reload for html, pug
      chokidar.watch('src/html/**/*').on('all', () => {
        server.sockWrite(server.sockets, 'content-changed');
      });
    },
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // HTML5 History API
    historyApiFallback: true,
    port: 3000,
    hot: true,
    // 可以用 ip 連線，預設是 localhost
    host: '0.0.0.0',
    stats: 'minimal',
  },
  // TODO: 1 start
  optimization: {
    // https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroupscachegroupenforce
          enforce: true,
        },
      },
    },
  },
  // TODO: 1 end
};
