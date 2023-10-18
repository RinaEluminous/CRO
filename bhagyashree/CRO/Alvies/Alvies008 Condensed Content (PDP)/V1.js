var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        //add custom html sections on PDP
        addCustCondensedContentToPdp();

        function addCustCondensedContentToPdp(){
            // var strReviews = arrProdReviews[strProdCategory];
            // if((jQuery('.product-info .badges').length > 0 ) && (strProdCategory == "The Trinity" || strProdCategory == "The Stassney") ){
            //     jQuery('.product-info .badges').addClass('custProductBadges');
            // }

            var intCount    = 0 ;
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


            if(jQuery('.custCheckListPdp').length  == 0 ) {
                jQuery('<div class="custCheckListPdp"><ul><li><img src="https://i.ibb.co/NnjwPQ4/np-check.png">Lifetime Guarantee</li><li><img src="https://i.ibb.co/NnjwPQ4/np-check.png">Free shipping & returns</li></ul></div>').insertBefore('.product-form');
            }

            //Details section
            if(jQuery('.product-page__content-blocks > div:contains(All About The)').length > 0){
               jQuery('.product-page__content-blocks > div:contains(All About The)').addClass('custDetailsSection');

                if(  jQuery('.product-page__content-blocks > div.custDetailsSection + .content-columns').length > 0){
                    jQuery('.product-page__content-blocks > div.custDetailsSection + .content-columns').addClass('custDetails');
                }
            }

            //Feature section
            if( jQuery('.product-page__content-blocks .image-and-text-block:contains(Signature Features)').length > 0 ){
                jQuery('.product-page__content-blocks .image-and-text-block:contains(Signature Features)').addClass('custFeatuesSection');

                if(jQuery('.product-page__content-blocks .image-and-text-block.custFeatuesSection + .image-and-text-block').length > 0 ){
                    jQuery('.product-page__content-blocks .image-and-text-block.custFeatuesSection + .image-and-text-block').addClass('custFeatues');
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

        //on click - Write a review CTA
        jQuery(document).on('click','.custWriteReviewCTA', function (){
            jQuery('div.okeReviews .oke-w-reviews-writeReview a.oke-w-writeReview')[0].click();
        });

        clearInterval(waitForJquery);
    }
}, 50);   