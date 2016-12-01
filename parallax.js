
function parallax( image, speed ){
	$(image).css('top', ( ( $('#image-card').offset().top - $(window).scrollTop() ) / -speed ) +'px' );
}

$(window).scroll(function(){
	parallax();
});