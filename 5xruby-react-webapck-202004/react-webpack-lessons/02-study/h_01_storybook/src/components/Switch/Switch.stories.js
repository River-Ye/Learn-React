import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Switch from '.';

storiesOf('Switch', module)
  .add('basic', () => (
    <Switch onChange={action('onChange')} />
  )).add('checked', () => (
    <Switch checked onChange={action('onChange')} />
  ));
