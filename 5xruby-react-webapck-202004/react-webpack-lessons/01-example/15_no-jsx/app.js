// https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAECCAO9oFMAeAXZA7AJjASsmMOgHQDCA9gLbyVbbrQDeAUNNBOmJtALwt2HaMEoBXLOgBcABiEBfIaACWwANYAJMLhDIATgAoAlGw6KOK9bD17KAdwBiEksvpad-_tGN8AfKeF0AAtlCFIIZHQAZW5MAwDhEXFJKQBGOUT5IwUhPWwcfWME6Dz0MT0sbyFEgB4cZQA3EXAoADkwamQ-ACJqAE8AWlFaekZu32rE6BqAIzF0dHpoenIQVTU-ZmDQ0ktNbRxdPXlfACF5xawagHo5hfoJqeFZi6WVtfVN7bC961tHZzoVxYdyHfQnc73LAAJhud0ujye0yCqX833CsWQu2S6HkNxRiNq13qDUJ0GyZlYilYhGI6AAIgB5ACypDyuEKQhqCCQ118ABohDhKMAxJ1JKQAOaRACiunF6FOfQAkjgDAByMCIdXZIwAbiAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2017%2Creact&prettier=false&targets=&version=7.8.7&externalPlugins=%40babel%2Fplugin-proposal-class-properties%407.5.5

/* 
class App extends React.Component {
  state = {
    count:0
  }
  clickHandler(){
  }
  clickArrowFunctionHandler = ()=>{
    this.setState({
      count:10
    })
  }
  render(){
    return (
      <div className="my-component">
        <button onClick={this.clickHandler}>Button</button>
        <button onClick={this.clickArrowFunctionHandler}>Button2</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.clickArrowFunctionHandler = () => {
      console.log(this);
      this.setState({
        count: 10
      })
    }
  }
  clickHandler() {
    console.log(this);
  }
  render() {
    return React.createElement("div", { className: "my-component" }, 
      React.createElement("button", { 
        onClick: this.clickHandler
      }, "Button"), 
      React.createElement("button", {
        onClick: this.clickArrowFunctionHandler
      }, "Button2"), 
      React.createElement("h1", null, this.state.count)
    );
  }
}


/* ReactDOM.render(
  <App />,
  document.getElementById('app')
); */
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
);