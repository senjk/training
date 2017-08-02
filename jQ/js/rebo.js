$(document).ready(function(){
	$("*").css({"margin":"0","padding":"0","font-family":"微软雅黑","font-size":"13px"})
	$("ul,ol,li").css({"list-style":"none","cursor":"pointer"});
	$("#rebo").css({"margin":"0 auto","width":"700px","overflow":"hidden"});
	$("#rebo h1").css({"line-height":"40px","font-size":"22px"});
	$("ul>li").css({"float":"left","width":"190px","height":"250px","overflow":"hidden","position":"relative"});
    $("ul>li>span").css({"font-size":"20px","position":"absolute","left":"0px","bottom":"14px","background-color":"#f0a30f","width":"20px","text-align":"center"});
    $("ul>li>p").css({"position":"absolute","left":"30px","bottom":"20px","text-align":"center"});
    $("ul>li:last").css({"background-color":"#f0f0f0","width":"220px"});
    $("ul li:not(.lie)").css("margin-left","20px");
    $("ol li:first span").css({"display":"inline-block","background-color":"#f0a30f","width":"20px","text-align":"center"})
    $("ol li:not(.lie2) span").css({"display":"inline-block","background-color":"#a4a3a3","width":"20px","text-align":"center"});
    $("ol li:lt(5)").css("background","url(img/orange.jpg) no-repeat 175px -5px");
     $("ol li:gt(4)").css("background","url(img/green.jpg) no-repeat 175px -5px");
      $("ol li:eq(1)").css("background","url(img/green.jpg) no-repeat 175px -5px");
     $("ol li").css({"height":" 30px"});
     
     $("ol p").css({"background":"gray","float":" right","top":"-20px","left":"130px","display":"none"});
    
	$("ol li").mouseover(function(){
		$(this).find("p").show();
	});
	$("ol li").mouseout(function(){
		$(this).find("p").hide();
});

})

//$(document).ready(function(){
//	$("h1").hover(
//  	function(){
//  		$("this").css("background-color","red");
//  	},
//  	function(){
//  		$("this").css("background-color","blue");
//  	}
//  )
//})