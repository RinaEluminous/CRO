var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {

		function addShippingBanner(){
			if(jQuery('.product-container').length > 0){
				var Now     	= new Date();
				var todaysDate  = new Date(Now.getFullYear(), Now.getMonth(), Now.getDate(), '15','00','00');
				var strEndTime 		= todaysDate.getTime();
				
				console.log("strEndTime >>> " + strEndTime);

				var currentDate = new Date();
				var strCurrentTime 		= currentDate.getTime();


				console.log("strEndTime >>> " + strEndTime);
				if(strEndTime >= strCurrentTime){

					var msec = todaysDate - currentDate;
				    var mins = Math.floor(msec / 60000);
				    var hrs  = Math.floor(mins / 60);
				    //var days = Math.floor(hrs / 24);
				    //var yrs  = Math.floor(days / 365);
				    console.log("In minutes: ", mins + " minutes");
				    mins = mins % 60;
				    console.log("In hours: ", hrs + " hours, " + mins + " minutes");
				    //hrs = hrs % 24;
				    //console.log( "In days: ", days + " days, " + hrs + " hours, " + mins + " minutes");
				   // days = days % 365;
				    //console.log( "In years: ", yrs + " years " + days + " days ");


					// Add 2 days to current date
					var strDate = currentDate.setDate(currentDate.getDate() + 2);

					console.log(date);

					if( jQuery('.custProdDelivery').length == 0 ){
						jQuery('<div class="col-12 custProdDelivery"><div class="custOrderWithin">Order within <span>'+ hrs + " hrs " + mins + " mins"+'</span> to receive it by <span>April 27 - Apr 30.</span></div></div>')
					}
				}
			}
		}
		
	}
 	clearInterval(waitForjQuery);
},50);


1683019800000
1683033453749

13653749

var diff =(1683033453749 - 1683019800000) / 1000;
  diff /= 60;
  console.log( Math.abs(Math.round(diff)));


  dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(todaysDate, currentDate));

https://www.w3resource.com/javascript-exercises/javascript-date-exercise-45.php

-----------

function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_hours(dt1, dt2));


dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));
=======================

 var msec = todaysDate - currentDate;
    var mins = Math.floor(msec / 60000);
    var hrs = Math.floor(mins / 60);
    var days = Math.floor(hrs / 24);
    var yrs = Math.floor(days / 365);
    console.log("In minutes: ", mins + " minutes");
    mins = mins % 60;
    console.log("In hours: ", hrs + " hours, " + mins + " minutes");
    hrs = hrs % 24;
     console.log( "In days: ", days + " days, " + hrs + " hours, " + mins + " minutes");
    days = days % 365;
     console.log( "In years: ", yrs + " years " + days + " days ");