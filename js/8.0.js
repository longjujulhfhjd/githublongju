var chanBoxT=document.querySelectorAll('.kuaidi-content-list')
for(var i=0;i<chanBoxT.length;i++)
{
	chanBoxT[i].index=i;
	chanBoxT[i].onmouseenter=function(){
	for(var j=0;j<chanBoxT.length;j++)
		{
			chanBoxT[j].classList.remove('no');//循环去掉active,只有一个被添加active,一个被选中	
		}
			this.classList.add('no');
			
	}
	
}
var chanBoxTitles=document.querySelectorAll('.fapiao-content-list')
for(var i=0;i<chanBoxTitles.length;i++)
{
	chanBoxTitles[i].index=i;
	chanBoxTitles[i].onmouseenter=function(){
	for(var j=0;j<chanBoxTitles.length;j++)
		{
			chanBoxTitles[j].classList.remove('ons');//循环去掉active,只有一个被添加active,一个被选中	
		}
			this.classList.add('ons');
			
	}
	
}