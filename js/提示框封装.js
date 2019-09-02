(function($,w){
	$.tooltip=function(options){
		if(w.timer){
			clearTimeout(w.timer);
		}
		$('.alter').remove()
	var html=$(`<div class="alert alert-${options.type}">${options.content}</div>`)
	$('body').append(html)
	w.timer=setTimeout(function(){
				html.remove()
				if(options.success){
					options.success()
				}
			},options.interval||3000)
	}
})(jQuery,window)

//(function($,w){
//	
//	$.extend({
//		tooltip:function(options){
////			type:提示的类型
//			var className=''
//			if(options.type=='error')
//			{
//				className='alert-error'
//			}else if(options.type=='warning'){
//				className='alert-warning'
//			}else{
//				className='alert-info'
//			}
//			$('body').append(`<div class="alert ${className}">${options.content}</div>`)
//			setTimeout(function(){
//				$('.alert').remove()
//			},options.interval||3000)
//		}
//	})
//})(jQuery,window)
