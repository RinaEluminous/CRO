var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
    	
    	if(jQuery('.page-wrapper .cart').length > 0 ){
    		updateCartHTML();	
    	}
    	

    	function updateCartHTML(){

    		if(jQuery(window).width() <= 767 ){
    			if( jQuery('.custShipping').length == 0 ){
	    			jQuery('<div class="custShipping"><p><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/np_delivery.png">You’re <strong>$20.01</strong> away from free shipping </p><div class="custProgressBar"><span class="custRangeSlide"></span></div></div>').prependTo('.page-wrapper #main');
    			}
    		}
    		else{
    			if( jQuery('.custShipping').length == 0 ){
	    			jQuery('<div class="custShipping"><p><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/np_delivery.png">You’re <strong>$20.01</strong> away from free shipping </p><div class="custProgressBar"><span class="custRangeSlide"></span></div></div>').prependTo('.cart .cart__footer');
    			}
    		}
    		
    		if( jQuery('.custFreePayments').length == 0 ){
    			jQuery('<div class="custFreePayments"><p part="osm-message">4 interest- free payments of $66.25 with <span class="logo" part="osm-logo">Klarna</span>. <button part="osm-cta" class="link">Learn More</button></p></div>').insertAfter('main#main form.cart.margin-sides .cart__footer .cart__buttons');
    		}

    		if( jQuery('.custSidebarFooter').length == 0 ){
    			jQuery('<div class="custSidebarFooter"><div class="custManufacturingDefects"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/lifetime_warranty.png"><p>All of our cowboy boots are covered by a Lifetime Warranty against manufacturing defects in materials and workmanship for the lifetime of the boots.</p></div><div class="custSecuredEncrypted"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/np_secure.png">100% Secured and encrypted</div><div class="custPaymentOptions"><button><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/shop-pay.png"></button><button><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/pay-pal-icon.png"></button><button><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/google-pay.png"></button></div></div>').insertAfter('.cart .cart__additional-buttons');
    		}

			jQuery( '.cart .cart__quantity.cart__column' ).each(function( index ) {
			  if(jQuery(this).find('.custProductsCountButton').length == 0){
			  	jQuery('<div class="custProductsCountButton"><span class="custMinousIcon">-</span><span class="custPlusIcon">+</span></div>').prependTo(this);
			  	var strElement  = jQuery(this).find('.custProductsCountButton .custMinousIcon');
			  	console.log("Cust Len >>"+ strElement.length);
			  	console.log("Input Len >>"+ 	jQuery(this).find('.cart__quantity-input').length);
			  	jQuery(this).find('.cart__quantity-input').insertAfter(strElement);
			  	strElement = '';
			  }
			});

    		if( jQuery('.custPairsProducts').length == 0){
                var strElement = jQuery('main#main form.cart.margin-sides .cart__row').last();
    			jQuery('<div class="custPairsProducts"><h2>Pairs well with</h2><div class="custPairsSlider"><div><div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-lamar-732182_540x.jpg?v=1677871442"></div><h3>The Lamar</h3><p>Breakfast Stout</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">4.8 (65)</div><div class="custPrice">$325</div><a href="#" class="custBlueOutline">Add to cart</a></div><div><div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-lamar-732182_540x.jpg?v=1677871442"></div><h3>The Lamar</h3><p>Breakfast Stout</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">4.8 (65)</div><div class="custPrice">$325</div><a href="#" class="custBlueOutline">Add to cart</a></div><div><div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-lamar-732182_540x.jpg?v=1677871442"></div><h3>The Lamar</h3><p>Breakfast Stout</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">4.8 (65)</div><div class="custPrice">$325</div><a href="#" class="custBlueOutline">Add to cart</a></div><div><div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-lamar-732182_540x.jpg?v=1677871442"></div><h3>The Lamar</h3><p>Breakfast Stout</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">4.8 (65)</div><div class="custPrice">$325</div><a href="#" class="custBlueOutline">Add to cart</a></div><div><div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-lamar-732182_540x.jpg?v=1677871442"></div><h3>The Lamar</h3><p>Breakfast Stout</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">4.8 (65)</div><div class="custPrice">$325</div><a href="#" class="custBlueOutline">Add to cart</a></div></div></div>').insertAfter(strElement);
    		}

    		if(jQuery('.custWrapper').length == 0){
				jQuery('.cart .cart__header, .cart .cart__row,.cart .custPairsProducts').wrapAll('<div class="custWrapper">');
    		}
    	
    		if (jQuery('#custUpsellSlickCSS').length == 0) {
	            jQuery("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" id="custUpsellSlickCSS" />');
	        }

			if (jQuery('#custUpsellSlickJS').length == 0) {
       			jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" id="custUpsellSlickJS"></script>');
	        }

	        jQuery(".custPairsSlider").slick({
                  slidesToShow: 4, 
                  dots: false,
                  arrows: true,
                  centerPadding: '0',
                  infinite: true,
                  centerMode: true,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  responsive: [
                	{
	                    breakpoint: 1199,
	                    settings: {
	                          centerPadding: '70px',
	                          slidesToShow: 3
	                    }
                    },
                    {
	                    breakpoint: 991,
	                    settings: {
	                        centerPadding: '50px',
	                        slidesToShow: 2
	                    }
                   	},
                    {
	                    breakpoint: 768,
	                    settings: {
	                        centerPadding: '40px',
	                        slidesToShow: 2
	                    }
                  }
                  ]
              });
    	}

    	jQuery('.custProductsCountButton span.custPlusIcon, .custProductsCountButton span.custMinousIcon').on('click', function(e) {
    		//console.log("on qty update >>>> ");
	        const isNegative = jQuery(e.target).closest('.custProductsCountButton span.custMinousIcon').is('.custProductsCountButton span.custMinousIcon');
	        const input = jQuery(e.target).parents('.cart__quantity.cart__column').find('.cart__quantity-input');
	        //console.log("input >>");
	        //console.log(input);
	        if (input.is('input')) {
	            input[0][isNegative ? 'stepDown' : 'stepUp']()
	        }

	        updateProdQuantity();
	    });

	    function updateProdQuantity(){
	    	var arrQty = [];
			jQuery( '.cart .cart__quantity-input' ).each(function() {
		   		arrQty.push(jQuery(this).val());
			});

			if(arrQty.length > 0){
				console.log("arrQty >>> ");
				console.log(arrQty);
				jQuery.ajax({
		            type: "POST",
		            url:  "https://www.alvies.com/cart",
		            data:  {'updates': arrQty},
		            headers: {
		                'contentType' : 'application/json'
		            },
		            success: function(data){
		                //console.log("data >>> ");
		                //console.log(data);
		            }
        		});
			}	

	    }

    	clearInterval(waitForJquery);
    }
}, 50); 
