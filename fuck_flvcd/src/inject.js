head=document.head.innerHTML
body=document.body.innerHTML
re1=/\)\);\w+?='(\w+?)'/
re2=/';\w+?=(\d+?);/
match1=re1.exec(head)
match2=re2.exec(head)
function createSc(a,t){var b="24227945943216730751837054267565";t=Math.floor(t/(600*1000));ret="";for(var i=0;i<a.length;i++){var j=a.charCodeAt(i)^b.charCodeAt(i)^t;j=j%'z'.charCodeAt(0);var c;if(j<'0'.charCodeAt(0)){c=String.fromCharCode('0'.charCodeAt(0)+j%9)}else if(j>='0'.charCodeAt(0)&&j<='9'.charCodeAt(0)){c=String.fromCharCode(j)}else if(j>'9'.charCodeAt(0)&&j<'A'.charCodeAt(0)){c='9'}else if(j>='A'.charCodeAt(0)&&j<='Z'.charCodeAt(0)){c=String.fromCharCode(j)}else if(j>'Z'.charCodeAt(0)&&j<'a'.charCodeAt(0)){c='Z'}else if(j>='z'.charCodeAt(0)&&j<='z'.charCodeAt(0)){c=String.fromCharCode(j)}else{c='z'}ret+=c}return ret}
if(match1.length==2&&match2.length==2){
	if(body.indexOf('请选择一个广告')!=-1){
		var g = createSc(match1[1], match2[1]);
		var date = new Date();date.setTime(date.getTime()+300*1000);
		document.cookie="go="+g+";expires="+date.toGMTString();
		document.cookie="avdGggggtt="+match2[1]+";expires="+date.toGMTString();
		window.setTimeout(function(){window.location.reload();}, 500);
	}
}
