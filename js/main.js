$(function(){

	var music = $("#music");
	var music_disc = $(".music_disc")
	var myaudio = $("#audio")[0];

	music.click(function(){
		if (myaudio.paused) {
			myaudio.play();
			music_disc.addClass("play")
		}else{
			myaudio.pause();	
			music_disc.removeClass("play")
		}
	})
	$("#audio").bind("ended",function(){
		music_disc.removeClass("play")
	});




	/***********************  Page scroll  **********************/
	$(".page-scroll").bind("click",function(event){
		var $anchor = $(this);
		$anchor.parent().addClass("active");
		$anchor.parent().siblings("li").removeClass("active")
		$("html,body").stop().animate({
			scrollTop:$($anchor.attr("href")).offset().top
		},1000,'easeInOutExpo')
		event.preventDefault();
	})


	// 滚动
	$(window).scroll(function(){
		var sh = $(document).scrollTop();
		if ( sh > 100) {
			$("header").addClass("navBg");
		}else{
			$("header").removeClass("navBg")
		};
		
	})


})



