var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        jQuery('head').append("<script src='https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/jquery.countdown.min.js'></script>");
        var strURL = window.location.href;

        if (strURL.indexOf('collections/all-products') > 0) {
           addBFCMStickyOnCollectionAll();
        }

        if (jQuery('body.template-index').length > 0) {
            addBFCMStickyFooterOnHomePage();
        }

        if (strURL.indexOf('/products/') > 0) {
            addBFCMStickyHtmlOnPdp();
        }

        function addBFCMStickyHtmlOnPdp() {

            if (strURL.indexOf('bundle') > 0) {
                var intDiscount = '25%';
            }else{
                var intDiscount = '10%';
            }
            console.log('intDiscount',intDiscount);

            // if (jQuery('body #MainContent').length > 0 && jQuery('.custPDPHalloweenOfferMain').length == 0) {
            //     jQuery('<div class="custPDPHalloweenOfferMain"><div class="container-xxl position-relative"><div class="pt-2 pb-2 row"><div class="custGetOfferDiv"><div class="spiderIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/spider.svg" alt="spider"></div><div class="offerBadge"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="black"></path><script xmlns=""></script></svg><span class="limited">LIMITED TIME</span><span class="halloween_sale">Halloween Sale</span><span class="only">ONLY</span></div><div class="custLimitedOffer"><span class="halloweenSaleTitle">Halloween Sale!</span> Get UP TO <span><span><div class="batIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bat.svg" alt="bat"></div>25% OFF</span> + <span>Free GIFT</span></span></div><div class="custOfferTimer"><div class="custTimerTitle">Applied automatically in the cart!</div><div class="timerMain"><div class="timerBox day">2<span>Days</span></div><div class="timerBox hours">12<span>Hours</span></div><div class="timerBox minutes">55<span>Mins</span></div><div class="timerBox secs">32<span>Secs</span></div></div></div><div class="ghostIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/ghost.svg" alt="ghost"></div></div></div></div></div>').prependTo('body #MainContent');
            // }

            // var timerInterval = setInterval(function() {
            //     if (jQuery().countdown) {
            //         var startdate = "2023/10/19 09:30:00",
            //             enddate = "2023/11/01 11:59:00";
            //         if (new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
            //             jQuery('.custPDPHalloweenOfferMain .timerMain').countdown(enddate, function(event) {
            //                 jQuery('.custPDPHalloweenOfferMain .timerMain .timerBox.day').html(event.strftime('%D') + '<span>Days</span>');
            //                 jQuery('.custPDPHalloweenOfferMain .timerMain .timerBox.hours').html(event.strftime('%H') + '<span>Hours</span>');
            //                 jQuery('.custPDPHalloweenOfferMain .timerMain .timerBox.minutes').html(event.strftime('%M') + '<span>Mins</span>');
            //                 jQuery('.custPDPHalloweenOfferMain .timerMain .timerBox.secs').html(event.strftime('%S') + '<span>Secs</span>');
            //             });
            //         }
            //         clearInterval(timerInterval);
            //     }
            // }, 100);






        }
    
        function addBFCMStickyOnCollectionAll() {
            if (jQuery('body.template-collection').length > 0 && jQuery('body.template-collection #MainContent .section-banner-products-recommended .bg-light').length > 0 && jQuery('.custBFCMCollectionHero').length == 0) {
                jQuery('<div class="custBFCMCollectionHero"><div class="container-lg position-relative"><div class="pt-2 pb-2 row"><div class="custGetOfferBannerMain"><div class="custColLeft"><div class="custGetOfferDiv"><span class="offerBadge"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="#FAD951"></path><script xmlns=""></script></svg>Black Friday Week</span><div class="custOfferTimer"><div class="custTimerTitle">Deal ends in:</div><div class="timerMain"><div class="timerBox day">2<span>Days</span></div><div class="timerBox hours">12<span>Hours</span></div><div class="timerBox minutes">55<span>Mins</span></div><div class="timerBox secs">32<span>Secs</span></div></div></div></div><div class="custLimitedOffer">Get UP TO <span><span>40% OFF</span> + <span>Free GIFTS!</span></span></div></div></div></div></div></div>').prependTo('body.template-collection #MainContent .section-banner-products-recommended .bg-light');
            }
            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    var startdate = "2023/11/07 09:30:00",
                        enddate = "2023/11/08 11:59:00";
                    if (new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
                        jQuery('.custBFCMCollectionHero .timerMain').countdown(enddate, function(event) {
                            jQuery('.custBFCMCollectionHero .timerMain .timerBox.day').html(event.strftime('%D') + '<span>Days</span>');
                            jQuery('.custBFCMCollectionHero .timerMain .timerBox.hours').html(event.strftime('%H') + '<span>Hours</span>');
                            jQuery('.custBFCMCollectionHero .timerMain .timerBox.minutes').html(event.strftime('%M') + '<span>Mins</span>');
                            jQuery('.custBFCMCollectionHero .timerMain .timerBox.secs').html(event.strftime('%S') + '<span>Secs</span>');
                        });
                    }
                    clearInterval(timerInterval);
                }
            }, 100);
        }

        function addBFCMStickyFooterOnHomePage() {
            if (jQuery('.custBFCMStickyFooter').length == 0 && sessionStorage.getItem('custBFCMStickyFooterClosed') === null) {
                jQuery('<div class="custBFCMStickyFooter"><div class="custBlackFridayBadgeMob">Black Friday Week</div><div class="container-xxl position-relative"><div class="pt-2 pb-2 row"><div class="custGetOfferBannerMain"><div class="custColLeft"><div class="custGetOfferDiv"><span class="offerBadge desktop"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="#FAD951"></path><script xmlns=""></script></svg>Black Friday Week</span><span class="offerBadge mobile"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="#FAD951"></path><script xmlns=""></script></svg>LIMITED TIME</span><div class="custOfferTimer"><div class="custTimerTitle">Deal ends in:</div><div class="timerMain"><div class="timerBox day">2<span>Days</span></div><div class="timerBox hours">12<span>Hours</span></div><div class="timerBox minutes">55<span>Mins</span></div><div class="timerBox secs">32<span>Secs</span></div></div></div></div><p>GET UP TO <span>40% OFF</span><b> + <span>Free GIFTs</span></b><span>!</span></p></div><div class="custColRight"><div class="custOfferDealBtn"><a href="https://trtltravel.com/collections/halloween-sale-2022" class="btn btn btn-secondary">SHOP NOW</a></div></div></div></div><button type="button" class="btn-close"></button></div></div>').appendTo('body');
            }
            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    var startdate = "2023/11/07 09:30:00",
                        enddate = "2023/11/08 11:59:00";
                    if (new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
                        jQuery('.custBFCMStickyFooter .timerMain').countdown(enddate, function(event) {
                            jQuery('.custBFCMStickyFooter .timerMain .timerBox.day').html(event.strftime('%D') + '<span>Days</span>');
                            jQuery('.custBFCMStickyFooter .timerMain .timerBox.hours').html(event.strftime('%H') + '<span>Hours</span>');
                            jQuery('.custBFCMStickyFooter .timerMain .timerBox.minutes').html(event.strftime('%M') + '<span>Mins</span>');
                            jQuery('.custBFCMStickyFooter .timerMain .timerBox.secs').html(event.strftime('%S') + '<span>Secs</span>');
                        });
                    }
                    clearInterval(timerInterval);
                }
            }, 100);

        }
        jQuery('.custBFCMStickyFooter').on('click', function() {
            if (jQuery(window).width() < 768) {
                window.location.href = 'https://trtltravel.com/collections/all-products';
            }
        });

        jQuery('.custBFCMStickyFooter .btn-close').on('click', function() {
            jQuery('.custBFCMStickyFooter').hide();
            sessionStorage.setItem('custBFCMStickyFooterClosed', 'yes');
        });

        clearInterval(waitForJquery);
    }
}, 50);