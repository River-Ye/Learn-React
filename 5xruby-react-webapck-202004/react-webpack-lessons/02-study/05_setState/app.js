class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = { count: 0 };
    
    // TODO 2
    // this.addCount = this.addCount.bind(this);
    // this.addCountCorrect = this.addCountCorrect.bind(this);
  }
  // TODO 1
  addCount() {
    // Wrong
    /* this.setState({
      count: this.state.count + 1,
    }); */
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
  }
  //*/
  render () {
    return (
      <div className="counter">
        <div className="count">{this.state.count}</div>
        <div>
          {/* TODO 2 */}
          {/* <button onClick={this.addCount}>+1</button> */}
        </div>
        <div>
          {/* TODO 2 */}
          {/* <button onClick={this.addCountCorrect}>+1 addCountCorrect</button> */}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
);