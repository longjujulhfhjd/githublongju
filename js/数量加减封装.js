 var jia=$('.amount-jia')  
 console.log(jia)  
     jia.click(function(){
        var value = $(".amount1").val();
        value = parseInt(value)
        if(value>0){
        	value = value - 1;
        }
          value = value + 1;
          console.log(value)
            $(".amount1").val(value)
     })
     