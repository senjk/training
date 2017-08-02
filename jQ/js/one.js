$(document).ready(function(){ 
	$(".lie:gt(6)").hide();
	$(".lie:eq(6)").hide();
 	    $("#myCarousel").carousel({interval: 3000});
 	    
 
});
     
$(document).ready(function(){ 
	$(".liy").mouseover(function(){
	var index=$(this).index();
//	$(this).css("background-color","white")
     var imgh=document.getElementById("imadge");
//	var fd=$(".liy a")
	if(index==0){
    imgh.setAttribute("src","img/食品4.png");
//  fd.css("background","#0000FF")
//$(this).css({"background-color":"white","color":"black"});

  }
	if(index==1){
    imgh.setAttribute("src","img/酒水.png");
   
 
  }
	if(index==2){
    imgh.setAttribute("src","img/厨卫.png");
   
}
	if(index==3){
    imgh.setAttribute("src","img/美妆.png");
}
	if(index==4){
    imgh.setAttribute("src","img/母婴.png");
   
}
	if(index==5){
    imgh.setAttribute("src","img/家具.png");
   
}
	if(index==6){
    imgh.setAttribute("src","img/生活.png");
   
}
	if(index==7){
    imgh.setAttribute("src","img/数码.png");
   
}
	if(index==8){
    imgh.setAttribute("src","img/保健.png");
   
}
})
	$(".liy").mouseout(function(){
     var imgh=document.getElementById("imadge");
    imgh.setAttribute("src","");
		
	});
	$(".top-right a").mouseover(function(){
$(this).next().show();
	});
	$(".top-right a").mouseout(function(){
$(this).next().hide();
	})
	$("#gg").click(function(){
	$(".lie:lt(6)").hide();
	$(".lie:gt(6)").show();
	$(".lie:eq(6)").show();
	})
	$("#jj").click(function(){
	$(".lie:gt(6)").hide();
	$(".lie:eq(6)").hide();
	
	$(".lie:lt(6)").show();
	})
})