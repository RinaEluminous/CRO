addSticklyBannerPDP();

function addSticklyBannerPDP(){
	if(jQuery(".custSticklyBanner").length == 0){
		if(jQuery(".product .jdgm-preview-badge.jdgm-widget.jdgm-widget").length > 0){
		  var strReview = jQuery(".product .jdgm-preview-badge.jdgm-widget.jdgm-widget").clone();
		}

		if(jQuery(".product .jdgm-preview-badge.jdgm-widget.jdgm-widget").length > 0){
		  var prodName = jQuery(".product h1.product_name").text();
		}

		var customHtml = '<div class="custSticklyBanner"><h6 class="custProdName">'+prodName+'</h6><div class="custReview"></div><div class="customPurchaseBlock purchase-details"><div class="product-quantity-box purchase-details__quantity"><span class="custQtyChange js-change-quantity ss-icon product-minus" data-func="minus"><span class="icon-minus"></span></span><input class="quantity custQty" id="quantity" min="1" name="quantity" size="2" type="number" value="1"><span class="custQtyChange js-change-quantity ss-icon product-plus" data-func="plus"><span class="icon-plus"></span></span></div><div class="custAddToCartBtn"><button class="action_button add_to_cart uppercase" data-label="Add to Cart" name="add" type="submit"><span class="text">Add to Cart</span></button></div></div></div>';

		jQuery(customHtml).insertAfter('.customTopBanner');
		jQuery('.custReview').html(strReview);
		var strReviewCount = jQuery('.custReview .jdgm-prev-badge__text').text().replace(/\(|\)/g, "");
		strReviewCount = strReviewCount + ' Reviews';
		jQuery('.custReview .jdgm-prev-badge__text').text(strReviewCount)
	}
}


jQuery(document).on('click','.custAddToCartBtn', function(){
	var intQty = jQuery('.custQty').val();
	console.log(" intQty >> " +intQty);
	jQuery('.shopify-product-form .product-quantity-box.purchase-details__quantity input.quantity').val(intQty);
	jQuery('.shopify-product-form .add_to_cart.action_button')[0].click();
});

jQuery(document).on('click','.custReview .jdgm-widget.jdgm-widget', function(){
	jQuery('.product .jdgm-widget.jdgm-widget')[0].click();
});