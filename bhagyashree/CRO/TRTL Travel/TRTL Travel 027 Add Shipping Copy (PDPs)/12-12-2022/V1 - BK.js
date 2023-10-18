var waitForjQuery = setInterval(function() {
if (typeof jQuery != 'undefined') {
	
	if(jQuery(".product-container").length > 0){
		addShippingHtml();
	}
	
	//calculate shipping date after 3 days from the current date
	function getShippingDate(){
		
		var strFinalDate = "", endDate = "", noOfDaysToAdd = 3, count = 0;
		var startDate = new Date();

		while(count < noOfDaysToAdd) {
		    endDate = new Date(startDate.setDate(startDate.getDate() + 1));
		    if(endDate.getDay() != 0 && endDate.getDay() != 6){
		       count++;
		    }
		}
		
		endDate = endDate.toString().split(' ').slice(0,3).join(' ');

		if(endDate !== '' && endDate !== undefined && endDate !== null) {
			var arrDate 	 = endDate.toString().split(' ');
			strFinalDate = arrDate[0] + ', ' + arrDate[1] +' '+  arrDate[2];
		}
		return strFinalDate;
	}

	//add custom shipping html 
	function addShippingHtml() {
		if(jQuery('.custDelEstCol').length == 0 ) {
			
			var strShippingDate = getShippingDate();

			if(strShippingDate !=='' && strShippingDate !== undefined && strShippingDate !== null){
				
				if(jQuery('.product-container .add-to-cart-button').parent('div').length > 0){
					var strElement  = jQuery('.product-container .add-to-cart-button').parent('div');

					jQuery('<div class="col-12 custDelEstCol"> <div class="custDeliveryEstimation"> <div class="custPriority"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/delivery_icon.svg"> </div><div class="content"> <h6>Priority - Get it sooner</h6> <p>Paid 3-Day Shipping available</p><p>(ships as soon as <span class="custDate">'+strShippingDate+'</span>)</p></div></div><div class="custDivider"></div><div class="custMethod"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/waiting_icon.svg"> </div><div class="content"> <h6>Free Standard Shipping on all U.S. orders</h6> </div></div></div></div>').insertAfter(strElement);
				}
			}
		}

	}

	clearInterval(waitForjQuery);
  }
}, 50);