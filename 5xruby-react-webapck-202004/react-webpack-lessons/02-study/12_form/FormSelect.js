class FormSelect extends React.Component {
  state = { selectValue: '' }

  getValue() {
    /*
    return this.state.selectValue;
    */
  }

  selectChangeHandler = (e) => {
    // this.setState({ selectValue: e.target.value });
  }

  render() {
    const { selectValue } = this.state;
    /*
    return (
      <section>
        <h4>FormSelect</h4>
        <p>state.selectValue:{selectValue}</p>
        <select value={selectValue} onChange={this.selectChangeHandler}>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Angular">Angular</option>
        </select>
      </section>
    );
    */
  }
}
