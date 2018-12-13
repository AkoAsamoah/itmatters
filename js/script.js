$(document).ready(function() {

	// Used Slick JS library by Ken Wheeler: http://kenwheeler.github.io/slick/


	// activating slideshow and settings
	$('.slideshow').slick({
		infinite: true, // allows for slideshow to loop to the beginning after the last slide
		dots: true, // enables dots on bottom center for navigation
		arrows: false // disables side arrow navigations
	});

 $(".slick-loading").click(function() {
		location.reload();
	});
	
});