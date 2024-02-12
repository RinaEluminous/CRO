var waitForJquery = setInterval(function() {

    if (typeof jQuery != "undefined") {
        homePageSocialProofBenefitV2();

        function homePageSocialProofBenefitV2(){
            custV2HtmlOfHomePage ='<div class="custV2BannerMainContainer">'+
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
            '                <a href="https://www.thesashbag.com/collections/best-sellers" class="custV2Btn">Shop best-sellers</a>'+
            '                <div class="custV2GuaranteeWraper">'+
            '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/money_back_guarantee.svg" alt="guarantee">'+
            '                    30 day money back guarantee'+
            '                </div>'+
            '            </div>'+
            '            <div class="col-md-6">'+
            '                <!-- empty -->'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '    <div class="custV2BannerImg">'+
            '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/sb_banner_benefits.gif" alt="banner">'+
            '    </div>'+
            '</div>'+
            '<div class="custV2XmasWraper">'+
            '    <div class="container">'+
            '        <div class="xmasInnerWraper">'+
            '            <div class="xmasContentMain">'+
            '                <div class="offerText">'+
            '                    <p>December\'s Here with <strong>15% Off</strong> &amp; <strong>Free Shipping</strong> all Month Long!</p>'+
            '                </div>'+   
            '                <div class="savingText">Let\'s sleigh the savings!</div>'+
            '            </div>'+
            '            <div class="xmasBtnMain">'+
            '                <div class="bannerTag">'+
            '                    <span class="desk">Automatically applied to cart</span>'+
            '                    <span class="mob">Jingle All the Way</span>'+
            '                </div>'+
            '                <div class="mobAutomatic">Automatically applied to cart</div>'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '</div>'+
            '<div class="custV2SquadWraper">'+
            '    <div class="container">'+
            '        <h2>There\'s a reason why our Sash squad is over 100,000 strong</h2>'+
            '        <div class="custV2SquadImgMain">'+
            '            <div class="custV2SquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-1.png" alt="squad-1">'+
            '            </div>'+
            '            <div class="custV2SquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-2.png" alt="squad-2">'+
            '            </div>'+
            '            <div class="custV2SquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-3.png" alt="squad-3">'+
            '            </div>'+
            '            <div class="custV2SquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-4.png" alt="squad-4">'+
            '            </div>'+
            '            <div class="custV2SquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-6.png" alt="squad-6">'+
            '            </div>'+
            '            <div class="custV2SquadImg">'+
            '                <img src=" https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-5.png" alt="squad-5">'+
            '            </div>'+
            '            <div class="custV2SquadImg">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/squad-7.png" alt="squad-7">'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '</div>';
          

            var intCount = 0;
            var intSocialProofInterval = setInterval(function() {
                intCount += 1;

            if(jQuery('main#MainContent [id*="shopify-section-template--"] [id*="Banner-template--"]').length > 0 && jQuery(".custV2BannerMainContainer").length == 0){

                jQuery(custV2HtmlOfHomePage).appendTo('main#MainContent [id*="shopify-sectio  n-template--"].shopify-section.section:first-child');
                
                jQuery('main#MainContent [id*="shopify-section-template--"] h2:contains(Fits all your basics)').parents('section.shopify-section').addClass('custV2FitAllSection');
  
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