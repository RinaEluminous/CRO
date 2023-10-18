var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		updatePdpMainImg();

    	function updatePdpMainImg(){
    		jQuery('.product_gallery.js-product-gallery .gallery-cell:eq(0) img').addClass('custPdpMainImage');

			if(jQuery( window ).width() >= 798 ){
				jQuery('.custPdpMainImage').attr({
					'data-zoom-src':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_desk.png', 
					'data-src':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_desk.png',
					'data-srcset':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_desk.png',
					'srcset':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_desk.png',
					'src':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_desk.png'});

				jQuery('.custPdpMainImage').parents('a.lightbox').attr('href','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_desk.png');
			}
			else{
				jQuery('.custPdpMainImage').attr({
					'data-zoom-src':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png', 
					'data-src':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png',
					'data-srcset':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png',
					'srcset':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png',
					'src':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png'});

				jQuery('.custPdpMainImage').parents('a.lightbox').attr('href','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png');
			}
    	}		

		clearInterval(waitForJquery);
    }
}, 50);  