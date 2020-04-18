console.log('---------------------------');
var message = 'hi index';
console.log(message);

// import xxx from './相對路徑'
// import xxx from './utils/es6/index.js'  // 後面.js可以不用打
// import xxx from './utils/es6/index'     // webpack 預設找index
// import xxx from './utils/es6'           // 可縮寫成這樣

// import {multiply} from './utils/es6'    // 就可以用 src/utils/es6/index.js 的 multiply
// console.log(multiply(2,2));

// import MyClass from './utils/es6'

// 上面兩個可以整合成這一行
// import MyClass, {multiply} from './utils/es6'



// TODO: 1 start
// /*
// es6
import { multiply, divide } from "./utils/es6";
import MyClass from './utils/es6';

// 以上兩行可以整合成一行
// import MyClass, { multiply, divide } from './utils/es6';

console.log("multiply(3, 3)", multiply(3, 3));
console.log("divide(9, 3)", divide(10, 3));

var my = new MyClass();
my.foo();
// TODO: 1 end
// */

var utils = require('./utils/commonjs')
utils.add(1,1)

// TODO: 2 start
/*
console.log('-------- commonjs --------');
// commonjs
var util = require("./util/commonjs");
console.log("add(1, 1)", util.add(1, 1));
console.log("subtract(2, 2)", util.subtract(2, 2));
// */
// TODO: 2 end
