var strCurrentTimeAU = new Date();
console.log('strCurrentTimeAU>>',strCurrentTimeAU);
var strCurrentDayAU = strCurrentTimeAU.getUTCDay();
var intCurrentHourAU = strCurrentTimeAU.getUTCHours();
var intCurrentMinuteAU = strCurrentTimeAU.getUTCMinutes();
console.log('strCurrentDayAU>>',strCurrentDayAU);
console.log('intCurrentHourAU>>',intCurrentHourAU);
console.log('intCurrentMinuteAU>>',intCurrentMinuteAU);
let strDeliveryDayAU = '';
let intDeliveryDayIndexAU = ''; 

let arrDeliveryDaysAU = ['Wed','Wed','Thu', 'Fri', 'Mon', 'Wed', 'Wed'];
let arrDeliveryDaysIndexAU = [ '3','3','4', '5', '1', '3', '3'];

var intCurrentIndexAU = strCurrentDayAU;

strDeliveryDayAU = arrDeliveryDaysAU[intCurrentIndexAU];
intDeliveryDayIndexAU = arrDeliveryDaysIndexAU[intCurrentIndexAU];

let dayDifferenceAU = intDeliveryDayIndexAU - strCurrentDayAU;
if (dayDifferenceAU <= 0) {
    dayDifferenceAU += 7;
}

let upcomingDateAU = new Date(strCurrentTimeAU);
upcomingDateAU.setDate(upcomingDateAU.getDate() + dayDifferenceAU);
let upcomingDateNumberAU = upcomingDateAU.getDate();
let strDeliveryMonthShortAU = upcomingDateAU.toLocaleString('default', { month: 'short' });
var strDayAU = '';

if (upcomingDateNumberAU >= 5 && upcomingDateNumberAU <= 20) {
    strDayAU = upcomingDateNumberAU + 'th';
} else {
    const lastDigit = upcomingDateNumberAU % 10;
    switch (lastDigit) {
        case 1:
            strDayAU = upcomingDateNumberAU + 'st';
            break;
        case 2:
            strDayAU = upcomingDateNumberAU + 'nd';
            break;
        case 3:
            strDayAU = upcomingDateNumberAU + 'rd';
            break;
        default:
            strDayAU = upcomingDateNumberAU + 'th';
            break;
    }
}
if (strDeliveryMonthShortAU !== '' && strDeliveryMonthShortAU !== undefined && strDeliveryDayAU !== '' && strDeliveryDayAU !== undefined && strDayAU !== undefined && strDayAU !== '') {
  var strShippingWraperHtml =`<div class="shipping-date-estimate">
                <p><span></span>Ships by <b>${strDeliveryDayAU}, ${strDeliveryMonthShortAU} ${strDayAU}</b></p>
            </div>
            <div class="total-purchases-estimate">
                <p><b>20 purchased</b> in the last 24 hours</p>
            </div>`
    document.querySelector(".estimate-delivery-wrapper").innerHTML = strShippingWraperHtml;
}
