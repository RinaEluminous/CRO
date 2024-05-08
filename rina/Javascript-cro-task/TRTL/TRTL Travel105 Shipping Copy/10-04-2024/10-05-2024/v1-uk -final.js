var strCurrentTimeUK = new Date();
var strCurrentDayUK = strCurrentTimeUK.getUTCDay();
var intCurrentHourUK = strCurrentTimeUK.getUTCHours();
var intCurrentMinuteUK = strCurrentTimeUK.getUTCMinutes();
let strDeliveryDayUK = '';
let intDeliveryDayIndexUK = '';

let arrDeliveryDaysUK = ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Mon', 'Mon'];
let arrDeliveryDaysIndexUK = [ '1','2', '3', '4', '5', '1', '1'];

var intCurrentIndexUK = strCurrentDayUK;
var intNextDayIndexUK = (intCurrentIndexUK + 1) % 7;

// Check if current hour is greater than or equal to 14
if (intCurrentHourUK >= 14) {
    strDeliveryDayUK = arrDeliveryDaysUK[intNextDayIndexUK];
    intDeliveryDayIndexUK = arrDeliveryDaysIndexUK[intNextDayIndexUK];
} else {
    strDeliveryDayUK = arrDeliveryDaysUK[intCurrentIndexUK];
    intDeliveryDayIndexUK = arrDeliveryDaysIndexUK[intCurrentIndexUK];
}

let dayDifferenceUK = intDeliveryDayIndexUK - strCurrentDayUK;
if (dayDifferenceUK <= 0) {
    dayDifferenceUK += 7;
}
let upcomingDateUK = new Date(strCurrentTimeUK);
upcomingDateUK.setDate(upcomingDateUK.getDate() + dayDifferenceUK);
let upcomingDateNumberUK = upcomingDateUK.getDate();
let strDeliveryMonthShortUK = upcomingDateUK.toLocaleString('default', { month: 'short' });
var strDayUK = '';

if (upcomingDateNumberUK >= 5 && upcomingDateNumberUK <= 20) {
    strDayUK = upcomingDateNumberUK + 'th';
} else {
    const lastDigit = upcomingDateNumberUK % 10;
    switch (lastDigit) {
        case 1:
            strDayUK = upcomingDateNumberUK + 'st';
            break;
        case 2:
            strDayUK = upcomingDateNumberUK + 'nd';
            break;
        case 3:
            strDayUK = upcomingDateNumberUK + 'rd';
            break;
        default:
            strDayUK = upcomingDateNumberUK + 'th';
            break;
    }
}
if (strDeliveryMonthShortUK !== '' && strDeliveryMonthShortUK !== undefined && strDeliveryDayUK !== '' && strDeliveryDayUK !== undefined && strDayUK !== undefined && strDayUK !== '') {
  var strShippingWraperHtml =`<div class="shipping-date-estimate">
                <p><span></span>Ships by <b>${strDeliveryDayUK}, ${strDeliveryMonthShortUK} ${strDayUK}</b></p>
            </div>
            <div class="total-purchases-estimate">
                <p><b>20 purchased</b> in the last 24 hours</p>
            </div>`
    document.querySelector(".estimate-delivery-wrapper").innerHTML = strShippingWraperHtml;
}
