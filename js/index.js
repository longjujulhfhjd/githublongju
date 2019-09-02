       function croll(){       	
		//轮播
		//获取照片的宽度,和照片的张数
		//页面加载完成时计算完成		  
		  var bannercarosoul=document.querySelector(".banner-img");
		  var carosoalsildes=document.querySelector(".carosoal-silde");
		  var Bto=document.querySelectorAll(".bto");
		  var cicle=document.querySelectorAll(".carsoal-cicle li")
		  var bannerimg=document.querySelectorAll(".banner-img img");
		  //默认为第一张
		  var index=1;//定义显示的照片的为第二张
		  var cicleindex=0;//定义原点跳的位置
		  var speed=-10;
		   //照片的宽度等于任意一张图片的宽度
			 var imgwidth=bannerimg[0].offsetWidth
			//照片的张数
			 var imglength=bannerimg.length;
			 //盒子的宽度
			 carosoalsildes.style.width=imgwidth * imglength+'px';
			 //两秒后再轮播一次,无限轮播  
		   var autoInterval=null;
			 autoAniamate();
			 function autoAniamate(){
			   	autoInterval=setInterval(function(){
			   		speed=-Math.abs(speed)
			    	animate();
			    },2000)
			 }
			 //图片移动
			  function animate(){  	
			  	changeCicle();
			  var timer= setInterval(function(){
		      //解析思路，无缝轮播图，将第一张放在最后，将最后放在最前面，默默的将它换到第1张
			 		var left=carosoalsildes.offsetLeft+speed;//图片滚动的速度	 		console.log(111)
			 		carosoalsildes.style.left=left+'px';//一直向左滚动,获取图片位置
			 		var curindex=0;
			 		if(speed<0){
			 			   curindex=index+1;
			 		}
			 		else{
			 			   curindex=index-1;
			 		} 	 		 
			 		if((left <= -(curindex)* imgwidth && speed<0)||(left >= -(curindex) * imgwidth && speed>0))
			 		{//如果大于盒子的宽度就结束
			 			clearInterval(timer)
			 			index=curindex;
			 			if(index>=imglength-1)
			 			{
			 				index=1;
			 				carosoalsildes.style.left=-imgwidth+'px';
			 			}
			 				else if(index<=0)
			 			{
			 				index=imglength-2;
			 				carosoalsildes.style.left=-index*imgwidth+'px';
			 			}
			 		}
			 	},10)
			 }
		   //给每左右按钮加点击事件
		   function changeCicle(){
			     if(speed<0)
					{
						 cicleindex++;
					}else{
				    cicleindex--;
					}
					if(cicleindex>cicle.length-1)//当左咦到了cicle.length-1盒子长度减一的位置，就转到第一张，下标从0开始
					{
						 cicleindex=0;	
					}else if(cicleindex<0)//当右移到了第一张以前，就转到倒数第一张，就是盒子长度减2 cicle.length-2
					
					{
						cicleindex=cicle.length-1;
					}
					for(var i=0;i<cicle.length;i++){
						cicle[i].classList.remove('on');
					}
						cicle[cicleindex].classList.add('on');
				}   
				for(var i=0;i<Bto.length;i++)
				 {
				 	Bto[i].onclick=function(){
							 		var curIndex=index;
							 		var className=this.className;
							 		if(className.indexOf('btozuo')>= 0)
							 		{//右移
							 			speed=Math.abs(speed)
							 			 animate();	
							 		}
							 		else{
							 			speed=-Math.abs(speed)
							 			animate();
							 		}
					 	}
				 } 
			  //给圆点加点击事件
				for(var i=0;i<cicle.length;i++){
									cicle[i].cicle=i;
									cicle[i].onclick=function(){
												if(this.cicle<cicleindex){
													speed=Math.abs(speed);
													index=this.cicle+2//var index=1;//定义显示的照片的为第二张 index要显示第2张，index为1；在上面index--，所以+2,2-1=1
													cicleindex=this.cicle+1;
													
												}else{
														speed=-Math.abs(speed);
														index=this.cicle//
														cicleindex=this.cicle-1;// cicleindex=0;//定义圆点跳的位置
												}
												animate();
							}
			}
		//		鼠标移入结束波动
				bannercarosoul.onmouseenter=function(){
								clearInterval(autoInterval);
					}
				//鼠标移除继续调用方法
				bannercarosoul.onmouseleave=function(){
					autoAniamate();
			}
				//  当浏览器最小化或切换不同标签是执行的动作webkitvisibilitychange；
				//doucument.addEventListener监听事件
				document.addEventListener('webkitvisibilitychange',function(){
						var isHidder=document.hidden||document.webkitVisibilityState
						if(isHidder){
							clearInterval(autoInterval);
						}
						else{
							autoAniamate();
						}
				});
				document.addEventListener('webkitvisibilitychange',function(){
						var isHidden=document.webkitVisibilityState;
					if(isHidden=='hidden'){
						clearInterval(autoInterval);
					}else{
						autoAniamate();
					}
				});
       }
       croll();
		jsdowntime();
		var countInterval=setInterval(jsdowntime,1000);
		
		//倒计时
		function jsdowntime(){	
			var countdownTime=countDown('2019-8-30 22:37:00')
			if( parseInt(countdownTime)<=0)
			{
				clearInterval(countInterval);	
			}
			var arr=countdownTime.split('');
			var html=`
				             <span>本场还剩</span>
				             <span class="time">${arr[0]}</span>
				             <span class="time">${arr[1]}</span>
				             <span>:</span>
				             <span class="time">${arr[2]}</span>
				             <span class="time">${arr[3]}</span>
				             <span>:</span>
				             <span class="time">${arr[4]}</span>
				             <span class="time">${arr[5]}</span>
				              <span>:</span>
				             <span class="time">${arr[6]}</span>
				             <span class="time">${arr[7]}</span>`
			
<<<<<<< HEAD
		var countdownTime=countDown('2019-9-1 23:37:00')
		if( parseInt(countdownTime)<=0)
		{
			clearInterval(countInterval);	
		}
		var arr=countdownTime.split('');
		var html=`
			             <span>本场还剩</span>
			             <span class="time">${arr[0]}</span>
			             <span class="time">${arr[1]}</span>
			             <span>:</span>
			             <span class="time">${arr[2]}</span>
			             <span class="time">${arr[3]}</span>
			             <span>:</span>
			             <span class="time">${arr[4]}</span>
			             <span class="time">${arr[5]}</span>`
		
		document.querySelector('.count-down').innerHTML=html;
=======
			document.querySelector('.count-down').innerHTML=html;
>>>>>>> 922b32f2ea02f8d5a12f85ccd5d6f1fd99869bef
		}
		
		
		
		//beginTime 指倒计时开始的时间
		//endTime 倒计时结束的时间
		function countDown(endTime,beginTime){
			if(!beginTime){
				//当前时间是距离1970年1月1日毫秒数
				beginTime =new Date().getTime();//得到当前时间
			}else{
				beginTime =new Date(beginTime).getTime();//得到当前时间
			}
			//endTime 倒计时结束的时间距离 1970年的毫秒数
			  endTime=new Date(endTime).getTime()
			//计算倒计时相差的毫秒数s
			var distance=endTime-beginTime
			if(distance<=0)
			{
				return '00000000';
			}
			//距离毫秒数=小时数+分钟数+秒的毫秒数
			//1小时=60分 1分钟=60秒 1秒=1000毫秒
			//一天的毫秒数24*60*60*1000
			var day=Math.floor(distance/(24*60*60*1000))
			//1小时的毫秒数1*60*60*1000
			var hours=Math.floor(distance-day*24*60*60*1000)/(60*60*1000))
			//1分钟的毫秒数60*1000
			var minutes=Math.floor((distance-day*24*60*60*1000-hours*60*60*1000)/(60*1000))
			//1秒的毫秒数1000
			var seconds=Math.floor((distance-day*24*60*60*1000-hours*60*60*1000-minutes*60*1000)/1000)
			return changgeLength(day)-changgeLength(hours)+changgeLength(minutes)+changgeLength(seconds)
		}
		function changgeLength(num){
			num=String(num)
			if(num.length<=1){
				num='0'+num
				
			}
			return num;
		}
//	tabchanges('.tab-box1')
	
		//切换
		//得到三个标题栏
//		var chanBoxTitle=document.querySelectorAll('.tab-title')
//		for(var i=0;i<chanBoxTitle.length;i++)
//		{//给chanBoxTitle添加下标
//					chanBoxTitle[i].index=i;
//					chanBoxTitle[i].onmouseenter=function(){
//						var parent=this.parentNode.nextElementSibling
//						 console.log(parent)
//		         var tablists= parent.children
//		         console.log(tablists)
//							for(var j=0;j<chanBoxTitle.length;j++)
//							{
//							chanBoxTitle[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中	
//							tablists[j].classList.remove('active');//循环去掉active,只有一个被添加active,一个被选中		
//							}
//							this.classList.add('active');
//					  	tablists[this.index].classList.add('active');
//					}
//		}
//		
//		
//		

		//
		// var autoInterval=null;
		//	 autoAniamate();
		//	 function autoAniamate(){
		//	   	autoInterval=setInterval(function(){
		//	    	animate(-10);
		//	    },10)
		//	 }
		//
		//	 //图片移动
		//	  function animate(speed){  	
		//	  var timer= setInterval(function(){
		//    //解析思路，无缝轮播图，将第一张放在最后，将最后放在最前面，默默的将它换到第1张
		//	 		var left=carosoalsildes.offsetLeft+speed;//图片滚动的速度	 		console.log(111)
		//	 		carosoalsildes.style.left=left+'px';//一直向左滚动,获取图片位置
		//	 		if(left <= -(index+1) * imgwidth)
		//	 		{//如果大于盒子的宽度就结束
		//	 			clearInterval(timer)
		//	 			index++;
		//	 			if(index>=imglength-1)
		//	 			{
		//	 				index=1;
		//	 				carosoalsildes.style.left=-imgwidth+'px';
		//	 			}
		//	 		}
		//	 	},10)
		//	 }
		//	    function leftanimate(speed){  
		//	    var timer2= setInterval(function(){
		//    //解析思路，无缝轮播图，将第一张放在最后，将最后放在最前面，默默的将它换到第1张
		//	 		var left=carosoalsildes.offsetLeft+speed;//图片滚动的速度	 		console.log(111)
		//	 		carosoalsildes.style.left=left+'px';//一直向左滚动
		//	 		if(left >= -(index-1) * imgwidth)
		//	 		{//如果大于盒子的宽度就结束
		//	 			clearInterval(timer2)
		//	 			index--;
		//	 			if(index<=0)
		//	 			{
		//	 				index=imglength-2;
		//	 				carosoalsildes.style.left=-index*imgwidth+'px';
		//	 			}
		//	 		}
		//	 	},10)
		//	 }
		//bannercarosoul.onmouseenter=function(){
		//				clearInterval(autoInterval);
		//	}
		//bannercarosoul.onmouseleave=function(){
		//			autoAniamate();
		//	}
		//
		//
		////给每左右按钮加点击事件
		// for(var i=0;i<Bto.length;i++)
		// {
		// 	Bto[i].onclick=function(){
		// 		var curIndex=index;
		// 		var className=this.className;
		// 		if(className.indexOf('btozuo') >= 0)
		// 		{
		// 			 leftanimate(10);	
		// 		}
		// 		else{
		// 			animate(-10);
		// 		}
		// 	}
		// }
		


















