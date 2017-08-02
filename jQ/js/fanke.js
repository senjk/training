$(document).ready(function(){
$(".first").click(
		function(){
			var dd=$(this).next(".second");
			if(dd.is(':visible')){
				dd.hide("fast");
			}
			else{
				dd.show("slow");
			}
			var fk=$(this).parent().siblings().find(".second")
			
			if(fk.is(':visible'))
			{
				fk.hide("fast");
			}

		})

$(".tab_common").mouseover(function(){
	var index=$(this).index();

	var fd=$(this).parent();
	var dd=$(this).find(".track");
	var dh=$(this).siblings().children();
	
	if(index==1){
   fd.addClass("tab_bg1")
   dd.addClass("track01")
// dh.addClass("track02")
    dh.removeClass("track01 jkl")
   
    fd.removeClass("tab_bg0 tab_bg2 tab_bg3 tab_bg4 ")

  }
	if(index==2){
   fd.addClass("tab_bg2")
   dd.addClass("track01")
    dh.removeClass("track01 jkl")
    fd.removeClass("tab_bg0 tab_bg1 tab_bg3 tab_bg4 ")
 
  }
	if(index==3){
   fd.addClass("tab_bg3")
   dd.addClass("track01")
    dh.removeClass("track01 jkl")
    fd.removeClass("tab_bg0 tab_bg2 tab_bg1 tab_bg4 ")
    
  }
	if(index==4){
   fd.addClass("tab_bg4")
   dd.addClass("track01")
    dh.removeClass("track01 jkl")
    fd.removeClass("tab_bg0 tab_bg2 tab_bg3 tab_bg1 ")
  
  }

})

$(".tab_current").mouseover(function(){
	var fg=$(this).parent();
	var dh=$(this).siblings().children();
	var dd=$(this).find(".track");
   dd.addClass("track01")
    dh.removeClass("track01 jkl")
   
	 fg.addClass("tab_bg0")
    fg.removeClass("tab_bg1 tab_bg2 tab_bg3 tab_bg4 ")
})
$(".jiejue2").click(function(){
var vg=$("input[name='IsAvail']:checked").val();

	if(vg==0){
		$(".wenti").show();
	}
})
$(".search").focus(function(){
	var val1=$(this).val();
	if(val1=="请输入要查询的问题")
  {
  	 $(this).val("");
  }

	
})

 $(".search").blur(function(){
  var val2=$(this).val();
  if(val2==""){
  $(this).val("请输入要查询的问题");
  }
 });
})