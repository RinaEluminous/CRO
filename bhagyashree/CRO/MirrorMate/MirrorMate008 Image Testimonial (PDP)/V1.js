var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		if(jQuery('#shopify-section-product-template').length > 0){
			addCustTestimonialToPdpImage();
		}
		
		function addCustTestimonialToPdpImage(){
			var intCount = 0;
			var intPdpInterval = setInterval(function () {
				intCount += 1;
				console.log("Len >> " +  jQuery('.product-images .product-image--cell:eq(0)').length)
				if( jQuery('.product-images .product-image--cell:eq(0)').length > 0 && jQuery('.custSliderReview').length == 0 && jQuery('.product-image--cell .imagetxt').length == 0) {
					jQuery('<div class="custSliderReview"><div class="custStartImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/rating-stars.svg"></div><p>“Completely transformed our bathroom, was super easy to install!”</p><span>- Kristy C.<small>Verified Buyer</small></span></div>').prependTo('.product-images .product-image--cell:eq(0)');
					
					clearInterval(intPdpInterval);
				}

				if(intCount === 80){
					clearInterval(intPdpInterval);
				}

			},30);

			if(jQuery('.custProductsLogos').length == 0){
				jQuery('<div class="custProductsLogos"><div class="as-seen-image-container"><ul><li>AS SEEN IN</li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/3-Better_Homes.jpg?v=1632854398" width="245" height="60" alt="Better Homes and Garden"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/4-House_Beautiful.jpg?v=1632854398" width="245" height="60" alt="House Beautiful"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/5-This_Old_House.jpg?v=1632854398" width="245" height="60" alt="This Old House"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/2-HGTV.jpg?v=1632854398" width="245" height="60" alt="HGTV"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/1-Today.jpg?v=1632854398" width="245" height="60" alt="Today"></li></ul></div></div>').insertAfter('#shopify-section-product-template .wrapper .grid-row:eq(0)');
			}
		}

		clearInterval(waitForJquery);
    }
}, 50);   