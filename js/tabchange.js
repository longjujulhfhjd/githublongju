function tabchange1(){
	 	var  request=new XMLHttpRequest();
		var requesturl='http://192.168.97.247:3001/'
		console.log(requesturl)
		//17.0.0.1:3000/lists
		request.open("get",requesturl+'lists?id=1',true)
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
					console.log(lists)
					var slid=document.querySelector('.tabul1')	
					console.log(slid)
					var html=""
					for(var i=0;i<lists.length;i++)
					{
						html +=`
					<li class="change-lists float-l ">
		   		 		<img src="${requesturl+lists[i].img}"/>
	         			<div class="chang-text font-14">
	         				<div class="overflow font-16">${lists[i].title}</div>
	         				<div class="text-main font-22">${lists[i].price}</div>
	         		    </div>
		   		    </li>
		   		    `
					}					
				  	slid.innerHTML=html;
	                
			} 
		} 
	}	
}

function tabchange2(){
	 	var  request=new XMLHttpRequest();
		var requesturl='http://192.168.97.247:3001/'
		console.log(requesturl)
		//17.0.0.1:3000/lists
		request.open("get",requesturl+'lists?id=2',true)
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
					console.log(lists)
					var slid=document.querySelector('.tabul2')	
					console.log(slid)
					var html=""
					for(var i=0;i<lists.length;i++)
					{
						html +=`
					<li class="change-lists float-l ">
		   		 		<img src="${requesturl+lists[i].img}"/>
	         			<div class="chang-text font-14">
	         				<div class="overflow font-16">${lists[i].title}</div>
	         				<div class="text-main font-22">${lists[i].price}</div>
	         		    </div>
		   		    </li>
		   		    `
					}
//					 html +=` <img src="${requesturl+lists[0].img}"/>`
				  	slid.innerHTML=html;
	                
			} 
		} 
	}	
}


function tabchange3(){
	 	var  request=new XMLHttpRequest();
		var requesturl='http://192.168.97.247:3001/'
		console.log(requesturl)
		//17.0.0.1:3000/lists
		request.open("get",requesturl+'lists?id=3',true)
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
					console.log(lists)
					var slid=document.querySelector('.tabul3')	
					console.log(slid)
					var html=""
					for(var i=0;i<lists.length;i++)
					{
						html +=`
					<li class="change-lists float-l ">
		   		 		<img src="${requesturl+lists[i].img}"/>
	         			<div class="chang-text font-14">
	         				<div class="overflow font-16">${lists[i].title}</div>
	         				<div class="text-main font-22">${lists[i].price}</div>
	         		    </div>
		   		    </li>
		   		    `
					}
//					 html +=` <img src="${requesturl+lists[0].img}"/>`
				  	slid.innerHTML=html;
	                
			} 
		} 
	}	
}
tabchange1()
tabchange2()
tabchange3()