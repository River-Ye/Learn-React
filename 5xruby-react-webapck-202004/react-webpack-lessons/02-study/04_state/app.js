class Counter extends React.Component {
  constructor(props){
    super(props);
    // TODO: 1
    // this.state = { count: 0 };
    this.state = { count: props.initCount };
  }
  render () {
    // TODO: 2 start
    /*
    return (
      <div className="counter">
        <h1>Counter</h1>
        <div className="count">{this.state.count}</div>
      </div>
    );
    */
   return (
     <div className="counter">
       <h1>Counter</h1>
       <div className="count">{this.state.count}</div>
     </div>
   )
    // TODO: 2 end
  }
}

ReactDOM.render(
  <div>
    <Counter initCount={0}/>
    <Counter initCount={1}/>
    {/* <Counter initCount="0"/>  錯誤寫法，形別*/}
  </div>,
  document.getElementById('app')
);