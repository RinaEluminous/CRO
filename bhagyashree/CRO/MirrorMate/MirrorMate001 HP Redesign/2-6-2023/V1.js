var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

    	if (jQuery('#MirrorMate001JS').length == 0) {
	        jQuery("head").append('<script src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/MirrorMateHome001-JS.js" id="MirrorMate001JS"></script>');
	    }
      
      if (jQuery('#MirrorMate001CSS').length == 0) {
	        jQuery("head").append("<link rel='stylesheet' href='https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/MirrorMateHP001-CSS.css' type='text/css' media='screen' id='MirrorMate001CSS'>");
	    }

        clearInterval(waitForjQuery);
    }
}, 50); 