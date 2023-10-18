var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
    	var arrProdReviews = {
	    	"The Rainey":"So thrilled with these boots. The leather is beautifully soft and smooth. The boots are so cute 'cause they go with dresses, shorts, leggings and jeans. They've replaced my sneakers and mules!",
	    	"BFG":"Beautiful, soft and fit great. They feel like I've been wearing them for a month right out of the box. I'm ordering more today.",
	    	"The Guadalupe":"I haven’t ever owned cowboy boots but let me tell you, these will be the only brand I buy! Cute, comfy and felt already broken in.",
	    	"The Manchaca":"The most comfortable boots I’ve ever owned, and I’ve owned quite a few. They are beautiful, comfortable and great customer service. I am a fan for life!",
	    	"The Stassney":"These are the cutest and most comfortable boots. Right when I put them on they felt good. The color and style are perfect. They are so nice I ordered some for Christmas presents.",
	    	"The Comal":"I have had my Alvies for just over a month and they have been great. The craftsmanship exceeded my expectations, and they feel as good as they look. I wear them both with suits and jeans and will certainly be adding more pairs to my collection soon.",
	    	"The Duval":"Love these boots comfortable right out of the box and very stylish!",
	    	"The Lamar":"Dude.... I literally live in these boots.",
	    	"The Rio Grande":"Cool and comfy, right out of the box. I can tell these will last forever! Great quality! Thank you Alvies!",
	    	"The 6th Street":"It would be hard to find a better boot at these prices or even at higher price points. This is my third pair and probably not my last.",
	    	"The Congress":"Perfect fit right out of the box like they were already broken in. Definitely buying another pair in the near future.",
	    	"The Lake Austin":"I wear them every day. Runs true to size. I’ve worn them in the water and they dried fast.",
	    	"The Riverside":"I am a flop-natic and these are some of the absolute best I've ever worn. They feel like soft pillows and warm velvet. I feel like I'm flying when I wear them."
		}	

		addCustHTMLToPdp();

    	function addCustHTMLToPdp(){
    		var intCount = 0 ;
    		var intInterval = setInterval(function (){
    			intCount += 1;
    			console.log("Len >> " + jQuery('.product-info__review-summary .oke-sr-count .oke-sr-total-text').length);
    			if(jQuery('.product-info__review-summary .oke-sr-count .oke-sr-total-text').length > 0) {

    				//if(jQuery('.product-info__review-summary .oke-sr-count .oke-sr-total-text').length > 0){
					var strElement = jQuery('.product-info__review-summary .oke-sr-count .oke-sr-total-text');
					strElement.html(strElement.text().replace(/\ Reviews\b/g, ''));
		    		//}

		    		if(jQuery('.custCheckList').length  == 0 ) {
		    			jQuery('<div class="custCheckList"><ul><li><img src="https://i.ibb.co/NnjwPQ4/np-check.png">Lifetime guarantee</li><li><img src="https://i.ibb.co/NnjwPQ4/np-check.png">Free shipping & returns</li></ul></div>').insertBefore('.product-form');
		    		}

		    		clearInterval(intInterval);
    			}
    			
    			if(intCount === 80){
    				var strElement = jQuery('.product-info__review-summary .oke-sr-count .oke-sr-total-text');
					strElement.html(strElement.text().replace(/\ Reviews\b/g, ''));
					if(jQuery('.custCheckList').length  == 0 ) {
		    			jQuery('<div class="custCheckList"><ul><li><img src="https://i.ibb.co/NnjwPQ4/np-check.png">Lifetime guarantee</li><li><img src="https://i.ibb.co/NnjwPQ4/np-check.png">Free shipping & returns</li></ul></div>').insertBefore('.product-form');
		    		}
    				clearInterval(intInterval);
    			}

    			

    		}, 80);
    		

    		if(jQuery('div.okeReviews .oke-w-reviews-writeReview a.oke-w-writeReview').length > 0 && jQuery('.custWriteReviewBtn').length == 0){
    			jQuery('<button class="custWriteReviewBtn">Write a review</button>').insertAfter('.product-info__review-summary .oke-sr .oke-is-clickable');
    		}

    		if(jQuery('.custTestimonialsBlueWrapper').length == 0){
    			var strProdCategory = jQuery('.product-page .product-info h1.product-info__title').text();
    			console.log("strProdCategory >> " + strProdCategory);
    			var strReviews 		= arrProdReviews[strProdCategory];
    			if(strReviews !== undefined && strReviews !=='' && strReviews !== null ){
    				jQuery('<div class="custTestimonialsBlueWrapper">'+strReviews+'</div>').insertAfter('.product-form__form .product-form__add');
    			}

    			
    		}
    	}

    	jQuery(document).on('click','.custWriteReviewBtn', function (){
    		jQuery('div.okeReviews .oke-w-reviews-writeReview a.oke-w-writeReview')[0].click();
    	});

    	clearInterval(waitForJquery);
    }
}, 50);   