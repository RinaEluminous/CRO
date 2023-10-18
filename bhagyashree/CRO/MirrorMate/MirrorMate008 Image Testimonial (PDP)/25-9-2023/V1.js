var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		console.log("MirrorMate008 >>> ")
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
	                        //slidesToShow: 1,
	                        autoplay: true,
	                        autoplaySpeed: 3000,
	                        arrows: false,
	                        dots: false, 
	                        slidesToShow: 4,
	                        //padding: "40px",
	                        infinite: true,
	                        responsive: [
	                        {
	                            breakpoint: 768,
	                            settings: {
	                              arrows: false,
	                              centerMode: true,
	                              centerPadding: "20px",
	                              slidesToShow: 3,
	                            },
	                        },
	                        {
	                            breakpoint: 480,
	                            settings: {
	                              arrows: false,
	                              centerMode: true,
	                              centerPadding: "20px",
	                              slidesToShow: 3,
	                              padding: "0",
	                        },
                          },
                        ],
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

		/*var $carousel = jQuery('.product-thumb--slider');
		$carousel.on( 'change.flickity', function( event, index ) {
		  console.log( 'Slide changed to ' + index )
		});

		$carousel.on( 'change', function( index ) {
			console.log( 'New Slide changed to ' + index )
		});

		$carousel.on( 'select.flickity', function( event, index ) {
		  console.log( 'Flickity select ' + index )
		});*/

		clearInterval(waitForJquery);
    }
}, 50);