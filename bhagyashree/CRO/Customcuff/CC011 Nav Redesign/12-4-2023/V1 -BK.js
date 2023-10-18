var waitForJquery = setInterval(function() { 
   
    if (typeof jQuery != 'undefined') {
        
        customShopMenuNavigation();

        function customShopMenuNavigation(){
            
            //Mobile
            if(jQuery(window).width() <= 767){
                
                jQuery('#sidebar-menu').addClass('custNavigation');

                if(jQuery('.SidebarMenu  button.Collapsible__Button.Heading.u-h6:contains(PRODUCTS)').length > 0){
                    jQuery('.SidebarMenu  button.Collapsible__Button.Heading.u-h6:contains(PRODUCTS)').addClass('custShopMenu');
                    var strMenuElement = jQuery('.custShopMenu');
                    strMenuElement.html(strMenuElement.html().replace('PRODUCTS','SHOP')); 
                }

                if(jQuery('.SidebarMenu .Collapsible .Link--primary.u-h6:contains(ENGRAVING INSPIRATION)').parents('.Collapsible').length > 0 && jQuery('.SidebarMenu .Collapsible:contains(ABOUT US)').length > 0){
                    jQuery('.SidebarMenu .Collapsible .Link--primary.u-h6:contains(ENGRAVING INSPIRATION)').parents('.Collapsible').addClass('custMobileMenu');
                    jQuery('.custMobileMenu a').text('INSPIRATION');
                    jQuery('.custMobileMenu').insertAfter('.SidebarMenu .Collapsible:contains(ABOUT US)');
                }

                if(jQuery('.SidebarMenu .Collapsible:contains(SALE)').length > 0){
                    jQuery('.SidebarMenu .Collapsible:contains(SALE)').insertBefore('.SidebarMenu .Collapsible:contains(ABOUT US)');
                }

                var strElement = jQuery('button.Collapsible__Button.Heading.u-h6:contains(SHOP)').siblings('.Collapsible__Inner');
                jQuery('<div class="custMegaMenuShop"><div class="custMenuList trending"><h6><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/trending.png"></div>Trending</h6><ul><li><a href="https://www.customcuff.co/collections/best-sellers"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/most-popular.png"></div>Best Sellers</a></li><li><a href="https://www.customcuff.co/collections/coordinates-necklace"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/co-ordinate.png"></div>Coordinates</a></li><li><a href="https://www.customcuff.co/collections/most-discounted"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/on-sale.png"></div>On Sale</a></li><li><a href="https://www.customcuff.co/collections/gift-sets"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gift-set.png"></div>Gift Sets</a></li><li><a href="https://www.customcuff.co/collections/red-collection"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/red-collection.png"></div>Red Collection</a></li></ul></div><div class="custMenuList"><h6><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/jewelry.png"></div>Jewelry</h6><ul><li class="shopall"><a href="https://www.customcuff.co/collections/all">Shop All</a></li><li><a href="https://www.customcuff.co/collections/best-sellers">Best Sellers</a></li><li><a href="https://www.customcuff.co/collections/custom-bracelets">Bracelets</a></li><li><a href="https://www.customcuff.co/collections/custom-necklace">Necklaces</a></li><li><a href="https://www.customcuff.co/collections/rings">Rings</a></li></ul></div><div class="custMenuList"><h6><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/engraving-styles.png"></div>Engraving Styles</h6><ul><li class="shopall"><a href="https://www.customcuff.co/collections/all">Shop All</a></li><li><a href="https://www.customcuff.co/collections/coordinates-necklace">Coordinates</a></li><li><a href="https://www.customcuff.co/collections/engraved-jewelry">Dates / Text / Names / Words</a></li><li><a href="https://www.customcuff.co/collections/initial-necklace">Initials</a></li><li><a href="https://www.customcuff.co/collections/morse-code-necklace">Morse code</a></li><li><a href="https://www.customcuff.co/collections/handwriting-necklace">Actual handwriting (new)</a></li><li><a href="https://www.customcuff.co/collections/zodiac-necklace">Custom star map &amp; zodiac (new)</a></li><li><a href="https://www.customcuff.co/collections/charm-necklace">Custom charm necklace</a></li><li><a href="https://www.customcuff.co/collections/gift-sets">Gift sets / Bundles</a></li></ul></div><div class="custMenuList"><h6><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/collections.png"></div>Collections</h6><ul><li class="shopall"><a href="https://www.customcuff.co/collections/all">Shop All</a></li><li><a href="https://www.customcuff.co/collections/red-collection">Red Collection</a></li><li><a href="https://www.customcuff.co/products/black-series">Matte Black Series</a></li><li><a href="https://www.customcuff.co/collections/minimal-custom-jewelry">Minimal Collection</a></li><li><a href="https://www.customcuff.co/collections/gift-sets"><div class="custGiftSetBox"><div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gift-set-collection.png"></div><div class="content"><div class="title">Gift Sets</div><p>Share a beautiful matching gift with your special one</p><button>View All</button></div></div></a></li></ul></div></div>').prependTo(strElement);
            }
            else{

                if(jQuery('.HorizontalList--spacingExtraLoose .HorizontalList__Item > a[href="/collections/all"]').length > 0){
                    jQuery('.HorizontalList--spacingExtraLoose .HorizontalList__Item > a[href="/collections/all"]').text('SHOP');
                    jQuery('.HorizontalList--spacingExtraLoose .HorizontalList__Item:contains(PRODUCTS)').addClass('custDesktopShopMenu');
                }

                if(jQuery('.HorizontalList .HorizontalList__Item .Heading :contains(ENGRAVING INSPIRATION)').parents('.HorizontalList__Item').length > 0 && jQuery('.HorizontalList > .HorizontalList__Item:contains(ABOUT US)').length > 0){
                    jQuery('.HorizontalList .HorizontalList__Item .Heading :contains(ENGRAVING INSPIRATION)').parents('.HorizontalList__Item').addClass('custMenu');
                    jQuery('.custMenu').insertAfter('.HorizontalList > .HorizontalList__Item:contains(ABOUT US)');
                    var strMenuElement = jQuery('.custMenu');

                    strMenuElement.html(strMenuElement.html().replace('ENGRAVING INSPIRATION','INSPIRATION')); 
                }

                if(jQuery('.HorizontalList__Item:contains(SALE)').length > 0 && jQuery('.HorizontalList > .HorizontalList__Item:contains(ABOUT US)').length > 0) {
                    jQuery('.HorizontalList__Item:contains(SALE)').insertBefore('.HorizontalList > .HorizontalList__Item:contains(ABOUT US)');
                }

                if(jQuery('.custMegaMenuShop').length == 0){
                    jQuery('<div class="custMegaMenuShop"> <div class="custMenuList trending"> <h6>Trending</h6> <ul> <li> <a href="https://www.customcuff.co/collections/best-sellers"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/most-popular.png"> </div>Best Sellers </a> </li><li> <a href="https://www.customcuff.co/collections/coordinates-necklace"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/co-ordinate.png"> </div>Coordinates </a> </li><li> <a href="https://www.customcuff.co/collections/most-discounted"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/on-sale.png"> </div>On Sale </a> </li><li> <a href="https://www.customcuff.co/collections/gift-sets"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gift-set.png"> </div>Gift Sets </a> </li><li> <a href="https://www.customcuff.co/collections/red-collection"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/red-collection.png"> </div>Red Collection </a> </li></ul> </div><div class="custMenuList"> <h6>Jewelry</h6> <ul> <li class="shopall"> <a href="https://www.customcuff.co/collections/all">Shop All </a> </li><li> <a href="https://www.customcuff.co/collections/best-sellers">Best Sellers</a> </li><li> <a href="https://www.customcuff.co/collections/custom-bracelets">Bracelets</a> </li><li> <a href="https://www.customcuff.co/collections/custom-necklace">Necklaces</a> </li><li> <a href="https://www.customcuff.co/collections/rings">Rings</a> </li></ul> </div><div class="custMenuList"> <h6>Engraving Styles</h6> <ul> <li class="shopall"> <a href="https://www.customcuff.co/collections/all">Shop All </a> </li><li> <a href="https://www.customcuff.co/collections/coordinates-necklace">Coordinates</a> </li><li> <a href="https://www.customcuff.co/collections/engraved-jewelry">Dates / Text / Names / Words</a> </li><li> <a href="https://www.customcuff.co/collections/initial-necklace">Initials</a> </li><li> <a href="https://www.customcuff.co/collections/morse-code-necklace">Morse code</a> </li><li> <a href="https://www.customcuff.co/collections/handwriting-necklace">Actual handwriting <span class="custStar">(new)</span></a> </li><li> <a href="https://www.customcuff.co/collections/zodiac-necklace">Custom star map &amp; zodiac <span class="custStar">(new)</span></a> </li><li> <a href="https://www.customcuff.co/collections/charm-necklace">Custom charm necklace</a> </li><li> <a href="https://www.customcuff.co/collections/gift-sets">Gift sets / Bundles</a> </li></ul> </div><div class="custMenuList"> <h6>Collections</h6> <ul> <li class="shopall"> <a href="https://www.customcuff.co/collections/all">Shop All </a> </li><li> <a href="https://www.customcuff.co/collections/red-collection">Red Collection</a> </li><li> <a href="https://www.customcuff.co/products/black-series">Matte Black Series</a> </li><li> <a href="https://www.customcuff.co/collections/minimal-custom-jewelry">Minimal Collection</a> </li><li> <a href="https://www.customcuff.co/collections/gift-sets"> <div class="custGiftSetBox"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gift-set-collection.png"> </div><div class="content"> <div class="title">Gift Sets</div><p>Share a beautiful matching gift with your special one</p><button> View All </button> </div></div></a> </li></ul> </div></div>').insertAfter('.HorizontalList--spacingExtraLoose .HorizontalList__Item > a[href="/collections/all"]');
                }
            }
        }

        jQuery(document).on('click','.custNavigation .custMenuList', function (){
            jQuery('.custNavigation .custMenuList').not(this).removeClass('custMenuExpand');
            jQuery('.custNavigation .custMenuList').not(this).find('ul').hide();
            jQuery(this).find('ul').slideToggle();
            jQuery(this).toggleClass('custMenuExpand');
        });

    clearInterval(waitForJquery);

    }
}, 50);  