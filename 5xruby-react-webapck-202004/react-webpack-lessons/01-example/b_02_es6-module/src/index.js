console.log('---------------------------');
var message = 'hi index';
console.log(message);

// TODO: 1 start
//*
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
//*/


// TODO: 2 start
//*
console.log('-------- commonjs --------');
// commonjs
var util = require("./util/commonjs");
console.log("add(1, 1)", util.add(1, 1));
console.log("subtract(2, 2)", util.subtract(2, 2));
//*/
// TODO: 2 end
