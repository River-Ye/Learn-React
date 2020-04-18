var message = 'hi es6 module';
console.log(message);


function privateFun(){
  console.log('this is privet function');
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// TODO
// /*
// export 是 webpack 語法，不是原生 JS 語法
export function multiply(a, b) {
  return a * b;
} 
// */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// TODO
// /*
export function divide(a, b) {
  return a / b;
} 
// */

// TODO
// /*
class MyClass {
  foo(){
    console.log('foo');
  }
} 
// */

// TODO
// 一支 JS 檔，只能有一個 export default，但可以有很多 export
// 優先權通常先使用 export default
// 有其他小功能要給別人使用，才會用 export (不相干的會用這個)
export default MyClass;