import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './index';

/*
const customAction = (e) => {
  const { checked, value } = e.target;
  action('onChange')(`${checked},${value}`);
};

storiesOf('Checkbox', module)
  .add('basic', () => (
    <Checkbox value="react" text="Hello Checkbox" onChange={customAction} />
  ))
  .add('multi', () => (
    <div>
      <Checkbox value="react" text="Storybook" onChange={customAction} />
      <Checkbox value="es6" text="es6" onChange={customAction} />
    </div>
  ))
  .add('disabled', () => (
    <Checkbox disabled value="react" text="disabled" onChange={customAction} />
  ));
*/