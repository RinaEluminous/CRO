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
            var strCurrentDay = strCurrentTime.getUTCDay();
            // var intCurrentHour = strCurrentTime.getUTCHours();
            // var intCurrentMinute = strCurrentTime.getUTCMinutes();

            let strDeliveryDay = '';
            let intRemainingHours='';
          
            var arrDeliveryDays = ['Wednesday','Wednesday','Thursday', 'Friday', 'Monday', 'Tuesday', 'Wednesday'];
            var arrRemainingHours = [47, 23, 23, 23, 23, 23, 71 ];

            var intCurrentIndex = strCurrentDay;
            var intNextDayIndex = (intCurrentIndex + 1) % 7;
            
            // Create a new Date object with the current date and time
            var currentDate = new Date();
            
            // Get the current EST day, hours, and minutes using Intl.DateTimeFormat
            var estDateTimeFormatter = new Intl.DateTimeFormat('en-US', {
              timeZone: 'America/New_York',
              weekday: 'long', // 'long', 'short', or 'narrow'
              hour12: false,
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            });
            
            // Format the date and get an array of components
            var estParts = estDateTimeFormatter.formatToParts(currentDate);
            
            // Extract specific components
           // var estDay = estParts.find(part => part.type === 'day').value;
            var estHours = estParts.find(part => part.type === 'hour').value;
            var estMinutes = estParts.find(part => part.type === 'minute').value;

            // Check if current hour is greater than or equal to 15
            if (estHours >= 15) {
                strDeliveryDay = arrDeliveryDays[intNextDayIndex];
                intRemainingHours = arrRemainingHours[intNextDayIndex];
                intRemHr = 15 + intRemainingHours - estHours;
            } else {
                strDeliveryDay = arrDeliveryDays[intCurrentIndex];
                intRemainingHours =arrRemainingHours[intCurrentIndex];
                intRemHr = 14 - estHours;
            }

             // Calculate remaining minutes
            intRemMin = 60 - estMinutes;
            if (intRemHr !== '' && intRemHr !== undefined && intRemMin !== '' && intRemMin !== undefined && strDeliveryDay !== '' && strDeliveryDay !== undefined) {
                if(intRemMin == 60 ){           
                    intRemHr = intRemHr + 1;
                    intRemMin = 0;
                }   
                jQuery('.estimated-delivery p').html('<div class="col-13 custShipingMsg"><div class="custOrderWithinMsg">Order within <span>' + intRemHr + " hr " + intRemMin + " min" + '</span> to receive it by <span>' + strDeliveryDay + '*</span></div></div>');
            }
        }

        var intPreviousMinute = '';
      
        setInterval(function () {
            let strCurrentTime = new Date();
            let intCurrentMinute = strCurrentTime.getUTCMinutes();
            if (intPreviousMinute !== intCurrentMinute) {
                addShippingCopyOnPdp();
                intPreviousMinute = intCurrentMinute;
            }
        }, 60000);
       
        clearInterval(waitForJquery);
    }
}, 50);