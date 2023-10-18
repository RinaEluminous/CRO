var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {

    	//call function only for PDPs
		if( jQuery('#js-PROD').length > 0 ){
			updateProdImageSrc();
			addCustomHtmlToPdp();
			addCustomYMALSlider();
		}

    	function updateProdImageSrc(){
    		var intCount = 0;
    		var intInterval = setInterval(function (){
    			intCount += 1;
    			if(jQuery('.product-information--images .related-products-carousel').length > 0 ) {
				  	jQuery('.product-information--images .related-products-carousel .slick-slide img').each(function (index){
					 	var strImgSrc = jQuery(this).attr('src');
					 	if(strImgSrc.indexOf('_') !== -1){
					 		strText = strImgSrc.split('_').pop();
							strText = strText.split('.')[0];
							var strSrc = strImgSrc.replace( '_'+strText, '');
							strSrc = jQuery(this).attr('src',strSrc);
					 	}
					});
				}
				if(intCount === 200){
					clearInterval(intInterval);
				}
    		},50);  		
    	}
		
		//function to add custom class and HTML
    	function addCustomHtmlToPdp(){

    		//add custom class to main div
    		if(jQuery('.main-content').length > 0){
    			jQuery('.main-content').addClass('custMainPdpWrapper');
    		}

    		//wrap right side div's elements in custom div to make it sticky
    		if(jQuery('.main-content .product-information--purchase div').length > 0){
    			jQuery('.main-content .product-information--purchase').children().wrapAll('<div class="custFixedScroll"/>');
    		}


    		//update CTA text
    		if(jQuery('body .product-information .product-information--purchase .add-to-cart').length > 0) {

    			//re-position the attribute section if it is appearing after Contact CTA
    			var strCTAText = jQuery('body .product-information .product-information--purchase .add-to-cart').text();
    			if(strCTAText == 'Contact Us for Pricing' && jQuery('#js-purchase-product .trailer-attributes').length > 0){
    				var strReferElement = jQuery('body .product-information .product-information--purchase .add-to-cart').parents('.h3.nbm');
    				jQuery('#js-purchase-product .trailer-attributes').parent('#js-purchase-product').addClass('custAttributesForm');
    				jQuery('.custAttributesForm').insertBefore(strReferElement);
    			}


				jQuery('body .product-information .product-information--purchase .add-to-cart').text('REQUEST INFO');
				jQuery('body .product-information .product-information--purchase .add-to-cart').parent('form').addClass('custForm');
    		}

			//add custom HTML 
			if(jQuery('.custMonthlyPlans').length == 0) {

				jQuery('<div class="custMonthlyPlans"><a href="https://shop.coolhorse.com/store/trailer-financing"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_monthly-income.png"><p>Financing available with affordable monthly plans</p></a></div>').insertAfter('.product-information--purchase .custForm');
			}

			//add custom HTML 
			if(jQuery('.custNeedMoreInformationFour').length == 0 ){
				jQuery('<div class="custNeedMoreInformationFour"><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/coolhorse/got-questions-avtar.png"></div><div><h3>Got questions?</h3><p>Our friendly Trailer & Coach specialists are here to help. Give us a call now or live chat.</p><ul><li>Working hours:</li><li><span>M-F: 9 am - 6pm CST</span><span>SAT: 9 - noon CST</span></li></ul></div><ol><li><a href="tel:806-468-9121"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_chat.jpg"></span>806-468-9121</a></li><li id="custLiveChat"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/np_phone.jpg"></span>Live Chat</li></ol></div>').insertAfter('.custMonthlyPlans');
			}

			//re-position the product tab section 
			if(jQuery('.product-information .product-information--description').length > 0){
				jQuery('.product-information .product-information--description').addClass('custProductInfoAccordian');
				jQuery('.product-information .product-information--description').insertAfter('.custNeedMoreInformationFour');
			}
    	}

    	//add custom You Might Also Like Slider
    	function addCustomYMALSlider(){
    		var customHTML  = '';  
    		var intRunsTime = 0; 
    		var intSliderInterval = setInterval(function () {
    			intRunsTime += 1;
    			if(jQuery('#js-related-products-carousel.slick-slider').length > 0 ){
					jQuery('#js-related-products-carousel .slick-track .category-product:not(.slick-cloned)').each(function(){
							customHTML += '<div class="category-product">'+ jQuery(this).html() +'</div>'
					});

					if(jQuery('.customPdpYmalSlider').length == 0) {
						jQuery('<div class="customPdpYmalSlider">'+ customHTML + '</div>').insertBefore('#js-related-products-carousel');

						if (jQuery.fn.slick) {
							jQuery('.customPdpYmalSlider').slick({
							    slidesToShow: 4,
							    slidesToScroll: 2,
							    dots: true,
							    arrows:false,
							    responsive: [
							    	{
				                        breakpoint: 992,
					                        settings: {
					                            slidesToShow: 3,
					                            initialSlide: 1,
											}
					                    },
				                    {
				                        breakpoint: 768,
				                        settings: {
				                            slidesToShow: 2,
				                            initialSlide: 1,
										}
			                    	}
	                			]
							});

							if(jQuery('.customPdpYmalSlider').parents(".related-products").parent('.column.whole.large-five-twelfths.medium-half').length > 0){
								jQuery('.customPdpYmalSlider').parents(".related-products").parent('.column.whole.large-five-twelfths.medium-half').addClass('custSliderWrapper');
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
    	jQuery(document).on('click','.custNeedMoreInformationFour ol li#custLiveChat',function () {
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

    	//on click of image, open an popup to show large image
    	jQuery(document).on('click','.custMainPdpWrapper .product-information--images .slick-initialized .slick-slide',function () {
			jQuery('.custMainPdpWrapper .product-information--images .main-image-container img')[0].click();
		});
		
		
		clearInterval(waitForJquery);
    }
}, 50);