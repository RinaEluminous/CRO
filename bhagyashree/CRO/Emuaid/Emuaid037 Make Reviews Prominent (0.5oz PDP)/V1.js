var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		console.log("%c Emuaid037", "background:blue;color : white;padding:10px");

		repositionAndOrderAccordain();

		function repositionAndOrderAccordain(){
		    var timesRun 	= 0;
		    var intInterval = setInterval(function (){
		    	timesRun += 1;

		    	console.log("Len  >> " +jQuery('.section-product-benefit').length );
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

 	clearInterval(waitForjQuery);
  }
}, 50);