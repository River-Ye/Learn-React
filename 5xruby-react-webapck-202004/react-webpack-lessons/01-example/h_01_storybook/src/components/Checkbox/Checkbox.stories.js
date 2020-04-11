import React from 'react';

import { action } from '@storybook/addon-actions';

import Checkbox from './index';


export default { title: 'Checkbox' };

const customAction = (e) => {
  const { checked, value } = e.target;
  action('onChange')(`${checked},${value}`);
};


export function basic() {
  return <Checkbox value="react" text="Hello Checkbox" onChange={customAction} />;
}
export function multi() {
  return (
    <>
      <Checkbox value="react" text="Storybook" onChange={customAction} />
      <Checkbox value="es6" text="es6" onChange={customAction} />
    </>
  );
}
export function disabled() {
  return (
    <Checkbox disabled value="react" text="disabled" onChange={customAction} />
  );
}
