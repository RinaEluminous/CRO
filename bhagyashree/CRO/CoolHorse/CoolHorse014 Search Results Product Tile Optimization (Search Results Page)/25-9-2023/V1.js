var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
    	// Array of objects containing image URLs and text
		var reviewsArray = [
			{
				imageUrl: 'https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/cool-horse-allison-a.png',
				reviewDescription : "Love CoolHorse. Always great service and FAST delivery! Everything we have ordered has been of great quality! The prices are wonderful! And the shipments come quick! Appreciate y'all!",
				authorName: '-Allison A'
			},
			{
				imageUrl: 'https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/cool-horse-rosle-e.png',
				reviewDescription: "I was not disappointed with the pricing or the experience. The ease of their website, the accuracy of inventory, their shipping results, and I just love the chat because they are real and Johnny On It. I also love the rewards, they are simple, they don't hound you every day with emails. What a great company that understands .... The Cowboy Way! Thanks",
				authorName: '-Rosie E'
			},
			{
				imageUrl: 'https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/cool-horse-jean-c.png',
				reviewDescription: "I appreciated the informative help I received with the chat options. As a beginner, I didn't understand all the specifics about different kind of ropes. She helped me to find a left-handed 36 ft rope that will be an all-around good ranch rope for many purposes. Thank you Kelly!",
				authorName: '-Jean C'
			},
			{
				imageUrl: 'https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/cool-horse-akauu.png',
				reviewDescription: "Thanks for taking care of your Hawaii customers with fair shipping options, and also taking care of your left handed ropers!!",
				authorName: '-akauu'
			},
			{
				imageUrl: 'https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/cool-horse-stacey-j.png',
				reviewDescription: "Great customer service. They have gone out of their way to find what I need even when shopping online you can chat with a real person that is extremely helpful.",
				authorName: '-Stacey J'
			},
			{
				imageUrl: 'https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/cool-horse-melissa-j.png',
				reviewDescription: "Easy to navigate, and search for what I wanted. Was motivated to buy here (vs other places) b/c I had reward points - thanks!",
				authorName: '-Melissa J'
			},
		];

		//To add the 'quick add/view details' CTA on PLP
		addcustomCtatoPlpSearch();

		//Check ajax call when PLP details are refreshed
		var oldXHR = window.XMLHttpRequest;
		function newXHR() {
		var realXHR = new oldXHR();
		realXHR.addEventListener("readystatechange", function() {
			if(realXHR.readyState == 4 && realXHR.status == 200){ 
			 setTimeout(function () {
				var strAjaxResponseURL  = realXHR.responseURL;
		
				if(strAjaxResponseURL.indexOf('/api/search/search.json') > -1){
						if( jQuery('.custGreatProductPlpSearch').length > 0 ){
							jQuery('.custGreatProductPlpSearch').remove();
						}

						if( jQuery('.custCategoryWrapperPlpSearch').length > 0 ){
							jQuery('.custCategoryWrapperPlpSearch').remove();
							addcustomCtatoPlpSearch();
						}
						addcustomCtatoPlpSearch();
					}                   
				}, 20); 
				}
		 }, false);
		  return realXHR;
		}
		window.XMLHttpRequest = newXHR;  


    	function addcustomCtatoPlpSearch(){
    		var intCount 	= 0; 
    		var intInterval = setInterval(function (){
    			intCount += 1;
    			if(jQuery('main').length > 0 && jQuery('.custMainContainer').length == 0){
    				jQuery('main').addClass('custMainContainer')
    			}
    			//Add custom class to the main div
				if(jQuery('main.ss-content-container.main-content.ng-scope').length > 0 && jQuery('.custMainWrapperPlpSearch').length == 0){
	    			jQuery('main.ss-content-container.main-content.ng-scope').addClass('custMainWrapperPlpSearch');
	    		}

	    		//Check the main product div is loaded or not
	    		if (jQuery('#js-product-list .category-product').length > 0) {
	    			jQuery('#js-product-list .category-product').each(function(index) {
	    				//Add the review section at the third position of the product grid

				        if (index == 1 && jQuery('.custGreatProductPlpSearch').length == 0) {
								// Get a random index 
								var randomReviewsIndex = Math.floor(Math.random() * reviewsArray.length);
								
								if(sessionStorage.getItem('custIndex') !== null && randomReviewsIndex == sessionStorage.getItem('custIndex') ){
									randomReviewsIndex = Math.floor(Math.random() * reviewsArray.length);
								}

            					// Get the random object from the array
							    var randomReviewsContent = reviewsArray[randomReviewsIndex];
								jQuery('<div class="custGreatProductPlpSearch column half medium-one-third large-one-fourth category-product ng-scope" style="background-image:url('+randomReviewsContent.imageUrl+')"><h5>"'+randomReviewsContent.reviewDescription+'"<span>'+randomReviewsContent.authorName+'</span></h5></div>').insertAfter(this);

								sessionStorage.setItem('custIndex',randomReviewsIndex);
				        }
				        else{
				        	  //Add the custom CTAs to the products
				        	  if (jQuery(this).find('.category-product-price').length > 0) {
					            var strCtaHtml = '';
					            var floatPrice = jQuery(this).find('.category-product-price').text().trim().replace(/[^0-9.]/gi, '');
					            if (floatPrice > 1000) {
					                var strURL = jQuery(this).find('.category-product-image-wrapper').attr('href');
					                strCtaHtml = '<a href="'+strURL+'" class="custCTAButtonPlpSearch">View Details</a><p>Flexible financing available</p>';
					            } else {
					                strCtaHtml = '<button class="custCTAButtonPlpSearch">QUICK ADD</button><p>30-day money-back guarantee</p>';
					            }
					        }

					        if(strCtaHtml !== '' && strCtaHtml !== undefined && strCtaHtml !== null){
					        	if (jQuery(this).find('.custCategoryWrapperPlpSearch').length == 0) {
					            	jQuery('<div class="custCategoryWrapperPlpSearch">' + strCtaHtml + '</div>').appendTo(this);
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
    	jQuery(document).on('click','button.custCTAButtonPlpSearch', function (){
	    		
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
			                	
				                	jQuery('#js-mini-basket-container').html(strCartHTML);

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
			
			if( jQuery('.custGreatProductPlpSearch').length > 0 ){
				jQuery('.custGreatProductPlpSearch').remove();
			}

			if( jQuery('.custCategoryWrapperPlpSearch').length > 0 ){
				jQuery('.custCategoryWrapperPlpSearch').remove();
			}	
			addcustomCtatoPlpSearch();
		});

		clearInterval(waitForJquery);
    }
}, 50);