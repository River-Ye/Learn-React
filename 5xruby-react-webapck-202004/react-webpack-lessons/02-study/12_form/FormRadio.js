class FormRadio extends React.Component {
  state = { gender: '' }

  getValue() {
    /*
    return this.state.gender;
    */
    return this.state.gender;
  }

  radioChangeHandler = (e) => {
    // this.setState({ gender: e.target.value });
    this.setState({ gender: e.target.value });
  }

  render() {
    const { gender } = this.state;
    /*
    return (
      <section>
        <h4>FormRadio</h4>
        <p>{gender}</p>
        <label>
          <input
            name="gender"
            checked={gender === '1'}
            type="radio"
            value="1"
            onChange={this.radioChangeHandler} />男</label>
        <label>
          <input
            name="gender"
            checked={gender === '0'}
            type="radio"
            value="0"
            onChange={this.radioChangeHandler} />女</label>
      </section>
    );
    */
    return (
      <section>
        <h4>FormRadio</h4>
        <p>{gender}</p>
        <label>
          <input
            name="gender"
            checked={gender === '1'}
            type="radio"
            value="1"
            onChange={this.radioChangeHandler} />男</label>
        <label>
          <input
            name="gender"
            checked={gender === '0'}
            type="radio"
            value="0"
            onChange={this.radioChangeHandler} />女</label>
      </section>
    );
  }
}
