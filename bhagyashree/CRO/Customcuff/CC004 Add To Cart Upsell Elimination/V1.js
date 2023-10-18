var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {
       
        addCustomToUpsellProduct();

        function addCustomToUpsellProduct() {
       		if(jQuery('.cart-drawer-upsell-section .drawer-upsell-item:contains(Mystery Bracelet)').length > 0 ){
	       		jQuery('.cart-drawer-upsell-section .drawer-upsell-item:contains(Mystery Bracelet)').addClass('custUpsellProdShow');
	        }

	        if(jQuery('.cart-drawer-upsell-section .drawer-upsell-item:contains(Magnetic Bracelet Set)').length > 0 ){
	       		jQuery('.cart-drawer-upsell-section .drawer-upsell-item:contains(Magnetic Bracelet Set)').addClass('custUpsellProdShow');
	        }
        }


        jQuery(document).on('click','#sidebar-cart,.Product__Wrapper .Container button#Product__AddToCart,.Product__Wrapper .Container p.product-upsell-item--addToCart', function() {

        	console.log("on add click");
        	
        	var intCount = 0;
        	var intInterval = setInterval(function () {
    			intCount += 1;
    			console.log("Upsell Len  >> " + jQuery('.custUpsellProdShow').length);
    			
    			if(jQuery('.custUpsellProdShow').length == 0) {
    				addCustomToUpsellProduct();
    			}

    			if(intCount === 60) {
    				clearInterval(intInterval);
    			}

			},100);
        });

       clearInterval(waitForJquery);  
    }
}, 50); 