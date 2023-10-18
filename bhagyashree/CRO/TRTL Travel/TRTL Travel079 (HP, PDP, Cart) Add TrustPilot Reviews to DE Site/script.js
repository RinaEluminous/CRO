var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
		//add custom review slider on the minibag and cart page
		addCustReviewsSlider();
		getDyanamicReviews();

		function getDyanamicReviews(){
			jQuery.ajax({
				type: "get",
				url:  "https://www.trustpilot.com/_next/data/businessunitprofile-consumersite-8099/review/trtltravel.com.json",
				data:  {
					'businessUnit': 'trtltravel.com',
					'stars': '5'
				},
				success: function(data){
					console.log("Data:", data);
					
				}
			});
		}

		function addCustReviewsSlider(){
			var slidesPerViewCount ="";
			var custSliderHTML = '<div class="custTrtlReviewsCarousel"> <div class="container"> <div class="custTrtlTitle">Over 1 million travel pillows sold and 10,000+ 5-star reviews</div></div><div class="custTrtlSliderBlocksMain"> <div class="swiper custTrtlReviewSlider"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>I actually slept!</span> Comfortable and very useful. Hated those around the neck pillows and the head bobbing and this erased that. Got some actual sleep on a flight for the first time </p><div class="author"> <cite>Irma V. <span></span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Love this product!</span>This product made sitting upright in a coach airline seat comfortable! Would definitely recommend to anyone who has a plane right and must sit in coach. </p><div class="author"> <cite>JS Newman <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/amazon-logo.svg" alt="amazon"> </span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Game changer/ Best travel pillow</span>It is so comfortable and I actually fell asleep in the middle seat of the plane! I also used it on a long car ride and it was awesome to help me feel comfortable with my neck supported. Game changer !! </p><div class="author"> <cite>Linda T. <span></span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Slept on international flights</span>I usually can\'t sleep for long on international flights, but with this product, ear plugs and an eye mask, I slept for the majority of my flights to and from India (I live in the Midwest). </p><div class="author"> <cite>Madeline <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/amazon-logo.svg" alt="amazon"> </span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Comfortable pillow</span> Quality pillow as described, makes for a comfortable sleep and compact taking up a small amount of space when packed away. </p><div class="author"> <cite>Jacqui C. <span></span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Perfect for travel</span>Get rid of your old neck "horseshoe" pillow. This is the way to go. Not as bulky and takes up less room easy to get comfortable as has more give. Plus I love how it hides your face a bit if you want, hides the drool. </p><div class="author"> <cite>J Hilton <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/amazon-logo.svg" alt="amazon"> </span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Great option for traveling</span>I love that this pillow is not a big bulky item. This is very comfortable and easily packed. </p><div class="author"> <cite>Karolyn S. <span></span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Works much better than those U-shaped pillows</span>I used to work nights, and I still travel for fun, so I need to sleep in awkward places on the regular. If you can\'t have a full-sized pillow, this is the best alternative. </p><div class="author"> <cite>Amanda <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/amazon-logo.svg" alt="amazon"> </span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Great Travel Pillow</span>At my advanced age, it is easy to carry and use. It\'s much better than the blow up neck pillow I use to have for my flights. It really helps with a degenerative neck issue. </p><div class="author"> <cite>Thomas F. M. <span></span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Most comfortable neck rest</span>I had my doubts about this - as it\'s not a typical neck pillow. But thought because of its size it would be easy to travel with. Turns out it is the best neck rest I\'ve ever used. </p><div class="author"> <cite>C <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/amazon-logo.svg" alt="amazon"> </span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Pleased with more restful flights</span>When I travel with the Trtl Travel Pillow on long flights I am relieved from the neck pain that I used to have on flights. My head does not jerk forward as it used to do, and I find I am more rested at the end of the flight. </p><div class="author"> <cite>Margaret L <span></span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p><span>Game changer</span>This is so supportive, comfortable and compact. What more can you ask for? Just buy it, you won\'t regret it! </p><div class="author"> <cite>Leslie C <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/amazon-logo.svg" alt="amazon"> </span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p><span>Best travel pillow</span>Trtl travel pillow is by far the best travel pillow I\'ve ever used! The built in support holds my head up in all travel situations so I can get the rest I need without the sore neck. And the wrap around "scarf" provides warmth and coziness for an extra bonus. </p><div class="author"> <cite>Christine K. <span></span> </cite> </div></div><div class="swiper-slide"> <div class="starsTrtlRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/rating-full-green.svg" alt="trtltravel ratings"> </span> </div><p> <span>Love it</span>It\'s my 2nd purchase and this time is for a friend. I still think this is the smartest design for a travel pillow and there is no other products that can beat it yet. </p><div class="author"> <cite>Tsz Kwan W. <span></span> </cite> </div></div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>';

			//add the custom HTML to the minibag
			    if( jQuery('#cart-offcanvas-content .justify-content-around').length > 0 && jQuery('div#cart-offcanvas .custTrtlReviewsCarousel').length == 0 ){
					jQuery(custSliderHTML).insertBefore('#cart-offcanvas-content .justify-content-around');
					slidesPerViewCount = '1';
				}

				//add the custom HTML to the Home page
				if( jQuery('.template-index ').length > 0 && jQuery('body.template-index #MainContent div[id*="__partners"]').length > 0 && jQuery('div[id*="__partners"] .custTrtlReviewsCarousel').length == 0){
					console.log('***********************test**********************');
					jQuery(custSliderHTML).insertAfter('body.template-index #MainContent div[id*="__partners"]');
					slidesPerViewCount = '4';
				}

				//add the custom HTML to the Product  Detail page
				if( jQuery('#MainContent').length > 0 && jQuery('body.template-product #MainContent > div[id*="__trustbar-columns-a"]').length > 0 && jQuery('div[id*="__trustbar-columns-a"] .custTrtlReviewsCarousel').length == 0){
					console.log('test');
					jQuery(custSliderHTML).insertAfter('body.template-product #MainContent > div[id*="__trustbar-columns-a"]');
					slidesPerViewCount = '4';
				}
				console.log('slidesPerViewCount >>>>>>>>>>',slidesPerViewCount)
				//initialise the custom slider	
		        var intRunCount = 0 ;
				var intRunInterval = setInterval(function (){
				intRunCount += 1;
				if(typeof Swiper !== 'undefined' && jQuery('.custTrtlReviewSlider').length > 0) {
				 	var swiper = new Swiper(".custTrtlReviewSlider", {
			            slidesPerView: slidesPerViewCount,
			            spaceBetween: 20,
			            navigation: {
					        nextEl: '.swiper-button-next',
					        prevEl: '.swiper-button-prev',
						},
			            pagination: {
			                el: ".swiper-pagination",
			                clickable: true,
			            },
			            autoplay: {
			                delay: 250000,
			                disableOnInteraction: false,
			            },
			            // breakpoints: {
			            //     1024: {
			            //         slidesPerView: 4,
			            //         spaceBetween: 20,
			            //         autoplay:true,
			            //         loop: true,
			        	// 	},
			            //     991: {
			            //         slidesPerView: 3,
			            //         spaceBetween: 20,
			            //         autoplay:true,
			            //         loop: true,
			        	// 	},
			            //     767: {
			            //         slidesPerView: 2,
			            //         spaceBetween: 20,
			            //         autoplay:true,
			            //         loop: true,
			        	// 	},                            
			            //     480: {
			            //         slidesPerView: 1,
			            //         spaceBetween: 20,
			            //         autoplay:true,
			            //         loop: true,
			        	// 	}
			            // }
			        });

			        clearInterval(intRunInterval);
				}

				if(intRunCount === 150){
					clearInterval(intRunInterval);
				}

			},30);
		}

		//on minibag update call the function again
		jQuery(document).on('click','.shopify-section.section-header div a[href="#cart-offcanvas"],.product-form .add-to-cart-button,#cart-offcanvas-content button[data-mp-cart-item-remove],#cart-offcanvas-content button#button-decrement,#cart-offcanvas-content button#button-increment',function() {
				var intCount    = 0;
				var intInterval = setInterval(function (){
					intCount   += 1;
					if( jQuery('div#cart-offcanvas').hasClass('show') ){
		                addCustReviewsSlider();
					}

					if( intCount === 80 ){
						clearInterval(intInterval);
					}
				},30);
		});

		clearInterval(waitForjQuery);
    }
}, 50);


