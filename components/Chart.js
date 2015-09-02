/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');
var d3Pie = require('./d3Pie');

var Chart = React.createClass({
    propTypes: {
        people: React.PropTypes.array,
        chores: React.PropTypes.array
    },

    componentDidMount: function() {
        var e = this.getDOMNode();
        d3Pie.create(e, {
            width: '500',
            height: '500'
        }, this.getChartState());
    },

    componentDidUpdate: function() {
        var e = this.getDOMNode();
        d3Pie.update(e, this.getChartState());
    },

    getChartState: function() {
        return {
            people: this.props.people,
            chores: this.props.chores
        };
    },

    componentWillUnmount: function() {
        var e = this.getDOMNode();
        d3Pie.destroy(e);
    },

    render: function() {
        return (
            <div className="Chart"></div>
        );
    }
});

module.exports = Chart;
