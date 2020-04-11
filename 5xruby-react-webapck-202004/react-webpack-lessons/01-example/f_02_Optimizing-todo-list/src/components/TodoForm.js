import React from 'react';
import PropTypes from 'prop-types';

export default class TodoForm extends React.Component {
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
      <section>
        <form className="todo-form" onSubmit={this.onSubmit}>
          <h3>TodoFom.js</h3>
          <input type="text" ref={this.inputRef} />
        </form>
      </section>
    );
  }
}
TodoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};
