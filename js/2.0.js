//	获取中间的div的宽度
	var inerslide=$('.inerslide')
	console.log(inerslide)
	var list=$('.inner-list' );
	console.log(list)
	var listwidth=list.width()
	console.log(listwidth)
	var listlength=list.length
	console.log(listlength)
	var width=listwidth*listlength
	console.log(width)

	inerslide.css({
		width:width
	})
	var index=0;
	
	setInterval(function(){	
		animate();
	},1000)
	var lengths=0
	function animate(){	
		lengths=lengths-listwidth
		inerslide.css({
				left:lengths
			})
	    var timer = setInterval(function(){
	    	
	    if(lengths<-(width-2*listwidth))
		{
			lengths=listwidth;
		}			
	    },1000)
	    console.log(lengths)
       
	}
