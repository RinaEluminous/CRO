var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {

		addCustomHTML();
		hideDefaultHtml();

		function hideDefaultHtml(){
			if(jQuery('.section:contains(TRUSTED BY THOUSANDS OF INSTITUTIONS)').length > 0 ){
				jQuery('.section:contains(TRUSTED BY THOUSANDS OF INSTITUTIONS)').addClass('custHideHpSection');
			}

			if(jQuery('.section:contains(Here are a few ways)').length > 0){
				jQuery('.section:contains(Here are a few ways)').addClass('custHideHpSection');
			}

			if(jQuery('.section:contains(A video platform built for)').length > 0){
				jQuery('.section:contains(A video platform built for)').addClass('custHideHpSection');
			}

			if(jQuery('.section:contains(testimonials)').length > 0){
				jQuery('.section:contains(testimonials)').addClass('custHideHpSection');
			}

			if(jQuery('.container:contains(Get started with a Free Trial)').length > 0){
				jQuery('.container:contains(Get started with a Free Trial)').addClass('custHideHpSection');
			}
		}
		
		function addCustomHTML(){
			if(jQuery('.custHPfoldWraper').length == 0){
				jQuery('<div class="custHPfoldWraper"><div class="customHpBanner"> <div class="container"> <div class="row"> <div class="col-sm-6"> <div class="scrolling-words-box"><ul><li>Event Filmmakers</li><li>Video Producers</li><li>Enterprises</li><li>Schools</li><li>Non-Profits</li><li>Webinar Marketers</li><li>Event Filmmakers</li></ul></div><h1>end-to-end video delivery system</h1> <p>MediaZilla helps organizations engage viewers across any device with a custom branded professional video platform.</p><ul class="heroListings"> <li>Send, track, and verify delivery of video content</li><li>Create private video collections with multi-user access</li><li>Showcase videos with a customized interactive menu.</li></ul> <div class="custButtonWrapper"> <a href="https://mediazilla.com/join-free?start_free" class="custBtn fillBtn">Start Your Free Trial</a> <a href="javascript:void(0);" class="custBtn outlineBtn">Watch Demo</a> </div></div><div class="col-sm-6"> <div class="custVideoWrapper"> <div class="custVideoPoster"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/video_poster.png"> </div><div class="custVideoPlayButton"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/play_icon.svg"> </div></div></div></div><div class="custInstitutionsSection"><div class="custSectionTitle">Trusted by thousands of institutions</div><div class="customInstutionsLogo"> <div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/make-a-wish.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/harvard-school.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/kaiser-permanente.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cerritos-college.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cushman-wakefield.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/robles-video.png" alt=""> </div></div></div></div><div class="customHpVideoPopup"> <div class="custFrameWrapper"> <iframe frameborder="0" src="https://mediazilla.com/IzSADjEtZJ?autoplay=0"></iframe> </div><div class="custPopupOverlay"></div></div></div><div class="custVideoPlatformWraper"> <div class="container"> <h2>A Video Platform Built for Delivery</h2> <p>When businesses, schools, and non-profits need a secure solution for managing and delivering videos, they turn to MediaZilla. Since our founding in 2014, we’ve built a video platform that makes it easy to deliver a high-end immersive viewing experience, maximizing engagement and ultimately the success of our members. Find out what makes us the ideal solution for your organization.</p><div class="videoPlatformRow"> <div class="row"> <div class="col-6"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/video_content_management.png" alt="Video Content Management"> </div><div class="col-6"> <div class="content"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/manage_Icon.svg" alt="Video Content Management"> </div><h3>Video Content Management</h3> <p>Teams love MediaZilla because they can quickly upload, organize, find, and share videos securely. Organizations save thousands of hours by storing and delivering videos to their stakeholders using a single platform.</p><a href="https://mediazilla.com/video-content-management">Learn more <span class="custLearnMoreBtn"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/right-arrow-red.svg" alt="mediazilla"></span></a> </div></div></div></div><div class="videoPlatformRow reverse"> <div class="row"> <div class="col-6"> <img class="fluid-img" src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/premium_viewing_experience.png" alt="Video Content Management"> </div><div class="col-6"> <div class="content"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/premium_Icon.svg" alt="Premium Viewing Experience"> </div><h3>Premium Viewing Experience</h3> <p>Whether you’re a business, filmmaker, educator, or healthcare professional, video is the most powerful medium of communication. MediaZilla enables organizations to deliver exceptional interactive video experiences to all devices with ease of use.</p><a href="https://mediazilla.com/premium-viewing-experience">Learn more <span class="custLearnMoreBtn"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/right-arrow-red.svg" alt="mediazilla"></span></a> </div></div></div></div><div class="videoPlatformRow"> <div class="row"> <div class="col-6"> <img class="fluid-img" src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/secure_private_video-delivery.png" alt="Secure Private Video Delivery"> </div><div class="col-6"> <div class="content"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/secure_Icon.svg" alt="Secure Private Video Delivery"> </div><h3>Secure Private Video Delivery</h3> <p>A system built with security and privacy first. Stop worrying about shared passwords granting unauthorized access. Take control of who can view your content.</p><a href="https://mediazilla.com/secure-private-delivery">Learn more <span class="custLearnMoreBtn"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/right-arrow-red.svg" alt="mediazilla"></span></a> </div></div></div></div><div class="videoPlatformRow reverse"> <div class="row"> <div class="col-6"> <img class="fluid-img" src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/monetize_your_videos.png" alt="Monetize Your Videos"> </div><div class="col-6"> <div class="content"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/sell_Icon.svg" alt="Monetize Your Videos"> </div><h3>Monetize Your Videos</h3> <p>Enable the paywall, set the price, share the link and start making money. It’s that simple. We’ve made it so easy for your customers to make their purchase, you will no doubt see an increase in sales.</p><a href="https://mediazilla.com/sell-your-videos">Learn more <span class="custLearnMoreBtn"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/right-arrow-red.svg" alt="mediazilla"></span></a> </div></div></div></div></div></div><div class="custMediazillaForWraper"> <div class="container"> <h2>Who is MediaZilla for?</h2> <p>Whether you’re a filmmaker, business, or educator, video is the most powerful medium of communication. Let MediaZilla enable your organization to deliver exceptional video experiences with ease.</p><div class="custServicesGridWraper"> <div class="custGridItems"> <a href="https://mediazilla.com/event-cinematography"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/event_filmmaker.jpg" alt="Event Filmmakers"> <div class="content"> <h4>Event Filmmakers</h4> </div></a> </div><div class="custGridItems"> <a href="https://mediazilla.com/event-cinematography"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/video_producers.jpg" alt="Video Producers"> <div class="content"> <h4>Video Producers</h4> </div></a> </div><div class="custGridItems"> <a href="https://mediazilla.com/enterprise"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/enterprises.jpg" alt="Enterprises"> <div class="content"> <h4>Enterprises</h4> </div></a> </div><div class="custGridItems"> <a href="https://mediazilla.com/education"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/schools.jpg" alt="Schools"> <div class="content"> <h4>Schools</h4> </div></a> </div><div class="custGridItems"> <a href="https://mediazilla.com/enterprise"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/non-profits.jpg" alt="Non-Profits"> <div class="content"> <h4>Non-Profits</h4> </div></a> </div><div class="custGridItems"> <a href="https://mediazilla.com/maximize-webinar-conversions"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/marketers.jpg" alt="Marketers"> <div class="content"> <h4>Marketers</h4> </div></a> </div></div></div></div><div class="custInstitutionalPriceCarousel"> <div class="container"> <div class="custSectionTitle"> Trusted by Organizations of all Sizes <span>From filmmakers to schools to enterprises, we have you covered.</span> </div><div class="swiper custPriceReviewSection"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="custInstitutionalTestimonials"> <p>"The digital delivery experience is what clients expect from professional filmmakers. Thanks for constantly improving the MediaZilla service.... the team at True Focus Films are HUGE fans of yours."</p><div class="author"> <cite>Richard Kim <span>Member since 2018</span> </cite> <div class="starsRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> </div></div></div></div><div class="swiper-slide"> <div class="custInstitutionalTestimonials"> <p>"I’ve been using MediaZilla since 2015 and love the service! The delivery workflow is smooth, slick, and provides a highly professional client experience. MediaZilla evolves with the times and even older uploads benefit from newer features. I would highly recommend it!"</p><div class="author"> <cite>Jason Nolan <span>Member since 2015</span> </cite> <div class="starsRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> </div></div></div></div><div class="swiper-slide"> <div class="custInstitutionalTestimonials"> <p>You guys seriously rock. I love the dedication to customer service MZ continues to offer. Its a Sunday and I am getting a reply!</p><div class="author"> <cite>David Rennie <span>Member since 2014</span> </cite> <div class="starsRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> </div></div></div></div></div></div><div class="customInstutionsLogo"> <div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/make-a-wish.png" alt="make a wish"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/harvard-school.png" alt="harvard school"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/kaiser-permanente.png" alt="kaiser permanente"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cerritos-college.png" alt="cerritos college"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cushman-wakefield.png" alt="cushman wakefield"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/robles-video.png" alt="robles video"> </div></div></div></div><div class="custVideoDeliveryTrail"> <div class="container"> <h2>Ready to Elevate Your Video Delivery?</h2> <p>Start Your 14 Day Free Trial or Request a Custom Demo Today.</p><div class="custButtonWrapper"> <a href="https://mediazilla.com/join-free?start_free" class="custBtn fillBtn">Start Your Free Trial</a> </div></div></div></div>').insertAfter('.banner');

					if (jQuery('#custSwiperSliderJS').length == 0) {
                		jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
			        }

			        if(jQuery('#custSwiperSliderCSS').length == 0){
			            jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
			        }

					/*jQuery(document).on('click','.customHpBanner .videoWraper .custVideoPlayButton', function() {
						jQuery(".customHpBanner .customHpVideoPopup").fadeIn().css({
							'display': 'flex'
						});
					});


		
					jQuery(document).on('click','.customHpBanner .customHpVideoPopup .custPopupOverlay',function () {
						jQuery(".customHpBanner .customHpVideoPopup").fadeOut();
					});*/

					jQuery(document).on('click', '.customHpBanner .custVideoWrapper .custVideoPlayButton,.custButtonWrapper a.custBtn.outlineBtn', function() {

						if (jQuery('.customHpVideoPopup').length == 0) {
								jQuery('<div class="customHpVideoPopup"> <div class="custFrameWrapper"> <iframe frameborder="0" src="https://mediazilla.com/IzSADjEtZJ?autoplay=0"></iframe> </div><div class="custPopupOverlay"></div></div></div>').insertAfter('.customHpBanner .container');
						}
						jQuery(".customHpBanner .customHpVideoPopup").fadeIn().css({
							'display': 'flex'
						});
					});

					jQuery(document).on('click', '.customHpBanner .customHpVideoPopup .custPopupOverlay', function() {
						jQuery(".customHpBanner .customHpVideoPopup").remove();
					});


			        setTimeout(function(){
				  		
				  		if (typeof Swiper !== 'undefined') {
				  			var swiper = new Swiper(".custPriceReviewSection", {
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
					                    slidesPerView: 3,
					                    spaceBetween: 40
					                }
					            }
        					});
						}
					}, 1500);
			}
		}

		clearInterval(waitForjQuery);
	}
}, 50);