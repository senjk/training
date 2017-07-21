////typeof 变量类型
//document.write("<h3 >对变量或值调用typeof运算符返回值</h3>")
//var width;
//document.write("变量width的类型为："+typeof(width)+"<br />");
//var height=10.34;
//document.write("变量height的类型为："+typeof(height)+"<br />");
//var name="rose",sex="女";
//document.write("变量name的类型为："+typeof(name)+"<br />");
//document.write("变量sex的类型为："+typeof(sex)+"<br />");
//
//var dat = new Date(); //变量赋值为：日期对象
//var arr = new Array();  //变量赋值为：数组
//document.write("变量dat的类型为："+typeof(dat)+"<br />");
//document.write("变量arr的类型为："+typeof(arr)+"<br />");
//var flag = true;
//document.write("变量flag布尔类型为："+typeof(flag)+"<br />")
//
////typeof 值的类型
//document.write("值123类型为："+typeof(123)+"<br />");
//document.write("值true的类型："+typeof(true)+"<br />");
//document.write("值string的类型"+typeof("string")+"<br />");
//document.write("值null的类型"+typeof(null)+"<br />")
//



//
//字符串类型的属性和方法
//var str="this is Javascript,this is Javascript字符串属性和方法";
//var strlen=str.length;//字符串的长度属性
//document.write("字符串str的长度："+strlen+"<br />");
////charAt()获取指定索引号的字符
//var char=str.charAt(8);
//document.write("索引号为8的字符为"+char+"<br />");
////从字符串中获取 java字符串首次出现的位置
//var selectFirst=str.indexOf("Java");
////不存在则显示 -1
////
//document.write("字符串java首次出现的位置为："+selectFirst+"<br />");
////指定索引
////不指定则从0开始
//var selectFirst2=str.indexOf("Java",12);
//document.write("从索引号12开始找字符串java首次出现的位置为："+selectFirst2+"<br />");
////substring(起始位置，终止位置)；截取函数
//var date="2017-7-17";
//var year=date.substring(1);
//document.write("从索引号为1的字符开始截取默认截取到字符串末尾"+year+"<br />");
//var year4=date.substring(0,4);
//document.write("从索引号为0的字符开始截取到索引号为4的字符"+year4+"<br />");
//var year2=date.substr(0,5);
//document.write("从索引号为0的字符开始截取截取长度为5的字符"+year2+"<br />");
//
////分割函数split
//var sz=date.split("-");
//document.write("使用-分割字符串，分割成多个块"+sz[1]+"<br />");
//var year3=date.substring(date.indexOf(0),date.indexOf(7))
//document.write(year3+"<br />");
////document.write(date.indexOf(7)+"<br />");
//var year3=date.substring(1,2)
//document.write(year3+"<br />");



////
////数组的定义样式
//var fruit=new Array("apple","orange","peach","banna","prear");
////访问数组 下标
// document.write("访问下标值为0的数组值为："+fruit[0]+"<br />");
// document.write("访问下标值为1的数组值为："+fruit[1]+"<br />");
// document.write("访问下标值为2的数组值为："+fruit[2]+"<br />");
// document.write("访问下标值为3的数组值为："+fruit[3]+"<br />");
// document.write("访问下标值为4的数组值为："+fruit[4]+"<br />");
// document.write("访问下标值为5的数组值为："+fruit[5]+"<br />");
// 
// //一一赋值法
// fruit[0]="apple1";
// 
// //访问数组 下标
// document.write("访问下标值为0的数组值为："+fruit[0]+"<br />");
// 
// //数组属性  长度
// var size=fruit.length;
// document.write("数组长度值为："+size+"<br />");
// 
// //数组连接成字符串
// var fruitstr=fruit.join("*");
// document.write("将数组用*号连接成字符串："+fruitstr+"<br />");
// //输出数组
// document.write("输出数组为：<br />")
// document.write(fruit+"<br />");
// document.write("输出数组为：<br />")
// for(i=0;i<5;i++){
// document.write(fruit[i]+"&nbsp");
// 	
// }
// document.write("<br />")
// //排序 以字母表顺序排序
// fruit.sort();
// document.write("输出数组为：<br />")
// 
// document.write("访问下标值为0的数组值为："+fruit[0]+"<br />");
// document.write("访问下标值为1的数组值为："+fruit[1]+"<br />");
// document.write("访问下标值为2的数组值为："+fruit[2]+"<br />");
// document.write("访问下标值为3的数组值为："+fruit[3]+"<br />");
// document.write("访问下标值为4的数组值为："+fruit[4]+"<br />");
// document.write(fruit+"<br />");
// 
// //向数组末尾添加元素   push
// fruit.push("banannn")
// document.write("访问下标值为5的数组值为："+fruit[5]+"<br />");
   
   
   //练习
// var fruit="apple,orange,peach,banana";
// var arrList=fruit.split(",");
// var str=arrList.join("-");
// document.write("分割前："+fruit+"<br />");
// document.write(arrList.length+"<br />");
// document.write("使用\"-\"重新连接后"+str+"<br />");
// for(var i=0;i<arrList.length;i++){
// 	document.write("fruit:"+arrList[i]+"<br />");
// 
 
 
 
 
// //分支循环语法
// 
// //循环
//var fruit="apple,orange,peach,banana";
// var arrList=fruit.split(",");
//
// for(var i=0;i<arrList.length;i++){
//
// 	if("banana"== arrList[i]){
// 		document.write(arrList[i]+":这个水果吃起来不错。<br />");
// 	}
// 	else{
// 		document.write(arrList[i]+":这个水果吃起来不好吃。<br />");
// 	}
// }
// 
// //for 增强版
// document.write("<h2>for 增强版</h2>")
// for(var j in arrList ){
// 		if("banana"== arrList[j]){
// 		document.write(arrList[j]+":这个水果吃起来不错。<br />");
// 	}
// 	else{
// 		document.write(arrList[j]+":这个水果吃起来不好吃。<br />");
// 	}
// }
//
////多分支
// document.write("<h2>switch 多分支语句</h2>")
//var weekday="星期二";
//switch(weekday)//要判断的变量
//{
//	case "星期一":  //if(weekday=="星期一")
//	document.write("新的一周要开始了<br />");
//	break;
//	case "星期二":  
//	document.write("周二开会<br />");
//	break;
//	case "星期三":  
//	document.write("周三演出<br />");
//	break;
//	case "星期四":  
//	document.write("这周快结束了<br />");
//	break;
//	case "星期五":  
//	document.write("明天休息<br />");
//	break;
//}
// 
////break
// document.write("<h2>break</h2>");
// for(var i=0;i<=5;i++){
// 	if(i==3){
// 		break;  //跳出整个循环
// 	}
// 	document.write("这个数字是："+i+"<br />");
// }
////continue
// document.write("<h2>continue</h2>");
// for(var i=0;i<=5;i++){
// 	if(i==3){
//		continue; //终止当次循环
// 	}
// 	document.write("这个数字是："+i+"<br />");
// }





