import React from 'react';
import PropTypes from 'prop-types';

function MyCountButton(props) {
  return (
    <section>
      <h3>MyCountButton</h3>
      Count: {props.count}
      <button onClick={props.onIncrease}>+</button>
      <button onClick={props.onDecrease}>-</button>
    </section>
  );
}

MyCountButton.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default MyCountButton;
