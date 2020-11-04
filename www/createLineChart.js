function createLineChart(){
  // set the dimensions/margins
  var margin = {top:10,right:30,bottom:0,left:60};
  var width = 400-margin.left-margin.right;
  var height = 400 - margin.top - margin.bottom;
  // linechart from the d3js library
  var svg = d3.select("#lineChartSVG")
              .attr("width",width+margin.left,margin.right)
              .attr("height",height+margin.top+margin.bottom)
              .append("g")
              .attr("transform","translate("+margin.left+","+margin.top+")");

  // add an x scale
  var xScale=d3.scaleLinear().domain([0,10]).range([0,width]);
  // add an y scale
  var yScale=d3.scaleLinear().domain([0,1]).range([height,0]);
  // d3js line function
  var line=d3.line()
             .x(function(d,i){return xScale(i);})
             .y(function(d){return yScale(d.y)})
             .curve(d3,curveMonotoneX);

  // append the path to the svg
  svg.append("path")
     .datum(dataset)
     .attr('class','line')
     .attr("d",line);
     
}
