

//confirm 
//var flag=confirm("确认要删除此消息吗？");
//if(flag==true){
//	alert("删除成功");
//}
//else{
//	alert("你取消了删除");
//}
function openhh(){
	window.open("jia.html");
}
function closehch(){
	window.close();
}


document.getElementById("book").innerHTML="<font color=''>现象级全球畅销书</font>";

var flag;
var flag1;
function disptime(){
	var today= new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var ss=today.getSeconds();
    if(ss<10){
    	ss="0"+ss;
    }
//  location.reload();
//  document.write("现在是："+h+":"+m+":"+ss);
// if(h==12){
    	document.getElementById("myclock").innerHTML="现在是："+h+":"+m+":"+ss;
// }
}

function clcd(){
  
window.clearInterval(flag1);

}
function clc(){
 flag1=setInterval("disptime()",1000);

}


