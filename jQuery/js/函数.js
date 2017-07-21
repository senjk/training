function compute(){
	var op1=prompt("请输入第一个数：","");
	var op2=prompt("请输入第二个数","");
	var op3=prompt("请输入运算符","");
	var op11=parseFloat(op1);
	var op21=parseFloat(op2);
	switch(op3){
		case "+":
		document.write("运算结果为："+op1+op3+op2+"="+(op11+op21));
		break;
		case "-":
		document.write("运算结果为："+op1+op3+op2+"="+(op11-op21));
		break;
		case "*":
		document.write("运算结果为："+op1+op3+op2+"="+(op11*op21));
		break;
		case "/":
		document.write("运算结果为："+op1+op3+op2+"="+(op11/op21));
		break;
		case "%":
		document.write("运算结果为："+op1+op3+op2+"="+(op11%op21));
		break;
		
	}
}
