var waitForJquery = setInterval(function() {

    if (typeof jQuery != "undefined") {

        jQuery("head").append("<script src='https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/jquery.countdown.min.js'></script>");

        var strURL = window.location.href;
        var strStartTime = "2023/11/09 09:30:00";
        var strEndTime = "2023/11/26 09:30:00";
        var strShopNowUrl = "https://trtltravel.com/collections/all-products";

        if (strURL.indexOf("collections/all-products") > 0) {
            addBlackFridayBannerToCollectionAll();
        }

        if (jQuery("body.template-index").length > 0) {
            addBlackFridayStickyFooter();
        }

        if (strURL.indexOf("/products/") > 0) {
            addBlackFridayTopBannerOnPDP();
        }

        function addBlackFridayTopBannerOnPDP() {
            if (strURL.indexOf("/products/travel-essentials-bundle-free-gift") > 0 || strURL.indexOf("/products/vip-family-bundle-free-gift") > 0 || strURL.indexOf("/products/double-comfort-bundle-free-gift") > 0 || strURL.indexOf("/products/mini-family-bundle-free-gift") > 0
            ) {
                var strDiscountCopy =  "<span>Get UP TO <span>40% OFF</span> + <span>Free gifts</span></span>";
            } else if ( strURL.indexOf("/products/deep-sleep-bundle") > 0 || strURL.indexOf("/products/snooze-bundle") > 0 || strURL.indexOf("/products/packed-to-perfection-bundle") > 0 || strURL.indexOf("/products/all-aboard-bundle") > 0
            ) {
                var strDiscountCopy = "<span>Get UP TO <span>40% OFF</span> + <span>Free gifts</span></span>";
            } else {
                var strDiscountCopy = "<span>Get UP TO <span>40% OFF</span> + <span>Free gifts</span></span>";
            }

            var custPdpTopBanner =
                '<div class="custPDPBFCMOfferMain">' +
                '    <div class="container-xxl position-relative">' +
                '        <div class="row">' +
                '            <div class="custGetOfferDiv">' +
                '                <div class="offerBadge"> ' +
                '                    <svg xmlns="http://www.w3.org/2000/svg"' +
                '                        width="12" height="36" viewBox="0 0 12 36" fill="" style="">' +
                '                        <path fill-rule="evenodd" clip-rule="evenodd"' +
                '                            d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z"' +
                '                            fill="black"></path>' +
                '                        <script xmlns=""></script>' +
                "                    </svg>" +
                '                    <span class="limited">Black Friday Week</span>' +
                "                </div>" +
                '                <div class="custLimitedOffer">' +
                strDiscountCopy +
                "</div>                " +
                '                <div class="custAppliedCart">Applied automatically in the cart!</div>' +
                '                <div class="custOfferTimer">' +
                '                    <div class="custTimerTitle"><span id="limitedTime">Limited Time Only!</span><span id="dealsEndIn">Deal ends in:</span></div>' +
                '                    <div class="timerMain">' +
                '                        <div class="timerBox day">0 <span>Days</span></div>' +
                '                        <div class="timerBox hours">00 <span>Hours</span></div>' +
                '                        <div class="timerBox minutes">00 <span>Mins</span></div>' +
                '                        <div class="timerBox secs">00 <span>Secs</span></div>' +
                "                    </div>" +
                "                </div>" +
                "            </div>" +
                "        </div>" +
                "    </div>" +
                "</div>";

            if (jQuery("body #MainContent").length > 0 && jQuery(".custPDPBFCMOfferMain").length == 0 ) {
                jQuery(custPdpTopBanner).prependTo("body #MainContent");
            }

            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    if ( new Date() >= new Date(strStartTime) && new Date() <= new Date(strEndTime)) {
                        jQuery(".custPDPBFCMOfferMain .timerMain").countdown(strEndTime,function(event) {
                                
                                jQuery(".custPDPBFCMOfferMain .timerMain .timerBox.day").html(
                                    event.strftime("%D") + "<span>Days</span>"
                                );
                                
                                jQuery(".custPDPBFCMOfferMain .timerMain .timerBox.hours").html(
                                    event.strftime("%H") + "<span>Hours</span>"
                                );
                                
                                jQuery(
                                    ".custPDPBFCMOfferMain .timerMain .timerBox.minutes"
                                ).html(event.strftime("%M") + "<span>Mins</span>");
                                
                                jQuery(".custPDPBFCMOfferMain .timerMain .timerBox.secs").html(
                                    event.strftime("%S") + "<span>Secs</span>"
                                );
                            }
                        );
                    }
                    clearInterval(timerInterval);
                }
            }, 100);
        }

        function addBlackFridayBannerToCollectionAll() {
            if (jQuery("body.template-collection").length > 0 && jQuery("body.template-collection #MainContent .section-banner-products-recommended .bg-light").length > 0 && jQuery(".custBFCMCollectionHero").length == 0) {
                var custCollectionAllPageHtml =
                    '<div class="custBFCMCollectionHero">' +
                    '    <div class="container-lg position-relative">' +
                    '        <div class="pt-2 pb-2 row">' +
                    '            <div class="custGetOfferBannerMain">' +
                    '                <div class="custColLeft">' +
                    '                    <div class="custGetOfferDiv"><span class="offerBadge"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style="">' +
                    '                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="#FAD951"></path>' +
                    '                                <script xmlns=""></script>' +
                    "                            </svg>Black Friday Week</span>" +
                    '                        <div class="custOfferTimer">' +
                    '                            <div class="custTimerTitle"><span id="limitedTime">Limited Time Only!</span><span id="dealsEndIn">Deal ends in:</span></div>' +
                    '                            <div class="timerMain">' +
                    '                                <div class="timerBox day">2<span>Days</span></div>' +
                    '                                <div class="timerBox hours">12<span>Hours</span></div>' +
                    '                                <div class="timerBox minutes">55<span>Mins</span></div>' +
                    '                                <div class="timerBox secs">32<span>Secs</span></div>' +
                    "                            </div>" +
                    "                        </div>" +
                    "                    </div>" +
                    '                    <div class="custLimitedOffer">Get UP TO <span><span>40% OFF</span> + <span>Free GIFTS!</span></span></div>' +
                    "                </div>" +
                    "            </div>" +
                    "        </div>" +
                    "    </div>" +
                    "</div>";

                jQuery(custCollectionAllPageHtml).prependTo("body.template-collection #MainContent .section-banner-products-recommended .bg-light");
            }
            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    if (new Date() >= new Date(strStartTime) && new Date() <= new Date(strEndTime)) {
                        jQuery(".custBFCMCollectionHero .timerMain").countdown(strEndTime, function(event) {
                                
                                jQuery(".custBFCMCollectionHero .timerMain .timerBox.day").html(
                                    event.strftime("%D") + "<span>Days</span>"
                                );
                                
                                jQuery(
                                    ".custBFCMCollectionHero .timerMain .timerBox.hours"
                                ).html(event.strftime("%H") + "<span>Hours</span>");
                                
                                jQuery(
                                    ".custBFCMCollectionHero .timerMain .timerBox.minutes"
                                ).html(event.strftime("%M") + "<span>Mins</span>");
                                
                                jQuery(
                                    ".custBFCMCollectionHero .timerMain .timerBox.secs"
                                ).html(event.strftime("%S") + "<span>Secs</span>");
                            }
                        );
                    }
                    clearInterval(timerInterval);
                }
            }, 100);
        }

        function addBlackFridayStickyFooter() {
            if (jQuery(".custBFCMStickyFooter").length == 0 && sessionStorage.getItem("custBFCMStickyFooterClosed") === null ) {
                var custHomePageHtml =
                    '<div class="custBFCMStickyFooter">' +
                    '    <div class="custBlackFridayBadgeMob">Black Friday Week</div>' +
                    '    <div class="container-xxl position-relative">' +
                    '        <div class="pt-2 pb-2 row">' +
                    '            <div class="custGetOfferBannerMain">' +
                    '                <div class="custColLeft">' +
                    '                    <div class="custGetOfferDiv"><span class="offerBadge desktop"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style="">' +
                    '                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="#FAD951"></path>' +
                    '                                <script xmlns=""></script>' +
                    '                            </svg>Black Friday Week</span><span class="offerBadge mobile"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style="">' +
                    '                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="#FAD951"></path>' +
                    '                                <script xmlns=""></script>' +
                    "                            </svg>LIMITED TIME</span>" +
                    '                        <div class="custOfferTimer">' +
                    '                            <div class="custTimerTitle"><span id="limitedTime">Limited Time Only!</span><span id="dealsEndIn">Deal ends in:</span></div>' +
                    '                            <div class="timerMain">' +
                    '                                <div class="timerBox day">2<span>Days</span></div>' +
                    '                                <div class="timerBox hours">12<span>Hours</span></div>' +
                    '                                <div class="timerBox minutes">55<span>Mins</span></div>' +
                    '                                <div class="timerBox secs">32<span>Secs</span></div>' +
                    "                            </div>" +
                    "                        </div>" +
                    "                    </div>" +
                    "                    <p>GET UP TO <span>40% OFF</span><b> + <span>Free GIFTs</span></b><span>!</span></p>" +
                    "                </div>" +
                    '                <div class="custColRight">' +
                    '                    <div class="custOfferDealBtn"><a href="' + strShopNowUrl + '" class="btn btn btn-secondary">SHOP NOW</a></div>' +
                    "                </div>" +
                    "            </div>" +
                    '        </div><button type="button" class="btn-close"></button>' +
                    "    </div>" +
                    "</div>";

                jQuery(custHomePageHtml).appendTo("body");
            }
            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    if (new Date() >= new Date(strStartTime) && new Date() <= new Date(strEndTime)) {
                        jQuery(".custBFCMStickyFooter .timerMain").countdown(strEndTime, function(event) {
                                
                                jQuery(".custBFCMStickyFooter .timerMain .timerBox.day").html(
                                    event.strftime("%D") + "<span>Days</span>"
                                );
                                
                                jQuery(".custBFCMStickyFooter .timerMain .timerBox.hours").html(
                                    event.strftime("%H") + "<span>Hours</span>"
                                );
                                
                                jQuery(
                                    ".custBFCMStickyFooter .timerMain .timerBox.minutes"
                                ).html(event.strftime("%M") + "<span>Mins</span>");
                                
                                jQuery(".custBFCMStickyFooter .timerMain .timerBox.secs").html(
                                    event.strftime("%S") + "<span>Secs</span>"
                                );
                            }
                        );
                    }
                    clearInterval(timerInterval);
                }
            }, 100);
        }

        jQuery(".custBFCMStickyFooter").on("click", function() {
            if (jQuery(window).width() < 768) {
                window.location.href = strShopNowUrl;
            }
        });

        jQuery(".custBFCMStickyFooter .btn-close").on("click", function() {
            jQuery(".custBFCMStickyFooter").hide();
            sessionStorage.setItem("custBFCMStickyFooterClosed", "yes");
        });

        clearInterval(waitForJquery);
    }
}, 50);