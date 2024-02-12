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
           var strCurrentHour = strCurrentTime.getHours();
           var strCurrentMinute = strCurrentTime.getMinutes();

            console.log('strCurrentTime >>>>', strCurrentTime);
            console.log('strCurrentDay >>>>', strCurrentDay);
            console.log('strCurrentHour >>>>', strCurrentHour);
            console.log('strCurrentMinute >>>>', strCurrentMinute);

            let strDeliveryDay = '';

            if (strCurrentDay === 0) { // Sunday
                if (strCurrentHour >= 14) {
                    strDeliveryDay = 'Tuesday';
                    strRemHr = 23 - strCurrentHour + 14;
                    strRemMin = 60 - strCurrentMinute;

                } else {
                    strDeliveryDay = 'Monday';
                    strRemHr = 13 - strCurrentHour;
                    strRemMin = 60 - strCurrentMinute;

                }
            } else if (strCurrentDay === 1) { // Monday
                if (strCurrentHour >= 14) {
                    strDeliveryDay = 'Wednesday';
                    strRemHr = 23 - strCurrentHour + 14;
                    strRemMin = 60 - strCurrentMinute;

                } else {
                    strDeliveryDay = 'Tuesday';
                    strRemHr = 13 - strCurrentHour;
                    strRemMin = 60 - strCurrentMinute;


                }
            } else if (strCurrentDay === 2) { // Tuesday
                if (strCurrentHour >= 14) {
                    strDeliveryDay = 'Thursday';
                    strRemHr = 23 - strCurrentHour + 14;
                    strRemMin = 60 - strCurrentMinute;

                } else {
                    strDeliveryDay = 'Wednesday';
                    strRemHr = 13 - strCurrentHour;
                    strRemMin = 60 - strCurrentMinute;


                }
            } else if (strCurrentDay === 3) { // Wednesday
                if (strCurrentHour >= 14) {
                    strDeliveryDay = 'Friday';
                    strRemHr = 23 - strCurrentHour + 14;
                    strRemMin = 60 - strCurrentMinute;

                } else {
                    strDeliveryDay = 'Thursday';
                    strRemHr = 13 - strCurrentHour;
                    strRemMin = 60 - strCurrentMinute;

                }
            } else if (strCurrentDay === 4) { // Thursday
                if (strCurrentHour >= 14) {
                    strDeliveryDay = 'Monday';
                    strRemHr = 23 - strCurrentHour + 14;
                    strRemMin = 60 - strCurrentMinute;


                } else {
                    strDeliveryDay = 'Friday';
                    strRemHr = 13 - strCurrentHour;
                    strRemMin = 60 - strCurrentMinute;

                }
            } else if (strCurrentDay === 5) { // Friday
                if (strCurrentHour >= 14) {
                    strDeliveryDay = 'Tuesday';
                    strRemHr = 71 - strCurrentHour + 14;
                    strRemMin = 60 - strCurrentMinute;


                } else {
                    strDeliveryDay = 'Monday';
                    strRemHr = 13 - strCurrentHour;
                    strRemMin = 60 - strCurrentMinute;


                }
            } else if (strCurrentDay === 6) { // Saturday
                if (strCurrentHour >= 14) {
                    strDeliveryDay = 'Tuesday';
                    strRemHr = 47 - strCurrentHour + 14;
                    strRemMin = 60 - strCurrentMinute;

                } else {
                    strDeliveryDay = 'Monday';
                    strRemHr = 13 - strCurrentHour;
                    strRemMin = 60 - strCurrentMinute;

                }
            }

            console.log(' strDeliveryDay >>>> ', strDeliveryDay);
            console.log(' strRemHr >>>> ', strRemHr);
            console.log(' strRemMin >>>> ', strRemMin);

            if (strRemHr !== '' && strRemHr !== undefined && strRemMin !== '' && strRemMin !== undefined && strDeliveryDay !== '' && strDeliveryDay !== undefined) {

                jQuery('.estimated-delivery p').html('<div class="col-13 custShipingMsg"><div class="custOrderWithinMsg">Order within <span>' + strRemHr + " hr " + strRemMin + " min" + '</span> to receive it by <span>' + strDeliveryDay + '</span></div></div>');
            }

        }
        // Check every second for changes
        var intCurrentCount = parseInt(jQuery(".countdown-minutes").text());
        setInterval(function() {
           var intNewCount = parseInt(jQuery(".countdown-minutes").text());
            if (intNewCount < intCurrentCount) {
                addShippingCopyOnPdp();
            }
        }, 1000); 

        //setInterval(addShippingCopyOnPdp, 60000);
        clearInterval(waitForJquery);
    }
}, 50);