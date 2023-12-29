var waitForJquery = setInterval(function() {

    if (typeof jQuery != "undefined") {

        jQuery("head").append("<script src='https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/jquery.countdown.min.js'></script>");

        var strURL = window.location.href;
        // var strStartTime = "2023/11/29 09:15:00 UTC";
        var strStartTime = "2023/11/24 09:15:00";
        var strEndTime = "2023/12/26 09:00:00 UTC";
        var strShopNowUrl = "https://au.trtltravel.com/collections/all-products";

        if (strURL.indexOf("collections/all-products") > 0) {
            addXmasBannerToCollectionAll();
        }

        if (jQuery("body.template-index").length > 0) {
            addXmasStickyFooter();
        }

        if (strURL.indexOf("/products/") > 0) {
            addXmasTopBannerOnPDP();
        }

        function addXmasTopBannerOnPDP() {
            var custPdpTopBanner =
                                '<div class="custPDPXmasOfferMain">'+
                                '    <div class="container-lg position-relative">'+
                                '        <div class="pt-2 pb-2 row">'+
                                '            <div class="custGetOfferBannerMain">'+
                                '                <div class="custColLeft">'+
                                '                    <div class="custGetOfferDiv">'+
                                '                        <span class="offerBadge">'+
                                '                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style="">'+
                                '                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="#FAD951"></path>'+
                                '                                <script xmlns="">'+
                                '                                </script>'+
                                '                            </svg>'+
                                '                            Christmas Sale'+
                                '                        </span>'+
                                '                        <div class="custLimitedOffer">Get UP TO <span>'+
                                '                                <span>30% OFF!</span>'+
                                '                            </span>'+
                                '                        </div>'+
                                '                        <div class="custXmasOfferTimer">'+
                                '                            <div class="custTimerTitle">'+
                                '                                <span id="dealsEndIn">Applied automatically in the cart!</span>'+
                                '                            </div>'+
                                '                            <div class="timerMain">'+
                                '                                <div class="timerBox day">29 <span>Days</span>'+
                                '                                </div>'+
                                '                                <div class="timerBox hours">02 <span>Hours</span>'+
                                '                                </div>'+
                                '                                <div class="timerBox minutes">22 <span>Mins</span>'+
                                '                                </div>'+
                                '                                <div class="timerBox secs">46 <span>Secs</span>'+
                                '                                </div>'+
                                '                            </div>'+
                                '                        </div>'+
                                '                    </div>'+
                                '                </div>'+
                                '            </div>'+
                                '        </div>'+
                                '    </div>'+
                                '</div>';

            if (jQuery("body #MainContent").length > 0 && jQuery(".custPDPXmasOfferMain").length == 0 ) {
                jQuery(custPdpTopBanner).prependTo("body #MainContent");
            }

            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    if ( new Date() >= new Date(strStartTime) && new Date() <= new Date(strEndTime)) {
                        jQuery(".custPDPXmasOfferMain .timerMain").countdown(strEndTime,function(event) {
                                
                                jQuery(".custPDPXmasOfferMain .timerMain .timerBox.day").html(
                                    event.strftime("%D") + "<span>Days</span>"
                                );
                                
                                jQuery(".custPDPXmasOfferMain .timerMain .timerBox.hours").html(
                                    event.strftime("%H") + "<span>Hours</span>"
                                );
                                
                                jQuery(
                                    ".custPDPXmasOfferMain .timerMain .timerBox.minutes"
                                ).html(event.strftime("%M") + "<span>Mins</span>");
                                
                                jQuery(".custPDPXmasOfferMain .timerMain .timerBox.secs").html(
                                    event.strftime("%S") + "<span>Secs</span>"
                                );
                            }
                        );
                    }
                    clearInterval(timerInterval);
                }
            }, 100);
        }

        function addXmasBannerToCollectionAll() {
            if (jQuery("body.template-collection").length > 0 && jQuery("body.template-collection #MainContent .section-banner-products-recommended .bg-light").length > 0 && jQuery(".custXmasCollectionHero").length == 0) {
                var custCollectionAllPageHtml =
                                            '<div class="custXmasCollectionHero">'+
                                            '    <div class="container-lg position-relative">'+
                                            '        <div class="pt-2 pb-2 row">'+
                                            '            <div class="custGetOfferBannerMain">'+
                                            '                <div class="custColLeft">'+
                                            '                    <div class="custGetOfferDiv">'+
                                            '                        <span class="offerBadge">'+
                                            '                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style="">'+
                                            '                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="#FAD951"></path>'+
                                            '                                <script xmlns="">'+
                                            '                                </script>'+
                                            '                            </svg>'+
                                            '                            Christmas Sale'+
                                            '                        </span>'+
                                            '                        <div class="custLimitedOffer">Get UP TO <span>'+
                                            '                                <span>30% OFF!</span>'+
                                            '                            </span>'+
                                            '                        </div>'+
                                            '                        <div class="custXmasOfferTimer">'+
                                            '                            <div class="custTimerTitle">'+
                                            '                                <span id="dealsEndIn">Deal ends in:</span>'+
                                            '                            </div>'+
                                            '                            <div class="timerMain">'+
                                            '                                <div class="timerBox day">29 <span>Days</span>'+
                                            '                                </div>'+
                                            '                                <div class="timerBox hours">02 <span>Hours</span>'+
                                            '                                </div>'+
                                            '                                <div class="timerBox minutes">22 <span>Mins</span>'+
                                            '                                </div>'+
                                            '                                <div class="timerBox secs">46 <span>Secs</span>'+
                                            '                                </div>'+
                                            '                            </div>'+
                                            '                        </div>'+
                                            '                    </div>'+
                                            '                </div>'+
                                            '            </div>'+
                                            '        </div>'+
                                            '    </div>'+
                                            '</div>';

                jQuery(custCollectionAllPageHtml).prependTo("body.template-collection #MainContent .section-banner-products-recommended .bg-light");
            }
            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    if (new Date() >= new Date(strStartTime) && new Date() <= new Date(strEndTime)) {
                        jQuery(".custXmasCollectionHero .timerMain").countdown(strEndTime, function(event) {
                                
                                jQuery(".custXmasCollectionHero .timerMain .timerBox.day").html(
                                    event.strftime("%D") + "<span>Days</span>"
                                );
                                
                                jQuery(
                                    ".custXmasCollectionHero .timerMain .timerBox.hours"
                                ).html(event.strftime("%H") + "<span>Hours</span>");
                                
                                jQuery(
                                    ".custXmasCollectionHero .timerMain .timerBox.minutes"
                                ).html(event.strftime("%M") + "<span>Mins</span>");
                                
                                jQuery(
                                    ".custXmasCollectionHero .timerMain .timerBox.secs"
                                ).html(event.strftime("%S") + "<span>Secs</span>");
                            }
                        );
                    }
                    clearInterval(timerInterval);
                }
            }, 100);
        }

        function addXmasStickyFooter() {
            if (jQuery(".custXmasStickyFooter").length == 0 && sessionStorage.getItem("custXmasStickyFooterClosed") === null ) {
                var custHomePageHtml =
                                    '<div class="custXmasStickyFooter">'+
                                    '    <div class="container-xxl position-relative">'+
                                    '        <div class="pt-2 pb-2 row">'+
                                    '            <div class="custGetOfferBannerMain">'+
                                    '                <div class="custColLeft">'+
                                    '                    <div class="custGetOfferDiv">'+
                                    '                        <span class="offerBadge desktop">'+
                                    '                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style="">'+
                                    '                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="#FAD951"></path>'+
                                    '                                <script xmlns="">'+
                                    '                                </script>'+
                                    '                            </svg>Christmas Sale </span>'+
                                    '                        <div class="custXmasOfferTimer">'+
                                    '                            <div class="custTimerTitle">'+
                                    '                                <span id="dealsEndIn">Deal ends in:</span>'+
                                    '                            </div>'+
                                    '                            <div class="timerMain">'+
                                    '                                <div class="timerBox day">29 <span>Days</span>'+
                                    '                                </div>'+
                                    '                                <div class="timerBox hours">03 <span>Hours</span>'+
                                    '                                </div>'+
                                    '                                <div class="timerBox minutes">40 <span>Mins</span>'+
                                    '                                </div>'+
                                    '                                <div class="timerBox secs">40 <span>Secs</span>'+
                                    '                                </div>'+
                                    '                            </div>'+
                                    '                        </div>'+
                                    '                    </div>'+
                                    '                    <p>GET UP TO <span>30% OFF</span>'+
                                    '                        <span>!</span>'+
                                    '                    </p>'+
                                    '                </div>'+
                                    '                <div class="custColRight">'+
                                    '                    <div class="ghostIcon">'+
                                    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/xmas-deer.svg" alt="ghost">'+
                                    '                    </div>'+
                                    '                    <div class="custOfferDealBtn">'+
                                    '                        <a href="' + strShopNowUrl + '" class="btn btn btn-secondary">SHOP NOW</a>'+
                                    '                    </div>'+
                                    '                </div>'+
                                    '            </div>'+
                                    '        </div>'+
                                    '        <div class="spiderIcon">'+
                                    '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/xmas-bell.svg" alt="spider">'+
                                    '        </div>'+
                                    '        <button type="button" class="btn-close"></button>'+
                                    '    </div>'+
                                    '</div>';

                jQuery(custHomePageHtml).appendTo("body");
            }
            var timerInterval = setInterval(function() {
                if (jQuery().countdown) {
                    if (new Date() >= new Date(strStartTime) && new Date() <= new Date(strEndTime)) {
                        jQuery(".custXmasStickyFooter .timerMain").countdown(strEndTime, function(event) {
                                
                                jQuery(".custXmasStickyFooter .timerMain .timerBox.day").html(
                                    event.strftime("%D") + "<span>Days</span>"
                                );
                                
                                jQuery(".custXmasStickyFooter .timerMain .timerBox.hours").html(
                                    event.strftime("%H") + "<span>Hours</span>"
                                );
                                
                                jQuery(
                                    ".custXmasStickyFooter .timerMain .timerBox.minutes"
                                ).html(event.strftime("%M") + "<span>Mins</span>");
                                
                                jQuery(".custXmasStickyFooter .timerMain .timerBox.secs").html(
                                    event.strftime("%S") + "<span>Secs</span>"
                                );
                            }
                        );
                    }
                    clearInterval(timerInterval);
                }
            }, 100);
        }

        jQuery(".custXmasStickyFooter").on("click", function() {
            if (jQuery(window).width() < 768) {
                window.location.href = strShopNowUrl;
            }
        });

        jQuery(".custXmasStickyFooter .btn-close").on("click", function() {
            jQuery(".custXmasStickyFooter").hide();
            sessionStorage.setItem("custXmasStickyFooterClosed", "yes");
        });

        clearInterval(waitForJquery);
    }
}, 50);