class ParentComponent extends React.Component {
  state = {
    count: 0,
    date: ''
  }
  componentDidMount(){
    /*
    this.intervalId = setInterval(() => {
      this.setState((state) => {
        return { count: state.count + 1 }
      });
    }, 1000);
    */
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  onCallParent = (date)=>{
    /*
    this.setState({ date: date })
    console.log('onCallParent',date);
    */
  }
  render () {
    const { count,date } = this.state;
    /*
    return (
      <div className="parent-component">
        <h1>ParentComponent</h1>
        <p>state.count:{count}</p>
        <p>state.date:{date}</p>
        <ChildComponent 
          count={count}
          onCallParent={this.onCallParent}/>
      </div>
    );
    */
  };
}
