    $("#showInEuro").click(function() { 
	$.getJSON( "https://api.fixer.io/latest?base=GBP", function( data ) {
		$("span.currency").each(function(index) { 
		    $(this).html("&euro;" + $(this).attr("name") * data.rates.EUR);
		});
	});
    });

    var gbpToDollarExchRate = 1.26;

    $("#showInDollar").click(function() { 
        $("span.currency").each(function(index) { 
            $(this).text($(this).attr("name") * gbpToDollarExchRate);
        });
    });

    var gbpToYenExchRate = 143.52;

    $("#showInYen").click(function() { 
        $("span.currency").each(function(index) { 
            $(this).text($(this).attr("name") * gbpToYenExchRate);
        });
    });

    var gbpToCanDollarExchRate = 1.67;

    $("#showInCanDollar").click(function() { 
        $("span.currency").each(function(index) { 
            $(this).text($(this).attr("name") * gbpToCanDollarExchRate); 
        });
    });

    var gbpToSterlingExchRate = 1;

    $("#showInSterling").click(function() { 
        $("span.currency").each(function(index) { 
            $(this).text($(this).attr("name") * gbpToSterlingExchRate);
        });
    });

