import React from 'react';
import {storiesOf} from '@storybook/react';

import TransformVDOM from "@nteract/transform-vdom";

const vdom = () => (
  <TransformVDOM
    data={{ key: '', tagName: "div", attributes: { style: { color: "white" } },
      children: [
        { key: '', tagName: "h1", attributes: {}, children: "DATALAYER" },
        { key: '', tagName: "img", attributes: { src: "https://dsp.docs.datalayer.io/logo/datalayer-25.svg" }, children: [] }
      ]
    }}
  />
);

storiesOf('Nteract', module)
  .add('vdom', vdom);
