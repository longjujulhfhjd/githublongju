(function(w){
	 function tabexp(options){
	 	this.box=document.querySelector(options.box)
	 	this.chag()
	 }
	 tabexp.prototype.chag=function(){
	 	var _this=this;
        this.tabtitle=this.box.querySelectorAll('.tab-title')
        this.tablist=this.box.querySelectorAll('.lists-tab')
        for(var i=0;i< this.tabtitle.length;i++)
        {
      	    this.tabtitle[i].index=i
      	    this.tabtitle[i].onclick=function(){
		   	 _this.index=this.index;
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
