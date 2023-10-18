var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {

  		if(jQuery( window ).width() <= 767){
			jQuery( "#asccessories .tile-product .card-footer , #Comfort .tile-product .card-footer , #Bundles .tile-product .card-footer, #pillows .tile-product .card-footer").each(function() {

				if(jQuery(this).find('.custShopNowCTA').length == 0) {
				    jQuery('<div class="custShopNowCTA"><button class="btn">SHOP now</button></div>').appendTo((this));
				}	
			});

			jQuery(document).on("click" , ".custShopNowCTA button" , function() {
				jQuery(this).parents(".tile-product").find('.card-title')[0].click();
			});
  		}
		

  	clearInterval(waitForjQuery);
  }
}, 50);