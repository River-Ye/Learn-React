import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TodoClear({ count, onClear }) {
  const btnClassNames = classnames('btn btn-danger', {
    disabled: count === 0,
  });
  return (
    <section data-name="TodoClear">
      <span className="mr-3">
        Count:
        {count}
      </span>
      <button className={btnClassNames} onClick={onClear}>Clear</button>
    </section>
  );
}

TodoClear.propTypes = {
  count: PropTypes.number.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default TodoClear;
