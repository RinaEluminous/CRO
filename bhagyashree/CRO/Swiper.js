if (jQuery('#custSwiperSliderJS').length == 0) {
                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
		        }
		        if(jQuery('#custSwiperSliderCSS').length == 0){
		            jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" id="custSwiperSliderCSS" />');

		        }

 				var intSwiperCnt = 0;
			    var intSwiperInterval = setInterval(function () {
			      	intSwiperCnt += 1;

		      	 	if (typeof Swiper !== 'undefined'){
		         		var swiper = new Swiper(".mySwiper", {
						slidesPerView: 1,						
						loop: true,
						spaceBetween: 20,
						pagination: {
							el: ".swiper-pagination",
							clickable: true,
						},
					    breakpoints: {
					    	1024: {
					          slidesPerView: 3,
					          spaceBetween: 20,
					        },
					        991: {
					            slidesPerView: 2,
					            spaceBetweenSlides: 20
					        },
					        320: {
					          slidesPerView: 1,
					          spaceBetween: 20,
					        },
						},
			    	});

					clearInterval(intSwiperInterval);
		      	}

		      	if(intSwiperCnt === 50){
		      		clearInterval(intSwiperInterval);
		      	}

		    },70);