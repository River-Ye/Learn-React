class Counter extends React.Component {
  constructor(props){
    super(props);
    // TODO: 1 start
    /*
    this.state = { count: 0 }
    this.handleClickBinding = this.handleClickBinding.bind(this);
    this.innerFunction = () => {
      console.log('innerFunction', this); 
    }
    */
    // TODO: 1 end
  }
  // TODO: 2 start
  /*
  handleClickNoBinding(e){
    console.log('handleClickNoBinding', this);
  }
  handleClickBinding() {
    console.log('handleClickBinding', this);
  }
  handleClickClassFieldsSyntax = () => {
    console.log('handleClickClassFieldsSyntax', this);
  }
  */
  // TODO: 2 end
  render () {
    return (
      <div className="counter">
        <h1>Counter</h1>
        <div className="count">{this.state.count}</div>
        <button className="btn btn-danger" onClick={this.handleClickNoBinding}>no binding (Error)</button>
        <button className="btn btn-warning" onClick={(e)=> this.handleClickNoBinding(e)}>arrow function (Not Good)</button>
        <button className="btn btn-info" onClick={this.handleClickBinding}>binding (Good)</button>
        <button className="btn btn-warning" onClick={this.innerFunction}>innerFunction (Not Good)</button>
        <button className="btn btn-primary" onClick={this.handleClickClassFieldsSyntax}>fields syntax (Better)</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('app')
);