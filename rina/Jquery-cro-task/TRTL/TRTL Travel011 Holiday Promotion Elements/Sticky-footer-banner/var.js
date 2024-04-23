var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

        jQuery('head').append("<script src='https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/jquery.countdown.min.js'></script>");
        
        var strURL = window.location.href;

        if(jQuery('.customStickyFooterBanner').length == 0 && sessionStorage.getItem('custFooterBannerClosed') === null && strURL.indexOf('collections/halloween-sale-2022') == -1){

            jQuery('<div class="customStickyFooterBanner"><div class="container-xxl position-relative"><div class="pt-3 pb-3 row"><div class="custGetOfferBannerMain"><div class="custColLeft"><div class="custGetOfferDiv"><span class="offerBadge">HALLOWEEN SALE</span><p>Get Up To 35% OFF Bundle Deals + FREE Gifts</p><div class="batIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bat.svg" alt="bat"></div></div><div class="custOfferTimer"><div class="custTimerTitle">Deal ends in:</div><div class="timerMain"><div class="timerBox day">2 <span>Days</span></div><div class="timerBox hours">12 <span>Hours</span></div><div class="timerBox minutes">55 <span>Mins</span></div><div class="timerBox secs">32 <span>Secs</span></div></div></div></div><div class="custColRight"><div class="halloweenIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pumpkin.svg" alt="halloween"></div><div class="custOfferDealBtn"><a href="https://trtltravel.com/collections/halloween-sale-2022" class="btn btn btn-secondary">EXPLORE DEALS</a></div></div></div></div><div class="spiderIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/spider.svg" alt="spider"></div><div class="ghostIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/ghost.svg" alt="ghost"></div><button type="button" class="btn-close"></button></div></div>').appendTo('body');
        }

        var timerInterval = setInterval(function(){
            if(jQuery().countdown){
                var startdate = "2023/10/19 12:08:02",
                    enddate = "2023/10/19 12:14:02";
                if(new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
                    jQuery('.customStickyFooterBanner .timerMain').countdown(enddate, function(event) {
                      jQuery('.customStickyFooterBanner .timerMain .timerBox.day').html(event.strftime('%D') + '<span>Days</span>');
                      jQuery('.customStickyFooterBanner .timerMain .timerBox.hours').html(event.strftime('%H') + '<span>Hours</span>');
                      jQuery('.customStickyFooterBanner .timerMain .timerBox.minutes').html(event.strftime('%M') + '<span>Mins</span>');
                      jQuery('.customStickyFooterBanner .timerMain .timerBox.secs').html(event.strftime('%S') + '<span>Secs</span>');
                    });
                }
                clearInterval(timerInterval);
            }
        }, 100);

        jQuery('.customStickyFooterBanner .btn-close').on('click', function(){
            jQuery('.customStickyFooterBanner').hide();
            sessionStorage.setItem('custFooterBannerClosed', 'yes');
        });

        clearInterval(waitForJquery);  
    }
}, 50);