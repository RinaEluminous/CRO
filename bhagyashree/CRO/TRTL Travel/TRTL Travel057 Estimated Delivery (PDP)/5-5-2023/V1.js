var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		
		const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		addShippingBanner();

		function addShippingBanner(){
			if(jQuery('.product-container').length > 0){

				var Now     	= new Date();
				var todaysDate  = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(),'16','30','00');

				var currentDate    = new Date();
			 
				var endDate = "", noOfDaysToAdd = 2, count = 0;
				while(count < noOfDaysToAdd){
				    endDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
				    if(endDate.getDay() != 0 && endDate.getDay() != 6){
				       count++;
				    }
				}
				console.log(endDate);

				let strMonth 	= month[endDate.getMonth()];
				let strEndDate  = strMonth + ' '+ endDate.getDate(); 

				if( jQuery('.custProdDelivery').length == 0 ){
					jQuery('<div class="col-12 custProdDelivery"><div class="custOrderWithin">Pick Priority shipping to get your order in 2 days by ' + strEndDate + '</span></div></div>').insertBefore('.product-form hr.hr-bold:eq(0)');

				}
			}
		}

		
		clearInterval(waitForjQuery);
	}
 	
},50);