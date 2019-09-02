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
	//计算倒计时相差的毫秒数
	var distance=endTime-beginTime
	if(distance<=0)
	{
		return '000000'
	}
	//距离毫秒数=小时数+分钟数+秒的毫秒数
	//1小时=60分 1分钟=60秒 1秒=1000毫秒
	
	//1小时的毫秒数1*60*60*1000
	var hours=Math.floor(distance/(1*60*60*1000))
	//1分钟的毫秒数60*1000
	var minutes=Math.floor((distance-hours*60*60*1000)/(60*1000))
	//1秒的毫秒数1000
	var minutes=Math.floor((distance-hours*60*60*1000)-(minutes*60*1000)
	/1000)
	return   changgeLength(hours)+changgeLength(minutes)+changgeLength(minutes)
}
function changgeLength(num){
	num=String(num)
	if(num.length<=1){
		num='0'+num
		
	}
	return num;
}



















