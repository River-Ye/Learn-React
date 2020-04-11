class RefExampleComponent extends React.Component {
  // TODO: 1 start
  /*
  state = { showInput: false }
  refInput = React.createRef();
  */

  clickWrongHandler = () =>{
    /*
    this.setState({
      showInput: true
    });
    console.log(this.refInput.current);
    */
  }

  clickHandler = () =>{
    /*
    this.setState({
      showInput: true
    }, () => {
      console.log(this.refInput.current);
      this.refInput.current.focus();
    });
    */
  }
  // TODO: 1 end
  render () {
    /*
    return (
      <div className="ref-example-component">
        <section>
          <button onClick={this.clickWrongHandler}>show input wrong code</button>
          <button onClick={this.clickHandler}>show input</button>
          {
            this.state.showInput && <input ref={this.refInput} />
          }
        </section>
      </div>
    );
    */
  };
}


ReactDOM.render(
  <RefExampleComponent />,
  document.getElementById('app')
);
