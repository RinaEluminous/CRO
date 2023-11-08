var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
      //add custom sticky footer 
      if(localStorage.getItem('custStickyFooterBannerClosed') === null){
        addCustStickyFooterBanner();
      }
          function addCustStickyFooterBanner() {
            var custHtmlOfStickyFooter ='<div class="custPromotionBanner">' +
                                        '<div class="custHurrySale"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/fire-shape.svg">Hurry! 12 Hour Sale!</div>' +
                                        '<div class="custProductsImg">' +
                                        '<img src="https://www.thesashbag.com/cdn/shop/products/Black_Classic_Leather.jpg?v=1666989157&width=360">' +
                                        '</div>' +
                                        '<div class="custProductsText">' +
                                        '<h3>Bogo Free Sash Bag!</h3>' +
                                        '<p>No longer do you have to decide between 2 bags. Get them both for the cost of one!</p>'+
                                        '</div>' +
                                        '<div class="custProductsButton">' +
                                        '<div class="custProductsImg">' +
                                        '<img src="https://www.thesashbag.com/cdn/shop/products/Black_Classic_Leather.jpg?v=1666989157&width=360">' +
                                        '</div>' +
                                        '<a href="#">SHOP NOW</a>' +
                                        '</div>' +
                                        '<div class="custCloseButton">' +
                                        '<img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/icon-close.svg">' +
                                        '</div>' +
                                        '</div>';

            if (jQuery('.custPromotionBanner').length == 0) {
                jQuery(custHtmlOfStickyFooter).appendTo('body');
            }
        }
        jQuery(document).on('click', '.custPromotionBanner .custCloseButton', function() {
            jQuery('.custPromotionBanner').fadeOut();
            localStorage.setItem('custStickyFooterBannerClosed', 'yes'); 
        });
        
        clearInterval(waitForjQuery);
    }
}, 50);