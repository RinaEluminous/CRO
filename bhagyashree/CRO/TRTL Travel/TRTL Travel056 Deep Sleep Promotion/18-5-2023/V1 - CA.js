var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

        var strUrl = "https://ca.trtltravel.com/products/deep-sleep-bundle";

        //add custom sticky footer banner
        addCustStickyBanner();

        //replace the slider slide on the home page banner
        if (jQuery('.section-banner-tiles-large').length > 0) {
            addCustProductBlockHp();
        }

        //add the new slide in the slider in the Deep Sleep tab section on collection page
        /*if (window.location.pathname.indexOf('/collections/all-products') !== -1) {
            updateProductSlider();
        }*/

        function addCustStickyBanner() {

            if (jQuery('.custPromoSticklyFooterBanner').length == 0) {
                jQuery('<div class="custPromoSticklyFooterBanner"><div class="custCloseIcon">✕</div><a class="bm-container-link" href="' + strUrl + '"></a><div class="custPromoBannerWrapper"><div class="custLeftSection"><div class="custBannerHeading"><a href="' + strUrl + '"><span>Save 30% </span> with the deep sleep bundle</a></div><div class="custSubHeading"><p>Perfect for people who want max comfort and relaxation while traveling.</p></div></div><div class="custCtaWrapper"><p><a href="' + strUrl + '" class="stretched-link btn btn-light">SHOP NOW</a></p></div><div class="imgWrapper"><a href="' + strUrl + '"><img class="imgDesktop" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-sticky.png" alt="deep-sleep-sticky"></a></div></div></div>').appendTo('body');
            }
        }


        /*function updateProductSlider() {
            //active show
            jQuery('.section-banner-products-recommended li.nav-item:contains(Deep Sleep) button')[0].click();

            if (jQuery('.section-banner-products-recommended .categories-tab-1 .swiper-slider').length > 0) {

                const swiper = document.querySelector('.section-banner-products-recommended .categories-tab-1 .swiper-slider').swiper;

                swiper.prependSlide('<div class="swiper-slide custSwiperProduct"><div class="tile-product position-relative card h-100 text-center custTitleProductCard"> <div class="position-relative"> <a href="' + strUrl + '"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg"> </a> <span class="rounded-2 fs-7 px-4 py-2 custNavBadge">30% Off!</span></div><div class="card-body pb-0"> <span class=""><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-bundles-ratings-stars.svg" alt="rating star"></span> <a href="' + strUrl + '"> <h5 class="card-title m-0">DEEP SLEEP BUNDLE</h5> </a> </div><div class="custCardPrice"><ul><li>CAD 347.45</li><li>CAD 243.22</li><li>YOU SAVE CAD 104.24 </li></ul> </div><a class="d-md-none btn btn-secondary px-4 mt-2 w-100" href="' + strUrl + '">SHOP NOW</a></div></div>');

                swiper.updateSlides();
                swiper.slideTo(0, 0);
            }
        }*/


        function addCustProductBlockHp() {

            if (jQuery('.section-banner-tiles-large .container-xxl .row.d-lg-flex div.tile-generic:contains(PILLOW COOL)').parent('div:contains(PILLOW COOL)').length > 0) {

                jQuery('.section-banner-tiles-large .container-xxl .row.d-lg-flex div.tile-generic:contains(PILLOW COOL)').parent('div:contains(PILLOW COOL)').addClass('custDiv');

                if (jQuery('.custProductListOffers').length == 0) {
                    jQuery('<div class="custProductListOffers"> <a href="' + strUrl + '" class="text-decoration-none"> <div class="tile-generic position-relative card h-100 text-center"> <span class="custLimitedOffer">Limited Time Offer</span> <div class="position-relative"> <div class="image-wrapper overflow-hidden "> <picture class="d-block"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg"> </picture> </div><div class="position-absolute bottom-0 start-50 translate-middle-x"> <span class="flashtag rounded-2 opacity-100 mb-3">SAVE 30%</span> </div></div><div class="card-body pb-0"> <div class="row g-0 justify-content-center align-items-center flex-nowrap px-2"> <div class="col-auto"> <h5 class="mb-0">Deep Sleep Bundle</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Great sleep and savings for all the family.</p></div></div></a></div>').insertAfter('.custDiv');
                    jQuery('.custDiv').remove();
                }
            }

            if (jQuery(window).width() <= 767) {

                if (jQuery('.section-banner-tiles-large-slider').length > 0) {

                   jQuery('.section-banner-tiles-large-slider .swiper-slide:contains(PILLOW COOL)').addClass('custCoolPillow');

                    jQuery('.section-banner-tiles-large-slider .custCoolPillow .tile-generic').replaceWith('<div class="custProductListOffers"> <a href="' + strUrl + '" class="text-decoration-none"> <div class="tile-generic position-relative card h-100 text-center"> <span class="custLimitedOffer">Limited Time Offer</span> <div class="position-relative"> <div class="image-wrapper overflow-hidden "> <picture class="d-block"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg"> </picture> </div><div class="position-absolute bottom-0 start-50 translate-middle-x"> <span class="flashtag rounded-2 opacity-100 mb-3">SAVE 20%</span> </div></div><div class="card-body pb-0"> <div class="row g-0 justify-content-center align-items-center flex-nowrap px-2"> <div class="col-auto"> <h5 class="mb-0">Deep Sleep Bundle</h5> </div><div class="col-auto lh-80"> <i class="fa-solid fs-5 fa-arrow-right ms-2"></i> </div></div></div><div class="card-footer py-3"> <p class="text-grey fs-7 m-0">Great sleep and savings for all the family.</p></div></div></a></div>');
                }
            }
        }

        jQuery(document).on('click', '.custPromoSticklyFooterBanner .custCloseIcon', function() {
            jQuery('.custPromoSticklyFooterBanner').fadeOut();
        });


        clearInterval(waitForjQuery);
    }
}, 50);