(function($){
	$.fn.jqzoom=function(options){
		var _this=this;	
		//	小图的宽高
		var img=$(this).find('.share-img1');
		var smallwidth=img.width()
		var smallheight=img.width()
		 var movewidth=0,moveheight;
		 var bigwidth=0,bigheight=0;
		//将放大的图片设为要放大的图片
		var smallsrc=img.attr('src')
		$(_this).mouseenter(function(){
			var bightml=`<div style='width:${options.offwidth};height:${options.offheight}' class="zoom-big">
	    					<img class="big-img" src="${smallsrc}"/>
	    				</div>`
		   	$(_this).append('<div class="move-box" style="top:0;position:absolute;background:black;opacity:0.2;height:100px;width:100px;"></div>')
			$(_this).append(bightml)
			//大图的宽高
			var bigimg=$(_this).find('.big-img')
			 bigwidth=bigimg.width();
			 bigheight=bigimg.height();
			//移动盒子的宽高
			 movewidth=smallwidth/bigwidth*options.offwidth;
			 moveheight=smallheight/bigheight*options.offheight;
			$(_this).find('.move-box').css({
			     width:movewidth,
			     height:moveheight
			})
			//大区域块的宽高
			var bigBlack=$(this).find('.zoom-big')
			bigBlack.css({
				width:options.offwidth,
				height:options.offheight
				
			})
			
		})
		$(_this).mouseleave(function(){
		 	$(_this).find('.move-box').remove()
		 	$(_this).find('.zoom-big').remove()
		 	
		})
		$(_this).mousemove(function(event){
		
            //当前鼠标的位置距离页面的坐标
			var pageX=event.pageX	
       		var pageY=event.pageY
       		//图片距离页面的位置
       		var imgboxX=img.offset().left//父级根据body定位,上边定位
		    var imgboxY=img.offset().top//父级根据body定位	       	    		
		    var movebox=$(this).find('.move-box')
		    //移动盒子的宽度		  
		    var movewidth=movebox.width()
		    var moveheight=movebox.height()
		    //鼠标到中心位置
		    var mousX=pageX-imgboxX-movewidth/2
		    var mousY=pageY-imgboxY-moveheight/2
		    //判断左边上边不让其移出盒子
		    mousX=mousX>0 ? mousX:0
		    mousY=mousY>0 ? mousY:0
		    //判断右边下边不让其移出盒子
		    mousX=mousX > (img.width()-movewidth) ? (img.width()-movewidth) : mousX
		    mousY=mousY > (img.height()-moveheight) ? (img.height()-moveheight) : mousY 		 
		    movebox.css({
		    	left:mousX,
		    	top: mousY
		    })
		    $(_this).find('.big-img').css({
				left:-mousX*bigwidth/smallwidth,
		    	top:-mousY*bigheight/smallheight
		    })
		})	
	}
})(jQuery)
