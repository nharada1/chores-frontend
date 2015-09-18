/** @jsx React.DOM */

var React = require('react');
var Director = require('director');
var Chart = require('./Chart');

var App = React.createClass({

	getInitialState(){
		return {
            source: 'http://chores-backend.herokuapp.com/api/wheels/d41bb492-58cf-11e5-9b2b-6ad757790211',
		};
	},

    updateID(id){
        var apiSource = "http://chores-backend.herokuapp.com/api/wheels/" + id;
        console.log(apiSource);
        this.setState({source: apiSource});
    },

    componentWillMount(){
        var routes = {
            '/:id': this.updateID
        };

        var router = new Director.Router(routes)
        router.init();
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
