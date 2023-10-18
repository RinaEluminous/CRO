var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {

		if(jQuery('.related-products-carousel .slick-slide').length == 0 ) {
		  	jQuery('.related-products-carousel .slick-slide img').each(function (index){
			 	var strImgSrc = jQuery(this).attr('src');
			 	if(strImgSrc.indexOf('_') !== -1){
			 		strText = strImgSrc.split('_').pop();
					console.log( strText );
					console.log( strText.split('.')[0] );
					strText = strText.split('.')[0];
					var strSrc = strImgSrc.replace( '_'+strText, '');
					strSrc = jQuery(this).attr('src',strSrc);
			 	}
			});
		}
		
		clearInterval(waitForJquery);
    }
}, 50);