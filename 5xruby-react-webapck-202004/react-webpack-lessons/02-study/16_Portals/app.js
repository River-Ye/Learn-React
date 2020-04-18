// https://reactjs.org/docs/portals.html
function MyPopup(props){
  // https://getbootstrap.com/docs/4.4/components/modal/
  return (
    <div className="card">
      <div className="card-header">
        <h2>Header</h2>
        <button type="button" className="close" onClick={props.onClose}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="card-body">Block</div>
      <div className="modal-footer"></div>
    </div>
  )
}

class App extends React.Component {
  state = { showModal: false }
  
  clickHandler = ()=> {
    this.setState({showModal : !this.state.showModal })
  }
  onCloseHandler = () => {
    this.setState({showModal:false});
  }
  
  createModal(){
    // TODO
    /*
    return (
      <Modal onClose={this.onCloseHandler}>
        <MyPopup onClose={this.onCloseHandler} />
      </Modal>
    )
    */
   return (
     <Modal onClose={this.onCloseHandler}>
       <MyPopup onClose={this.onCloseHandler} />
     </Modal>
   )
  }
  render() {
    var { showModal } = this.state;
    var modal = showModal ? this.createModal() : null;
    return (
      <div className="app container">
        <h1>hi</h1>
        <button onClick={this.clickHandler}>showModal</button>
        {modal}
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);