// 試著關閉 console.log 的檢查
import 'css/app.scss';
import { add } from '@/utils';

// TODO 1
/* // 這裡有測試 eslint 的 code
var abc=10
var test = function(a,b ){
return a+b
}
// */

$(() => {
  console.log('hi jQuery Ready');
});
console.log(add(1, 1));


if (process.env.NODE_ENV === 'development') {
  // 二個 !! 是不理 webpack.config.js 裡 rule 的 loader 設定
  // https://webpack.js.org/concepts/loaders/
  // TODO 2
  // eslint-disable-next-line
  require('!!raw-loader!../src/html/index.pug');
}

// TODO 3
var ignoreESLintLine = 0; // eslint-disable-line

// TODO 4
/* eslint-disable */
var a = 0;
var b = 1;
/* eslint-enable */
