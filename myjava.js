var playing = true


setInterval(function(){nextSlide()}, 2000)

function nextSlide(){
	if (playing){
		$("#image" + window.currentImage).fadeOut("slow");
		window.currentImage += 1;
		if (window.currentImage > 21) {
			window.currentImage =1;
		}


		$("#image" + window.currentImage).fadeIn("slow");
	}


}
function slideRight(){
	playing=false;

}

$(document).ready(function(){
	window.currentImage = 1;
	$("#image" + window.currentImage).fadeIn("slow");
	$("i.fa-pause").click(function(){
		playing = false
	})
	$("i.fa-play").click(function(){
		$('image' + + window.currentImage).hide;
		playing=true
	})


	$("i.fa-chevron-right").click(function(){
		if(playing) {
			playing=false;
	$("#image" + window.currentImage).fadeOut("slow");
	window.currentImage += 1;
		if (window.currentImage > 21) {
			window.currentImage =1;
		}
$("#image" + window.currentImage).fadeIn("slow");
}
else { 	$("#image" + window.currentImage).fadeOut("slow");
	window.currentImage += 1;
		if (window.currentImage > 21) {
			window.currentImage =1;
		}
$("#image" + window.currentImage).fadeIn("slow");
	}

/* just javascripted the shit out of this. */
		
		
})

$("i.fa-chevron-left").click(function(){
		if(playing) {
			playing=false;
	$("#image" + window.currentImage).fadeOut("slow");
	window.currentImage -= 1;
		if (window.currentImage < 1) {
			window.currentImage =21;
		}
$("#image" + window.currentImage).fadeIn("slow");
}
else { 	$("#image" + window.currentImage).fadeOut("slow");
	window.currentImage -= 1;
		if (window.currentImage < 1) {
			window.currentImage =21;
		}
$("#image" + window.currentImage).fadeIn("slow");
	}

		
		
		
})



	
})


