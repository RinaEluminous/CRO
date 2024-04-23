var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        jQuery('head').append("<script src='https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/jquery.countdown.min.js'></script>");
        var strURL = window.location.href;
        if (strURL.indexOf('collections/all-products') > 0) {
            jQuery('body').addClass('custCollectionPage');
            addStickyOnCollectionAll();
        }
        if (jQuery('body.template-index').length > 0) {
            addStickyFooterOnHomePage();
        }

        if (strURL.indexOf('collections/halloween-sale') > 0) {
            jQuery('body').addClass('custHalloweenSalePage');
            addCustHtmlOnHalloweenSale();
        }

        if (strURL.indexOf('/products/') > 0) {
            addStickyHtmlOnPdp();
        }

        function addStickyHtmlOnPdp() {

            if (jQuery('body #MainContent').length > 0 && jQuery('.custPDPHalloweenOfferMain').length == 0) {
                jQuery('<div class="custPDPHalloweenOfferMain"><div class="container-xxl position-relative"><div class="pt-2 pb-2 row"><div class="custGetOfferDiv"><div class="spiderIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/spider.svg" alt="spider"></div><div class="offerBadge"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="black"></path><script xmlns=""></script></svg><span class="limited">LIMITED TIME</span><span class="halloween_sale">Halloween Sale</span><span class="only">ONLY</span></div><div class="custLimitedOffer"><span class="halloweenSaleTitle">Halloween Sale!</span> Get UP TO <span><span><div class="batIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bat.svg" alt="bat"></div>25% OFF</span> + <span>Free GIFT</span></span></div><div class="custOfferTimer"><div class="custTimerTitle">Applied automatically in the cart!</div><div class="timerMain"><div class="timerBox day">0<span>Days</span></div><div class="timerBox hours">0<span>Hours</span></div><div class="timerBox minutes">0<span>Mins</span></div><div class="timerBox secs">0<span>Secs</span></div></div></div><div class="ghostIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/ghost.svg" alt="ghost"></div></div></div></div></div>').prependTo('body #MainContent');
            }

            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    var startdate = "2023/10/19 09:30:00 UTC",
                        enddate = "2023/11/02 00:00:00 UTC";
                    if (new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
                        jQuery('.custPDPHalloweenOfferMain .timerMain').countdown(enddate, function(event) {
                            jQuery('.custPDPHalloweenOfferMain .timerMain .timerBox.day').html(event.strftime('%D') + '<span>Days</span>');
                            jQuery('.custPDPHalloweenOfferMain .timerMain .timerBox.hours').html(event.strftime('%H') + '<span>Hours</span>');
                            jQuery('.custPDPHalloweenOfferMain .timerMain .timerBox.minutes').html(event.strftime('%M') + '<span>Mins</span>');
                            jQuery('.custPDPHalloweenOfferMain .timerMain .timerBox.secs').html(event.strftime('%S') + '<span>Secs</span>');
                        });
                    }
                    clearInterval(timerInterval);
                }
            }, 100);

        }


        function addCustHtmlOnHalloweenSale() {

            if (jQuery('body.template-collection #MainContent').length > 0 && jQuery('.custHalloweenSaleWrapper').length == 0) {

                jQuery('<div class="custHalloweenSaleWrapper"> <div class="custHalloweenCollectionWrapper"> <div class="custHalloweenCollectionHero2"> <div class="container-xxl position-relative"> <div class="pt-2 pb-2 row"> <div class="custGetOfferBannerMain"> <div class="custColLeft"> <div class="custGetOfferDiv"><span class="offerBadge"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style=""> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="black"></path> <script xmlns=""></script> </svg>LIMITED TIME<span class="only">ONLY</span></span> <div class="custOfferTimer"> <div class="custTimerTitle">Deal ends in:</div><div class="timerMain"> <div class="timerBox day">0<span>Days</span></div><div class="timerBox hours">0<span>Hours</span></div><div class="timerBox minutes">0<span>Mins</span></div><div class="timerBox secs">0<span>Secs</span></div></div></div></div><div class="custLimitedOffer">HALLOWEEN SALE! <span><span> <div class="batIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bat.svg" alt="bat"></div>GET UP TO 25% OFF </span> + <span>Free GIFT</span></span></div></div><div class="custColRight"> <div class="ghostIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/ghost.svg" alt="ghost"></div></div></div></div><div class="spiderIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/spider.svg" alt="spider"></div></div></div></div><div class="custTravelBuddiesWrapper"> <div class="container"> <h3>Treat yourself or your travel buddies to the gift of restful sleep.</h3> <div class="swiper travelBuddiesSwiper"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="custItemMain popular"> <div class="popularTag">MOST POPULAR<span class="owl-icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/owl-icon.svg"></span></div><div class="productTile"> <div class="productTag">10% OFF</div><a href="https://trtltravel.com/products/trtl-travel-pillow" class="productImg"><img src="https://trtltravel.com/cdn/shop/products/TPOSLEEPING_69cf0c63-c67d-41db-9fe3-d1acfb07aec6_620x.jpg?v=1675342145" alt="" class="img-fluid"></a> <div class="productDetailMain"> <div class="ratings"> <div class="ratingsMain"><span class="greyStars"></span><span class="yellowStars" style="width:100%"></span></div></div><a href="https://trtltravel.com/products/trtl-travel-pillow" class="productHeading">TRTL TRAVEL PILLOW</a> <div class="productDetailFooter"> <div class="cancelPrice">$49.99</div><div class="realPrice">$44.99</div><div class="discountBadge">YOU SAVE $5.00</div></div></div></div></div></div><div class="swiper-slide"> <div class="custItemMain"> <div class="popularTag"></div><div class="productTile"> <div class="productTag">20% OFF</div><a href="https://trtltravel.com/products/snooze-bundle" class="productImg"><img src="https://trtltravel.com/cdn/shop/files/TPCSMBREAKDOWNNEWVERSION2_300x300@2x.png?v=1684222682" alt="" class="img-fluid"></a> <div class="productDetailMain"> <div class="ratings"> <div class="ratingsMain"><span class="greyStars"></span><span class="yellowStars" style="width:80%"></span></div></div><a href="https://trtltravel.com/products/snooze-bundle" class="productHeading">SNOOZE BUNDLE</a> <div class="productDetailFooter"> <div class="cancelPrice">$165.25</div><div class="realPrice">$132.20</div><div class="discountBadge">YOU SAVE $33.05</div></div></div></div></div></div><div class="swiper-slide"> <div class="custItemMain"> <div class="popularTag"></div><div class="productTile"> <div class="productTag">10% OFF</div><a href="https://trtltravel.com/products/trtl-pillow-cool" class="productImg"><img src="https://trtltravel.com/cdn/shop/products/TPCSLEEPING_400x.jpg?v=1671526549" alt="" class="img-fluid"></a> <div class="productDetailMain"> <div class="ratings"> <div class="ratingsMain"><span class="greyStars"></span><span class="yellowStars" style="width:100%"></span></div></div><a href="https://trtltravel.com/products/trtl-pillow-cool" class="productHeading">TRTL PILLOW COOL</a> <div class="productDetailFooter"> <div class="cancelPrice">$69.99</div><div class="realPrice">$62.99</div><div class="discountBadge">YOU SAVE $7.00</div></div></div></div></div></div><div class="swiper-slide"> <div class="custItemMain"> <div class="popularTag"></div><div class="productTile"> <div class="productTag">10% OFF</div><a href="https://trtltravel.com/products/trtl-pillow-plus" class="productImg"><img src="https://trtltravel.com/cdn/shop/products/TPPSLEEPING_d30ff7c0-2d4d-4841-8590-06199b4497e1_620x.jpg?v=1675342261" alt="" class="img-fluid"></a> <div class="productDetailMain"> <div class="ratings"> <div class="ratingsMain"><span class="greyStars"></span><span class="yellowStars" style="width:100%"></span></div></div><a href="https://trtltravel.com/products/trtl-pillow-plus" class="productHeading">TRTL PILLOW plus</a> <div class="productDetailFooter"> <div class="cancelPrice">$89.99</div><div class="realPrice">$80.99</div><div class="discountBadge">YOU SAVE $9.00</div></div></div></div></div></div><div class="swiper-slide"> <div class="custItemMain"> <div class="popularTag"></div><div class="productTile"> <div class="productTag">25% OFF</div><a href="https://trtltravel.com/products/vip-family-bundle-free-gift" class="productImg"><img src="https://trtltravel.com/cdn/shop/files/TPC_TPC_2xTPJ_Aqua_620x.jpg" alt="" class="img-fluid"></a> <div class="productDetailMain"> <div class="ratings"> <div class="ratingsMain"><span class="greyStars"></span><span class="yellowStars" style="width:100%"></span></div></div><a href="https://trtltravel.com/products/vip-family-bundle-free-gift" class="productHeading">VIP FAMILY BUNDLE + FREE GIFT</a> <div class="productDetailFooter"> <div class="cancelPrice">$179.96</div><div class="realPrice">$134.97</div><div class="discountBadge">YOU SAVE $44.99</div></div></div></div></div></div><div class="swiper-slide"> <div class="custItemMain"> <div class="popularTag"></div><div class="productTile"> <div class="productTag">20% OFF</div><a href="https://trtltravel.com/products/travel-essentials-bundle-free-gift" class="productImg"><img src="https://trtltravel.com/cdn/shop/files/TPO_grey_PP_620x.jpg" alt="" class="img-fluid"></a> <div class="productDetailMain"> <div class="ratings"> <div class="ratingsMain"><span class="greyStars"></span><span class="yellowStars" style="width:100%"></span></div></div><a href="https://trtltravel.com/products/travel-essentials-bundle-free-gift" class="productHeading">TRAVEL ESSENTIALS BUNDLE + FREE GIFT</a> <div class="productDetailFooter"> <div class="cancelPrice">$119.98</div><div class="realPrice">$95.98</div><div class="discountBadge">YOU SAVE $24.00</div></div></div></div></div></div><div class="swiper-slide"> <div class="custItemMain"> <div class="popularTag"></div><div class="productTile"> <div class="productTag">20% OFF</div><a href="https://trtltravel.com/products/mini-family-bundle-free-gift" class="productImg"><img src="https://trtltravel.com/cdn/shop/files/TPC_TPJ_Aqua_620x.jpg" alt="" class="img-fluid"></a> <div class="productDetailMain"> <div class="ratings"> <div class="ratingsMain"><span class="greyStars"></span><span class="yellowStars" style="width:100%"></span></div></div><a href="https://trtltravel.com/products/mini-family-bundle-free-gift" class="productHeading">MINI FAMILY BUNDLE + FREE GIFT</a> <div class="productDetailFooter"> <div class="cancelPrice">$89.98</div><div class="realPrice">$71.98</div><div class="discountBadge">YOU SAVE $18.00</div></div></div></div></div></div></div><div class="custTravelBuddiesNav"> <div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div></div></div><div class="custDeepBundleMain"> <div class="container"> <div class="row flex-md-row-reverse"> <div class="col-md-5"> <div class="custDeepBundleSlider"> <div class="budleTag">EXTRA 20% OFF</div><div class="swiper bundleSwiper"> <div class="swiper-wrapper"> <div class="swiper-slide"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bundle_slider_img_1.png" class="img-fluid" alt=""></div><div class="swiper-slide"><img src="https://trtltravel.com/cdn/shop/files/DSB_DAYTIME1x1_620x.jpg?v=1684222761" class="img-fluid" alt=""></div><div class="swiper-slide"><img src="https://trtltravel.com/cdn/shop/files/TPC_SM_FLASK_SOCKSX2_MWRAP_V2_6e30df67-b05b-4632-85d6-c013e68f87be_620x.jpg?v=1684222761" class="img-fluid" alt=""></div><div class="swiper-slide"><img src="https://trtltravel.com/cdn/shop/files/TPC_SM_FLASK_SOCKSX2_MWRAP_FLATLAY_V2_2b009739-9ff8-4434-b842-e16a5a96811e_620x.jpg?v=1684222761" class="img-fluid" alt=""></div><div class="swiper-slide"><img src="https://trtltravel.com/cdn/shop/files/4_4d33ca19-81cd-4382-b791-e7667c8d8bf2_620x.png?v=1684222761" class="img-fluid" alt=""></div><div class="swiper-slide"><img src="https://trtltravel.com/cdn/shop/files/0-TPCSLEEPING_d3fa8233-0caa-4719-b4e1-f7ccb6127917_620x.jpg?v=1684222761" class="img-fluid" alt=""></div><div class="swiper-slide"><img src="https://trtltravel.com/cdn/shop/files/2_DSC04271_c6c2d127-b95f-4135-9a55-a56fedde2a56_620x.jpg?v=1684222761" class="img-fluid" alt=""></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="swiper-pagination"></div></div></div></div><div class="col-md-7"> <div class="custDeepContent"> <h2>The Deep Sleep Bundle</h2> <p>Experience even more<b> significant savings</b> with<b> an extra 20% discount</b> stacked on top of the already impressive<b> 41% discount</b> - available for the Deep Sleep bundle.</p><p>When you pick up The Deep Sleep Bundle, you\'ll get our<b> New Travel Pillow Cool, Sleep Mask and Travel Blanket</b> - plus free gifts (travel socks and flask - a $79 value).</p></div><div class="custBtnWraper"><a href="https://trtltravel.com/products/deep-sleep-bundle" class="btn btn-secondary">Shop Now</a> <div class="freeGifts"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"> <path d="M17.1 15.75V10.7544C17.6684 10.3282 18 9.68216 18 8.9999V6.7499C17.9988 5.64467 17.1422 4.70535 15.9785 4.53066C16.3805 3.49684 16.2187 2.34329 15.5461 1.44141C14.8734 0.539438 13.7742 0.00109688 12.6 0C11.2207 0.00219713 9.90936 0.560308 9 1.53259C8.09064 0.560308 6.77931 0.00219375 5.4 0C4.22577 0.00109856 3.12657 0.539438 2.45391 1.44141C1.78125 2.34338 1.61955 3.49696 2.02149 4.53066C0.85782 4.70535 0.00117 5.64467 0 6.7499V8.9999C0 9.68216 0.33165 10.3282 0.9 10.7544V15.75C0.9 16.3466 1.15312 16.9189 1.60314 17.3408C2.05315 17.7627 2.6637 18 3.3 18H14.7C15.3363 18 15.9469 17.7627 16.3969 17.3408C16.8469 16.9189 17.1 16.3465 17.1 15.75ZM5.4 6.74998H7.8V8.99999H2.4V6.74998H5.4ZM10.2 6.74998H15.6V8.99999H10.2V6.74998ZM12.6 2.24998C13.2633 2.24998 13.8 2.75316 13.8 3.37498C13.8 3.99679 13.2633 4.49998 12.6 4.49998H10.2C10.2 3.25741 11.2746 2.24998 12.6 2.24998ZM5.4 2.24998C6.03633 2.24998 6.64686 2.48728 7.09686 2.90917C7.54686 3.33106 7.8 3.90345 7.8 4.49998H5.4C4.73673 4.49998 4.2 3.99679 4.2 3.37498C4.2 2.75316 4.73673 2.24998 5.4 2.24998ZM3.3 15.75V11.25H7.8V15.75H3.3ZM10.2 11.25H14.7V15.75H10.2V11.25Z" fill="#243B60"/></svg>Get 2x FREE GIFTS</div></div></div></div></div></div><div class="custHalloweenUnmatchWraper"> <div class="container"> <div class="row"> <div class="col-md-6"> <div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/halloween_confirm_img.png" alt="" class="img-fluid"></div></div><div class="col-md-6"> <div class="unmatchNumb">1</div><h3>Unmatched Comfort & Support</h3> <p>The Trtl Pillow Original is designed with your comfort in mind. It features a unique ergonomic design that provides unparalleled neck and head support, allowing you to sleep in the most natural and comfortable positions. No more waking up with a stiff neck or aching muscles after a long flight or car ride.</p></div></div></div></div><div class="custHalloweenUnmatchWraper"> <div class="container"> <div class="row flex-md-row-reverse"> <div class="col-md-6"> <div class="row"> <div class="col-sm-6"> <div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/halloween_compact_img.png" alt="" class="img-fluid"></div></div><div class="col-sm-6"> <div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/halloween_portable_img.png" alt="" class="img-fluid"></div></div></div></div><div class="col-md-6"> <div class="unmatchNumb">2</div><h3>Compact & Portable</h3> <p>Say goodbye to bulky travel pillows that take up valuable space in your luggage. The Trtl Pillow Original is incredibly compact and lightweight, making it the perfect travel companion. It easily wraps around your neck and provides the support you need without the added bulk.</p></div></div></div></div><div class="custHalloweenUnmatchWraper washableMain"> <div class="container"> <div class="row"> <div class="col-md-6"></div><div class="col-md-6"> <div class="unmatchNumb">3</div><h3>Machine Washable & Easy to clean</h3> </div></div><div class="row"> <div class="col-md-6"> <div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/halloween_washable_img1.png" alt="" class="img-fluid"></div></div><div class="col-md-6"> <div class="row"> <div class="col-md-6"> <div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/halloween_washable_img2.png" alt="" class="img-fluid"></div><div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/halloween_washable_img3.png" alt="" class="img-fluid"></div></div><div class="col-md-6"> <div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/halloween_washable_img4.png" alt="" class="img-fluid"></div><p>We understand that travel can get messy, which is why the Trtl Pillow Original is machine washable. Simply remove the inner support and toss it in the washing machine for a fresh and clean pillow, ready for your next adventure.</p></div></div></div></div></div></div><div class="custHalloweenUnmatchWraper trustedWraper"> <div class="container"> <div class="row"> <div class="col-md-6"> <div class="unmatchNumb">4</div><h3>Trusted by Millions</h3> <p>Join the 1 million+ travelers who have already experienced the comfort and convenience of the Trtl Pillow Original. Our satisfied customers rave about how this pillow has transformed their travel experiences, allowing them to arrive at their destination well-rested and ready to explore.</p></div><div class="col-md-6"> <div class="swiper trustedSwiper"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="custTrustSlideBox"> <p>It is so comfortable and I actually fell asleep in the middle seat of the plane! I also used it on a long car ride and it was awesome to help me feel comfortable with my neck supported. Game changer !!</p><div class="author"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/irma.png" alt=""> <div class="authorDetails"> <div class="name">Irma V</div><div class="jobPost">Amazon Customer</div></div></div></div></div><div class="swiper-slide"> <div class="custTrustSlideBox"> <p>I usually cannot sleep while traveling abroad. This product helps me to sleep and enjoy the trip! 🙌</p><div class="author"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pontus.png" alt=""> <div class="authorDetails"> <div class="name">Pontus Jansson</div><div class="jobPost">Amazon Customer</div></div></div></div></div></div><div class="custTrustedNav"> <div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div></div></div></div></div><div class="custHalloweenUnmatchWraper riskfreeWraper"> <div class="container"> <div class="custRiskFreeMain"> <div class="row flex-md-row-reverse"> <div class="col-md-7"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/halloween_trail_img-1.png" alt="" class="img-fluid"></div><div class="col-md-5"> <div class="unmatchNumb">5</div><h3>100-Day Risk-Free Trial</h3> <p>We are so confident that you\'ll love the Trtl Pillow Original that we offer a 100-day risk-free trial. Try it out on your travels, and if it doesn\'t meet your expectations, simply return it for a full refund. Your satisfaction is our top priority.</p></div></div></div></div></div></div>').prependTo('body.template-collection #MainContent');
            }

            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    var startdate = "2023/10/19 09:30:00 UTC",
                        enddate = "2023/11/02 00:00:00 UTC";
                    if (new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
                        jQuery('.custHalloweenSaleWrapper .timerMain').countdown(enddate, function(event) {
                            jQuery('.custHalloweenSaleWrapper .timerMain .timerBox.day').html(event.strftime('%D') + '<span>Days</span>');
                            jQuery('.custHalloweenSaleWrapper .timerMain .timerBox.hours').html(event.strftime('%H') + '<span>Hours</span>');
                            jQuery('.custHalloweenSaleWrapper .timerMain .timerBox.minutes').html(event.strftime('%M') + '<span>Mins</span>');
                            jQuery('.custHalloweenSaleWrapper .timerMain .timerBox.secs').html(event.strftime('%S') + '<span>Secs</span>');
                        });
                    }
                    clearInterval(timerInterval);
                }
            }, 100);

            //add slider
            if (jQuery('#cutSwiperJs').length > 0) {
                jQuery('head').append('<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" id="cutSwiperJs"></script>');
            }

            var intCount = 0;
            var intInterval = setInterval(function() {
                intCount += 1;

                if (typeof Swiper !== 'undefined') {
                    if (jQuery('.bundleSwiper').length > 0) {
                        var swiper = new Swiper(".bundleSwiper", {
                            cssMode: true,
                            navigation: {
                                nextEl: ".bundleSwiper .swiper-button-next",
                                prevEl: ".bundleSwiper .swiper-button-prev",
                            },
                            pagination: {
                                el: ".bundleSwiper .swiper-pagination",
                            },
                            mousewheel: true,
                            keyboard: true,
                        });

                        clearInterval(intInterval);
                    }

                    if (jQuery('.trustedSwiper').length > 0) {
                        var swiper = new Swiper(".trustedSwiper", {
                            slidesPerView: "auto",
                            cssMode: true,
                            navigation: {
                                nextEl: ".trustedSwiper .swiper-button-next",
                                prevEl: ".trustedSwiper .swiper-button-prev",
                            },
                            mousewheel: true,
                            keyboard: true,
                        });
                        clearInterval(intInterval);
                    }

                    if(jQuery('.travelBuddiesSwiper').length > 0){
                        var swiper = new Swiper(".travelBuddiesSwiper", {
                            slidesPerView: 2,
                            spaceBetween: 6,
                            type: "fraction",
                            cssMode: true,
                            navigation: {
                                nextEl: ".custTravelBuddiesNav .swiper-button-next",
                                prevEl: ".custTravelBuddiesNav .swiper-button-prev",
                            },
                            mousewheel: true,
                            keyboard: true,
                            breakpoints: {                              
                              768: {
                                slidesPerView: 3,
                                spaceBetween: 14
                              },
                              1024: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                              },
                            },
                        });
                        clearInterval(intInterval);
                    }

                    if (intCount === 50) {
                        clearInterval(intInterval);
                    }
                }

            }, 50);
        }

        function addStickyOnCollectionAll() {

            if (jQuery('body.template-collection').length > 0 && jQuery('body.template-collection #MainContent .section-banner-products-recommended .bg-light').length > 0 && jQuery('.custHalloweenCollectionHero').length == 0) {

                jQuery('<div class="custHalloweenCollectionHero"><div class="container-xxl position-relative"><div class="pt-2 pb-2 row"><div class="custGetOfferBannerMain"><div class="custColLeft"><div class="custGetOfferDiv"><span class="offerBadge"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="black"></path><script xmlns=""></script></svg>LIMITED TIME<span class="only">ONLY</span></span><div class="custOfferTimer"><div class="custTimerTitle">Deal ends in:</div><div class="timerMain"><div class="timerBox day">0<span>Days</span></div><div class="timerBox hours">0<span>Hours</span></div><div class="timerBox minutes">0<span>Mins</span></div><div class="timerBox secs">0<span>Secs</span></div></div></div></div><div class="custLimitedOffer">HALLOWEEN SALE! <span><span><div class="batIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bat.svg" alt="bat"></div> GET UP TO 25% OFF</span> + <span>Free GIFT</span></span></div></div><div class="custColRight"><div class="ghostIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/ghost.svg" alt="ghost"></div></div></div></div><div class="spiderIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/spider.svg" alt="spider"></div></div></div>').prependTo('body.template-collection #MainContent .section-banner-products-recommended .bg-light');
            }

            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    var startdate = "2023/10/19 09:30:00 UTC",
                        enddate = "2023/11/02 00:00:00 UTC";
                    if (new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
                        jQuery('.custHalloweenCollectionHero .timerMain').countdown(enddate, function(event) {
                            jQuery('.custHalloweenCollectionHero .timerMain .timerBox.day').html(event.strftime('%D') + '<span>Days</span>');
                            jQuery('.custHalloweenCollectionHero .timerMain .timerBox.hours').html(event.strftime('%H') + '<span>Hours</span>');
                            jQuery('.custHalloweenCollectionHero .timerMain .timerBox.minutes').html(event.strftime('%M') + '<span>Mins</span>');
                            jQuery('.custHalloweenCollectionHero .timerMain .timerBox.secs').html(event.strftime('%S') + '<span>Secs</span>');
                        });
                    }
                    clearInterval(timerInterval);
                }
            }, 100);
        }

        function addStickyFooterOnHomePage() {
            if (jQuery('.custHalloweenStickyFooter').length == 0 && sessionStorage.getItem('custHalloweenStickyFooterClosed') === null) {

                jQuery('<div class="custHalloweenStickyFooter"><div class="container-xxl position-relative"><div class="pt-2 pb-2 row"><div class="custGetOfferBannerMain"><div class="custColLeft"><div class="custGetOfferDiv"><span class="offerBadge"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="black"></path><script xmlns=""></script></svg> Halloween Sale</span><div class="batIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bat.svg" alt="bat"></div><div class="custOfferTimer"><div class="custTimerTitle">Deal ends in:</div><div class="timerMain"><div class="timerBox day">0 <span>Days</span></div><div class="timerBox hours">0 <span>Hours</span></div><div class="timerBox minutes">0 <span>Mins</span></div><div class="timerBox secs">0 <span>Secs</span></div></div></div></div><p>GET UP TO <span>25% OFF + Free GIFT!</span></p></div><div class="custColRight"><div class="ghostIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/ghost.svg" alt="ghost"></div><div class="custOfferDealBtn"><a href="https://trtltravel.com/collections/all-products" class="btn btn btn-secondary">SHOP NOW</a></div></div></div></div><div class="spiderIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/spider.svg" alt="spider"></div><button type="button" class="btn-close"></button></div></div>').appendTo('body');
            }

            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    var startdate = "2023/10/19 09:30:00 UTC",
                        enddate = "2023/11/02 00:00:00 UTC";
                    if (new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
                        jQuery('.custHalloweenStickyFooter .timerMain').countdown(enddate, function(event) {
                            jQuery('.custHalloweenStickyFooter .timerMain .timerBox.day').html(event.strftime('%D') + '<span>Days</span>');
                            jQuery('.custHalloweenStickyFooter .timerMain .timerBox.hours').html(event.strftime('%H') + '<span>Hours</span>');
                            jQuery('.custHalloweenStickyFooter .timerMain .timerBox.minutes').html(event.strftime('%M') + '<span>Mins</span>');
                            jQuery('.custHalloweenStickyFooter .timerMain .timerBox.secs').html(event.strftime('%S') + '<span>Secs</span>');
                        });
                    }
                    clearInterval(timerInterval);
                }
            }, 100);
        }
        jQuery('.custHalloweenStickyFooter').on('click', function() {
            if (jQuery(window).width() < 768) {
                window.location.href = 'https://trtltravel.com/collections/all-products';
            }
        });
        jQuery('.custHalloweenStickyFooter .btn-close').on('click', function() {
            jQuery('.custHalloweenStickyFooter').hide();
            sessionStorage.setItem('custHalloweenStickyFooterClosed', 'yes');
        });
        clearInterval(waitForJquery);
    }
}, 50);