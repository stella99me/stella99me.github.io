/***********************  Page scroll  **********************/
$(function(){
	$(".page-scroll").bind("click",function(event){
		var $anchor = $(this);
		$anchor.parent().addClass("active");
		$anchor.parent().siblings("li").removeClass("active")
		$("html,body").stop().animate({
			scrollTop:$($anchor.attr("href")).offset().top
		},1500,'easeInOutExpo')
		event.preventDefault();
	})
})