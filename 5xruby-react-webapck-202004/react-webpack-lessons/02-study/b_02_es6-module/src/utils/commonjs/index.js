var message = 'hi commonjs';
console.log(message);

// CommonJS
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function subtract(a, b) {
  return a - b;
}

// TODO
// Node.js 支援 module.exports
// 用 commonjs 是因為ES6風格做不到，要寫 commonjs 才做得到
// 優先權先寫 ES6
// /* 
module.exports = {
  add,
  subtract,
}; 
// */