var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {
		
		addLinksToFeatureBlock();
		
		function addLinksToFeatureBlock() {
			//Custom CTA to show/hide features
			var timesRun = 0;
			var interval = setInterval(function(){
				    timesRun += 1;
				    
				    if(jQuery('#Table').length > 0){
				    	
				    	if(jQuery('.custShowFeatureCTA').length == 0){
	    					
	    					jQuery('<button class="custShowFeatureCTA">Show All Features</button>').insertAfter('#Table');
	    					jQuery('#Table').addClass('custHideFeatures');

	    				}
						
						clearInterval(interval);
					}
			    
				    if(timesRun === 60){
				        clearInterval(interval);
				    }
				    //do whatever here..
				}, 100);

			/** Get Free Trial and Demo link **/
			if(jQuery('.price-card .text-block a[href*=pro]').length > 0){
				var strProFreeTrialLink = jQuery('.price-card .text-block a[href*=pro]').attr('href');
			}

			if(jQuery('.price-card-feature .text-block a[href*=business]').length > 0){
				var strBusinessFreeTrialLink = jQuery('.price-card-feature .text-block a[href*=business]').attr('href');
			}

			if(jQuery('.price-card .enterprise a[href*=demo]').length > 0){
				var strEnterpriseDemoLink = jQuery('.price-card .enterprise a[href*=demo]').attr('href');
			}

			/** Add Free Trial and Demo Link **/
			if(jQuery('.comparison-header-title-2:contains(Pro)').length > 0 && jQuery('#custProLink').length == 0){
				jQuery('<a href="'+strProFreeTrialLink+'" id="custProLink">Start free trial</a>').insertAfter('.comparison-header-title-2:contains(Pro)');
			}

			if(jQuery('.comparison-header-title-2:contains(Business)').length > 0 && jQuery('#custBusinessLink').length == 0){
				jQuery('<a href="'+strBusinessFreeTrialLink+'""  id="custBusinessLink">Start free trial</a>').insertAfter('.comparison-header-title-2:contains(Business)');
			}

			if(jQuery('.comparison-header-title-2:contains(Enterprise)').length > 0 && jQuery('#custEnterpriseLink').length == 0) {
				jQuery('<a href="'+strEnterpriseDemoLink+'" id="custEnterpriseLink">Request a demo</a>').insertAfter('.comparison-header-title-2:contains(Enterprise)');
			}
		}

		//To hide/show feature section on custom CTA click
		jQuery(document).on('click','.custShowFeatureCTA',function () {
			if(jQuery(this).text().trim() == 'Show All Features'){
				//jQuery('#Table').slideDown("5000");
				//jQuery('#Table').fadeIn();
				//jQuery('#Table').show();
				jQuery('#Table').removeClass('custHideFeatures');
				jQuery('#Table').addClass('custShowFeatures');
				jQuery(this).text("Hide All Features");
			}
			else{
				//jQuery('#Table').slideUp("5000");
				//jQuery('#Table').fadeOut();
				//jQuery('#Table').hide();
				jQuery('#Table').removeClass('custShowFeatures');
				jQuery('#Table').addClass('custHideFeatures');
				jQuery(this).text("Show All Features");
			}
		});

		clearInterval(waitForJquery);  
    }
}, 50); 