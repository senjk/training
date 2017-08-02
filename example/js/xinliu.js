var t=19;
for( var n=7; n<=t+1;n++){
	if(n==7){
		for( var q=0;q<16;q++){	
		document.getElementById("liu").innerHTML+="&nbsp;*";	
		}
		document.getElementById("liu").innerHTML+="<br />";
	}
	else{
		if(n==10){
		for( var q=0;q<16;q++){	
		document.getElementById("liu").innerHTML+="&nbsp;*&nbsp;";	
		}
		
	}
		else {
	for( var q=0;q<=n*3;q++){
		if (q==0||q==n*3||(n==11&&(q==14||q==18))||(n==12&&(q==3||q==15||q==20||q==33))||(n==13&&(q==16||q==22))||(n==14&&(q==6||q==17||q==24||q==36))||(n==15&&(q==18||q==26))||(n==16&&(q==9||q==19||q==28||q==39))||(n==17&&(q==20||q==30))||(n==18&&(q==12||q==21||q==32||q==42))||(n==19&&(q==22||q==34))||(n==20&&(q==15||q==23||q==36||q==45))){
			document.getElementById("liu").innerHTML+="*";
		}else {
			document.getElementById("liu").innerHTML+="&nbsp;&nbsp;";
		}
		}
	}
	document.getElementById("liu").innerHTML+="<br />";

}
	}
	
for( var k=t;k>=7;k--){
	if(k==7){
		for( var q=0;q<12;q++){
		document.getElementById("liu").innerHTML+="&nbsp;*&nbsp;";	
		}
		document.getElementById("liu").innerHTML+="<br />";	
	}
	else{
		if(k==10){
		for( var q=0;q<16;q++){	
		document.getElementById("liu").innerHTML+="&nbsp;*&nbsp;";	
		}
		
	}else {
		if(k==12){
			
			for(var l=0;l<=k*2+2;l++){
		if(l==1||l==3||l==23||l==25||l==4||l==5||l==22||l==21){
		document.getElementById("liu").innerHTML+="&nbsp;&nbsp;";	
			
			}else{
		document.getElementById("liu").innerHTML+="*&nbsp;";	

			}
}
			
		}else {
		for(var l=0;l<=k*3;l++){
			if(l==0||l==k*3||(k==19&&(l==21||l==35))||(k==18&&(l==12||l==19||l==34||l==42))||(k==17&&(l==17||l==33))||(k==16&&(l==9||l==15||l==32||l==39))||(k==15&&(l==13||l==31))||(k==14&&(l==6||l==11||l==30||l==36))||(k==13&&(l==9||l==29))){
				document.getElementById("liu").innerHTML+="*";
			}else{
			document.getElementById("liu").innerHTML+="&nbsp;&nbsp;";
			}}
		}
		}
		document.getElementById("liu").innerHTML+="<br />";
		
	}
}
document.getElementById("liu").innerHTML+="<br />";
document.getElementById("liu").innerHTML+="<br />";
var  r = 4;
for (var y = 0; y <= 2 * r; y += 2) {
   var x = Math.round(r - Math.sqrt(2 * r * y - y * y));
   var longLength = 2 * (r - x);
   
   for (var i = 0; i <= x+3; i++) {
    document.getElementById("liuj").innerHTML+="&nbsp;&nbsp;";
   }
document.getElementById("liuj").innerHTML+="*";
   
   for (var j = 0; j <= longLength; j++) {
   document.getElementById("liuj").innerHTML+="&nbsp;&nbsp;";
   }
document.getElementById("liuj").innerHTML+=" *<br />";
}