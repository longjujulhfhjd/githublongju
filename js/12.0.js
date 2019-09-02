var zcpassword = $('#zcpassword').val();
var zcpassword = $('#zcpasswords').val();
var str = $('#tel').val();


$('.zhucebto').click(function(){
	$('.zhuce-box').addClass('on');	
	$('.denglubto').click(function(){
	$('.zhuce-box').removeClass('on');
})
	
})	
var cookia=$.cookie('cookiename')
					console.log(cookia)
		if(cookia){
			countdown(cookia)
			
		}
		
		$('.yangzhengma-con').click(function(){
			var _this=this;
			if($(this).hasClass('disabled'))
			return;
			countdown(60)
			
		})
		function countdown(count){
		    $('.yangzhengma-con').addClass('disabled')
//			 var count=60;
			$('.yangzhengma-con').html(count+'s后重新获取')
		var timer=setInterval(function(){
				  count--;
				  //设置cookie
				$.cookie('cookiename',count)
	        console.log($.cookie('cookiename'))
				 $('.yangzhengma-con').html(count+'s后重新获取')
				  if(count<1){
				  	clearInterval(timer)
				$('.yangzhengma-con').removeClass('disabled').html('重新获取验证码')

				  }
			},1000)	
		}