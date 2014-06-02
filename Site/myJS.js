 function validate(obj) {
        if (obj.value =="") 
        {
          return false;
        }
        else return true;
      }


function testAllInfo(){  
	kwy=true;
	for (var i = 0; i < arguments.length; i++) {
		if (!validate(arguments[i]))
        	{
            	key=false;
            	break;
        	}
	}	
	if (key) {
		window.alert("Thank you for submitting!");  
	}
	else
	{
		window.alert("Not all areas are completed!");  
	}
}
