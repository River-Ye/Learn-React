class Clock extends React.Component {
  state = { count: 0 }

  componentDidMount() {
    console.log('componentDidMount');
    /*
    this.timeId = setInterval(() => {
      console.log('interval');
      this.setState((state) => {
        return {
          count: state.count + 1
        }
      });
    }, 1000);
    */
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timeId);
  }
  render(){
    return (
      <div className="my-component">
        <h2>state.count: {this.state.count}</h2>
      </div>
    )
  }
}