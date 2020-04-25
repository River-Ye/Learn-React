// 試著關閉 console.log 的檢查
import 'css/app.scss';
import { add } from '@/utils';

// TODO 1
//* // 這裡有測試 eslint 的 code
// const abc = 10;
const test = function (a, b) {
  return a + b;
};
// 紅字代表 ESLINT 沒過
// 黃字代表 不能用匿名涵式 (可關閉這個條件)
test();
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
  // 一個 ! 表示: 會先過原本 loader 再過我剛指定的 loader；兩個 !! 表示: 完全不使用 webpack 設定擋，強制過我使用的 loader
}

// TODO 3
// 關閉其中一行 eslint
var ignoreESLintLine = 0; // eslint-disable-line

// TODO 4
// 關閉其中一段 eslint
/* eslint-disable */
var a = 0;
var b = 1;
/* eslint-enable */
