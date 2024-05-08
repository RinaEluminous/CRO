var strCurrentTimeIN = new Date();
console.log('strCurrentTimeIN >>>>',strCurrentTimeIN);
strCurrentTimeIN.setUTCHours(new Date().getUTCHours());
strCurrentTimeIN.setUTCMinutes(new Date().getUTCMinutes());

const istDateIN = new Date(strCurrentTimeIN.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
var strCurrentDayIN = istDateIN.getDay();
var intCurrentHourIN = istDateIN.getHours();
var intCurrentMinuteIN = istDateIN.getMinutes();

let strDeliveryDayIN = '';
let intDeliveryDayIndexIN = '';

let arrDeliveryDaysIN = [ 'Wed','Wed','Thu', 'Fri', 'Mon', 'Tue', 'Wed'];
let arrDeliveryDaysIndexIN = [ '3','3','4', '5', '1', '2', '3'];

var intCurrentIndexIN = strCurrentDayIN;
console.log('intCurrentIndexIN >>>',intCurrentIndexIN);
var intNextDayIndexIN = (intCurrentIndexIN + 1) % 7;

// Check if current hour is greater than or equal to 11
if (intCurrentHourIN >= 11) {
    console.log('greater than 11');
    strDeliveryDayIN = arrDeliveryDaysIN[intNextDayIndexIN];
    intDeliveryDayIndexIN = arrDeliveryDaysIndexIN[intNextDayIndexIN];

    console.log('strDeliveryDayIN',strDeliveryDayIN);
    console.log('strDeliveryDayIN',intDeliveryDayIndexIN);

} else {
    console.log('less than');
    strDeliveryDayIN = arrDeliveryDaysIN[intCurrentIndexIN];
    intDeliveryDayIndexIN = arrDeliveryDaysIndexIN[intCurrentIndexIN];

    console.log('strDeliveryDayIN',strDeliveryDayIN);
    console.log('strDeliveryDayIN',intDeliveryDayIndexIN);
}

let dayDifferenceIN = intDeliveryDayIndexIN - strCurrentDayIN;
if (dayDifferenceIN <= 0) {
    dayDifferenceIN += 7;
}

let upcomingDateIN = new Date(strCurrentTimeIN);
upcomingDateIN.setDate(upcomingDateIN.getDate() + dayDifferenceIN);
let upcomingDateNumberIN = upcomingDateIN.getDate();
let strDeliveryMonthShortIN = upcomingDateIN.toLocaleString('default', { month: 'short' });

var strDayIN = '';

if (upcomingDateNumberIN >= 5 && upcomingDateNumberIN <= 20) {
    strDayIN = upcomingDateNumberIN + 'th';
} else {
    const lastDigitIN = upcomingDateNumberIN % 10;
    switch (lastDigitIN) {
        case 1:
            strDayIN = upcomingDateNumberIN + 'st';
            break;
        case 2:
            strDayIN = upcomingDateNumberIN + 'nd';
            break;
        case 3:
            strDayIN = upcomingDateNumberIN + 'rd';
            break;
        default:
            strDayIN = upcomingDateNumberIN + 'th';
            break;
    }
}

if (strDeliveryMonthShortIN !== '' && strDeliveryMonthShortIN !== undefined && strDeliveryDayIN !== '' && strDeliveryDayIN !== undefined &&  strDayIN !== undefined && strDayIN !== '') {
  var strShippingWraperHtmlIN =`<div class="shipping-date-estimate">
                <p><span></span>Ships by <b>${strDeliveryDayIN}, ${strDeliveryMonthShortIN} ${strDayIN}</b></p>
            </div>
            <div class="total-purchases-estimate">
                <p><b>20 purchased</b> in the last 24 hours</p>
            </div>`
    document.querySelector(".estimate-delivery-wrapper").innerHTML = strShippingWraperHtmlIN;
}
