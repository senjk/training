
var t=12;

//for( var n=3; n<=3;n++){
//		for( var q=0;q<5;q++){
//			
//		document.getElementById("liu").innerHTML+="***";
//			
//		}
//		
//		document.getElementById("liu").innerHTML+="<br />";
//}

for( var n=5; n<=t;n++){
	if(n==5){
		for( var q=0;q<5;q++){
			
		document.getElementById("liu").innerHTML+="***";
			
		}
		document.getElementById("liu").innerHTML+="<br />";
	}
	else{
		for( var q=0;q<1;q++){
			document.getElementById("liu").innerHTML+="*";
		}
	for( var q=1;q<n;q++){
			document.getElementById("liu").innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		}
	for( var q=n;q<=n;q++){
			document.getElementById("liu").innerHTML+="*";
		}
	document.getElementById("liu").innerHTML+="<br />";
	}
}

//for( var n=6; n<=t;n++){
//		for( var q=0;q<1;q++){
//			document.getElementById("liu").innerHTML+="*";
//		}
//	for( var q=1;q<n;q++){
//			document.getElementById("liu").innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//		}
//	for( var q=n;q<=n;q++){
//			document.getElementById("liu").innerHTML+="*";
//		}
//	
//		document.getElementById("liu").innerHTML+="<br />";
//		
//	}

for( var k=t;k>=5;k--){
	if(k==5){
			for( var q=0;q<5;q++){
			
			document.getElementById("liu").innerHTML+="***";
			
		}
		document.getElementById("liu").innerHTML+="<br />";
		
	}
	else{
		for(var l=0;l<=0;l++){
			document.getElementById("liu").innerHTML+="*";
		}
		for(var l=1;l<k;l++){
			document.getElementById("liu").innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		}
		for(var l=n;l<=n;l++){
			document.getElementById("liu").innerHTML+="*";
		}
		
		document.getElementById("liu").innerHTML+="<br />";
		
	}
}

//	for( var k=t;k>5;k--){
//		for(var l=0;l<=0;l++){
//			document.getElementById("liu").innerHTML+="*";
//		}
//		for(var l=1;l<k;l++){
//			document.getElementById("liu").innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//		}
//		for(var l=n;l<=n;l++){
//			document.getElementById("liu").innerHTML+="*";
//		}
//		
//		document.getElementById("liu").innerHTML+="<br />";
//		
//	}
//	
//for( k=5; k<=5;k++){
//		for( var q=0;q<5;q++){
//			
//			document.getElementById("liu").innerHTML+="***";
//			
//		}
//		document.getElementById("liu").innerHTML+="<br />";
//		
//	}
//
//function liuuu(){
// document.getElementById("liu").innerHTML=liuu();
//}