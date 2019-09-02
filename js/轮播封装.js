//向右走,left逐渐减小
function turnbox(box){
	//  获得两个点击按钮
	var bto =document.querySelectorAll('.bto');
	//  获取原点
	var cicle =document.querySelectorAll('.carsoal-cicle li');
	//	获取最外部的盒子
	var outcursoal =document.querySelector(box);
	//	获取照片
	var innerimg=outcursoal.querySelectorAll('.iner-img');
	//	获取移动盒子
	var inerslide=outcursoal.querySelector('.iner-slide');
	//	获取照片的宽度(offsetWidth)
	var imgwidth=innerimg[0].offsetWidth
	//	获取照片的张数
	var imglength=innerimg.length
	console.log(imglength*imgwidth)
	//	把算出来的移动盒子的宽度设置给移动盒子属性
	inerslide.style.width= imgwidth * imglength + 'px';
	//  定义轮播开始的位置
	var index=1;
	var speed=10;
	//圆点计数
	var dotIndex=0;
	//  让图片循环运动
	var autoInterval=null;
	autoAniamate();
	function autoAniamate(){
		autoInterval = setInterval(function(){
		speed=-Math.abs(speed) 	
		animate();	
	    },3000)
	}
	//让图片运动
	function animate(){
		cicledot();
		//	让内部的盒子运动起来，用定时器定义成方法
		var timer = setInterval(function(){
		 var left=inerslide.offsetLeft + speed
		 inerslide.style.left= left +'px';
		 //即将要运动的图片的下标
		 var curindex=0;
		 if(speed<0){
		 	curindex=index+1
		 }
		 else{
		 	curindex=index-1
		 }
		 if((left <=-curindex * imgwidth && speed<0 )||(left >= -curindex * imgwidth && speed>0))
		 {
            clearInterval(timer);
		 	index=curindex;		 		
		 	if(index >= imglength - 1 ){
		 	//判断最后一张的图片的位置imglength - 1 ,运动到最后一张就跳到默认第一张，index=1;		
		 	inerslide.style.left=-imgwidth+'px'
		 	index=1;
		 	}else if(index<=0){
		 		index=imglength-2;
			 	inerslide.style.left=-index*imgwidth+'px';
		 	}

		 }
		 
	},10)
}
//给原点加点击事件
for(var i=0;i<cicle.length;i++){
	cicle[i].cic=i
	cicle[i].onclick=function(){
		if(this.cic<dotIndex){
			speed=Math.abs(speed)
			index=this.cic+2;
			dotIndex=this.cic+1
			
		}else{
			speed=-Math.abs(speed)
			index=this.cic;
			dotIndex=this.cic-1
			
		}
		animate();
	}
}
function cicledot(){
	    if(speed<0){
	    	dotIndex++
	    }else{
	    	dotIndex--
	    }
	    if(dotIndex >cicle.length-1)
	    {
	    	dotIndex=0;
	    }
	    else if(dotIndex<0)
	    {
	    	dotIndex=cicle.length-1
	    }
    	for(var i=0;i<cicle.length;i++){
    		cicle[i].classList.remove('on')
    	}
    	cicle[dotIndex].classList.add('on')
}
	//给左右按钮加点击事件
	for(var i=0;i<bto.length;i++){
		bto[i].onclick=function(){
			var className=this.className
			if(className.indexOf('zuo-bto')>=0){
				//点击左按钮
				speed=Math.abs(speed)
				animate();
			}else{
				speed=-Math.abs(speed)
				animate();
			}
		
		}
	}
//  鼠标移入结束波动
inerslide.onmouseenter=function(){
	clearInterval(autoInterval);
}
//  鼠标移除继续调用方法
inerslide.onmouseleave=function(){
	autoAniamate();
}

//  当浏览器最小化或切换不同标签是执行的动作webkitvisibilitychange；
//	doucument.addEventListener监听事件
document.addEventListener('webkitvisibilitychange',function(){
	var isHidden=document.webkitVisibilityState;
	if(isHidden=='hidden'){
		clearInterval(autoInterval);
	}else{
		autoAniamate();
	}
});
}



////传参
//function turnbox(box){
//	//  获得两个点击按钮
//	var bto =document.querySelectorAll('.bto');
//	//  获取原点
//	var cicle =document.querySelectorAll('.carsoal-cicle li');
//	//	获取最外部的盒子
//	var outcursoal =document.querySelector(box);
//	//	获取照片
//	var innerimg=outcursoal.querySelectorAll('.iner-img');
//	//	获取移动盒子
//	var inerslide=outcursoal.querySelector('.iner-slide');
//	//	获取照片的宽度(offsetWidth)
//	var imgwidth=innerimg[0].offsetWidth
//	//	获取照片的张数
//	var imglength=innerimg.length
//	console.log(imglength*imgwidth)
//	//	把算出来的移动盒子的宽度设置给移动盒子属性
//	inerslide.style.width= imgwidth * imglength + 'px';
//	//  定义轮播开始的位置
//	var index=1;
//	//圆点计数
//	var dotIndex=0;
//	//  让图片循环运动
//	var autoInterval=null;
//	autoAniamate();
//	function autoAniamate(){
//		 autoInterval = setInterval(function(){
//		animate(-10,'right');	
//	    },3000)
//	}
//	//让图片运动
//	function animate(speed,position){
//		cicledot(position);
//		//	让内部的盒子运动起来，用定时器定义成方法
//		var timer = setInterval(function(){
//		 var left=inerslide.offsetLeft + speed
//		 inerslide.style.left= left +'px';
//		 //即将要运动的图片的下标
//		 var curindex=0;
//		 if(position =='right'){
//		 	curindex=index+1
//		 }
//		 else{
//		 	curindex=index-1
//		 }
//		 if((left <=-curindex * imgwidth && speed<0 )||(left >= -curindex * imgwidth && speed>0))
//		 {
//          clearInterval(timer);
//		 	index=curindex;		 		
//		 	if(index >= imglength - 1 ){
//		 	//判断最后一张的图片的位置imglength - 1 ,运动到最后一张就跳到默认第一张，index=1;		
//		 	inerslide.style.left=-imgwidth+'px'
//		 	index=1;
//		 	}else if(index<=0){
//		 		index=imglength-2;
//			 	inerslide.style.left=-index*imgwidth+'px';
//		 	}
//
//		 }
//		 
//	},10)
//}
//function cicledot(position){
//	    if(position=='right'){
//	    	dotIndex++
//	    }else{
//	    	dotIndex--
//	    }
//	    if(dotIndex >cicle.length-1)
//	    {
//	    	dotIndex=0;
//	    }
//	    else if(dotIndex<0)
//	    {
//	    	dotIndex=cicle.length-1
//	    }
//  	for(var i=0;i<cicle.length;i++){
//  		cicle[i].classList.remove('on')
//  	}
//  	cicle[dotIndex].classList.add('on')
//}
//	//给左右按钮加点击事件
//	for(var i=0;i<bto.length;i++){
//		bto[i].onclick=function(){
//			var className=this.className
//			if(className.indexOf('zuo-bto')>=0){
//				//点击左按钮
//				animate(10,'left');
//			}else{
//				animate(-10,'right');
//			}
//		
//		}
//	}
////  鼠标移入结束波动
//inerslide.onmouseenter=function(){
//	clearInterval(autoInterval);
//}
////  鼠标移除继续调用方法
//inerslide.onmouseleave=function(){
//	autoAniamate();
//}
//
////  当浏览器最小化或切换不同标签是执行的动作webkitvisibilitychange；
////	doucument.addEventListener监听事件
//document.addEventListener('webkitvisibilitychange',function(){
//	var isHidden=document.webkitVisibilityState;
//	if(isHidden=='hidden'){
//		clearInterval(autoInterval);
//	}else{
//		autoAniamate();
//	}
//});
//}


//
////向右走,left逐渐减小
//function turnbox(box){
//	//  获得两个点击按钮
//	var bto =document.querySelectorAll('.bto');
//	//  获取原点
//	var cicle =document.querySelectorAll('.carsoal-cicle');
//	//	获取最外部的盒子
//	var outcursoal =document.querySelector(box);
//
//	//	获取照片
//	var innerimg=outcursoal.querySelectorAll('.iner-img');
//	//	获取移动盒子
//	var inerslide=outcursoal.querySelector('.iner-slide');
//	//	获取照片的宽度(offsetWidth)
//	var imgwidth=innerimg[0].offsetWidth
//	//	获取照片的张数
//	var imglength=innerimg.length
//	console.log(imglength*imgwidth)
//	//	把算出来的移动盒子的宽度设置给移动盒子属性
//	inerslide.style.width= imgwidth * imglength + 'px';
//	//  定义轮播开始的位置
//	var index=1;
//	//  让图片循环运动
//	var autoInterval=null;
//	autoAniamate();
//	function autoAniamate(){
//		 autoInterval = setInterval(function(){
//		animate(-10);	
//	    },3000)
//	}
//	//让图片运动
//	function animate(speed){
//		//	让内部的盒子运动起来，用定时器定义成方法
//		var timer = setInterval(function(){
//		 var left=inerslide.offsetLeft + speed
//		 inerslide.style.left= left +'px';
//		 if(left <= -(index+1) * imgwidth)
//		 {
//          clearInterval(timer);
//		 	index++;		 		
//		 	if(index >= imglength - 1 ){
//		 	//判断最后一张的图片的位置imglength - 1 ,运动到最后一张就跳到默认第一张，index=1;		
//		 	inerslide.style.left=-imgwidth+'px'
//		 	index=1;
//		 	}
//		 	console.log(index)
//		 }
//		 
//	},10)
//	}
//	function leftanimate(speed){
//		//	让内部的盒子运动起来，用定时器定义成方法
//		var timer1 = setInterval(function(){
//			 var left=inerslide.offsetLeft + speed
//			 inerslide.style.left= left +'px';
//			 if(left >= -(index-1) * imgwidth)
//			 {
//		        clearInterval(timer1);
//			 	index--;		 		
////			 	if(index<=0 ){
////			 		index=imglength-2;
////			 		inerslide.style.left=-index*imgwidth+'px';
////			 	}
//                 if(index<=0)
//			 			{
//			 				index=imglength-2;
//			 				inerslide.style.left=-index*imgwidth+'px';
//			 			}
//		 }
//		 
//	},10)
//	}
//	//给左右按钮加点击事件
//	for(var i=0;i<bto.length;i++){
//		bto[i].onclick=function(){
//			var className=this.className
//			if(className.indexOf('zuo-bto')>=0){
//				//点击左按钮
//				leftanimate(10);
//			}else{
//				animate(-10);
//			}
//		}
//	}
////  鼠标移入结束波动
//inerslide.onmouseenter=function(){
//	clearInterval(autoInterval);
//}
////  鼠标移除继续调用方法
//inerslide.onmouseleave=function(){
//	autoAniamate();
//}
//
////  当浏览器最小化或切换不同标签是执行的动作webkitvisibilitychange；
////	doucument.addEventListener监听事件
//document.addEventListener('webkitvisibilitychange',function(){
//	var isHidden=document.webkitVisibilityState;
//	if(isHidden=='hidden'){
//		clearInterval(autoInterval);
//	}else{
//		autoAniamate();
//	}
//});
//}


////向右走,left逐渐减小左右按钮点击事件
//function turnbox(box){
//	//获得两个点击按钮
//	var bto =document.querySelectorAll('.bto');
//	//	获取最外部的盒子
//	var outcursoal =document.querySelector(box);
//
//	//	获取照片
//	var innerimg=outcursoal.querySelectorAll('.iner-img');
//	//	获取移动盒子
//	var inerslide=outcursoal.querySelector('.iner-slide');
//	//	获取照片的宽度(offsetWidth)
//	var imgwidth=innerimg[0].offsetWidth
//	//	获取照片的张数
//	var imglength=innerimg.length
//	console.log(imglength*imgwidth)
//	//	把算出来的移动盒子的宽度设置给移动盒子属性
//	inerslide.style.width= imgwidth * imglength + 'px';
//	//定义轮播开始的位置
//	var index=1;
//	//让图片循环运动
//	var autoInterval=null;
//	autoAniamate();
//	function autoAniamate(){
//		 autoInterval = setInterval(function(){
//		animate(-10);	
//	    },3000)
//	}
//	//让图片运动
//	function animate(speed){
//		//	让内部的盒子运动起来，用定时器定义成方法
//		var timer = setInterval(function(){
//		 var left=inerslide.offsetLeft + speed
//		 inerslide.style.left= left +'px';
//		 if(left <= -(index+1) * imgwidth)
//		 {
//          clearInterval(timer);
//		 	index++;		 		
//		 	if(index >= imglength - 1 ){
//		 	//判断最后一张的图片的位置imglength - 1 ,运动到最后一张就跳到默认第一张，index=1;		
//		 	inerslide.style.left=-imgwidth+'px'
//		 	index=1;
//		 	}
//		 	console.log(index)
//		 }
//		 
//	},10)
//	}
//	function leftanimate(speed){
//		//	让内部的盒子运动起来，用定时器定义成方法
//		var timer1 = setInterval(function(){
//			 var left=inerslide.offsetLeft + speed
//			 inerslide.style.left= left +'px';
//			 if(left >= -(index-1) * imgwidth)
//			 {
//		        clearInterval(timer1);
//			 	index--;		 		
////			 	if(index<=0 ){
////			 		index=imglength-2;
////			 		inerslide.style.left=-index*imgwidth+'px';
////			 	}
//                 if(index<=0)
//			 			{
//			 				index=imglength-2;
//			 				inerslide.style.left=-index*imgwidth+'px';
//			 			}
//		 }
//		 
//	},10)
//	}
//	//给左右按钮加点击事件
//	for(var i=0;i<bto.length;i++){
//		bto[i].onclick=function(){
//			var className=this.className
//			if(className.indexOf('zuo-bto')>=0){
//				//点击左按钮
//				leftanimate(10);
//			}else{
//				animate(-10);
//			}
//		}
//	}
////  鼠标移入结束波动
//inerslide.onmouseenter=function(){
//	clearInterval(autoInterval);
//}
////  鼠标移除继续调用方法
//inerslide.onmouseleave=function(){
//	autoAniamate();
//}
//
////  当浏览器最小化或切换不同标签是执行的动作webkitvisibilitychange；
////	doucument.addEventListener监听事件
//document.addEventListener('webkitvisibilitychange',function(){
//	var isHidden=document.webkitVisibilityState;
//	if(isHidden=='hidden'){
//		clearInterval(autoInterval);
//	}else{
//		autoAniamate();
//	}
//});
//}








//向右走,left逐渐减小
//function turnbox(box){
//	//	获取最外部的盒子
//	var outcursoal =document.querySelector(box);
//	//	获取照片
//	var innerimg=outcursoal.querySelectorAll('.iner-img');
//	//	获取移动盒子
//	var inerslide=outcursoal.querySelector('.iner-slide');
//	//	获取照片的宽度(offsetWidth)
//	var imgwidth=innerimg[0].offsetWidth
//	//	获取照片的张数
//	var imglength=innerimg.length
//	console.log(imglength*imgwidth)
//	//	把算出来的移动盒子的宽度设置给移动盒子属性
//	inerslide.style.width= imgwidth * imglength + 'px';
//	//定义轮播开始的位置
//	var index=1;
//	//让图片循环运动
//	var timer1 = setInterval(function(){
//		animate();	
//	},2000)
//	//让图片运动
//	function animate(){
//		//	让内部的盒子运动起来，用定时器定义成方法
//		var timer = setInterval(function(){
//		 var left=inerslide.offsetLeft - 20
//		 inerslide.style.left= left +'px';
//		 if(left <= -(index+1) * imgwidth)
//		 {
//          clearInterval(timer);
//		 	index++;		 		
//		 	if(index >= imglength - 1 ){
//		 	//判断最后一张的图片的位置imglength - 1 ,运动到最后一张就跳到默认第一张，index=1;		
//		 	inerslide.style.left=-imgwidth+'px'
//		 	index=1;
//		 	}
//		 	console.log(index)
//		 }
//		 
//	},10)
//	}
//
//}
//function youfeng(box){
//	//	获取最外部的盒子
//	var outcursoal =document.querySelector(box);
//	//	获取照片
//	var innerimg=outcursoal.querySelectorAll('.iner-img');
//	//	获取移动盒子
//	var inerslide=outcursoal.querySelector('.iner-slide');
//	//	获取照片的宽度(offsetWidth)
//	var imgwidth=innerimg[0].offsetWidth
//	//	获取照片的张数
//	var imglength=innerimg.length
//	console.log(imglength*imgwidth)
//	//	把算出来的移动盒子的宽度设置给移动盒子属性
//	inerslide.style.width= imgwidth * imglength + 'px';
//	//定义轮播开始的位置
//	var index=1;
//	//让图片循环运动
//	var timer1 = setInterval(function(){
//		
//		animate();	
//	},2000)
//	//让图片运动
//
//	
//	
//	function animate(){
//		//	让内部的盒子运动起来，用定时器定义成方法
//		var timer = setInterval(function(){
//		 var left=inerslide.offsetLeft - 20
//		 inerslide.style.left= left +'px';
//		 if(left <= -(index+1) * imgwidth)
//		 {
//          clearInterval(timer);
//		 	index++;		 	
//		 	//判断最后一张的图片的位置		 	
//		 	console.log(index)
//		 }
//	},10)
//	}
//
//}