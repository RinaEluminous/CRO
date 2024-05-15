
// var strCurrentTimeUK = new Date();
// strCurrentTimeUK.setUTCHours(new Date().getUTCHours());
// strCurrentTimeUK.setUTCMinutes(new Date().getUTCMinutes());

// const cstDateUK = new Date(strCurrentTimeUK.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
// var strCurrentDayUK = cstDateUK.getDay();
// var intCurrentHourUK = cstDateUK.getHours();
// var intCurrentMinuteUK = cstDateUK.getMinutes();

var strCurrentTimeUK = new Date();
// var strCurrentDayUK = strCurrentTimeUK.getUTCDay();
// var intCurrentHourUK = strCurrentTimeUK.getUTCHours();
// var intCurrentMinuteUK = strCurrentTimeUK.getUTCMinutes();

var strCurrentDayUK = strCurrentTimeUK.getDay();
var intCurrentHourUK = strCurrentTimeUK.getHours();
var intCurrentMinuteUK = strCurrentTimeUK.getMinutes();

console.log('strCurrentTimeUK',strCurrentTimeUK);
console.log('strCurrentDayUK',strCurrentDayUK);
console.log('intCurrentHourUK',intCurrentHourUK);
console.log('intCurrentMinuteUK',intCurrentMinuteUK);

let strDeliveryDayUK = '';
let intDeliveryDayIndexUK = '';

let arrDeliveryDaysUK = ['Mon','Tue', 'Wed', 'Thu', 'Fri', 'Mon', 'Mon'];
let arrDeliveryDaysIndexUK = [ '1','2', '3', '4', '5', '1', '1'];

var intCurrentIndexUK = strCurrentDayUK;
var intNextDayIndexUK = (intCurrentIndexUK + 1) % 7;

console.log('intCurrentIndexUK >>',intCurrentIndexUK);
console.log('intNextDayIndexUK >>',intNextDayIndexUK);
// Check if current hour is greater than or equal to 11
if (intCurrentHourUK >= 14) {
    strDeliveryDayUK = arrDeliveryDaysUK[intNextDayIndexUK];
    intDeliveryDayIndexUK = arrDeliveryDaysIndexUK[intNextDayIndexUK];
    console.log('greater than 14');
    console.log('intDeliveryDayIndexUK',intDeliveryDayIndexUK);
    console.log('strDeliveryDayUK',strDeliveryDayUK);
} else {
    console.log('less than 14');
    strDeliveryDayUK = arrDeliveryDaysUK[intCurrentIndexUK];
    intDeliveryDayIndexUK = arrDeliveryDaysIndexUK[intCurrentIndexUK];
    console.log('intDeliveryDayIndexUK',intDeliveryDayIndexUK);
    console.log('strDeliveryDayUK',strDeliveryDayUK);
}

let dayDifferenceUK = intDeliveryDayIndexUK - strCurrentDayUK;
console.log('dayDifferenceUK',dayDifferenceUK);
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
