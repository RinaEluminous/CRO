var waitForJquery = setInterval(function() { 
   
    if (typeof jQuery != 'undefined') {
        
        customShopMenuNavigation();

        function customShopMenuNavigation(){
            
            //Mobile
            if(jQuery(window).width() <= 1139){
                
                jQuery('#sidebar-menu').addClass('custNavigation');

                if(jQuery('.SidebarMenu  button.Collapsible__Button.Heading.u-h6:contains(PRODUCTS)').length > 0){
                    jQuery('.SidebarMenu  button.Collapsible__Button.Heading.u-h6:contains(PRODUCTS)').parents('.Collapsible').addClass('custParent');
                }

                if( jQuery('.custDesktopNewArrival').length == 0 ){
                    jQuery('<div class="Collapsible custDesktopNewArrival"><a href="https://www.customcuff.co/collections/new-in" class="Collapsible__Button Heading Link Link--primary u-h6"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/menu-new-arrivals.png"></div>New Arrivals</a></div>').insertAfter('.custParent');
                }

                if(jQuery('.SidebarMenu .Collapsible .Link--primary.u-h6:contains(ENGRAVING INSPIRATION)').parents('.Collapsible').length > 0 && jQuery('.SidebarMenu .Collapsible:contains(ABOUT US)').length > 0){
                    jQuery('.SidebarMenu .Collapsible .Link--primary.u-h6:contains(ENGRAVING INSPIRATION)').parents('.Collapsible').addClass('custMobileMenu');
                    jQuery('.custMobileMenu a').text('INSPIRATION');
                    jQuery('<div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/menu-inspiration.png"></div>').prependTo('.custMobileMenu a');
                    jQuery('.SidebarMenu .Collapsible:contains(SALE)').insertBefore('.custMobileMenu');
                }

                 if(jQuery('.SidebarMenu .Collapsible button.Collapsible__Button:contains(ABOUT US) .img_icon').length == 0 ){
                        jQuery('<div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/menu-about-us.png"></div>').prependTo('.SidebarMenu .Collapsible button.Collapsible__Button:contains(ABOUT US)');
                    }

                if(jQuery('.SidebarMenu .Collapsible:contains(SALE)').length > 0){
                    
                    
                    if(jQuery('.SidebarMenu .Collapsible a.Collapsible__Button[href="/collections/most-discounted"] .img_icon').length == 0){
                        jQuery('<div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/menu-sale.png"></div>').prependTo('.SidebarMenu .Collapsible a.Collapsible__Button[href="/collections/most-discounted"]');
                    }
                }

                jQuery('<div class="custMegaMenuShop"><div class="custMenuList trending"><h6><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/trending.png"></div>Trending</h6><ul><li><a href="https://www.customcuff.co/collections/best-sellers"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/most-popular.png"></div>Best Sellers</a></li><li><a href="https://www.customcuff.co/collections/coordinates-necklace"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/co-ordinate.png"></div>Coordinates</a></li><li><a href="https://www.customcuff.co/collections/most-discounted"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/on-sale.png"></div>On Sale</a></li><li><a href="https://www.customcuff.co/collections/gift-sets"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gift-set.png"></div>GIFT SETS</a></li><li><a href="https://www.customcuff.co/collections/red-collection"><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/red-collection.png"></div>Red Collection</a></li></ul></div><div class="custMenuList"><h6><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/jewelry.png"></div>Jewelry</h6><ul><li class="shopall"><a href="https://www.customcuff.co/collections/all">Shop All</a></li><li><a href="https://www.customcuff.co/collections/best-sellers">Best Sellers</a></li><li><a href="https://www.customcuff.co/collections/custom-bracelets">Bracelets</a></li><li><a href="https://www.customcuff.co/collections/custom-necklace">Necklaces</a></li><li><a href="https://www.customcuff.co/collections/rings">Rings</a></li></ul></div><div class="custMenuList"><h6><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/engraving-styles.png"></div>Engraving Styles</h6><ul><li class="shopall"><a href="https://www.customcuff.co/collections/all">Shop All</a></li><li><a href="https://www.customcuff.co/collections/coordinates-necklace">Coordinates</a></li><li><a href="https://www.customcuff.co/collections/engraved-jewelry">Dates / Text / Names / Words</a></li><li><a href="https://www.customcuff.co/collections/initial-necklace">Initials</a></li><li><a href="https://www.customcuff.co/collections/morse-code-necklace">Morse code</a></li><li><a href="https://www.customcuff.co/collections/handwriting-necklace">Actual handwriting<span class="custStar">(new)</span></a></li><li><a href="https://www.customcuff.co/collections/zodiac-necklace">Custom star map &amp; zodiac<span class="custStar">(new)</span></a></li><li><a href="https://www.customcuff.co/collections/charm-necklace">Custom charm necklace</a></li><li><a href="https://www.customcuff.co/collections/gift-sets">🎁 GIFT SETS / Bundles</a></li></ul></div><div class="custMenuList"><h6><div class="img_icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/collections.png"></div>Collections</h6><ul><li class="shopall"><a href="https://www.customcuff.co/collections/all">Shop All</a></li><li><a href="https://www.customcuff.co/collections/red-collection">Red Collection</a></li><li><a href="https://www.customcuff.co/products/black-series">Matte Black Series</a></li><li><a href="https://www.customcuff.co/collections/minimal-custom-jewelry">Minimal Collection</a></li></ul></div><div class="custMenuList custGiftWraper"><a href="https://www.customcuff.co/collections/gift-sets"><div class="custGiftSetBox"><div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gift-set-collection.png"></div><div class="content"><div class="title">GIFT SETS</div><p>Share a beautiful matching gift with your special one</p><button>View All</button></div></div></a></div></div>').insertAfter('.custDesktopNewArrival');

                    if(jQuery('.custClose').length == 0){
                        jQuery('<button class="custClose Drawer__Close Icon-Wrapper--clickable" data-action="close-drawer" data-drawer-id="sidebar-menu" aria-label="Close navigation"><svg class="Icon Icon--close " role="presentation" viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg></button>').insertAfter('.Header__Wrapper button.Header__Icon.Icon-Wrapper');
                    }

                    var intHeaderHeight = 0 , intHeight = 0;
                    if(jQuery('div#shopify-section-header').length > 0){
                        intHeaderHeight = jQuery('div#shopify-section-header').height();
                    }

                    if(jQuery('#section-announcement').length > 0){
                        intHeight =  jQuery('#section-announcement').height();
                    }

                    var intTotalHeight = intHeaderHeight + intHeight - 10;
                    jQuery('section#sidebar-menu').css('top', intTotalHeight + 'px');
            }
            else{

                if( jQuery('.HorizontalList--spacingExtraLoose .HorizontalList__Item > a[href="/collections/coordinates-necklace"]').length > 0) { 
                    jQuery('.HorizontalList--spacingExtraLoose .HorizontalList__Item > a[href="/collections/coordinates-necklace"]').parents('.HorizontalList__Item').length;
                    jQuery('.HorizontalList--spacingExtraLoose .HorizontalList__Item > a[href="/collections/coordinates-necklace"]').parents('.HorizontalList__Item').remove();
                }
                

                if(jQuery('.custNewArrival').length == 0){
                    jQuery('<li class="HorizontalList__Item custNewArrival"><a href="https://www.customcuff.co/collections/new-in" class="Heading u-h6">New Arrivals<span class="Header__LinkSpacer">New Arrivals</span></a></li>').insertBefore('.HorizontalList--spacingExtraLoose li.HorizontalList__Item:eq(0)');

                }

                if(jQuery('.HorizontalList--spacingExtraLoose .HorizontalList__Item > a[href="/collections/all"]').length > 0){
                    jQuery('.HorizontalList--spacingExtraLoose .HorizontalList__Item > a[href="/collections/all"]').text('SHOP');
                    jQuery('.HorizontalList--spacingExtraLoose .HorizontalList__Item:contains(PRODUCTS)').addClass('custDesktopShopMenu');
                }

                if(jQuery('.HorizontalList .HorizontalList__Item .Heading :contains(ENGRAVING INSPIRATION)').parents('.HorizontalList__Item').length > 0 && jQuery('.HorizontalList > .HorizontalList__Item:contains(ABOUT US)').length > 0){
                    jQuery('.HorizontalList .HorizontalList__Item .Heading :contains(ENGRAVING INSPIRATION)').parents('.HorizontalList__Item').addClass('custMenu');
                    var strMenuElement = jQuery('.custMenu');

                    strMenuElement.html(strMenuElement.html().replace('ENGRAVING INSPIRATION','INSPIRATION')); 
                }

                if(jQuery('.HorizontalList__Item:contains(SALE)').length > 0 && jQuery('.HorizontalList > .HorizontalList__Item:contains(INSPIRATION)').length > 0) {
                    jQuery('.HorizontalList__Item:contains(SALE)').insertBefore('.custMenu');
                }

                if(jQuery('.custMegaMenuShop').length == 0){
                    jQuery('<div class="custMegaMenuShop"> <div class="custMenuList trending"> <h6>Trending</h6> <ul> <li> <a href="https://www.customcuff.co/collections/best-sellers"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/most-popular.png"> </div>Best Sellers </a> </li><li> <a href="https://www.customcuff.co/collections/coordinates-necklace"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/co-ordinate.png"> </div>Coordinates </a> </li><li> <a href="https://www.customcuff.co/collections/most-discounted"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/on-sale.png"> </div>On Sale </a> </li><li> <a href="https://www.customcuff.co/collections/gift-sets"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gift-set.png"> </div>Gift Sets </a> </li><li> <a href="https://www.customcuff.co/collections/red-collection"> <div class="img_icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/red-collection.png"> </div>Red Collection </a> </li></ul> </div><div class="custMenuList"> <h6>Jewelry</h6> <ul> <li class="shopall"> <a href="https://www.customcuff.co/collections/all">Shop All </a> </li><li> <a href="https://www.customcuff.co/collections/best-sellers">Best Sellers</a> </li><li> <a href="https://www.customcuff.co/collections/custom-bracelets">Bracelets</a> </li><li> <a href="https://www.customcuff.co/collections/custom-necklace">Necklaces</a> </li><li> <a href="https://www.customcuff.co/collections/rings">Rings</a> </li></ul> </div><div class="custMenuList"> <h6>Engraving Styles</h6> <ul> <li class="shopall"> <a href="https://www.customcuff.co/collections/all">Shop All </a> </li><li> <a href="https://www.customcuff.co/collections/coordinates-necklace">Coordinates</a> </li><li> <a href="https://www.customcuff.co/collections/engraved-jewelry">Dates / Text / Names / Words</a> </li><li> <a href="https://www.customcuff.co/collections/initial-necklace">Initials</a> </li><li> <a href="https://www.customcuff.co/collections/morse-code-necklace">Morse code</a> </li><li> <a href="https://www.customcuff.co/collections/handwriting-necklace">Actual handwriting <span class="custStar">(new)</span></a> </li><li> <a href="https://www.customcuff.co/collections/zodiac-necklace">Custom star map &amp; zodiac <span class="custStar">(new)</span></a> </li><li> <a href="https://www.customcuff.co/collections/charm-necklace">Custom charm necklace</a> </li><li> <a href="https://www.customcuff.co/collections/gift-sets">🎁 GIFT SETS / Bundles</a> </li></ul> </div><div class="custMenuList"> <h6>Collections</h6> <ul> <li class="shopall"> <a href="https://www.customcuff.co/collections/all">Shop All </a> </li><li> <a href="https://www.customcuff.co/collections/red-collection">Red Collection</a> </li><li> <a href="https://www.customcuff.co/products/black-series">Matte Black Series</a> </li><li> <a href="https://www.customcuff.co/collections/minimal-custom-jewelry">Minimal Collection</a> </li><li> <a href="https://www.customcuff.co/collections/gift-sets"> <div class="custGiftSetBox"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gift-set-collection.png"> </div><div class="content"> <div class="title">Gift Sets</div><p>Share a beautiful matching gift with your special one</p><button> View All </button> </div></div></a> </li></ul> </div></div>').insertAfter('.HorizontalList--spacingExtraLoose .HorizontalList__Item > a[href="/collections/all"]');
                }
            }
        }

        jQuery(document).on('click','.custNavigation .custMenuList', function (){
            jQuery('.custNavigation .custMenuList').not(this).removeClass('custMenuExpand');
            jQuery('.custNavigation .custMenuList').not(this).find('ul').hide();
            jQuery(this).find('ul').slideToggle();
            jQuery(this).toggleClass('custMenuExpand');
        });

        
        jQuery(document).on('click','.Header__Wrapper button.Header__Icon.Icon-Wrapper', function () {
            if(jQuery('#sidebar-menu[aria-hidden="false"]').length > 0 ) {
                jQuery(this).hide();
                jQuery('.custClose').show();
            }
        });


        jQuery(document).on('click','.Header__Wrapper .custClose', function () {
            if(jQuery('#sidebar-menu[aria-hidden="true"]').length > 0 ) {
                jQuery(this).hide();
                jQuery('.Header__Wrapper button.Header__Icon.Icon-Wrapper').show();
            }
        });

    clearInterval(waitForJquery);

    }
}, 50);  