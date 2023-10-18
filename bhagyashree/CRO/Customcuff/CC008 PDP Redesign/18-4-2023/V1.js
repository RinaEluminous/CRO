var waitForJquery = setInterval(function() { 
   if (typeof jQuery != 'undefined') {

        addCustomQuantitySelector();

   		function addCustomQuantitySelector(){
   			var intCount     = 0; 
   			var strSingleImg = '', strMatchingImg = '', strSingleTitle = '', strMatchingTitle = '';
   			var strClass	 = '';
   			if(jQuery('.Product__Wrapper button#Product__Clone').length > 0) {
				var strText = jQuery('.Product__Wrapper button#Product__Clone').text().trim();
				
				if(strText.indexOf('NECKLACE') >= 0 ){
					strSingleImg     =  'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/single-necklace.jpg';
					strMatchingImg   = 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/matching-necklaces.jpg';
					strSingleTitle   = 'Single necklace';
					strMatchingTitle = 'Matching necklaces';
					strClass		 = 'custNecklace'
				}

				if(strText.indexOf('BRACELET') >= 0 ){
					strSingleImg     =  'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/single-cuff.jpg';
					strMatchingImg   = 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/matching-cuffs.jpg';
					strSingleTitle   = 'Single Cuff';
					strMatchingTitle = 'Matching Cuffs';
				}
   			}

   			var intInterval = setInterval(function () {
   				intCount   += 1;
   				
   				if( jQuery('.Product__Wrapper button#Product__Clone').attr('disabled') === undefined  && jQuery('.custSelectraper').length == 0 && strSingleImg !== "" && strMatchingImg !== "" ){
		   				jQuery('<div class="custSelectraper"><h3>Quantity</h3><div class="custQuanityProducts"><ul><li class="custQuanityactive custSingleCuffCTA"><div><img src="'+strSingleImg+'"></div><span>'+strSingleTitle+'</span></li><li class="custMatchingCuffCTA '+strClass+'"><label class="custGreenLabel">15% off</label><div><img src="'+strMatchingImg+'"></div><span>'+strMatchingTitle+'</span></li></ul></div></div>').insertBefore('#Product__AddToCart');
		   				clearInterval(intInterval);
   				}
   				if(intCount === 200){
   					if(jQuery('.Product__Wrapper button#Product__Clone').length > 0 && strSingleImg === "" && strMatchingImg === ""){
   						jQuery('.Product__Wrapper button#Product__Clone').show();
   					}
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
