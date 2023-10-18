var waitForJquery = setInterval(function() { 
   if (typeof jQuery != 'undefined') {
        
        addCustomQuantitySelector();
   		function addCustomQuantitySelector(){
   			var intCount    = 0; 
   			var intInterval = setInterval(function () {
   				intCount 	+= 1;
   				if( jQuery('.Product__Wrapper button#Product__Clone').attr('disabled') === undefined  && jQuery('.custSelectraper').length == 0 ){
		   				jQuery('<div class="custSelectraper"><h3>Quantity</h3><div class="custQuanityProducts"><ul><li class="custQuanityactive custSingleCuffCTA"><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/single-cuff.jpg"></div><span>Single Cuff</span></li><li class="custMatchingCuffCTA"><label class="custGreenLabel">15% off</label><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/matching-cuffs.jpg"></div><span>Matching Cuffs</span></li></ul></div></div>').insertBefore('#Product__AddToCart');
		   				clearInterval(intInterval);
   				}
   				if(intCount === 200){
   					clearInterval(intInterval);
   				}

   			},50);
   			
   		}
   		
		jQuery(document).on('click','li.custSingleCuffCTA', function () {
			jQuery('.custQuanityProducts ul li').removeClass('custQuanityactive');
			jQuery(this).addClass('custQuanityactive');
		    jQuery('.custom-bundle .custom-bundle-form-item .remove-icon').trigger('click');
	    	jQuery('.custom-bundle-products-container').addClass('bundle-deactivated');
	    	jQuery('.custom-bundle-form-item').addClass('open-product');
	    	jQuery('body').removeClass('custom-bundle');
	    	jQuery('.Product__Wrapper button#Product__Clone').hide();	
		});

		jQuery(document).on('click','li.custMatchingCuffCTA', function () {
			jQuery('.custQuanityProducts ul li').removeClass('custQuanityactive');
			jQuery(this).addClass('custQuanityactive');
		    jQuery('.Product__Wrapper button#Product__Clone')[0].click();
		    jQuery('.Product__Wrapper button#Product__Clone').show();
		});

		clearInterval(waitForJquery);
    }
}, 50);  
