//$(document).ready(function(){
//	/**主菜单鼠标移上时背景颜色加深**/
//	$(".nav-ul a").mouseover(function(){
//		$(this).css("background-color","#F01e28");
//	});
//	$(".nav-ul a").mouseout(function(){
//		$(this).css("background-color","#ff2832");
//});
//
//});

$(document).ready(function(){
//	$(document).keydown(function(event){
//		if(event.keyCode=="13"){
//			alert("确认要提交吗？");
//		}
//	})


$(".top-m .on").bind({
	"mouseover":function(){
		$(".topDown").show();
	},
	"mouseout":function(){
		$(".topDown").hide();
	}
});
})
