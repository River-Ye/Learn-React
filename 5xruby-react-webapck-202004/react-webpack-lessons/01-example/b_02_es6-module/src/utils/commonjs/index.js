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
module.exports = {
  add,
  subtract,
};