$(".prateleira li").each(function(){
	var li = $(this);
	var span = $(this).find("span.secundario img");
	console.log(span);
	if($(span).length <= 0){
		$(li).find("span.principal").removeClass();
	}
});