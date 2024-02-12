console.log('TRTL Travel090: Shipping Copy (PDP)');
var waitForJquery = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        var strURL = window.location.href;
        if (strURL.indexOf('/products/') > 0) {
            addShippingCopyOnPdp();
        }

        function addShippingCopyOnPdp() {
            //add visible class to estimated delivery
             if(jQuery('.estimated-delivery').length > 0){
                jQuery('.estimated-delivery').addClass('visible');
            }
           
            var strCurrentTime = new Date();
            var strCurrentDay = strCurrentTime.getDay();
            var intCurrentHour = strCurrentTime.getHours();
            var intCurrentMinute = strCurrentTime.getMinutes();
            
            // console.log('strCurrentTime >>>>', strCurrentTime);
            // console.log('strCurrentDay >>>>', strCurrentDay);
            // console.log('intCurrentHour >>>>', intCurrentHour);
            // console.log('intCurrentMinute >>>>', intCurrentMinute);

            let strDeliveryDay = '';
            let intRemainingHours='';
          
            var arrDeliveryDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Monday', 'Monday'];
            var arrRemainingHours = [23, 23, 23, 23, 23, 71, 47];


            var intCurrentIndex = strCurrentDay;
            var intNextDayIndex = (intCurrentIndex + 1) % 7;

            // console.log('currentIndex >>>>>>>>>>',intCurrentIndex);
            // console.log('nextDayIndex >>>>>>>>>>',intNextDayIndex);

            // Check if current hour is greater than or equal to 14
            if (intCurrentHour >= 14) {
              
                strDeliveryDay = arrDeliveryDays[intNextDayIndex];
                intRemainingHours = arrRemainingHours[intNextDayIndex];
                // console.log('arrRemainingHours',intRemainingHours);
                // console.log('intCurrentHours',intCurrentHour);
                intRemHr =14 + intRemainingHours - intCurrentHour ;

            } else {   
                
                strDeliveryDay = arrDeliveryDays[intCurrentIndex];
                intRemainingHours =arrRemainingHours[intCurrentIndex];
                // console.log('arrRemainingHours >>>>>>>>>>>>>>>>>>',intRemainingHours);
                // console.log('intCurrentHours',intCurrentHour);
                intRemHr = 13 - intCurrentHour;
            }   

             // Calculate remaining minutes
            intRemMin = 60 - intCurrentMinute;
            // console.log(' intRemHr >>>> ', intRemHr);
            // console.log(' intRemMin >>>> ', intRemMin);

            // console.log(' strDeliveryDay >>>> ', strDeliveryDay);
           

            if (intRemHr !== '' && intRemHr !== undefined && intRemMin !== '' && intRemMin !== undefined && strDeliveryDay !== '' && strDeliveryDay !== undefined) {

                jQuery('.estimated-delivery p').html('<div class="col-13 custShipingMsg"><div class="custOrderWithinMsg">Order within <span>' + intRemHr + " hr " + intRemMin + " min" + '</span> to receive it by <span>' + strDeliveryDay + '</span></div></div>');
            }

        }

        var intPreviousMinute = '';
      
        setInterval(function () {
            let strCurrentTime = new Date();
            let intCurrentMinute = strCurrentTime.getMinutes();

            // console.log('intPreviousMinute',intPreviousMinute);
            // console.log('intCurrentMinute',intCurrentMinute);

            if (intPreviousMinute !== intCurrentMinute) {
                addShippingCopyOnPdp();
                intPreviousMinute = intCurrentMinute;
            }
        }, 60000);
     
       
        clearInterval(waitForJquery);
    }
}, 50);