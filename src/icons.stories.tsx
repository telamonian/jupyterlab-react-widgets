/**
 * Example story for styling an icon.
 */
// need this to avoid
// TS2686: 'React' refers to a UMD global, but the current file is a module.
import React from 'react';
import {storiesOf} from '@storybook/react';

import { DefaultIconReact } from '@jupyterlab/ui-components';

import '@jupyterlab/application/style/index.css';
import '@jupyterlab/theme-light-extension/style/index.css';

const buildIcon = () => ( 
  <DefaultIconReact name={'build'} />
)

const html5Icon = () => (
  <div className={'foobar'}>
    <DefaultIconReact name={'html5'} kind={'launcherSection'} center={true} />
  </div>
);

storiesOf('Icons', module)
  .add('buildIcon', buildIcon);

storiesOf('Icons', module)
  .add('html5Icon', html5Icon);
