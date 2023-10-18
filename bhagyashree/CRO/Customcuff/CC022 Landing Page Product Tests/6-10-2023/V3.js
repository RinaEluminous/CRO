var waitForJquery = setInterval(function() { 
    
    //add JS 
	var element =  document.getElementById('customJS');
	if (typeof(element) === 'undefined' || element === null) {
	  	var script  =  document.createElement('script');
		script.type = 'text/javascript';
		script.id   = 'customJS';
		script.src  = 'https://code.jquery.com/jquery-3.4.1.min.js';
		document.getElementsByTagName('head')[0].appendChild(script);
	}
    
    if (typeof jQuery != 'undefined') {

    	var arrProdAttribute = {
            "Gold-No":"https://www.customcuff.co/collections/best-sellers/products/custom-necklace?al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Gold-Yes":"https://www.customcuff.co/collections/best-sellers/products/custom-necklace?variant=39453977870397&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            
            "Rose-No":"https://www.customcuff.co/collections/best-sellers/products/custom-necklace?variant=31440795009085&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Rose-Yes":"https://www.customcuff.co/collections/best-sellers/products/custom-necklace?variant=31440795009085&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",

            "Matte Black-No":"https://www.customcuff.co/collections/best-sellers/products/custom-necklace?variant=32010364190781&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Matte Black-Yes":"https://www.customcuff.co/collections/best-sellers/products/custom-necklace?variant=39453977903165&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",

            "Silver-No" : "https://www.customcuff.co/collections/best-sellers/products/custom-necklace?variant=40526997684285&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Silver-Yes" : "https://www.customcuff.co/collections/best-sellers/products/custom-necklace?variant=40526997717053&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f"
       };   

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
				jQuery('#lp-pom-root').addClass('custWrapperV3');
			}

			if( jQuery('.custWrapperV3 .custGallery').length == 0 ){
				jQuery('<div class="custGallery"> <div class="swiper-container custGallerySlider"> <div class="swiper-wrapper"> <div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrynecklaces_800x.jpg" alt="ewelrynecklaces"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1258_3_600x.jpg" alt="IMG_1258_3"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/56_600x.jpg" alt="56"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/Untitled-20_806697a3-d37d-4b7a-a59c-a3c0885ba34f_600x.jpg" alt="Untitled-20_806697a3-d37d-4b7a-a59c-a3c0885ba34f"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1338_1_1024x.jpg" alt="IMG_1338_1"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrybracelet12_1024x.jpg" alt="jewelrybracelet12"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/53_1024x.jpg" alt="53"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customnecklacefast_600x.jpg" alt="customnecklacefast"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrynecklace43_600x.jpg" alt="customengravedcoordinatesjewelrynecklace43"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1254_4_600x.jpg" alt="IMG_1254_4"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1266_600x.jpg" alt="IMG_1266"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1333_1024x.jpg" alt="IMG_1333"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravednecklacecoordinatesnecklace_1024x.jpg" alt="customengravednecklacecoordinatesnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1233_1024x.jpg" alt="IMG_1233"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrynecklace6_1024x.jpg" alt="customengravedcoordinatesjewelrynecklace6"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/58_1024x.jpg" alt="58"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrynecklaceeee_1024x.jpg" alt="customengravedcoordinatesjewelrynecklaceeee"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/blackbarnecklace_1024x.jpg" alt="blackbarnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/BlackBarNecklace_1_1024x.jpg" alt="BlackBarNecklace_1"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/goldbarnecklace_1024x.jpg" alt="goldbarnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/GoldbarNecklace_240bc6a0-4f1b-4676-af9f-e5fa3c6edc28_1024x.jpg" alt="GoldbarNecklace_240bc6a0-4f1b-4676-af9f-e5fa3c6edc28"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/rosebarnecklace_1024x.jpg" alt="rosebarnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/barnecklaceauroragrey_454f2919-946a-439a-925a-af84d3ccdeb4_1024x.jpg" alt="barnecklaceauroragrey"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/SilverbarNecklace_1024x.jpg" alt="SilverbarNecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/barnecklace_1024x.jpg" alt="barnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/morsecodenecklace_1024x.jpg" alt="morsecodenecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/barnecklacetext_1024x.jpg" alt="barnecklacetext"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/custombarnecklace_1024x.jpg" alt="custombarnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/BarNecklace_1_1024x.jpg" alt="BarNecklack"></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div><div thumbsSlider="" class="swiper-container custGalleryThumbs"> <div class="swiper-wrapper"> <div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrynecklaces_800x.jpg" alt="ewelrynecklaces"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1258_3_600x.jpg" alt="IMG_1258_3"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/56_600x.jpg" alt="56"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/Untitled-20_806697a3-d37d-4b7a-a59c-a3c0885ba34f_600x.jpg" alt="Untitled-20_806697a3-d37d-4b7a-a59c-a3c0885ba34f"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1338_1_1024x.jpg" alt="IMG_1338_1"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrybracelet12_1024x.jpg" alt="jewelrybracelet12"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/53_1024x.jpg" alt="53"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customnecklacefast_600x.jpg" alt="customnecklacefast"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrynecklace43_600x.jpg" alt="customengravedcoordinatesjewelrynecklace43"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1254_4_600x.jpg" alt="IMG_1254_4"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1266_600x.jpg" alt="IMG_1266"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1333_1024x.jpg" alt="IMG_1333"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravednecklacecoordinatesnecklace_1024x.jpg" alt="customengravednecklacecoordinatesnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/IMG_1233_1024x.jpg" alt="IMG_1233"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrynecklace6_1024x.jpg" alt="customengravedcoordinatesjewelrynecklace6"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/58_1024x.jpg" alt="58"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrynecklaceeee_1024x.jpg" alt="customengravedcoordinatesjewelrynecklaceeee"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/blackbarnecklace_1024x.jpg" alt="blackbarnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/BlackBarNecklace_1_1024x.jpg" alt="BlackBarNecklace_1"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/goldbarnecklace_1024x.jpg" alt="goldbarnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/GoldbarNecklace_240bc6a0-4f1b-4676-af9f-e5fa3c6edc28_1024x.jpg" alt="GoldbarNecklace_240bc6a0-4f1b-4676-af9f-e5fa3c6edc28"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/rosebarnecklace_1024x.jpg" alt="rosebarnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/barnecklaceauroragrey_454f2919-946a-439a-925a-af84d3ccdeb4_1024x.jpg" alt="barnecklaceauroragrey"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/SilverbarNecklace_1024x.jpg" alt="SilverbarNecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/barnecklace_1024x.jpg" alt="barnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/morsecodenecklace_1024x.jpg" alt="morsecodenecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/barnecklacetext_1024x.jpg" alt="barnecklacetext"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/custombarnecklace_1024x.jpg" alt="custombarnecklace"></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/BarNecklace_1_1024x.jpg" alt="BarNecklack"></div></div></div></div>').insertBefore('.lp-element.lp-pom-box.sticky');

				//custom slider for product section
				var intSwiperCnt = 0;
			    var intSwiperInterval = setInterval(function () {
                var swiper = new Swiper(".custGalleryThumbs", {
                    loop: true,
                    spaceBetween: 10,
                    slidesPerView: 7,
                    freeMode: true,
                    watchSlidesProgress: true,
                    initialSlide: '0',
                    breakpoints: {
						  // when window width is >= 320px
						  320: {
						    slidesPerView: 5,
						  },
						  //when window width is >= 640px
						  640: {
						    slidesPerView: 7,
						  }
						}
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
			jQuery('#lp-pom-text-115 span').text('CUSTOM BAR NECKLACE');
		}

		if( jQuery('div.lp-pom-root .lp-pom-text span:contains(Waterproof And Guaranteed)').length > 0 ){
			jQuery('div.lp-pom-root .lp-pom-text span:contains(Waterproof And Guaranteed)').text('Tarnish, Water & Sweat-Proof');
		}

		if( jQuery('div.lp-pom-root .lp-pom-text span:contains(All Our Products Are Unisex And Perfect For Him & Her)').length > 0 ){
			jQuery('div.lp-pom-root .lp-pom-text span:contains(All Our Products Are Unisex And Perfect For Him & Her)').text('Hypoallergenic Materials');
		}

		if( jQuery('.custWrapperV3 .custProductColorWrap').length == 0 ){
			jQuery('<div class="custProductColorWrap colorSwatchOne"> <p class="custColorTitle"> Color: <span id="custColorLabel">Gold</span></p><ul class="custProductColors"> <li class="custShinyGold custActive" cust-color="Gold"></li><li class="custShinyRose" cust-color="Rose"></li><li class="custMetalBlack" cust-color="Matte Black"></li><li class="custShinySilver" cust-color="Silver"></li></ul></div><div class="custSimulantWrap"><p class="custSimulantTitle">Diamond Simulant: <span id="custOptionLabel">No</span></p><ul class="custSimulant"><li class="custNo custActive">No</li><li class="custYes">Yes</li></ul></div><button class="custPriceButton"><span class="custPirce"><span>BUY NOW - $<span class="price-button">41.00</span>&nbsp;</span><span class="custOffPrice">$<s>46.00</s></span></button>').insertAfter('.lp-element.lp-pom-image.color:last');
		}

	}

	function updateLandingPageImages(){
		if(jQuery("#lp-pom-image-219 .lp-pom-image-container img").length > 0){
			jQuery("#lp-pom-image-219 .lp-pom-image-container img").attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img3.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img3.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img3.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img3.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img3.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img3.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img3.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img3.png"
			});
		}

		if(jQuery('#lp-pom-image-261 .lp-pom-image-container img').length > 0){
			jQuery("#lp-pom-image-261 .lp-pom-image-container img").attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img3.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img3.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img3.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img3.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img3.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img3.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img3.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img3.png"
			});
		}

		if(jQuery('#lp-pom-image-304 .lp-pom-image-container img').length > 0){
			jQuery("#lp-pom-image-304 .lp-pom-image-container img").attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img3.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img3.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img3.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img3.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img3.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img3.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img3.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img3.png"
			});
		}

		if(jQuery('#lp-pom-image-289 .lp-pom-image-container img').length > 0){
			jQuery("#lp-pom-image-289 .lp-pom-image-container img").attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img3.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img3.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img3.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img3.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img3.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img3.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img3.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/pick_your_piece_img3.png"
			});
		}
		
		if(jQuery('.swiper.swiper-review #slider-reviews .content:contains(COORDINATES)').length > 0) {
			jQuery('.swiper.swiper-review #slider-reviews .content:contains(COORDINATES) img').addClass('custImgV3');
			jQuery('.custImgV3').attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img3.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img3.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img3.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img3.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img3.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img3.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img3.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img3.png"
			});
		}

		if(jQuery('.swiper.swiper-review #slider-reviews .content:contains(TEXT)').length > 0) {
			jQuery('.swiper.swiper-review #slider-reviews .content:contains(TEXT) img').addClass('customTextImgV3');
			jQuery('.customTextImgV3').attr({
		      src:"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img3.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img3.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img3.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img3.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img3.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img3.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img3.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/text_img3.png"
			});
		}
	}


	//on click of the custom 'Buy now' CTA
	jQuery(document).on('click','.custPriceButton' , function() {
		var strColorOne = jQuery('.custProductColorWrap.colorSwatchOne li.custActive').attr('cust-color');
		var strOption = jQuery('.custWrapperV3 .custSimulantWrap .custSimulant li.custActive').text().trim();
		var strKey = strColorOne+'-'+strOption;
		window.location.href = arrProdAttribute[strKey];
	});

	//on click of the custom color swatches
	jQuery(document).on('click','.custWrapperV3 .custProductColorWrap.colorSwatchOne .custProductColors li' , function() {
		jQuery('.custProductColorWrap.colorSwatchOne .custProductColors li').not(this).removeClass('custActive');
		jQuery(this).addClass('custActive');
		var strColor = jQuery('.custProductColorWrap.colorSwatchOne .custProductColors li.custActive').attr('cust-color');
		jQuery('.custProductColorWrap.colorSwatchOne #custColorLabel').text(strColor);

	});

	jQuery(document).on('click','.custWrapperV3 .custSimulantWrap .custSimulant li' , function() {
		jQuery('.custWrapperV3 .custSimulantWrap .custSimulant li.custActive').not(this).removeClass('custActive');
		jQuery(this).addClass('custActive');
		var strOption = jQuery('.custWrapperV3 .custSimulantWrap .custSimulant li.custActive').text().trim();
		jQuery('.custWrapperV3 .custSimulantWrap #custOptionLabel').text(strOption);

	});

	clearInterval(waitForJquery);

    }
}, 50);