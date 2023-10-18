var waitForjQuery = setInterval(function () {

 if (typeof jQuery != 'undefined') {
	if(jQuery('#custMirrorMate003JS').length == 0 ){
		jQuery("head").append( "<script src='https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/MirrorMateNav003-JS.js' id='custMirrorMate003JS'></script>" );
	}
	clearInterval(waitForjQuery);
 }
}, 50);