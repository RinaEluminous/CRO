var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

        jQuery('head').append("<script src='https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/jquery.countdown.min.js'></script>");
        
        var strURL = window.location.href;

        if(jQuery('.customStickyHeaderBanner').length == 0 && jQuery('.position-fixed #shopify-section-static-notification-bar').length > 0 && sessionStorage.getItem('custHeaderBannerClosed') === null && strURL.indexOf('collections/halloween-sale-2022') == -1){

            jQuery('<div class="customStickyHeaderBanner"><div class="container-xxl position-relative"><div class="pt-2 pb-2 row"><div class="custGetOfferBannerMain"><div class="custGetOfferDiv"><span class="offerBadge">HALLOWEEN SALE</span><p>Get Up To 35% OFF Bundle Deals + FREE Gifts <a href="https://trtltravel.com/collections/halloween-sale-2022" class="arrowBtn"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/arrow.svg" alt="EXPLORE DEALS"></a></p><div class="batIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bat.svg" alt="bat"></div></div><div class="custOfferTimer"><div class="custTimerTitle">Deal ends in:</div><div class="timerMain"><div class="timerBox day">00 <span>Days</span></div><div class="timerBox hours">00 <span>Hours</span></div><div class="timerBox minutes">00 <span>Mins</span></div><div class="timerBox secs">00 <span>Secs</span></div></div></div><div class="custOfferDealBtn"><a href="https://trtltravel.com/collections/halloween-sale-2022" class="btn btn btn-secondary">EXPLORE DEALS</a></div></div></div><div class="spiderIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/spider.svg" alt="spider"></div><div class="ghostIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/ghost.svg" alt="ghost"></div><button type="button" class="btn-close"></button></div></div>').insertBefore('.position-fixed #shopify-section-static-notification-bar');
        }

        if(jQuery(window).width() < 768 && jQuery('.customStickyHeaderBanner').length > 0){
            var intHeight = jQuery('.customStickyHeaderBanner').height();
            jQuery('#fixed-header').css('top', intHeight + 'px');
            jQuery('main#MainContent').attr('style', 'padding-top: 20px!important');
        }

        var timerInterval = setInterval(function(){
            if(jQuery().countdown){
                var startdate = "2022/10/19 00:00:00",
                    enddate = "2022/11/01 02:00:00";
                if(new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
                    jQuery('.customStickyHeaderBanner .timerMain').countdown(enddate, function(event) {
                      jQuery('.customStickyHeaderBanner .timerMain .timerBox.day').html(event.strftime('%D') + '<span>Days</span>');
                      jQuery('.customStickyHeaderBanner .timerMain .timerBox.hours').html(event.strftime('%H') + '<span>Hours</span>');
                      jQuery('.customStickyHeaderBanner .timerMain .timerBox.minutes').html(event.strftime('%M') + '<span>Mins</span>');
                      jQuery('.customStickyHeaderBanner .timerMain .timerBox.secs').html(event.strftime('%S') + '<span>Secs</span>');
                    });
                }
                clearInterval(timerInterval);
            }
        }, 100);

        jQuery('.customStickyHeaderBanner .btn-close').on('click', function(){
            jQuery('.customStickyHeaderBanner').hide();
            sessionStorage.setItem('custHeaderBannerClosed', 'yes');
        });

        clearInterval(waitForJquery);  
    }
}, 50);