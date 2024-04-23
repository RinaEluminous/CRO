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
        var intCurrentHour = strCurrentTime.getHours();
        var intCurrentMinute = strCurrentTime.getMinutes();

        var strDeliveryDay = '';
        var intRemainingHours = '';

        var arrDeliveryDays = ['Wednesday','Wednesday','Thursday', 'Friday', 'Monday', 'Tuesday', 'Wednesday'];
        var arrRemainingHours = [47, 23, 23, 23, 23, 23, 71 ];
        var intCurrentIndex = strCurrentDay;
        var intNextDayIndex = (intCurrentIndex + 1) % 7;
        if (intCurrentHour >= 15) {
            strDeliveryDay = arrDeliveryDays[intNextDayIndex];
            intRemainingHours = arrRemainingHours[intNextDayIndex];
            intRemHr = 15 + intRemainingHours - intCurrentHour;
        } else {
            strDeliveryDay = arrDeliveryDays[intCurrentIndex];
            intRemainingHours = arrRemainingHours[intCurrentIndex];
            intRemHr = 14 - intCurrentHour;
        }

        var intRemMin = 60 - intCurrentMinute;
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