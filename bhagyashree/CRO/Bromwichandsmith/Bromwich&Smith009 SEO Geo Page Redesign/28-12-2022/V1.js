var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {

        if(jQuery('#custBromwichGeoPageCSS').length == 0 ){
			jQuery("head").append("<link rel='stylesheet' href='https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Bromwich-Smith009-CSS.css' type='text/css' media='screen' id='custBromwichGeoPageCSS'>");
	  	}
        

        if(jQuery('#custBromwichGeoPageJS').length == 0 ){
			jQuery("head").append( "<script src='https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Bromwich-Smith009-JS.js' id='custBromwichGeoPageJS'></script>" );
	  	}

    clearInterval(waitForJquery);  
    
    }
}, 50); 