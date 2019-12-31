[![Datalayer](https://dsp.docs.datalayer.io/logo/datalayer-25.svg)](https://datalayer.io)

# [WIP] JupyterLab React Widgets

> This is a Work In Progress - You can try and contribute to make it usable...

This repository curates existing techniques to create [React](https://reactjs.org) based widgets for [JupyterLab](https://github.com/jupyterlab/jupyterlab).

```bash
# Clone, install and browse the Storybook.
git clone https://github.com/datalayer/jupyterlab-react-widgets.git &&
  cd jupyterlab-react-widgets && \
  yarn install && \
  yarn storybook
```

Why this repository? We want to ensure React remains a JupyterLab first-class citizen.

JupyterLab UI is built on the [Lumino](https://github.com/jupyterlab/lumino) widgets. React components are available today in the [UI Components](https://github.com/jupyterlab/jupyterlab/tree/master/packages/ui-components) package and embedded in Lumino widgets via the [WidgetReact](https://jupyterlab.readthedocs.io/en/latest/developer/virtualdom.html) helper class. However, the goal seems to remove React from the JupyterLab core source code. This is still under discussion, see e.g.:

- [Remove dependency on third-party library for ui-components](https://github.com/jupyterlab/jupyterlab/issues/6890)
- [Future of ui-components package: drop Blueprint; should we use Material-UI?](https://github.com/jupyterlab/jupyterlab/issues/7574)
- [Switch to material-ui](https://github.com/jupyterlab/jupyterlab/pull/6828)

Other systems part of the Jupyter ecosystem should be considered while integrating React in JupyterLab:

- [IpyWidgets](https://github.com/jupyter-widgets/ipywidgets) (Jupyter Widgets, Interactive Widgets for the Jupyter Notebook) integrates with JupyterLab via the [IpyWidgets Jupyterlab Manager](https://github.com/jupyter-widgets/ipywidgets/tree/master/packages/jupyterlab-manager) extension.
- [Nteract](https://github.com/nteract/nteract) which is developed from scratch with React. Ntreact supports IpyWidgets via its [jupyter-widgets](https://github.com/nteract/nteract/tree/master/packages/jupyter-widgets) package.

<p align="center">
  <h1 align="center">Technical Implementations</h1>
</p>

## @lumino/virtualdom

Lumino [Virtual DOM](https://github.com/jupyterlab/lumino/tree/master/packages/virtualdom) package.

[Adds a "pass thru" virtual element](https://github.com/jupyterlab/lumino/pull/29)

## @nteract/transform-vdom

Nteract [Transform VDOM](https://github.com/nteract/nteract/tree/master/packages/transform-vdom) package.

## WidgetReact and UseSignal

WidgetReact allows to embed a React component into a Lumino Widget. The following details an example for the toolbar button:

- [ToolbarButtonComponent](https://github.com/jupyterlab/jupyterlab/blob/37c7a647a1344712c8cf80414db73809f486e766/packages/apputils/src/toolbar.tsx#L469) is a React component for a button. It knows nothing about Lumino widgets nor signals.
- [ToolbarButton](https://github.com/jupyterlab/jupyterlab/blob/37c7a647a1344712c8cf80414db73809f486e766/packages/apputils/src/toolbar.tsx#L531) is a Lumino widget that wraps the previous ToolbarButtonComponent with ReactWidget and takes the exact same props.
- [UseSignal](https://github.com/jupyterlab/jupyterlab/blob/37c7a647a1344712c8cf80414db73809f486e766/packages/apputils/src/toolbar.tsx#L569) component manages the transition between Lumino signals and React props.

Another example is the [HDF Toolbar](https://github.com/telamonian/jupyterlab-hdf/blob/master/src/toolbar.tsx).

## @nteract/jupyter-widgets

Ntreact supports IpyWidgets via its [Jupyter Widgets](https://github.com/nteract/nteract/tree/master/packages/jupyter-widgets) package.

## ReactWidget and UseProps

TBD

<p align="center">
  <h1 align="center">IpyWidgets</h1>
</p>

## @jupyter-widgets/jupyterlab-manager

[IpyWidgets](https://github.com/jupyter-widgets/ipywidgets) are Jupyter Widgets, Interactive Widgets for the Jupyter Notebook.

You need a python library for this.

```bash
pip install ipywidgets
```

They integrate with JupyterLab via the [IpyWidgets Jupyterlab Manager](https://github.com/jupyter-widgets/ipywidgets/tree/master/packages/jupyterlab-manager) extension.

```bash
jupyter labextension install @jupyter-widgets/jupyterlab-manager
```

To display a React component in the IpyWidget output, see for example [IpyResuse Widget](https://github.com/jtpio/ipyresuse/blob/ad36caf300fb18daab92279597b86cea95a5372d/src/widget.tsx#L106-L107): `ReactDOM.render(...)` your component on `this.el`, the DOM node you have control over. It's the root node of the widget.

[IpyMaterialUI](https://github.com/maartenbreddels/ipymaterialui) is Jupyter Widgets based on React Material UI components. You can access your children's props, which are immutable, but the underlying IpyWidget model can change.

## @jupyterlab/vdom

JupyterLab [VDOM](https://github.com/jupyterlab/jupyterlab/tree/master/packages/vdom) and [VDOM Extension](https://github.com/jupyterlab/jupyterlab/tree/master/packages/vdom-extension) packages which use the previously described `@nteract/transform-vdom` package.

[Add event handling support to vdom-extension](https://github.com/jupyterlab/jupyterlab/pull/5670)

Needs:

- [Nteract Python VDOM](https://github.com/nteract/vdom) is Virtual DOM for Python.

<p align="center">
  <h1 align="center">Read Also</h1>
</p>

- [How do you engineer a JupyterLab React Component?](https://github.com/jupyterlab/jupyterlab/issues/6380)
- [Track migration to components](https://github.com/jupyterlab/jupyterlab/issues/5702).
- [[WIP] Add @jupyterlab/components package](https://github.com/jupyterlab/jupyterlab/pull/5538).
- [Figure out if tree shaking is working with blueprint](https://github.com/jupyterlab/jupyterlab/issues/5601).
- [Create a @jupyterlab/ui package based on Blueprint and possibly Material UI](https://github.com/jupyterlab/jupyterlab/issues/5170).
- [Add ui package and refactor toolbars](https://github.com/jupyterlab/jupyterlab/pull/4234).
- [How do you engineer a JupyterLab React Component?](https://github.com/jupyterlab/jupyterlab/issues/6380)
- [Switch to material-ui](https://github.com/jupyterlab/jupyterlab/pull/6828).
- [Remove dependency on third-party library for `components`](https://github.com/jupyterlab/jupyterlab/issues/6890).

- [OUTDATED] [jupyter-react](https://github.com/timbr-io/jupyter-react).
- [OUTDATED] [VDom IpyWidget](https://github.com/jupyter-widgets/ipywidgets/issues/2039).
- [OUTDATED] [VDom Ipywidget Repo](https://github.com/shoobomb/vdom_ipywidget).
- [OUTDATED] [WDom Demo](https://github.com/AaronWatters/jp_doodle/blob/master/notebooks/misc/wdom%20demo.ipynb).
