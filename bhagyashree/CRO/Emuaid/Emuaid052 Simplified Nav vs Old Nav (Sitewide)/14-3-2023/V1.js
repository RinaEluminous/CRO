var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {
        var flag = 0 ;
        custIconInNavAndShippingBanner();
            
        function custIconInNavAndShippingBanner() {
            var timesRun = 0;
            var interval = setInterval(function(){
                timesRun += 1;

                if( (jQuery('.jsc-nav-main-container').length > 0 || jQuery('.jsc-mob-nav-container').length > 0 ) && flag == 0){
                    renameNavigationMenu();
                }

                if(jQuery(window).width() <= 1024){
                    addCustomHTMLMobile();
                }
                else{
                    addCustomHTMLDesktop();
                }
                
                if(timesRun === 60){
                    clearInterval(interval);
                }

            }, 70);

            if (window.location.toString().includes("search?type")) {
                setTimeout(function (){
                    jQuery('.custSearchNavIcon').addClass('custOpenSearch');
                    jQuery("header.jsc-main-nav-menu .jsc-search-container").css("width","100%");
                    jQuery('.custSearchIcon').attr('src','https://cdn.shopify.com/s/files/1/0549/3181/6637/t/2/assets/close-icon.svg?v=166331789832688364571673505205');
                },950);
                
            }
        }

        //Rename menu options 
        function renameNavigationMenu(){
            if(jQuery('.tmenu_item a.tmenu_item_link span.tmenu_item_text:contains(Product)').length > 0){
                
                jQuery('.tmenu_item a.tmenu_item_link:contains(Product)').attr('title','Products');

                jQuery('.tmenu_item a:contains(Product)').find('span.tmenu_item_text').text('Products'); 
            }

            if(jQuery('.tmenu_item a.tmenu_item_link span.tmenu_item_text:contains(About EMUAID)').length > 0){
                
                jQuery('.tmenu_item a.tmenu_item_link:contains(About EMUAID)').attr('title','Why EMUAIDÂ®');

                jQuery('.tmenu_item a:contains(About EMUAID)').find('span.tmenu_item_text').text('Why EMUAIDÂ®'); 
            }

            if(jQuery('.tmenu_item a.tmenu_item_link span.tmenu_item_text:contains(Customer Reviews)').length > 0){
                
                jQuery('.tmenu_item a.tmenu_item_link:contains(Customer Reviews)').attr('title','Reviews');

                jQuery('.tmenu_item a:contains(Customer Reviews)').find('span.tmenu_item_text').text('Reviews'); 
            }

            flag = 1;
        }

        function addCustomHTMLMobile(){
            renameNavigationMenu();

            if(jQuery('.custMobileShippingBoxMain').length == 0){
                jQuery('<div class="custMobileShippingBoxMain"><div class="custMobileShippingBox shipWorldBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/worldwide_icon.svg">We Ship Worldwide</div><div class="custMobileShippingBox shippingBox"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/FOOTER_ICON_2-02_1_600x600.png?v=1617357333">Free Shipping Over $75</div></div>').prependTo('#header[class*="mobile_nav-fixed"]');

                if(jQuery('.customTopBanner').length > 0){
                    var intHeight     = jQuery('.custMobileShippingBoxMain').outerHeight();
                    var intMarginTop  = parseInt(jQuery('.customTopBanner').css('margin-top'));
                    intMarginTop      = intHeight+intMarginTop;
                    jQuery('.customTopBanner').css('margin-top',intMarginTop+'px');
                }

            }
        }


        function addCustomHTMLDesktop(){
            if(jQuery('.custNavLinksMainWraper').length == 0 && jQuery('header:not(#header) .tmenu--wrap nav.tmenu_navbar ul.tmenu_nav').length > 0) {
                jQuery('<div class="custNavLinksMainWraper"> <div class="tmenu_item tmenu_item--root tmenu_item_level_0 tmenu_item_submenu_type_flyout tmenu_item_has_child custCallNavSubMenu"> <a class="tmenu_item_link"> <span class="tmenu_item_text"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/call_icon.svg"> </span> </a> <ul class="tmenu_submenu tmenu_submenu_type_flyout tmenu_submenu--desktop tmenu_submenu_flyout_position_automatic"> <li> <a href="tel:+18008813900"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/call_icon.svg"> </div><div class="text"> Call Toll Free <span>1-800-881-3900</span> </div></a> </li><li> <a href="tel:+18884501718"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/text_icon.svg"> </div><div class="text">Text Toll Free <span>1-888-450-1718</span> </div></a> </li><li class="time"> <a> <div class=" icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/clock_icon.svg"> </div><div class="text">M-F: 8:30AM-6PM EST <span>Sat-Sun Closed</span></div></a> </li></ul> </div></div>').insertAfter('header.jsc-main-nav-menu .tmenu_navbar');

                //append only to desktop main navigation and not the sticky navigation
                if(jQuery('.custCartIconContainer').length == 0 && jQuery('.custNavLinksMainWraper').length > 0) {
                    jQuery('header.jsc-main-nav-menu .header .top-bar--right-menu .cart-container').addClass("custCartIconContainer");
                    jQuery('header.jsc-main-nav-menu .header .top-bar--right-menu .cart-container').appendTo('.custNavLinksMainWraper');
                }

                if(jQuery('.custSearchContainerMain').length == 0 && jQuery('.custNavLinksMainWraper').length > 0) {
                  jQuery('header.jsc-main-nav-menu .jsc-search-container').addClass("custSearchContainerMain");
                  jQuery('header.jsc-main-nav-menu .jsc-search-container').insertAfter('.custNavLinksMainWraper .custCallNavSubMenu');
                }            


                if(jQuery('.custSearchNavIcon').length == 0 && jQuery('.custCallNavSubMenu').length > 0) {
                    jQuery('<div class="tmenu_item tmenu_item--root tmenu_item_level_0 tmenu_item_submenu_type_flyout tmenu_item_has_child custSearchNavIcon"> <a  class="tmenu_item_link"> <span class="tmenu_item_text"><img class="custSearchIcon" src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/search-icon.svg"></span></a></div>').insertAfter('.custCallNavSubMenu');
                }

                if(jQuery('.custShippingWrap').length == 0 && jQuery('header.jsc-main-nav-menu .header ul.social_icons + ul.menu').length > 0){
                    jQuery('<li class="custShippingWrap"><div class="shippingBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/worldwide_icon.svg">We Ship Worldwide</div></li><li class="custShippingWrap"><div class="shippingBox"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/FOOTER_ICON_2-02_1_600x600.png?v=1617357333">Free Shipping Over $75</div></li>').appendTo('header.jsc-main-nav-menu .header ul.social_icons + ul.menu');
                }

                if(jQuery('header.jsc-main-nav-menu .header__logo a.jsc-header-half').length > 0 && jQuery('header.jsc-main-nav-menu .main-nav .nav .tmenu_wrapper').length > 0){
                    jQuery('header.jsc-main-nav-menu .header__logo a.jsc-header-half').insertBefore('header.jsc-main-nav-menu .main-nav .nav .tmenu_wrapper');
                }

                jQuery('<div class="custNavLinksMainWraper"> <div class="tmenu_item tmenu_item--root tmenu_item_level_0 tmenu_item_submenu_type_flyout tmenu_item_has_child custCallNavSubMenu"> <a class="tmenu_item_link"> <span class="tmenu_item_text"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/call_icon.svg"> </span> </a> <ul class="tmenu_submenu tmenu_submenu_type_flyout tmenu_submenu--desktop tmenu_submenu_flyout_position_automatic"> <li> <a href="tel:+18008813900"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/call_icon.svg"> </div><div class="text"> Call Toll Free <span>1-800-881-3900</span> </div></a> </li><li> <a href="tel:+18884501718"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/text_icon.svg"> </div><div class="text">Text Toll Free <span>1-888-450-1718</span> </div></a> </li><li class="time"> <a> <div class=" icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/clock_icon.svg"> </div><div class="text">M-F: 8:30AM-6PM EST <span>Sat-Sun Closed</span></div></a> </li></ul> </div></div>').insertAfter('.main-nav__wrapper.sticky_nav .tmenu_navbar');
            }
        }

        //hide search icon and show search input(if visible) when user click any where on page
        jQuery("body").on("click", function(event) {
            if(jQuery(event.target).parents('.custSearchNavIcon').length == 1 && (event.target.id !== 'searchbox' || event.target.id === '') ) {
                if(jQuery('.custSearchNavIcon').hasClass('custOpenSearch')){
                    jQuery('.custSearchNavIcon').removeClass('custOpenSearch');
                    jQuery("header.jsc-main-nav-menu .jsc-search-container").css("width","0");
                    
                    setTimeout(function (){
                        jQuery('.custSearchIcon').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/search-icon.svg');
                    },350);
                }
                else{
                    jQuery('.custSearchNavIcon').addClass('custOpenSearch');
                    jQuery("header.jsc-main-nav-menu .jsc-search-container").css("width","100%");
                    jQuery('.custSearchIcon').attr('src','https://cdn.shopify.com/s/files/1/0549/3181/6637/t/2/assets/close-icon.svg?v=166331789832688364571673505205');
                }
                
            }
        });
    
        clearInterval(waitForJquery);

    }
}, 50);