var React = require('react');

var Chart = require('./Chart');

var App = React.createClass({

	getInitialState(){
		return {
			id: 'asdaasda',
            people: ['Nate', 'Paul', 'Moe'],
            chores: ['Cook', 'Clean', 'Mop']
		};
	},

	render(){
		return (
			<div>
				<h1>Chore Chart</h1>
				<Chart 
                    id={this.state.id} 
                    people={this.state.people}
                    chores={this.state.chores} />
			</div>
		);
	}

});

module.exports = App;
