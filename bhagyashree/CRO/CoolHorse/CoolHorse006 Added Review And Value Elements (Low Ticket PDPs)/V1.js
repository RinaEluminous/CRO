var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		//call function only for PDPs
		if( jQuery('#js-PROD').length > 0 ){
			addCustomSectionToPDP();
		}

		//fnction to add custom class and HTML
    	function addCustomSectionToPDP(){
			//add custom class to form parent div and add link to 'Learn more' CTA
			if(jQuery('.product-information--purchase .row #bread-checkout-form').length > 0){
				jQuery('.product-information--purchase .row #bread-checkout-form').parent('div').addClass('custFormParent');

				var intCount = 0;
				var intInterval  = setInterval(function (){
					intCount += 1; 
					console.log("Len >> " + jQuery('.custFormParent form#bread-checkout-form a').length);
					if( jQuery('.custFormParent form#bread-checkout-form a').length > 0 ) {
						jQuery('.custFormParent form#bread-checkout-form a').attr('href','https://shop.coolhorse.com/store/product/CHKIDROPE');
						clearInterval(intInterval);
					}

					if(intCount == 70){
						clearInterval(intInterval);
					}

				},50);
				
			}

			//add custom HTML after Add to cart CTA
			if(jQuery('.custProductInfoListing').length == 0 ){
				jQuery('<div class="custProductInfoListing"><ul><li>Earn rewards every time you spend</li><li>Price match guarantee</li><li>Low shipping rates</li><li>14-day money back guarantee</li></ul></div><div class="custNeedMoreInformation"> <div> <img src="https://i.ibb.co/JmrGLTB/need-more-information.png"> </div><div><h3>Need more information?</h3><p>Our friendly Saddle specialists are here to help. Give us a call now or request info.</p><ul><li>Working hours:</li><li><span>M-F: 9 am - 6pm </span> <span>CSTSAT: 9 - noon CST</span></li></ul></div><ol><li><span><img src="https://i.ibb.co/kJqyD3J/np-chat.jpg"></span>806-468-9121</li><li><span><img src="https://i.ibb.co/L9M4G98/np-phone.jpg"></span>Live Chat</li></ol> </div>').insertAfter('.product-information--purchase .row #bread-checkout-form')
			}

			//Re-position the reviews for Desktop/Mobile
			if(jQuery('.main-content #review_header').length > 0 ){
		  		if(jQuery(window).width() <= 767 ){
		  		  	jQuery('.main-content #review_header').insertAfter('.custProductInfoListing');
		  		}
		  		else{
		  			jQuery('.main-content #review_header').appendTo('.product-information--images .column.thumbnail-wrapper');
		  		}
			}
    	}
		
		clearInterval(waitForJquery);
    }
}, 50);


jQuery('#chat-widget-container iframe').contents().find("body")[0].click();

jQuery("#iframe").contents().find("a:first").click();

var $iframe = jQuery("#chat-widget-container").contents();
jQuery("body", $iframe).trigger("click");

document.getElementById('chat-widget-container').contentWindow.find('body').trigger('click');

document.getElementById("chat-widget-container").contentWindow.document.body.trigger('click');

jQuery('#chat-widget-container').contents().find('body').trigger("click");

document.getElementById('chat-widget-container').contentWindow.find('#chat-widget').trigger('click');

document.getElementById('chat-widget-container').contentWindow.trigger('click');
jQuery("div#chat-widget-container")[0].click();

