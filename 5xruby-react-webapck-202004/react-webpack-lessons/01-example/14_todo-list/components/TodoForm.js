class TodoForm extends React.Component {
  inputRef = React.createRef();
  onSubmit = (e)=> {
    e.preventDefault();
    var text = this.inputRef.current.value;
    this.inputRef.current.value = '';
    this.props.addItem(text);
  }
  render () {
    return (
      <section class="style-1" data-name="TodoForm.js">
        <form className="todo-form" onSubmit={this.onSubmit}>
          <input type="text" ref={this.inputRef} />
        </form>
      </section>
    );
  }
};
