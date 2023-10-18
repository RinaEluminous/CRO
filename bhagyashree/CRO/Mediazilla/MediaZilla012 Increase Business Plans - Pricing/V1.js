var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {

    	addCustomBanner();
    	customPricingPlans();
    	customComparisonCarousel();

    	function addCustomBanner(){
    		if(jQuery('.pricing-section-2.a.bm-pricing-main').length > 0){
    			jQuery('.pricing-section-2.a.bm-pricing-main').addClass('custPricingSection');
    		}

	    	if(jQuery('.custPricingMainBanner').length == 0){
	    		jQuery('<div class="custPricingMainBanner"> <div class="row"> <div class="col-6"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/pricing-video-platform.png" alt="Pricing Video Platform"> </div><div class="col-6"> <div class="content"> <h3>One Video Platform, Unlimited Possibilities</h3> <p>Streamline your video workflow with MediaZilla, everything you need to deliver an interactive, premium video experience to your clients.</p><ul> <li><span><img src="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/6187101d05f7dbc371fca414_3.svg"></span><div> Start your <b>14 day free</b> trial or request a custom demo today</div></li><li><span><img src="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/6187101d05f7dbc371fca414_3.svg"></span><b><div>No credit card required</b></div></li></ul> </div></div></div></div>').prependTo('.price-container.w-clearfix');
	    	}
    	}
    	
    	function customPricingPlans(){

    		if(jQuery('.bm-pricing-title p.month-plan').length > 0){
    			jQuery('.bm-pricing-title p.month-plan').html('Yearly <span> (2 free months)</span>');
    		}

    		//Enterprise
    		if(jQuery('.price-grid [class*="price-card"]:contains(Enterprise)').length > 0){
    			jQuery('.price-grid [class*="price-card"]:contains(Enterprise)').addClass('custEnterprise');
	    	}

	    	//update the text below the 'Enterprise' plan
	    	jQuery('.custEnterprise p.paragraph-small').text('A customizable plan to take your business to a level with no constraints with exceptional white-glove assistance.');



	    	if(jQuery('.custEnterprise .custPricingList').length == 0){
	    		jQuery('<div class="custPricingList"> <div class="pricing-item-2 title"> <div>Includes everything on Business plus:</div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/red-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Custom upload quota <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/red-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>White-glove onboarding <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/red-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Enterprise grade security <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/red-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Volume-based pricing on selling videos<img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/red-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Unlimited number of users or viewers<img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div></div>').insertAfter('.price-grid .custEnterprise[class*="price-card"] .pricing-list');

	    	}

	    	//Business
	    	if(jQuery('.price-grid .price-card-feature-2:contains(Business)').length > 0){
    			jQuery('.price-grid .price-card-feature-2:contains(Business)').addClass('custBusiness');
	    	}

	    	//update the text below the 'Business' plan
	    	jQuery('.custBusiness  p.paragraph-small').text('For professionals that want to expand their business with video expert guidance');


	    	if(jQuery('.custBusiness .custPricingList').length == 0){
	    		jQuery('<div class="custPricingList"> <div class="pricing-item-2 title"> <div>Includes everything in Pro plus:</div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/black-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>1.2 TB upload quota every year<img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/black-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Video expert consultation<img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"> </div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/black-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Free integrations & migrations <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/black-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Premium customer support<img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/black-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Up to 5 users<img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div></div>').insertAfter('.price-grid .price-card-feature-2.custBusiness .pricing-list');
	    	}

	    	if(jQuery('.custBusiness .no-credit').length == 0){
	    		jQuery('<div class="no-credit">No credit card required</div>').appendTo('.price-grid .price-card-feature-2.custBusiness .flex-center');
	    	}

	    	//Pro
	    	if(jQuery('.price-grid .bm-price-card:contains(Pro)').length > 0){
	    		jQuery('.price-grid .bm-price-card:contains(Pro)').addClass('custPro');
	    	}

	    	//update the text below the 'Pro' plan
	    	jQuery('.custPro p.paragraph-small').text('For 1-2 professionals to start sending videos effectively');


	    	if(jQuery('.custPro .custPricingList').length == 0){
	    		jQuery('<div class="custPricingList"> <div class="pricing-item-2 title"> <div>Includes:</div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/red-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>600 GB upload quota every year<img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/red-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Lifetime streaming access of delivered content<img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div><div class="pricing-item-2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/red-tick.svg" loading="lazy" alt="check" class="checkmark-icon"> <div>Sell videos and earn money<img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/icon-e1.svg" loading="lazy" alt="check" class="checkmark-icon"></div></div></div>').insertAfter('.price-grid .custPro[class*="price-card"] .pricing-list');

	    	}

	    	if(jQuery('.custPro .no-credit').length == 0){
	    		jQuery('<div class="no-credit">No credit card required</div>').appendTo('.price-grid [class*="price-card"].custPro .flex-center');
	    	}

    	}

    	function customComparisonCarousel(){

    		if(jQuery('.custFeaturesCTA').length == 0){
    			jQuery('<a class="button-red-year-copy w-button See-All-Features custFeaturesCTA">See All Features</a>').insertAfter('a.button-red-year-copy.bm-show-feature.w-button');
    		}

    		if(jQuery('.custComparisonCarousel').length == 0){
    			jQuery('<div class="custComparisonCarousel"> <div class="container"> <div class="custTitle"> Trusted by Organizations of all Sizes </div><div class="swiper custComparisonReviewSection swiper-initialized swiper-horizontal swiper-backface-hidden"> <div class="swiper-wrapper" id="swiper-wrapper-7bee45cf0b91eca4" aria-live="off" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);"> <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 2" style="width: 630px; margin-right: 40px;"> <div class="custInstitutionalTestimonials"> <div class="starsRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> </div><p>"I’ve been using MediaZilla since 2015 and love the service! The delivery workflow is smooth, slick, and provides a highly professional client experience. MediaZilla evolves with the times and even older uploads benefit from newer features. I would highly recommend it!"</p><div class="author"> <div class="avtar"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/jason.png" alt="Jason Nolan"> </div><cite>Jason Nolan <b>Wedding Films</b> <span>Member since 2015</span> </cite> </div></div></div><div class="swiper-slide swiper-slide-next" role="group" aria-label="2 / 2" style="width: 630px; margin-right: 40px;"> <div class="custInstitutionalTestimonials"> <div class="starsRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> </div><p>"The digital delivery experience is what clients expect from professional filmmakers. Thanks for constantly improving the MediaZilla service.... the team at True Focus Films are HUGE fans of yours."</p><div class="author"> <div class="avtar"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/richard.png" alt="Richard Kim"> </div><cite>Richard Kim <b>True Focus Films</b> <span>Member since 2014</span> </cite> </div></div></div></div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span></div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span> </div><div class="custInstutionalLogos"> <div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/make-a-wish.png" alt="make a wish"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/harvard-school.png" alt="harvard school"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/kaiser-permanente.png" alt="kaiser permanente"> </div><div class="cerritos_logo"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cerritos-college.png" alt="cerritos college"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cushman-wakefield.png" alt="cushman wakefield"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/robles-video.png" alt="robles video"> </div></div></div></div>').insertAfter('.custPricingSection ~ .bm-testimonial');

    				if (jQuery('#custSwiperSliderJS').length == 0) {
			                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
			        }

			        if(jQuery('#custSwiperSliderCSS').length == 0){
			            jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
			        }

					var intCount = 0;
					var intInterval = setInterval(function (){
						intCount += 1;

						if (typeof Swiper !== 'undefined') {

							var swiper = new Swiper(".custComparisonReviewSection", {
					            slidesPerView: 1,
					            spaceBetween: 40,
					            pagination: {
					                el: ".swiper-pagination",
					                clickable: true,
					            },
					            autoplay: {
					                delay: 250000,
					                disableOnInteraction: false,
					            },
					            breakpoints: {
					                768: {
					                    slidesPerView: 2,
					                    spaceBetween: 40
					                },
					                992: {
					                    slidesPerView: 2,
					                    spaceBetween: 40
					                }
					            }
				        	});
				        	clearInterval(intInterval);
						}

						if(intCount === 50){
							clearInterval(intInterval);
						}
					},50);			        
    		}

    		if(jQuery('#Table.section.bm-pricing-tabel .container .custTitle').length == 0){
    			jQuery('<div class="custTitle">Compare Plans<p>All plans include easy video hosting and sharing as well as lifetime video access for your clients.</p></div>').prependTo('#Table.section.bm-pricing-tabel .container');
    		}

    		if(jQuery('#Table.section.bm-pricing-tabel').length > 0){
				jQuery('#Table.section.bm-pricing-tabel').insertAfter('.custComparisonCarousel');
    		}
    		jQuery('#Table.section.bm-pricing-tabel').show();

    	}
    	
    	jQuery(document).on('click','.bm-pricing-main .custFeaturesCTA', function () {
    		jQuery("html, body").animate({ 
    			scrollTop: jQuery('#Table.section.bm-pricing-tabel').offset().top-50
    		 }, 1000);
    	});

    	clearInterval(waitForJquery);
    }
}, 50);  