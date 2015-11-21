head=document.head.innerHTML
body=document.body.innerHTML
re=/window\|(.+?)\|return/
match=re.exec(head)
if(match.length==2){
	func=match[1]+'()'
	if(body.indexOf('请选择一个广告')!=-1){
		document.body.innerHTML='<img src="" onerror='+func+'>'
	}
}