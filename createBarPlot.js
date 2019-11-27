function createBarPlot(data_for_bar_plot){
    // chart.js barplot   
    var ctx = document.getElementById('barChart').getContext('2d');
var barchart  = new CharacterData(ctx, {
    type: 'bar',
    data:data_for_bar_plot,
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