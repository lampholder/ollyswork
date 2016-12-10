    var gbpToEuroExchRate = 1.17;
    $("#showInEuro").click(function() { 
        $("span.currency").each(function(index) { 
            $(this).text($(this).attr("name") * gbpToEuroExchRate);
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

