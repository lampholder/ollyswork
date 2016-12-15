// A $( document ).ready() block.
$( document ).ready(function() {
var stock = "SKX";
$.ajax({url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + stock + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", 
        dataType: "json",
        success: function(result){
                         $('#bid').text(result.query.results.quote.DaysHigh);
        }
});
});
