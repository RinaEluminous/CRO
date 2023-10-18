var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {

		repositionAndOrderAccordain();
		repositionPrice();

		//re-position accordain
		function repositionAndOrderAccordain(){
		    var timesRun 	= 0;
		    var intInterval = setInterval(function (){
		    	timesRun += 1;

		    	if(jQuery('.section-product-benefit').length > 0){
					jQuery('.section-product-benefit').appendTo('.second-product-template .product__images+.three-sixths.columns');

					jQuery('.section-product-benefit').addClass('custPdpAccordion');
					clearInterval(intInterval);
				}

				if(timesRun === 60){
			        clearInterval(intInterval);
			    }
		    },500);
		}

		//re-position price
		function repositionPrice(){
			var timesCount 	= 0;
		    var intPriceInterval = setInterval(function (){
		    	timesCount += 1;
				
				if(jQuery('.product_section .modal_price').length > 0 && jQuery('.product_section .modal_price').parent('div[class*="-productprice"]').length > 0){
					
					jQuery('.product_section .modal_price').parent('div[class*="-productprice"]').addClass("custPdpPrice");

					if(jQuery('.second-product-template h1.product_name + .jdgm-widget.jdgm-widget').length > 0){
						
						jQuery(".custPdpPrice").insertAfter('.second-product-template h1.product_name + .jdgm-widget.jdgm-widget');

						jQuery(".custPdpPrice").show();
					}
					clearInterval(intPriceInterval);
				}
				if(timesCount === 60){
			        clearInterval(intPriceInterval);
			    }
			},100);
		}

 	clearInterval(waitForjQuery);
  }
}, 50);