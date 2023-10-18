var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        
        //add custom html sections on PDP
        if( jQuery('.template-product').length > 0 ){
            addCustCondensedContentToPdp();
        }

        function addCustCondensedContentToPdp(){
            var strProdCategory = jQuery('.product-page .product-info h1.product-info__title').text().trim();
            if((jQuery('.product-info .badges').length > 0 ) && (strProdCategory == "The Trinity" || strProdCategory == "The Stassney") ){
                jQuery('.product-info .badges').addClass('custProductBadgesPdp');
            }
           
            var intCount    = 0;
            var intInterval = setInterval(function (){
                intCount   += 1;
                if( jQuery('.product-info__review-summary .oke-sr-count').length){
                    addReviewsToPdp();
                }
                if(intCount === 80){
                    addReviewsToPdp();
                    clearInterval(intInterval);
                }
            }, 70);

            //add free shipping and Lifetime Guarantee bullet point
            if(jQuery('.custCheckListPdp').length  == 0 ) {
                jQuery('<div class="custCheckListPdp"><ul><li><img src="https://i.ibb.co/NnjwPQ4/np-check.png">Lifetime Guarantee</li><li><img src="https://i.ibb.co/NnjwPQ4/np-check.png">Free shipping & returns</li></ul></div>').insertBefore('.product-form');
            }

            //Details section
            if(jQuery('.product-page__content-blocks > div:contains(About)').length > 0){
               jQuery('.product-page__content-blocks > div:contains(About)').addClass('custDescription');
                if(  jQuery('.product-page__content-blocks > div.custDescription + .content-columns').length > 0){
                    jQuery('.product-page__content-blocks > div.custDescription + .content-columns').addClass('custDescription');
                }
            }

            //Feature section
            if( jQuery('.product-page__content-blocks .image-and-text-block:contains(Signature Features)').length > 0 ){
                jQuery('.product-page__content-blocks .image-and-text-block:contains(Signature Features)').addClass('custSignFeatures');
                if(jQuery('.product-page__content-blocks .image-and-text-block.custSignFeatures + .image-and-text-block').length > 0 ){
                    jQuery('.product-page__content-blocks .image-and-text-block.custSignFeatures + .image-and-text-block').addClass('custSignFeatures');
                }
            }  

            //About Section
            if(jQuery('.product-page__content-blocks .custSignFeatures:last + .image-and-text-block').length > 0) {
                jQuery('.product-page__content-blocks .custSignFeatures:last + .image-and-text-block').addClass('custAbout');
                jQuery('.product-page__content-blocks .image-and-text-block.custAbout + .image-and-text-block').addClass('custAbout');
                jQuery('.product-page__content-blocks .image-and-text-block.custAbout + .video').addClass('custAbout');
            }

            //add custom tab section
            if(jQuery('.custTabsBlocks').length == 0) {
                jQuery('<div class="custTabsBlocks product-page__content-blocks"><ul class="custListingTabWrapper"><li>FEATURES</li><li>DETAILS</li><li>ABOUT ALVIES</li></ul> <div class="custFeatures custTabsContantWrapper"></div><div class="custDetails custTabsContantWrapper"></div><div class="custAboutAlvies custTabsContantWrapper"></div></div>').insertAfter('#main .product-page .shopify-section:first');

                if(jQuery('.custDescription').length > 0){
                    jQuery('.custDescription').appendTo('.custDetails');
                }
                
                if(jQuery('.custAbout').length > 0){
                    jQuery('.custAbout').appendTo('.custAboutAlvies');
                }

                if(jQuery('.custSignFeatures').length > 0){
                    jQuery('.custSignFeatures').appendTo('.custFeatures');
                }

                setTimeout(function (){
                    //on load show first tab active
                    jQuery('.custTabsBlocks ul li:eq(0)')[0].click();

                    //for mobile only call function
                    if( jQuery(window).width() <= 767 ){
                        addMobileHTML();
                    }
                },550);
                
                //re-position the YMAL section
                if(jQuery('#main .product-page .shopify-section:contains(You May Also Like)').length > 0 ){
                    var strSelector = jQuery('#alvies-reviews').parent('.shopify-section');
                    jQuery('#main .product-page .shopify-section:contains(You May Also Like)').insertAfter(strSelector);
                }
            }
        }

        //add custom Write a review CTA
        function addReviewsToPdp(){
            if( jQuery('.product-info__review-summary .oke-sr-count').length > 0  && jQuery('.custPdpReviewsWrapper').length == 0){
                
                var custHTML = jQuery('.product-info__review-summary .oke-sr-count').html();
                if(jQuery('div.okeReviews .oke-w-reviews-writeReview a.oke-w-writeReview').length > 0){
                    custHTML += ' <button class="custWriteReviewCTA"> Write a review</button>';
                }
                
                custHTML = custHTML.replace(/\ Reviews\b/g, '');
                jQuery('<div class="custPdpReviewsWrapper">'+custHTML+'</div>').insertAfter('.product-info__review-summary .oke-sr .oke-is-clickable');
            }
        }

        //for mobile add logo HTML and Show More/Less CTA
        function addMobileHTML(){
            //hide the extra content from each tab
            jQuery('.custSignFeatures:eq(1),.custAbout:eq(1),.custDescription:eq(1)').addClass('custContentHide');

            //add Show More/Less CTA
            if(jQuery('.custMoreLessCTA').length == 0 && jQuery('.custTabsBlocks').length > 0){
                jQuery('<div class="custMoreLessCTA">Show More</div>').appendTo('.custTabsBlocks');
            }

            //logo section
            if(jQuery('.custLogoListItem').length == 0){
                jQuery('<div class="custLogoListItem"><ul><li class="logoList--item"><img src="//www.alvies.com/cdn/shop/files/logo-05.png?v=1677145378"></li><li class="logoList--item"><img src="//www.alvies.com/cdn/shop/files/logo-04.png?v=1677145468"></li><li class="logoList--item"><img src="//www.alvies.com/cdn/shop/files/logo-01.png?v=1677145442"></li><li class="logoList--item"><img src="//www.alvies.com/cdn/shop/files/logo-02.png?v=1677145342"></li><li class="logoList--item"><img src="//www.alvies.com/cdn/shop/files/logo-06.png?v=1677145487"></li><li class="logoList--item"><img src="//www.alvies.com/cdn/shop/files/Untitled_design_7.jpg?v=1678918243"></li></ul></div>').insertBefore('.product-page .product-page__product-column');
            }
        }

        //on click - Write a review CTA
        jQuery(document).on('click','.custWriteReviewCTA', function (){
            jQuery('div.okeReviews .oke-w-reviews-writeReview a.oke-w-writeReview')[0].click();
        });

        //on click of the tab
        jQuery(document).on('click','.custTabsBlocks ul li', function (){
            var intIndex = jQuery(this).index();
            
            //reset the Show More/Less CTA and tab content
            jQuery('.custMoreLessCTA').text('Show More');
            jQuery('.custSignFeatures:eq(1),.custAbout:eq(1),.custDescription:eq(1)').addClass('custContentHide');

            jQuery('.custTabsBlocks ul li').not(this).removeClass('custActiveTab');
            jQuery(this).addClass('custActiveTab');

            jQuery('.custTabsBlocks .custTabsContantWrapper').removeClass('custActiveContent');
            jQuery('.custTabsBlocks .custTabsContantWrapper:eq("'+intIndex+'")').addClass('custActiveContent');
        });


        jQuery(document).on('click','.custMoreLessCTA', function (){
            if(jQuery(this).text().trim() == 'Show More'){
                jQuery(this).text('Show Less');
                jQuery('.custTabsContantWrapper.custActiveContent .custContentHide').removeClass('custContentHide');
            }
            else{
                jQuery(this).text('Show More');
                jQuery('.custTabsContantWrapper.custActiveContent div[class*="cust"]:last').addClass('custContentHide');
            }
        });

        clearInterval(waitForJquery);
    }
}, 50);   