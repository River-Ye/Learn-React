class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = { count: 0 };
    
    // TODO 2
    // this.addCount = this.addCount.bind(this);
    // this.addCountCorrect = this.addCountCorrect.bind(this);
    // 天生JS指向問題，bind是大無敵的選項
    this.addCount = this.addCount.bind(this);
    this.addCountCorrect = this.addCountCorrect.bind(this);
  }
  // TODO 1
  addCount() {
    // React寫法錯誤 JS正確
    // this.state.count += 1;
    // console.log(this.state.count);

    // Wrong
    /* this.setState({
      count: this.state.count + 1,
    }); */

    // 正確寫法
    // setState 非同步函式
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }
  // TODO: 3
  //*
  addCountCorrect() {
    // Correct
    /* this.setState(function(state, props){
      return {
        count: state.count + 1
      };
    }); */
    // 取得目前的 state 和 props
    this.setState(function(state, props){
      return {
        count: state.count + 1
      };
    });
    this.setState(function(state, props){
      return {
        count: state.count + 1
      };
    });
  }
  //*/
  render () {
    return (
      <div className="counter">
        <div className="count">{this.state.count}</div>
        <div>
          {/* TODO 2 */}
          {/* <button onClick={this.addCount}>+1</button> */}
          <button onClick={this.addCount}>+1</button>
        </div>
        <div>
          {/* TODO 2 */}
          {/* <button onClick={this.addCountCorrect}>+1 addCountCorrect</button> */}
          <button onClick={this.addCountCorrect}>+1 addCountCorrect</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
);