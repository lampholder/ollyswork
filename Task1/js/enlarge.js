$('#picEnlarge').hover(function(){
        $(this).find('img').fadeTo(500, 0.5);
	}, function(){
        $(this).find('img').fadeTo(500, 1);
	});

$('#table').click(function() {
	    $('#picEnlarge').find('img').fadeTo(0, 1);
        if($('#table').hasClass('enlarged')){
            $('#table').removeClass('enlarged');
            $("#table").stop().animate({width: 280, height: 187}, 200 );
        }else{
            $('#table').addClass('enlarged')
            $("#table").stop().animate({width: 800, height: 533}, 200 );
        }

    });