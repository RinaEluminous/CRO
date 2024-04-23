console.log("CC037: Coordinates Hero");
var waitForJquery = setInterval(function() {

    if (typeof jQuery != "undefined") {

        var strURL = window.location.href;

        if (strURL.indexOf("collections/coordinates-necklace") > 0) {

            addCustHeroHtmlOnCordinates();
        }

        
        function addCustHeroHtmlOnCordinates() {

            //add hero section 
            var custHeroHtml = '<div class="custCoordinateHeroBannerMain">' +
                '    <div class="coordinateImgBox">' +
                '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/co-ordinate-hero-1.png" alt="">' +
                '    </div>' +
                '    <div class="coordinateImgBox">' + 
                '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/co-ordinate-hero-2.png" alt="">' +
                '    </div>' +
                '    <div class="coordinateImgBox">' +
                '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/co-ordinate-hero-3.png" alt="">' +
                '    </div>' +
                '</div>';

            var intCount = 0;
            var intHeroInterval = setInterval(function() {
                intCount += 1;

                if (jQuery('.template-collection.-product .PageContainer #main header.PageHeader .PageHeader__ImageWrapper').length > 0 && jQuery('.custCoordinateHeroBannerMain').length == 0) {

                    jQuery(custHeroHtml).appendTo('.template-collection.-product .PageContainer #main header.PageHeader .PageHeader__ImageWrapper');
                    jQuery('body header#section-header').addClass('custNoShadow');

                    clearInterval(intHeroInterval);
                }
                //change Section header description 
                if (jQuery('.template-collection.-product .PageContainer #main header.PageHeader .SectionHeader__Description span').length > 0) {
                    jQuery('.template-collection.-product .PageContainer #main header.PageHeader .SectionHeader__Description span').text('You choose the location, we make it unforgettable by engraving the coordinates on a timeless piece of jewelery.');

                    jQuery('.template-collection.-product .PageContainer #main header.PageHeader .SectionHeader__Description span').css('opacity', '1');

                    clearInterval(intHeroInterval);




                }

                if (intCount === 80) {
                    clearInterval(intHeroInterval);
                }
            }, 30);

            setTimeout(function() {
                var intSectionHeight = jQuery('.custCoordinateHeroBannerMain').height();

                jQuery(window).on('scroll', function(e) {
                    var intScroll = jQuery(window).scrollTop();
                    if (intScroll > intSectionHeight) {
                        jQuery('body header#section-header').removeClass('custNoShadow');
                    } else {
                        jQuery('body header#section-header').addClass('custNoShadow');
                    }
                });
            }, 1000);
        }

        clearInterval(waitForJquery);
    }
}, 50);