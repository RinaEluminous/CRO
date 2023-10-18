var waitForJquery = setInterval(function() {

    if (typeof jQuery != 'undefined') {

    	if(jQuery('#DrawerCartForm .cart-drawer-upsell-section .drawer-upsell-item-content .drawer-upsell-atc-wrapper .drawer-upsell-item-atc-btn:contains(Add)').length > 0){
        	jQuery('#DrawerCartForm .cart-drawer-upsell-section .drawer-upsell-item-content .drawer-upsell-atc-wrapper .drawer-upsell-item-atc-btn:contains(Add)').text('Add +');
        }

        clearInterval(waitForJquery);

    }
}, 50);