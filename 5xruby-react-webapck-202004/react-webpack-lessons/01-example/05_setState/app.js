class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = { count: 0 };
    // TODO: 1
    this.addCount = this.addCount.bind(this);
  }
  // TODO:1
  addCount() {
    // Wrong
    this.setState({
      count: this.state.count + 1,
    });
  }
  // TODO: 3
  /*
  addCount() {
    // Correct
    this.setState(function(state, props){
      return {
        count: state.count + 1
      );
    });
  }
  */
  render () {
    return (
      <div className="counter">
        <h1>Counter</h1>
        <div className="count">{this.state.count}</div>
        {/* TODO: 2 */}
        <button onClick={this.addCount}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
);