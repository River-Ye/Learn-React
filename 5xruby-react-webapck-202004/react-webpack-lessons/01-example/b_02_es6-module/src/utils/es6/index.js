var message = 'hi es6 module';
console.log(message);


function privateFun(){
  console.log('this is privet function');
}

// TODO
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function multiply(a, b) {
  return a * b;
}

// TODO
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function divide(a, b) {
  return a / b;
}

class MyClass {
  foo(){
    console.log('foo');
  }
}

// TODO
export default MyClass;