var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		addCustHtmlToBlog();

		function addCustHtmlToBlog(){
			//replace the text 'rebuild' to 'Rebuild' 
			var strElement = jQuery('.page--blog #content-wrapper main .group-header .below-blog-header p');
			strElement.html(strElement.html().replace('rebuild','Rebuild'));
			strElement.html(strElement.html().replace('today','today.'));

			//move title to banner after h1
			if(jQuery('#content-wrapper .group-header .below-blog-header').length > 0){
				jQuery('#content-wrapper .group-header .below-blog-header').insertAfter('#content-wrapper .paragraph .bp-simple__bp-text h1');
			}

			//update 'Book Now' CTA to Check if you qualify'
			if(jQuery('.page--blog #content-wrapper main .group-header .items-2 .bp-simple__bp-text .below-blog-header p a').length > 0){
				jQuery('.page--blog #content-wrapper main .group-header .items-2 .bp-simple__bp-text .below-blog-header p a').text('Check if you qualify');
			}


			//custom features to banner section for mobile only
			if(jQuery('.customFeatures').length == 0){
				jQuery('<ul><li>Conquer debt now and learn how to rebuild your credit</li><li>Roll your debt into one easy payment with 0% interest.</li><li>Stop collections actions and get your finances back on track.</li></ul>').insertAfter('#content-wrapper .group-header .below-blog-header p');
			}


			//custom features for desktop only
			if(jQuery('.custBlogReduceDebt').length == 0){
				jQuery('#content-wrapper .container .row .group-right').html('<div class="custBlogReduceDebt"> <h4>Reduce Your Debt by up to 85%</h4> <p>Bromwich&amp;Smith has help over 30,845 Canadians get out of debt and counting.</p><ul> <li>Conquer debt now and learn how to rebuild your credit</li><li>Roll your debt into one easy payment with 0% interest.</li><li>Stop collections actions and get your finances back on track.</li></ul> <div class="heroBthSection"> <div class="btnWraper"> <div class="reviews"><a href="#review-widget-slider"> <div class="googleIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/google-icon.svg"> </div><div class="reviewContent"> <div class="reviewsStarWraper"> <div class="starsWraper"> <div class="starsCount">4.9</div><div class="starsListing"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span> </div></div></div><div class="reviewsNumber">979 Google Reviews</div></div></a></div></div></div><div class="btnWraper"><a href="https://www.bromwichandsmith.com/contact-us">Check if you qualify</a></div></div>')
			}

			//custom feedback html with slider
			if(jQuery('.custFeedbackSection').length == 0){
				jQuery('<div class="custFeedbackSection"> <div class="container"> <h3>Hear How We Have Helped Other Canadians Just Like You <span>Follow these 5 clients on their journey from struggling with overwhelming debt to new hope and optimism on the path to rebuilding their worth</span> </h3> <div class="swiper custFeedbackSwiper"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> </div><div class="quotes">Amy, a single mother of 4, struggles to make it through the stress brought on by unmanageable debt while she provides for her family. Amy shares here story of how she found a solution to eliminate her debt and is back on the path to rebuilding her worth.</div><cite>Amy</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/g4JzjMhjUSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> </div><div class="quotes">Adam takes us through his journey of dealing with stress and unmanageable debt brought on by a separation and a period of under employment.</div><cite>Adam</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/IicbbQVz3rs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> </div><div class="quotes">George struggles to keep afloat during a very stressful period of financial hardship, while staying at his wife\'s side during critical illness.</div><cite>George</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/hA8o_pvKeKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> </div><div class="quotes">Struggling with injury and job loss, Linda\'s financial situation deteriorates with unmanageable debt.</div><cite>Linda</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/HkiBb6KJBKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""></span> </div><div class="quotes">Explore Linda’s story as she recovers from an injury, family hardship and the resulting devastating debt.</div><cite>Linda P</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/3prKnmibfuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div></div><div class="custFreeConsultationWraper"> <div class="container"> <div class="row"> <div class="custBookBanner_sp"> <div class="col-12"> <div class="row"> <div class="innerWraper"> <div class="custBookContent"> <h3>Free Consultation. Never A Cost. No Obligation.</h3> <p>Unbiased | Compassionate | Confidential. Your FREE DEBT RELIEF CONSULTATION can take place on the phone from the comfort of your home.</p></div><div class="custBookBtnWrapper"> <a href="https://www.bromwichandsmith.com/contact-us" class="btn fill">See if you qualify</a> <a href="tel:1-855-884-9243" class="btn outline">Call: 1-855-884-9243</a> </div></div></div></div></div></div></div></div>').insertBefore('#content-wrapper .node .group-footer');

				    if (jQuery('#custSwiperSliderJS').length == 0) {
        				jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" id="custSwiperSliderJS"></script>' );
					}
					if(jQuery('#custSwiperSliderCSS').length == 0){
						jQuery( "head" ).append( '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" id="custSwiperSliderCSS" />' );
					}
					setTimeout(function(){
			  			if (typeof Swiper !== 'undefined') {
				  		var swiper = new Swiper(".custFeedbackSwiper", {
							slidesPerView: 1,
							spaceBetween: 60,
						  pagination: {
							  el: ".swiper-pagination",
							  clickable: true,
							  type: 'bullets',
						  },
							navigation: {
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						  },
					  });
			  		}	
  
		  		}, 2000);

			}	
		}

		//on page scroll - show bottom stickly banner(mobile only)
		jQuery(window).scroll(function () { 
		  	
		  	if(jQuery(window).width() <= 767){
		  		var intScrollTop 	= jQuery(window).scrollTop();

			    var intPageHeight = jQuery('main .block').height() / 5;
			    intPageHeight 	= intPageHeight - 400;

			    if (intScrollTop  > intPageHeight) {
			    	jQuery('.page--blog #content-wrapper main .node--type-blog .container .group-right .custBlogReduceDebt').show();
			    }
			  	else{
			  		if (jQuery(window).scrollTop() == 0) {
			  	 		jQuery('.page--blog #content-wrapper main .node--type-blog .container .group-right .custBlogReduceDebt').hide();
			  		}
			  	}
		  	}
		});

		clearInterval(waitForjQuery);
	}
  }, 50); 