var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {

		changeHPShopCtaLinkV2();

		function changeHPShopCtaLinkV2() {
			if(jQuery('.section-banner-tiles-large .btn.btn-secondary:contains(SHOP)').length > 0){
				jQuery('.section-banner-tiles-large .btn.btn-secondary:contains(SHOP)').attr('href','https://trtltravel.com/products/trtl-pillow-cool');
			}
		}
	}

});