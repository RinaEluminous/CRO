	onPageLoad();

	function onPageLoad(){
		var timesRun = 0;
		var interval = setInterval(function(){
			timesRun += 1;
			
			if(jQuery('.shogun-root + .section').length > 0){
				//function to add custom content on the Therapeutic Moisture Bar page
				updateTherapeuticMoistureBar();
				addCustomMainProductSlider();
			}
			
			if(timesRun === 90){
				clearInterval(interval);
			}
		}, 30);	
	}

	function updateTherapeuticMoistureBar(){

		var strAccordionHTML = '';

		if( jQuery('.shogun-root:last').length > 0 ){
			jQuery('.shogun-root:last').addClass('custHideBlock');
		}

		//replace the comma with fullstop in Product description text
		if(jQuery('.product .description .shg-rich-text.shg-theme-text-content p span:eq(0)').length > 0){
			
			var strProdDesc = jQuery('.product .description .shg-rich-text.shg-theme-text-content p span:eq(0)').text();
			strProdDesc = strProdDesc.replace('rosacea,','rosacea.');
			jQuery('.product .description .shg-rich-text.shg-theme-text-content p span:eq(0)').text(strProdDesc);
		}

		//add custom accordian 
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

				setTimeout(function (){
					if(jQuery('.custProdutsDiscreption .custAcordianBlock:eq(0)').length > 0 ){
						jQuery('.custProdutsDiscreption .custAcordianBlock:eq(0)')[0].click();
					}
				},1500);
			}
		}

		//change the price and review position
		if(jQuery('.modal_price +.jdgm-widget.jdgm-widget').find('.jdgm-prev-badge__stars').length > 0){
			jQuery('.modal_price +.jdgm-widget.jdgm-widget').addClass('custReviews');
			jQuery('.modal_price').insertAfter('.custReviews');
		}

		if(jQuery('.custMoistureBarPhysiciansDermatologist').length == 0){
			jQuery('<div class="custMoistureBarPhysiciansDermatologist"><div class="container"><div class="row"><div class="col-md-6"><h2>Recommended By Physicians. Dermatologist Tested.</h2><p>EMUAID<sup>®</sup> has been<strong> clinically tested and researched for over 20 years</strong>, and was developed with the help of some of the world\'s industry leading chemists and physicists.</p><p>And we continue to consult with dermatologists, pediatricians and medical specialists to this day.</p><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_chemicals.svg"><span>NO<br>Chemicals</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_artificial.svg"><span>NO Artificial<br>Preservatives</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_lanolin.svg"><span>NO Lanolin</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_petrochemicals.svg"><span>NO<br>Petrochemicals</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_parabens.svg"><span>NO Parabens</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no-steroids.svg"><span>NO Steroids</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_fragrance.svg"><span>NO<br>Fragrance</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_animal_testing.svg"><span>NO Animal<br>Testing</span></li></ul></div><div class="col-md-6"><div class="custMoistureBarInfoDoctor"><p>"I\'m a medical doctor and I use the EMUAID products in my practice and recommend them to my patients."</p><span>- Dr. Roopa Chari, M.D.</span></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/dr._roopa_chari_mobile.jpg"></div></div></div></div><div class="custMoistureBarNatureInspired"><div class="container"><h2>Nature Inspired. Clinically Tested.<small>We have traveled the world in search of only<strong> scientifically proven ingredients backed by decades of research </strong></small></h2><ul><li><div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emu-oil.jpg" alt="Emu Oil"></div><div class="custMoistureBarClinicallyTested"><h4>Emu Oil</h4><p>Anti-Inflammatory, Transdermal</p></div></li><li><div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/tea-tree-leaf-oil.jpg" alt="Tea Tree Leaf Oil"></div><div class="custMoistureBarClinicallyTested"><h4>Tea Tree Leaf Oil</h4><p>Anti-Bacterial, Anti-Fungal</p></div></li><li><div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/Argan-oil-v2.jpg" alt="Argan Oil"></div><div class="custMoistureBarClinicallyTested"><h4>Argan Oil</h4><p>High levels of Vitamin E, essential fatty acids and antioxidants</p></div></li><li><div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/macadamia-oil-v2.jpg" alt="Macadamia Oil"></div><div class="custMoistureBarClinicallyTested"><h4>Macadamia Oil</h4><p>Slows down the signs of aging, repairs dry or damaged skin.</p></div></li><li><div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/peppermint-oil-v2.jpg" alt="peppermint-oil"></div><div class="custMoistureBarClinicallyTested"><h4>Peppermint Oil</h4><p>Reduces redness, blotchiness and perks up dull skin</p></div></li><li><div class="custMoistureBarProdImageWrapper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/jojoba-oil-v2.jpg" alt="Jojoba Oil"></div><div class="custMoistureBarClinicallyTested"><h4>Jojoba Oil</h4><p>Supplies the skin with adequate moisture without blocking the pores</p></div></li></ul><div class="custMoistureBarIngredients"><a>Show all ingredients</a><div class="custMoistureBarDropdownIngredients"><p>Active Ingredient: 10x, 20x, 30x HPUS Argentum Metallicum (Colloidal Silver - active ingredient) Other Ingredients include: Emu Oil, Bacillus Ferment, L-Lysine HCL, Tea Tree Oil, Phytosphingosine, and Ceramide 3.</p></div></div></div></div><div class="custMoistureBarReviews custMoistureBarCommHeadTag"><div class="container"><h2>You\'re Not Alone. Real Reviews From People Like You.</h2></div><main><div class="swiper custMoistureBarSwiper"><div class="swiper-wrapper"><div class="swiper-slide swiper-slide-prev"><div class="custMoistureBarInstitutionalTestimonials"><div class="custMoistureBarStarsRatings"><div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>Just to let you know, I ordered your product a month or more ago for nail fungus and it has worked beautifully! first product that has really worked for me!! Thank You*</p><div class="author"><cite>– Sally D.<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide swiper-slide-active"><div class="custMoistureBarInstitutionalTestimonials"><div class="custMoistureBarStarsRatings"><div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>This is our second time purchasing emuaidMAX and is wonderful for nail fungus. It is apparent the product is working. Thank you to the manufacturing people, much appreciation! God bless you all and have a wonderful day!</p><div class="author"><cite>– Meg<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide swiper-slide-next"><div class="custMoistureBarInstitutionalTestimonials"><div class="custMoistureBarStarsRatings"><div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>Product is amazing, shipping was fast. This is my second purchase from you, I will be recommending emuaid to everyone who asks what to do about yucky nail fungus. I\'ve had this for over 10 years, and on a whim tried emuaid when I saw an ad. Such a great impulse buy!</p><div class="author"><cite>– Sarah<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide swiper-slide-active"><div class="custMoistureBarInstitutionalTestimonials"><div class="custMoistureBarStarsRatings"><div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>This is our second time purchasing emuaidMAX and is wonderful for nail fungus. It is apparent the product is working. Thank you to the manufacturing people, much appreciation! God bless you all and have a wonderful day!</p><div class="author"><cite>– Meg<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide swiper-slide-prev"><div class="custMoistureBarInstitutionalTestimonials"><div class="custMoistureBarStarsRatings"><div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>Just to let you know, I ordered your product a month or more ago for nail fungus and it has worked beautifully! first product that has really worked for me!! Thank You*</p><div class="author"><cite>– Sally D.<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div><div class="swiper-slide swiper-slide-next"><div class="custMoistureBarInstitutionalTestimonials"><div class="custMoistureBarStarsRatings"><div class="jdgm-prev-badge" data-average-rating="5"><span class="jdgm-prev-badge__stars" data-score="4.64" tabindex="0" aria-label="4.64 stars" role="button"><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></span></div></div><p>Product is amazing, shipping was fast. This is my second purchase from you, I will be recommending emuaid to everyone who asks what to do about yucky nail fungus. I\'ve had this for over 10 years, and on a whim tried emuaid when I saw an ad. Such a great impulse buy!</p><div class="author"><cite>– Sarah<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified.svg">Emuaid Verified Buyer</span></cite></div></div></div></div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 4" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span></div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div></main></div>').insertAfter('.shogun-root + .section');
				
				if(jQuery('#custSwiperSliderCSS').length == 0){
	                jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
	            }
				if (jQuery('#custSwiperSliderJS').length == 0) {
	                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
	            }

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

	function addCustomMainProductSlider(){
		if(jQuery("#shopify-section-product-template .product__images").length  > 0 && jQuery("#shopify-section-product-template .custSlider").length == 0) {
                
				jQuery("#shopify-section-product-template .product__images").append('<div class="custSlider"><div class="custMainPDPSlider carousel carousel-main" data-flickity=\'{ "sync": ".carousel-nav", "prevNextButtons": true }\'><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-02.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-01.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-04.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-05.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-06.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-07.jpg" alt="Slide 1"></div></div><div class="carousel carousel-nav" data-flickity=\'{ "asNavFor": ".carousel-main", "contain" : true, "pageDots": false }\'><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-02.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-01.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-04.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-05.jpg" alt="Slide 1"></div> <div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-06.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/moisture-bar-image-07.jpg" alt="Slide 2"></div></div></div>');

                if(jQuery("#shopify-section-product-template .product__images .custSlider").length  > 0){
               
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