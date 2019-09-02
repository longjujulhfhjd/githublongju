function  ajaxpage(options){
	//1.创建请求
	var  request=new XMLHttpRequest();
	//2.创建请求	request.open(请求类型,请求地址,同步还是异步)
		request.open(options.type||'get',options.url,options.async||true)
	//3.发送请求	request.send(data)
	request.send(options.data||null)
	//4.发送请求
	request.onreadystatechange=function(){
		if(request.readyState==4 && request.status==200){
			var data=request.responseText//字符串
		
			if(options.dataType=='json'){
				data=JSON.parse(data);
			}	
			options.success(data)
		}
	}
}