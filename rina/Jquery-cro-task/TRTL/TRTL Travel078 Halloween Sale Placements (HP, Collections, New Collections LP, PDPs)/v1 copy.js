var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

        jQuery('head').append("<script src='https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/jquery.countdown.min.js'></script>");
        
        var strURL = window.location.href;

        if(jQuery('.custHalloweenStickyFooter').length == 0 && sessionStorage.getItem('custHalloweenStickyFooterClosed') === null && strURL.indexOf('collections/halloween-sale-2022') == -1){

            jQuery('<div class="custHalloweenStickyFooter"><div class="container-xxl position-relative"><div class="pt-2 pb-2 row"><div class="custGetOfferBannerMain"><div class="custColLeft"><div class="custGetOfferDiv"><span class="offerBadge"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="36" viewBox="0 0 12 36" fill="" style=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 10V26L12 36V0ZM8 15C6.34315 15 5 16.3432 5 18C5 19.6569 6.34315 21 8 21C9.65685 21 11 19.6569 11 18C11 16.3432 9.65685 15 8 15Z" fill="black"></path><script xmlns=""></script></svg> Halloween Sale</span><div class="batIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bat.svg" alt="bat"></div><div class="custOfferTimer"><div class="custTimerTitle">Deal ends in:</div><div class="timerMain"><div class="timerBox day">2 <span>Days</span></div><div class="timerBox hours">12 <span>Hours</span></div><div class="timerBox minutes">55 <span>Mins</span></div><div class="timerBox secs">32 <span>Secs</span></div></div></div></div><p>GET <span>25% OFF + Free GIFT!</span></p></div><div class="custColRight"><div class="ghostIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/ghost.svg" alt="ghost"></div><div class="custOfferDealBtn"><a href="https://trtltravel.com/collections/halloween-sale-2022" class="btn btn btn-secondary">SHOP NOW</a></div></div></div></div><div class="spiderIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/spider.svg" alt="spider"></div><button type="button" class="btn-close"></button></div></div>').appendTo('body');
        }

        var timerInterval = setInterval(function(){
            if(jQuery().countdown){
                var startdate = "2023/10/19 09:30:00",
                    enddate = "2023/11/01 11:59:00";
                if(new Date() >= new Date(startdate) && new Date() <= new Date(enddate)) {
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

        jQuery('.custHalloweenStickyFooter .btn-close').on('click', function(){
            jQuery('.custHalloweenStickyFooter').hide();
            sessionStorage.setItem('custHalloweenStickyFooterClosed', 'yes');
        });

        clearInterval(waitForJquery);  
    }
}, 50);