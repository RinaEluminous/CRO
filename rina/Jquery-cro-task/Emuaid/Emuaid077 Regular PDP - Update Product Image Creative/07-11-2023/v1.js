var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined' && jQuery('.flickity-slider').length > 0) {

        var strURL = window.location.href;
        var strMainProductImg = "";
        var strThumbProductImg = "";

        if (strURL.indexOf('emuaid-first-aid-ointment-0-5oz') > 0) {

            if (jQuery(window).width() >= 798) {
                strMainProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_0.5oz2x.png";
                strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_0.5oz_thumb.png";

            } else {
                strMainProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_0.5oz2x_mob.png";
                strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_0.5oz_thumb.png";
            }

        } else if (strURL.indexOf('emuaid-2') > 0) {
            if (jQuery(window).width() >= 798) {
                strMainProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_2oz2x.png";
                strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_2oz_thumb.png";

            } else {
                strMainProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_2oz2x_mob.png";
                strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_2oz_thumb.png";

            }


        } else if (strURL.indexOf('emuaid-first-aid-ointment-16oz') > 0) {
            if (jQuery(window).width() >= 798) {
                strMainProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_16oz2x.png";
                strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_16oz_thumb.png";

            } else {
                strMainProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_16oz2x_mob.png";
                strThumbProductIm00
                
                
                
                g = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_16oz_thumb.png";

            }

        }

        updatePdpProductImg();


        function updatePdpProductImg() {

            if (strMainProductImg !== '' && strMainProductImg !== undefined && strMainProductImg !== null) {

                jQuery('.product_gallery.js-product-gallery .gallery-cell:eq(0) img').addClass('custPdpMainImage');

                jQuery('.custPdpMainImage').attr({
                    'data-zoom-src': strMainProductImg,
                    'data-src': strMainProductImg,
                    'data-srcset': strMainProductImg,
                    'srcset': strMainProductImg,
                    'src': strMainProductImg
                });

                jQuery('.custPdpMainImage').parents('a.lightbox').attr('href', strMainProductImg);
            }
            if (strThumbProductImg !== '' && strThumbProductImg !== undefined && strThumbProductImg !== null) {
                jQuery('.product-gallery__thumbnails .flickity-slider .gallery-cell').eq(0).find('img').attr('src', strThumbProductImg);
            }

        }


        clearInterval(waitForJquery);
    }
}, 50);