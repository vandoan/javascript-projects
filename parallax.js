

 // if image card is inside viewport 
if( $('#image-card').offset().top < $(window).scrollTop() + $(window).height() && $('#image-card').offset().top + $('#image-card').height() > $(window).scrollTop() ){
	// upon scroll up, add px to 

	// upon scroll down, reduce px 

}



// parallax formula
// ( #imageContainer - windowTop ) / - speed
( $('#image-card').offset().top - $(window).scrollTop() ) / 2
var imageCardTop = $('#image-card').offset().top;


// parallax formula
// ( #imageContainer - windowTop ) / - speed
( $('#image-card').offset().top - $(window).scrollTop() ) / 2
var imageCardTop = $('#image-card').offset().top;

function parallax( image, speed, finalTop ){
	if( $('#image-card').offset().top < $(window).scrollTop() + $(window).height() && $('#image-card').offset().top + $('#image-card').height() > $(window).scrollTop() ){
		$(image).css('top', ( ( imageCardTop*(finalTop*speed)/imageCardTop) - $(window).scrollTop() ) / speed ) +'px' );
	}
}







var imageCardTop = $('#image-card').offset().top;



function parallax(){
	var windowTop = $(window).scrollTop();
	$('.parallax').each(function(){
		var top = $(this).data('top');
		var speed = $(this).data('speed');
 		if( $('#image-card').offset().top < $(window).scrollTop() + $(window).height() && $('#image-card').offset().top + $('#image-card').height() > $(window).scrollTop() ){
		 	$(this).css('top', ( top + (imageCardTop-windowTop) * (1 / speed ) +'%' ) );
		}
	});
}

 

// function parallax( image, speed ){
// 	if( $('#image-card').offset().top < $(window).scrollTop() + $(window).height() && $('#image-card').offset().top + $('#image-card').height() > $(window).scrollTop() ){
// 		$(image).css('top', ( ( $('#image-card').offset().top - $(window).scrollTop() ) / speed ) +'px' );
// 	}
// }
 


$(window).scroll(function(){
	parallax();
});


