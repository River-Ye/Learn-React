if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('!!raw-loader!../src/html/index.pug');
}

console.log(1);
console.log(2);
console.log(3);