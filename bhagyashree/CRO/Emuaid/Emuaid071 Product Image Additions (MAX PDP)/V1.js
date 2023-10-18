console.log("%cEmuaid071 ", "Emuaid071: Product Image Additions (MAX PDP)");
	//function to add custom slider on PDP
	addCustomSliderToPDP();

	function addCustomSliderToPDP(){

		if(jQuery('section.section.second-product-template').length > 0){
			jQuery('section.section.second-product-template').addClass('custPdpMain')
		}

		if(jQuery('.section-product-benefit').length > 0){
			jQuery('.section-product-benefit').addClass('custBenefitBlock');
		}

		//change the price and review position
		if(jQuery('.modal_price +.jdgm-widget.jdgm-widget').find('.jdgm-prev-badge__stars').length > 0){
			jQuery('.modal_price +.jdgm-widget.jdgm-widget').addClass('custReviews');
			jQuery('.modal_price').insertAfter('.custReviews');
		}

		if(jQuery(".js-product_section .gallery-wrap").length  > 0 && jQuery(".customSliderWrap").length == 0) {
				jQuery('<div class="customSliderWrap"><div class="custMainProductSlider carousel carousel-main" data-flickity=\'{ "sync": ".carousel-nav", "prevNextButtons": true }\'><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-02.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-01.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-04.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-05.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-06.jpg" alt="Slide 1"></div></div><div class="carousel carousel-nav" data-flickity=\'{ "asNavFor": ".carousel-main", "contain" : true, "pageDots": false }\'><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-02.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-01.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-04.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-05.jpg" alt="Slide 1"></div> <div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-06.jpg" alt="Slide 2"></div></div></div>').insertAfter(".js-product_section .gallery-wrap");

                if(jQuery(".js-product_section .gallery-wrap .customSliderWrap").length  > 0){
               
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