//闭包封装,
//闭合空间，在外面不能调用，需要将其抛出
(function(w){
	 function tabexp(options){//构造函数
	 	//	console.log(this)//this为TabExample（）函数
	 	this.box=document.querySelector(options.box)
	 	this.chag()
	 }
	 tabexp.prototype.chag=function(){
	 	var _this=this;
	 	
        this.tabtitle=this.box.querySelectorAll('.tab-title')
        this.tablist=this.box.querySelectorAll('.lists-tab')
        for(var i=0;i< this.tabtitle.length;i++)
        {
        	//给当前按钮存储一个下标v
      	    this.tabtitle[i].index=i
      	    this.tabtitle[i].onclick=function(){
      	    	//.log(this)//当前的this为title按钮
		   	 _this.index=this.index;//给公共（ _this.index）的tab存一个下标，下标为点击的按钮的下标this.index
		   	 _this.chageng();
      	    }
        }
	 }
	  tabexp.prototype.chageng=function(){
  	    for(var i=0;i< this.tabtitle.length;i++){
  	   	   this.tabtitle[i].classList.remove('active')//将当前所有的active移出
  	   	   this.tablist[i].classList.remove('active')//将当前所有的active移出
     	   
  	    }
  	    this.tabtitle[this.index].classList.add('active')//给当前点击的按钮添加active
  	    this.tablist[this.index].classList.add('active')//给当前点击的按钮添加active
	  }
	 w.tabexp=tabexp//闭包需要返回才能去掉用里面的函数
})(window)//立即执行函数
