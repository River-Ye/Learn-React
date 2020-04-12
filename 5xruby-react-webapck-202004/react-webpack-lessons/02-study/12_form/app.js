class App extends React.Component {
  // TODO: 1 start
  /*
  state = {
    warningMessage: '',
    loading: false,
  };
  refInput = React.createRef();
  refRadio = React.createRef();
  refSelect = React.createRef();
  refCheckbox = React.createRef();
  */
  state = {
    warningMessage: '',
    loading: false,
  };
  refInput = React.createRef();
  refRadio = React.createRef();
  refSelect = React.createRef();
  refCheckbox = React.createRef();
  // TODO: 1 end

  componentDidMount(){
    console.log("123");
  }

  // TODO: 2 start
  submitHandler = (e) => {
    /*
    e.preventDefault();
    const formInput = this.refInput.current.getValue();
    const formSelect = this.refSelect.current.getValue();
    const formRadio = this.refRadio.current.getValue();
    const formCheckbox = this.refCheckbox.current.getValue();
    console.log('formInput', formInput);
    console.log('formSelect', formSelect);
    console.log('formRadio', formRadio);
    console.log('formCheckbox', formCheckbox);
    const errorMSG = [];
    if (!formInput) {
      errorMSG.push('請輸入姓名');
    }
    if (!formSelect) {
      errorMSG.push('請選擇地區');
    }
    if (!formRadio) {
      errorMSG.push('請選擇性別');
    }
    if (formCheckbox.length === 0) {
      errorMSG.push('請選擇Checkbox');
    }
    if (errorMSG.length > 0) {
      this.setState({ warningMessage: errorMSG.toString() });
      return;
    }
    this.setState({
      loading: true,
      warningMessage: '',
    });
    // 模擬 http POST
    setTimeout(() => {
      this.setState({ loading: false });
      console.log('POST Success');
    }, 3000);
    */
    e.preventDefault();
    const formInput = this.refInput.current.getValue();
    const formSelect = this.refSelect.current.getValue();
    const formRadio = this.refRadio.current.getValue();
    const formCheckbox = this.refCheckbox.current.getValue();
    console.log('formInput', formInput);
    console.log('formSelect', formSelect);
    console.log('formRadio', formRadio);
    console.log('formCheckbox', formCheckbox);
    const errorMSG = [];
    if (!formInput) {
      errorMSG.push('請輸入姓名');
    }
    if (!formSelect) {
      errorMSG.push('請選擇地區');
    }
    if (!formRadio) {
      errorMSG.push('請選擇性別');
    }
    if (formCheckbox.length === 0) {
      errorMSG.push('請選擇Checkbox');
    }
    if (errorMSG.length > 0) {
      this.setState({ warningMessage: errorMSG.toString() });
      return;
    }
    this.setState({
      loading: true,
      warningMessage: '',
    });
    // 模擬 http POST
    setTimeout(() => {
      this.setState({ loading: false });
      console.log('POST Success');
    }, 3000);
  }
  // TODO: 2 end

  render () {
    // TODO: 3 start
    const { loading, warningMessage } = this.state;
    /*
    return (
      <div className="app">
        <div style={{ color: 'red' }}>{warningMessage}</div>
        <div className={loading ? "my-form loading" : 'my-form'}>
          <form onSubmit={this.submitHandler}>
            <FormInput ref={this.refInput} />
            <FormRadio ref={this.refRadio}/>
            <FormSelect ref={this.refSelect}/>
            <FormCheckbox ref={this.refCheckbox}/>
            <div className="block">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
    */
    return (
      <div className="app">
        <div style={{ color: 'red' }}>{warningMessage}</div>
        <div className={loading ? "my-form loading" : 'my-form'}>
          <form onSubmit={this.submitHandler}>
            {/* ref 可以掛在 component */}
            <FormInput ref={this.refInput} />
            <FormRadio ref={this.refRadio}/>
            <FormSelect ref={this.refSelect}/>
            <FormCheckbox ref={this.refCheckbox}/>
            <div className="block">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
    // TODO: 3 end
  };
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
