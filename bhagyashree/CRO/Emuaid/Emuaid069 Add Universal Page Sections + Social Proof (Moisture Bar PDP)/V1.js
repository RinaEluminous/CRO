console.log("%c Emuaid069 ", "background:red;color : white;padding:10px");
	//function to add custom content on the Therapeutic Moisture Bar page
	updateTherapeuticMoistureBar();

	function updateTherapeuticMoistureBar(){
		var strAccordionHTML = '';

		if( jQuery('.shogun-root:last').length > 0 ){
			jQuery('.shogun-root:last').addClass('custHideBlock');
		}

		if( jQuery('.custProdutsDiscreption').length == 0 ) {
			
			var strEmuaidWorks = jQuery('.shogun-tab-content:eq(0) .shg-box-vertical-align-wrapper:eq(1) .shg-box-content .shg-c:eq(1)').html();
			if(strEmuaidWorks !== '' && strEmuaidWorks !== undefined && strEmuaidWorks !== null ){
				strAccordionHTML += '<div class="custAcordianBlock"><h2>Why EMUAID® Works</h2><div class="custAcordianContent"><p>'+strEmuaidWorks+'</p></div></div>';
			}

			var strIngredients = jQuery('.shogun-tab-content:eq(1) p').html();
			if(strIngredients !== '' && strIngredients !== undefined && strIngredients !== null ){
				strAccordionHTML += '<div class="custAcordianBlock"><h2>Ingredients</h2><div class="custAcordianContent"><p>'+strIngredients+'</p></div></div>';
			}

			var strGuarantee = jQuery('.shogun-tab-content:eq(3)').html();
			if(strGuarantee !== '' && strGuarantee !== undefined && strGuarantee !== null ){
				strAccordionHTML += '<div class="custAcordianBlock"><h2>30 Day Money-Back Guarantee</h2><div class="custAcordianContent"><p>'+strGuarantee+'</p></div></div>';
			}

			var strHowToUse = jQuery('.shogun-tab-content:eq(2) p').html();
			if(strHowToUse !== '' && strHowToUse !== undefined && strHowToUse !== null ){
				strAccordionHTML += '<div class="custAcordianBlock"><h2>How To Use</h2><div class="custAcordianContent"><p>'+strHowToUse+'</p></div></div>';
			}

			if(strAccordionHTML !== '' && strAccordionHTML !== undefined && strAccordionHTML!== null) { 
				jQuery('<div class="custProdutsDiscreption"> <div class="custPaymentImg"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/payment-logos.jpg" class="custDeasktop"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/payment-logos-mobile.jpg" class="custmobile"> </div><div class="custAcordianList">'+strAccordionHTML+'</div></div>').insertAfter('#shopify-section-product-template .product_form');
			}
		}

		if(jQuery('.custMoistureBarPhysiciansDermatologist').length == 0){
			jQuery('<div class="custMoistureBarPhysiciansDermatologist"> <div class="container"> <div class="row"> <div class="col-md-6"> <h2>Recommended By Physicians. Dermatologist Tested.</h2> <p>EMUAIDMAX<sup>® </sup>has been<strong> clinically tested and researched for over 20 years </strong> , and was developed with the help of some of the world\'s industry leading chemists and physicists.</p><ul> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_chemicals.svg"><span>NO<br>Chemicals</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_artificial.svg"><span>NO Artificial<br>Preservatives</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_lanolin.svg"><span>NO Lanolin</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_petrochemicals.svg"><span>NO<br>Petrochemicals</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_parabens.svg"><span>NO Parabens</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no-steroids.svg"><span>NO Steroids</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_fragrance.svg"><span>NO<br>Fragrance</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_animal_testing.svg"><span>NO Animal<br>Testing</span></li></ul> </div><div class="col-md-6"> <div class="custMoistureBarInfoDoctor"> <p>"I\'m a medical doctor and I use the EMUAID products in my practice and recommend them to my patients."</p><span>- Dr. Roopa Chari, M.D.</span> </div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/dr._roopa_chari_mobile.jpg"> </div></div></div></div><div class="custMoistureBarNatureInspired"> <div class="container"> <h2>Nature Inspired. Clinically Tested.<small>We have traveled the world in search of only <strong>scientifically proven ingredients backed by decades of research</strong></small></h2> <ul> <li> <div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/colloidal-silver.jpg" alt="colloidal-silver"></div><div class="custMoistureBarClinicallyTested"> <h4>Colloidal Silver<span>Active ingredient</span></h4> <p>Antiseptic, Analgesic, Anti-Inflammatory, Anti-Bacterial, Anti-Fungal</p></div></li><li> <div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emu-oil.jpg" alt="Emu Oil"></div><div class="custMoistureBarClinicallyTested"> <h4>Emu Oil</h4> <p>Anti-Inflammatory, Transdermal</p></div></li><li> <div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/tea-tree-leaf-oil.jpg" alt="Tea Tree Leaf Oil"></div><div class="custMoistureBarClinicallyTested"> <h4>Tea Tree Leaf Oil</h4> <p>Anti-Bacterial, Anti-Fungal</p></div></li><li> <div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/vitamin-e.jpg" alt="Vitamin E"></div><div class="custMoistureBarClinicallyTested"> <h4>Vitamin E</h4> <p>Antioxidant, Wound Healing</p></div></li><li> <div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/bacillus-ferment.jpg" alt="Bacillus Ferment"></div><div class="custMoistureBarClinicallyTested"> <h4>Bacillus Ferment</h4> <p>Postbiotic, Support for skin biome</p></div></li><li> <div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/squalane.jpg" alt="Squalane"></div><div class="custMoistureBarClinicallyTested"> <h4>Squalane</h4> <p>Moisturizing, Improves Barrier Function</p></div></li></ul> <div class="custMoistureBarIngredients"> <a>Show all ingredients</a> <div class="custMoistureBarDropdownIngredients"> <p>Active Ingredient: 10x, 20x, 30x HPUS Argentum Metallicum (Colloidal Silver - active ingredient) Other Ingredients include: Emu Oil, Bacillus Ferment, L-Lysine HCL, Tea Tree Oil, Phytosphingosine, and Ceramide 3.</p></div></div></div></div><div class="custMoistureBarReviews custMoistureBarCommHeadTag"> <div class="container"> <h2>You\'re Not Alone. Real Reviews From People Like You.</h2> </div><main> <div class="swiper custMoistureBarSwiper"> <div class="swiper-wrapper"> <div class="swiper-slide swiper-slide-prev"> <div class="custMoistureBarInstitutionalTestimonials"> <div class="custMoistureBarStarsRatings"> <div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>I have dealt with many years of undiagnosed, misdiagnosed thyroid issues and complications from untreated hypothyroidism for more than 40 years. I have many skin, hair and nails issues. Now that I\'m older I do not have medical insurance and have to treat many skin issues on my own. I was diagnosed with lichen sclerosus in my early 20\'s. This is a disease for post menopausal women. To all young women, make sure you exfoliate your skin with a luffa everytime you bath including your back. Emuaid has not only helped with my lichen sclerosus but also psoriasis, eczema and seborrheic keratosis. It also got rid of a hemorrhoid I\'ve had for 20 years. I am now purchasing my second jar to help get rid of lichen sclerosus and toenail fungus.*</p><div class="author"><cite>-Mary C<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide swiper-slide-active"> <div class="custMoistureBarInstitutionalTestimonials"> <div class="custMoistureBarStarsRatings"> <div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>I just want to say what a wonderful product this is... I had lichen sclerosis around my anus and burning all the time... Emuaid was the only product to get it under control... Thankyou so much!! Kind Regards Helen*</p><div class="author"><cite>-Helen G<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide swiper-slide-next"> <div class="custMoistureBarInstitutionalTestimonials"> <div class="custMoistureBarStarsRatings"> <div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>I have been suffering with Lichen Sclerosis for about six years now, I have tried a lot of steroid creams from the dermatology that did not work. Now I have been using Emuaid for about two weeks and the itching has improved a whole lot almost to no itching at all. My skin also use to be so wrinkled and dry now its smooth and even Just waiting to see if my color will come back.*</p><div class="author"><cite>- Tasha H.<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide"> <div class="custMoistureBarInstitutionalTestimonials"> <div class="custMoistureBarStarsRatings"> <div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>I was diagnosed with lichen sclerosis a couple of years ago and given a steroid cream it helped at first but then seemed to make matters worse. I was in so much pain going to the bathroom and it was keeping me up at night due to major itching and burning I literally felt like my lady parts were on fire. So I got on line and found emuaid.It has helped alot and now I can go without burning everytime.I have been using regular emuaid for 2 weeks but then ordered emuaidmax and that helped a little faster. It\'s been 3 weeks and I\'m much better,but not completely healed yet,going to keep using this product because it\'s the only thing out there that I\'ve found that does work.*</p><div class="author"><cite>- Sandra S.<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide"> <div class="custMoistureBarInstitutionalTestimonials"> <div class="custMoistureBarStarsRatings"> <div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>I don\'t often leave reviews of products. I HAD to leave one for this product. I struggled with Lichen Sclerosis for almost 10 months before getting a diagnosis. I was up multiple times per night due to unbearable itching. I went back to the doctor 5 different times, numerous prescriptions and compounds (oral and topical), completely changed my diet, changed my laundry detergent and toilet paper. No change. After 1 application of emu aid I was completely comfortable. No itching. Within 5 days, I had no visible signs of lichen sclerosis. This product IS as miraculous as they claim. Buy it. You\'ll be glad you did. I feel like a different (rested) person!!! Thank you!!*</p><div class="author"><cite>- Traci<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide"> <div class="custMoistureBarInstitutionalTestimonials"> <div class="custMoistureBarStarsRatings"> <div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>I have suffered from Lichen Sclerosus for 14 years. Pain, itching, bleeding and tearing of my skin over and over . . . Several weeks ago I once again became so raw that I went back to the doctor. She treated me like I was contagious and looked at it from afar . . . I went to the internet and done some research. I found Emuaid cream and ordered it on a Thursday at 12 pm. I had it by Saturday and by Sunday the itch and burning was gone. I know it will take time for the color and texture to return. But I can use the bathroom without pain again. In less than 24 hours!!!! Please if someone is suffering with this issue TRY it!!!!!!!!*</p><div class="author"><cite>- J. Gillahan<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide"> <div class="custMoistureBarInstitutionalTestimonials"> <div class="custMoistureBarStarsRatings"> <div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>Great product for Lichen Sclerosis. Cannot figure out why doctors do not prescribe this product. It is not a cure-all but gets condition under control. Use as directed 3 to 4 times a day for about a month. Then use when needed. If symptoms flare up, I use for a few days and my symptoms are gone. It is pricey, but worth it! I thought it was a scam at first, but took the chance So glad I tried!*</p><div class="author"><cite>-Jackie NY<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div></div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 4" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span></div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span> </div></main> </div>').insertAfter('.shogun-root + .section');

				/*if(jQuery('.custMainSlider').length == 0){
					jQuery('<div class="swiper-container slider custMainSlider"> <div class="swiper-wrapper"> <div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample010.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample005.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample012.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample007.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample008.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample009.jpg" alt=""></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div><div class="swiper-container custSliderThumbnail"> <div class="swiper-wrapper"> <div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample010.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample005.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample012.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample007.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample008.jpg" alt=""></div><div class="swiper-slide"><img src="//into-the-program.com/demo/images/sample009.jpg" alt=""></div></div></div>').insertAfter('.custProdutsDiscreption');

				}*/

				if(jQuery('#custSwiperSliderCSS').length == 0){
	                jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
	            }
				if (jQuery('#custSwiperSliderJS').length == 0) {
	                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
	            }

	            // if(jQuery('#custMainSwiperSliderCSS').length == 0){
	            // 	jQuery("head").append('<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.css" id="custMainSwiperSliderCSS"></script>');
	            // }

	            // if(jQuery('#custMainSwiperSliderJS').length == 0){
	            // 	jQuery("head").append('<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.min.js" id="custMainSwiperSliderJS"></script>');
	            // }

				/*var sliderThumbnail = new Swiper('.custSliderThumbnail', {
				  slidesPerView: 4,
				  freeMode: true,
				  watchSlidesVisibility: true,
				  watchSlidesProgress: true,
				});

				var slider = new Swiper('.custMainSlider', {
				  navigation: {
				    nextEl: '.swiper-button-next',
				    prevEl: '.swiper-button-prev',
				  },
				  thumbs: {
				    swiper: sliderThumbnail
				  }
				});*/

				var intCount = 0;
	            var intInterval = setInterval(function () {
	                intCount += 1;
	                if (typeof Swiper !== 'undefined'){
	                    var swiper = new Swiper(".custMoistureBarSwiper", {
	                        slidesPerView: 1,                       
	                        centeredSlides: false,
	                        loop: true,
	                        slideToClickedSlide: false,
	                        spaceBetween: 40,
	                        pagination: {
	                            el: ".swiper-pagination",
	                            clickable: true,
	                    },
	                    breakpoints: {
	                        300: {
	                            autoHeight: true
	                        },
	                        768: {
	                            slidesPerView: 1,
	                            spaceBetweenSlides: 30,
	                            autoHeight: true,
	                        },
	                        991: {
	                            slidesPerView: 2,
	                            spaceBetweenSlides: 0
	                        },
	                        1366: {
	                            slidesPerView: 3,
	                            spaceBetweenSlides: 50
	                        }
	                    } 
	                });
	                clearInterval(intInterval);
	            }

	            if(intCount === 70){
	                clearInterval(intInterval);
	            }
	        },50);
		}
		
		//To get Reviews from default reviews tab and add after custom content
		if(jQuery('#judgeme_product_reviews').length > 0){
			jQuery('#judgeme_product_reviews').insertAfter('.custMoistureBarReviews');
		}

		//To get Disclaimer from default reviews tab and add after custom content
		if(jQuery('.shg-c p:contains(DISCLAIMER)').length > 0 ){
			jQuery('.shg-c p:contains(DISCLAIMER)').parent('.shg-c').addClass('custTherapeuticMoistureBar');
			jQuery('.custTherapeuticMoistureBar').insertAfter('#judgeme_product_reviews');
			jQuery('.custTherapeuticMoistureBar p').wrap('<div class="container"></div>');
		}
	}

	jQuery(document).on('click','.custMoistureBarIngredients a', function() {
        jQuery(this).toggleClass("custMoistureBarActiveIngredient");
    });

    jQuery(document).on('click','.custAcordianBlock', function() {
    	jQuery('.custAcordianBlock').not(this).removeClass("custAcordianactive");	
        if(jQuery(this).hasClass("custAcordianactive")) {
        	jQuery(this).removeClass("custAcordianactive");	
        }
        else{
        	jQuery(this).addClass("custAcordianactive");	
        }
    });