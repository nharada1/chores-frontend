/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');

var Chart = React.createClass({
  getDefaultProps: function() {
    return {
      width: '100%',
      height: '500px'
    };
  },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  }

});

module.exports = Chart;
