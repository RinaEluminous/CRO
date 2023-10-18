var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {

		changeHPShopCtaLinkV1();

		function changeHPShopCtaLinkV1() {
			if(jQuery('.section-banner-tiles-large .btn.btn-secondary:contains(SHOP)').length > 0){
				jQuery('.section-banner-tiles-large .btn.btn-secondary:contains(SHOP)').attr('href','https://trtltravel.com/products/trtl-pillow-plus');
			}
		}
	}

});