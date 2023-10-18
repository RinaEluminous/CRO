var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
	
		if(sessionStorage.getItem("custIsLearnMore") === null && localStorage.getItem("custIsCloseBanner") === null) {

			if(window.location.pathname.indexOf('/book-a-demo') == -1 && window.location.pathname.indexOf('/account') == -1 && window.location.pathname.indexOf('/feature-comparison') == -1 && window.location.pathname.indexOf('/join-free') == -1) {
				custSideWideBanner();
			}
		}

		if(jQuery(".section .comparison-scroll .features-comparison-grid").length > 0 && window.location.pathname.indexOf('/feature-comparison') !== -1){
			custFeaturesComparisonGrid();
		}

		function custSideWideBanner(){
			if(jQuery(".custCompetitorStickyBanner").length == 0) {
				jQuery('<div class="custCompetitorStickyBanner"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/compare_tarrif_icon.svg"> </div><div class="copy">Learn how MediaZilla outperforms YouTube, Vimeo, and Dropbox.</div><a href="https://mediazilla.com/feature-comparison" class="custBtn">Learn More</a> <div class="closeBtn"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/close_icon.svg"> </div></div>').appendTo('body');
			}
		}

		function custFeaturesComparisonGrid() {

			if(jQuery(".custComparisonWraper").length == 0) {
				jQuery('<div class="custComparisonWraper"> <h2>Why Choose MediaZilla?</h2> <h6 class="subHeading">See below how MediaZilla outperforms Vimeo, YouTube, and Dropbox as a professional video delivery platform.</h6> <a href="https://mediazilla.com/free-trial?plan=pro&billing=annual" class="nav-button get-a-demo w-nav-link custTrialLink">Start Your Free Trial</a> <div class="custComparisonScrollBox"> <div class="custRow"> <div class="custCol empty"></div><div class="custCol mz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/comp_mediazilla.png"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/comp_vimeo.png"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/comp_youtube.png"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/comp_dropbox.png"> </div></div><div class="custRow"> <div class="custCol title"> <p>Permanently deliver your projects. Keep them online if you cancel your membership</p></div><div class="custCol mz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_red_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div></div><div class="custRow"> <div class="custCol title"> <p>Sell videos on demand</p></div><div class="custCol mz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_red_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_black_icon.svg"> </div><div class="custCol"> <p>Enterprise only</p></div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div></div><div class="custRow"> <div class="custCol title"> <p>Showcase multiple videos with an interactive menu that is accessible from any device</p></div><div class="custCol mz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_red_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div></div><div class="custRow"> <div class="custCol title"> <p>Showcase your videos offline with an interactive menu</p></div><div class="custCol mz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_red_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div></div><div class="custRow"> <div class="custCol title"> <p>Does not false flag copyright violations</p></div><div class="custCol mz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_red_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <p>Maybe</p></div></div><div class="custRow"> <div class="custCol title"> <p>100% Ad free</p></div><div class="custCol mz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_red_icon.svg"> </div><div class="custCol"> <p>Excessive brand promotion</p></div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_black_icon.svg"> </div></div><div class="custRow"> <div class="custCol title"> <p>A premium client experience that best represents the quality of your work</p></div><div class="custCol mz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_red_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div></div><div class="custRow"> <div class="custCol title"> <p>Personalized support from experts in video</p></div><div class="custCol mz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/yes_red_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div><div class="custCol"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/no_black_icon.svg"> </div></div><div class="custRow"> <div class="custCol empty"> &nbsp; </div><div class="custCol mz"> <p>Get started with a 14 Day Free Trial</p><a href="https://mediazilla.com/free-trial?plan=pro&billing=annual" class="nav-button get-a-demo w-nav-link custTrialLink">Start Your Free Trial</a> </div><div class="custCol empty"> &nbsp; </div><div class="custCol empty"> &nbsp; </div><div class="custCol empty"> &nbsp; </div></div></div></div><div class="custComparisonCarousel"> <div class="container"> <div class="custTitle"> Trusted by Organizations of all Sizes <span>From filmmakers to schools to enterprises, we have you covered.</span> </div><div class="swiper custComparisonReviewSection swiper-initialized swiper-horizontal swiper-backface-hidden"> <div class="swiper-wrapper" id="swiper-wrapper-7bee45cf0b91eca4" aria-live="off"> <div class="swiper-slide" role="group" aria-label="1 / 3"> <div class="custInstitutionalTestimonials"> <div class="starsRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> </div><p>You guys seriously rock. I love the dedication to customer service MZ continues to offer. Its a Sunday and I am getting a reply!</p><div class="author"> <div class="avtar"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/david.png" alt="David Rennie"> </div><cite>David Rennie <b>Trinity Wedding Cinema</b> <span>Member since 2014</span> </cite> </div></div></div><div class="swiper-slide swiper-slide-next" role="group" aria-label="2 / 3"> <div class="custInstitutionalTestimonials"> <div class="starsRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> </div><p>"I’ve been using MediaZilla since 2015 and love the service! The delivery workflow is smooth, slick, and provides a highly professional client experience. MediaZilla evolves with the times and even older uploads benefit from newer features. I would highly recommend it!"</p><div class="author"> <div class="avtar"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/jason.png" alt="Jason Nolan"> </div><cite>Jason Nolan <b>Wedding Films</b> <span>Member since 2015</span> </cite> </div></div></div><div class="swiper-slide swiper-slide-active" role="group" aria-label="3 / 3"> <div class="custInstitutionalTestimonials"> <div class="starsRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"> </span> </div><p>"The digital delivery experience is what clients expect from professional filmmakers. Thanks for constantly improving the MediaZilla service.... the team at True Focus Films are HUGE fans of yours."</p><div class="author"> <div class="avtar"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/richard.png" alt="Richard Kim"> </div><cite>Richard Kim <b>True Focus Films</b> <span>Member since 2014</span> </cite> </div></div></div></div><div class="swiper-pagination"></div></div><div class="custInstutionalLogos"> <div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/make-a-wish.png" alt="make a wish"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/harvard-school.png" alt="harvard school"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/kaiser-permanente.png" alt="kaiser permanente"> </div><div class="cerritos_logo"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cerritos-college.png" alt="cerritos college"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cushman-wakefield.png" alt="cushman wakefield"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/robles-video.png" alt="robles video"> </div></div></div></div>').appendTo('.section.sub-page.wf-section .container');

					if (jQuery('#custSwiperSliderJS').length == 0) {
                		jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
			        }

			        if(jQuery('#custSwiperSliderCSS').length == 0){
                        jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"  id="custSwiperSliderCSS" />');
			        }

			        var intCount  = 0;
			        var intSliderInterval = setInterval(function(){
				  		
				  		if (typeof Swiper !== 'undefined') {
				  			  intCount += 1;

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
					                    slidesPerView: 3,
					                    spaceBetween: 40
					                }
					            }
        					});
        					clearInterval(intSliderInterval);
				  		}

				  		if(intCount === 50){
					        clearInterval(intSliderInterval);
					    }

				  	}, 70);

			        
			}
		}

		jQuery('.custCompetitorStickyBanner .closeBtn').on('click', function (){
			jQuery('.custCompetitorStickyBanner').fadeOut();
			localStorage.setItem("custIsCloseBanner","1");
		});

		jQuery('.custCompetitorStickyBanner .custBtn').on('click', function (){
			sessionStorage.setItem("custIsLearnMore","1");			
		});
		

		clearInterval(waitForjQuery);
	}
}, 50);