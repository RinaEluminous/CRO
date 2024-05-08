
// var strCurrentTime = new Date();
// strCurrentTime.setUTCHours(new Date().getUTCHours());
// strCurrentTime.setUTCMinutes(new Date().getUTCMinutes());

// const cstDate = new Date(strCurrentTime.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
// var strCurrentDay = cstDate.getDay();
// var intCurrentHour = cstDate.getHours();
// var intCurrentMinute = cstDate.getMinutes();

var currentDateCA = new Date();
var strCurrentDayCA = currentDateCA.getDay();
var estDateTimeFormatterCA = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  weekday: 'long', // 'long', 'short', or 'narrow'
  hour12: false,
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
});

// Format the date and get an array of components
var estPartsCA = estDateTimeFormatterCA.formatToParts(currentDateCA);
// Extract specific components
// var estDay = estParts.find(part => part.type === 'day').value;
var estHoursCA = estPartsCA.find(part => part.type === 'hour').value;
var estMinutesCA = estPartsCA.find(part => part.type === 'minute').value;

let strDeliveryDayCA = '';
let intDeliveryDayIndexCA = '';

let arrDeliveryDaysCA = ['Wed', 'Thu', 'Fri', 'Mon', 'Tue', 'Wed', 'Wed'];
let arrDeliveryDaysIndexCA = ['3', '4', '5', '1', '2', '3', '3'];

var intCurrentIndexCA = strCurrentDayCA;
var intNextDayIndexCA = (intCurrentIndexCA + 1) % 7;

// Check if current hour is greater than or equal to 11
if (estHoursCA >= 11) {
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

let upcomingDateCA = new Date(currentDateCA);
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

if (strDeliveryMonthShortCA !== '' && strDeliveryMonthShortCA !== undefined && strDeliveryDayCA !== '' && strDeliveryDayCA !== undefined && strDayCA !== undefined && strDayCA !== '') {
  var strShippingWraperHtml =`<div class="shipping-date-estimate">
                <p><span></span>Ships by <b>${strDeliveryDayCA}, ${strDeliveryMonthShortCA} ${strDayCA}</b></p>
            </div>
            <div class="total-purchases-estimate">
                <p><b>20 purchased</b> in the last 24 hours</p>
            </div>`
    document.querySelector(".estimate-delivery-wrapper").innerHTML = strShippingWraperHtml;
}
