console.log("CC022: Landing Page Product Tests");
var waitForJquery = setInterval(function() { 
    
	var element =  document.getElementById('customJS');
	if (typeof(element) === 'undefined' || element === null){
	  	var script  = document.createElement('script');
		script.type = 'text/javascript';
		script.id   = 'customJS';
		script.src  = 'https://code.jquery.com/jquery-3.4.1.min.js';
		document.getElementsByTagName('head')[0].appendChild(script);
	}
    
    if (typeof jQuery != 'undefined') {
		console.log("check JS>>");

		var intCounter  = 0;
		var intInterval = setInterval(function() {
		    intCounter += 1;    
		    //console.log("Len >>> " + jQuery('div#lp-pom-block-111').length );
		    if(jQuery('#lp-pom-root .lp-element.lp-pom-block.lp-shop').length > 0){
				addCustProdSlider();
		    }

		    if (intCounter === 80) {
		        clearInterval(intInterval);
		    }

		}, 30);
		

	function addCustProdSlider(){
		if(jQuery('.custStarMapNecklaceSlider').length == 0 ){
			jQuery('<div class="custMainSliderContainer"><div class="customSwiper custStarMapNecklaceSlider"> <div class="swiper-wrapper"> <div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-1.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-2.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-3.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-4.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-5.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-6.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-7.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-8.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-9.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-10.jpg"/> </div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div><div thumbsSlider="" class="swiper custThumbnailStarMapSlider"> <div class="swiper-wrapper"> <div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-1.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-2.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-3.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-4.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-5.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-6.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-7.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-8.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-9.jpg"/> </div><div class="swiper-slide"> <img src="https://swiperjs.com/demos/images/nature-10.jpg"/> </div></div></div></div>').insertAfter('#lp-pom-root .lp-element.lp-pom-block.lp-shop');
			}
		}

		if (jQuery('#custSwiperSliderJS').length == 0) {
        	//jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
        	jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" id="custSwiperSliderJS"></script>')
        }

        if(jQuery('#custSwiperSliderCSS').length == 0){
            //jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
            jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
        }

		var intSwiperCnt = 0;
	    var intSwiperInterval = setInterval(function () {
	      	intSwiperCnt += 1;

      	 	if (typeof Swiper !== 'undefined'){
         		var swiper = new Swiper(".custThumbnailStarMapSlider", {
			      loop: true,
			      spaceBetween: 10,
			      slidesPerView: 4,
			      freeMode: true,
			      watchSlidesProgress: true,
			    });
			    var swiper2 = new Swiper(".custStarMapNecklaceSlider", {
			      loop: true,
			      spaceBetween: 10,
			      navigation: {
			        nextEl: ".swiper-button-next",
			        prevEl: ".swiper-button-prev",
			      },
			      thumbs: {
			        swiper: swiper,
			      },
			    });

			clearInterval(intSwiperInterval);
      	}

      	if(intSwiperCnt === 50){
      		clearInterval(intSwiperInterval);
      	}

    },70);

	 clearInterval(waitForJquery);
    }
}, 50);