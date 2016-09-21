# React-Bind-Material-UI
Functional reactive 2-way binding for [Material-UI](http://www.material-ui.com).

## TL;DR:

```
npm install --save react-bind-material-ui material-ui
```

```jsx
import React, { Component } from 'react';
import { Binder } from 'react-bind';
import { TextField } from 'react-bind-material-ui';

class Address extends Component {
  constructor() {
    super();
    this.bind = new Binder(this).bind;
  }
  render() {
    return <div>
      <div><TextField hintText="Address 1" model={this.bind('address1')} /></div>
      <div><TextField hintText="Address 2" model={this.bind('address2')} /></div>
      <div><TextField hintText="City" model={this.bind('city')} /></div>
      <div><TextField hintText="State" model={this.bind('state')} /></div>
      <div><TextField hintText="Postal" model={this.bind('postal')} /></div>
    </div>
  }
}

class App extends Component {
  constructor() {
    super();
    this.binder = new Binder(this);
    this.bind = this.binder.bind;
    this.state = {
      model: {
        billingAddress: {
          address1: "123 React Blvd",
          address2: "Unit A",
          city: "San Reacto",
          state: "PO",
          postal: "00123"
        }
      }
    };
    this.binder.setModel(this.state.model);
  }

  render() {
    return (
      <div>
        <div>
          Billing Address:<br />
          <Address model={this.bind('billingAddress')} />
        </div>
        <div>
          Shipping Address:<br />
          <Address model={this.bind('shippingAddress')} />
        </div>
      </div>
    );
  }
}
```

## Based on React-Bind

Please see [react-bind](https://www.npmjs.com/package/react-bind) for more information.
