var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {
      
      onInitialPageLoad();

      function onInitialPageLoad(){
          var intCount = 0;
          var intInterval = setInterval(function () {
            intCount += 1;
            if(jQuery('html body.bm-test-004 .bm-hero-header').length > 0) {
              hpHeroBannerChanges();
              clearInterval(intInterval);
            }

            if(intCount === 50) {
              clearInterval(intInterval);
            }

        },70);
      }
      

       function hpHeroBannerChanges(){
        if( jQuery('.custHeroSectionHeader').length == 0 ){
          jQuery('<div class="custHeroSectionHeader"> <div class="bm-left"> <div class="custReviewsBox"> <div class="jdgm-prev-badge__stars"> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> </div><div class="text">Over 194,779 5-Star Reviews</div></div><h1 class="bm-heading">The Most Advanced Form of <span class="highlight">Natural</span> Healing Without a Prescription</h1> <h2 class="bm-subheading">Doctor Recommended. Safe For The Entire Family.</h2> </div></div>').insertAfter('html body.bm-test-004 .bm-hero-header');
        }

        if( jQuery('.custAvailableSection').length == 0 ){
          jQuery('<div class="custAvailableSection"> <div class="title">Also available in</div><ul> <li> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/walgreens.svg" alt="walgreens"> </li></ul></div>').insertAfter(' html body.bm-test-004 .bm-top-prod');
        }

        if( jQuery('.custGuaranteedBox').length == 0 ){
        jQuery('<div class="custGuaranteedBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/guarantee-icon.svg" alt="Guaranteed"> </div><div class="text"> <h3 class="bm-item-heading">Guaranteed Results</h3> <p class="bm-item-text">Backed by a 30 day guarantee</p></div></div>').appendTo('html body.bm-test-004 .bm-hero-section');
        }


        if( jQuery('.custStrengthHeadingSection').length == 0 ){
          jQuery("<div class='custStrengthHeadingSection'> <h2>The World's Most Versatile Treatment For Over 100+ Resistant Skin Conditions</h2> <h3>Available in 2 strengths.</h3></div>").insertAfter('.bm15-strength .bm-strength-wrapper .bm-strength-header')
        }

        if( jQuery('.custStrenghtTitle').length == 0 ){
          jQuery('<div class="custStrenghtTitle">What condition do you want to treat?</div>').prependTo('.bm15-strength .bm-strength-wrapper .bm-strength-body');
        }

        if(jQuery('.bm-hero-section .bm-hero-body .bm-most-popular').length > 0){
          jQuery('.bm-hero-section .bm-hero-body .bm-most-popular').text('MAX STRENGTH');
        }

        if( jQuery('.bm-hero-section .bm-hero-body a[data-swiper-slide-index=1]').length > 0 ){
          jQuery('.bm-hero-section .bm-hero-body a[data-swiper-slide-index=1]').addClass('custProductRegular');

          if( jQuery('.bm-hero-section .custProductRegular > div:empty').length > 0 ) {
            jQuery('.bm-hero-section .custProductRegular > div:empty').addClass('custProductBadge');
            jQuery('.bm-hero-section .custProductRegular > div:empty').text('Regular Strength');
          }
          else{
            jQuery('<div class="custProductBadge">Regular Strength</div>').prependTo('.custProductRegular');
          }
        }


        if(jQuery(window).width() <= 767 ) {
          if( jQuery('.custQuizeBanner').length > 0){
            jQuery('html body.bm-test-004 .bm-hero-section').css('margin-top', '30px');  
          }
          else{
             jQuery('html body.bm-test-004 .bm-hero-section').css('margin-top', '0');  
          }
        }
      }


      jQuery(document).on('click','.custQuizeBanner button.btn-close', function() {
        jQuery('html body.bm-test-004 .bm-hero-section').css('margin-top', '0');  
      });

      clearInterval(waitForJquery);  
    }
}, 50); 