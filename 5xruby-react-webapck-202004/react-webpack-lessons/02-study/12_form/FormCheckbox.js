class FormCheckbox extends React.Component {
  state = {
    checkbox: [
      { label: '學會React' , checked: true },
      { label: '學會Webpack' , checked: false },
      { label: '年薪百萬' , checked: false }
    ],
  }
  
  getValue() {
    /*
    return this.state.checkbox
      .filter( ({checked}) => checked)
      .map( ({label}) => label);
    */
    return this.state.checkbox
      .filter( ({checked}) => checked)
      .map( ({label}) => label);
  }

  checkboxChangeHandler = (e) => {
    /*
    var idx = e.target.getAttribute('data-index') / 1;
    var newCheckboxArr = this.state.checkbox.concat();
    newCheckboxArr[idx].checked = !newCheckboxArr[idx].checked;
    this.setState({ checkbox: newCheckboxArr });
    */
    var idx = e.target.getAttribute('data-index') / 1;
    var newCheckboxArr = this.state.checkbox.concat();
    newCheckboxArr[idx].checked = !newCheckboxArr[idx].checked;
    this.setState({ checkbox: newCheckboxArr });
  }
  render() {
    const { checkbox } = this.state;
    /*
    return (
      <section>
        <h4>FormCheckbox</h4>
        <p>{JSON.stringify(this.getValue())}</p>
        {
          checkbox.map(({label,checked},index) => {
            return (
              <label key={label}>
                <input
                  data-index={index}
                  type="checkbox"
                  value={label}
                  checked={checked}
                  onChange={this.checkboxChangeHandler}
                />{label}</label>
            )
          })
        }
      </section>
    );
    */
    return (
      <section>
        <h4>FormCheckbox</h4>
        <p>{JSON.stringify(this.getValue())}</p>
        {
          checkbox.map(({label,checked},index) => {
            return (
              <label key={label}>
                <input
                  data-index={index}
                  type="checkbox"
                  value={label}
                  checked={checked}
                  onChange={this.checkboxChangeHandler}
                />{label}</label>
            )
          })
        }
      </section>
    );
  }
}
