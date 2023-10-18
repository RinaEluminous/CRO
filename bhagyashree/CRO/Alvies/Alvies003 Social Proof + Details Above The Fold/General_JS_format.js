var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {

    	//code


    	clearInterval(waitForJquery);
    }
}, 50);   