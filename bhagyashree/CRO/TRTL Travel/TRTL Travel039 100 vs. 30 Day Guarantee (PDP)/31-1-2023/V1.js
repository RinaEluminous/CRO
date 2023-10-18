var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		
		updateNoOfMoneyBackDays();

		function updateNoOfMoneyBackDays(){
			//replace in the PDP section
			if(jQuery('.product-container form.product-form .gx-1 div p:contains(100 day money-back guarantee)').length > 0){
				var strElement = jQuery('.product-container form.product-form .gx-1 div p:contains(100 day money-back guarantee)');

				strElement.html(strElement.html().replace('100 day','30-day'));
			}

			//replace in footer 
			if(jQuery('.product-container form.product-form .gx-1 div p:contains(100 day money-back guarantee)').length > 0){
				var strFooterElement = jQuery('.shopify-section .row .d-flex  h3:contains(ALWAYS 100 DAY MONEY-BACK GUARANTEE)');

				strFooterElement.html(strFooterElement.html().replace('100 DAY','30-DAY')); 
			}

			//replace footer money-back days icon 
			if(jQuery('.shopify-section .image-wrapper picture img.img-fluid[src*=100-days]').length > 0 ){
				jQuery('.shopify-section .image-wrapper picture img.img-fluid[src*=100-days]').addClass('customIconImg')
				jQuery('.customIconImg').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days.png');
				jQuery('.customIconImg').attr('data-src','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days.png');
				jQuery('.customIconImg').attr('srcset','https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/30-days.png');
			}
		}

		clearInterval(waitForjQuery);
	}
}, 50); 