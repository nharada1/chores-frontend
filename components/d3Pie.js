var d3 = require('d3')
var _ = require('lodash')

var d3Pie = {};

function rotateList(list, n, forward) {
    rot = n % list.length
    if (forward) {
        return _.slice(list, rot).concat(_.slice(list, 0, rot));
    } else {
        return _.slice(list, -rot).concat(_.slice(list, 0, -rot));
    }
}

d3Pie.create = function(e, props, state) {
    console.log(state);
	var svg = d3.select(e).append("svg")
	    .attr("width", props.width)
	    .attr("height", props.height)
	  .append("g")
	    .attr("transform", "translate(" + props.width / 2 + "," + props.height / 2 + ")");

    svg.append("g")
        .attr("class", "arc");

	this.update(e, state);
};

d3Pie.update = function(e, state) {
	var width = 960,
	    height = 500,
	    innerRadius = Math.min(width, height) / 4,
	    outerRadius = Math.min(width, height) / 2;

    var nSegments = state.data.people.length;

    var allColors = _.slice(["#774F38", "#E08E79", "#F1D4AF", "#ECE5CE", "#C5E0DC"], 0, nSegments);
	var color = d3.scale.ordinal().range(allColors);

	var innerArc = d3.svg.arc()
	    .outerRadius(innerRadius - 10)
	    .innerRadius(0);

	var outerArc = d3.svg.arc()
	    .outerRadius(outerRadius - 10)
	    .innerRadius(innerRadius);

	var pie = d3.layout.pie()
	    .sort(null)
	    .value(function(d) { return 1; });

	var data = state.data.people.map(function(d, i) {
	    return {"person": state.data.people[i], "chore": rotateList(state.data.chores, state.data.offset, true)[i]};
	});

    var base = d3.select(e).selectAll(".arc");

	var g = base.selectAll(".arcs")
	  .data(pie(data))
	.enter().append("g")
	  .attr("class", "arcs");

	g.append("path")
	  .attr("d", innerArc)
	  .style("fill", function(d, i) { return color(i); });

	g.append("path")
	  .attr("d", outerArc)
	  .style("fill", function(d, i) { return color(i+state.data.offset); });

	g.append("text")
	  .attr("transform", function(d) { return "translate(" + innerArc.centroid(d) + ")"; })
	  .attr("dy", ".35em")
	  .style("text-anchor", "middle")
	  .text(function(d) { 
	      return d.data.person;
	  });

	g.append("text")
	  .attr("transform", function(d) { return "translate(" + outerArc.centroid(d) + ")"; })
	  .attr("dy", ".35em")
	  .style("text-anchor", "middle")
	  .text(function(d) { 
	      return d.data.chore;
	  });
};

d3Pie.destroy = function(e) {
	//clean up
};

module.exports = d3Pie;
