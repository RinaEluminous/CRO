console.log('TRTL Travel090: Shipping Copy (PDP) AUS');
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

                console.log('strCurrentTime >>>>>>> ',strCurrentTime);
                console.log('strCurrentDay >>>>>>>>',strCurrentDay);
                console.log('intCurrentHour >>>>>>> ',intCurrentHour);
                console.log('intCurrentMinute >>>>>>> ',intCurrentMinute);

                let strDeliveryDay = '';
                let intRemainingHours='';
            
                var arrDeliveryDays = ['Thursday','Friday', 'Monday', 'Tuesday', 'Wednesday', 'Wednesday','Wednesday'];

                var arrRemainingHours = [ 23, 23, 23, 23, 23, 71, 47];
                //want to implement logic with midnight 12:00 that is 00:00
                
                var intCurrentIndex = strCurrentDay;
                var intNextDayIndex='';

                // if (intCurrentHour >= 0 && intCurrentHour < 12) {
                //     intNextDayIndex = (intCurrentIndex - 1) % 7;
                // console.log('is greater than 00 for next day index');
                // }else {
                //     intNextDayIndex = (intCurrentIndex + 1) % 7;
                //     console.log('is less than 00 for next day index');
                
                // } 

                intNextDayIndex = (intCurrentIndex + 1) % 7;

                console.log('intCurrentIndex >>>',intCurrentIndex);
                console.log('intNextDayIndex >>>',intNextDayIndex);


                // Check if current hour is greater than or equal to 12
                
                if (intCurrentHour >= 0 && intCurrentHour < 12) {
                    console.log('is greater than 00')
                    strDeliveryDay = arrDeliveryDays[intNextDayIndex];
                    intRemainingHours = arrRemainingHours[intNextDayIndex];
                    console.log('intRemainingHours  >>>>',intRemainingHours);
                    intRemHr = intRemainingHours - intCurrentHour ;

                }else {
                    console.log('is less than 00')
                    strDeliveryDay = arrDeliveryDays[intCurrentIndex];
                    intRemainingHours =arrRemainingHours[intCurrentIndex];
                    console.log('intRemainingHours  >>>>',intRemainingHours);
                    intRemHr = 12 + intRemainingHours - intCurrentHour ;
                }

                // Calculate remaining minutes
                intRemMin = 60 - intCurrentMinute;
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
                let intCurrentMinute = strCurrentTime.getMinutes();
                if (intPreviousMinute !== intCurrentMinute) {
                    addShippingCopyOnPdp();
                    intPreviousMinute = intCurrentMinute;
                }
            }, 60000);
        
            clearInterval(waitForJquery);
        }

    }, 50);