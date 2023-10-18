var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

        if(jQuery('#Emuaid068-CSS').length == 0 ){
		    jQuery("head").append("<link rel='stylesheet' href='https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/Emuaid068-CSS.css' type='text/css' media='screen' id='Emuaid068-CSS'>");
		}

        if(jQuery('#Emuaid068-JS').length == 0 ){
            jQuery( "head" ).append( "<script src='https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/Emuaid068-JS.js' id='Emuaid068-JS'></script>" );
        }
        
    clearInterval(waitForJquery);  
    }
}, 50);  