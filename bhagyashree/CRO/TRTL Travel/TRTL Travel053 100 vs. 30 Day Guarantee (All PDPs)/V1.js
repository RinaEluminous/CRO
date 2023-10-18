var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		
		updateNoOfMoneyBackDays();

		function updateNoOfMoneyBackDays() {
			//replace icon on the Home page section
			if(jQuery('.image-wrapper picture img.img-fluid[src*=100-days_yellow_]').length > 0){
				jQuery('.image-wrapper picture img.img-fluid[src*=100-days_yellow_]').addClass('custHpBannerIcon');
				jQuery('.custHpBannerIcon').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days-yellow.png'); 
				jQuery('.custHpBannerIcon').attr('data-src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days-yellow.png');
				jQuery('.custHpBannerIcon').attr('srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days-yellow.png');
				jQuery('.custHpBannerIcon').attr('data-srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days-yellow.png');
			}

			//replace text on the mini bag panel
			if(jQuery('.cart-offcanvas #cart-offcanvas-content .row div:contains(100 DAY)').length > 0){
				var strCartElement = jQuery('.cart-offcanvas #cart-offcanvas-content .row div:contains(100 DAY)');
				strCartElement.html(strCartElement.html().replace('100 DAY','30-DAY')); 
			}

			//replace icon on the mini bag panel
			if(jQuery('.cart-offcanvas #cart-offcanvas-content  .image-wrapper picture img.img-fluid[src*=100-day]').length){
				jQuery('.cart-offcanvas #cart-offcanvas-content  .image-wrapper picture img.img-fluid[src*=100-day]').addClass('custCartImg');
				jQuery('.custCartImg').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-day-money-back_black_40x.png'); 
				jQuery('.custCartImg').attr('data-src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-day-money-back_black_40x.png');
				jQuery('.custCartImg').attr('srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-day-money-back_black_40x.png');
				jQuery('.custCartImg').attr('data-srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-day-money-back_black_40x.png');
			}

			//replace text on the review page scrolling banner
			if(jQuery('div[id$=trustbar-autoscroll] .swiper-slide.trust-content.mx-3.swiper-slide strong:contains(100 DAY)').length > 0) {
				var strScrollBanner  = jQuery('div[id$=trustbar-autoscroll] .swiper-slide.trust-content.mx-3.swiper-slide strong:contains(100 DAY)');
				strScrollBanner.html(strScrollBanner.html().replace('100 DAY','30-DAY')); 
			}

			//replace text on the FAQ section
			if(jQuery('.shopify-section .accordion .accordion-item .accordion-body p:contains(100 days)').length > 0){
				//first accordion text
				var strFaqElement = jQuery('.shopify-section .accordion .accordion-item .accordion-body p:contains(100 days):eq(0)');
				strFaqElement.html(strFaqElement.html().replace('100 days','30-days')); 

				//second accordion text
				var strFaqElementSecond = jQuery('.shopify-section .accordion .accordion-item .accordion-body p:contains(100 days):eq(0)');
				strFaqElementSecond.html(strFaqElementSecond.html().replace('100 days','30-days')); 
			}

			//replace icon and text in the PDP section
			if(jQuery('.product-container form.product-form .gx-1.row:contains(100 day money-back guarantee)').length > 0){
				
				jQuery('.product-container form.product-form .gx-1.row:contains(100 day money-back guarantee)').addClass('custPdpFeatures'); 
				
				var strElement = jQuery('.custPdpFeatures div p:contains(100 day money-back guarantee)');
				strElement.html(strElement.html().replace('100 day','30-day'));

				jQuery('.custPdpFeatures .image-wrapper picture img.img-fluid[src*=100-day]').addClass('custMoneyBackIcon');

				jQuery('.custPdpFeatures .custMoneyBackIcon').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-day-money-back_black_40x.png'); 
				jQuery('.custPdpFeatures .custMoneyBackIcon').attr('data-src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-day-money-back_black_40x.png');
				jQuery('.custPdpFeatures .custMoneyBackIcon').attr('srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-day-money-back_black_40x.png');
				jQuery('.custPdpFeatures .custMoneyBackIcon').attr('data-srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-day-money-back_black_40x.png');
			}
		
			//replace icon and text in the black banner 
			if(jQuery('.image-wrapper picture img.img-fluid[src*=100-day-money-back_YELLOW]').length > 0){
				
				jQuery('.image-wrapper picture img.img-fluid[src*=100-day-money-back_YELLOW]').addClass('custBlackBannerIcon');
				
				jQuery('.custBlackBannerIcon').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/100-day-money-back_YELLOW_40x.png'); 
				jQuery('.custBlackBannerIcon').attr('data-src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/100-day-money-back_YELLOW_40x.png');
				jQuery('.custBlackBannerIcon').attr('srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/100-day-money-back_YELLOW_40x.png');
				jQuery('.custBlackBannerIcon').attr('data-srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/100-day-money-back_YELLOW_40x.png');
			}

			//replace text on the return page
			if(jQuery('.container h1:contains(Returns)').parents('.shopify-section').length > 0){
				jQuery('.container h1:contains(Returns)').parents('.shopify-section').addClass('custReturnSection');
				
				//first para text
				var strReturnElement = jQuery('.custReturnSection p:contains(100 days):eq(0)');
				strReturnElement.html(strReturnElement.html().replace('100 days','30-days')); 

				//second para text
				var strReturnElementSecond = jQuery('.custReturnSection p:contains(100 days):eq(0)');
				strReturnElementSecond.html(strReturnElementSecond.html().replace('100 days','30-days')); 
			}

			//replace text in footer 
			if(jQuery('.shopify-section .row .d-flex  h3:contains(ALWAYS 100 DAY MONEY-BACK GUARANTEE)').length > 0) {
				var strFooterElement = jQuery('.shopify-section .row .d-flex  h3:contains(ALWAYS 100 DAY MONEY-BACK GUARANTEE)');

				strFooterElement.html(strFooterElement.html().replace('100 DAY','30-DAY')); 
			}

			//replace footer money-back days icon 
			if(jQuery('.shopify-section .image-wrapper picture img.img-fluid[src*=100-days]').length > 0 ) {
				jQuery('.shopify-section .image-wrapper picture img.img-fluid[src*=100-days]').addClass('customIconImg')
				jQuery('.customIconImg').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days.png');
				jQuery('.customIconImg').attr('data-src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days.png');
				jQuery('.customIconImg').attr('srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days.png');
				jQuery('.customIconImg').attr('data-srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days.png');
			}
		}

		clearInterval(waitForjQuery);
	}
}, 50); 