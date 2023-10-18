var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        
        if(jQuery('#custTrtlTravelJS').length == 0 ){
			jQuery("head").append( "<script src='https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/TRTL-Travel033-JS.js' id='custTrtlTravelJS'></script>" );
	  	}

    	clearInterval(waitForJquery);  
    
    }
}, 50); 