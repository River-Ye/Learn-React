import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MyButton from './index';


storiesOf('MyButton', module)
  .add('basic', () => (
    <MyButton onClick={action('clicked')}>
      Hello Button
    </MyButton>
  ))
  .add('rounded', () => (
    <MyButton rounded onClick={action('clicked')}>
      Hello Button
    </MyButton>
  ));
