// TODO: 1 start
function UserGreeting({name="default"}){
  return <h1>{name}登入成功</h1>
}
const GuestGreeting = ()=> (<h1>Please sign up.</h1>);
// TODO: 1 end

class App extends React.Component {
  // TODO: 2 start
  state = { isLoggedIn: false }
  clickHandler = () =>{
    this.setState((state) => {
      return {
        isLoggedIn: !state.isLoggedIn
      }
    });
  }
  // TODO: 2 end
  render(){
    // TODO: 3 start
    const { isLoggedIn } = this.state;
    return (
      <div className="app">
        <button onClick={this.clickHandler}>{isLoggedIn? '登出' : '登入'}</button>
        {isLoggedIn ? <UserGreeting />: <GuestGreeting />}
        {isLoggedIn && <UserGreeting name="milkmidi" />}
      </div>
    )
    // TODO: 3 end
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);