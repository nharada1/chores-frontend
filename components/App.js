/** @jsx React.DOM */

var React = require('react');
var Chart = require('./Chart');

var App = React.createClass({

	getInitialState(){
		return {
            source: 'http://chores-backend.herokuapp.com/api/wheels/d41bb492-58cf-11e5-9b2b-6ad757790211',
		};
	},

	render(){
		return (
			<div>
				<h1>Chore Chart</h1>
				<Chart 
                    source={this.state.source} />
			</div>
		);
	}

});

module.exports = App;
