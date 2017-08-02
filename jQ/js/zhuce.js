$(document).ready(function(){
	$(".sub").click(function(){
		var name=document.getElementById("uName");
		if(name.validity.valueMissing==true){
			name.setCustomValidity("昵称不能为空");
		}else if(name.validity.patternMismatch==true){
			name.setCustomValidity("昵称必须是6~10位的英文和数字");
			
		}
		else{
			name.setCustomValidity("");
			
		}
		var pwd=document.getElementById("pwd");
		if(pwd.validity.valueMissing==true){
			pwd.setCustomValidity("密码不能为空");
		}else if(pwd.validity.patternMismatch==true){
			pwd.setCustomValidity("密码必须是6~16位的英文和数字");
			
		}
		else{
			pwd.setCustomValidity("");
			
		}
		var email=document.getElementById("email");
		if(email.validity.valueMissing==true){
			email.setCustomValidity("邮箱不能为空");
		}else if(email.validity.patternMismatch==true){
			email.setCustomValidity("邮箱格式不正确");
			
		}
		else{
			email.setCustomValidity("");
			
		}
//		var ree=document.getElementById("repwd");
		
				var epwd=$("#pwd").val();
				var repwd=$("#repwd").val();
				if(epwd !=repwd){
			alert("两次输入的密码不一致");
//			ree.setCustomValidity("两次输入的密码不一致")
					return false;
					
				}
			})
		
	})

