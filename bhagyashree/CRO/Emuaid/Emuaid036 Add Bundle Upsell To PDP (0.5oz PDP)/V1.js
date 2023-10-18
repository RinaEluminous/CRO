var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

        console.log('%c Emuaid036 Add Bundle Upsell To PDP Fired...', 'background: green; color: #fff; padding: 10px;');
        var flag = 0;
        var strUrlSegments = window.location.pathname.split('/');
        var strPage = strUrlSegments.pop();
        console.log("strPage >>> " + strPage);

        if ( ((sessionStorage.customUserPageVisit = (+sessionStorage.customUserPageVisit || 0) + 1) == 1 )  && strPage == 'emuaidmax-first-aid-ointment-0-5oz'){
        		sessionStorage.setItem('custIsFlag',1);
        }
            
        console.log("flag >>> " +sessionStorage.getItem('custIsFlag') );
	   
   		if(sessionStorage.getItem('custIsFlag') !== null) { 

   			var timesRun = 0;
			var interval = setInterval(function(){
		    	timesRun += 1;
		    	console.log("Len >> " +jQuery('.product_section .product_form').length);
	    		if(jQuery('.custFasterResultWraper').length == 0 && jQuery('.product_section .product_form').length > 0 ) {
		    		jQuery('<div class="custFasterResultWraper"><h4>Faster results for Nail Fungus</h4><div class="resultBox"><div class="imbBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/nail-fungus-img.png" alt="Nail Fungus Kit"></div><div class="contentBox"><div class="custHeader"><h6>Nail Fungus Kit</h6><div class="saveBadge">Save 25%</div></div><p>The best way to maximize the effectiveness of your nail fungus treatment for faster results.</p></div></div></div>').insertBefore('.product_section .product_form');
		    		clearInterval(interval);
		    	}

		    	if(timesRun === 70){
		        	clearInterval(interval);
		    	}
			    
			    //do whatever here..
			}, 100);

   		}
   		
 
        clearInterval(waitForJquery);  
    }
}, 50);