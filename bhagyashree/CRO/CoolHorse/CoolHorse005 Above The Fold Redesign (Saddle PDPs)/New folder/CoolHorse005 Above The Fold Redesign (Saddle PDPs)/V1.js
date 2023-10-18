var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		updateSiteNavRightMenu();

    	function updateSiteNavRightMenu() {
    		//add custom html
    		if(jQuery('.custBusinessButton').length == 0){
    			jQuery('<div class="custBusinessButton">Are you a business?</div>').prependTo('.wrapper .header-right-div');
    			jQuery('.custheaderHoverRightButton').addClass('custheaderHoverRightButton');
    		}

    		//wrap the 3 right side menu in custom div
    		if(jQuery('.header-right-div .header-right-a').length > 0 ){
    			jQuery('.wrapper .header-right-div .header-right-a').wrapAll('<div class="customSubMenuWrap"></div>');
    		}

    		//replace the Menu icons - search, account and cart(Mobile only)
    		if(jQuery(window).width() <= 767 ){
    			if(jQuery('.site-header-wrapper #customer_login_link span.icon').length > 0 ){
    				jQuery('#customer_login_link span.icon').html('<img class="custAccountIcon" src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/account-icon.svg">');
    			}

    			if(jQuery('.site-header-wrapper #CartButton span.icon.icon-cart').length > 0 ){
					jQuery('.site-header-wrapper #CartButton span.icon.icon-cart').html('<img class="custCartIcon" src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/cart-icon.svg">');
    			}

    			if(jQuery('.site-header-wrapper #search-icon-mob span.icon.icon-search').length > 0 ){
					jQuery('.site-header-wrapper #search-icon-mob span.icon.icon-search').html('<img class="custSearchIcon" src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/search-icon.svg">');
    			}

    			jQuery('.site-header-wrapper span.icon-fallback-text span.icon svg,.site-header-wrapper span.business-login-mobile svg').show();
    		}
    	}

		clearInterval(waitForJquery);
    }
}, 50);