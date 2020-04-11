import React from 'react';
import PropTypes from 'prop-types';

function MyCount(props) {
  return (
    <section>
      <h3>MyCount</h3>
      Count: {props.count}
    </section>
  );
}

MyCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default MyCount;
