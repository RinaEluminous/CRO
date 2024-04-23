console.log("CC036 PDP Comparison Highlight");
var waitForJquery = setInterval(function () {

    if (typeof jQuery != "undefined") {

        var strURL = window.location.href;

        if (strURL.indexOf("/products/custom-necklace") > 0) {
            addBeyondCompareSection();
        }

        function addBeyondCompareSection() {

            var beyondCompareSectionHtml = '<div class="custBeyondCompSection">' +
                '    <div class="wearthis" id="wearthis">' +
                '        <div class="wearthis-wrapper">' +
                '            <div class="wearthis-Cont">' +
                '                <h1 class="wearthis-heading">Beyond Compare</h1>' +
                '                <table class="wearthis-table">' +
                '                    <tbody>' +
                '                        <tr>' +
                '                            <th class="wearthis-borders"></th>' +
                '                            <th class="wearthis-borders wearthis-middle wearthis-middle-bordertop"> <img width="500" height="300" decoding="async" loading="lazy" class="wearthis-topImg" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/div.lp-pom-image-container%20(1).svg" alt=""></th>' +
                '                            <th class="wearthis-borders wearthis-jewelry">Other Custom Jewelry Brands' +
                '                            </th>' +
                '                        </tr>' +
                '                        <tr>' +
                '                            <td class="wearthis-borders wearthis-left">Custom Engraving Options' +
                '                            </td>' +
                '                            <td class="wearthis-borders wearthis-coordinates wearthis-middle">Coordinates, dates, initials,' +
                '                                names, morse code, Zodiac signs, words, handwriting, quotes, etc.&nbsp;</td>' +
                '                            <td class="wearthis-borders wearthis-initial">Initials only</td>' +
                '                        </tr>' +
                '                        <tr>' +
                '                            <td class="wearthis-borders wearthis-left">Tarnish, Sweat &amp; Water-Proof</td>' +
                '                            <td class="wearthis-borders wearthis-middle"><img width="500" height="300" decoding="async" loading="lazy" class="wearthis-middleImg" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/div.lp-pom-image-container.svg" alt=""></td>' +
                '                            <td class="wearthis-borders wearthis-last"><img width="500" height="300" decoding="async" loading="lazy" class="wearthis-lastImg" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/6141cd40-close-1-1.svg.svg" alt=""></td>' +
                '                        </tr>' +
                '                        <tr>' +
                '                            <td class="wearthis-borders wearthis-left">Adjustable For A Perfect Fit&nbsp;</td>' +
                '                            <td class="wearthis-borders wearthis-middle"><img width="500" height="300" decoding="async" loading="lazy" class="wearthis-middleImg" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/div.lp-pom-image-container.svg" alt=""></td>' +
                '                            <td class="wearthis-borders wearthis-last"><img width="500" height="300" decoding="async" loading="lazy" class="wearthis-lastImg" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/6141cd40-close-1-1.svg.svg" alt=""></td>' +
                '                        </tr>' +
                '                        <tr>' +
                '                            <td class="wearthis-borders wearthis-left">316L Stainless Steel Dipped In 18k Gold&nbsp;</td>' +
                '                            <td class="wearthis-borders wearthis-middle"><img width="500" height="300" decoding="async" loading="lazy" class="wearthis-middleImg" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/div.lp-pom-image-container.svg" alt=""></td>' +
                '                            <td class="wearthis-borders wearthis-last"><img width="500" height="300" decoding="async" loading="lazy" class="wearthis-lastImg" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/6141cd40-close-1-1.svg.svg" alt=""></td>' +
                '                        </tr>' +
                '                        <tr>' +
                '                            <td class=" wearthis-left">The Perfect Gift, Guaranteed&nbsp;&nbsp;</td>' +
                '                            <td class="wearthis-middle  wearthis-middle-borderbottom"><img width="500" height="300" decoding="async" loading="lazy" class="wearthis-middleImg" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/div.lp-pom-image-container.svg" alt=""></td>' +
                '                            <td class="wearthis-last"><img width="500" height="300" decoding="async" loading="lazy" class="wearthis-lastImg" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/6141cd40-close-1-1.svg.svg" alt=""></td>' +
                '                        </tr>' +
                '                    </tbody>' +
                '                </table>' +
                '                <div class="wearthis-bottom">' +
                '                    <div class="wearthis-reviews">' +
                '                        <img width="500" height="300" decoding="async" loading="lazy" src="https://d27c6j8064skg9.cloudfront.net/growthHit/customcuff/CC033/icons.svg" alt="">' +
                '                        <p class="wearthis-reviewText">4,800+ 5-Star Reviews</p>' +
                '                    </div>' +
                '                    <div class="wearthis-btn">' +
                '                        <span class="wearthis-btnInr">START CUSTOMIZING NOW</span>' +
                '                    </div>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';


            if (jQuery("#shopify-section-template--15492276715581__1660109209723fa837").length > 0 && jQuery(".custBeyondCompSection").length == 0) {

                jQuery(beyondCompareSectionHtml).insertBefore('#shopify-section-template--15492276715581__1660109209723fa837');

            }
        }

        jQuery(document).on('click', '.custBeyondCompSection .wearthis-btn', function () {

            var tabAccordTop = jQuery('#Product__AddToCart').offset().top;

            if (jQuery(window).width() <= 767) {
                tabAccordTop + 120;
            }
            else {
                tabAccordTop -= 150;
            }

            jQuery("html, body").animate({
                scrollTop: tabAccordTop
            }, 1000);



        });

        clearInterval(waitForJquery);

    }
}, 50);