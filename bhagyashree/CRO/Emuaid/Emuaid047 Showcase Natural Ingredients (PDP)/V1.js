var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
    	console.log("%c Emuaid047", "background:red;color : white;padding:10px");
		
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
			}
			else{
				jQuery('.custPdpMainImage').attr({
					'data-zoom-src':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png', 
					'data-src':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png',
					'data-srcset':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png',
					'srcset':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png',
					'src':'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_mob.png'});
			}
    	}
    	

		jQuery(document).on('click','.product_gallery.js-product-gallery .gallery-cell img.custPdpMainImage,.fancybox-slide.fancybox-slide--image a.fancybox-item.fancybox-nav.fancybox-next', function () {
			console.log("on main image click");
			var intCount 	= 0;
			var intInterval = setInterval(function () {
				intCount += 1;
				console.log("Len << " + jQuery('.fancybox-slide.fancybox-slide--image.fancybox-slide--current').length);

				if(jQuery('.fancybox-slide.fancybox-slide--image.fancybox-slide--current').length > 0){
					jQuery('.fancybox-slide.fancybox-slide--image.fancybox-slide--current .fancybox-image-wrap img.fancybox-image').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_desk.png');
					clearInterval(intInterval);
				}
				if(intCount === 50){
					clearInterval(intInterval);
				}
				
			},70);
			
			if (document.querySelector('.fancybox-slide.fancybox-slide--image a.fancybox-item.fancybox-nav.fancybox-next') !== null) {
				document.querySelector('.fancybox-slide.fancybox-slide--image a.fancybox-item.fancybox-nav.fancybox-next').addEventListener("click", function(event) {
		           
		            console.log("on next click : javascript");

		         
		        });
			}
		});

		/*jQuery('.fancybox-slide.fancybox-slide--image a.fancybox-item.fancybox-nav.fancybox-next').on('click', function () {
			console.log("on next click");
			var intCount 	= 0;
			var intInterval = setInterval(function () {
				intCount += 1;
				console.log("Len << " + jQuery('.fancybox-slide.fancybox-slide--image.fancybox-slide--current').length);

				if(jQuery('.fancybox-slide.fancybox-slide--image.fancybox-slide--current').length > 0){
					jQuery('.fancybox-slide.fancybox-slide--image.fancybox-slide--current .fancybox-image-wrap img.fancybox-image').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/natural_ingradient_img_desk.png');
					clearInterval(intInterval);
				}
				if(intCount === 50){
					clearInterval(intInterval);
				}
				
			},70);
		});*/

		clearInterval(waitForJquery);
    }
}, 50);  