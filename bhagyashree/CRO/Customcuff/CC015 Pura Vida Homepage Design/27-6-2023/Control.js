var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
 		if (jQuery('#customCuffHPControl015SS').length == 0) {
    		jQuery("head").append("<link rel='stylesheet' href='https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/CustomCuff-HP-0015-Control-CSS.css' type='text/css' media='screen' id='customCuffHPControl015SS'>");
    	}

	    if (jQuery('#customCuffHPControl015JS').length == 0) {
	          jQuery("head").append('<script src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/CustomCuff-HP-0015-Control-JS.js" id="customCuffHPControl015JS"></script>');
	     }
      
        clearInterval(waitForjQuery);
    }
}, 50); 


