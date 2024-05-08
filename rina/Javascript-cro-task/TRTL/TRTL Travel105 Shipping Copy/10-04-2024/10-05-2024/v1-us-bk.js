window.onload = function() {
    var strURL = window.location.href;
    if (strURL.indexOf('/products/') > 0) {
        addShippingCopyOnPdpNew();
        // Set up interval for updating shipping copy every minute
        var intPreviousMinute = '';
        setInterval(function() {
            var strCurrentTime = new Date();
            var intCurrentMinute = strCurrentTime.getUTCMinutes();
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
    var strCurrentTimeUS = new Date();
    var strCurrentDayUS = strCurrentTimeUS.getUTCDay();
    var intCurrentHourUS = strCurrentTimeUS.getUTCHours();
    var intCurrentMinuteUS = strCurrentTimeUS.getUTCMinutes();

    var strDeliveryDayUS = '';
    var intRemainingHoursUS = '';

    var arrDeliveryDaysUS = ['Tuesday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Monday', 'Tuesday'];
    var arrRemainingHoursUS = [ 23, 23, 23, 23, 23, 47, 71];
    var intCurrentIndexUS = strCurrentDayUS;
    var intNextDayIndexUS = (intCurrentIndexUS + 1) % 7;
    
    console.log('strCurrentTimeUS',strCurrentTimeUS);
    console.log('strCurrentDay',strCurrentDayUS);
    console.log('intCurrentHour',intCurrentHourUS);
    console.log('intCurrentMinute',intCurrentMinuteUS); 

    console.log('intCurrentIndexUS',intCurrentIndexUS);
    console.log('intNextDayIndexUS',intNextDayIndexUS);

    if (intCurrentHourUS >= 11) {
        console.log('less than 11hrs')
        strDeliveryDayUS = arrDeliveryDaysUS[intNextDayIndexUS];
        intRemainingHoursUS = arrRemainingHoursUS[intNextDayIndexUS];
        console.log('intRemainingHoursUS >>>',intRemainingHoursUS)
        intRemHrUS = 11 + intRemainingHoursUS - intCurrentHourUS;
    } else {
        console.log('greater than 11 hrs')
        strDeliveryDayUS = arrDeliveryDaysUS[intCurrentIndexUS];
        intRemainingHoursUS = arrRemainingHoursUS[intCurrentIndexUS];
        intRemHrUS = 10 - intCurrentHourUS ;
    }

    var intRemMinUS = 60 - intCurrentMinuteUS;
    
    console.log('intRemHr',intRemHrUS);
    console.log('intRemMin',intRemMinUS);
    console.log('strDeliveryDay',strDeliveryDayUS);

    if (intRemHrUS !== '' && intRemHrUS !== undefined && intRemMinUS !== '' && intRemMinUS !== undefined && strDeliveryDayUS !== '' && strDeliveryDayUS !== undefined) {
        if (intRemMinUS == 60) {
            intRemHrUS = intRemHrUS + 1;
            intRemMinUS = 0;
        }
        var estimatedDeliveryElement = document.querySelector('.estimated-delivery p');
        if (estimatedDeliveryElement !== null) {
            estimatedDeliveryElement.innerHTML = '<div class="col-13 custShipingMsg"><div class="custOrderWithinMsg">Order within <span>' + intRemHrUS + " hr " + intRemMinUS + " min" + '</span> to receive it by <span>' + strDeliveryDayUS + '*</span></div></div>';
        }
    }
}