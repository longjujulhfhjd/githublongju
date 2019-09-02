	function banner()
	{
		var  request=new XMLHttpRequest();
		var requesturl='http://192.168.97.247:3001/'
		console.log(requesturl)
		//17.0.0.1:3000/lists
		request.open("get",requesturl+'getBanner',true)
		//
		request.send(null)
		request.onreadystatechange=function(){
		//	request.responseText
		//request.readyState
			if(request.readyState==4)
			{
				//字符串这需要装换为对象
				var result=JSON.parse(request.responseText);	
				if(result.success==true)
				{
					var lists=result.list
					var slid=document.querySelector('.carosoal-silde')				
					var html =`<img src="${requesturl+lists[lists.length-1].img}"/>`
					for(var i=0;i<lists.length;i++)
					{
						html +=` <img src="${requesturl+lists[i].img}"/>`
					}
					 html +=` <img src="${requesturl+lists[0].img}"/>`
				  	slid.innerHTML=html;
	                croll();
			} 
		} 
	}	
}
banner()