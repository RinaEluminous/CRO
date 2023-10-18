var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

      var strUrlSegments = window.location.pathname.split('/');
      var strPage        = strUrlSegments.pop();

      addCustomCTA();

      function addCustomCTA(){
     		if( strPage == 'emuaidmax-first-aid-ointment-0-5oz' || strPage == 'emuaidmax-3' || strPage == 'emuaidmax-first-aid-ointment-16oz' ) { 
          
          var timesRun = 0;
          var interval = setInterval(function() {
  		    	  timesRun += 1;
    	    		
              //add custom 'nail fungus treatment' html
              if(jQuery('.custFasterResultWraper').length == 0 && jQuery('.product_section .product_form').length > 0 ) {

                //rename the size block heading
                if(jQuery('.bm_020_right_size_products .bm_020_rightSizeHeading').length > 0){
                  jQuery('.bm_020_right_size_products .bm_020_rightSizeHeading').text('Faster results for Nail Fungus');
                }

              	jQuery('<div class="custFasterResultWraper"><h4>Faster results for Nail Fungus</h4><a href="https://www.emuaid.com/products/nail-fungus-kit"><div class="resultBox"><div class="imbBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/nail-fungus-img.png" alt="Nail Fungus Kit"></div><div class="contentBox"><div class="custHeader"><h6>Nail Fungus Kit</h6><div class="saveBadge">Save 25%</div></div><p>The best way to maximize the effectiveness of your nail fungus treatment for faster results.</p></div></div></a></div>').insertBefore('.product_section .product_form');
      		    		clearInterval(interval);
    		    	}

    		    	if(timesRun === 70){
    		        	clearInterval(interval);
    		    	}
  			    
  			  }, 100);
     		}
       
        if( strPage == 'nail-fungus-kit') { 
            var intCount = 0;
            var intInterval = setInterval(function() {
                intCount += 1;
                if(jQuery('.custDescription span').length > 0 ) {

                  //add custom links to the products in the kit 
                  if(jQuery('.custDescription span:eq(0) .custFirstLink').length == 0){
                      jQuery('.custDescription span:eq(0)').wrapInner('<a class="custFirstLink" href="https://www.emuaid.com/products/emuaidmax-3?_pos=1&_sid=2a4688369&_ss=r"></a>'); 
                  }
                  
                  if(jQuery('.custDescription span:eq(1) .custSecondLink').length == 0){
                     jQuery('.custDescription span:eq(1)').wrapInner('<a class="custSecondLink" href="https://www.emuaid.com/products/emuaid-silver-socks?_pos=1&_sid=a41751790&_ss=r"></a>');
                  }

                  if(jQuery('.custDescription span:eq(2) .custThirdLink').length == 0){
                    jQuery('.custDescription span:eq(2)').wrapInner('<a class="custThirdLink" href="https://www.emuaid.com/products/therapeutic-moisture-bar?_pos=1&_sid=36c333fa2&_ss=r"></a>'); 
                  }

                  clearInterval(intInterval);
                }

              if(intCount === 60){
                  clearInterval(intInterval);
              }
          }, 50);
        }

      }
      clearInterval(waitForJquery);  
    }
}, 50);