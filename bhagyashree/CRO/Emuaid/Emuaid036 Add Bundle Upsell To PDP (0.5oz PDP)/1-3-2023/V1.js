var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

      var strUrlSegments = window.location.pathname.split('/');
      var strPage        = strUrlSegments.pop();

      isTargetLandingPage();
      addCustomCTA();

      function isTargetLandingPage(){
        if ( ((sessionStorage.customUserPageVisit = (+sessionStorage.customUserPageVisit || 0) + 1) == 1 )  && strPage == 'emuaidmax-first-aid-ointment-0-5oz'){
            sessionStorage.setItem('custIsFlag',1);
        }
      }

    
      function addCustomCTA(){
     		if(sessionStorage.getItem('custIsFlag') !== null && strPage == 'emuaidmax-first-aid-ointment-0-5oz') { 
          
          jQuery('.shopify-section .bm_020_right_size_products').addClass('custHideSizeProducts');

          var timesRun = 0;
          var interval = setInterval(function() {
  		    	  timesRun += 1;
    	    		
              if(jQuery('.custFasterResultWraper').length == 0 && jQuery('.product_section .product_form').length > 0 ) {

              	jQuery('<div class="custFasterResultWraper"><h4>Faster results for Nail Fungus</h4><a href="https://www.emuaid.com/products/nail-fungus-kit"><div class="resultBox"><div class="imbBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/nail-fungus-img.png" alt="Nail Fungus Kit"></div><div class="contentBox"><div class="custHeader"><h6>Nail Fungus Kit</h6><div class="saveBadge">Save 25%</div></div><p>The best way to maximize the effectiveness of your nail fungus treatment for faster results.</p></div></div></a></div>').insertBefore('.product_section .product_form');
      		    		clearInterval(interval);
    		    	}

    		    	if(timesRun === 70){
    		        	clearInterval(interval);
    		    	}
  			    
  			  }, 100);

     		}
      }
      clearInterval(waitForJquery);  
    }
}, 50);