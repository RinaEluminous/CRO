var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		
		const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		addShippingBanner();

		function addShippingBanner(){
			if(jQuery('.product-container').length > 0){

				var floatCartAmount = jQuery('#cart-offcanvas-content custom-shipping ~ div.text-end').text().trim().replace(/[^0-9.]/g,'');

				var Now     	= new Date();
				var todaysDate  = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), '16','30','00');
				var strEndTime  = todaysDate.getTime();

				var currentDate    = new Date();
				var strCurrentTime = currentDate.getTime();

				console.log("strEndTime >>> " + strEndTime);

				if(floatCartAmount >= 70 && strEndTime >= strCurrentTime){

					var msec = todaysDate - currentDate;
				    var mins = Math.floor(msec / 60000);
				    var hrs  = Math.floor(mins / 60);
				   
				    console.log("In minutes: ", mins + " minutes");
				    mins = mins % 60;
				    mins = (mins < 10) ? '0' + mins : mins;
				    console.log("In hours: ", hrs + " hours, " + mins + " minutes");
				 
				    //Start date 
					let strCurrMonth = month[currentDate.getMonth()];
					let strCurrDate  = strCurrMonth+ ' ' +currentDate.getDate(); 

					var endDate = "", noOfDaysToAdd = 2, count = 0;
					while(count < noOfDaysToAdd){
					    endDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
					    if(endDate.getDay() != 0 && endDate.getDay() != 6){
					       //Date.getDay() gives weekday starting from 0(Sunday) to 6(Saturday)
					       count++;
					    }
					}
					console.log(endDate);

					let strMonth 	= month[endDate.getMonth()];
					let strEndDate  = strMonth + ' '+ endDate.getDate(); 

					if( jQuery('.custProdDelivery').length == 0 ){
						jQuery('<div class="col-12 custProdDelivery"><div class="custOrderWithin">Order within <span>'+ hrs + " hrs " + mins + " mins"+'</span> to receive it by <span>'+ strCurrDate +' - ' + strEndDate + '</span></div></div>').insertBefore('.product-form hr.hr-bold:eq(0)');

						countDownTimer(hrs,mins);
					}
					
				}
			}
		}

		function countDownTimer(hrs,mins){
			var timer2 = hrs+':'+mins;

			var interval = setInterval(function() {
				  var timer = timer2.split(':');
				  console.log("timer");
				  console.log(timer);
				  //by parsing integer, I avoid all extra string processing
				  var hours 	  = parseInt(timer[0], 10);
				  var minutes = parseInt(timer[1], 10);
				  --minutes;
				  console.log('hours >>> ' + hours);
				  console.log('minutes >>> ' + minutes);

				  hours = (minutes < 0) ? --hours : hours;
				  if (hours < 0) clearInterval(interval);

				  minutes = (minutes < 0) ? 59 : minutes;
				  minutes = (minutes < 10) ? '0' + minutes : minutes;
				  //console.log(hours + ':' + minutes);
				  var counter = hours + " hrs " + minutes + " mins";
				  jQuery('.custProdDelivery .custOrderWithin span:eq(0)').html( counter);
				  console.log("counter >>> " + counter);

				  timer2 = hours + ':' + minutes;
				  if(timer2 == '0:00'){
					jQuery('.custProdDelivery').fadeOut();
					clearInterval(interval);
				  }
			},  60 * 1000);
		}

		clearInterval(waitForjQuery);
	}
 	
},50);