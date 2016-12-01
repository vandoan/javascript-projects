

 // if image card is inside viewport 
if( $('#image-card').offset().top < $(window).scrollTop() + $(window).height() && $('#image-card').offset().top + $('#image-card').height() > $(window).scrollTop() ){
	// upon scroll up, add px to 

	// upon scroll down, reduce px 

}



// parallax formula
// ( #imageContainer - windowTop ) / - speed
( $('#image-card').offset().top - $(window).scrollTop() ) / 2




function parallax( image, speed ){
	$(image).css('top', ( ( $('#image-card').offset().top - $(window).scrollTop() ) / -speed ) +'px' );
}

$(window).scroll(function(){
	parallax();
});