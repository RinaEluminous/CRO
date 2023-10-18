if (jQuery('.template-index').length > 0) {
	    addCustomHeroBannerV4();
	}

	function addCustomHeroBannerV4() {
	    if (jQuery('.custCustomCuffBannerV4').length == 0) {
	        jQuery('<div class="custCustomCuffBannerV4"> <div class="container"> <div class="row"> <div class="custImgFirstV4"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/meaningful-jewelry-img-2.jpg"> <div class="custCustmerReviewV4"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> <p> <em>"I\'ll with confidence say that Customcuff creates the most meaningful jewelry pieces I\'ve come across"</em> </p></div></div><div class="custImgSecoundV4"> <div class="custVideoBlockV4"> <div class="custCustmerReviewV4"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> <p> <em>"I\'ll with confidence say that Customcuff creates the most meaningful jewelry pieces I\'ve come across"</em> </p></div><video id="custVideo" autoplay preload="auto" loop="loop" muted="muted"> <source src="https://cdn4.fireworktv.com/medias/2023/1/25/1674680426-tyfzbvsg/watermarked/540/42EE8EF4-D3FC-4AA4-906A-A09B9DA8FB54.mp4"> Your browser does not support the video tag.</video></div></div><div class="custLastTextV4"> <h1>Custom meaningful jewelry</h1> <p>Personalize our jewelry with meaningful engravings to celebrate the people, places and moments worth remembering.</p><a href="https://www.customcuff.co/collections/best-sellers" class="custShopNowButtonV4">SHOP NOW</a> </div></div></div></div>').prependTo('#main');
	    }

	    setTimeout(function () {
	      	jQuery('body').css('opacity','1');
	      	
	      	var intCount = 0;
		      	var intInterval = setInterval(function (){
		      	intCount += 1;
		      	if(jQuery('body').css('opacity') == 0) {
		      		jQuery('body').css('opacity','1');
		      		clearInterval(intInterval);
		      	}

		      	if( intCount === 80 ) {
		      		clearInterval(intInterval);
		      	}
			},30);

	    },2000);
	}