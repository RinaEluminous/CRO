//function to add custom slider on PDP
	addCustomSliderToPDP();

	function addCustomSliderToPDP(){
		
		//add custom class to main section
		if(jQuery('section.section.second-product-template').length > 0){
			jQuery('section.section.second-product-template').addClass('custPdpMain')
		}

		//add custom class 
		if(jQuery('.section-product-benefit').length > 0){
			jQuery('.section-product-benefit').addClass('custBenefitBlock');
		}

		//rename the size title
		if( jQuery('.product .bm_020_right_size_products .bm_020_rightSizeHeading').length > 0 ){
			jQuery('.product .bm_020_right_size_products .bm_020_rightSizeHeading').text('Faster results for Nail Fungus');
		}

		//change the price and review position
		if(jQuery('.modal_price +.jdgm-widget.jdgm-widget').find('.jdgm-prev-badge__stars').length > 0){
			jQuery('.modal_price +.jdgm-widget.jdgm-widget').addClass('custReviews');
			jQuery('.modal_price').insertAfter('.custReviews');
		}

		//wrap price and reviews in one div
		if(jQuery(window).width() <= 767 && jQuery('.custProductPriceWraper').length == 0 ){
			jQuery('.custReviews,.modal_price').wrapAll('<div class="custProductPriceWraper"></div>');
		}

		//custom slider
		if(jQuery(".js-product_section .gallery-wrap").length  > 0 && jQuery(".customSliderWrap").length == 0) {
				jQuery('<div class="customSliderWrap"><div class="custMainProductSlider carousel carousel-main" data-flickity=\'{ "sync": ".carousel-nav", "prevNextButtons": true }\'><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image01.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image02.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image03.jpg" alt="Slide 3"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image04.jpg" alt="Slide 4"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image05.jpg" alt="Slide 5"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image06.jpg" alt="Slide 6"></div></div><div class="carousel carousel-nav" data-flickity=\'{ "asNavFor": ".carousel-main", "contain" : true, "pageDots": false }\'><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image01.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image02.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image03.jpg" alt="Slide 3"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image04.jpg" alt="Slide 4"></div> <div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image05.jpg" alt="Slide 5"></div> <div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid071/emuaidmax_product_image06.jpg" alt="Slide 6"></div></div></div>').insertAfter(".js-product_section .gallery-wrap");

				//include flickity slider JS and CSS
                if(jQuery(".js-product_section .customSliderWrap").length  > 0) {
                    if (jQuery('#custFlickityMinJs').length == 0 && jQuery('#custFlickitySyncJs').length == 0 ) {
                    	jQuery("head").append('<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" id="custFlickityMinJs"></script>');
                    	jQuery("head").append('<script src="https://unpkg.com/flickity-sync@2.0.0/flickity-sync.js" id="custFlickitySyncJs"></script>');
                    }

					if (jQuery('#custFlickityCss').length == 0) {
                    	jQuery("head").append('<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" id="custFlickityCss"/>');
                	}
				}
		}
	}