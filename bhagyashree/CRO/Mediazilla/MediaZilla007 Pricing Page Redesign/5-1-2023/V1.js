var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {
    	
    	if(jQuery('#custMediaZillaPricingPageJS').length == 0 ) {
			
			jQuery("head").append("<script src='https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/MediaZilla007-JS.js' id='custMediaZillaPricingPageJS'></script>");
	  	}

    	clearInterval(waitForJquery);  
 	}

}, 50); 