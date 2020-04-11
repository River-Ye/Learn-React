class FormInput extends React.Component {
  state = { name: '' }
  
  getValue() {
    /*
    return this.state.name;
    */
  }


  inputChangeHandler = (e) => {
    // this.setState({ name: e.target.value });
  }

  render() {
    /*
    const { name } = this.state;
    return (
      <section>
        <h4>FormInput</h4>
        <p>state.name:{name}</p>
        <input 
          type="text"
          value={name}
          onChange={this.inputChangeHandler} />
      </section>
    );
    */
  }
}
