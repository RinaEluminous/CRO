var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
		
		if(jQuery('.product-description').prev('div').has('hr.hr-bold').length > 0){
			jQuery('.product-description').prev('div').has('hr.hr-bold').addClass('custParentDivV2');
			
			if(jQuery('.custParentDivV2').length > 0 && jQuery('.custUpgradeSleepWraperV2').length == 0){

				jQuery('<div class="custUpgradeSleepWraperV2"> <h4>Upgrade your sleep</h4> <div class="custContainer"> <div class="custCol"> <div class="header">Max comfort and relaxation</div><a href="https://trtltravel.com/products/frequent-flyer-bundle" class="custContentBox"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/v2-deep-sleep-img.png"> </div><div class="custDetail"> <div class="custBadge">Save 41%</div><h5>FREQUENT FLYER BUNDLE</h5> </div></a> </div><div class="custCol"> <div class="header">Help your kids sleep easier</div><a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="custContentBox"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/v2-deep-sleep-img.png"> </div><div class="custDetail"> <div class="custBadge">Save 10%</div><h5>PACKED-TO-PERFECTION BUNDLE</h5> </div></a> </div></div></div>').insertBefore('.custParentDivV2');
			}
		}
		
		clearInterval(waitForjQuery);
    }
}, 50); 
