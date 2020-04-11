import React from 'react';
import PropTypes from 'prop-types';


const TodoItem = (props) => {
  const {
    id, done, toggleItem, children,
  } = props;
  let className = 'todo-item';
  if (done) {
    className += ' done';
  }
  return (
    <div className="debug" data-name="TodoItem">
      <li className={className} onClick={() => toggleItem(id)}>
        {children}
        {/* 實作 Delete */}
        <button className="todo-item__btn btn btn-info">X</button>
      </li>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  toggleItem: PropTypes.func.isRequired,
};
export default TodoItem;
