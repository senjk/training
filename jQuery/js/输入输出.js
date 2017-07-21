var t=prompt("请输入一个整数","");
if(t>5){
	for(var i=t;i>0;i--){
		for( var j=0;j<i;j++){
			document.write("*&nbsp; &nbsp;");
		}
		document.write("<br />");
	}
}
else{
	for( var k=t;k>0;k--){
		for(var l=0;l<k;l++){
			document.write("*&nbsp; &nbsp;");
		}
		document.write("<br />");
		
	}
	for( var n=1; n<=t;n++){
		for( var q=0;q<n;q++){
			document.write("*&nbsp; &nbsp;");
			
		}
		document.write("<br />");
		
	}
}




//var op1=prompt("请输入第一个数：","");
//var op2=prompt("请输入第二个数：","");
//var p1=parseInt(op1);
//var p2=parseInt(op2);
//var result=p1+p2;
//document.write(p1+"+"+p2+"="+result);



//function study(t){
//	for(var i=0;i<t;i++){
//		document.write("数据循环"+(i+1)+"遍<br />")
//	}
//}
