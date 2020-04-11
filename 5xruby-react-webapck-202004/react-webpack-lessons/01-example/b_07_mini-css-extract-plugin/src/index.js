import 'css/app.scss';
console.log('-------- app.js ---------');
console.log(process.env.NODE_ENV);
document.getElementById('info').innerHTML = Math.random();
if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV development');
} else {
  console.log('NODE_ENV production');
}

// 讓 pug 更新時會能 live reload 
if (process.env.NODE_ENV === 'development') {
  // 二個 !! 是不理 webpack.config.js 裡 rule 的 loader 設定
  // https://webpack.js.org/concepts/loaders/
  require('!!raw-loader!../src/html/index.pug');
}
