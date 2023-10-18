var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		//call function only for PDPs
		if( jQuery('#js-PROD').length > 0 ){
			addCustomHtmlToPDP();
			addCustomYMALSliderPdp();
		}

		//function to add custom class and HTML
    	function addCustomHtmlToPDP(){
			//add custom class to form parent div and add link to 'Learn more' CTA
			if(jQuery('.custGetYourOffer').length == 0){
				jQuery('<div class="custGetYourOffer">Want to sell or trade your saddle? <a href="#">Get your offer</a></div>').prependTo('main');				
			}

			/*if(jQuery('.product-information--purchase .product-actions').length == 0){
				jQuery('.product-information--purchase .product-actions').insertAfter('.add-to-cart-wrap');
			}*/
			
			//add custom shipping HTML
			if(jQuery('.custFreeShippingPdp').length == 0) {
				jQuery('<div class="custFreeShippingPdp"><ul><li><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_return.png"></span>14-day Return</li><li><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_delivery.png"></span>Free Shipping</li></ul></div>').prependTo('.product-information--purchase .row #bread-checkout-form');
			}

			//add custom HTML after Add to cart CTA
			if(jQuery('.custNeedMoreInformationPdp').length == 0 ){
				jQuery('<div class="custNeedMoreInformationPdp"><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/need-more-information.png"></div><div><h3>Need more information?</h3><p>Our friendly Saddle specialists are here to help. Give us a call now or request info.</p><ul><li>Working hours:</li><li><span>M-F: 9 am - 6pm CST</span><span>SAT: 9 - noon CST</span></li></ul></div><ol><li><a href="tel:806-468-9121"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_chat.jpg"></span>806-468-9121</a></li><li id="custLiveChat"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_phone.jpg"></span>Live Chat</li></ol></div>').insertAfter('.product-information--purchase .row #bread-checkout-form')
			}

			//re-position the product tab section 
			if(jQuery('.product-information .product-information--description').length > 0){
				jQuery('.product-information .product-information--description').addClass('custProductInfoAccordianPdp');
				jQuery('.product-information .product-information--description').insertAfter('.custNeedMoreInformationPdp');
			}
    	}

    	//add custom You Might Also Like Slider
    	function addCustomYMALSliderPdp(){
    		var customHTML  = '';  
    		var intRunsTime = 0; 
    		var intSliderInterval = setInterval(function () {
    			intRunsTime += 1;
    			if(jQuery('div#js-related-products-carousel.slick-slider').length > 0 ){
	    			
					jQuery('div#js-related-products-carousel .slick-track .category-product:not(.slick-cloned)').each(function(){
							customHTML += '<div class="category-product">'+ jQuery(this).html() +'</div>'
					});

					if(jQuery('.customYouMightAlsoLikeSlider').length == 0) {
						jQuery('<div class="customYouMightAlsoLikeSlider">'+ customHTML + '</div>').insertBefore('div#js-related-products-carousel');

						if (jQuery.fn.slick) {
							jQuery('.customYouMightAlsoLikeSlider').slick({
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


		jQuery(document).on('click','.custNeedMoreInformationPdp ol li#custLiveChat',function () {
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



		jQuery(document).on('click','.custGetYourOffer a', function () {

		});

		clearInterval(waitForJquery);
    }
}, 50);