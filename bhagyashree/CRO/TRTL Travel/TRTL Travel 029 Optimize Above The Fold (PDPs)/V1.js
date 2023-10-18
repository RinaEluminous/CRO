var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {
	if(jQuery('.product-container').length > 0){
  		optimizePdpContent();
  		updateColorTitle();
  	}	

  	function updateColorTitle(){
  		//color title rename
		if(jQuery('.product-container [id^=variant-colour-template] .text-grey').length > 0){
			var strHTML = 	jQuery('.product-container [id^=variant-colour-template] .text-grey').html();
				strHTML =   strHTML.replace(/Colour/g,"Pillow colour");
			
			jQuery('.product-container [id^=variant-colour-template] .text-grey').html(strHTML);
		}
  	}

  	function optimizePdpContent(){
  		if(jQuery('.product-container form[id^=product-form-template]').length > 0){
  			jQuery('.product-container form[id^=product-form-template]').addClass('customPDPWrapper')
  		}

  		//custom html
  		if(jQuery('.custMediaTestimonial').length  == 0 ){
  			jQuery('<div class="custMediaTestimonial"><div class="quote">"Makes the middle seat feel like first class"</div><div class="author">- Lonely Planet Magazine</div></div>').appendTo('.template-product .product-container .product-media.row .product-media .swiper-media');
  		}

  		//mobile - price
		if(jQuery( window ).width() < 767){
			jQuery('.product-container [id^=price-template]:eq(0)').insertAfter('#variant-select');
			
			//reviews
			if(jQuery('.product-container .d-block div[data-oke-reviews-product-listing-rating]').length > 0){
				jQuery('.product-container .d-block div[data-oke-reviews-product-listing-rating]').insertBefore('#variant-select');
			}
		}
		else {			
			if(jQuery('.product-container [id^=product-form-template] [id^=price-template]').length > 0 ){
				jQuery('.product-container [id^=product-form-template] [id^=price-template]').insertAfter('#variant-select');
			}
		}
  	}

  	jQuery(document).on("click", "#variant-swatches-trtl-pillow-plus-colour div.swatch", function () {
  		var timesRun = 0;
  		var intInterval = setInterval(function (){
  			timesRun += 1;
  			if(jQuery('.product-container [id^=variant-colour-template] .text-grey').text().indexOf('Pillow colour') === -1 ){
  				updateColorTitle();
  				clearInterval(intInterval);
  			}
  			if(timesRun === 60){
		        clearInterval(intInterval);
		    }
		},100);  		
  	});

	clearInterval(waitForjQuery);
  }
}, 50);