var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
      //add custom sticky footer 
      if(sessionStorage.getItem('custStickyFooterBannerClosed') === null){
        addCustStickyFooterBanner();
      }
          function addCustStickyFooterBanner() {
            var intProfitPercentage = '40%';
            var urlGetAccess = 'test.com';
            var custHtmlOfStickyFooter ='<div class="custBlackFridayStickyWraper">'+
                                        '  <div class="custBlackFridayStickyMain">'+
                                        '    <div class="offerImg">'+
                                        '      <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/black_friday_icon_sticky.png" alt="">'+
                                        '    </div>'+
                                        '    <div class="offerContent">'+
                                        '      <div class="text">'+
                                        '        <div class="saveTxt">'+
                                        '          <span class="icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/fire_shape_icon.svg" alt=""></span>'+
                                        '          SAVE '+ intProfitPercentage +' + GET FREE GIFTS'+
                                        '        </div>'+
                                        '        <p>Get Early Access Deals for Black Friday & Cyber Monday</p>'+
                                        '      </div>'+
                                        '      <div class="button">'+
                                        '        <a href='+urlGetAccess+' class="btn">GET ACCESS</a>'+
                                        '      </div>'+
                                        '    </div>'+
                                        '    <button class="closeBtn"></button>'+
                                        '  </div>'+
                                        '</div>';

            if (jQuery('.custBlackFridayStickyWraper').length == 0) {
                jQuery(custHtmlOfStickyFooter).appendTo('body');
            }



            
        }
        jQuery(document).on('click', '.custBlackFridayStickyWraper .closeBtn', function() {
            jQuery('.custBlackFridayStickyWraper').fadeOut();
            sessionStorage.setItem('custStickyFooterBannerClosed', 'yes'); 
        });
        
        clearInterval(waitForjQuery);
    }
}, 50);