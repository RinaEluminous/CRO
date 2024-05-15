var strCurrentTimeCA = new Date();
strCurrentTimeCA.setUTCHours(new Date().getUTCHours());
strCurrentTimeCA.setUTCMinutes(new Date().getUTCMinutes());

const estDateCA = new Date(strCurrentTimeCA.toLocaleString('en-US', { timeZone: 'America/New_York' }));
var strCurrentDayCA = estDateCA.getDay();
var intCurrentHourCA = estDateCA.getHours();
var intCurrentMinuteCA = estDateCA.getMinutes();

let strDeliveryDayCA = '';
let intDeliveryDayIndexCA = '';
var arrRemainingHoursCA = [47, 23, 23, 23, 23, 23, 71];
let arrDeliveryDaysCA = [ 'Wed','Wed','Thu', 'Fri', 'Mon', 'Tue', 'Wed'];
let arrDeliveryDaysIndexCA = [ '3','3','4', '5', '1', '2', '3'];


var intCurrentIndexCA = strCurrentDayCA;
var intNextDayIndexCA = (intCurrentIndexCA + 1) % 7;

// Check if current hour is greater than or equal to 11
if (intCurrentHourCA >= 11) {
 
    strDeliveryDayCA = arrDeliveryDaysCA[intNextDayIndexCA];
    intDeliveryDayIndexCA = arrDeliveryDaysIndexCA[intNextDayIndexCA];
    
} else {
   
    strDeliveryDayCA = arrDeliveryDaysCA[intCurrentIndexCA];
    intDeliveryDayIndexCA = arrDeliveryDaysIndexCA[intCurrentIndexCA];
}

let dayDifferenceCA = intDeliveryDayIndexCA - strCurrentDayCA;
if (dayDifferenceCA <= 0) {
    dayDifferenceCA += 7;
}

let upcomingDateCA = new Date(strCurrentTimeCA);
upcomingDateCA.setDate(upcomingDateCA.getDate() + dayDifferenceCA);
let upcomingDateNumberCA = upcomingDateCA.getDate();
let strDeliveryMonthShortCA = upcomingDateCA.toLocaleString('default', { month: 'short' });

var strDayCA = '';

if (upcomingDateNumberCA >= 5 && upcomingDateNumberCA <= 20) {
    strDayCA = upcomingDateNumberCA + 'th';
} else {
    const lastDigitCA = upcomingDateNumberCA % 10;
    switch (lastDigitCA) {
        case 1:
            strDayCA = upcomingDateNumberCA + 'st';
            break;
        case 2:
            strDayCA = upcomingDateNumberCA + 'nd';
            break;
        case 3:
            strDayCA = upcomingDateNumberCA + 'rd';
            break;
        default:
            strDayCA = upcomingDateNumberCA + 'th';
            break;
    }
}

if (strDeliveryMonthShortCA !== '' && strDeliveryMonthShortCA !== undefined && strDeliveryDayCA !== '' && strDeliveryDayCA !== undefined &&  strDayCA !== undefined && strDayCA !== '') {
  var strShippingWraperHtmlCA =`<div class="shipping-date-estimate">
                <p><span></span>Ships by <b>${strDeliveryDayCA}, ${strDeliveryMonthShortCA} ${strDayCA}</b></p>
            </div>
            <div class="total-purchases-estimate">
                <p><b>20 purchased</b> in the last 24 hours</p>
            </div>`
    document.querySelector(".estimate-delivery-wrapper").innerHTML = strShippingWraperHtmlCA;
}
