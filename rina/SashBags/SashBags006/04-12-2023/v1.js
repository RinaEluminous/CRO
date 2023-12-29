var waitForJquery = setInterval(function() {

    if (typeof jQuery != "undefined") {
        homePageSocialProofBenefit();

        function homePageSocialProofBenefit(){
            custHtmlOfHomePage ='<div class="custBannerMainContainer">'+
            '    <div class="page-width">'+
            '        <div class="row">'+
            '            <div class="col-md-6">'+
            '                <div class="reviewWraper">'+
            '                    <div class="starRatings">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="star-icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="star-icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="star-icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="star-icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="star-icon">'+
            '                    </div>'+
            '                    1,300+ 5-star reviews'+
            '                </div>'+
            '                <h2>The last bag you will ever need</h2>'+
            '                <p>Elevate your style without the weight, because sometimes the best accessories are the ones you forget you\'re even wearing.</p>'+
            '                <a href="https://www.thesashbag.com/collections/best-sellers" class="custBtn">Shop best-sellers</a>'+
            '                <div class="custGuaranteeWraper">'+
            '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/money_back_guarantee.svg" alt="guarantee">'+
            '                    30 day money back guarantee'+
            '                </div>'+
            '            </div>'+
            '            <div class="col-md-6">'+
            '                <!-- empty -->'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '    <div class="custBannerImg">'+
            '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/sb_banner_socialproof.gif" alt="banner">'+
            '    </div>'+
            '</div>'+
            '<div class="custSquadWraper">'+
            '    <div class="container">'+
            '        <h2>There\'s a reason why our Sash squad is over 100,000 strong</h2>'+
            '        <div class="custSquadImgMain">'+
            '            <div class="custSquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-1.png" alt="squad-1">'+
            '            </div>'+
            '            <div class="custSquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-2.png" alt="squad-2">'+
            '            </div>'+
            '            <div class="custSquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-3.png" alt="squad-3">'+
            '            </div>'+
            '            <div class="custSquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-4.png" alt="squad-4">'+
            '            </div>'+
            '            <div class="custSquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-6.png" alt="squad-6">'+
            '            </div>'+
            '            <div class="custSquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-5.png" alt="squad-5">'+
            '            </div>'+
            '            <div class="custSquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-7.png" alt="squad-7">'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '</div>';
            var intCount = 0;
            var intSocialProofInterval = setInterval(function() {
                intCount += 1;

            if(jQuery('main#MainContent [id*="shopify-section-template--"] [id*="Banner-template--"]').length > 0 && jQuery(".custBannerMainContainer").length == 0){

                jQuery(custHtmlOfHomePage).appendTo('main#MainContent [id*="shopify-section-template--"].shopify-section.section:first-child');
                
                jQuery('main#MainContent [id*="shopify-section-template--"] h2:contains(Fits all your basics)').parents('section.shopify-section').addClass('custFitAllSection');

                clearInterval(intSocialProofInterval);
            }

            if (intCount === 80) {
                clearInterval(intSocialProofInterval);
            }
        }, 30);

         }
        clearInterval(waitForJquery);
    }
}, 50);