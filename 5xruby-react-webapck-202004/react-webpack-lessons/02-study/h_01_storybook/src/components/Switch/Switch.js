import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
    &:before {
      border-radius: 50%;
      position: absolute;
      content: '';
      width: 26px;
      height: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }
  }
  input:checked + span {
    background-color: #2196F3;
    &:before{
      transform: translateX(26px);
    }
  }
  input:focus + span{
    box-shadow: 0 0 1px #2196F3;
  }
`;

export default class Switch extends React.PureComponent {
  state = {
    checked: !!this.props.checked,
  };

  inputChangeHandler = (e) => {
    this.setState({
      checked: e.target.checked,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.checked);
      }
    });
  }

  render() {
    const { checked } = this.state;
    return (
      <StyledSwitch>
        <input
          type="checkbox"
          checked={checked}
          onChange={this.inputChangeHandler}
        />
        <span />
      </StyledSwitch>
    );
  }
}
Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
