var width=10;
var str="this is java 北大青鸟 合肥一元";
document.write("输出字符串：<br />")
document.write(str+"<br />");
document.write("变量width的类型："+typeof(width)+"<br />");
document.write("字符串长度："+str.length+"<br />");
document.write("获取i出现的首次位置(从索引号为1开始)："+str.indexOf("i",1)+"<br />");
document.write("获取索引号为2的字符："+str.charAt(2)+"<br />")
document.write("从1开始截取长度为9的字符串："+str.substr(1,9)+"<br />");
document.write("从1开始截取到索引号为9的字符，获取字符串："+str.substring(1,9)+"<br />");
document.write("分割后变成数组："+str.split("i")[0]+"<br />");

var classes= new Array("chinese","math","english","physics","chemistry");
document.write("输出数组：<br />")
for(var i=0;i<classes.length;i++)
{
	document.write(classes[i]+"&nbsp;&nbsp;");
}
document.write("<br />数组长度："+classes.length+"<br />");
document.write("连接后变成字符串："+classes.join("**")+"<br />");
document.write("排序结果（按照字母表排序）：<br />");
document.write("输出数组：<br />");
for(var i=0;i<classes.length;i++)
{
	document.write(classes.sort()[i]+"<br />");
}
document.write("向数组末尾添加元素geography：<br />");
document.write("输出数组：<br />");
classes.push("geography");
for(var i=0;i<classes.length;i++)
{
	document.write(classes[i]+"<br />");
}
for(var j in classes)
{
	document.write(classes[j]+"<br />")
}
