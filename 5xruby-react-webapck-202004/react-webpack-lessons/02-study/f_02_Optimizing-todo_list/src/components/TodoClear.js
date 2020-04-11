/* eslint react/prefer-stateless-function:0, react/jsx-one-expression-per-line:0 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default class TodoClear extends React.Component {
  render() {
    const btnClassNames = classnames('btn btn-danger', {
      disabled: this.props.count === 0,
    });
    return (
      <section>
        <h3>TodoClear.js</h3>
        <span className="mr-3">Count:{this.props.count}</span>
        <button className={btnClassNames} onClick={this.props.onClear}>Clear</button>
      </section>
    );
  }
}


TodoClear.propTypes = {
  count: PropTypes.number.isRequired,
  onClear: PropTypes.func.isRequired,
};
