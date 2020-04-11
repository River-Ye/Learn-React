class App extends React.Component {
  // TODO: 1 start
  /*
  state = { isShowClock: true }
  clickHandler = ()=>{
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }
  */
  // TODO: 1 end
  render(){
    // TODO: 2 start
    /*
    const { isShowClock } = this.state;
    return (
      <div className="app">
        <button onClick={this.clickHandler}>switch Clock</button>
        {isShowClock && <Clock />}
      </div>
    )
    */
    // TODO: 2 end
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);