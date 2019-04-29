

$(document).ready(function() {
	const distanceToNextImage = 0 - $(window).width();
	let currentImageNumber = 0;


	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 3;
		$(".slide-strip").css("left", currentImageNumber * distanceToNextImage + "px");
		// $(".slide-strip").fadeIn(200);
	});

	$("#left").click(function() {
		currentImageNumber = currentImageNumber == 0 ? 2 : (currentImageNumber - 1);
		$(".slide-strip").css("left", currentImageNumber * distanceToNextImage + "px");
		// $(".slide-strip").fadeIn(200);
	});

});