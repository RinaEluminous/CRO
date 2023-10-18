var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
		
		if(jQuery('.product-description').prev('div').has('hr.hr-bold').length > 0){
			jQuery('.product-description').prev('div').has('hr.hr-bold').addClass('custParentDiv');
			
			if(jQuery('.custParentDiv').length > 0 && jQuery('.custUpgradeSleepWraperV1').length == 0){

				jQuery('<div class="custUpgradeSleepWraperV1"> <h4>Upgrade your sleep</h4> <div class="custContainer"> <div class="custCol"> <div class="header">Adjustable height</div><a href="https://trtltravel.com/products/trtl-pillow-plus" class="custContentBox"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/v1-pillow-plus-img.png"> </div><div class="custDetail"> <div class="custBadge">Save 15%</div><h5>Pillow Plus</h5> </div></a> </div><div class="custCol"> <div class="header">Keeps you cool</div><a href="https://trtltravel.com/products/trtl-pillow-cool" class="custContentBox"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/v1-pillow-cool-img.png"> </div><div class="custDetail"> <div class="custBadge">Save 15%</div><h5>Pillow Cool</h5> </div></a> </div></div></div>').insertBefore('.custParentDiv');
			}
		}

		clearInterval(waitForjQuery);
    }
}, 50); 
