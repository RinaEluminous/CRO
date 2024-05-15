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

    if (intCurrentHourUS >= 11) {
      
        strDeliveryDayUS = arrDeliveryDaysUS[intNextDayIndexUS];
        intRemainingHoursUS = arrRemainingHoursUS[intNextDayIndexUS];
      
        intRemHrUS = 11 + intRemainingHoursUS - intCurrentHourUS;
    } else {
        
        strDeliveryDayUS = arrDeliveryDaysUS[intCurrentIndexUS];
        intRemainingHoursUS = arrRemainingHoursUS[intCurrentIndexUS];
        intRemHrUS = 10 - intCurrentHourUS ;
    }

    var intRemMinUS = 60 - intCurrentMinuteUS;
  
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
