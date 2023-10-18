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

					jQuery('<div class="col-12 custDelEstCol"> <div class="custDeliveryEstimation"> <div class="custPriority"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/delivery_icon.svg"> </div><div class="content"> <h6>Priority - Get it sooner</h6> <p>Paid 3-Day Shipping available</p><p>(ships as soon as <span class="custDate">'+strShippingDate+'</span>)</p></div></div><div class="custDivider"></div><div class="custMethod"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/waiting_icon.svg"> </div><div class="content"> <h6>Free Standard Shipping on all U.S. orders</h6> </div></div></div></div><div class="col-12 custDelInfoCol"><div class="row"><div class="col-6"><div class="row gx-1"><div class="col-3 col-md-2"><div style="width:35px"><div id="image-wrapper-821093" class="image-wrapper overflow-hidden"><picture class="d-block"><img data-src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Scientifically-proven_5d4cc8f1-03ae-4462-9799-ec544f2e4d83_35x.png?v=1657273799" data-srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Scientifically-proven_5d4cc8f1-03ae-4462-9799-ec544f2e4d83_35x.png?v=1657273799 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Scientifically-proven_5d4cc8f1-03ae-4462-9799-ec544f2e4d83_35x@2x.png?v=1657273799 2x" loading="lazy" class="img-fluid lazyload loaded" alt="" src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Scientifically-proven_5d4cc8f1-03ae-4462-9799-ec544f2e4d83_35x.png?v=1657273799" srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Scientifically-proven_5d4cc8f1-03ae-4462-9799-ec544f2e4d83_35x.png?v=1657273799, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Scientifically-proven_5d4cc8f1-03ae-4462-9799-ec544f2e4d83_35x@2x.png?v=1657273799 2x"></picture></div></div></div><div class="d-flex align-items-center col-9 col-md-10"><p class="m-0 fs-7 ps-1 ps-md-2">Scientifically proven neck support</p></div></div></div><div class="col-6"><div class="row gx-1"><div class="col-3 col-md-2"><div style="width:35px"><div id="image-wrapper-867097" class="image-wrapper overflow-hidden"><picture class="d-block"><img data-src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/100-day-money-back_c10e593a-72f4-4e18-820f-1c79de977448_35x.png?v=1657273791" data-srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/100-day-money-back_c10e593a-72f4-4e18-820f-1c79de977448_35x.png?v=1657273791 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/100-day-money-back_c10e593a-72f4-4e18-820f-1c79de977448_35x@2x.png?v=1657273791 2x" loading="lazy" class="img-fluid lazyload loaded" alt="" src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/100-day-money-back_c10e593a-72f4-4e18-820f-1c79de977448_35x.png?v=1657273791" srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/100-day-money-back_c10e593a-72f4-4e18-820f-1c79de977448_35x.png?v=1657273791, //cdn.shopify.com/s/files/1/0071/0911/6022/files/100-day-money-back_c10e593a-72f4-4e18-820f-1c79de977448_35x@2x.png?v=1657273791 2x"></picture></div></div></div><div class="d-flex align-items-center col-9 col-md-10"><p class="m-0 fs-7 ps-1 ps-md-2">100 day money-back guarantee</p></div></div></div></div></div>').insertAfter(strElement);
				}
			}
		}

	}

	clearInterval(waitForjQuery);
  }
}, 50);