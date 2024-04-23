console.log('before on load >>>');
window.onload = function() {
    console.log('TRTL Travel105 Shipping Copy >>>');
    var strURL = window.location.href;
    if (strURL.indexOf('/products/') > 0) {
        addShippingCopyOnPdpNew();
        console.log('product condition satisfied');
        // Set up interval for updating shipping copy every minute
        // var intPreviousMinute = '';
        // setInterval(function() {
        //     var strCurrentTime = new Date();
        //     var intCurrentMinute = strCurrentTime.getMinutes();
        //     if (intPreviousMinute !== intCurrentMinute) {
        //         addShippingCopyOnPdpNew();
        //         intPreviousMinute = intCurrentMinute;
        //     }
        // }, 60000);
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

        console.log('strCurrentTime >>',strCurrentTime);

        var strDeliveryDay = '';
        var intRemainingHours = '';

        var arrDeliveryDays = ['Tuesday','Wednesday','Thursday', 'Friday', 'Monday', 'Monday', 'Monday'];
        var arrRemainingHours = [23, 23, 23, 23, 23, 23, 23 ];
        var intCurrentIndex = strCurrentDay;
        var intNextDayIndex = (intCurrentIndex + 1) % 7;

        console.log('intCurrentIndex >>>', intCurrentIndex);
        console.log('intNextDayIndex >>>', intNextDayIndex);

        if (intCurrentHour >= 14) {
            console.log('greater than 14');
            strDeliveryDay = arrDeliveryDays[intNextDayIndex];
            intRemainingHours = arrRemainingHours[intNextDayIndex];
            intRemHr = 14 + intRemainingHours - intCurrentHour;
        } else {
            console.log('less than 14');
            strDeliveryDay = arrDeliveryDays[intCurrentIndex];
            intRemainingHours = arrRemainingHours[intCurrentIndex];
            intRemHr = 13 - intCurrentHour;
        }

        var intRemMin = 60 - intCurrentMinute;
        if (intRemHr !== '' && intRemHr !== undefined && intRemMin !== '' && intRemMin !== undefined && strDeliveryDay !== '' && strDeliveryDay !== undefined) {
            if (intRemMin == 60) {
                intRemHr = intRemHr + 1;
                intRemMin = 0;
            }
            
            //create clone div of estimated delivery

            var existingDiv = document.querySelector('.estimated-delivery');
            if (existingDiv && !document.querySelectorAll('.custNewEstimateDelivery')) {
               var clonedDiv = existingDiv.cloneNode(true);
                clonedDiv.classList.add('custNewEstimateDelivery');
                existingDiv.classList.add('custHide');
                existingDiv.insertAdjacentElement('afterend', clonedDiv);
            }
            
            var estimatedDeliveryElement = document.querySelector('.custNewEstimateDelivery p');

            console.log('intRemHr >>',intRemHr);
            console.log('intRemMin >>',intRemMin);
            console.log('strDeliveryDay >>',strDeliveryDay);

            if (estimatedDeliveryElement !== null) {
                estimatedDeliveryElement.innerHTML = '<div class="col-13 custShipingMsg"><div class="custOrderWithinMsg">Order within <span>' + intRemHr + " hr " + intRemMin + " min" + '</span> to receive it by <span>' + strDeliveryDay + '</span></div></div>';
            }
        }
    }