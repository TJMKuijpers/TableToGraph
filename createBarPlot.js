function createBarPlot(data_for_bar_plot){
    // chart.js barplot   
    var ctx = document.getElementById('barChart').getContext('2d');
var barchart  = new Chart(ctx, {
    type: 'bar',
    data:[12, 19, 3, 5, 2, 3],
    options: options = {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                    } 
            }]
        }
    }

});

    
}