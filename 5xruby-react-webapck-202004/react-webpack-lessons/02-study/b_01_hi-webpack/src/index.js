console.log('------------------------------ 9527 ');

class WebpackClass{
  constructor(){
    console.log('WebpackClass constructor');
  }
  foo(){
    console.log('foo');
  }
}
const message = 'hi webpack';
console.log(message);

var o = {name:'milkmidi'};
var o2= {
  ...o,
  age: 18
}

(()=>{
  console.log(9527);
})();

var r = new WebpackClass();
r.foo();