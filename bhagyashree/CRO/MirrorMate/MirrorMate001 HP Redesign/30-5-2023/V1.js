var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

    	if (jQuery('#MirrorMate001JS').length == 0) {
	        jQuery("head").append('<script src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/MirrorMate001-JS.js" id="MirrorMate001JS"></script>');
	    }

        clearInterval(waitForjQuery);
    }
}, 50);