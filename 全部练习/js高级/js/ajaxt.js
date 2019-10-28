	//创建ajax请求new XMLHttpRequest();
	let  request=new XMLHttpRequest();
	
	let requesturl='http://192.168.43.212:3001/'
	
	//17.0.0.1:3000/lists
   //打开请求request.open(请求类型,请求地址,同步还是异步)
	request.open("get",requesturl+'getBanner',true)
	
	//发送请求request.send(null) request.send(data)
	request.send(null)
	
	request.onreadystatechange=function(){
		//监听状态
		if(request.readyState==4 ){
			//请求返回的内容
			console.log(request.responseText)
		}
	}