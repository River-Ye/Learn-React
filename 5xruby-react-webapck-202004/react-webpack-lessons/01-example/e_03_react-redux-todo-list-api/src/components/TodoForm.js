import React, { Component } from 'react';

interface Props {
  addItem: (text:string)=>void;
}

export default class TodoForm extends Component<Props> {
  inputRef = React.createRef()

  onSubmit =(e) => {
    e.preventDefault();
    const text = this.inputRef.current.value;
    if (text === '') {
      return;
    }
    this.inputRef.current.value = '';
    this.props.addItem(text);
  }

  render() {
    return (
      <section data-name="TodoForm">
        <form className="todo-form" onSubmit={this.onSubmit}>
          <input type="text" ref={this.inputRef} />
        </form>
      </section>
    );
  }
}
