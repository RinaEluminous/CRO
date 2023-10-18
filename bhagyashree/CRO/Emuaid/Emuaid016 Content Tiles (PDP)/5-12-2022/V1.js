var waitForjQuery = setInterval(function() {
if (typeof jQuery != 'undefined') {
  	console.log("%c Emuaid016: Content Tiles (PDP) | V1", "background:red;color: white;padding:10px");	
  	updatePdpHtml();

  	function updatePdpHtml(){
		if(jQuery(".custProductBenefits").length == 0){

			jQuery('<section class="custProductBenefits"> <div class="section"> <div class="container"> <h2>Say Bye to Pain and Embarrassment</h2> <div class="row"> <div class="col-sm-6"> <div class="contentCol"> <div class="productDescription"> <h6>How To Use</h6> <p>Simply follow these simple steps for fast relief:</p><ul class="numListings"> <li>Thoroughly clean the affected area</li><li>Apply a thin layer of EMUAIDMAX <sup>&reg;</sup> </li><li>Reapply 3-4 times daily or as needed for additional symptomatic relief</li></ul> <div class="warning">Warning: For external use only. Keep out of reach of children. Avoid contact with the eyes. If your skin condition persists after 7 days, or returns, consult a physician immediately.</div></div><div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/v1-how-to-use.png" alt="How To Use"> </div></div></div><div class="col-sm-6"> <div class="contentCol"> <div class="productDescription"> <h6>Why EMUAIDMAX <sup>&reg;</sup> Works </h6> <p>Most products are not powerful enough to penetrate deep into the skin. EMUAIDMAX <sup>&reg;</sup> is specially designed with a " <b>unique transdermal technology</b>" called EMUTANEOUS <sup>&reg;</sup>. </p><p>Our ingredients are able to penetrate through the skin\'s outermost layer and <b>deliver powerful healing benefits</b> to your skin in the areas that need it most. </p></div><div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/v1-why-emuaidmaz-works.png" alt="Why EMUAIDMAX Works"> </div></div></div><div class="col-sm-6"> <div class="contentCol"> <div class="productDescription"> <h6>High Quality Ingredients</h6> <p>EMUAIDMAX <sup>&reg;</sup> is made with the highest quality natural and medical grade ingredients available without a prescription. This advanced healing blend contributes to a broad spectrum of healing properties in our unique formula. </p><p>EMUAIDMAX <sup>&reg;</sup> does not contain chemicals, artificial preservatives, lanolin, alcohol, parabens, petrochemicals, or fragrance. </p><span class="showIngradientBtn"> Show Ingredients <i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="currentColor" d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path> </svg> </i> </span> </div><div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/v1-quality-ingredients.png" alt="High Quality Ingredients"> </div><div class="custIngredientInfo"> <span class="close"></span> <h6>Active Ingredients</h6> <p>10x, 20x, 30x HPUS Argentum Metallicum (Colloidal Silver)</p><h6>Other Ingredients:</h6> <p>Allantoin, Bacillus Ferment, Ceramide 3, Emu Oil, Euphorbia Cerifera (Candelilla) Wax, Glyceryl Behenate, Hydrogenated Castor Oil, Lysine HCI, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Olea Europaea Fruit Oil, Phytosphingosine, Silver Citrate, Squalane, Tocopheryl Acetate, Tribehenin, Vegetable Oil.</p></div></div></div><div class="col-sm-6"> <div class="contentCol"> <div class="productDescription"> <h6>Effective on 100+ Skin Conditions</h6> <p>Many chronic skin conditions share common symptoms such as pain, infection, itching, swelling, dryness and redness. These symptoms <b>carry a high risk of infection</b> if not healed properly. </p><p>The powerful <b>anti-bacterial, anti-fungal</b> and <b>pain-relieving</b> properties of EMUAIDMAX <sup>&reg;</sup> make it the perfect choice for relieving a wide range of symptoms common to many difficult skin conditions. </p></div><div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/v1-effective-skin-conditions.png" alt="High Quality Ingredients"> </div></div></div><div class="col-sm-12"> <div class="guaranteeBox"> <div class="col-sm-4"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/money-back-guarantee.png" alt="30 Day Money-Back Guarantee"> </div><div class="col-sm-8"> <h6>30 Day Money-Back Guarantee</h6> <p>If you\'re not satisfied with your initial purchase, just let us know within 30 days of receiving EMUAIDMAX® and we\'ll give you a full refund. No questions asked.</p><p>No Hassles. No questions asked.</p></div></div></div></div></div></div></section>').insertAfter('.product-enhancedwithselector .section-product-benefit');

				if(jQuery(".custSticklyBanner").length == 0){
					var timesRun = 0;

					var intInterval  = setInterval(function () {
						timesRun += 1;
						console.log("LEN >> " + jQuery('#shopify-section-header').length );
						if(jQuery('#shopify-section-header').length > 0){

							if(jQuery(".product .jdgm-preview-badge.jdgm-widget.jdgm-widget").length >0){
							  var strReview = jQuery(".product .jdgm-preview-badge.jdgm-widget.jdgm-widget").clone();
							}

							if(jQuery(".product .jdgm-preview-badge.jdgm-widget.jdgm-widget").length >0){
							  var prodName = jQuery(".product h1.product_name").text();

							}

							console.log("prodName >> "+ prodName);
							jQuery('<div class="custSticklyBanner"> <h6 class="custProdName">'+prodName+'</h6> <div class="custReview"></div><div class="customPurchaseBlock purchase-details"> <div class="product-quantity-box purchase-details__quantity"> <span class="custQtyChange js-change-quantity ss-icon product-minus" data-func="minus"> <span class="icon-minus"></span> </span> <input class="quantity custQty" id="quantity" min="1" name="quantity" size="2" type="number" value="1"> <span class="custQtyChange js-change-quantity ss-icon product-plus" data-func="plus"> <span class="icon-plus"></span> </span> </div><div class="custAddToCartBtn"> <button class="action_button add_to_cart uppercase" data-label="Add to Cart" name="add" type="submit"> <span class="text">Add to Cart</span> </button> </div></div></div>').insertAfter('#shopify-section-header');

								jQuery('.custReview').html(strReview);
								clearInterval(intInterval);
							}

							if(timesRun === 60){
						        clearInterval(intInterval);
						    }

					},70);
					

					setTimeout( function() {
						console.log('Update review title');
						var strReviewCount = jQuery('.custReview .jdgm-prev-badge__text').text().replace(/\(|\)/g, "");
						console.log("Get count " + strReviewCount);
						strReviewCount = strReviewCount + ' Reviews';
						console.log("strReviewCount " + strReviewCount);
						jQuery('.custReview .jdgm-prev-badge__text').text(strReviewCount);	
					},5000);
				}

				
			}
  	}


  	function elementInView(elem){
	  var elementTop = jQuery(elem).offset().top;
	  var elementBottom = elementTop + jQuery(elem).outerHeight();
	  var viewportTop = jQuery(window).scrollTop();          
	  var viewportBottom = viewportTop + jQuery(window).height();
	  return elementBottom > viewportTop && elementTop < viewportBottom;
	};


	jQuery(window).scroll(function() {
		if(jQuery('.product .purchase-details').length > 0){
			if (!elementInView(jQuery('.product .purchase-details'))){
	            console.log('OUT OF VIEWPORT - ADD TO CART CTA');
	            jQuery(".custSticklyBanner").css('display','flex');
	    	} 
	    	else{
    		 	console.log('IN VIEWPORT - ADD TO CART CTA');
	            jQuery(".custSticklyBanner").hide();
	    	}
		}
	});


	jQuery(document).on('click','.custAddToCartBtn', function(){
		var intQty = jQuery('.custQty').val();
		console.log(" intQty >> " +intQty);
		jQuery('.shopify-product-form .product-quantity-box.purchase-details__quantity input.quantity').val(intQty);
		jQuery('.shopify-product-form .add_to_cart.action_button')[0].click();
	});

	jQuery(document).on('click','.custReview .jdgm-widget.jdgm-widget', function(){
		jQuery('.product .jdgm-widget.jdgm-widget')[0].click();
	});

	jQuery(document).on('click','.custProductBenefits .row .col-sm-6 .contentCol span.showIngradientBtn', function(){
		jQuery('.custIngredientInfo').show();
	});

	jQuery(document).on('click','.custProductBenefits .custIngredientInfo span.close', function(){
		jQuery('.custIngredientInfo').hide();
	});

 	clearInterval(waitForjQuery);
  }
}, 50);