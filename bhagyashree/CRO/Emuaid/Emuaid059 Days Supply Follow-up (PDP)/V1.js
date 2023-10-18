var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

    	if(jQuery('.product .bm_020_AllProducts .bm_020_prodLink .bm_020_quantityPrc').length > 0){
    		jQuery('.product .bm_020_AllProducts .bm_020_prodLink .bm_020_quantityPrc').addClass('customUnitsColor');
    	}

    	if(jQuery('.product .bm_020_AllProducts .bm_020_quantity').length > 0){
    		jQuery('.product .bm_020_AllProducts .bm_020_quantity').addClass('customMeasureUnits');
    	}

    	if(jQuery('.product .bm_020_firstProduct .bm_020_quantity').length > 0 && jQuery('.product .bm_020_firstProduct .customSupplyDays').length == 0){
    		jQuery('<h2 class="customSupplyDays">14-Day Supply<span>Approx.</span></h2>').insertBefore('.product .bm_020_firstProduct .bm_020_quantity');
    	}

    	if(jQuery('.product .bm_020_secondProduct .bm_020_quantity').length > 0 && jQuery('.product .bm_020_secondProduct .customSupplyDays').length == 0){
    		jQuery('<h2 class="customSupplyDays">2-Month Supply<span>Approx.</span></h2>').insertBefore('.product .bm_020_secondProduct .bm_020_quantity');
    	}

        if(jQuery('.product .bm_020_secondProduct p.bm_020_savePercentage').length > 0 && jQuery('.product .bm_020_secondProduct p.bm_020_quantityPrc').length > 0 ){
            jQuery('.product .bm_020_secondProduct p.bm_020_savePercentage').insertAfter('.product .bm_020_secondProduct p.bm_020_quantityPrc');
        }


    	if(jQuery('.product .bm_020_thirdProduct .bm_020_quantity').length > 0 && jQuery('.product .bm_020_thirdProduct .customSupplyDays').length == 0){
    		jQuery('<h2 class="customSupplyDays">1-Year Supply<span>Approx.</span></h2>').insertBefore('.product .bm_020_thirdProduct .bm_020_quantity');
    	}

        if(jQuery('.product .bm_020_thirdProduct p.bm_020_savePercentage').length > 0 && jQuery('.product .bm_020_thirdProduct p.bm_020_quantityPrc').length > 0 ){
            jQuery('.product .bm_020_thirdProduct p.bm_020_savePercentage').insertAfter('.product .bm_020_thirdProduct p.bm_020_quantityPrc');
        }

		clearInterval(waitForJquery);  
    }
}, 50);  
