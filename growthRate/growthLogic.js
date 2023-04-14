//Data containing growth rate and total vehicle stations 2012, 2014, 2021
d3.json("pop_with_ev.json").then(function(data) {

  // Set variables
  var state = data.map(function(d) { return d.State; });
  var growthRate = data.map(function(d) { return d.Growth_Rate_Percent; });
  var totalGrowth = data.map(function(d) { return d.Total_Growth})
  
  // Create random colors variable
  var colorScale = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(state);

  // Create size scaling variable
  var sizeScale = d3.scaleLog()
      .domain(d3.extent(totalGrowth))
      .range([5, 25]);
  //Scatterplot Data
  var trace1 = {
    x: state,
    y: growthRate,
    text: data.map(function(d) { return d.State + '<br>Growth rate: ' + d.Growth_Rate_Percent + '%'; }),
    mode: 'markers',
    marker: {
      color: state.map(function(d) { return colorScale(d); }),
      size: totalGrowth.map(function(d) { return sizeScale(d); }), 
      opacity: 0.7
    }
  };
  
  var data = [trace1];
  // Layer
  var layout = {
    title: 'Fastest Growing EV States 2012 - 2021',
    showlegend: false,
    height: 600,
    width: 1000
  };
  
  Plotly.newPlot('myDiv', data, layout);
})

console.log('Is it working?')