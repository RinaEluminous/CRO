var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

    	updateCartAddCTAV2();
      	checkGiftWrapInStockV2();

	    var oldXHR = window.XMLHttpRequest;
      	function newXHR() {
	        var realXHR = new oldXHR();
	        realXHR.addEventListener("readystatechange", function() {
	          if(realXHR.readyState == 4 && realXHR.status == 200){ 
	           setTimeout(function () {
	              var strAjaxResponseURL  = realXHR.responseURL;
	              //checking for cart function here
	              if(strAjaxResponseURL.indexOf('/cart.js') > -1){
	                //call your custom function/code here
	                checkGiftWrapInStockV2();
	                updateCartAddCTAV2();
	              } 
	            }, 100); 
	         	}
	        }, false);
          return realXHR;
        }
	    window.XMLHttpRequest = newXHR;

	    function updateCartAddCTAV2(){
	    	var intCount = 0;
	    	var intInterval = setInterval(function (){
	    		intCount += 1;
		      	if(jQuery('#DrawerCartForm .cart-drawer-upsell-section .drawer-upsell-item-content .drawer-upsell-atc-wrapper .drawer-upsell-item-atc-btn:contains(Add)').length > 0){
		        	jQuery('#DrawerCartForm .cart-drawer-upsell-section .drawer-upsell-item-content .drawer-upsell-atc-wrapper .drawer-upsell-item-atc-btn:contains(Add)').text('Add +');
		        }

		        if(intCount === 80){
	       			clearInterval(intInterval);
	       		}
	    	},20);
	    }
	    	
        //function to check if gift wrap is in stock/not
    	function checkGiftWrapInStockV2(){
        	jQuery.get('https://www.customcuff.co/products/gift-packaging', function(htmlResponse) {
          
	          	if(jQuery(htmlResponse).find(".ProductForm__BuyButtons .ProductForm__AddToCart").length > 0) {
	              var strCtaText  =  jQuery(htmlResponse).find(".ProductForm__BuyButtons .ProductForm__AddToCart").text().trim();
	            
	              	if(jQuery('#sidebar-cart .cart__cross-sell-btn .cart__cross-sell-btn-input#cartCrossSellCheckboxSecond').length > 0){
	      
						if(strCtaText !== 'Sold Out'){
	                  		jQuery('#sidebar-cart .cart__cross-sell-item.cart__cross-sell-item-second').css('display','flex');
	                	}
	                
	              	}
	          	}
        	});
      	}

        clearInterval(waitForJquery);
    }
}, 50);