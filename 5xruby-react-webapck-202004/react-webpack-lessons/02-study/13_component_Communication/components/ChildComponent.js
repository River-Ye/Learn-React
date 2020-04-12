class ChildComponent extends React.Component {
  onClick =() =>{
    // this.props.onCallParent(new Date().toString());
    this.props.onCallParent(new Date().toString());
  }
  render() {
    return (
      <div className="child-component">
        <h3>ChildComponent</h3>
        <p>props.count:{this.props.count}</p>
        <button onClick={this.onClick}>call Parent</button>
      </div>
    );
  }
}
