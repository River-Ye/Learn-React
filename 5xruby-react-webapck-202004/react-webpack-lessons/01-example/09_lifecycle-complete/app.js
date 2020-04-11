class LifecycleExample extends React.Component {
  // TODO: 1 start
  constructor(props){
    super(props);
    this.state = { is5xCount: props.count };
    console.log('%c-----constructor', 'background: #222; color: white;');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('%cstatic getDerivedStateFromProps', 'background: #f1c40f; color: black;', nextProps, prevState);
    if (nextProps.count % 5 === 0) {
      return {
        is5xCount: prevState.is5xCount + 1
      }
    }
  }
  componentDidMount() {
    console.log('%ccomponentDidMount', 'background: #27ae60; color: white;');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cshouldComponentUpdate', 'background: #9b59b6; color: white;', nextProps, nextState);
    return true;
  }
  componentDidUpdate(prevProps) {
    console.log('%ccomponentDidUpdate', 'background: #2c3e50; color: white;', prevProps);
  }
  componentWillUnmount(){
    console.log('%ccomponentWillUnmount', 'background: #3498db; color: white;');
  }
  render(){
    console.log('%crender', 'background: #c0392b; color: white;');
    const { count } = this.props;
    const { is5xCount } = this.state;
    return (
      <div className="component">
        <p>LifecycleExample</p>
        <p>props.count:<span className="highlight">{count}</span></p>
        <p>state.is5xCount:<span className="highlight">{is5xCount}</span></p>
      </div>
    )
  }
  // TODO: 1 end
}

class App extends React.Component {
  state = { 
    isShow: true,
    count: 0
  }
  clickHandler = ()=>{
    this.setState((state) => {
      return {
        isShow: !state.isShow
      };
    })
  }
  addCount = () => {
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    });
  }
  render(){
    const { isShow, count } = this.state;
    return (
      <div className="app">
        <button onClick={this.clickHandler}>switch Clock</button>
        <button onClick={this.addCount}>add</button>
        {isShow && <LifecycleExample count={count} />}
      </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);