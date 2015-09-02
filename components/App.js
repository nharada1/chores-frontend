var React = require('react');

var Chart = require('./Chart');

var App = React.createClass({

	getInitialState(){
		return {
			id: 'asdaasda'
		};
	},

	render(){
		return (
			<div>
				<h1>Chore Chart</h1>
				<Chart id={this.state.id}/>
			</div>
		);
	}

});

module.exports = App;
