var waitForJquery = setInterval(function() {
    if (typeof jQuery != "undefined") {
        if (jQuery('.template-index').length > 0) {
            replaceHeroSectionOnHP();
        }

        function replaceHeroSectionOnHP() {
            var custHeroSectionHtml = '<div class="custVideoBrandHeroBanner custNoShadow">' +
                '    <div class="custImageHeroBlock">' +
                '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/woman-with-jewelry.jpg" alt="woman with jewelry">' +
                '    </div>' +
                '    <div class="custTextHeroBlock">' +
                '        <h2 class="desktop">New Year New You</h2>' +
                '        <h2 class="mobile"><span>Custom</span> Meaningful Jewelry</h2>' +
                '        <h4>Up To 60% Off </h4>' +
                '        <p>Jewelry with Meaning | We craft Moments into Timeless Treasures</p>' +
                '        <a href="https://www.customcuff.co/collections/best-sellers" class="btn">SHOP NOW</a>' +
                '    </div>' +
                '    <div class="custVideoHeroBlock">' +
                '        <video src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374705-hqkwiuoe/watermarked/540/2022-11-0117.11.372962009533729020191_7030873959.mp4" autoplay loop muted></video>' +
                '    </div>' +
                '</div>';

            var intCount = 0;
            var intHeroSectionInterval = setInterval(function() {
                intCount += 1;

                if (jQuery('.homepage .PageContainer #main').length > 0 && jQuery('.custVideoBrandHeroBanner').length == 0) {

                    jQuery(custHeroSectionHtml).prependTo('.homepage .PageContainer #main');
                }


                if (intCount === 80) {
                    clearInterval(intHeroSectionInterval);
                }
            }, 30);
            //hide shadow on top of hero banner
            setTimeout(function() {
                var intSectionHeight = jQuery('.custVideoBrandHeroBanner').height();
                jQuery(window).on('scroll', function(e) {
                    var intScroll = jQuery(window).scrollTop();
                    console.log('intScroll >>> ' + intScroll);
                    if (intScroll > intSectionHeight) {
                        console.log('IF >>>>>>>>>>>>>>>');
                        jQuery('body header#section-header').removeClass('custNoShadow');
                    } else {
                        console.log('ELSE >>>>>>>>>>>>>>>');
                        jQuery('body header#section-header').addClass('custNoShadow');
                    }
                });
            }, 1000);

        }

    }
}, 50);