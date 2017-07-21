function jsj(count){
for(var i=1;i<=count;i++){
		for( var j=1;j<=i;j++){
			if(i*j<10){
			document.write(j+"x"+i+"="+(i*j)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		}
			else{
				document.write(j+"x"+i+"="+(i*j)+"&nbsp;&nbsp;&nbsp;&nbsp;");
			}
			}
		document.write("<br />");
	}
}