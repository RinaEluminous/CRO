console.log("CC022: Landing Page Product Tests");
var waitForJquery = setInterval(function() { 
    
	var element =  document.getElementById('customJS');
	if (typeof(element) === 'undefined' || element === null){
	  	var script  =  document.createElement('script');
		script.type = 'text/javascript';
		script.id   = 'customJS';
		script.src  = 'https://code.jquery.com/jquery-3.4.1.min.js';
		document.getElementsByTagName('head')[0].appendChild(script);
	}
    
    if (typeof jQuery != 'undefined') {
		console.log("check JS >>");

		updateLandingPageImages();
		updateProductDetails();

		var intCounter  = 0;
		var intInterval = setInterval(function() {
		    intCounter += 1;    
		    if(jQuery('#lp-pom-root .lp-element.lp-pom-block.lp-shop').length > 0){
				addCustProdSlider();
		    }

		    if (intCounter === 80) {
		        clearInterval(intInterval);
		    }
		}, 30);

		function addCustProdSlider(){
			if(jQuery('#lp-pom-root').length > 0){
				jQuery('#lp-pom-root').addClass('custWrapperV1');
			}

			if( jQuery('.custGallery').length == 0 ){
				jQuery('<div class="custGallery"><div class="swiper-container custGallerySlider"><div class="swiper-wrapper"><div class="swiper-slide"><img src="//https://www.customcuff.co/cdn/shop/products/customstarmapnightskyjewelrynecklace2_600x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customStarmapcoinnecklacesilver_650x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/Untitled-22_600x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/Untitled-20_806697a3-d37d-4b7a-a59c-a3c0885ba34f_600x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customstarmapnightskyjewelrynecklace3_600x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customstarmapnightskyjewelrynecklace2_600x.jpg?v=1691660271" alt=""></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div><div class="swiper-container custGalleryThumbs"><div class="swiper-wrapper"><div class="swiper-slide"><img src="//https://www.customcuff.co/cdn/shop/products/customstarmapnightskyjewelrynecklace2_600x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customStarmapcoinnecklacesilver_650x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/Untitled-22_600x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/Untitled-20_806697a3-d37d-4b7a-a59c-a3c0885ba34f_600x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customstarmapnightskyjewelrynecklace3_600x.jpg?v=1691660271" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customstarmapnightskyjewelrynecklace2_600x.jpg?v=1691660271" alt=""></div></div></div></div>').insertBefore('.lp-element.lp-pom-box.sticky');

				//custom slider for product section
				var intSwiperCnt = 0;
			    var intSwiperInterval = setInterval(function () {
			      	intSwiperCnt += 1;
	      	 		if (typeof Swiper !== 'undefined'){
						var slider = new Swiper ('.custGallerySlider', {
						    slidesPerView: 1,
						    centeredSlides: true,
						    loop: true,
						    loopedSlides: 6,
						    navigation: {
						        nextEl: '.swiper-button-next',
						        prevEl: '.swiper-button-prev',
						    },
						}); 
						var thumbs = new Swiper ('.custGalleryThumbs', {
						    slidesPerView: 'auto',
						    spaceBetween: 10,
						    centeredSlides: true,
						    loop: true,
						    slideToClickedSlide: true,
						});

					slider.controller.control = thumbs;
					thumbs.controller.control = slider;

					clearInterval(intSwiperInterval);
	      		}

		      	if(intSwiperCnt === 70){
		      		clearInterval(intSwiperInterval);
		      	}
		   	 },50);
		}

	}

	function updateProductDetails(){
		if( jQuery('#lp-pom-text-115 span').length > 0 ){
			jQuery('#lp-pom-text-115 span').text('CUSTOM STAR MAP COIN NECKLACE');
		}

		if( jQuery('div.lp-pom-root .lp-pom-text span:contains(Waterproof And Guaranteed)').length > 0 ){
			jQuery('div.lp-pom-root .lp-pom-text span:contains(Waterproof And Guaranteed)').text('Tarnish, Water & Sweat-Proof');
		}

		if( jQuery('div.lp-pom-root .lp-pom-text span:contains(All Our Products Are Unisex And Perfect For Him & Her)').length > 0 ){
			jQuery('div.lp-pom-root .lp-pom-text span:contains(All Our Products Are Unisex And Perfect For Him & Her)').text('Hypoallergenic Materials');
		}

		if(jQuery('.shop-btn span.price-button').length > 0 ){
			jQuery('.shop-btn span.price-button').text('40.00');
		}

		if(jQuery('.shop-btn p span s').length > 0 ){
			jQuery('.shop-btn p span s').text('45.00');
		}
	}

	function updateLandingPageImages(){
		if(jQuery("#lp-pom-image-219 .lp-pom-image-container img").length > 0){
			jQuery("#lp-pom-image-219 .lp-pom-image-container img").attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img1.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img1.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img1.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img1.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img1.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img1.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img1.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img1.png"
			});
		}

		if(jQuery('#lp-pom-image-261 .lp-pom-image-container img').length > 0){
			jQuery("#lp-pom-image-261 .lp-pom-image-container img").attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img1.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img1.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img1.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img1.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img1.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img1.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img1.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img1.png"
			});
		}

		if(jQuery('#lp-pom-image-304 .lp-pom-image-container img').length > 0){
			jQuery("#lp-pom-image-304 .lp-pom-image-container img").attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png"
			});
		}
		
		if(jQuery('.swiper-reviews-ingredients-desk #slider-reviews .content:contains(COORDINATES)').length > 0){
			jQuery('.swiper-reviews-ingredients-desk #slider-reviews .content:contains(COORDINATES) img').addClass('custImg');
			jQuery('.custImg').attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img1.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img1.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img1.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img1.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img1.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img1.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img1.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img1.png"
			});
		}

		if( jQuery('.swiper-reviews-ingredients-desk #slider-reviews .content:contains(TEXT)').length > 0 ){
			jQuery('.swiper-reviews-ingredients-desk #slider-reviews .content:contains(TEXT) img').addClass('customTextImg');
			jQuery('.customTextImg').attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png"
			});
		}

		if(jQuery('#lp-pom-block-175').length > 0){
			jQuery('#lp-pom-block-175').css('background-image', 'url(https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/from_milestones_img1.png)');
		}
	}

	 clearInterval(waitForJquery);
    }
}, 50);