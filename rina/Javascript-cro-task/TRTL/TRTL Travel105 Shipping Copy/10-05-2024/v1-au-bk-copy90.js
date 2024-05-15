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
        
            var intCurrentHours = new Date().getUTCHours();
            var intCurrentMinutes = new Date().getUTCMinutes();
            var intCurrentDay = new Date().getUTCDay();

            var strDeliveryDay = '', intTotalHours = '';

            switch (intCurrentDay) {
              case 0:
                strDeliveryDay = "Thursday";
                intTotalHours = 47;
                break;
              case 1:
                strDeliveryDay = "Friday";
                intTotalHours = 47;
                break;
              case 2:
                strDeliveryDay = "Monday";
                intTotalHours = 47;
                break;
              case 3:
                strDeliveryDay = "Tuesday";
                intTotalHours = 47;
                break;
              case 4:
                strDeliveryDay = "Wednesday";
                intTotalHours = 47;
                break;
              case 5:
                strDeliveryDay = "Wednesday";
                intTotalHours = 95;
                break;
              case 6:
                strDeliveryDay = "Wednesday";
                intTotalHours = 71;
            }

            var intRemainingHours = intTotalHours - intCurrentHours;
            var intRemainingMinutes = 60 - intCurrentMinutes;

            if(intRemainingMinutes == 60){
              intRemainingHours = intRemainingHours + 1;
            }

            if (intRemainingMinutes !== '' && intRemainingMinutes !== undefined && intRemainingHours !== '' && intRemainingHours !== undefined && strDeliveryDay !== '' && strDeliveryDay !== undefined) {
                
                jQuery('.estimated-delivery p').html('<div class="col-13 custShipingMsg"><div class="custOrderWithinMsg">Order within <span>' + intRemainingHours + " hr " + intRemainingMinutes + " min" + '</span> to receive it by <span>' + strDeliveryDay + '*</span></div></div>');
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