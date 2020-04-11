import React from 'react';
import styled, { css } from 'styled-components';


const PrimaryButton = styled.button`
  background: white;
  color: palevioletred;
  padding: 1em;
  font-size: 1em;
  border-radius: 3px;
  margin: 0 1em;
  border: 2px solid palevioletred;
  ${props => props.primary && css`
    background: green;
    color: blue;
    border: 4px solid red;
  `}
`;

const Example = () => (
  <section>
    <PrimaryButton>A</PrimaryButton>
    <PrimaryButton primary>B</PrimaryButton>
  </section>
);

export default Example;
