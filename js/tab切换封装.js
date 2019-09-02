function tabchanges(parentClass){
	var parent=document.querySelector(parentClass);
	var tabtitle=parent.querySelectorAll('.tab-title')
	var tablists=parent.querySelectorAll('.tab-lists')
	console.log(tabtitle,tablists)
	for(var i=0;i<tabtitle.length;i++){
		tabtitle[i].index=i;
		tabtitle[i].onmouseenter=function(){
			console.log(tablists)
			for(var j=0;j<tablists.length;j++){
				 tabtitle[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中	
				 tablists[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中		
			}
			
			this.classList.add('active');
			tablists[this.index].classList.add('active');//循环添加ul类名
		}
	}
}
//tabchanges('.tab-box1');

//		//1F
//		var goosssTitle=document.querySelectorAll('.goos-title')
//		for(var i=0;i<goosssTitle.length;i++)
//		{//给chanBoxTitle添加下标
//					goosssTitle[i].index=i;
//					goosssTitle[i].onmouseenter=function(){
//						var parent=this.parentNode.parentNode.nextElementSibling
//							 console.log(parent)
//		        var goosssLists = parent.children
//		        	 console.log(goosssLists)
//							for(var j=0;j<goosssTitle.length;j++)
//							{
//							goosssTitle[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中	
//				    		goosssLists[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中		
//							}
//							this.classList.add('active');
//					  	goosssLists[this.index].classList.add('active');
//					}
//		}
//		//2F
//		var goosssTitles=document.querySelectorAll('.gooss-title')
//		for(var i=0;i<goosssTitle.length;i++)
//		{//给chanBoxTitle添加下标
//					goosssTitles[i].index=i;
//					goosssTitles[i].onmouseenter=function(){
//						var parent=this.parentNode.parentNode.nextElementSibling
//							 console.log(parent)
//		        var goosssLists = parent.children
//		        	 console.log(goosssLists)
//							for(var j=0;j<goosssTitles.length;j++)
//							{
//							goosssTitles[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中	
//				    	goosssLists[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中		
//							}
//							this.classList.add('active');
//					  	goosssLists[this.index].classList.add('active');
//					}
//		}
//		//3F
//		var goosssTitle=document.querySelectorAll('.goosss-title')
//		for(var i=0;i<goosssTitle.length;i++)
//		{//给chanBoxTitle添加下标
//					goosssTitle[i].index=i;
//					goosssTitle[i].onmouseenter=function(){
//						var parent=this.parentNode.parentNode.nextElementSibling
//							 console.log(parent)
//		        var goosssLists = parent.children
//		        	 console.log(goosssLists)
//							for(var j=0;j<goosssTitle.length;j++)
//							{
//							goosssTitle[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中	
//				    	goosssLists[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中		
//							}
//							this.classList.add('active');
//					  	goosssLists[this.index].classList.add('active');}}
//					
//		