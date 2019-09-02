var tel=$('[name=telnumber]').val()
function checktel() {
	var str = $('#telnumber').val();
	var telreg=/^1[3,4,5,7,8][0-9]{9}$/; 
	if (!telreg.test(str)&&($(".alerttel").css('display')=='none') ){
		$(".alerttel").addClass("on")
	} 
	
}

$('.nextstep').click(function(){	
	checktel();
	 $(".stepnum-two").addClass("on")//大圆
     	 $(".step-two").addClass("on")//数字
     	 $(".shuoming-pass").addClass("on")//字
     	 $(".yz-id").removeClass("on")//移出验证身份on
     	$('.yz-password').addClass('on')
	$('#telnumber').val('')
})

$('.quest-replace').click(function(){	
	checktel();
	 $(".stepnum-three").addClass("on")//大圆
     	 $(".step-three").addClass("on")//数字
     	 $(".shuoming-suc").addClass("on")//字
     	 $(".yz-id").removeClass("on")//移出验证身份on
     	 $(".yz-password").removeClass("on")//移出验证身份on
     	$('.yz-success ').addClass('on')
	$('#telnumber').val('')
})

$('#telnumber').focus(function(){
	$(".alerttel").removeClass("on")
})
