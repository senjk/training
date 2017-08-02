var lenght1=2;
var width1=2;
var sd="书记"
var shu= new Array("1","2","3","4","5","6","7","8","9")
$(document).ready(function(){
	for(var i=0;i<=lenght1;i++){	
	$(".ul").append("<ul class='ul01'></ul>");		
}
	for(var i=0;i<=lenght1;i++){
	$(".ul01").append("<li ></li>");}
	
})
$(document).ready(function(){
//	for(var i=0;i<=lenght1;i++){	
	$("ul li").append(sd);		
//}
//	for(var i=0;i<=lenght1;i++){
//	$(".ul01").append("<li ></li>");}
})
