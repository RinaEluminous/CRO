  	customHTMLForHP();

	function manageVideoSlideNavArrows(){
	  	if(jQuery('.custVideoProducts button.slick-prev.slick-arrow').length > 0 && jQuery('.custVideoProducts button.slick-next.slick-arrow').length > 0 ){
	      if(jQuery('.custSliderNavArrow').length == 0){
	        jQuery('.custVideoProducts button.slick-prev.slick-arrow,.custVideoProducts button.slick-next.slick-arrow').wrapAll('<div class="custSliderNavArrow"></div>');
	      }
	  	}

		if(jQuery('.custVideoProducts .slick-slide.slick-current.slick-active').length > 0 ){
		    var intWidth = jQuery('.custVideoProducts .slick-slide.slick-current.slick-active').width();
		    jQuery('.custSliderNavArrow').css('width',intWidth+'px');
		}
	}

	jQuery(window).on('resize', function () {
	    manageVideoSlideNavArrows();
	})

  function customHTMLForHP() {
    if (jQuery('.custCustomCuffWrapper').length == 0) {
       jQuery('<div class="custCustomCuffWrapper"><div class="custCustomCuffBanner"><div class="container"><div class="row"><div class="custImgFirst"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/meaningful-jewelry-img-2.jpg"><div class="custCustmerReview"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"><p><em>"I\'ll with confidence say that Customcuff creates the most meaningful jewelry pieces I\'ve come across"</em></p></div></div><div class="custImgSecound"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/meaningful-jewelry-img-1.jpg"></div><div class="custLastText"><h1>Custom meaningful jewelry</h1><p>Personalize our jewelry with meaningful engravings to celebrate the people, places and moments worth remembering.</p><a href="https://www.customcuff.co/collections/best-sellers" class="custShopNowButton">SHOP NOW</a></div></div></div></div><div class="custListingInformation"><div class="container"><ul><li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/engraving_fc867737-4e85-44be-b9eb-bf7fc7732811.png?v=1680850377"><span>Meaningful engravings on jewellry</span></li><li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/globe_1_1d7708f6-aabe-4b25-b844-cd23be09bb10.png?v=1680850455"><span>500,000+ unique pieces sold</span></li><li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/plane_1_70195acf-9b80-49e7-98dc-483c9adddc40.png?v=1680850480"><span>Fast Worldwide Shipping</span></li><li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/gift_1_54027d1b-b247-4e2d-8e40-4acf35450954.png?v=1680850497"><span>The Perfect Gift</span></li><li><img src="//cdn.shopify.com/s/files/1/0026/0010/8078/files/drop_1_fc28e1b8-f2d4-4f47-980c-d73f46a37116.png?v=1680850515"><span>Waterproof</span></li></ul></div></div><div class="custShopCategory"><div class="container"><h2>Shop By Category</h2><div class="custPopulerCategory"><div><div class="custFrameBoxWrapper"><a href="https://www.customcuff.co/collections/custom-bracelets"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/thumb-bracelets.jpg"><h5>Bracelets</h5></a></div></div><div><div class="custFrameBoxWrapper"><a href="https://www.customcuff.co/collections/custom-necklace?al_pg_id=235f647f-1d89-4906-8b6e-a3fb4216769b"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/thumb-necklaces.jpg"><h5>Necklaces</h5></a></div></div><div><div class="custFrameBoxWrapper"><a href="https://www.customcuff.co/collections/rings?al_pg_id=235f647f-1d89-4906-8b6e-a3fb4216769b"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/thumb-rings.jpg"><h5>Rings</h5></a></div></div></div><a href="https://www.customcuff.co/collections/all" class="custShopNowButtonOutline">SHOP ALL</a></div></div><div class="custBestSellersWrapper"><h2>Best Sellers</h2><div class="custBestSellersProducts"><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-cuff"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Silvercuff_e86de2a6-03c6-49b4-b101-a92d5cb43092_500x.jpg?v=1677397344"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 2954 reviews</div><h3>Custom Cuff</h3><div class="custPriceTag">$38.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-necklace"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/BarNecklace_1_500x.jpg?v=1668455131"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 843 reviews</div><h3>Custom Bar Necklace</h3><div class="custPriceTag">$41.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/2x-custom-cuff-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/cuffgiftset_500x.jpg?v=1645689490"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 2954 reviews</div><h3>Custom Cuff Gift Set</h3><div class="custPriceTag">$57.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-chain-bracelet"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/silvercustomcoordinateschainbraceletcc_500x.jpg?v=1633113404"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 162 reviews</div><h3>Custom Chain Bracelet</h3><div class="custPriceTag">$37.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/black-series"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/bbsetbundle_500x.jpg?v=1653316655"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 60 reviews</div><h3>Custom Matte Black Series</h3><div class="custPriceTag">$37.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/2x-custom-necklace-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/custombarnecklacegiftset_500x.jpg?v=1636822474"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 843 reviews</div><h3>Custom Bar Necklace Set</h3><div class="custPriceTag">$64.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-string-bracelet"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/Screenshot_1_500x.jpg?v=1671527715"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 49 reviews</div><h3>Customizable String Bracelet</h3><div class="custPriceTag">$29.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-ring"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customringsilver_500x.jpg?v=1632134819"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 59 reviews</div><h3>Custom Ring</h3><div class="custPriceTag">$46.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/2x-custom-chain-bracelet-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/cu_500x.jpg?v=1645689410"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 162 reviews</div><h3>Custom Chain Bracelet Set</h3><div class="custPriceTag">$57.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-minimal-charm-necklace"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/minimalsquarecustompendant_500x.jpg?v=1645689333"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 0 reviews</div><h3>Custom Minimal Charm Necklace</h3><div class="custPriceTag">$37.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/magnet-matching-bracelet-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/CustomCuff_2021_55_blackropeamendedcopy_500x.jpg?v=1646825979"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 4 reviews</div><h3>Magnetic Bracelet Set</h3><div class="custPriceTag">$32.80</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-braided-bracelet"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/red_goldbraidedcustomcoordinatesbracelet_500x.jpg?v=1677152973"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 9 reviews</div><h3>Custom Braided Bracelet</h3><div class="custPriceTag">$40.00</div></div></div></div><a href="https://www.customcuff.co/collections/best-sellers" class="custShopNowButtonOutline">SHOP NOW</a></div><div class="custVideoProducts"><div class="custPlayVideoSlider"><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374857-ygtapdqx/watermarked/540/2022-10-1717.50.342951126783254215931_7030873959.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/collections/necklaces-1/products/custom-plate-necklace?al_pg_id=f87ea663-0129-44d9-bbbd-e822f07b1ed2">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675177147-gqkjxanm/watermarked/540/6-10.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/collections/best-sellers/products/custom-necklace">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674742921-cafvtjuo/watermarked/540/VIDEO03.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/collections/best-sellers">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675176566-ftszmajw/watermarked/540/303729308_431649165694913_4990643942257213426_n.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/products/magnetic-chain-necklace-set">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675176756-uqnjpcyg/watermarked/540/9d2898e643ac4b81962f0e58a7d9a3f0.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/products/extra-matte-black-series-product">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675177051-vemkfozy/watermarked/540/6-21.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/collections/best-sellers">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2023/01/31/video-compiled/d742efbc22fd487293792f74ef0185ea/watermarked/540/d742efbc22fd487293792f74ef0185ea.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/products/custom-minimal-charm-necklace">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674739532-jpauyhtl/watermarked/540/07ab6f17343244b8b81d443c64911d24.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/products/carpe-diem-cuff">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374683-fndhlvpo/watermarked/540/2022-11-0214.14.162962644562200777292_7030873959.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/collections/gift-sets/products/2x-custom-necklace-set">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374886-jytsudig/watermarked/540/2022-01-1717.31.562753283949614885318_7030873959.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/products/custom-minimal-charm-necklace">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374705-hqkwiuoe/watermarked/540/2022-11-0117.11.372962009533729020191_7030873959.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/products/custom-minimal-charm-necklace">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674743673-hgmfswpn/watermarked/540/VIDEO05.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/products/custom-cuff">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374735-nmfpxvrk/watermarked/540/2022-10-2711.45.042958190955304536960_7030873959.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/pages/inspiration">Shop Now</a></div></div><div><div class="custVideoWrapper"><video controls><source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674743176-lvkqsghz/watermarked/540/VIDEO02.mp4" type="video/mp4"></video><a href="https://www.customcuff.co/collections/best-sellers/products/custom-necklace">Shop Now</a></div></div></div></div><div class="custWhatPeopleSay"><div class="custContainerFull"><h2>What people say</h2><div class="custCustmerFeedbackSlider"><div><div class="custFeedbackWrapper"><div class="custImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-1.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"><h5>Amazing</h5><p>Absolutely amazing! My partner and I are super impressed with the quality and we love them.</p><span>J.S</span></div></div><div><div class="custFeedbackWrapper"><div class="custImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-2.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"><h5>Perfect gift</h5><p>Got this for my dad. He is in love with it and he wears it since he put it on</p><span>Juan carlos Fava Gritti</span></div></div><div><div class="custFeedbackWrapper"><div class="custImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-1.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"><h5>Amazing</h5><p>Absolutely amazing! My partner and I are super impressed with the quality and we love them.</p><span>J.S</span></div></div><div><div class="custFeedbackWrapper"><div class="custImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-2.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"><h5>Perfect gift</h5><p>Got this for my dad. He is in love with it and he wears it since he put it on</p><span>Juan carlos Fava Gritti</span></div></div><div><div class="custFeedbackWrapper"><div class="custImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-1.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"><h5>Amazing</h5><p>Absolutely amazing! My partner and I are super impressed with the quality and we love them.</p><span>J.S</span></div></div><div><div class="custFeedbackWrapper"><div class="custImageBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/feedback-img-2.png"></div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"><h5>Perfect gift</h5><p>Got this for my dad. He is in love with it and he wears it since he put it on</p><span>Juan carlos Fava Gritti</span></div></div></div></div></div><div class="custCreatePerfectGift"><div class="custLeftLiting"><h2>Create The Perfect Gift In Minutes</h2><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/choose-product.svg"><div><h6>Choose Product</h6><p>Browse between our 50+ different custom products and choose your favorite(s).</p></div></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/engraving.svg"><div><h6>Add Your Engraving</h6><p>Share your special moment to be captured forever.</p></div></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/enjoy-all-time.svg"><div><h6>Enjoy For All Time</h6><p>Your Specially Customized jewelry arrives in the mail</p></div></li></ul></div><div class="custRightLiting"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/perfect-gift.jpg"></div></div><div class="custShopCategory"><div class="container"><h2>Shop By Collection</h2><div class="custShopCollection"><div><div class="custFrameBoxWrapper"><a href="https://www.customcuff.co/collections/red-collection"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/shop-red-collection.jpg"><h5>Red Collection</h5></a></div></div><div><div class="custFrameBoxWrapper"><a href="https://www.customcuff.co/products/black-series"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/matte-black-aeries.jpg"><h5>Matte Black Series</h5></a></div></div><div><div class="custFrameBoxWrapper"><a href="https://www.customcuff.co/collections/minimal-custom-jewelry"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/minimal-collection.jpg"><h5>Minimal Collection</h5></a></div></div></div><a href="https://www.customcuff.co/collections/all" class="custShopNowButtonOutline">SHOP ALL</a></div></div><div class="custBestSellersWrapper"><h2>Custom Gift Sets</h2><div class="custGiftSetsProducts"><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/2x-custom-cuff-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/cuffgiftset_500x.jpg?v=1645689490"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 2954 reviews</div><h3>Custom Cuff Gift Set</h3><div class="custPriceTag">$57.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/2x-custom-necklace-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/custombarnecklacegiftset_500x.jpg?v=1636822474"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 843 reviews</div><h3>Custom Bar Necklace Set</h3><div class="custPriceTag">$64.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/2x-custom-chain-bracelet-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/cu_500x.jpg?v=1645689410"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 162 reviews</div><h3>Custom Chain Bracelet Set</h3><div class="custPriceTag">$57.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-ring-gift-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customringgiftset_500x.jpg?v=1637836047"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 1 reviews</div><h3>Custom Ring Gift Set</h3><div class="custPriceTag">$79.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/magnet-matching-bracelet-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/CustomCuff_2021_55_blackropeamendedcopy_500x.jpg?v=1646825979"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 4 reviews</div><h3>Magnetic Bracelet Set</h3><div class="custPriceTag">$32.80</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-minimal-bracelet-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customminimalbraceletgiftset_500x.jpg?v=1645689660"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 0 reviews</div><h3>Custom Minimal Bracelet Set</h3><div class="custPriceTag">$57.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-minimal-necklace-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/minimalsquarecustompendantsilvergiftset_500x.jpg?v=1641925792"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 0 reviews</div><h3>Custom Minimal Necklace Set</h3><div class="custPriceTag">$58.00</div></div></div><div><div class="custBestProductsBlocks"><a href="https://www.customcuff.co/products/custom-figaro-bracelet-set"><img src="https://cdn.shopify.com/s/files/1/0026/0010/8078/products/customfigarobraceletset_500x.jpg?v=1642594457"></a><div class="custReviewRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rating-star.svg"> 0 reviews</div><h3>Custom Figaro Bracelet Set</h3><div class="custPriceTag">$63.00</div></div></div></div><a href="https://www.customcuff.co/collections/gift-sets" class="custShopNowButtonOutline">SHOP NOW</a></div><div class="custCustomcuffInstaWrapper"><h2>Follow Us @customcuff</h2><div class="custInstaCustomcuff"><div class="custFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff1.jpg"></div><div class="custFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff2.jpg"></div><div class="custFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff3.jpg"></div><div class="custFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff4.jpg"></div><div class="custFollowCustomcuff"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/follow-customcuff5.jpg"></div></div></div></div>').prependTo('#main');
       
        	// reposition reviews
	        if(jQuery('#main .jdgm-carousel-wrapper').length > 0){
		        jQuery('#main .jdgm-carousel-wrapper').parent('div').addClass('custParent');
		        jQuery('.custParent').insertBefore('.custCustomcuffInstaWrapper');
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
            if (typeof jQuery().slick !== undefined) {
              
              	jQuery(".custBestSellersProducts").slick({
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
	                            slidesToShow: 1
	                        }
	                    }
	                ]
	            });


            	jQuery(".custGiftSetsProducts").slick({
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
	                            slidesToShow: 1
	                        }
	                    }
	                ]
	            });

            	jQuery(".custShopCollection").slick({
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
	                            slidesToShow: 1
	                        }
	                    }
	                ]
	            });

	            jQuery(".custPopulerCategory").slick({
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
	                            slidesToShow: 1
	                        }
	                    }
	                ]
	            });

	            jQuery(".custPlayVideoSlider").slick({
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
	                            arrows: true,
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
	                            slidesToShow: 1
	                        }
	                    },
	                    {
	                        breakpoint: 540,
	                        settings: {
	                           
	                            centerMode: true,
	                            infinite: true,
	                            centerPadding: '170px',
	                            slidesToShow: 1
	                        }
	                    }
	                ]
	            }).on('afterChange', function(e, slick, currentSlide) {
	                jQuery('.custVideoWrapper video').trigger('pause');
	            });

           	 	manageVideoSlideNavArrows();

            	jQuery(".custCustmerFeedbackSlider").slick({
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
	                            slidesToShow: 2
	                        }
	                    },
	                    {
	                        breakpoint: 640,
	                        settings: {
	                            centerMode: true,
	                            centerPadding: '0',
	                            slidesToShow: 1
	                        }
	                    }
	                ]
	            });

            	jQuery(".custInstaCustomcuff").slick({
	                slidesToShow: 3,
	                dots: true,
	                arrows: true,
	                loop: true,
	                centerPadding: '300px',
	                infinite: true,
	                centerMode: true,
	                slidesToScroll: 1,
	                initialSlide: 2,
	                responsive: [{
	                        breakpoint: 1199,
	                        settings: {
	                            arrows: true,
	                            centerMode: true,
	                            centerPadding: '80px',
	                            slidesToShow: 3
	                        }
	                    },
	                    {
	                        breakpoint: 860,
	                        settings: {
	                            arrows: true,
	                            centerMode: true,
	                            centerPadding: '80px',
	                            slidesToShow: 3
	                        }
	                    },
	                    {
	                        breakpoint: 767,
	                        settings: {
	                            arrows: true,
	                            centerMode: true,
	                            centerPadding: '80px',
	                            slidesToShow: 2
	                        }
	                    }, ,
	                    {
	                        breakpoint: 640,
	                        settings: {
	                            arrows: false,
	                            centerMode: true,
	                            centerPadding: '0',
	                            slidesToShow: 1
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