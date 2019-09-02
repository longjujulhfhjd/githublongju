window.onload=function(){
	var nowlits=document.querySelector(".nowdaybuy-lits");
	var nowimg=document.querySelectorAll(".nowdaybuy .now");
	var imgwidth=nowimg[0].offsetWidth;
	var imglength=nowimg.length;
	nowlits.style.width=imgwidth * imglength+'px';
	console.log(nowlits.style.width);
	var index=0;
	setInterval(function(){
		setInterval(-12);
	},1000)
	var timer= setInterval(function(speed){
		var left=nowlits.offsetLeft+speed;//图片滚动的速度	 		console.log(111)
		nowlits.style.left=left+'px';//一直向左滚动,获取图片位置
		if(left<-(index+1)*imgwidth )
		{
			clearInterval(timer);
		}
	},1000)
}
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
			             <span class="time">${arr[0]}</span>
			             <span class="time">${arr[1]}</span>
			             <span>:</span>
			             <span class="time">${arr[2]}</span>
			             <span class="time">${arr[3]}</span>
			             <span>:</span>
			             <span class="time">${arr[4]}</span>
			             <span class="time">${arr[5]}</span>`
		
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