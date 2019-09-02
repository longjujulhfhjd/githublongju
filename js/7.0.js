//	var alld=document.querySelectorAll('.alldlects')
//	var del=document.querySelectorAll('.delectAll')
//	for(var i=0;i<del.length;i++)
//	  {
//	  	console.log(del[i])
//	  	del[i].onclick=function()
//	  	{
//	  		for(var i=0;i<del.length;i++)
//	  		{
//	  			if(del[i].checked==true)
//		        {
//					for(var i=0;i<alld.length;i++)
//					{	
//						alld[i].checked=true;		      
//					}
//		        }
//		        else
//				{
//					for(var i=0;i<alld.length;i++)
//						{	
//							alld[i].checked=false;		      
//						}
//				}
//		     }
//	  
//				
//		}
//	}
//	  
//		
	var dels=document.querySelector('.delectAlls')
    var alld=document.querySelectorAll('.alldlects')
      dels.onclick=function(){
	    if(dels.checked==true)
		        {
					for(var i=0;i<alld.length;i++)
					{	
						alld[i].checked=true;		      
					}
		        }
		        else
				{
					for(var i=0;i<alld.length;i++)
						{	
							alld[i].checked=false;		      
						}
				}
}
      		
	var del=document.querySelector('.delectAll')		
	var alld=document.querySelectorAll('.alldlects')
      del.onclick=function(){
	    if(del.checked==true)
		        {
					for(var i=0;i<alld.length;i++)
					{	
						alld[i].checked=true;		      
					}
		        }
		        else
				{
					for(var i=0;i<alld.length;i++)
						{	
							alld[i].checked=false;		      
						}
				}
}
      	           
 var jia=$('.amount-jia')  
     jia.click(function(){
        var value = $(".amount1").val();
        value = parseInt(value)

          value = value + 1;
            $(".amount1").val(value)
     })
     var jian=$('.amount-jian')  

     jian.click(function(){
        var value = $(".amount1").val();
        value = parseInt(value)
        if(value<1){
        	return ;
        }
          value = value - 1;
            $(".amount1").val(value)
     })