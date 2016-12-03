 
var imageCardTop = $('#image-card').offset().top;

function parallax(){
	var windowTop = $(window).scrollTop();
	$('.parallax').each(function(){
		var top = $(this).data('top');
		var speed = $(this).data('speed');
 		if( imageCardTop < windowTop + $(window).height() && imageCardTop + $('#image-card').height() > windowTop ){
		 	$(this).css('top', ( top + (imageCardTop-windowTop) * (1 / speed ) +'%' ) );
		}
	});
}

$(window).scroll(function(){
	parallax();
});


