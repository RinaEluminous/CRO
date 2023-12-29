var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		if(jQuery('#shopify-section-product-template').length > 0){
			addCustTestimonialToPdpImage();
		}
		
		function addCustTestimonialToPdpImage(){
			var intCount = 0;
			var intPdpInterval = setInterval(function () {
				intCount += 1;
				if( jQuery('.product-images .product-image--cell:eq(0)').length > 0 && jQuery('.custSliderReview').length == 0 && jQuery('.images-container .product-image--cell .imagetxt').length == 0) {
					
					var custMsgHtml = '<div class="custSliderReview"><div class="custStartImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/rating-stars.svg"></div><p>"Completely transformed our bathroom, was super easy to install!"</p><span>- Kristy C.<small>Verified Buyer</small></span></div>';

					if(jQuery(window).width() <= 767){
						jQuery(custMsgHtml).insertAfter('.product-images.m-product.thumbnails-placement-below');
					}
					else {
						jQuery(custMsgHtml).prependTo('.product-images .product-image--cell:eq(0)');
					}
					
					clearInterval(intPdpInterval);
				}

				if(intCount === 80){
					clearInterval(intPdpInterval);
				}

			},30);

			if(jQuery('.custPdpProductsLogos').length == 0){
				//jQuery('<div class="custPdpProductsLogos"><div class="as-seen-image-container"><ul><li>AS SEEN IN</li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/3-Better_Homes.jpg?v=1632854398"  alt="Better Homes and Garden"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/4-House_Beautiful.jpg?v=1632854398"  alt="House Beautiful"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/5-This_Old_House.jpg?v=1632854398"  alt="This Old House"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/2-HGTV.jpg?v=1632854398"  alt="HGTV"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/1-Today.jpg?v=1632854398"  alt="Today"></li></ul></div></div>').insertAfter('#shopify-section-product-template .wrapper .grid-row:eq(0)');

				jQuery('<div class="custPdpProductsLogos"> <div> <img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/3-Better_Homes.jpg?v=1632854398"  alt="Better Homes and Garden"/> </div><div> <img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/4-House_Beautiful.jpg?v=1632854398"  alt="House Beautiful"/> </div><div> <img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/5-This_Old_House.jpg?v=1632854398"  alt="This Old House"/> </div><div> <img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/2-HGTV.jpg?v=1632854398"  alt="HGTV"/> </div><div> <img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/1-Today.jpg?v=1632854398"  alt="Today"/> </div></div>').insertAfter('#shopify-section-product-template .wrapper .grid-row:eq(0)');

				var intRunsTime = 0; 
		    	var intSliderInterval = setInterval(function () {
		        	intRunsTime += 1;
		        	if(jQuery('.custPdpProductsLogos').length > 0 ){
		            
		            if (jQuery('#custMinSlickSliderJS').length == 0) {
		                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js" id="custMinSlickSliderJS"></script>');
		                }
		    
		            if(jQuery('#custSlickSliderCSS').length == 0){
		                jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css" id="custSlickSliderCSS" />');
		            }

                	if (jQuery.fn.slick) {
                    	jQuery(".custPdpProductsLogos").not('.slick-initialized').slick({ 
	                        autoplay: true,
	                        autoplaySpeed: 3000,
	                        arrows: false,
	                        dots: false, 
	                        slidesToShow: 3, 
	                        infinite: true,
	                        centerMode: true,
                          	centerPadding: "10px",
                      });
                	}
           
            			//clearInterval(intSliderInterval);
        			}
        
			        if(intRunsTime === 100){
			            clearInterval(intSliderInterval);
			        }
    			},20);
			}
		}

		jQuery(document).on('click', '#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell', function(){
			if(jQuery('#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell.is-nav-selected').index() == 0){
	        	jQuery('.m-adwframe .grid-row .custSliderReview').show();
	        }else{
	        	jQuery('.m-adwframe .grid-row .custSliderReview').hide();
	        }
		});

		jQuery('#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell:eq(0)').addClass('custFirstThumb');
		
		document.addEventListener('touchstart', handleTouchStart, false);   
		document.addEventListener('touchmove', handleTouchMove, false);

		var xDown = null;
		var yDown = null;
		var firstTouch = null;

		function getTouches(evt) {
		  return evt.touches ||             // browser API
		         evt.originalEvent.touches; // jQuery
		}

		function handleTouchStart(evt) {
		    firstTouch = getTouches(evt)[0];
		    xDown = firstTouch.clientX;
		    yDown = firstTouch.clientY;
		}

		function handleTouchMove(evt) {
		    if ( ! xDown || ! yDown ) {
		        return;
		    }

		    var xUp = evt.touches[0].clientX;
		    var yUp = evt.touches[0].clientY;

		    var xDiff = xDown - xUp;
		    var yDiff = yDown - yUp;

		    var intSelectedIndex = jQuery('#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell.is-selected.is-nav-selected:eq(0)').index();
		    var intTotalCount = parseInt(jQuery('#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell').length - 1);

		    if ( Math.abs( xDiff ) > Math.abs( yDiff ) && ( firstTouch.target.parentElement.parentElement.parentElement.classList.value.indexOf('product-image--cell') >=0)) {

			   	if ( (xDiff > 0 && intSelectedIndex == intTotalCount)) {
		        	jQuery('.m-adwframe .grid-row .custSliderReview').show();
		    	}else if ( (xDiff < 0 && intSelectedIndex == 1)){
					jQuery('.m-adwframe .grid-row .custSliderReview').show();
			    }else{
			    	jQuery('.m-adwframe .grid-row .custSliderReview').hide();
			    }

		    }

		    xDown = null;
		    yDown = null;
		}
		
		clearInterval(waitForJquery);
    }
}, 50);