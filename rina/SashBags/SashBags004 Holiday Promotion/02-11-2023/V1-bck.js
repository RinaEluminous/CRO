var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

      //add custom sticky footer 
      if(sessionStorage.getItem('custStickyFooterBannerClosed') === null){
        addCustStickyFooterBanner();
      }
    function addCustStickyFooterBanner() {
        var custHtmlOfStickyFooter ='<div class="custPromotionBanner">' +
                                        '<div class="custHurrySale"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/fire-shape.svg">Hurry! 12 Hour Sale!</div>' +
                                        '<div class="custProductsImg">' +
                                        '<img src="https://www.thesashbag.com/cdn/shop/products/Black_Classic_Leather.jpg?v=1666989157&width=360">' +
                                        '</div>' +
                                        '<div class="custProductsText">' +
                                        '<h3>Buy One Get One Free Sash Bag</h3>' +
                                        '<div class="custProductsImg">' +
                                        '<img src="https://www.thesashbag.com/cdn/shop/products/Black_Classic_Leather.jpg?v=1666989157&width=360">' +
                                        '</div>' +
                                        '<p>Get two bags for the price of one! Gift a bag to someone or yourself.</p>'+
                                        '</div>' +
                                        '<div class="custProductsButton">' +
                                        '<p>Automatically applied to cart</p>' +
                                        '</div>' +
                                        '<div class="custCloseButton">' +
                                        '<img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/icon-close.svg">' +
                                        '</div>' +
                                        '</div>';

            if (jQuery('.custPromotionBanner').length == 0) {
                jQuery(custHtmlOfStickyFooter).appendTo('body');
            }
            
            setTimeout(function(){
              jQuery('.custPromotionBanner').addClass('active');
            }, 3000);

            var timesRun = 0;
            var waitForChatIcon = setInterval(function(){
                timesRun += 1;
                if( jQuery('iframe#chat-button').length > 0 && jQuery('.custPromotionBanner').hasClass('active')){
                    jQuery('iframe#chat-button').addClass('custChatIcon');
                    clearInterval(waitForChatIcon);
                }

                if(timesRun === 1000){
                    clearInterval(intSizeDropDownInterval);
                }
            }, 100);
        }
       
        jQuery(document).on('click', '.custPromotionBanner .custCloseButton', function() {
            jQuery('.custPromotionBanner').removeClass('active');
            sessionStorage.setItem('custStickyFooterBannerClosed', 'yes'); 
            jQuery('iframe#chat-button').removeClass('custChatIcon');

        });
        
        clearInterval(waitForjQuery);
    }
}, 50);