var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
 		if (jQuery('#customCuffHP015SS').length == 0) {
    		jQuery("head").append("<link rel='stylesheet' href='https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/CustomCuff-HP-015.css' type='text/css' media='screen' id='customCuffHP015SS'>");
    	}

	    if (jQuery('#customCuffHP015JS').length == 0) {
	          jQuery("head").append('<script src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/CustomCuff-HP-015.js" id="customCuffHP015JS"></script>');
	     }
      
        clearInterval(waitForjQuery);
    }
}, 50); 


