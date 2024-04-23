var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
      var strUrl = "https://trtltravel.com/products/deep-sleep-bundle";
      //add custom sticky footer banner
      if(localStorage.getItem(' custPillowPopUpStickyFooterBannerClosed') === null){
        addCustStickyPillowPopBanner();
      }

          function addCustStickyPillowPopBanner() {

            if (jQuery('.custPillowPopUpWrapper').length == 0) {
                jQuery('<div class="custPillowPopUpWrapper"><span class="custPillowHurryText"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/fire-icon.png" alt="Fire Icon">Hurry! Limited Availability</span><div class="custPillowPopUpWrapperPopUpCloseIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/close-icon-close-2.svg" alt="Close Icon"></div><div class="custPillowImg"><a href="' + strUrl + '"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/new-travel-pillow-cool-074.png" alt="NEw release: Travel PILLOW COOL!"></a></div><div class="custPillowText"><div class="custLeftText"><h4 class="custPillowTextHeading"><a href="' + strUrl + '"><span>NEw release:</span>Travel PILLOW COOL!</a></h4><p class="custPillowTextSubHeading">Keeps you cool, comfortable, and fresh all flight long. No sweat.</p></div></div><a href="' + strUrl + '" class="custPillowTextBtn">Shop Now</a></div>').appendTo('body');
            }
        }
       
     
        jQuery(document).on('click', '.custPillowPopUpWrapper .custPillowPopUpWrapperPopUpCloseIcon', function() {
            jQuery('.custPillowPopUpWrapper').fadeOut();
            localStorage.setItem(' custPillowPopUpStickyFooterBannerClosed', 'yes'); 
        });
      
        jQuery('.custPillowPopUpWrapper a').on('click', function(){
           localStorage.setItem(' custPillowPopUpStickyFooterBannerClosed', 'yes');
        });


        clearInterval(waitForjQuery);
    }
}, 50);