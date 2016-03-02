/***********************  Page scroll  **********************/
$(function(){
	$(".page-scroll").bind("click",function(event){
		var $anchor = $(this);
		$anchor.addClass("active");
		$anchor.siblings("a").removeClass("active")
		$("html,body").stop().animate({
			scrollTop:$($anchor.attr("href")).offset().top
		},1500,'easeInOutExpo')
		event.preventDefault();
	})
})