/**
 * Example story for styling a button.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@jupyterlab/ui-components';

import '@jupyterlab/application/style/index.css';
import '@jupyterlab/theme-light-extension/style/index.css';

const textButton = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

const emojiButton = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

storiesOf('JupyterLab', module)
  .add('textButton', textButton);

storiesOf('JupyterLab', module)
  .add('emojiButton', emojiButton);
