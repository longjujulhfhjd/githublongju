     var del=document.querySelector('.deleteAll')
      var dd = document.querySelector('.slide-shop-content')
      console.log(dd)
//		for(var i=0;i<del.length;i++){
//			 del[i].index=i
			del.onclick=function(){
//		    var bottomdiv =this.parentNode.parentNode.parentNode;
//		    bottomdiv.remove()
              dd.remove()

			}
//		}
      
     var del=document.querySelectorAll('.delete')
        
		for(var i=0;i<del.length;i++){
			del[i].onclick=function(){
		    var bottomdiv =this.parentNode.parentNode.parentNode;
		    bottomdiv.remove()
//		    console.log(bottomdiv)		
//		    floorrightist.removeChild(bottomdiv)
			}
		}



//个人中心
//底部、侧边、头部等公共部分的逻辑
//document.getElementById  只能获取一个，数据类型 对象{}
//document.getElemenetsByName  获取多个， 数组[]
//document.getElementsByTagName
//document.getElementsByClassName
//document.querySelector()  获取一个 第一个， 对象{}
//document.querySelectorAll() 获取多个  数组[]
//获取对象
    var personlists =document.querySelectorAll(".aside-bar-bar");//获取侧边栏里按钮对象
    //循环去使用每一个后代
    for(var i=0;i<personlists.length;i++){
    	
    	personlists[i].onmouseenter=function(){
    		//this  指向当前函数的执行的对象  li ,没有指向window
    		//获取子节点    		
    	    var bar=this.children[1];//
    	    if(!bar)
    	    {
    	    	return;
    	    }
    	    //需要right的值从45 变到 35
		    //定时器  让一个时间延迟执行  时间可以自定义
		    //setInterval(延迟执行的动作， 延迟的时间)
		    var right=45;
		    var time= setInterval(function(){
		    	right=right-1;
		    	if(right<=35)
		    	{
		    		clearInterval(time);
		    	}
		    	else{
		    		bar.style.right=right+'px';
		    	}
		    },10)
    	}
    }   
    //返回顶部
    var returnTop =document.querySelector('.turn-top'); //获取顶部按钮按钮，加点击事件
    returnTop.onclick=function(){
      //针对chrome//   	document.body.scrollTop=0 
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;//获取滚动条的位置含有兼容性问题
      var time= setInterval(function(){
		    	scrollTop=scrollTop-50;
		    	document.body.scrollTop=scrollTop;
		    	document.documentElement.scrollTop=scrollTop;
		    	if(scrollTop<=0)
		    	{
		    		clearInterval(time);//当位置到达时，结束循环
		    	}    	
		    },1)

//   	针对IE,firefox
//      document.documentElement.scrollTop=0 
  }
    
    
     //点击控件，购物车和客服滑出，给控件按钮添加同一个类名aside-slide-bar    
 		var slideBar=document.querySelectorAll(".aside-slide-bar");
		var aslide=document.querySelector(".aside-slide");//装有两个按钮内容的盒子
		var cart=document.querySelector('.shop-aside-slide');//购物车盒子
   		var sever=document.querySelector('.sever-aside-slide');//服务中心盒子
		for(var i=0;i<slideBar.length;i++){
  			slideBar[i].onclick=function(){	//给控件加点击事件
    		var right='';
  			  if(aslide.currentStyle){
      		 right=aslide.currentStyle.right;//获取css样式属性值，获取来是一个字符串，需要parseInt转换为整数适用于IE opera
   			 }else
   			 {
    		right=getComputedStyle(aslide,false)['right'];//获取css样式属性值，适用于window，getComputedStyle(要获取的属性的元素,false)
    		}  
             //判断滑出
   			var speed=0;
   			right=parseInt(right);
   			className=this.className;
   			//有on时点击让它收回，并移除on
   			if(right > -264 && className.indexOf('no')>=0)//已出来，正在出来的路上，让他收回  有on的类名就出来
   			 {//35 --> -264
    		    speed=-12;
    		   this.classList.remove('no')
   			 }
   			 //让他出来，已隐藏,没有on时点击让它出来，并添加on
   			 else {//-264 <-- 35 right<35说明隐藏的
   		 	    speed=12;
   		 	    this.classList.add('no');	  
   		 	    //判断显示的是购物车还是客服，className获取属性名
   		 	    if(className.indexOf('shop-carts-bar')>=0){
   		 	    //显示购物车，移除下一个on，下一个兄弟nextElementSibling
   		 	    this.nextElementSibling.classList.remove('no');
   		 	    cart.style.display='block';
   		 	    sever.style.display='none';
   		 	    }
                //  显示客服 移除上一个on，上一个兄弟previousElementSibling
   		 	    else{
   		 	    	this.previousElementSibling.classList.remove('no');
   		 	        sever.style.display='block';
   		 	        cart.style.display='none';
   		 	    }
   			 }
    	     //判断运动
    	    var time= window.setInterval(function(){
		    	right += speed;
		    	
		    	if((right > 35 && speed>0)|| (right < -264 && speed<0))//35- -264范围运动
		    	{
		    	clearInterval(time);
		    	}
		    	else{
		    	aslide.style.right=right+'px';
		    	}
		    },10)
    	
    }
}
