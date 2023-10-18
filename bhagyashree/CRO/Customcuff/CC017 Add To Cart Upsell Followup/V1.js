var waitForJquery = setInterval(function() {

    if (typeof jQuery != 'undefined') {
    	
    	updateCartAddCTAV1();

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
	                updateCartAddCTAV1();
	              } 
	            }, 100); 
	         	}
	        }, false);
          return realXHR;
        }
	    window.XMLHttpRequest = newXHR;


	    function updateCartAddCTAV1(){
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

        clearInterval(waitForJquery);

    }
}, 50);