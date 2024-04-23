window.onload = function() {
    var strURL = window.location.href;
    if (strURL.indexOf('/products/') > 0) {
        addShippingCopyOnPdpNew();
        // Set up interval for updating shipping copy every minute
        var intPreviousMinute = '';
        setInterval(function() {
            var strCurrentTime = new Date();
            var intCurrentMinute = strCurrentTime.getMinutes();
            if (intPreviousMinute !== intCurrentMinute) {
                addShippingCopyOnPdpNew();
                intPreviousMinute = intCurrentMinute;
            }
        }, 60000);
    }
};

//add shipping copy on Pdp page
    function addShippingCopyOnPdpNew() {
        // Add visible class to estimated delivery if it exists
        if (document.querySelectorAll('.estimated-delivery').length > 0) {
            document.querySelector('.estimated-delivery') ?.classList.add('visible');
        }

        var strCurrentTime = new Date();
        var strCurrentDay = strCurrentTime.getDay();
        // var intCurrentHour = strCurrentTime.getHours();
        // var intCurrentMinute = strCurrentTime.getMinutes();

        var strDeliveryDay = '';
        var intRemainingHours = '';

        var arrDeliveryDays = ['Wednesday','Wednesday','Thursday', 'Friday', 'Monday', 'Tuesday', 'Wednesday'];
        var arrRemainingHours = [47, 23, 23, 23, 23, 23, 71 ];
        var intCurrentIndex = strCurrentDay;
        var intNextDayIndex = (intCurrentIndex + 1) % 7;

         var currentDate = new Date();
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
        if (estHours >= 15) {
            strDeliveryDay = arrDeliveryDays[intNextDayIndex];
            intRemainingHours = arrRemainingHours[intNextDayIndex];
            intRemHr = 15 + intRemainingHours - estHours;
        } else {
            strDeliveryDay = arrDeliveryDays[intCurrentIndex];
            intRemainingHours = arrRemainingHours[intCurrentIndex];
            intRemHr = 14 - estHours;
        }

        var intRemMin = 60 - estMinutes;
        if (intRemHr !== '' && intRemHr !== undefined && intRemMin !== '' && intRemMin !== undefined && strDeliveryDay !== '' && strDeliveryDay !== undefined) {
            if (intRemMin == 60) {
                intRemHr = intRemHr + 1;
                intRemMin = 0;
            }
            var estimatedDeliveryElement = document.querySelector('.estimated-delivery p');
            if (estimatedDeliveryElement !== null) {
                estimatedDeliveryElement.innerHTML = '<div class="col-13 custShipingMsg"><div class="custOrderWithinMsg">Order within <span>' + intRemHr + " hr " + intRemMin + " min" + '</span> to receive it by <span>' + strDeliveryDay + '</span></div></div>';
            }
        }
    }