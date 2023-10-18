var waitForjQuery = setInterval(function() {
if (typeof jQuery != 'undefined') {
	
	addCustSticklyBanner();

	//addCustProductBlockHp();

	function addCustSticklyBanner() {
		if(jQuery('.custPromoSticklyFooterBanner').length == 0){
			jQuery('<div class="custPromoSticklyFooterBanner"><div class="custCloseIcon">✕</div><a class="bm-container-link" href="https://trtltravel.com/products/packed-to-perfection-bundle"></a><div class="custPromoBannerWrapper"><div class="custLeftSection"><div class="custBannerHeading"><a href="https://trtltravel.com/products/packed-to-perfection-bundle"><span>Save 10%</span>With the packed to perfection bundle</a></div><div class="custSubHeading"><p>Perfect for people who want max comfort and relaxation while traveling.</p></div></div><div class="custCtaWrapper"><p><a href="/products/trtl-packing-pods" class="stretched-link btn btn-light">SHOP NOW</a></p></div><div class="imgWrapper"><a href="https://trtltravel.com/products/packed-to-perfection-bundle"><img class="imgDesktop" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-sticky.png" alt=""><img class="img-mobile" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-sticky.png" alt=""></a></div></div></div>').appendTo('body');
		}
	}
	

	function addCustProductBlockHp(){
		jQuery('.container li.nav-item:eq(0)').remove();
		//jQuery('.container tab-content').remove();
		//active show
		jQuery('.container .tab-content .categories-tab-0').remove();
		jQuery('.container li.nav-item:eq(0) button')[0].click();
	}

	clearInterval(waitForjQuery);
  }
}, 50);
