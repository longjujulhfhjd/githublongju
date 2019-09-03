 function   resolveAjax(options){
 	return new Promise(function(resolve,reject){
 		//1.创建请求
	let  request=new XMLHttpRequest();
	//2.创建请求	request.open(请求类型,请求地址,同步还是异步)
		request.open(options.type,options.url,options.async)
	//3.发送请求	request.send(data)
	request.send(null)
	//4.发送请求
	request.onreadystatechange=function(){
		if(request.readyState==4 && request.status==200){
			resolve(request.responseText)
		}else if(request.readyState==4 && request.status !=200){
			reject(request.responseText)
		}
	}

 	})
 }
	