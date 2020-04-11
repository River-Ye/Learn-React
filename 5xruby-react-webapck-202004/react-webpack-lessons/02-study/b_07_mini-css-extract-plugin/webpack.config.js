const path = require('path');
// TODO: 1
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: ['./index.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: DEV_MODE ? '[name].js' :  '[name]-[chunkhash].js',
    path: path.resolve('dist'),
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
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
          // TODO: 2 start
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          // TODO: 2 end
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: { 
              sourceMap: true,
              // https://webpack.js.org/loaders/sass-loader/#prependdata
              prependData: `
                @import '~css/_mixins/_mixin.scss';
                $DEV_MODE: ${DEV_MODE};
              `,
            },
          },
        ],
        include: path.resolve('src/css'),
      },
      {
        test: /\.pug$/,
        use:[
          { loader: 'html-loader' },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: DEV_MODE,
              data: {
                DEV_MODE,
                MY_DATA: 'webpack 傳過去的參數 milkmidi'
              }
            },
          }
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.pug',
      filename: 'index.html'
    }),
    // TODO: 3
    new MiniCssExtractPlugin({
      // Bug MiniCssExtractPlugin 還未完整支援 contenthash
      filename: DEV_MODE ? 'app.css' : 'app-[contenthash].css',
    }),
    ...DEV_MODE 
    ? []
    : [
      new OptimizeCSSAssetsPlugin(),
    ]
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    host: '0.0.0.0',
  },
};