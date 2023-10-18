var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

        var strUrl = "https://ca.trtltravel.com/products/deep-sleep-bundle";

        //add custom sticky footer banner
        if(localStorage.getItem('custIsDSBFooterBannerClosed') === null){
            addCustDSBStickyBanner();
        }
      

        function addCustDSBStickyBanner() {
            if (jQuery('.custDSBSticklyFooterBanner').length == 0) {
                jQuery('<div class="custDSBSticklyFooterBanner"><div class="custHurryUp"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/limited-offer.png"> Hurry! Limited Availability</div><div class="custCloseIcon">✕</div><a class="bm-container-link" href="' + strUrl + '"></a><div class="custDSBBannerWrapper"><div class="custLeftSection"><div class="custBannerHeading"><a href="' + strUrl + '">deep sleep bundle: <span> SAVE 41% + <span> 2 FREE GIFTS</span></span></a></div><div class="custSubHeading"><p>Everything you need to get some serious shut eye without neck pain.</p></div></div><div class="custCtaWrapper"><p><a href="' + strUrl + '" class="stretched-link btn btn-light">SHOP NOW</a></p></div><div class="imgWrapper"><a href="' + strUrl + '"><img class="imgDesktop" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-sticky.png" alt="deep-sleep-sticky"></a></div></div></div>').appendTo('body');
            }
        }
        jQuery(document).on('click', '.custDSBSticklyFooterBanner .custCloseIcon', function() {
            jQuery('.custDSBSticklyFooterBanner').fadeOut();
            localStorage.setItem('custIsDSBFooterBannerClosed', 'yes'); 
        });
      
        jQuery('.custDSBSticklyFooterBanner a').on('click', function(){
           localStorage.setItem('custIsDSBFooterBannerClosed', 'yes');
        });


        clearInterval(waitForjQuery);
    }
}, 50);