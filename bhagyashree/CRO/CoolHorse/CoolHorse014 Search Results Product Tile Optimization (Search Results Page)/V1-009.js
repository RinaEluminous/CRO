var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		//To add the 'quick add/view details' CTA on PLP
		addcustomCtatoPlp();

		//Check ajax call when PLP details are refreshed
		var oldXHR = window.XMLHttpRequest;
		function newXHR() {
		var realXHR = new oldXHR();
		realXHR.addEventListener("readystatechange", function() {
			if(realXHR.readyState == 4 && realXHR.status == 200){ 
			 setTimeout(function () {
				var strAjaxResponseURL  = realXHR.responseURL;
		
				if(strAjaxResponseURL.indexOf('/api/search/search.json') > -1){
						if( jQuery('.custGreatProduct').length > 0 ){
							jQuery('.custGreatProduct').remove();
						}

						if( jQuery('.custCategoryWrapper').length > 0 ){
							jQuery('.custCategoryWrapper').remove();
							addcustomCtatoPlp();
						}
						addcustomCtatoPlp();
					}                   
				}, 20); 
				}
		 }, false);
		  return realXHR;
		}
		window.XMLHttpRequest = newXHR;  


    	function addcustomCtatoPlp(){
    		var intCount 	= 0; 
    		var intInterval = setInterval(function (){
    			intCount += 1;
    			//Add custom class to the main div
				if(jQuery('main.ss-content-container.main-content.ng-scope').length > 0){
	    			jQuery('main.ss-content-container.main-content.ng-scope').addClass('custMainWrapper');
	    		}

	    		//Check the main product div is loaded or not
	    		if (jQuery('#js-product-list .category-product').length > 0) {
	    			jQuery('#js-product-list .category-product').each(function(index) {
	    				//Add the review section at the third position of the product grid
				        if (index == 1 && jQuery('.custGreatProduct').length == 0) {
				            jQuery('<div class="custGreatProduct column half medium-one-third large-one-fourth category-product ng-scope"><h5>"Great product and prices I am so glad I found this site. They have so many great things and so many things I want!"<span>-Robin B</span></h5></div>').insertAfter(this);
				        }
				        else{
				        	  //Add the custom CTAs to the products
				        	  if (jQuery(this).find('.category-product-price').length > 0) {
					            var strCtaHtml = '';
					            var floatPrice = jQuery(this).find('.category-product-price').text().trim().replace(/[^0-9.]/gi, '');
					            if (floatPrice > 1000) {
					                var strURL = jQuery(this).find('.category-product-image-wrapper').attr('href');
					                strCtaHtml = '<a href="'+strURL+'" class="custCTAButton">View Details</a><p>Flexible financing available</p>';
					            } else {
					                strCtaHtml = '<button class="custCTAButton">QUICK ADD</button><p>30-day money-back guarantee</p>';
					            }
					        }

					        if(strCtaHtml !== '' && strCtaHtml !== undefined && strCtaHtml !== null){
					        	if (jQuery(this).find('.custCategoryWrapper').length == 0) {
					            	jQuery('<div class="custCategoryWrapper">' + strCtaHtml + '</div>').appendTo(this);
					        	}
					        }
				        }
		    		});
				}
					
    			if(intCount == 50){
    				clearInterval(intInterval);
    			}
    		},30);
    	}

    	//on click of the 'QUICK ADD' CTA add product to cart
    	jQuery(document).on('click','button.custCTAButton', function (){
	    		
			if( jQuery(this).parents('.category-product').find('p:contains(Code:)').length > 0 ){
				var strCode = jQuery(this).parents('.category-product').find('p:contains(Code:)').text().trim();
	    		var strProdCode = strCode.split(':')[1].trim();

    			if(strProdCode !== "" && strProdCode !== undefined && strProdCode !== null){
					jQuery.ajax({
			            type: "POST",
			            url:  "https://shop.coolhorse.com/store/BASK",
			            data:  {
			            	'Product_Code': strProdCode,
			            	'Action': 'ADPR',
			            	'Quantity': 1
			            },
			            headers: {
			                'contentType' : 'application/json'
			            },
		           		success: function(data){
		           			if(data !== '' && data !== undefined && data !== null){
				                var strSelector = '';
				                var strCartHTML = jQuery(data).find('#js-mini-basket-container').html();
						
								if( jQuery(window).width() < 767 ){
									strSelector = '.mobile-basket-button #js-mini-basket-count';
								}else{
									strSelector = '.mini-basket #js-mini-basket-count';
								}

				                var intCartCount = jQuery(data).find(strSelector).text();
				                if(strCartHTML !== '' && strCartHTML !== undefined && strCartHTML !== null ){
			                	
				                	jQuery('.row.mini-basket-content').html(strCartHTML);
				                	jQuery(strSelector).text(intCartCount);

				                	if(jQuery('#js-main-header #js-mini-basket').length > 0){
				                		jQuery('#js-main-header #js-mini-basket')[0].click();	

				                		setTimeout(function (){
				                			jQuery('#js-main-header #js-mini-basket')[0].click();
				                		},5000);
				                	}
			                	}
		                    }             
		            	}
        			});
				}
			}
		});

    	//On pagination click call the function to add custom CTA for new loaded products
	   	jQuery(document).on('click','#searchspring-sidebar .ss-summary .ss-summary-container .ss-list .ss-list-option .ss-list-link,.page-links-container span:contains(Prev),.page-links-container a:contains(Prev),.page-links-container span:contains(Next),.page-links-container a:contains(Next),.ss-pagination span.page-links-container.top-page-links .page-links-active,.ss-pagination span.page-links-container.top-page-links a.page-links-inactive', function(){
			
			if( jQuery('.custGreatProduct').length > 0 ){
				jQuery('.custGreatProduct').remove();
			}

			if( jQuery('.custCategoryWrapper').length > 0 ){
				jQuery('.custCategoryWrapper').remove();
			}	
			addcustomCtatoPlp();
		});

		clearInterval(waitForJquery);
    }
}, 50);