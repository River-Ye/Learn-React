const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // 為何不直接塞 state，自訂變數不需要被data更改時，可用自訂的，有需要被變動才用 state
    this.el = document.createElement('div');
  }

  // 滑鼠事件會有氣泡流
  modalClickHandler = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    // TODO 1
    /*  
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
    // */
    if (e.target === e.currentTarget){
      this.props.onClose();
    }
  }

  keydownHandler =(e)=>{
    // TODO 2
    /*
    if(e.keyCode === 27){ // ESC
      this.props.onClose();
    }
    // */
    if(e.keyCode === 27){ // ESC
      this.props.onClose();
    }
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    // TODO 2
    // window.addEventListener('keydown', this.keydownHandler);
    window.addEventListener('keydown', this.keydownHandler);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    // TODO 2
    // window.removeEventListener('keydown', this.keydownHandler);
    window.removeEventListener('keydown', this.keydownHandler);
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