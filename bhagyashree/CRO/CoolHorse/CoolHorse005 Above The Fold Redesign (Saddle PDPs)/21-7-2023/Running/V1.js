var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		var flag = 0;
		//call function only for PDPs
		if( jQuery('#js-PROD').length > 0 ){
			addCustomHtmlToPDP();
			addCustomYMALSliderPdp();
		}

		//function to add custom class and HTML
    	function addCustomHtmlToPDP(){
			//add custom class to form parent div and add link to 'Learn more' CTA
			if( jQuery('.custGetYourOffer').length == 0 ){
				jQuery('<div class="custGetYourOffer"><a href="https://shop.coolhorse.com/store/saddle-trade"><span>Sell or Trade Your Saddle</span></a></div>').prependTo('main');				
			}

			var strElement = '';
			if(jQuery('.product-information--purchase .row #bread-checkout-form').length > 0){
				strElement = jQuery('.product-information--purchase .row #bread-checkout-form');
			}
			
			if( jQuery('.custMakeAnOffer').length == 0 && strElement !== ''){
				jQuery('<div class="custMakeAnOffer">Are we close to your budget? <button  class="button">Make an Offer </button></div>').insertBefore(strElement);
			}

			//add custom shipping HTML
			if( jQuery('.custFreeShippingPdp').length == 0 && strElement !== '') {
				jQuery('<div class="custFreeShippingPdp"><ul><li><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_return.png"></span>14-day Return</li><li><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_delivery.png"></span>Free Shipping <span>(48 states)</span></li></ul></div>').prependTo(strElement);
			}

			//add custom HTML after Add to cart CTA
			if( jQuery('.custNeedMoreInformationPdp').length == 0 && strElement !== ''){
				
				jQuery('<div class="custNeedMoreInformationPdp"><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/coolhorse/more-information-avtar.png"></div><div><h3>Need more information?</h3><p>Our friendly Saddle specialists are here to help. Give us a call now or request info.</p><ul><li>Working hours:</li><li><span>M-F: 9 am - 6pm CST</span><span>SAT: 9 am - 4pm CST</span></li></ul></div><ol><li><a href="tel:806-468-9121"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_chat.jpg"></span>806-468-9121</a></li><li id="custLiveChat"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_phone.jpg"></span>Live Chat</li></ol></div>').insertAfter(strElement);
			    }

			//re-position the product tab section 
			if( jQuery('.product-information .product-information--description').length > 0 ){
				jQuery('.product-information .product-information--description').addClass('custProductInfoAccordianPdp');
				jQuery('.product-information .product-information--description').insertAfter('.custNeedMoreInformationPdp');
			}

			//add custom class to hide the default CTA - contact us,make an offer and Sell or Trade Your Saddle
			if(jQuery('.product-information .product-actions').length > 0){
				jQuery('.product-information .product-actions').addClass('custHideActionButtons');
			}

			//wrap each accordion in main div for mobile only
			if(jQuery(window).width() <= 767 ){
				jQuery("#js-responsive-tabs.r-tabs .r-tabs-accordion-title").each(function(index) {
					jQuery(this).next(".r-tabs-panel").andSelf().wrapAll("<div class='custAccordionWrap'/>");
				});

				jQuery('#js-responsive-tabs.r-tabs .custAccordionWrap:eq(0)').appendTo('#js-responsive-tabs.r-tabs');
			}
    	}

    	//add custom You Might Also Like Slider
    	function addCustomYMALSliderPdp(){
    		var customHTML  = '';  
    		var intRunsTime = 0; 
    		var intSliderInterval = setInterval(function () {
    			intRunsTime += 1;
    			if( jQuery('div#js-related-products-carousel.slick-slider').length > 0 ){
	    			
					jQuery('div#js-related-products-carousel .slick-track .category-product:not(.slick-cloned)').each(function(){
							customHTML += '<div class="category-product">'+ jQuery(this).html() +'</div>'
					});

					if( jQuery('.customYouMightAlsoLikeSlider').length == 0 ) {
						jQuery('<div class="customYouMightAlsoLikeSlider">'+ customHTML + '</div>').insertAfter('div#js-related-products-carousel');

						if (jQuery.fn.slick) {
							jQuery('.customYouMightAlsoLikeSlider').slick({
							    slidesToShow: 4,
							    slidesToScroll: 1,
							    dots: false,
							    arrows:true,
							        responsive: [
							    	{
				                        breakpoint: 992,
					                        settings: {
					                            slidesToShow: 3,
					                            dots: true,
							    				arrows:false,
											}
					                    },
				                    {
				                        breakpoint: 768,
				                        settings: {
				                            slidesToShow: 2,
				                            dots: true,
											arrows:false,
										}
			                    	}
	                			]
							});

							//add custom class to the parent div 
							if( jQuery('.customYouMightAlsoLikeSlider').parents(".related-products-carousel").parents('.column.whole.large-five-twelfths.medium-half').length > 0){
								jQuery('.customYouMightAlsoLikeSlider').parents(".related-products-carousel").parents('.column.whole.large-five-twelfths.medium-half').addClass('customMainSliderWrapper');
							}
						}
					}
					clearInterval(intSliderInterval);
    			}
    			
    			if(intRunsTime === 70){
    				clearInterval(intSliderInterval);
    			}
    		},50);
    	}

    	//on click of the live chat CTA, trigger default chat CTA
		jQuery(document).on('click','.custNeedMoreInformationPdp ol li#custLiveChat',function () {
			if( jQuery('#chat-widget-minimized').length > 0 ){
				let iframe = jQuery('#chat-widget-minimized');
				//find button inside iframe
				let button = iframe.contents().find('button');
				if(button.length > 0){
					//trigger button click
					button.trigger("click");
				}
				
			}
		});

		//on 'Get your offer' and 'Make an Offer' CTAs  trigger the default Make an offer CTA
		jQuery(document).on('click','.custGetYourOffer a,.custMakeAnOffer button', function () {
			if( jQuery('.product-information .product-actions button:contains(Make an Offer)').length > 0 ){
				jQuery('.product-information .product-actions button:contains(Make an Offer)')[0].click();
			}
		});

		//on click of the product accordion, re-position accordian to last
		jQuery(document).on('click','#js-responsive-tabs.r-tabs .custAccordionWrap',function() {
			jQuery(this).appendTo('#js-responsive-tabs.r-tabs');
			if(flag == 0) {
				jQuery(window).scrollTop( jQuery('#js-responsive-tabs').offset().top );
				flag = 1;	
			}			
		});

		clearInterval(waitForJquery);
    }
}, 50);