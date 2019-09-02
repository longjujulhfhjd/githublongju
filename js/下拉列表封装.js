(function($,w){//形参
	$.fn.select=function(){
		
	var _this=this;
	//得到title和下拉列表Ul,以及input
	var selecttitle	=$(_this).find('.select-title')
	var selectlists	=$(_this).find('.select-lists')
	
	//1.给title加点击事件,找父级closest
		selecttitle.click(function(e){
        e.stopPropagation();
		$(this).closest('.select-box').find('.select-lists').toggleClass('show');//从父级去查找
			//4.点击title,其他下拉框隐藏
			$(this).closest('.select-box').siblings('.select-box').find('.select-lists').removeClass('show');
		})
		//2.给下拉列表加点击，将值传入input
		selectlists.find('.select-list').click(function(){
			var inputtext=	$(this).closest('.select-box').find('.select-input')
	          inputtext.val($(this).html())
		      //点击赋值以后所有的下拉列表要隐藏
		      selectlists.removeClass('show')
		})
		   $(document).click(function(){
          	   selectlists.removeClass('show')
          })
	}
})($,window)//可以传参也可以不传，传是为了限制范围，实参
//3.点击页面让所有的下拉列表收回，title也不能点击，所以要阻止冒泡
       
