var waitForjQuery = setInterval(function() {
if (typeof jQuery != 'undefined') {
	
	//to update Deep Sleep Bundle block
	updateNavDeepSleepBundle();
  
  	//add custom sticky footer banner
	addCustSticklyBanner();

	//replace the slider slide on the home page banner
	if(jQuery('.section-banner-tiles-large').length > 0){
		addCustProductBlockHp();
	}
	
	//add the new slide in the slider in the Deep Sleep tab section on collection page
	if(window.location.pathname.indexOf('/collections/all-products') !== -1){
		updateProductSlider();
	}
	

	function updateNavDeepSleepBundle(){

		if(jQuery('.navbar-nav .tile-collection-menu picture img').length > 0 ){
			
			jQuery('.navbar-nav .tile-collection-menu picture img').addClass('custNavImage');
			
			jQuery('.custNavImage').attr({
			  'data-src': 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg',
			  'srcset': 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg',
			  'src': 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg',
			  'data-srcset':'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg'});
		}

		if(jQuery('.navbar-nav .tile-collection-menu span:contains(COMING SOON)').length > 0 ){
			jQuery('.navbar-nav .tile-collection-menu span:contains(COMING SOON)').addClass('custNavBadge');
			jQuery('.navbar-nav .tile-collection-menu span:contains(COMING SOON)').text('41% Off!');
		}


		if(jQuery('.navbar-nav .tile-collection-menu .bg-gradient-bottom-white p:contains(Sign up today)').length > 0 ){
			jQuery('.navbar-nav .tile-collection-menu .bg-gradient-bottom-white p:contains(Sign up today)').text('Let\'s bundle up and save $$$');
		}

		if(jQuery('.navbar-nav .tile-collection-menu a.stretched-link').length > 0 ){
			jQuery('.navbar-nav .tile-collection-menu a.stretched-link').attr('href','https://trtltravel.com/products/deep-sleep-bundle');

		}
	}

	function addCustSticklyBanner() {
		
		if(jQuery('.custPromoSticklyFooterBanner').length == 0){
			jQuery('<div class="custPromoSticklyFooterBanner"><div class="custCloseIcon">✕</div><a class="bm-container-link" href="https://trtltravel.com/products/packed-to-perfection-bundle"></a><div class="custPromoBannerWrapper"><div class="custLeftSection"><div class="custBannerHeading"><a href="https://trtltravel.com/products/packed-to-perfection-bundle"><span>Save 35% </span> with the deep sleep bundle</a></div><div class="custSubHeading"><p>Perfect for people who want max comfort and relaxation while traveling.</p></div></div><div class="custCtaWrapper"><p><a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link btn btn-light">SHOP NOW</a></p></div><div class="imgWrapper"><a href="https://trtltravel.com/products/packed-to-perfection-bundle"><img class="imgDesktop" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-sticky.png" alt="deep-sleep-sticky"></a></div></div></div>').appendTo('body');
		}
	}
	

	function updateProductSlider(){
		
		//jQuery('.section-banner-products-recommended li.nav-item:contains(Frequent Flyer)').remove();
		//jQuery('.section-banner-products-recommended .tab-content .categories-tab-0').remove();

		//jQuery('.section-banner-products-recommended li.nav-item:contains(Deep Sleep)').first().show();

		//active show
		jQuery('.section-banner-products-recommended li.nav-item:contains(Deep Sleep) button')[0].click();


		if(jQuery('.section-banner-products-recommended .categories-tab-1 .swiper-slider').length > 0 ) {
		
            const swiper = document.querySelector('.section-banner-products-recommended .categories-tab-1 .swiper-slider').swiper;

			swiper.prependSlide('<div class="swiper-slide custSwiperProduct"><div class="tile-product position-relative card h-100 text-center custTitleProductCard"> <div class="position-relative"> <a href="https://trtltravel.com/products/deep-sleep-bundle"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg"> </a> </div><div class="card-body pb-0"> <span class=""><img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="star" width="16" height="16"></span> <a href="#"> <h5 class="card-title m-0">DEEP SLEEP BUNDLE</h5> </a> </div><div class="custCardPrice"><ul><li>$214.97</li><li>$129.96</li><li>YOU SAVE $90.01 </li></ul> </div></div></div>');
			
			swiper.updateSlides();	
			swiper.slideTo(0, 0);		
		}
	}


	function addCustProductBlockHp(){

		if(jQuery('.section-banner-tiles-large .container-xxl .row.d-lg-flex div a[href="/products/trtl-pillow-cool"]').parent('div').length > 0) {
			
			jQuery('.section-banner-tiles-large .container-xxl .row.d-lg-flex div a[href="/products/trtl-pillow-cool"]').parent('div').addClass('custDiv');

			if(jQuery('.custProductListOffers').length == 0) {
				jQuery('<div class="custProductListOffers"> <a href="https://trtltravel.com/products/deep-sleep-bundle" class="text-decoration-none"> <div class="tile-generic position-relative card h-100 text-center"> <span class="custLimitedOffer">Limited Time Offer</span> <div class="position-relative"> <div class="image-wrapper overflow-hidden "> <picture class="d-block"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg"> </picture> </div><div class="position-absolute bottom-0 start-50 translate-middle-x"> <span class="flashtag rounded-2 opacity-100 mb-3" style="color: #000000; background-color: #fff;">SAVE 20%</span> </div></div><div class="card-body pb-0"> <div class="row g-0 justify-content-center align-items-center flex-nowrap px-2"> <div class="col-auto"> <h5 class="mb-0">Deep Sleep Bundle</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Great sleep and savings for all the family.</p></div></div></a></div>').insertAfter('.custDiv');
					jQuery('.custDiv').remove();
			}
		}

		if(jQuery(window).width() <= 767){
			
			if(jQuery('.section-banner-tiles-large-slider').length > 0) {

				jQuery('.section-banner-tiles-large-slider .swiper-slide a[href="/products/trtl-pillow-cool"]').parents('.swiper-slide').addClass('custCoolPillow');

				jQuery('.section-banner-tiles-large-slider .custCoolPillow a').replaceWith('<div class="custProductListOffers"> <a href="https://trtltravel.com/products/deep-sleep-bundle" class="text-decoration-none"> <div class="tile-generic position-relative card h-100 text-center"> <span class="custLimitedOffer">Limited Time Offer</span> <div class="position-relative"> <div class="image-wrapper overflow-hidden "> <picture class="d-block"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/TPC_SLEEPING_7b01210e-64ca-4e77-905b-bcf04359116d_300x.jpg?v=1671452020"> </picture> </div><div class="position-absolute bottom-0 start-50 translate-middle-x"> <span class="flashtag rounded-2 opacity-100 mb-3" style="color: #000000; background-color: #fff;">SAVE 20%</span> </div></div><div class="card-body pb-0"> <div class="row g-0 justify-content-center align-items-center flex-nowrap px-2"> <div class="col-auto"> <h5 class="mb-0">Deep Sleep Bundle</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Great sleep and savings for all the family.</p></div></div></a></div>');
			}
		}
	}

	jQuery(document).on('click','.custPromoSticklyFooterBanner .custCloseIcon', function(){
		jQuery('.custPromoSticklyFooterBanner').fadeOut();
	});


	clearInterval(waitForjQuery);
  }
}, 50);