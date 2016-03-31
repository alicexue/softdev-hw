var democrats = true;

var demParty = "Democratic Delegates";
var totalDems = "Total Number of Delegates: 4,763";
var alloDems = "Number of Allocated Delegates: 2,258";
var unalloDems = "Number of Unallocated Delegates: 2,505";

var repParty = "Republican Delegates";
var totalReps = "Total Number of Delegates: 2,472";
var alloReps = "Number of Allocated Delegates: 1,381";
var unalloReps = "Number of Unallocated Delegates: 1,091";

var demDelegatesPerState = {
    "Alabama": 53, 
    "Alaska": 20, 
    "Arizona": 85, 
    "Arkansas": 32,
    "California": 546, 
    "Colorado": 66,
    "Connecticut": 70, 
    "Delaware": 31, 
    "Florida": 214, 
    "Georgia": 102, 
    "Hawaii": 34, 
    "Idaho": 27, 
    "Illinois": 156, 
    "Indiana": 92,
    "Iowa": 44, 
    "Kansas": 33, 
    "Kentucky": 61, 
    "Louisiana": 51, 
    "Maine": 25, 
    "Maryland": 118, 
    "Massachusetts": 91, 
    "Michigan": 130, 
    "Minnesota": 77, 
    "Mississippi": 36, 
    "Missouri": 71, 
    "Montana": 27, 
    "Nebraska": 25, 
    "Nevada": 35,
    "New Hampshire": 24, 
    "New Jersey": 142, 
    "New Mexico": 43, 
    "New York": 291, 
    "North Carolina": 107, 
    "North Dakota": 23, 
    "Ohio": 143, 
    "Oklahoma": 38,
    "Oregon": 74,
    "Pennsylvania": 210,
    "Rhode Island": 33,
    "South Carolina": 53,
    "South Dakota": 25,
    "Tennessee": 67,
    "Texas": 222,
    "Utah": 37, 
    "Vermont": 16,
    "Virginia": 95, 
    "Washington": 118, 
    "West Virginia": 37, 
    "Wisconsin": 96, 
    "Wyoming": 18
};

var demUnallocated = ["Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "West Virginia", "Kentucky", "Oregon", "California", "Montana", "New Jersey", "New Mexico", "North Dakota", "South Dakota"];

var demStates = d3.keys(demDelegatesPerState);
var numDemDelegates = d3.values(demDelegatesPerState);

// republican data done by kevin (adjustments made by me to accomodate transition)
var repdata = {
    "Alabama":50, 
    "Alaska":28, 
    "Arizona":0.059,
    "Arkansas":39, 
    "California":0.172,
    "Colorado":37,
    "Connecticut":0.028,
    "Delaware":0.016,
    "Florida":99, 
    "Georgia":72, 
    "Hawaii":19, 
    "Idaho":32, 
    "Illinois":65,
    "Indiana":0.057, 
    "Iowa":23,
    "Kansas":40, 
    "Kentucky":46, 
    "Louisiana":41, 
    "Maine":23, 
    "Maryland":0.038,
    "Massachusetts":42, 
    "Michigan":59, 
    "Minnesota":38, 
    "Mississippi":37, 
    "Missouri":30, 
    "Montana":0.027,
    "Nebraska":0.036,
    "Nevada":28, 
    "New Hampshire":20,
    "New Jersey":0.051,
    "New Mexico":0.024,
    "New York":0.095,
    "North Carolina":71, 
    "North Dakota":0.028, 
    "Ohio":66,
    "Oklahoma":40, 
    "Oregon":0.028,
    "Pennsylvania":0.071,
    "Rhode Island":0.019,
    "South Carolina":50,
    "South Dakota":0.029,
    "Tennessee":58, 
    "Texas":155, 
    "Utah":0.040,
    "Vermont":16, 
    "Virginia":46, 
    "Washington":0.044,
    "West Virginia":0.034,
    "Wisconsin":0.042,
    "Wyoming":11 
};

var repStates = Object.keys(repdata);



// show charts and allow for transitions

var foo = d3.scale.linear()
  .domain([0, d3.max(numDemDelegates)])
  .range([0, 1000]);

d3.select(".chart")
    .selectAll("div")
    .data(demStates)
    .enter().append("div")
    .style("width", function(d) {
	return foo(demDelegatesPerState[d]) + "px";})
    .text(function(d) { 
	return d + ": " +  demDelegatesPerState[d]; })
    .style("background-color", function(d) {
	if (demUnallocated.indexOf(d) > -1) {
	    return "#bfbfbf";
	} else {
	    return "#0033cc";
	} });

var showDemocrats = function() {
    democrats = true;
    d3.selectAll("#party")
	.text(demParty);
    d3.select("#total")
	.text(totalDems);
    d3.select("#allocated")
	.text(alloDems);
    d3.select("#unallocated")
	.text(unalloDems);
    d3.select(".chart")
	.selectAll("div")
	.transition()
        .duration(2000)
	.style("width", function(d) {
	    return foo(demDelegatesPerState[d]) + "px";})
	.text(function(d) { 
	    return d + ": " +  demDelegatesPerState[d]; })
	.style("background-color", function(d) {
	    if (demUnallocated.indexOf(d) > -1) {
		return "#bfbfbf";
	    } else {
		return "#0033cc";
	    } });
    d3.select("#keyColor")
        .transition()
        .duration(2000)
        .style("background-color", "#0033cc")
};
    
var showRepublicans = function() {
    democrats = false;
    d3.selectAll("#party")
	.text(repParty);
    d3.select("#total")
	.text(totalReps);
    d3.select("#allocated")
	.text(alloReps);
    d3.select("#unallocated")
	.text(unalloReps);
    d3.select(".chart")
	.selectAll("div")
	.transition()
        .duration(2000)
	.style("background-color", function(d){
	    var dels = repdata[d];
	    if(dels < 1){
		// repdata[d] = dels*1000;
		return "#bfbfbf";
	    } else {
		return "#ff0000";
	    }
	})
	.style("width", function(d){
	    var dies = repdata[d];
	    if (dies < 1) {
		dies = dies * 1000;
	    }
	    return foo(dies) + "px";
	})
	.text(function(d){
	    var tmp = repdata[d];
	    if (tmp < 1) {
		tmp = tmp * 1000;
	    }
	    return d + ": " + tmp;
	});
    d3.select("#keyColor")
        .transition()
        .duration(2000)
        .style("background-color", "#ff0000");
};

var changeChart = function() {
    if (democrats) {
	showRepublicans();
    } else {
	showDemocrats();
    }
};

showDemocrats();

var chart = document.getElementById("chart");
chart.addEventListener("click",changeChart);

