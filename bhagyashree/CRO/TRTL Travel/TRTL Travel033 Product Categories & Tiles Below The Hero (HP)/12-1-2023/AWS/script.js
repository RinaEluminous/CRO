var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		custProductCategoryTiles();

		function custProductCategoryTiles(){

			//add custom class to banner
			if(jQuery('.shopify-section.section-banner-tiles-large .image-cover + .container-xxl.position-relative').length > 0 ){
				jQuery('.shopify-section.section-banner-tiles-large .image-cover + .container-xxl.position-relative').addClass('custHpBannerWrapper');
			}

			//banner content
			if(jQuery('.section-banner-tiles-large h2.display-4').length > 0){
				jQuery('.section-banner-tiles-large h2.display-4').text('STILLNESS AT 35,000 FEET');
			}

			if(jQuery('.section-banner-tiles-large h4').length > 0){
				jQuery('.section-banner-tiles-large h4').text('THE MOST COMFORTABLE WAY TO TRAVEL, ANYWHERE');
			}

			//banner image
			if(jQuery('.custHeroBannerImg').length == 0){
				jQuery('<img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/category-product-tiles-banner-img.png" class="custHeroBannerImg img-fluid " alt="STILLNESS AT 35,000 FEET">').insertAfter('.shopify-section.section-banner-tiles-large .image-cover picture');
			}

			//custom category tiles
			if(jQuery('.custBetterSleepWraper').length == 0){
				jQuery('<div class="custProductTilesWraperHP"> <div class="custPartnerWraperProductTiles"> <div class="container"> <div class="swiper custPartnerSwiperTiles"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="cusrPartnerBoxTiles"> <p class="fs-7"> "The Trtl Pillow will be your sleep savior" </p><div style="width:100px;" class="mx-auto"> <div id="image-wrapper-350283" class="image-wrapper overflow-hidden "> <picture class="d-block"> <img data-src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_2_100x.png?v=1653911241" data-srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_2_100x.png?v=1653911241 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_2_100x@2x.png?v=1653911241 2x" loading="lazy" class="img-fluid lazyload loaded" alt="" src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_2_100x.png?v=1653911241" srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_2_100x.png?v=1653911241 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_2_100x@2x.png?v=1653911241 2x"> </picture> </div></div></div></div><div class="swiper-slide"> <div class="cusrPartnerBoxTiles"> <p class="fs-7"> "Makes the middle seat feel like first class" </p><div style="width:100px;" class="mx-auto"> <div id="image-wrapper-350283" class="image-wrapper overflow-hidden "> <picture class="d-block"> <img data-src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_9_100x.png?v=1653912981" data-srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_9_100x.png?v=1653912981 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_9_100x@2x.png?v=1653912981 2x" loading="lazy" class="img-fluid lazyload loaded" alt="" src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_9_100x.png?v=1653912981" srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_9_100x.png?v=1653912981 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_9_100x@2x.png?v=1653912981 2x"> </picture> </div></div></div></div><div class="swiper-slide"> <div class="cusrPartnerBoxTiles"> <p class="fs-7"> "I’ve truly never slept better on a plane" </p><div style="width:100px;" class="mx-auto"> <div id="image-wrapper-350283" class="image-wrapper overflow-hidden "> <picture class="d-block"> <img data-src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x.png?v=1653912045" data-srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x.png?v=1653912045 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x@2x.png?v=1653912045 2x" loading="lazy" class="img-fluid lazyload loaded" alt="" src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x.png?v=1653912045" srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x.png?v=1653912045 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x@2x.png?v=1653912045 2x"> </picture> </div></div></div></div><div class="swiper-slide"> <div class="cusrPartnerBoxTiles"> <p class="fs-7"> "Its design is unique to anything else" </p><div style="width:100px;" class="mx-auto"> <div id="image-wrapper-350283" class="image-wrapper overflow-hidden "> <picture class="d-block"> <img data-src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_4_100x.png?v=1653911559" data-srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_4_100x.png?v=1653911559 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_4_100x@2x.png?v=1653911559 2x" loading="lazy" class="img-fluid lazyload loaded" alt="" src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_4_100x.png?v=1653911559" srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_4_100x.png?v=1653911559 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_4_100x@2x.png?v=1653911559 2x"> </picture> </div></div></div></div><div class="swiper-slide"> <div class="cusrPartnerBoxTiles"> <p class="fs-7"> "Don’t know how I ever flew without it" </p><div style="width:100px;" class="mx-auto"> <div id="image-wrapper-350283" class="image-wrapper overflow-hidden "> <picture class="d-block"> <img data-src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x.png?v=1653912174" data-srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x.png?v=1653912174 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x@2x.png?v=1653912174 2x" loading="lazy" class="img-fluid lazyload loaded" alt="" src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x.png?v=1653912174" srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x.png?v=1653912174 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x@2x.png?v=1653912174 2x"> </picture> </div></div></div></div><div class="swiper-slide"> <div class="cusrPartnerBoxTiles"> <p class="fs-7"> "I never travel without my Trtl Pillow" </p><div style="width:100px;" class="mx-auto"> <div id="image-wrapper-350283" class="image-wrapper overflow-hidden "> <picture class="d-block"> <img data-src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x.png?v=1653912111" data-srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x.png?v=1653912111 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x@2x.png?v=1653912111 2x" loading="lazy" class="img-fluid lazyload loaded" alt="" src="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x.png?v=1653912111" srcset="//cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x.png?v=1653912111 1x, //cdn.shopify.com/s/files/1/0071/0911/6022/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x@2x.png?v=1653912111 2x"> </picture> </div></div></div></div></div><div class="swiper-pagination"></div></div></div></div><div class="custBetterSleepWraper"> <div class="container"> <h2>BETTER SLEEP STARTS HERE</h2> <div class="custBetterSleepTabs"> <div class="tabs"> <div class="custTab active" id="travel_pillows">TRAVEL PILLOWS</div><div class="custTab" id="bundles">BUNDLES <span>Save 15%</span> </div><div class="custTab" id="travel_comfort">TRAVEL COMFORT</div><div class="custTab" id="accessories">ACCESSORIES</div></div><div class="custTabScroller"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/mobile_tab_slider.png" alt="BETTER SLEEP STARTS HERE"> </div></div><div class="custBetterSleepTabsContent"> <div class="custTabContent" id="travel_pillows_content" cust-category="pillows"> <div class="swiper custBetterSleepItems travel_pillows"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/trtl-travel-pillow"> <div class="custItemImageBox"> <div class="custBadge bestseller"> <span>BEST SELLER</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPOSLEEPING_300x300@2x.jpg?v=1671526592" alt="TRAVEL PILLOW"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">TRAVEL PILLOW</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">The most comfortable sleep you\'ll ever have traveling </p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/trtl-pillow-plus"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPPSLEEPING_300x300@2x.jpg?v=1671526565" alt="PILLOW PLUS"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">PILLOW PLUS</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">The world\'s first fully adjustable travel pillow that fits all heights</p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/trtl-pillow-cool"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPCSLEEPING_300x300@2x.jpg?v=1671526549" alt="PILLOW COOL"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">PILLOW COOL</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Wake up cool, calm, and collected.</p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/trtl-pillow-junior"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TRTLTravelPillowJunior-zebra-2_300x300@2x.jpg?v=1671526560" alt="PILLOW JUNIOR"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">PILLOW JUNIOR</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Help your kids sleep easier (ages 8+)</p></div></a> </div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div><div class="custTabContent" id="bundles_content" cust-category="bundles"> <div class="swiper custBetterSleepItems bundles"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/all-aboard-bundle"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_300x300@2x.png?v=1670591805" alt="All Aboard Bundle"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">All Aboard Bundle</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">The most comfortable sleep you and your kids will ever have travelling </p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/all-wrapped-up-bundle"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPO_PP_WRAP_BREAKDOWN_edd7e160-22df-427c-95a7-ea80a30dff51_300x300@2x.png?v=1670591880" alt="All Wrapped Up Bundle"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">All Wrapped Up Bundle</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Wake up refreshed at your destination</p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/packed-to-perfection-bundle"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPO_PP_BREAKDOWN_d5792142-8f2b-4fab-9921-2eac6c548abe_300x300@2x.png?v=1670591848" alt="Packed-To-Perfection Bundle"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">Packed-To-Perfection Bundle</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">The pillow for travelers who want a real sleeping experience</p></div></a> </div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div><div class="custTabContent" id="travel_comfort_content" cust-category="comfort"> <div class="swiper custBetterSleepItems travel_comfort"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/trtl-pillow-cool"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPMBlackcopy_620x.png?v=1671526572" alt="TRTL PROTECT FACE MASK"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">TRTL PROTECT FACE MASK</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Three ways to wear - Mask, Shield, Scarf</p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/trtl-travel-socks"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/IMG_9043cutcopy_1_300x300@2x.jpg?v=1671526496" alt="TRTL COMPRESSION SOCKS"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">TRTL COMPRESSION SOCKS</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Made with COOLMAX® for a comfortable fit and experience</p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/trtl-wrap-travel-blanket"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TRTLWrap-2copy_1_300x300@2x.png?v=1671526607" alt="TRTL WRAP"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">TRTL WRAP</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Cocoons your body for a secure feeling that aids sleep while traveling</p></div></a> </div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div><div class="custTabContent" id="accessories_content" cust-category="accessories"> <div class="swiper custBetterSleepItems accessories"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/trtl-packing-pods-packing-system"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/PPgreyBKGsquare_300x300@2x.png?v=1671526509" alt="TRTL PACKING PODS"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">TRTL PACKING PODS</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">The Packing Cube, Reinvented </p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/luggage-tag"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/DSC09493_bbe50ca3-0148-462d-a16c-fa16ac9cbc45_300x300@2x.jpg?v=1671526502" alt="TRTL LUGGAGE TAG"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">TRTL LUGGAGE TAG</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Make sure your bags and cases are easy to identify</p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/passport-cover"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/DSC09507_300x300@2x.jpg?v=1671526541" alt="TRTL PASSPORT COVER"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">TRTL PASSPORT COVER</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Keep all your essential travel documents safely in one place</p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/trtl-travel-wallet"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/PASSPORT_WALLET_300x300@2x.jpg?v=1671526597" alt="TRTL TRAVEL WALLET"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">TRTL TRAVEL WALLET</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Perfect travel companion and makes it easy to keep everything you need close to hand</p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/hand-sanitation-rub-5-pack"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/DSC09410_300x300@2x.jpg?v=1671526403" alt="REFRESH ALCOHOL RUB 80% - 5 PACK"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">REFRESH ALCOHOL RUB 80% - 5 PACK</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Keep your hands fresh and clean with a lemon scent</p></div></a> </div></div><div class="swiper-slide"> <div class="custItemBox"> <a href="https://trtltravel.com/products/refresh-70-antibacterial-hand-gel-50ml-5-pack"> <div class="custItemImageBox"> <div class="custBadge"> <span>15% Off!</span> </div><img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/DSC09382copy_300x300@2x.png?v=1671526483" alt="REFRESH ANTIBACTERIAL HAND GEL 70% - 5 PACK"> </div><div class="custCardBody"> <div class="row g-0 justify-content-center align-items-center flex-nowrap"> <div class="col-auto"> <h5 class="mb-0">REFRESH ANTIBACTERIAL HAND GEL 70% - 5 PACK</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Our unscented gel formula provides full coverage for total protection</p></div></a> </div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div></div><div class="custShopAllPillowBtn"> <a href="https://trtltravel.com/collections/new-years-sale" class=""> <span>Shop All pillows</span> </a> </div></div></div></div>').insertAfter('#MainContent div[id$=__partners]');

				jQuery('.custTabContent:eq(0)').show();

			    var intSwiperCnt = 0;
			    var intSwiperInterval = setInterval(function () {
			      	intSwiperCnt += 1;

		      	 	if (typeof Swiper !== 'undefined'){
				        var swiper = new Swiper(".custBetterSleepItems", {
                            loop: false,
                            slidesPerView: "auto",
                            spaceBetween: 12,
                            centeredSlides: false,
							centeredSlidesBounds: false,
							loopFillGroupWithBlank: false,
                            navigation: {
                              nextEl: ".custBetterSleepItems .swiper-button-next",
                              prevEl: ".custBetterSleepItems .swiper-button-prev",
                            },
                            breakpoints: {
                            576: {
                              slidesPerView: 2,
                              spaceBetween: 18
                            },
                            992: {
                              slidesPerView: 4,
                              spaceBetween: 24
                            }
                          }
                        });

						//custome partner swiper slider
						var swiper = new Swiper(".custPartnerSwiperTiles", {
							slidesPerView: 2,
							pagination: {
								el: ".swiper-pagination",
								clickable: true,
							},
							breakpoints: {
								768: {
									slidesPerView: 6
								},
							},
						});

				        clearInterval(intSwiperInterval);
			      	}

			      	if(intSwiperCnt === 100){
			      		clearInterval(intSwiperInterval);
			      	}

			    },100);
			}
		}

		//On tab click show relevant category products and hide others
		jQuery(document).on("click",".custBetterSleepWraper .custBetterSleepTabs .tabs .custTab", function () {
			var strId 	   = jQuery(this).attr('id');
			jQuery('.custTabContent').hide();
			jQuery('.custBetterSleepWraper .custBetterSleepTabs .tabs .custTab.active').removeClass('active');
			jQuery('#'+strId+'_content').show();
			jQuery(this).addClass('active');

			var strCategory = jQuery('#'+strId+'_content').attr('cust-category');
			jQuery('.custBetterSleepWraper .custShopAllPillowBtn span').text('Shop All '+strCategory);
			jQuery('.custBetterSleepWraper .custShopAllPillowBtn a').attr('href','https://trtltravel.com/collections/new-years-sale#'+strCategory);
		});

		//On horizontal scroll tabs hide/show scroll arrow
	    var prodCategoryTabsElement = document.querySelector('.custBetterSleepTabs');
	 	var element = document.querySelector('#accessories');
	  	prodCategoryTabsElement.addEventListener('scroll', function (event) {
	    	onScrollTabArrowHideShow();
	  	});

	   //On arrow click, scroll tabs
	   jQuery(document).on('click','.custBetterSleepWraper .custBetterSleepTabs .custTabScroller',function (){
	      event.preventDefault();
	      jQuery('.custBetterSleepWraper .custBetterSleepTabs').animate({
	        scrollLeft: "+=150px"
	      }, "slow");
	      onScrollTabArrowHideShow();
	   });


	   //To hide show arrow while scrolling tabs
	   function onScrollTabArrowHideShow(){
	   	if(jQuery('.custBetterSleepWraper .custBetterSleepTabs .tabs').width() >jQuery('.custBetterSleepWraper .custBetterSleepTabs').width() ){
	   		if(document.querySelector('.custTabScroller') !== null){
		        var inRightOffset = window.innerWidth - element.getBoundingClientRect().right+10;
		        inRightOffset = parseInt(inRightOffset);

		        if(inRightOffset > 0){
		            document.querySelector(".custTabScroller").style.display = 'none';
		        }
		        else{
		          document.querySelector(".custTabScroller").style.display = 'block';
		        }
		    }
	   	}
	   }

	clearInterval(waitForjQuery);
  }
}, 50);