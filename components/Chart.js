/** @jsx React.DOM */

var React = require('react');
var _ = require('lodash');
var $ = require('jquery')
var d3Pie = require('./d3Pie');

var Chart = React.createClass({
    componentDidMount: function() {

        $.getJSON(this.props.source, function(result) {
            if (this.isMounted()) {
                this.setState({
                    data: result
                });

                var e = this.getDOMNode();
                d3Pie.create(e, {
                    width: '500',
                    height: '500'
                }, this.state);
            }
        }.bind(this));

    },

    componentDidUpdate: function() {
        var e = this.getDOMNode();
        d3Pie.update(e, this.state);
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
