/** @jsx React.DOM */

var React = require('react');

var Chart = require('./Chart');

var App = React.createClass({

	getInitialState(){
		return {
			id: 'asdaasda',
            data: {
                people: ['Nate', 'Paul', 'Moe', 'Snowball', 'Bailey'],
                chores: ['Cook', 'Clean', 'Mop', 'Wiffleball', 'Vacuum'],
                days_per_rotation: 3,
                offset: 2
            }            
		};
	},

	render(){
		return (
			<div>
				<h1>Chore Chart</h1>
                <h2>Rotating every {this.state.data.days_per_rotation} days</h2>
				<Chart 
                    id={this.state.id} 
                    data={this.state.data} />
			</div>
		);
	}

});

module.exports = App;
