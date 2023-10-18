var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {
		console.log("%c CC009", "background:red;color : white;padding:10px");

		jQuery('.Header__CartDot.is-visible').length;


		if(jQuery('.custom-checkout').length > 0 ) {
			setCouponCode();
		}

		function setCouponCode(){
			jQuery('#order-summary #checkout_reduction_code').val('TESTCOUPON');
			jQuery('#order-summary #checkout_submit').length;
			jQuery('#order-summary #checkout_submit').removeAttr('disabled');
		}

 		clearInterval(waitForJquery);  
    }
}, 50); 


