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

MyCount.propTypes = { // 官方邊準寫法，定義型別
  count: PropTypes.number.isRequired,
};

export default MyCount;
