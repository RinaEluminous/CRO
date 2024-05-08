    var strCurrentTimeUK = new Date();
    var strCurrentDayUK = strCurrentTimeUK.getDay();
    var intCurrentHourUK = strCurrentTimeUK.getHours();
    var intCurrentMinuteUK = strCurrentTimeUK.getMinutes();

    var strDeliveryDayUK = '';
    var intRemainingHoursUK = '';

    var arrDeliveryDaysUK = ['Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Monday', ' Monday'];

    var arrRemainingHoursUK = [ 23, 23, 23, 23, 23, 23, 23];
    var intCurrentIndexUK = strCurrentDayUK;
    var intNextDayIndexUK = (intCurrentIndexUK + 1) % 7;

    console.log('strCurrentTimeUK',strCurrentTimeUK);
    console.log('strCurrentDay',strCurrentDayUK);
    console.log('intCurrentHour',intCurrentHourUK);
    console.log('intCurrentMinute',intCurrentMinuteUK); 

    console.log('intCurrentIndexUK',intCurrentIndexUK);
    console.log('intNextDayIndexUK',intNextDayIndexUK);


    if (intCurrentHourUK >= 14) {
      
        strDeliveryDayUK = arrDeliveryDaysUK[intNextDayIndexUK];
        intRemainingHoursUK = arrRemainingHoursUK[intNextDayIndexUK];
        intRemHrUK = 14 + intRemainingHoursUK - intCurrentHourUK;
        
    } else {
        
        strDeliveryDayUK = arrDeliveryDaysUK[intCurrentIndexUK];
        intRemainingHoursUK = arrRemainingHoursUK[intCurrentIndexUK];
        intRemHrUK = 13 - intCurrentHourUK ;
    }

    var intRemMinUK = 60 - intCurrentMinuteUK;
    
    console.log('intRemHr',intRemHrUK);
    console.log('intRemMin',intRemMinUK);
    console.log('strDeliveryDay',strDeliveryDayUK);

    if (intRemHrUK !== '' && intRemHrUK !== undefined && intRemMinUK !== '' && intRemMinUK !== undefined && strDeliveryDayUK !== '' && strDeliveryDayUK !== undefined) {
        if (intRemMinUK == 60) {
            intRemHrUK = intRemHrUK + 1;
            intRemMinUK = 0;
        }
        var estimatedDeliveryElement = document.querySelector('.estimated-delivery p');
        if (estimatedDeliveryElement !== null) {
            estimatedDeliveryElement.innerHTML = '<div class="col-13 cUKtShipingMsg"><div class="cUKtOrderWithinMsg">Order within <span>' + intRemHrUK + " hr " + intRemMinUK + " min" + '</span> to receive it by <span>' + strDeliveryDayUK + '*</span></div></div>';
        }
    }
