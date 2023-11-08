var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

      //add custom sticky footer 
      if(sessionStorage.getItem('custStickyFooterBlackBannerClosed') === null){
        addCustStickyFooterBannerBlack();
      }

  
        function addCustStickyFooterBannerBlack() {

            var custHtmlOfStickyFooterBlack ='<div class="custBlackPromotionBanner">' +
                                        '<div class="custThisMonthSale"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/fire-shape.svg">This month only!</div>' +
                                        '<div class="custProductsBlackImg">' +
                                        '<img src="https://www.thesashbag.com/cdn/shop/products/Black_Classic_Leather.jpg">' +
                                        '</div>' +
                                        '<div class="custProductsBlackText">' +
                                        '<h3>Black November: 20% Off All Month Long!</h3>' +
                                        '<div class="custProductsBlackImg">' +
                                        '<img src="https://www.thesashbag.com/cdn/shop/products/Black_Classic_Leather.jpg">' +
                                        '</div>' +
                                        '<p>Oh, and <b>free shipping</b> on orders over $100. <span class="smileyIcons"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/smiley_icons_1.svg"></span></p>'+
                                        '</div>' +
                                        '<div class="custProductsBlackBtn">' +
                                        '<p>Automatically applied to cart</p>' +
                                        '</div>' +
                                        '<div class="custCloseButtonBlack">' +
                                        '<img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/icon-close.svg">' +
                                        '</div>' +
                                        '</div>';

            if (jQuery('.custBlackPromotionBanner').length == 0) {
                jQuery(custHtmlOfStickyFooterBlack).appendTo('body');
            }
            
            setTimeout(function(){
              jQuery('.custBlackPromotionBanner').addClass('active');
            }, 2000);

            var timesRun = 0;
            var waitForChatIcon = setInterval(function(){
                timesRun += 1;
                if( jQuery('iframe#chat-button').length > 0 && jQuery('.custBlackPromotionBanner').hasClass('active')){
                    jQuery('iframe#chat-button').addClass('custChatIcon');
                    clearInterval(waitForChatIcon);
                }

                if(timesRun === 1000){
                    clearInterval(intSizeDropDownInterval);
                }
            }, 100);
        }
       
        jQuery(document).on('click', '.custBlackPromotionBanner .custCloseButtonBlack', function() {
            jQuery('.custBlackPromotionBanner').removeClass('active');
            sessionStorage.setItem('custStickyFooterBlackBannerClosed', 'yes'); 
            jQuery('iframe#chat-button').removeClass('custChatIcon');

        });
        
        clearInterval(waitForjQuery);
    }
}, 50);