	addLinksToFeatureBlock();
		
	function addLinksToFeatureBlock() {
		//Custom CTA to show/hide features
		var timesRun = 0;
		var interval = setInterval(function(){
		    timesRun += 1;
		    
		    if(jQuery('#Table').length > 0 && jQuery('.custShowFeatureCTA').length == 0){
		    	
				jQuery('<button class="custShowFeatureCTA">Show All Features</button>').insertAfter('#Table .pricing-table');
				jQuery('#Table .pricing-table').addClass('custHideFeatures');
				
				clearInterval(interval);
			}

            //Custom institutions section
            if(jQuery('.custInstitutionalPriceCarousel').length == 0){

               	//Initial title
            	if(jQuery('.pricing-title-wrapper h1').length > 0){
                    //for mobile
                    if(jQuery( window ).width() < 767){
                        jQuery('.pricing-title-wrapper h1').text('Get a Free Personalized Demo');
                    }
                    else{//desktop
						jQuery('.pricing-title-wrapper h1').text('Plans for all Your Video Delivery Needs');
                    }
            	}

            	//Initial sub title
            	if(jQuery('.custSubTitle').length == 0){
            		jQuery('<p class="custSubTitle">Start your <b>14 day free trial</b> or request a custom demo today</p>').insertAfter('.pricing-title-wrapper h1');
            	}
				
				//Footer section
            	if(jQuery('.banner-cta .container p.paragraph-large').length > 0){
            		jQuery('.banner-cta .container p.paragraph-large').text("We'll help determine your needs, just request a custom demo today");
            	}

            	//Footer section 'demo' CTA
            	if(jQuery('.banner-cta .container .button-wrapper a[href*=book-a-demo]').length > 0){
            		jQuery('.banner-cta .container .button-wrapper a[href*=book-a-demo]').text('Request Demo');
            	}

            	//Pro plan feature title
            	if(jQuery('.price-card:contains(Pro) .pricing-list .pricing-item.title div:contains(Deliver Professional Videos Securely)').length > 0){
            		jQuery('.price-card:contains(Pro) .pricing-list .pricing-item.title div:contains(Deliver Professional Videos Securely)').text('Includes:');
            	}

            	//Business plan feature title
            	if(jQuery('.price-card-feature:contains(Business) .pricing-list .pricing-item.title div:contains(Includes everything in Pro +)').length > 0){
            		jQuery('.price-card-feature:contains(Business) .pricing-list .pricing-item.title div:contains(Includes everything in Pro +)').text('Includes everything in Pro plus:');
            	}

            	//Enterprise plan feature title
            	if(jQuery('.price-card:contains(Enterprise) .pricing-list .pricing-item.title div:contains(Includes everything on Business +)').length > 0){
            		jQuery('.price-card:contains(Enterprise) .pricing-list .pricing-item.title div:contains(Includes everything on Business +)').text('Includes everything on Business plus:');
            	}

            	//custom html
                jQuery('<div class="custInstitutionalPriceCarousel"> <div class="container"> <div class="custTitle">Trusted by thousands of institutions</div><div class="custInstutionalLogos"> <div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/make-a-wish.png" alt="make a wish"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/harvard-school.png" alt="harvard school"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/kaiser-permanente.png" alt="kaiser permanente"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cerritos-college.png" alt="cerritos college"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cushman-wakefield.png" alt="cushman wakefield"> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/robles-video.png" alt="robles video"> </div></div><div class="swiper custPriceReviewSection"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="custInstitutionalTestimonials"> <p>It\'s been a wonderful experience using the Mediazilla platform over the past 3 years and seeing it\'s growth! Mediazilla has allowed me to create a unique delivery experience for my wedding and commercial clients, it\'s been fantastic!</p><div class="author"> <cite>Alexander Lewis <span>Owner/Cinematographer, A Lewis Films</span> </cite> <div class="starsRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> </div></div></div></div><div class="swiper-slide"> <div class="custInstitutionalTestimonials"> <p>I\'ve been using MediaZilla since 2015 and love the service! The delivery workflow is smooth, slick, and provides a highly professional client experience. MediaZilla evolves with the times and even older uploads benefit from newer features. I would highly recommend it!</p><div class="author"> <cite>Jason Nolan <span>Member since 2015</span> </cite> <div class="starsRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> </div></div></div></div><div class="swiper-slide"> <div class="custInstitutionalTestimonials"> <p>The digital delivery experience is what clients expect from professional filmmakers. Thanks for constantly improving the MediaZilla service.... the team at True Focus Films are HUGE fans of yours.</p><div class="author"> <cite>Richard Kim <span>Member since 2018</span> </cite> <div class="starsRatings"> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/star-icon.svg" alt="Mediazilla ratings"></span> </div></div></div></div></div></div></div></div><div class="custFaqSection"> <div class="container"> <h3>Frequently Asked Questions</h3> <div class="tabs"> <div class="tab"> <input name="faq" type="radio" id="chck1" checked> <label class="tab-label" for="chck1">What is MediaZilla?</label> <div class="tab-content"> <p>MediaZilla is the ultimate video delivery solution for businesses, professionals, and enthusiasts. We allow users to easily create an immersive Hollywood movie experience to showcase their projects on any device. Our digital delivery system is unlike any other video platform, allowing a true transfer of possession from our members to their clients.</p></div></div><div class="tab"> <input name="faq" type="radio" id="chck2"> <label class="tab-label" for="chck2">How does MediaZilla differ from YouTube or Vimeo?</label> <div class="tab-content"> <p>YouTube and Vimeo are video-sharing platforms. MediaZilla is a true delivery platform allowing you to transfer possession of the online experience to the client. Once delivered, clients will forever have access to their projects even if you close your account.</p><p>Additionally, we focus on creating a premium client experience to best represent the quality of your work. This includes the branded email the client first receives, client portal page, client dashboard and apps, and of course the immersive menu system that showcases the videos.</p><p>Furthermore, delivery can be tracked to ensure your client took possession and viewed the project.</p><p>Learn more about our features <a href="https://support.mediazilla.com/en/articles/5479721-what-can-i-do-on-mediazilla">here</a>.</p></div></div><div class="tab"> <input name="faq" type="radio" id="chck3"> <label class="tab-label" for="chck3">What can I do on MediaZilla?</label> <div class="tab-content"> <h6>Upload your videos</h6> <p>Just like a typical video sharing platform, MediaZilla can be used to upload, share (privately or publicly), and embed videos.</p><p><em>Learn more about Sharing and Delivering <a href="https://support.mediazilla.com/en/collections/3083998-sharing-and-delivering">here</a></em></p><h6>Create Collections</h6> <p>Unique to MediaZilla, you can also create \"Collections\" to showcase one or more videos with an immersive menu, similar to a Blu-ray. Just like a standalone video, a Collection can also be shared, embedded, and delivered to people.</p><p><em>Learn more about Collections <a href="https://support.mediazilla.com/en/articles/5479790-collections-overview">here</a></em></p><h6>Deliver your videos</h6> <p>Once content has been delivered, viewers take possession of it in their own free account, and can access it from a web browser or through the free MediaZilla App, providing a premium viewing experience.</p><p><em>Learn more about Digital Delivery <a href="https://support.mediazilla.com/en/articles/5479819-how-does-the-digital-delivery-process-work">here</a></em></p></div></div><div class="tab"> <input name="faq" type="radio" id="chck4"> <label class="tab-label" for="chck4">What types of projects are people distributing on MediaZilla?</label> <div class="tab-content"> <p>Basically any type of professional video you can imagine or videos that you want to give a professional presentation. This includes but is not limited to the following:</p><p><em>Click in the title to see real examples of what you can do:</em></p><ul> <li><a href="https://mediazilla.com/52yLqMIqWZ?_gl=1*fxug0s*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTk4NjMuNTkuMC4w">Theater Performances</a></li><li><a href="https://mediazilla.com/sn85kvnR9?_gl=1*fxug0s*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTk4NjMuNTkuMC4w">Wedding Films</a></li><li><a href="https://mediazilla.com/zFvvBo7nqm?_gl=1*15eq2uq*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTk4NjMuNTkuMC4w">Corporate Training Videos</a></li><li><a href="https://mediazilla.com/Knpf0y5S5?_gl=1*15eq2uq*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTk4NjMuNTkuMC4w">Promotional Videos</a></li><li><a href="https://mediazilla.com/cudqCSyGj6?_gl=1*15eq2uq*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTk4NjMuNTkuMC4w">Educational Videos</a></li><li><a href="https://mediazilla.com/Ap3byrqQ1?_gl=1*15eq2uq*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTk4NjMuNTkuMC4w">Real Estate Videos</a></li><li><a href="https://mediazilla.com/31ZjByHHS8?_gl=1*15eq2uq*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTk4NjMuNTkuMC4w">Religious Sermons</a></li></ul> <p><em>Other use cases:</em></p><ul> <li>Independent Films</li><li>Yearbook Videos</li><li>Legal Depositions</li><li>Events (Birthdays, Anniversaries, Celebrations, Christenings, Funerals, etc.)</li><li>Home Videos</li><li>and much more...</li></ul> </div></div><div class="tab"> <input name="faq" type="radio" id="chck5"> <label class="tab-label" for="chck5">What are the different membership plans?</label> <div class="tab-content"> <p><b>Plans for End-Users (clients of our paid members)</b></p><p><b>Free viewers:</b> Free accounts are created from either the client portal page of the Digital Delivery email or the main website (click \'Start Free\' in the upper-right corner). This account type does not expire and is for viewing and downloading content that was delivered by a paid member. It does not support uploading videos or creating/editing collections. </p><p><b>Plans for Businesses, Institutions, and Professionals</b></p><p><b>Trial:</b> Trial accounts give users access to nearly all features, free for 14 days. No credit card is required. The account is limited to 10 GB of upload quota and allows users to upload videos, create collections, share, and deliver. Digital Deliveries will be removed from the recipient\'s account in 7 days unless the trial account is converted to a paid membership. Client downloading is not included with the trial.</p><p><b>Free:</b> Pay as you go. No annual or monthly fee.</p><p><b>Pro:</b> The most popular plan, the Pro membership provides up to 600 GB per year of upload quota and also includes unlimited collections and Digital Deliveries.</p><p><b>Business:</b> The Business plan includes all the features of the Pro plan and starts at 1.2 TB of upload quota per year. Members pay per gigabyte of upload usage over 1.2 TB and have no limits.</p><p><b>Enterprise:</b> This is a custom plan for any size organization, we can adapt to your necessity. Please visit our dedicated <a href="https://mediazilla.com/enterprise?_gl=1*17q0dt8*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTkzOTguNTUuMC4w">Enterprise page</a> for more information.</p></div></div><div class="tab"> <input name="faq" type="radio" id="chck6"> <label class="tab-label" for="chck6">What happens to my videos and collections after I cancel my membership?</label> <div class="tab-content"> <p>One of the great features of MediaZilla is that viewers can take possession of content into their own free account through the Digital Delivery process, where it remains forever even after your membership is cancelled. Learn more about our <a href="https://support.mediazilla.com/en/articles/5479819-how-does-the-digital-delivery-process-work">Digital Delivery Process here</a>.</p><p>After cancellation of your account, content that has not been delivered will remain for 30 days after which time it will be deleted. Access to your account is revoked immediately until reactivated. Learn more about <a href="https://support.mediazilla.com/en/articles/5479837-how-can-i-determine-if-a-client-took-possession-of-the-digital-delivery">Digital Delivery Status</a>.</p><p>Content that exists in your clients\' free accounts will always remain in their accounts.</p><p>Original source files of delivered content will be deleted permanently after 30 days of a cancellation, either member requested or de facto cancellation from an unpaid bill. You must maintain an active paid plan for source files to be stored into perpetuity. Read our <a href="https://mediazilla.com/cancellation?_gl=1*zz699*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTkzMDIuNTMuMC4w">cancellation policy</a>.</p></div></div><div class="tab"> <input name="faq" type="radio" id="chck7"> <label class="tab-label" for="chck7">What happens if I use up all my quota before my annual renewal?</label> <div class="tab-content"> <p>Upon uploading a file that will put you over your plan\'s allotted quota, you will be prompted to either upgrade your plan or approve additional quota in order to continue uploading.</p><p><em>Click <a href="https://support.mediazilla.com/en/articles/5479760-how-do-i-upgrade-my-plan">here</a> to learn how to get extra quota.</em></p><p><b>Note:</b> You must have Admin privileges to upgrade your company\'s plan or approve additional quota usage.</p></div></div><div class="tab"> <input name="faq" type="radio" id="chck8"> <label class="tab-label" for="chck8">What is the difference between annual-paid-monthly and annual billing options?</label> <div class="tab-content"> <p><b>Annual:</b> Prepay for the year and get two months free. You get access to the entire annual quota at once with no monthly limits. Quota refreshes annually upon renewal.</p><p><b>Annual-Paid-Monthly:</b> Just like the annual billing, this option provides access to the entire annual quota at once with an annual commitment. There are no monthly upload limits. The account is billed monthly at the monthly billing price. <a href="https://mediazilla.com/cancellation?_gl=1*13anh5z*_ga*MTMwNjg3Mjk5NS4xNjY5Njk3OTc1*_ga_60CG9NGNK1*MTY3MjY0Nzk1Mi4yNC4xLjE2NzI2NTkxMzQuNjAuMC4w">Cancellation fees</a> are only applied if usage is over the monthly average. For example, if you used 50% of your quota in 6 months, there would be no cancellation fee. However, if you used 50% in just 2 months, you would be charged for an additional 4 months.</p></div></div></div></div></div>').insertAfter('.pricing-section + #Table');
            }
	    
		    if(timesRun === 60){
		        clearInterval(interval);
		    }
		}, 100);

		/** Update the text of Pro/business and contact link **/

        //PRO
		if(jQuery('.price-card a:contains(Get Pro)').length > 0){
			jQuery('.price-card a:contains(Get Pro)').text('Start Free Trial');
		}

        if(jQuery(".price-card a[href$='/sign-up?plan=pro&billing=annual']").length > 0 ){
            jQuery(".price-card a[href$='/sign-up?plan=pro&billing=annual']").attr('href','https://mediazilla.com/join-free?plan=pro');
        }

        if(jQuery(".price-card a[href$='/sign-up?plan=pro&billing=monthly']").length > 0){
             jQuery(".price-card a[href$='/sign-up?plan=pro&billing=monthly']").attr('href','https://mediazilla.com/join-free?plan=pro');
        }

        //BUSINESS
		if(jQuery('.price-card-feature a:contains(Get Business)').length > 0){
			jQuery('.price-card-feature a:contains(Get Business)').text('Start Free Trial');
		}

        if(jQuery(".price-card-feature a[href$='/sign-up?plan=business&billing=monthly']").length > 0 ){
            jQuery(".price-card-feature a[href$='/sign-up?plan=business&billing=monthly']").attr('href','https://mediazilla.com/join-free?plan=business');

        }

        if(jQuery(".price-card-feature a[href$='/sign-up?plan=business&billing=annual']").length > 0){
            jQuery(".price-card-feature a[href$='/sign-up?plan=business&billing=annual']").attr('href','https://mediazilla.com/join-free?plan=business');
        }

		if(jQuery('.price-card a:contains(Contact Sales)').length > 0 ){
			jQuery('.price-card a:contains(Contact Sales)').text('request a demo');
		}
		
		/** Get Free Trial and Demo link **/
		if(jQuery('.price-card .text-block a[href*=pro]').length > 0){
			var strProFreeTrialLink = jQuery('.price-card .text-block a[href*=pro]').attr('href');
		}

		if(jQuery('.price-card-feature .text-block a[href*=business]').length > 0){
			var strBusinessFreeTrialLink = jQuery('.price-card-feature .text-block a[href*=business]').attr('href');
		}

		

		if(jQuery('.price-card .enterprise a[href*=demo]').length > 0){
			var strEnterpriseDemoLink = jQuery('.price-card .enterprise a[href*=demo]').attr('href');
		}

		/** Add Free Trial and Demo Link **/
		if(jQuery('.comparison-header-title-2:contains(Pro)').length > 0 && jQuery('#custProLink').length == 0){
			jQuery('<a href="'+strProFreeTrialLink+'" id="custProLink">Start free trial</a>').appendTo('.comparison-header-title-2:contains(Pro)');
		}

		if(jQuery('.comparison-header-title-2:contains(Business)').length > 0 && jQuery('#custBusinessLink').length == 0){
			jQuery('<a href="'+strBusinessFreeTrialLink+'""  id="custBusinessLink">Start free trial</a>').appendTo('.comparison-header-title-2:contains(Business)');
		}

		if(jQuery('.comparison-header-title-2:contains(Enterprise)').length > 0 && jQuery('#custEnterpriseLink').length == 0) {
			jQuery('<a href="'+strEnterpriseDemoLink+'" id="custEnterpriseLink">Request a demo</a>').appendTo('.comparison-header-title-2:contains(Enterprise)');
		}
	}

	//To hide/show feature section on custom CTA click
	jQuery(document).on('click','.custShowFeatureCTA',function () {

		if(jQuery(this).text().trim() == 'Show All Features'){
			jQuery('#Table .pricing-table').removeClass('custHideFeatures');
			jQuery('#Table .pricing-table').addClass('custShowFeatures');
			jQuery(this).text("Hide All Features");
		}
		else{
			jQuery('#Table .pricing-table').removeClass('custShowFeatures');
			jQuery('#Table .pricing-table').addClass('custHideFeatures');
			jQuery(this).text("Show All Features");
		}
	});

   

    if (jQuery('#custSwiperSliderJS').length == 0) {
        jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
    }
    if(jQuery('#custSwiperSliderCSS').length == 0){
        jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
    }

   	setTimeout(function(){
  		if (typeof Swiper !== 'undefined') {
  			var swiper = new Swiper(".custPriceReviewSection",{
	            slidesPerView: 1,
	            spaceBetween: 40,
	            pagination: {
	                el: ".swiper-pagination",
	                clickable: true,
	            },
	            autoplay: {
	                delay: 2500,
	                disableOnInteraction: false,
	            },
	            breakpoints: {
	                768: {
	                    slidesPerView: 2,
	                    spaceBetween: 40
	                }
	            }
	        });
  		}
	}, 1500);