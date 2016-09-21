var React = require('react');
var material = require('material-ui');
var Binder = require('react-bind').Binder;
var bound = {};
var count = 0;

Object.keys(material).forEach(function(key) {
  var comp = material[key];
  var propTypes = comp && comp.propTypes;
  if (propTypes && propTypes.value && propTypes.onChange) {
    bound[key] = wrapComponent(comp, key);
  } else {
    bound[key] = comp;
  }
});

function getNewId() {
  return "react-bind-material-ui-" + count++;
}


function wrapComponent(Component) {
  return React.createClass({
    componentWillMount: function () {
      this.bind = new Binder(this).bind;
    },
    onChange: function (ev, value) {
      this.props.model.set(value);
    },
    render() {
      var newProps = Object.assign(
        {
          value: this.props.model.state,
          onChange: this.onChange
        },
        this.props,
        this.wrappedProps
      );
      delete newProps.model;

      return React.createElement(Component, newProps);
      //return <DatePicker hintText="Birthday" onChange={this.onChange} value={this.props.model.state} />
    }

  });
}

// function wrapComponent(comp, key) {
//   return React.createClass({
//     // displayName: 'Bound' + key,
//     render: function() {
//       var newProps = Object.assign(
//         {
//           value: this.props.model.state,
//           onChange: function(ev, value) {
//             this.props.model.set(value);
//           }.bind(this)
//         },
//         this.props,
//         this.wrappedProps
//       );
//       delete newProps.model;
//       return React.createElement('div', {className:this.displayName}, React.createElement(comp, newProps));
//     },
//     // onChange: function(ev, value) {
//     //   this.props.model.set(value);
//     // }
//   })
// }

module.exports = bound;
