function open_add(){
	window.open("open.html")
}

function close_ins(){
	window.close();
}
function hreff(){
	location.href="open.html";
}
function reloadd(){
	location.reload();
	alert("刷新页面");
}
function backk(){
	history.back();
}
function forwardd(){
	history.forward();
}
function genx(){
document.getElementById("css").innerHTML=document.getElementById("cs").value;
document.getElementById("cs").value="";
}

var flag;
function timef(){
	var time=new Date();
	var h=time.getHours();
	var  m=time.getMinutes();
	var  s=time.getSeconds();
	if(s<10){
		s="0"+s;
	}
	if(m<10){
		m="0"+m;
	}
//	document.write("2")
	document.getElementById("time").innerHTML="现在是："+h+":"+m+":"+s;
}
function timed(){
	flag=setInterval("timef()",1000);
}
function timep(){
	clearInterval(flag);
}

function clor(){
	var yans=["red","orange","blue","green","yellow","black","gray","pink"];
	var yan=["红色","橘色","蓝色","绿色","黄色","黑色","灰色","粉红色"];
	var i=Math.floor(Math.random()*(7-0+1)-0);
    document.getElementById("yanse").innerHTML=yan[i];
    document.getElementById("yanse").style.color=yans[i];

}


