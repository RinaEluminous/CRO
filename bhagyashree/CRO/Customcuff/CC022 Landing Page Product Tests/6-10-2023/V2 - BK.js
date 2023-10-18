console.log("CC022: Landing Page Product Tests | V2");
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

    	var arrProdColorSwatches = {
            "Silver-Silver":"https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Silver-Gold":"https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=31496638726205&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Silver-Rose":"https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=31711052693565&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Silver-Matte Black":"https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=32038814974013&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",

            "Gold-Silver":"https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=31496638726205&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Gold-Gold":"https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=31711051448381&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Gold-Rose" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=31496676114493&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Gold-Matte Black" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=32038813990973&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",


            "Rose-Silver" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=31711052693565&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Rose-Gold" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=31711053512765&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Rose-Rose" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=31496676278333&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Rose-Matte Black" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=32038814023741&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",

            "Matte Black-Silver" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=32038814974013&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Matte Black-Gold" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=32038815006781&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Matte Black-Rose" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=32038815039549&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
            "Matte Black-Matte Black" : "https://www.customcuff.co/collections/best-sellers/products/2x-custom-cuff-set?variant=32038814056509&al_pg_id=caa665cb-a4f1-4fa7-8779-da375caab26f",
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
				jQuery('#lp-pom-root').addClass('custWrapperV2');
			}

			if( jQuery('.custWrapperV2 .custGallery').length == 0 ){
				jQuery('<div class="custGallery"><div class="swiper-container custGallerySlider"><div class="swiper-wrapper"><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/20_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/21_19b332e1-fb4b-40a9-a370-98b24a407aed_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/DSC04836_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customcuffcouplecuffrelationshipgift_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrycuffgiftbundlecouplesgift5_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrycuffss_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrycuffgiftbundlecouplesgift2_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrycuffgiftbundlecouplesgift3_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/relationshipgiftcustomjewelrycuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customcuffcustomengravedbraceletgift_98474848-42a9-42d2-ae6a-ba798bbd02d0_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/cuffblack_fe2473dd-41ed-48f4-916d-0f63c2c5ab71_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2customgoldcuffs_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2customrosegoldcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2roseandgoldcustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2roseandsilvercustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/goldandblackcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/blackandrosecustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2blackcustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/silverandblackcustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2customsilvercuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/gsset_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/cuffgiftset_1024x.jpg?v=1645689490" alt=""></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div><div thumbsSlider="" class="swiper-container custGalleryThumbs"><div class="swiper-wrapper"><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/20_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/21_19b332e1-fb4b-40a9-a370-98b24a407aed_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/DSC04836_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customcuffcouplecuffrelationshipgift_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrycuffgiftbundlecouplesgift5_1024x.jpg?v=1691659279" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrycuffss_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrycuffgiftbundlecouplesgift2_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrycuffgiftbundlecouplesgift3_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/relationshipgiftcustomjewelrycuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/customcuffcustomengravedbraceletgift_98474848-42a9-42d2-ae6a-ba798bbd02d0_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/cuffblack_fe2473dd-41ed-48f4-916d-0f63c2c5ab71_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2customgoldcuffs_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2customrosegoldcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2roseandgoldcustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2roseandsilvercustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/goldandblackcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/blackandrosecustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2blackcustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/silverandblackcustomcuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/2customsilvercuff_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/gsset_1024x.jpg?v=1645689490" alt=""></div><div class="swiper-slide"><img src="https://www.customcuff.co/cdn/shop/products/cuffgiftset_1024x.jpg?v=1645689490" alt=""></div></div></div></div>').insertBefore('.lp-element.lp-pom-box.sticky');

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
						  // 320: {
						  //   slidesPerView: 4,
						  //   spaceBetween: 20
						  // },
						  // when window width is >= 480px
						  320: {
						    slidesPerView: 5,
						   // spaceBetween: 10
						  },
						  //when window width is >= 640px
						  640: {
						    slidesPerView: 7,
						    //spaceBetween: 20
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
			jQuery('#lp-pom-text-115 span').text('CUSTOM CUFF GIFT SET');
		}

		if( jQuery('div.lp-pom-root .lp-pom-text span:contains(Waterproof And Guaranteed)').length > 0 ){
			jQuery('div.lp-pom-root .lp-pom-text span:contains(Waterproof And Guaranteed)').text('Tarnish, Water & Sweat-Proof');
		}

		if( jQuery('div.lp-pom-root .lp-pom-text span:contains(All Our Products Are Unisex And Perfect For Him & Her)').length > 0 ){
			jQuery('div.lp-pom-root .lp-pom-text span:contains(All Our Products Are Unisex And Perfect For Him & Her)').text('Hypoallergenic Materials');
		}

		if( jQuery('.custWrapperV2 .custProductColorWrap').length == 0 ){
			jQuery('<div class="custProductColorWrap colorSwatchOne"> <p class="custColorTitle"> Cuff 1 Color: <span id="custColorLabel">Gold</span></p><ul class="custProductColors"> <li class="custShinyGold custActive" cust-color="Gold"></li><li class="custShinyRose" cust-color="Rose"></li><li class="custMetalBlack" cust-color="Matte Black"></li><li class="custShinySilver" cust-color="Silver"></li></ul></div><div class="custProductColorWrap colorSwatchSecond"> <p class="custColorTitle">Cuff 2 Color: <span id="custColorLabel">Gold</span></p><ul class="custProductColors"> <li class="custShinyGold custActive" cust-color="Gold"></li><li class="custShinyRose" cust-color="Rose"></li><li class="custMetalBlack" cust-color="Matte Black"></li><li class="custShinySilver" cust-color="Silver"></li></ul></div>').insertAfter('.lp-element.lp-pom-image.color:last');
		}

		if( jQuery('.custWrapperV2 .custPriceButton').length == 0 ){
			jQuery('<button class="custPriceButton"><span class="custPirce"><span>BUY NOW - $<span class="price-button">40.00</span>&nbsp;</span><span class="custOffPrice">$<s>45.00</s></span></button>').insertAfter('.colorSwatchSecond');
		}
	}

	function updateLandingPageImages(){
		if(jQuery("#lp-pom-image-219 .lp-pom-image-container img").length > 0){
			jQuery("#lp-pom-image-219 .lp-pom-image-container img").attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img2.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img2.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img2.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img2.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img2.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img2.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img2.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/stop_buying_img2.png"
			});
		}

		if(jQuery('#lp-pom-image-261 .lp-pom-image-container img').length > 0){
			jQuery("#lp-pom-image-261 .lp-pom-image-container img").attr({
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

		// if(jQuery('#lp-pom-image-304 .lp-pom-image-container img').length > 0){
		// 	jQuery("#lp-pom-image-304 .lp-pom-image-container img").attr({
		//       src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		//      'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		//       'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		//      'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		//      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		//       'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		//       'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png",
		//       'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cherish_your_memories_img1.png"
		// 	});
		// }
		
		if(jQuery('.swiper-reviews-ingredients-desk #slider-reviews .content:contains(COORDINATES)').length > 0){
			jQuery('.swiper-reviews-ingredients-desk #slider-reviews .content:contains(COORDINATES) img').addClass('custImgV2');
			jQuery('.custImgV2').attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img2.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img2.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img2.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img2.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img2.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img2.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img2.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/coordinates_img2.png"
			});
		}

	/*	if( jQuery('.swiper-reviews-ingredients-desk #slider-reviews .content:contains(TEXT)').length > 0 ){
			jQuery('.swiper-reviews-ingredients-desk #slider-reviews .content:contains(TEXT) img').addClass('customTextImgV2');
			jQuery('.customTextImgV2').attr({
		      src: "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		     'data-src-desktop-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		      'data-src-desktop-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		     'data-src-mobile-1x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		     'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		      'data-src-mobile-2x': "https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		      'data-src-mobile-3x':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png",
		      'srcset':"https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/generic_jewelry_img2.png"
			});
		}*/
	}


	//on click of the custom 'Buy now' CTA
	jQuery(document).on('click','.custPriceButton' , function() {
		console.log('on btn click >>>');
		var strColorOne = jQuery('.custProductColorWrap.colorSwatchOne li.custActive').attr('cust-color');
		var strColorSecond = jQuery('.custProductColorWrap.colorSwatchSecond li.custActive').attr('cust-color');
		var strKey = strColorOne+'-'+strColorSecond;
		console.log("arrProdColorSwatches >>> ");
		console.log(arrProdColorSwatches[strKey]);
		window.location.href = arrProdColorSwatches[strKey];
	});

	//on click of the custom color swatches
	jQuery(document).on('click','.custWrapperV2 .custProductColorWrap.colorSwatchOne .custProductColors li' , function() {
		
		jQuery('.custProductColorWrap.colorSwatchOne .custProductColors li').not(this).removeClass('custActive');
		jQuery(this).addClass('custActive');
		var strColor = jQuery('.custProductColorWrap.colorSwatchOne .custProductColors li.custActive').attr('cust-color');
		jQuery('.custProductColorWrap.colorSwatchOne #custColorLabel').text(strColor);

	});

	jQuery(document).on('click','.custWrapperV2 .custProductColorWrap.colorSwatchSecond .custProductColors li' , function() {
		
		jQuery('.custProductColorWrap.colorSwatchSecond .custProductColors li').not(this).removeClass('custActive');
		jQuery(this).addClass('custActive');
		var strColor = jQuery('.custProductColorWrap.colorSwatchSecond .custProductColors li.custActive').attr('cust-color');
		jQuery('.custProductColorWrap.colorSwatchSecond #custColorLabel').text(strColor);

	});

	clearInterval(waitForJquery);

    }
}, 50);