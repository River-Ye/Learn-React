const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  modalClickHandler = (e) => {
    // TODO 1
    /*  
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
    // */
  }

  keydownHandler =(e)=>{
    // TODO 2
    /*
    if(e.keyCode === 27){ // ESC
      this.props.onClose();
    }
    // */
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    // TODO 2
    // window.addEventListener('keydown', this.keydownHandler);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    // TODO 2
    // window.removeEventListener('keydown', this.keydownHandler);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal d-block" onClick={this.modalClickHandler}>
        <div className="modal-dialog">
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>,
      this.el
    );
  }
}