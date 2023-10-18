var waitForJquery = setInterval(function() { 
    
    if (typeof jQuery != 'undefined') {

    	if(jQuery(".page-home").length > 0){
    		customHomeRepairContent();
    	}
		
     	function customHomeRepairContent() {
    		if( jQuery(".homeRepairsWraper").length == 0 ) {
    			jQuery('<section class="homeRepairsWraper"> <div class="container"> <h2>Home Repairs are Expensive!</h2> <p>ARW Home Warranty covers all of these and more, for a fraction of the average repair cost. A home warranty helps cover the cost of repair or replacement of household appliances and systems that break down from normal wear and tear, saving you thousands in the long-run.</p><ul> <li> <div class="repairItemBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/refrigerator.svg"> </div><div class="content"> <div class="priceTag">$200*</div><div class="itemName">Refrigerator</div></div></div></li><li> <div class="repairItemBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/washer_dryer.svg"> </div><div class="content"> <div class="priceTag">$700*</div><div class="itemName">Washer &amp; Dryer</div></div></div></li><li> <div class="repairItemBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/oven_range.svg"> </div><div class="content"> <div class="priceTag">$550*</div><div class="itemName">Oven Range</div></div></div></li><li> <div class="repairItemBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/garage_door_opener.svg"> </div><div class="content"> <div class="priceTag">$500*</div><div class="itemName">Garage Door Opener</div></div></div></li><li> <div class="repairItemBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/water_heater.svg"> </div><div class="content"> <div class="priceTag">$650*</div><div class="itemName">Water Heater</div></div></div></li><li> <div class="repairItemBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/interior_electrical.svg"> </div><div class="content"> <div class="priceTag">$900*</div><div class="itemName">Interior Electrical</div></div></div></li><li> <div class="repairItemBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/plumbing_system.svg"> </div><div class="content"> <div class="priceTag">$400*</div><div class="itemName">Plumbing System</div></div></div></li><li> <div class="repairItemBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/central_ac.svg"> </div><div class="content"> <div class="priceTag">$1200*</div><div class="itemName">Central A/C</div></div></div></li></ul> <div class="totalCostWraper"> Total cost without ARW Home Warranty:<span>$5,100</span> </div><div class="costWarning">*costs can vary depending on provider and local area</div></div></section>').insertAfter('.page-home .partners');
	    	}
	    }

    	clearInterval(waitForJquery);  
    
    }
}, 50); 