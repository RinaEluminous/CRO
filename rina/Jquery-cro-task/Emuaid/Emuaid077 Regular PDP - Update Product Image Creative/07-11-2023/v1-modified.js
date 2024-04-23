var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined' && jQuery('.flickity-slider').length > 0) {
		var strURL = window.location.href;
		var strMainProductImgDesk = strProductMainMobileImg = strThumbProductImg = "";

		if (strURL.indexOf('emuaid-first-aid-ointment-0-5oz') > 0) {
			strMainProductImgDesk = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_0.5oz2x.png";
            strProductMainMobileImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_0.5oz2x_mob.png";
            strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_0.5oz_thumb.png";

		}else if (strURL.indexOf('emuaid-2') > 0) {

			strMainProductImgDesk = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_2oz2x.png";
            strProductMainMobileImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_2oz2x_mob.png";
            strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_2oz_thumb.png";

		}else if (strURL.indexOf('emuaid-first-aid-ointment-16oz') > 0) {

			strMainProductImgDesk = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_16oz2x.png";
            strProductMainMobileImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_16oz2x_mob.png";
            strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_16oz_thumb.png";

		}
    	

		if(strMainProductImgDesk != "" && strProductMainMobileImg != "" && strThumbProductImg !=""){
			updatePdpProductImg();
		}

    	function updatePdpProductImg(){
    		jQuery('.product_gallery.js-product-gallery .gallery-cell:eq(0) img').addClass('custPdpMainImage');

			if(jQuery( window ).width() >= 798 ){

				jQuery('.custPdpMainImage').attr({
					'data-zoom-src':strMainProductImgDesk, 
					'data-src':strMainProductImgDesk,
					'data-srcset':strMainProductImgDesk,
					'srcset':strMainProductImgDesk,
					'src':strMainProductImgDesk
				});

				jQuery('.custPdpMainImage').parents('a.lightbox').attr('href',strMainProductImgDesk);
			}
			else{
				jQuery('.custPdpMainImage').attr({
					'data-zoom-src':strProductMainMobileImg, 
					'data-src':strProductMainMobileImg,
					'data-srcset':strProductMainMobileImg,
					'srcset':strProductMainMobileImg,
					'src':strProductMainMobileImg
				});

				jQuery('.custPdpMainImage').parents('a.lightbox').attr('href',strProductMainMobileImg);
			}

            jQuery('.product-gallery__thumbnails .flickity-slider .gallery-cell').eq(0).find('img').attr('src', strThumbProductImg);
    	}		
		clearInterval(waitForJquery);
    }
}, 50);  