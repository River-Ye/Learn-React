// TODO: 1 start
/*
// JS 的 class 是假的，不是標準的物件導向程式語言
// 常數命名全大寫英文命名
// React class、component 第一個字母要大寫(不成文規定，否則無法運作)
class MyComponent extends React.Component {
  render() {
    return (
      <div className="my-component">
        這是ReactComponent組件
      </div>
    );
  }
}
*/
class MyComponent extends React.Component {
  render() {
    return (
      <div className="my-component">
        這是ReactComponent組件
      </div>
    )
  }
}
// TODO: 1 end

// TODO: 2 start
/*
function FunctionalComponent(){
  return (
    <div className="functional-component">
      這是functionalComponent組件
      <br/>
      今天日期：
      {
        new Date().toDateString()
      }
    </div>
  )
}
*/
function FunctionalComponent(){
  return (
    <div className="functional-component">
      這是functionalComponent組件
      <br/>
      今天日期：
      {
        new Date().toDateString()
      }
    </div>
  )
}
// TODO: 2 end

// TODO:3 start
/*
ReactDOM.render(
  <div>
    <MyComponent />
    <FunctionalComponent />
  </div>
  ,
  document.getElementById('app')
);
*/
ReactDOM.render(
  <div>
    <MyComponent />
    <FunctionalComponent />
  </div>
  ,
  document.getElementById('app')
)
// TODO:3 end