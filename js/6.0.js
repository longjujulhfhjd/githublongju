var prev=$('.pre1');
var next=$('.pre2');
var scrool=$('.share-imgbox')
var img=$('.share-imgboxlist')
var imglength=img.length
var imgwidth=img.outerWidth(true);
var scollwidth=imglength*imgwidth;
scrool.css({
	width:scollwidth/2
})
next.click(function(){
	scrool.animate({
		'margin-left':-imgwidth
},function(){
		scrool.find('li').eq(0).appendTo(scrool);
		scrool.css({
			'margin-left':0
		})
	}
)
})
prev.click(function(){
		scrool.find('li:last').prependTo(scrool);
		scrool.css({
			'margin-left':-imgwidth
		})
		scrool.animate({
			'margin-left':0
		})
})
// var ad=setInterval(function(){
// 		next.click();
// },3000)  
// 
//scoll.hover(function(){
//	clearInterval(ad)
//}),function(){
//	ad=setInterval(function(){
// 		next.click()
// },3000)
//}

var fabiaonbto=$(".buttonhong")
	           fabiaonbto.click(function(){
	           	
	             if($(".nonediscount").css('display')=='none') {
	             	$(".nonediscount").addClass("hover")
	             	}
	             else{
	             		 $(".nonediscount").removeClass("hover") 
	                 }
		         var send=$(".send")
			    send.click(function(){
			    	 $(".nonediscount").removeClass("hover") 
			    	
		    	var value=$("[name=content]").val();
			 	if(value){
					if(confirm('是否提交评论')){
						var html=`<div class="all-dicusslist all-dicusslist1 clearfix margin-top-20">
	            	    	<div class="float-left ">
	            	    		<img class="dicusslist-img1" src="img/w.jpg"  />
	            	    	    <p>香奈儿香水</p>
	            	    	</div>
	            	    	<div class="dicusslist-content float-left margin-left-20 ">
	            	    		<p>
	            	    			<span>好评</span>
	            	    			<span class="padding-left-5">|</span>
	            	    			<span class="padding-left-5">2016-11-29</span>
				        			<span class="time padding-left-5">1</span>
					             	<span class="time">2</span>
						            <span>:</span>
						            <span class="time">1</span>
						            <span class="time">2</span>
						            <span>:</span>
						            <span class="time">1</span>
						            <span class="time">3</span> 	
				        		</p>
				        		<p class="padding-top-10">${value}</p>
				        		<div class="dicusslist-img2  clearfix" >
				        			<img class="" src="img/w.jpg" />
				        			<img class="" src="img/w.jpg" />
				        			<img class="" src="img/w.jpg" />
				        			<img class="" src="img/w.jpg" />
				        			<img class="" src="img/w.jpg" />
				        			<img class="" src="img/w.jpg" />			        			
				        		</div>
				        		<p class="fontcolor-main margin-top-20">客服回复：感谢您对**的肯定，我们会继续做好服务工作，争取 更好的为你服务，欢迎您的下次惠顾，</p>				        			
	            	    	</div>
	            	    	
	            	    </div>`
						
	
						$(".all-dicuss").prepend(html)//前面添加
						$(".all-dicuss").prepend(html)//前面添加
						 alert('发表评论成功！')

					}
				}
		})

	           } )
	           
 var jia=$('.amount-jia')  
     jia.click(function(){
        var value = $(".amount1").val();
        value = parseInt(value)
//      if(value<0){
//      	value = value - 1;
//      }
          value = value + 1;
            $(".amount1").val(value)
     })
     var jian=$('.amount-jian')  
// console.log(jia)
   
     jian.click(function(){
        var value = $(".amount1").val();
        value = parseInt(value)
        if(value<1){
        	return ;
        }
          value = value - 1;
//        console.log(value)
            $(".amount1").val(value)
     })
     
 jsdowntime();
		var countInterval=setInterval(jsdowntime,1000);
		
		//倒计时
		function jsdowntime(){
			
		var countdownTime=countDown('2019-9-1 23:37:00')
		if( parseInt(countdownTime)<=0)
		{
			clearInterval(countInterval);	
		}
		var arr=countdownTime.split('');
		var html=` 
		                 <span class="iconfont icon-clock">
			             <span class="time">${arr[0]}</span>
			             <span class="time">${arr[1]}</span>
			             <span>天</span>
			             <span class="time">${arr[1]}</span>
			             <span class="time">${arr[3]}</span>
			             <span>时</span>
			             <span class="time">${arr[4]}</span>
			             <span class="time">${arr[5]}</span>
			             <span>分</span>
			             <span class="time">${arr[6]}</span>
			             <span class="time">${arr[7]}</span>
			             <span>秒</span>	`
		
		document.querySelector('.count-down').innerHTML=html;
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
				return '000000';
			}
			//距离毫秒数=小时数+分钟数+秒的毫秒数
			//1小时=60分 1分钟=60秒 1秒=1000毫秒
			
			//1小时的毫秒数1*60*60*1000
			var hours=Math.floor(distance/(1*60*60*1000))
			//1分钟的毫秒数60*1000
			var minutes=Math.floor((distance-hours*60*60*1000)/(60*1000))
			//1秒的毫秒数1000
			var seconds=Math.floor((distance-hours*60*60*1000-minutes*60*1000)/1000)
			return   changgeLength(hours)+changgeLength(minutes)+changgeLength(seconds)
		}
		function changgeLength(num){
			num=String(num)
			if(num.length<=1){
				num='0'+num
				
			}
			return num;
		}
                                         