import React, { Component } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
      this._isMounted = false;
    }

    async componentDidMount() {
      this._isMounted = true;
      NProgress.start();
      const { default: component } = await importComponent();
      NProgress.done();
      if (this._isMounted) {
        this.setState({
          component: component,
        });
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
