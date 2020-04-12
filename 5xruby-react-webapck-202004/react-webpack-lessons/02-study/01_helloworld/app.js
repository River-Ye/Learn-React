// TODO: 1 start
/*
ReactDOM.render(
  <h1>Hello, world!!</h1>,
  document.getElementById('app')
);
*/
// TODO: 1 end

// JSX 語法，能塞兩個參數，語法及塞DIV底下，長得像HTML，但它不是
// 只能塞兩個東西，分別是JSX及DIV
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h2>Hello, world!</h2>
  </div>
  ,
  document.getElementById('app')
);
