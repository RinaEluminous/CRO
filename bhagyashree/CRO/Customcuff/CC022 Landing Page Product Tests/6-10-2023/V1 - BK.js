console.log("CC022: Landing Page Product Tests | V1");
var waitForJquery = setInterval(function() { 
    
    //add JS 
	var element =  document.getElementById('customJS');
	if (typeof(element) === 'undefined' || element === null){
	  	var script  =  document.createElement('script');
		script.type = 'text/javascript';
		script.id   = 'customJS';
		script.src  = 'https://code.jquery.com/jquery-3.4.1.min.js';
		document.getElementsByTagName('head')[0].appendChild(script);
	}
    
    if (typeof jQuery != 'undefined') {
    	//function to replace images 
		updateLandingPageImages();

		//function to update Product details
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

		//to add custom product slider
		function addCustProdSlider(){
			if(jQuery('#lp-pom-root').length > 0){
				jQuery('#lp-pom-root').addClass('custWrapperV1');
			}

			if( jQuery('.custGallery').length == 0 ){
				jQuery('<div class=custGallery><div class="swiper-container custGallerySlider"><div class=swiper-wrapper><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customStarmapcoinnecklacesilver_24547b49-3cf5-4f40-823c-92d663a294f9_1024x.jpg?v=1694791326"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/Untitled-22_101618b4-8b83-4224-b833-558670eb33a0_1024x.jpg?v=1694791326"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/Untitled-20_125bbe94-cc63-4ed4-ae9a-66d82533ab8e_1024x.jpg?v=1694791326"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customstarmapnightskyjewelrynecklace3_933e3369-a6a7-4c86-a1d2-772d025c4163_1024x.jpg?v=1694791326"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/Untitled-21_7feb210f-6379-440f-83b3-30dc1d56d1f7_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customstarmapnightskyjewelrynecklace2_63866bbb-2ac4-4ec6-aa82-63a787377872_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customstarmapnightskyjewelrynecklace4_fc88bf2b-2236-41b3-8071-8211e40d828f_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customstarmapnightskyjewelrynecklace_1ffd40bb-7223-4c1b-8393-787cdf075776_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/matteblackcoinnecklacestarmap_0a1bf0b9-47dd-4f98-9bb4-8d5334ef01e4_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customStarmapcoinnecklacegold_65d69ef5-6e66-4db8-85df-db707961f393_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/Silverstarmapcoinnecklace_3e8994ab-42b7-4b14-8238-93c70d54f847_1024x.jpg?v=1694791327"></div></div><div class=swiper-button-prev></div><div class=swiper-button-next></div></div><div class="swiper-container custGalleryThumbs"thumbsslider=""><div class=swiper-wrapper><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customStarmapcoinnecklacesilver_24547b49-3cf5-4f40-823c-92d663a294f9_1024x.jpg?v=1694791326"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/Untitled-22_101618b4-8b83-4224-b833-558670eb33a0_1024x.jpg?v=1694791326"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/Untitled-20_125bbe94-cc63-4ed4-ae9a-66d82533ab8e_1024x.jpg?v=1694791326"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customstarmapnightskyjewelrynecklace3_933e3369-a6a7-4c86-a1d2-772d025c4163_1024x.jpg?v=1694791326"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/Untitled-21_7feb210f-6379-440f-83b3-30dc1d56d1f7_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customstarmapnightskyjewelrynecklace2_63866bbb-2ac4-4ec6-aa82-63a787377872_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customstarmapnightskyjewelrynecklace4_fc88bf2b-2236-41b3-8071-8211e40d828f_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customstarmapnightskyjewelrynecklace_1ffd40bb-7223-4c1b-8393-787cdf075776_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/matteblackcoinnecklacestarmap_0a1bf0b9-47dd-4f98-9bb4-8d5334ef01e4_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/customStarmapcoinnecklacegold_65d69ef5-6e66-4db8-85df-db707961f393_1024x.jpg?v=1694791327"></div><div class=swiper-slide><img alt=""src="https://www.customcuff.co/cdn/shop/files/Silverstarmapcoinnecklace_3e8994ab-42b7-4b14-8238-93c70d54f847_1024x.jpg?v=1694791327"></div></div></div></div>').insertBefore('.lp-element.lp-pom-box.sticky');

                var intSwiperCnt = 0;
			    var intSwiperInterval = setInterval(function () {
                var swiper = new Swiper(".custGalleryThumbs", {
                    loop: true,
                    spaceBetween: 10,
                    slidesPerView: 7,
                    freeMode: true,
                    watchSlidesProgress: true,
                  });
                  var swiper2 = new Swiper(".custGallerySlider", {
                    loop: true,
                    spaceBetween: 10,
                    navigation: {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    },
                    thumbs: {
                      swiper: swiper,                        
                    }                    
                  });

                  clearInterval(intSwiperInterval);
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

		if( jQuery('.custProductColorWrap').length == 0 ){
			jQuery('<div class="custProductColorWrap"> <p class="custColorTitle">Color: <span id="custColorLabel">Gold</span></p><ul class="custProductColors"> <li class="custShinyGold custActive" cust-color="Gold" cust-color-link="https://www.customcuff.co/products/custom-star-map-necklace?_pos=1&_sid=457f0b60f&_ss=r&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f"></li><li class="custMetalBlack" cust-color="Matte Black"  cust-color-link="https://www.customcuff.co/products/custom-star-map-necklace?variant=39899070824509&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f"></li><li class="custShinySilver" cust-color="Silver" cust-color-link="https://www.customcuff.co/products/custom-star-map-necklace?variant=39417794003005&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f"></li></ul> </div>').insertAfter('.lp-element.lp-pom-image.color:last');
		}

		if( jQuery('.custPriceButton').length == 0 ){
			jQuery('<button class="custPriceButton"><span class="custPirce"><span>BUY NOW - $<span class="price-button">40.00</span>&nbsp;</span><span class="custOffPrice">$<s>45.00</s></span></button>').insertAfter('.custProductColorWrap');
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

		if(jQuery('#lp-pom-image-289 .lp-pom-image-container img').length > 0){
			jQuery("#lp-pom-image-289 .lp-pom-image-container img").attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img1.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img1.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img1.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img1.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img1.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img1.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img1.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img1.png"
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
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img1.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img1.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img1.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img1.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img1.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img1.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img1.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img1.png"
			});
		}
	}


	//on click of the custom 'Buy now' CTA
	jQuery(document).on('click','.custPriceButton' , function() {
		console.log('on btn click >>>');
		var strLink  = jQuery('.custProductColors li.custActive').attr('cust-color-link');
		window.location.href = strLink;
	});

	//on click of the custom color swatches
	jQuery(document).on('click','.custProductColors li' , function() {
		jQuery('.custProductColors li').not(this).removeClass('custActive');
		jQuery(this).addClass('custActive');
		var strColor = jQuery('.custProductColors li.custActive').attr('cust-color');
		console.log("strColor >> " + strColor);
		jQuery('#custColorLabel').text(strColor);
	});

	clearInterval(waitForJquery);

    }
}, 50);