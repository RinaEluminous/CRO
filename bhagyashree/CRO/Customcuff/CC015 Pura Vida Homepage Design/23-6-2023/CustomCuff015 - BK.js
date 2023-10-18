  	customPuraVidaHTMLForHP();

	function manageVideoSlideNavArrows(){
		if(jQuery(window).width() > 768){
			if(jQuery('.custPuraVidaVideoProducts button.slick-prev.slick-arrow').length > 0 && jQuery('.custPuraVidaVideoProducts button.slick-next.slick-arrow').length > 0 ){
			    if(jQuery('.custPuraVidaSliderNavArrow').length == 0){
			        jQuery('.custPuraVidaVideoProducts button.slick-prev.slick-arrow,.custPuraVidaVideoProducts button.slick-next.slick-arrow').wrapAll('<div class="custSliderNavArrow"></div>');
			    }
	  		}
			if(jQuery('.custPuraVidaVideoProducts .slick-slide.slick-current.slick-active').length > 0 ){
		    	var intWidth = jQuery('.custPuraVidaVideoProducts .slick-slide.slick-current.slick-active').width();
		    	jQuery('.custPuraVidaSliderNavArrow').css('width',intWidth+'px');
			}
			
		}
	}

	jQuery(window).on('resize', function () {
	    manageVideoSlideNavArrows();
	})

  function customPuraVidaHTMLForHP() {
    if (jQuery('.custPuraVidaCustomCuffWrapper').length == 0) {
       jQuery('<div class="custPuraVidaCustomCuffWrapper"> <div class="custPuraVidaCustomCuffBanner"> <div class="custMobileBanner"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/custom-meaningful-jewelry-banner-mobile.jpg"></div><div class="container"> <div class="row"> <div class="custPuraVidaLastText"> <h1>Custom meaningful jewelry</h1> <p>Personalize our jewelry with meaningful engravings to celebrate the people, places and moments worth remembering.</p><a href="https://www.customcuff.co/collections/best-sellers?al_pg_id=dd36e9c7-d9ac-46ad-bf47-f54e0904915c" class="custPuraVidaShopNowButton">SHOP NOW</a> </div></div></div></div><div class="custPuraVidaListingInformation"> <div class="container"> <ul> <li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/engraving_fc867737-4e85-44be-b9eb-bf7fc7732811.png?v=1680850377"><span>Meaningful engravings on jewellry</span></li><li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/globe_1_1d7708f6-aabe-4b25-b844-cd23be09bb10.png?v=1680850455"><span>500,000+ unique pieces sold</span></li><li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/plane_1_70195acf-9b80-49e7-98dc-483c9adddc40.png?v=1680850480"><span>Fast Worldwide Shipping</span></li><li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/gift_1_54027d1b-b247-4e2d-8e40-4acf35450954.png?v=1680850497"><span>The Perfect Gift</span></li><li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/drop_1_fc28e1b8-f2d4-4f47-980c-d73f46a37116.png?v=1680850515"><span>Waterproof</span></li></ul> </div></div><div class="custPuraVidaShopCategory"> <div class="container"> <div class="custPuraVidaPopulerCategory"> <div> <div class="custPuraVidaFrameBoxWrapper"> <a href="https://www.customcuff.co/collections/custom-bracelets?al_pg_id=dd36e9c7-d9ac-46ad-bf47-f54e0904915c"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/thumb-bracelets-dark.jpg"> <div class="custPuraVidaShopTextLink"> <h5>Bracelets</h5> <div>SHOP NOW</div></div></a> </div></div><div> <div class="custPuraVidaFrameBoxWrapper"> <a href="https://www.customcuff.co/collections/custom-necklace?al_pg_id=dd36e9c7-d9ac-46ad-bf47-f54e0904915c"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/thumb-necklaces.jpg"> <div class="custPuraVidaShopTextLink"> <h5>Necklaces</h5> <div>SHOP NOW</div></div></a> </div></div><div> <div class="custPuraVidaFrameBoxWrapper"> <a href="https://www.customcuff.co/collections/rings?al_pg_id=dd36e9c7-d9ac-46ad-bf47-f54e0904915c"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/thumb-rings.jpg"> <div class="custPuraVidaShopTextLink"> <h5>Rings</h5> <div>SHOP NOW</div></div></a> </div></div></div></div></div><div class="custPuraVidaBestSellersWrapper"> <div class="custPuraVidaInstaTopButtonWrapper"> <h2>Recommended For You</h2> <a href="https://www.customcuff.co/collections/best-sellers" class="custPuraVidaShopNowButtonOutline">SHOP ALL BEST SELLERS</a> </div><input id="custTab1" type="radio" name="tabsA" checked="checked"><label for="custTab1">Best Sellers</label><input id="custTab2" type="radio" name="tabsA"><label for="custTab2">New Arrivals</label><input id="custTab3" type="radio" name="tabsA"><label for="custTab3">Gift Sets</label> <div id="custContentOne"> <a href="https://www.customcuff.co/collections/best-sellers" class="custPuraVidaShopNowButtonOutline custMobileButton">SHOP ALL BEST SELLERS</a> <div class="custPuraVidaBestSellersProducts custTabsView"> <div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-cuff"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Silvercuff_e86de2a6-03c6-49b4-b101-a92d5cb43092_500x.jpg?v=1677397344"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customengravedcoordinatesjewelrycuffgiftbundlecouplesgift2_b6267abb-c232-4021-bce1-e3136b66f3b3_800x.jpg?v=1673303729"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 2954 reviews</div><h3>Custom Cuff</h3> <div class="custPuraVidaPriceTag">$38.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-necklace"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/BarNecklace_1_500x.jpg?v=1668455131"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customengravedcoordinatesjewelrynecklaces_800x.jpg?v=1681811500"></a> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 843 reviews</div><h3>Custom Bar Necklace</h3> <div class="custPuraVidaPriceTag">$41.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/2x-custom-cuff-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/cuffgiftset_500x.jpg?v=1645689490"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/21_19b332e1-fb4b-40a9-a370-98b24a407aed_800x.jpg?v=1645689490"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 2954 reviews</div><h3>Custom Cuff Gift Set</h3> <div class="custPuraVidaPriceTag">$57.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-chain-bracelet"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/silvercustomcoordinateschainbraceletcc_500x.jpg?v=1633113404"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Screenshot2021-11-02at15.40.37_800x.png?v=1635864229"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 162 reviews</div><h3>Custom Chain Bracelet</h3> <div class="custPuraVidaPriceTag">$37.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/black-series"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/bbsetbundle_500x.jpg?v=1653316655"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Untitled-25_800x.jpg?v=1653316661"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 60 reviews</div><h3>Custom Matte Black Series</h3> <div class="custPuraVidaPriceTag">$37.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/2x-custom-necklace-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/custombarnecklacegiftset_500x.jpg?v=1636822474"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customnecklacegiftset_800x.jpg?v=1636833998"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 843 reviews</div><h3>Custom Bar Necklace Set</h3> <div class="custPuraVidaPriceTag">$64.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-string-bracelet"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Screenshot_1_500x.jpg?v=1671527715"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/30_800x.jpg?v=1642595534"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 49 reviews</div><h3>Customizable String Bracelet</h3> <div class="custPuraVidaPriceTag">$29.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-ring"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customringsilver_500x.jpg?v=1632134819"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Screenshot2021-11-03at10.41.28_800x.png?v=1681813038"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 59 reviews</div><h3>Custom Ring</h3> <div class="custPuraVidaPriceTag">$46.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/2x-custom-chain-bracelet-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/cu_500x.jpg?v=1645689410"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/24_05c623d8-c1c1-467c-9d5a-2fb5f1e77be9_800x.jpg?v=1645689410"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 162 reviews</div><h3>Custom Chain Bracelet Set</h3> <div class="custPuraVidaPriceTag">$57.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-minimal-charm-necklace"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/minimalsquarecustompendant_500x.jpg?v=1645689333"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/28_3a6f46bd-c741-4649-b30f-de9182a437c9_800x.jpg?v=1645689333"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 0 reviews</div><h3>Custom Minimal Charm Necklace</h3> <div class="custPuraVidaPriceTag">$37.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/magnet-matching-bracelet-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/CustomCuff_2021_55_blackropeamendedcopy_500x.jpg?v=1646825979"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/CustomCuff_2021_55_blackropeamendedcopy_7f7a777d-2c45-4095-bb8a-08b82383e4a4_600x.jpg?v=1646825979"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 4 reviews</div><h3>Magnetic Bracelet Set</h3> <div class="custPuraVidaPriceTag">$32.80</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-braided-bracelet"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/red_goldbraidedcustomcoordinatesbracelet_500x.jpg?v=1677152973"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/37_800x.jpg?v=1642595725"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 9 reviews</div><h3>Custom Braided Bracelet</h3> <div class="custPuraVidaPriceTag">$40.00</div></div></div></div></div><div id="custContentTwo"> <a href="https://www.customcuff.co/collections/new-in" class="custPuraVidaShopNowButtonOutline custMobileButton">SHOP ALL NEW ARRIVALS</a> <div class="custPuraVidanewArrivalProducts custTabsView"> <div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/collections/new-in/products/custom-handwriting-drawing-bracelet"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/silvercustomhandwritingchainbracelet_500x.jpg?v=1653315629"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Untitled-48_600x.jpg?v=1653305467"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 1 reviews</div><h3>Handwriting/Drawing Chain Bracelet</h3> <div class="custPuraVidaPriceTag">$51.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/collections/new-in/products/custom-minimal-bracelet"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/silverinitialbracelet_500x.jpg?v=1642594435"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/16_800x.jpg?v=1642592465"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 1 review</div><h3>Custom Minimal Bracelet</h3> <div class="custPuraVidaPriceTag">$33.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/collections/new-in/products/initial-charm-necklace"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/X_500x.jpg?v=1642592975"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/25_600x.jpg?v=1642592982"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 2 reviews</div><h3>Initial Necklace</h3> <div class="custPuraVidaPriceTag">$32.40</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/collections/new-in/products/custom-handwriting-coin-necklace"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/silverhandwritingnecklace_500x.jpg?v=1653305445"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Untitled-48_600x.jpg?v=1653305467"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 2 reviews</div><h3>Handwriting Coin Necklace</h3> <div class="custPuraVidaPriceTag">$47.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/collections/new-in/products/magnet-matching-bracelet-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/CustomCuff_2021_55_blackropeamendedcopy_500x.jpg?v=1646825979"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/CustomCuff_2021_55_blackropeamendedcopy_7f7a777d-2c45-4095-bb8a-08b82383e4a4_600x.jpg?v=1646825979"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 4 reviews</div><h3>Magnetic Bracelet Set</h3> <div class="custPuraVidaPriceTag">$32.80</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/collections/new-in/products/handwriting-drawing-coin-link-bracelet"><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/products/customhandwritingsilverlinkbracelet_500x.jpg?v=1650889716"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/handwritingchainbraceletthin_600x.jpg?v=1642421961"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 1 reviews</div><h3>Minimal Handwriting Coin Bracelet</h3> <div class="custPuraVidaPriceTag">$42.40</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/collections/new-in/products/handwriting-plate-necklace"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/silverplateactualhandwritingnecklace_500x.jpg?v=1648047331"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Goldplateactualhandwritingnecklace_600x.jpg?v=1648047331"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 1 reviews</div><h3>Handwriting Plate Necklace</h3> <div class="custPuraVidaPriceTag">$51.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/collections/new-in/products/magnetic-chain-necklace-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/magneticnecklacesetsilvercouplesgift_500x.jpg?v=1645519059"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/13_600x.jpg?v=1645519059"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 0 reviews</div><h3>Magnetic Chain Necklace Set</h3> <div class="custPuraVidaPriceTag">$36.00</div></div></div></div></div><div id="custContentThree"> <a href="https://www.customcuff.co/collections/gift-sets" class="custPuraVidaShopNowButtonOutline custMobileButton">SHOP ALL GIFT SETS</a> <div class="custPuraVidaGiftSetsProducts custTabsView"> <div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/2x-custom-cuff-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/cuffgiftset_500x.jpg?v=1645689490"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/21_19b332e1-fb4b-40a9-a370-98b24a407aed_800x.jpg?v=1645689490"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 2954 reviews</div><h3>Custom Cuff Gift Set</h3> <div class="custPuraVidaPriceTag">$57.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/2x-custom-necklace-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/custombarnecklacegiftset_500x.jpg?v=1636822474"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customnecklacegiftset_800x.jpg?v=1636833998"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 843 reviews</div><h3>Custom Bar Necklace Set</h3> <div class="custPuraVidaPriceTag">$64.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/2x-custom-chain-bracelet-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/cu_500x.jpg?v=1645689410"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/24_05c623d8-c1c1-467c-9d5a-2fb5f1e77be9_800x.jpg?v=1645689410"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 162 reviews</div><h3>Custom Chain Bracelet Set</h3> <div class="custPuraVidaPriceTag">$57.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-ring-gift-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customringgiftset_500x.jpg?v=1637836047"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Screenshot2021-11-03at10.41.28_e7b9cfaf-62c8-406b-81f0-0eb2136a0e9a_800x.png?v=1637835794"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 1 reviews</div><h3>Custom Ring Gift Set</h3> <div class="custPuraVidaPriceTag">$79.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/magnet-matching-bracelet-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/CustomCuff_2021_55_blackropeamendedcopy_500x.jpg?v=1646825979"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/CustomCuff_2021_55_blackropeamendedcopy_7f7a777d-2c45-4095-bb8a-08b82383e4a4_600x.jpg?v=1646825979"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 4 reviews</div><h3>Magnetic Bracelet Set</h3> <div class="custPuraVidaPriceTag">$32.80</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-minimal-bracelet-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customminimalbraceletgiftset_500x.jpg?v=1645689660"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/21_800x.jpg?v=1645689666"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 0 reviews</div><h3>Custom Minimal Bracelet Set</h3> <div class="custPuraVidaPriceTag">$57.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-minimal-necklace-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/minimalsquarecustompendantsilvergiftset_500x.jpg?v=1641925792"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/ALEX2316_d9e8574f-fe96-473d-a626-0eded5df2b3b_800x.jpg?v=1641925824"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 0 reviews</div><h3>Custom Minimal Necklace Set</h3> <div class="custPuraVidaPriceTag">$58.00</div></div></div><div> <div class="custPuraVidaBestProductsBlocks"> <a href="https://www.customcuff.co/products/custom-figaro-bracelet-set"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customfigarobraceletset_500x.jpg?v=1642594457"> <img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/67_800x.jpg?v=1642594465"> </a> <div class="custPuraVidaReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 0 reviews</div><h3>Custom Figaro Bracelet Set</h3> <div class="custPuraVidaPriceTag">$63.00</div></div></div></div></div></div><div class="custPuraVidaVideoProducts"> <div class="custPuraVidaPlayVideoSlider"> <div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374857-ygtapdqx/watermarked/540/2022-10-1717.50.342951126783254215931_7030873959.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/collections/necklaces-1/products/custom-plate-necklace?al_pg_id=f87ea663-0129-44d9-bbbd-e822f07b1ed2">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675177147-gqkjxanm/watermarked/540/6-10.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/collections/best-sellers/products/custom-necklace">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674742921-cafvtjuo/watermarked/540/VIDEO03.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/collections/best-sellers">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675176566-ftszmajw/watermarked/540/303729308_431649165694913_4990643942257213426_n.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/products/magnetic-chain-necklace-set">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675176756-uqnjpcyg/watermarked/540/9d2898e643ac4b81962f0e58a7d9a3f0.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/products/extra-matte-black-series-product">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675177051-vemkfozy/watermarked/540/6-21.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/collections/best-sellers">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2023/01/31/video-compiled/d742efbc22fd487293792f74ef0185ea/watermarked/540/d742efbc22fd487293792f74ef0185ea.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/products/custom-minimal-charm-necklace">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674739532-jpauyhtl/watermarked/540/07ab6f17343244b8b81d443c64911d24.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/products/carpe-diem-cuff">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374683-fndhlvpo/watermarked/540/2022-11-0214.14.162962644562200777292_7030873959.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/collections/gift-sets/products/2x-custom-necklace-set">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374886-jytsudig/watermarked/540/2022-01-1717.31.562753283949614885318_7030873959.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/products/custom-minimal-charm-necklace">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374705-hqkwiuoe/watermarked/540/2022-11-0117.11.372962009533729020191_7030873959.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/products/custom-minimal-charm-necklace">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674743673-hgmfswpn/watermarked/540/VIDEO05.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/products/custom-cuff">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374735-nmfpxvrk/watermarked/540/2022-10-2711.45.042958190955304536960_7030873959.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/pages/inspiration">Shop Now</a> </div></div><div> <div class="custPuraVidaVideoWrapper"> <video controls> <source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674743176-lvkqsghz/watermarked/540/VIDEO02.mp4" type="video/mp4"> </video> <a href="https://www.customcuff.co/collections/best-sellers/products/custom-necklace">Shop Now</a> </div></div></div></div><div class="custPuraVidaCreatePerfectGift"> <div class="custPuraVidaRightLiting"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/custom-star-map-jewelry.jpg"></div><div class="custPuraVidaLeftLiting"> <h2>Custom Star Map Jewelry</h2> <p>Get the exact star map of how the stars were aligned over a specific location, at a certain point in time, engraved on a minimal piece of jewelry. Carry the happiest moments of your life with you at all times.</p><a href="https://www.customcuff.co/collections/zodiac-necklace?al_pg_id=dd36e9c7-d9ac-46ad-bf47-f54e0904915c" class="custPuraVidaShopNowButtonOutline">SHOP NOW</a> </div><div class="custPuraVidaLeftLiting"> <h2>Actual Handwriting Jewelry</h2> <p>Take a picture of a note/drawing, upload it and get those fine personal lines of ink engraved on the jewelry piece of your choice. Our most innovative and personal concept to date!</p><a href="https://www.customcuff.co/collections/handwriting-necklace?al_pg_id=dd36e9c7-d9ac-46ad-bf47-f54e0904915c" class="custPuraVidaShopNowButtonOutline">SHOP NOW</a> </div><div class="custPuraVidaRightLiting"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/actual-handwriting-jewelry.jpg"></div></div><div class="custPuraVidaWhatPeopleSay"> <div class="custPuraVidaContainerFull"> <h2>What people say</h2> <div class="custPuraVidaCustmerFeedbackSlider"> <div> <div class="custPuraVidaFeedbackWrapper"> <div class="custPuraVidaImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-1.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> <h5>Amazing</h5> <p>Absolutely amazing! My partner and I are super impressed with the quality and we love them.</p><span>J.S</span> </div></div><div> <div class="custPuraVidaFeedbackWrapper"> <div class="custPuraVidaImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-2.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> <h5>Perfect gift</h5> <p>Got this for my dad. He is in love with it and he wears it since he put it on</p><span>Juan carlos Fava Gritti</span> </div></div><div> <div class="custPuraVidaFeedbackWrapper"> <div class="custPuraVidaImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-1.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> <h5>Amazing</h5> <p>Absolutely amazing! My partner and I are super impressed with the quality and we love them.</p><span>J.S</span> </div></div><div> <div class="custPuraVidaFeedbackWrapper"> <div class="custPuraVidaImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-2.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> <h5>Perfect gift</h5> <p>Got this for my dad. He is in love with it and he wears it since he put it on</p><span>Juan carlos Fava Gritti</span> </div></div><div> <div class="custPuraVidaFeedbackWrapper"> <div class="custPuraVidaImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-1.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> <h5>Amazing</h5> <p>Absolutely amazing! My partner and I are super impressed with the quality and we love them.</p><span>J.S</span> </div></div><div> <div class="custPuraVidaFeedbackWrapper"> <div class="custPuraVidaImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-2.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> <h5>Perfect gift</h5> <p>Got this for my dad. He is in love with it and he wears it since he put it on</p><span>Juan carlos Fava Gritti</span> </div></div></div></div></div><div class="custPuraVidaShopCategory"> <div class="container"> <div class="custPuraVidaShopCollection"> <div> <div class="custPuraVidaFrameBoxWrapper"> <a href="https://www.customcuff.co/collections/red-collection"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/shop-red-collection.jpg"> <div class="custPuraVidaShopTextLink"> <h5>Red Collection</h5> <div>LEARN MORE</div></div></a> </div></div><div> <div class="custPuraVidaFrameBoxWrapper"> <a href="https://www.customcuff.co/products/black-series"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/matte-black-aeries.jpg"> <div class="custPuraVidaShopTextLink"> <h5>Matte Black Series</h5> <div>LEARN MORE</div></div></a> </div></div><div> <div class="custPuraVidaFrameBoxWrapper"> <a href="https://www.customcuff.co/collections/minimal-custom-jewelry"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/minimal-collection.jpg"> <div class="custPuraVidaShopTextLink"> <h5>Minimal Collection</h5> <div>LEARN MORE</div></div></a> </div></div></div></div></div><div class="custPuraVidaCreatePerfectGift custListingIcon"> <div class="custPuraVidaLeftLiting"> <h2>Create The Perfect Gift In Minutes</h2> <ul> <li> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/choose-product.svg"> <div> <h6>Choose Product</h6> <p>Browse between our 50+ different custom products and choose your favorite(s).</p></div></li><li> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/engraving.svg"> <div> <h6>Add Your Engraving</h6> <p>Share your special moment to be captured forever.</p></div></li><li> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/enjoy-all-time.svg"> <div> <h6>Enjoy For All Time</h6> <p>Your Specially Customized jewelry arrives in the mail</p></div></li></ul> </div></div><div class="custPuraVidaCustomcuffInstaWrapper"> <div class="custPuraVidaInstaTopButtonWrapper"> <h2>Follow Us @customcuff</h2> <a href="https://www.customcuff.co/collections/best-sellers?al_pg_id=dd36e9c7-d9ac-46ad-bf47-f54e0904915c">SHOP INSTA</a> </div><div class="custPuraVidaInstaCustomcuff"> <div class="custPuraVidaFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff1.jpg"></div><div class="custPuraVidaFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff2.jpg"></div><div class="custPuraVidaFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff6.jpg"></div><div class="custPuraVidaFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff2.jpg"></div><div class="custPuraVidaFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff7.jpg"></div><div class="custPuraVidaFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff4.jpg"></div><div class="custPuraVidaFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff8.jpg"></div><div class="custPuraVidaFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff9.jpg"></div></div></div></div>').prependTo('#main');
       
        	// reposition reviews
	        if(jQuery('#main .jdgm-carousel-wrapper').length > 0){
		        jQuery('#main .jdgm-carousel-wrapper').parent('div').addClass('custParent');
		        jQuery('.custPuraVidaParent').insertBefore('.custPuraVidaCustomcuffInstaWrapper');
		    }
   		}


        if (jQuery('#custPopulerColorslick').length == 0) {
            jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" id="custSwiperSliderJS"></script>');
        }
        if (jQuery('#custPopulerColorslick   ').length == 0) {
            jQuery("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" id="custSwiperSliderCSS" />');
        }

        var intSlickCounter = 0;
        var intSlickInterval = setInterval(function() {
            intSlickCounter += 1;
            if($.fn.slick){
              
              	jQuery(".custPuraVidaBestSellersProducts").not('.slick-initialized').slick({
	                slidesToShow: 4,
	                infinite: true,
	                dots: false,
	                arrows: true,
	                centerPadding: '100px',
	                infinite: true,
	                centerMode: true,
	                slidesToScroll: 2,
	                initialSlide: 2,
	                responsive: [
		                {
	                        breakpoint: 991,
	                        settings: {
	                            centerPadding: '70px',
	                            slidesToShow: 3
	                        }
	                    },
	                    {
	                        breakpoint: 768,
	                        settings: {
	                            centerPadding: '50px',
	                            slidesToShow: 2
	                        }
	                    },
	                    {
	                        breakpoint: 640,
	                        settings: {
	                            centerPadding: '40px',
	                            slidesToShow: 1,
	                            dots: true,
	                        }
	                    }
	                ]
	            });


              	jQuery(".custPuraVidanewArrivalProducts").not('.slick-initialized').slick({
	                slidesToShow: 4,
	                infinite: true,
	                dots: false,
	                arrows: true,
	                centerPadding: '100px', 
	                centerMode: true,
	                slidesToScroll: 2,
	                initialSlide: 2,
	                responsive: [{
	                        breakpoint: 991,
	                        settings: {
	                            centerPadding: '70px',
	                            slidesToShow: 3
	                        }
	                    },
	                    {
	                        breakpoint: 768,
	                        settings: {
	                            centerPadding: '50px',
	                            slidesToShow: 2
	                        }
	                    },
	                    {
	                        breakpoint: 640,
	                        settings: {
	                            centerPadding: '40px',
	                            slidesToShow: 1,
	                            dots: true,
	                        }
	                    }
	                ]
	            });

            	jQuery(".custPuraVidaGiftSetsProducts").not('.slick-initialized').slick({
	                slidesToShow: 4,
	                infinite: true,
	                dots: false,
	                arrows: true,
	                centerPadding: '100px', 
	                centerMode: true,
	                slidesToScroll: 2,
	                initialSlide: 2,
	                responsive: [{
	                        breakpoint: 991,
	                        settings: {
	                            centerPadding: '70px',
	                            slidesToShow: 3
	                        }
	                    },
	                    {
	                        breakpoint: 768,
	                        settings: {
	                            centerPadding: '50px',
	                            slidesToShow: 2
	                        }
	                    },
	                    {
	                        breakpoint: 640,
	                        settings: {
	                            centerPadding: '40px',
	                            slidesToShow: 1,
	                            dots: true,
	                        }
	                    }
	                ]
	            });

            	jQuery(".custPuraVidaShopCollection").not('.slick-initialized').slick({
	                slidesToShow: 3,
	                infinite: true,
	                dots: false,
	                arrows: false,
	                slidesToScroll: 1,
	                responsive: [{
	                        breakpoint: 860,
	                        settings: {
	                            arrows: true,
	                            slidesToShow: 2
	                        }
	                    },
	                    {
	                        breakpoint: 640,
	                        settings: {
	                            arrows: true,
	                            slidesToShow: 1,
	                             dots: true,
	                						arrows: false,
	                        }
	                    }
	                ]
	            });

	            jQuery(".custPuraVidaPopulerCategory").not('.slick-initialized').slick({
	                slidesToShow: 3,
	                infinite: true,
	                dots: false,
	                arrows: false,
	                slidesToScroll: 1,
	                responsive: [{
	                        breakpoint: 860,
	                        settings: {
	                          slidesToShow: 3,
	                            arrows: true,
	                            slidesToShow: 2
	                        }
	                    },
	                    {
	                        breakpoint: 640,
	                        settings: {
	                          slidesToShow: 3,
	                            arrows: true,
	                            slidesToShow: 1,
	                            dots: true,
	                        }
	                    }
	                ]
	            });

	            jQuery(".custPuraVidaPlayVideoSlider").not('.slick-initialized').slick({
	                slidesToShow: 5,
	                dots: false,
	                arrows: true,
	                centerPadding: '0',
	                infinite: true,
	                centerMode: true,
	                slidesToScroll: 1,
	                responsive: [{
	                        breakpoint: 1199,
	                        settings: {
	                            arrows: true,
	                            centerMode: true,
	                            centerPadding: '60px',
	                            slidesToShow: 3
	                        }
	                    },
	                    {
	                        breakpoint: 861,
	                        settings: {
	                            arrows: false,
	                            dots: true,
	                            centerMode: true,
	                            infinite: true,
	                            centerPadding: '300px',
	                            slidesToShow: 1
	                        }
	                    },
	                    {
	                        breakpoint: 768,
	                        settings: { 
	                            centerMode: true,
	                            infinite: true,
	                            centerPadding: '200px',
	                            slidesToShow: 1,
	                            dots: true,
								arrows: false,
	                        }
	                    },
	                    {
	                        breakpoint: 540,
	                        settings: {
	                            dots: true,
	                            centerMode: true,
	                            infinite: true,
	                            centerPadding: '170px',
	                            slidesToShow: 1
	                        }
	                    }
	                ]
	            }).on('afterChange', function(e, slick, currentSlide) {
	                jQuery('.custPuraVidaVideoWrapper video').trigger('pause');
	            });

           	 	manageVideoSlideNavArrows();

            	jQuery(".custPuraVidaCustmerFeedbackSlider").not('.slick-initialized').slick({
	                slidesToShow: 4,
	                dots: false,
	                arrows: true,
	                centerPadding: '80px',
	                infinite: true,
	                centerMode: true,
	                slidesToScroll: 1,
	                responsive: [{
	                        breakpoint: 1199,
	                        settings: {
	                            centerMode: true,
	                            centerPadding: '60px',
	                            slidesToShow: 3
	                        }
	                    },
	                    {
	                        breakpoint: 861,
	                        settings: {
	                            centerMode: true,
	                            centerPadding: '60px',
	                            slidesToShow: 2,
	                        }
	                    },
	                    {
	                        breakpoint: 640,
	                        settings: {
	                            centerMode: true,
	                            centerPadding: '0',
	                            slidesToShow: 1,	                            
	                            dots: true,
								arrows: false,
	                        }
	                    }
	                ]
	            });

            	 
      		clearInterval(intSlickInterval);
        }

        if (intSlickCounter === 80) {
            clearInterval(intSlickInterval);
        }

    }, 50);
}