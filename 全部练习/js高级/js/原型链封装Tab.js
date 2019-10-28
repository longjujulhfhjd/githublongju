//闭包封装,
//闭合空间，在外面不能调用，需要将其抛出
	(function(w){
		
		function TabExample(options){//构造函数
//			console.log(this)//this为TabExample（）函数
			this.box=document.querySelector(options.box)
			this.init()//调用
		}
//		console.log(TabExample.prototype)
		TabExample.prototype.init=function(){//点击事件
			var _this=this;
			//获取按钮以及列表
			this.tabtitle=this.box.querySelectorAll('.tab-titlepro')//按钮
			
			this.tablist=this.box.querySelectorAll('.table-conpro')//列表
			
//			给tabtitle循环加点金事件
			for(var i=0;i<this.tabtitle.length;i++){
				//给当前按钮存储一个下标
				this.tabtitle[i].index=i
				this.tabtitle[i].onclick=function(){
//					console.log(this)//当前的this为title按钮
					 _this.index=this.index;//给公共（ _this.index）的tab存一个下标，下标为点击的按钮的下标this.index
					 _this.change()
					 
				}
			}
		}
		TabExample.prototype.change=function(){//点击事件
	console.log(_this.index)
//		for(var i=0;i< this.tabtitle.length;i++){
//	   	   this.tabtitle[i].classList.remove('active')//将当前所有的active移出
//	   	   this.tablist[i].classList.remove('active')//将当前所有的active移出
//   	   
//	    }
//	    this.tabtitle[this.index].classList.add('active')//给当前点击的按钮添加active
//	    this.tablist[this.index].classList.add('active')//给当前点击的按钮添加active
		}
//		点击事件放到TabExample的原型上
		w.TabExample=TabExample
	})(window)//()为立即执行函数