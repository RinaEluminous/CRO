var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
    	
    	if(jQuery('.page-wrapper .cart').length > 0 ){
    		updateCartHTML();
    		addShippingProgressBar();	
    	}

    	function updateCartHTML(){
    		if( jQuery('.custSidebarFooter').length == 0 ){
    			jQuery('<div class="custSidebarFooter"><div class="custManufacturingDefects"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/lifetime_warranty.png"><p>All of our cowboy boots are covered by a Lifetime Warranty against manufacturing defects in materials and workmanship for the lifetime of the boots.</p></div><div class="custSecuredEncrypted"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/np_secure.png">100% Secured and encrypted</div><div class="custPaymentOptions"><button><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/shop-pay.png"></button><button><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/pay-pal-icon.png"></button><button><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/google-pay.png"></button></div></div>').insertAfter('.cart .cart__additional-buttons');
    		}

			jQuery( '.cart .cart__quantity.cart__column' ).each(function( index ) {
			  if(jQuery(this).find('.custProductsCountButton').length == 0){
			  	jQuery('<div class="custProductsCountButton"><span class="custMinousIcon">-</span><span class="custPlusIcon">+</span></div>').prependTo(this);
			  	var strElement  = jQuery(this).find('.custProductsCountButton .custMinousIcon');
			  	jQuery(this).find('.cart__quantity-input').insertAfter(strElement);
			  	strElement = '';
			  }
			});

    		if( jQuery('.custPairsProducts').length == 0){
                var strElement = jQuery('main#main form.cart.margin-sides .cart__row').last();
    			jQuery('<div class="custPairsProducts"> <h2>Pairs well with</h2> <div class="custPairsSlider"> <div> <div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/boot-flask-954351_900x.jpg"></div><h3>BOOT FLASK</h3> <p>FLASK</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">5.0 (1)</div><div class="custPrice">$95</div><a href="https://www.alvies.com/collections/gear/products/boot-flask?color=grown-thangs" class="custBlueOutline">VIEW PRODUCT</a> </div><div> <div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-riverside-448668_900x.jpg"></div><h3>THE RIVERSIDE</h3> <p>MEN\'S FLIP-FLOPS</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">4.9 (161)</div><div class="custPrice">$75</div><a href="https://www.alvies.com/collections/flops" class="custBlueOutline">VIEW PRODUCT</a> </div><div> <div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/austin-originals-snapback-hat-421236_900x.jpg"></div><h3>AUSTIN ORIGINALS</h3> <p>SNAPBACK HAT</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">5.0 (1)</div><div class="custPrice">$30</div><a href="https://www.alvies.com/collections/gear/products/austin-originals-snapback-logo-hat?color=red-winged-river-rat" class="custBlueOutline">VIEW PRODUCT</a> </div><div> <div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/original-brand-shirt-567597_900x.jpg"></div><h3>ORIGINAL SHIRT</h3> <p>T-SHIRTS</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">4.9 (28)</div><div class="custPrice">$30</div><a href="https://www.alvies.com/collections/gear/products/name-original-brand-t-shirt?color=hot-dog-amigo" class="custBlueOutline">VIEW PRODUCT</a> </div><div> <div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/nastys-t-shirt-553151_900x.jpg"></div><h3>NASTY\'S T-SHIRT</h3> <p>T-SHIRTS</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">5.0 (1)</div><div class="custPrice">$35</div><a href="https://www.alvies.com/collections/gear/products/nastys-t-shirt?color=sun-baked-cement" class="custBlueOutline">VIEW PRODUCT</a> </div><div> <div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/bfg-hotroddin-boot-t-shirt-872492_900x.jpg"></div><h3>BFG HOTRODDIN\' BOOT T-SHIRT</h3> <p>T-SHIRTS</p><div class="custRatingStar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/rating-stars.svg">5.0 (6)</div><div class="custPrice">$35</div><a href="https://www.alvies.com/collections/gear/products/bfg-hotroddin-boot-t-shirt?color=lil-red" class="custBlueOutline">VIEW PRODUCT</a> </div></div></div>').insertAfter(strElement);
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

	        var intSliderCnt = 0;
			var intSliderInterval = setInterval(function (){
				intSliderCnt += 1;
				if (jQuery.fn.slick){

					jQuery(".custPairsSlider").slick({
		                slidesToShow: 4,
		                infinite: true, 
		                dots: false,
		                arrows: true,
						centerPadding: '0',
						centerMode: true,
						slidesToScroll: 1,
						initialSlide : 2,
						responsive: [
	                	{
		                    breakpoint: 1400,
		                    settings: {
		                          slidesToShow: 3
		                    }
	                    },
	                    {
		                    breakpoint: 991,
		                    settings: {
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
					clearInterval(intSliderInterval);
				}

				if(intSliderCnt === 100){
					clearInterval(intSliderInterval);
				}
            },70);
    	}

    	jQuery(document).on('click','.custProductsCountButton span.custPlusIcon, .custProductsCountButton span.custMinousIcon', function(e) {
	        const isNegative = jQuery(e.target).closest('.custProductsCountButton span.custMinousIcon').is('.custProductsCountButton span.custMinousIcon');
	        const input = jQuery(e.target).parents('.cart__quantity.cart__column').find('.cart__quantity-input');
	        if (input.is('input')) {
	            input[0][isNegative ? 'stepDown' : 'stepUp']()
	        }
	        var inputValue = jQuery(e.target).parents('.cart__quantity.cart__column').find('.cart__quantity-input').val();
	        
	        if(inputValue == 0){
	        	jQuery(e.target).parents('.cart__quantity.cart__column').find('.cart__remove a')[0].click();
	        }else{
	        	updateProdQuantity();
	        }
	    });

	    jQuery('.custProductsCountButton input').on('change', function(e) {
		    updateProdQuantity();
		});

	    function updateProdQuantity(){
	    	var arrQty = [];
			jQuery('.cart .cart__quantity-input').each(function() {
		   		arrQty.push(jQuery(this).val());
			});

			if(arrQty.length > 0){
				jQuery.ajax({
		            type: "POST",
		            url:  "https://www.alvies.com/cart",
		            data:  {'updates': arrQty},
		            headers: {
		                'contentType' : 'application/json'
		            },
		            success: function(data){
		            	jQuery.get('https://www.alvies.com/cart', function(html) {
		        			if( jQuery(html).find(".cart .cart-subtotal span.cart-subtotal__price").length > 0 ){
		        				var strSubtotal = jQuery(html).find('.cart .cart-subtotal span.cart-subtotal__price').text();
								jQuery(".cart .cart-subtotal span.cart-subtotal__price").text(strSubtotal);
		        			}

		        			if( jQuery(html).find(".cart").length > 0){
		        				jQuery(html).find(".cart .cart__row .cart__line-price .cart__price-final").each(function(index) {
		        					jQuery(".cart .custWrapper .cart__row .cart__line-price .cart__price-final:eq("+index+")").text(jQuery(this).text().trim());
		        				});
	        				}

	        				if( jQuery('.custShipping').length > 0 ){
 								jQuery('.custShipping').remove();
 								addShippingProgressBar();
 							}
	        			});
		            }
        		});
			}
	    }

	    function addShippingProgressBar(){
	    	var strPrependElement = '', strHTML  = '' ,intWidth = 0;
	    	
	    	if(jQuery(window).width() <= 767 ){
				strPrependElement = '.page-wrapper #main';
    		}
    		else{
				strPrependElement = '.cart .cart__footer';
    		}

			if( jQuery('.custShipping').length == 0 ){
				var subTotal = jQuery('.cart span.cart-subtotal__price').text().replace(/[^0-9.]/g,'');
				if(subTotal > 90.01){
					strHTML  = 'Congrats! You are eligible for Free Shipping.';
					intWidth = 100;
				}
				else{
					var intRemainingAmt = 90.01-subTotal;
					intRemainingAmt     =  parseFloat(intRemainingAmt).toFixed(2);
					strHTML  = 'You’re <strong>$'+intRemainingAmt+'</strong> away from free shipping';
					intWidth = subTotal;
				}

    			jQuery('<div class="custShipping"><p><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/np_delivery.png">'+strHTML+' </p><div class="custProgressBar"><span class="custRangeSlide"></span></div></div>').prependTo(strPrependElement);

    			jQuery('.custProgressBar span.custRangeSlide').css('width',intWidth+'%');
	    	}
		}

    	clearInterval(waitForJquery);
    }
}, 50); 
