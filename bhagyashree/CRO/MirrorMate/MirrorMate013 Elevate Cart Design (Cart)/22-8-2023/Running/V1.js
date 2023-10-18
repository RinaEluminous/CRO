var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
    	
    	//on cart page load call function
		if(jQuery('.template-cart').length > 0){
			jQuery( "head" ).append('<script src=https://www.paypal.com/sdk/js?client-id=Adc6tBu6EKeJh6a9TCyqzGE4u05rACaNB7Va8-YOcAAE3Jcim4Su8evIQjUOUMmFoyoESrg0QdDiUBBl&components=messages data-namespace="PayPalSDK"></script>');
			reDesignedCartPage();
			getThePaymentMsg();
		}

		//add custom HTML to cart page
    	function reDesignedCartPage(){
    		if(jQuery('.custCartFormList').length == 0){
    			jQuery('<div class="custCartFormList"> <ul> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np_fit-dark.png"><span>It fits or we replace it</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np_warranty-dark.png"><span>5-year warranty</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np_guarantee-dark.png"><span>Guaranteed to last</span></li></ul> <div class="custSecured"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np_secured-dark.png">100% Secured and encrypted</div><div class="custPaymentOptions"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/payment-options.png"></div></div>').prependTo('.cart-form .page-header');
    		}

    		//replace the shipping and taxes text
    		if( jQuery('.cart-checkout p.shipping-at-checkout').length > 0 ){
    			jQuery('.cart-checkout p.shipping-at-checkout').text('Taxes calculated at checkout');
    		}

			if( jQuery('.cart .cart-items').length > 0 && jQuery('.cart .cart-notes').length > 0 ){
				jQuery('.cart .cart-notes').appendTo('.cart .cart-items');
			}
    	}

    	//Get the payment message based oncart total
    	function getThePaymentMsg(){
    		var intCount    = 0;
    		var intInterval = setInterval(function () {
    			intCount   += 1;
				if(jQuery('.cart-checkout cart-checkout--pending').length == 0){
					
					var floatCartTotal = jQuery('.cart .cart-checkout p.subtotal .money').text().replace(/[^0-9.]/gi, '');
					
					if( floatCartTotal > 0 ){
						if(jQuery('.paypal_btn').length == 0 ){
							jQuery('<div class="paypal_btn" style=""> <div id="paypal-main" data-pp-message data-pp-style-layout="text" data-pp-style-logo-type="inline" data-pp-style-text-color="black" data-pp-amount="'+floatCartTotal+'"></div></div>').insertAfter('p.shipping-at-checkout');
						}
						else{
							jQuery('.paypal_btn').html('<div id="paypal-main" data-pp-message data-pp-style-layout="text" data-pp-style-logo-type="inline" data-pp-style-text-color="black" data-pp-amount="'+floatCartTotal+'"></div></div>');
						}
					}
					else{
						jQuery('.paypal_btn').remove();
					}
					clearInterval(intInterval);
			}

			if(intCount === 100){
				clearInterval(intInterval);
			}
		},20);

    	//After sometime check cart price again if the subtotal is 0, remove custom pay message
    	setTimeout(function (){
			var floatCartTotal = jQuery('.cart .cart-checkout p.subtotal .money').text().replace(/[^0-9.]/gi, '');
			if( floatCartTotal == 0 ){
				jQuery('.paypal_btn').remove();
			}
    	},3500);
	}

    jQuery(document).on('click','.cart-form .quantity-select .button-wrapper button,.cart .cart-item-quantity a.remove', function () {
    	getThePaymentMsg();
    });

    jQuery(document).on('keyup blur','.quantity-select .input-wrapper input', function () {
    	getThePaymentMsg();
    });

    clearInterval(waitForJquery);
    }
}, 50);