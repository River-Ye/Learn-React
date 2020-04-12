class FormInput extends React.Component {
  state = { name: '', email: '' }
  
  getValue() {
    /*
    return this.state.name;
    */
    return this.state.name;
  }


  inputChangeHandler = (e) => {
    // this.setState({ name: e.target.value });
    // this.setState({ name: e.target.value });
    console.log(e.target.name);
    var key = e.target.name;
    this.setState({ [key]: e.target.value });
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
  }
}
