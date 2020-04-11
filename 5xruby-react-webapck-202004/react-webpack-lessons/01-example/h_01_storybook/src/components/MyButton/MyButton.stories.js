import React from 'react';
import { action } from '@storybook/addon-actions';
import MyButton from './index';

export default { title: 'MyButton' };

export const basic = () => <MyButton onClick={action('clicked')}>Hello Button</MyButton>;

export const rounded = () => (
  <MyButton rounded onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></MyButton>
);
