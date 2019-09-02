$('.my-yhj-bto').click(function(){	
	$('.my-yhj').addClass('on')
	$('.percenter-right').removeClass('on')
	$('.my-renzheng').removeClass('on')

})
$('.hy-center').click(function(){
	
	$('.percenter-right').addClass('on')
	$('.my-yhj').removeClass('on')
	$('.myname').removeClass('on')

})
$('.my-jf-bto').click(function(){
	
	$('.myname').addClass('on')
	$('.percenter-right').removeClass('on')
	$('.my-yhj').removeClass('on')
})

$('.my-relname-bto').click(function(){	
	$('.my-renzheng').addClass('on')
//	$(this).siblings().removeClass('on')
	$('.percenter-right').removeClass('on')
	$('.my-yhj').removeClass('on')
	$('.myname').removeClass('on')

})
$('.bottom-bto').click(function(){
	$('.renzheng-success').addClass('on')
		$('.renzheng-list').removeClass('on')
})
