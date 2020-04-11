import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  border: 3px solid;
  padding: 10px 20px;
  margin-right: 5px;
  background-color: white;
  outline: none;
  color: #42b983
  border-color: #42b983
  &:hover{
    background-color: #dddddd;
  }
  ${props => props.rounded && css`
    border-radius: 20px !important;
  `}
`;

export default function MyButton(props) {
  const {
    onClick, children, rounded,
  } = props;
  return (
    <StyledButton
      type="button"
      rounded={rounded}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
