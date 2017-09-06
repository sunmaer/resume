$(function(){
	//关于我 定位
	newTop=$("video").height() - 71;
	$("#about").css("marginTop",newTop)
	$(window).resize(function(){
		newTop=$("video").height() - 71;
		$("#about").css("marginTop",newTop)
	});
})