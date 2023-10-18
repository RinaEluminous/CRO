var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		
		updateNoOfMoneyBackDays();

		function updateNoOfMoneyBackDays(){
			if(jQuery('.product-container form.product-form .gx-1 div p:contains(100 day money-back guarantee)').length > 0){
				var strElement = jQuery('.product-container form.product-form .gx-1 div p:contains(100 day money-back guarantee)');

				strElement.html(strElement.html().replace('100 day','30-day'));
			}
		}

		clearInterval(waitForjQuery);
	}
}, 50); 