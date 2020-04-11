import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover{
    background: black;
  }
`;


const StyledLink = styled(Button)`
  color: green;
  font-weight: bold;
  display: block;
  background: red;
  `;


const Example = () => (
  <section>
    <Button>Unstyled, boring Link</Button>
    <StyledLink href="http://5xruby.tw">milkmidi</StyledLink>
  </section>
);

export default Example;
