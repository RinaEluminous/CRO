var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

        if(jQuery('.product .bm_020_right_size_products .bm_020_rightSizeHeading').length > 0){
            jQuery('.product .bm_020_right_size_products .bm_020_rightSizeHeading').text('Recommended treatment period is 30 days');
        }

        if(jQuery('.product .bm_020_AllProducts .bm_020_prodLink .bm_020_quantityPrc').length > 0){
            jQuery('.product .bm_020_AllProducts .bm_020_prodLink .bm_020_quantityPrc').addClass('custQuantityColor');
        }

        if(jQuery('.product .bm_020_AllProducts .bm_020_quantity').length > 0){
            jQuery('.product .bm_020_AllProducts .bm_020_quantity').addClass('custMeasureOz');
        }

        if(jQuery('.product .bm_020_firstProduct .bm_020_quantity').length > 0 && jQuery('.product .bm_020_firstProduct .custSupplyDay').length == 0){
            jQuery('<h2 class="custSupplyDay"><span>Approx.</span>10-15 day supply</h2>').insertBefore('.product .bm_020_firstProduct .bm_020_quantity');
        }

        if(jQuery('.product .bm_020_secondProduct .bm_020_quantity').length > 0 && jQuery('.product .bm_020_secondProduct .custSupplyDay').length == 0){
            jQuery('<h2 class="custSupplyDay"><span>Approx.</span>40-60 day supply</h2>').insertBefore('.product .bm_020_secondProduct .bm_020_quantity');
        }

        if(jQuery('.product .bm_020_thirdProduct .bm_020_quantity').length > 0 && jQuery('.product .bm_020_thirdProduct .custSupplyDay').length == 0){
            jQuery('<h2 class="custSupplyDay"><span>Approx.</span>1 year supply</h2>').insertBefore('.product .bm_020_thirdProduct .bm_020_quantity');
        }

        clearInterval(waitForJquery);  
    }
}, 50);  
