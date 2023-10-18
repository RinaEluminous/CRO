var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {
    
	  	if(jQuery('#custBromwichCSS').length == 0 ){
			jQuery("head").append("<link rel='stylesheet' href='https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Bromwich-Smith008-CSS.css' type='text/css' media='screen' id='custBromwichCSS'>");
	  	}

	  	if(jQuery('#custBromwichJS').length == 0 ){
			jQuery("head").append( "<script src='https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Bromwich-Smith008-JS.js' id='custBromwichJS'></script>" );
	  	}

    clearInterval(waitForjQuery);
	}
  }, 50);
