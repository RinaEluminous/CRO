//For india 
var strCurrentTimeUS = new Date();
var strCurrentDayUS = strCurrentTimeUS.getDay();
var intCurrentHourUS = strCurrentTimeUS.getHours();
var intCurrentMinuteUS = strCurrentTimeUS.getMinutes();

// var strCurrentTimeUS = new Date();
// console.log('strCurrentTimeUS >>>',strCurrentTimeUS);
// strCurrentTimeUS.setUTCHours(new Date().getUTCHours() + 5); // Adjust for IST: UTC+5 hours
// strCurrentTimeUS.setUTCMinutes(new Date().getUTCMinutes() + 30); // Adjust for IST: UTC+30 minutes

// const istDate = new Date(strCurrentTimeUS.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })); // Set timezone to Asia/Kolkata for IST
// var strCurrentDayUS = istDate.getDay();
// var intCurrentHourUS = istDate.getHours();


let strDeliveryDayUS = '';
let intDeliveryDayIndexUS = '';

let arrDeliveryDaysUS = ['Tue','Wed', 'Thu', 'Fri', 'Mon', 'Tue','Tue'];
let arrDeliveryDaysIndexUS = ['2', '3', '4', '5', '1', '2','2'];

var intCurrentIndexUS = strCurrentDayUS;
var intNextDayIndexUS = (intCurrentIndexUS + 1) % 7;

// Check if current hour is greater than or equal to 11
if (intCurrentHourUS >= 11) {
    console.log('greater than 11')
    strDeliveryDayUS = arrDeliveryDaysUS[intNextDayIndexUS];
    console.log('strDeliveryDayUS',strDeliveryDayUS)
    intDeliveryDayIndexUS = arrDeliveryDaysIndexUS[intNextDayIndexUS];
    
} else {
    console.log('less than 11')
    strDeliveryDayUS = arrDeliveryDaysUS[intCurrentIndexUS];
    console.log('strDeliveryDayUS',strDeliveryDayUS)
    intDeliveryDayIndexUS = arrDeliveryDaysIndexUS[intCurrentIndexUS];
}

let dayDifferenceUS = intDeliveryDayIndexUS - strCurrentDayUS;
if (dayDifferenceUS <= 0) {
    dayDifferenceUS += 7;
}

let upcomingDateUS = new Date(strCurrentTimeUS);

upcomingDateUS.setDate(upcomingDateUS.getDate() + dayDifferenceUS);

let upcomingDateNumberUS = upcomingDateUS.getDate();

let strDeliveryMonthShortUS = upcomingDateUS.toLocaleString('default', { month: 'short' });

var strDayUS = '';

if (upcomingDateNumberUS >= 5 && upcomingDateNumberUS <= 20) {
    strDayUS = upcomingDateNumberUS + 'th';
} else {
    const lastDigitUS = upcomingDateNumberUS % 10;
    switch (lastDigitUS) {
        case 1:
            strDayUS = upcomingDateNumberUS + 'st';
            break;
        case 2:
            strDayUS = upcomingDateNumberUS + 'nd';
            break;
        case 3:
            strDayUS = upcomingDateNumberUS + 'rd';
            break;
        default:
            strDayUS = upcomingDateNumberUS + 'th';
            break;
    }
}
console.log('strDeliveryDay',strDeliveryDayUS);
console.log('strDeliveryMonthShort',strDeliveryMonthShortUS);
console.log('strDay',strDayUS);

if (strDayUS !== '' && strDayUS !== undefined && strDeliveryMonthShortUS !== '' && strDeliveryMonthShortUS !== undefined  && strDeliveryDayUS !== undefined && strDeliveryDayUS !== '' ) {
    var strShippingWraperHtml = '<div class="custShippingWraper">' +
        '    <div class="inside">' +
        '        <div class="shippingTime">' +
        '            <div class="status available"></div>' +
        '            <div>' +
        '                Ships by <b>' + strDeliveryDayUS + ', ' + strDeliveryMonthShortUS + ' ' + strDayUS + '</b>' +
        '            </div>' +
        '        </div>' +
        '        <div class="purchaseCount"><b>20 purchased</b> in the last 24 hours</div>' +
        '    </div>' +
        '</div>';
}
