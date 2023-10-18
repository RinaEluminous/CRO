var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		addCustStickyFormToBlog();

		function addCustStickyFormToBlog(){
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

			//update the form label 
			if(jQuery('.page--blog #content-wrapper main .node--type-blog .container .group-middle .blog__body + section .col-md-10 .card .form-group label:contains(Comment)').length > 0 ){
				jQuery('.page--blog #content-wrapper main .node--type-blog .container .group-middle .blog__body + section .col-md-10 .card .form-group label:contains(Comment)').text('How can we Help?');
			}

			//custom features to banner section for mobile only
			if(jQuery('.customFeatures').length == 0){
				jQuery('<ul class="customFeatures"><li>Conquer debt now and learn how to rebuild your credit</li><li>Roll your debt into one easy payment with 0% interest.</li><li>Stop collections actions and get your finances back on track.</li></ul>').insertAfter('#content-wrapper .group-header .below-blog-header p');
			}

			//remove the empty p tag from the blog text content
			if(jQuery('.page--blog #content-wrapper main .node--type-blog .container .group-middle .blog__body p').length > 0){
				jQuery('.page--blog #content-wrapper main .node--type-blog .container .group-middle .blog__body p').each(function() {
					if(jQuery(this).html() == '&nbsp;') {
						jQuery(this).remove();
					}
				});
			}


			//custom features for desktop only
			if(jQuery('.customStickyForm').length == 0){
				jQuery('#content-wrapper .container .row .group-right').html('<div class="customStickyForm"> <h4>Reduce Your Debt by up to 85%</h4> <p>Bromwich&amp;Smith has helped over 30,845 Canadians get out of debt and counting.</p><ul> <li>Conquer debt now and learn how to rebuild your credit</li><li>Roll your debt into one easy payment with 0% interest.</li><li>Stop collections actions and get your finances back on track.</li></ul> <div class="heroBthSection"> <div class="btnWraper"> <div class="reviews"><a href="#review-widget-slider"> <div class="googleIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/google-icon.svg"> </div><div class="reviewContent"> <div class="reviewsStarWraper"> <div class="starsWraper"> <div class="starsCount">4.9</div><div class="starsListing"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span> </div></div></div><div class="reviewsNumber">979 Google Reviews</div></div></a></div></div></div><div class="btnWraper"><a href="https://www.bromwichandsmith.com/contact-us">Check if you qualify</a></div></div>')
			}

		}

		//on page scroll - show bottom stickly banner(mobile only)
		jQuery(window).scroll(function () { 
		  	
		  	if(jQuery(window).width() <= 767){
		  		var intScrollTop 	= jQuery(window).scrollTop();

			    var intPageHeight = jQuery('main .block').height() / 5;
			    intPageHeight 	= intPageHeight - 400;

			    if (intScrollTop  > intPageHeight) {
			    	jQuery('.page--blog #content-wrapper main .node--type-blog .container .group-right .customStickyForm').show();
			    }
			  	else{
			  		if (jQuery(window).scrollTop() == 0) {
			  	 		jQuery('.page--blog #content-wrapper main .node--type-blog .container .group-right .customStickyForm').hide();
			  		}
			  	}
		  	}
		});
      
      var intHeaderHeight = jQuery('nav.navbar.navbar-default.navbar-fixed-top').outerHeight();
		if(intHeaderHeight > 0 && intHeaderHeight != '' && intHeaderHeight !== null){
			jQuery('.page--blog #content-wrapper main .node--type-blog').attr('style', 'margin-top: '+ intHeaderHeight +'px !important');
		}

		clearInterval(waitForjQuery);
	}
  }, 50); 