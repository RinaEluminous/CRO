var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		//call function only for PDPs
		if( jQuery('#js-PROD').length > 0 ){
			addCustomSectionToPDP();
			updatePaymentText();
		}

		//function to update Learn more CTA url
		function updatePaymentText(){
			var intCount     = 0;
			var intInterval  = setInterval(function () {
				intCount    += 1; 
				if( jQuery('.product-information form#bread-checkout-form a').length > 0 ) {
					var strText = jQuery('.product-information form#bread-checkout-form a').text();
					strText = strText.replace('Learn More','');
					jQuery('.product-information form#bread-checkout-form a').text(strText);
				}

				if(intCount == 80){
					clearInterval(intInterval);
				}
			},50);
		}

		//function to add custom class and HTML
    	function addCustomSectionToPDP(){
			//add custom class to form parent div and add link to 'Learn more' CTA
			if(jQuery('.product-information--purchase .row #bread-checkout-form').length > 0){
				jQuery('.product-information--purchase .row #bread-checkout-form').parent('div').addClass('custFormParent');				
			}

			//add custom shipping HTML
			if(jQuery('.custFreeShipping').length == 0) {
				jQuery('<div class="custFreeShipping"><ul><li><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_return.png"></span>30-day Return</li><li><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_delivery.png"></span>$150 Free Shipping on most orders</li></ul></div>').prependTo('.product-information--purchase .row #bread-checkout-form');
			}

			//add custom HTML after Add to cart CTA
			if(jQuery('.custProductInfoListing').length == 0 ){
				jQuery('<div class="custProductInfoListing"><ul><li>Earn rewards every time you spend</li><li>Price match guarantee</li><li>Low shipping rates</li><li>30-day money back guarantee</li></ul></div><div class="custNeedMoreInformation"><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/coolhorse/got-questions-avtar-2.png"></div><div><h3>Need more information?</h3><p>Our friendly service team are here to help. Give us a call now or request info.</p><ul><li>Working hours:</li><li><span>M-F: 9 am - 6pm CST</span><span>SAT: 9 am - 4pm CST</span></li></ul></div><ol><li><a href="tel:806-468-9121"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_chat.jpg"></span>806-468-9121</a></li><li id="custLiveChat"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_phone.jpg"></span>Live Chat</li></ol></div>').insertAfter('.product-information--purchase .row #bread-checkout-form')
			}

			//Re-position the reviews for Desktop/Mobile
			if(jQuery('.main-content #review_header').length > 0 && jQuery('.custPdpReviews').length == 0){
				var reviewsHTML = jQuery('.main-content #review_header').clone().addClass('custPdpReviews');
		  		if(jQuery(window).width() <= 767 ){
		  		  	jQuery(reviewsHTML).insertAfter('.custNeedMoreInformation');
		  		  	addCustYMALSlider();
		  		}
		  		else{
		  			jQuery(reviewsHTML).appendTo('.product-information--images .column.thumbnail-wrapper');
		  		}
			}
    	}

    	//add custom You Might Also Like Slider
    	function addCustYMALSlider(){
    		var customHTML  = '';  
    		var intRunsTime = 0; 
    		var intSliderInterval = setInterval(function () {
    			intRunsTime += 1;
    			if(jQuery('#js-also-like-carousel.slick-slider').length > 0 ){
	    			
					jQuery('#js-also-like-carousel .slick-track .category-product:not(.slick-cloned)').each(function(){
							customHTML += '<div class="category-product">'+ jQuery(this).html() +'</div>'
					});

					if(jQuery('.customYmalSlider').length == 0) {
						jQuery('<div class="customYmalSlider">'+ customHTML + '</div>').insertAfter('#js-also-like-carousel');

						if (jQuery.fn.slick) {
							jQuery('.customYmalSlider').slick({
							    slidesToShow: 2,
							    slidesToScroll: 1,
							    dots: true,
							    arrows:false
							});
						}
					}
					clearInterval(intSliderInterval);
    			}
    			
    			if(intRunsTime === 70){
    				clearInterval(intSliderInterval);
    			}
    		},50);
    	}

		jQuery(document).on('click','form#js-purchase-product .row.add-to-cart-wrap .increase-quantity,form#js-purchase-product .row.add-to-cart-wrap .decrease-quantity',function () {
			updatePaymentText();
		});


		jQuery(document).on('click','.custNeedMoreInformation ol li#custLiveChat',function () {
			if(jQuery('#chat-widget-minimized').length > 0){
				let iframe = jQuery('#chat-widget-minimized');
				//find button inside iframe
				let button = iframe.contents().find('button');
				if(button.length > 0){
					//trigger button click
					button.trigger("click");
				}
				
			}
			
		});

		clearInterval(waitForJquery);
    }
}, 50);