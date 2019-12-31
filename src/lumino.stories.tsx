import React from 'react'
import {storiesOf} from '@storybook/react';

import Cmp from './Cmp';
import Dock from './Dock';
import DockWidget from './DockWidget';

import HelloOne from './HelloOne';

const cmp = () => (
  <Cmp render={() => (<div><HelloOne/></div>)} />
);

const dock = () => (
  <Dock>
    <div>Hello</div>
    <HelloOne/>
  </Dock>
);

const dockWidget = () => (
  <DockWidget />
);

storiesOf('Lumino', module)
  .add('cmp', cmp);

storiesOf('Lumino', module)
  .add('dock', dock);

storiesOf('Lumino', module)
  .add('dockWidget', dockWidget);
