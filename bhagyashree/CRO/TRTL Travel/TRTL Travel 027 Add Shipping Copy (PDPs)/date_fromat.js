var date = new Date();
var strDate = date.setDate(date.getDate() + 7);

var date = new Date();
date.setDate(date.getDate() - 7);

var finalDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();

===============================
var date = new Date(), y = date.getFullYear(), m = date.getMonth();

var firstDay = new Date(y, m, 1).toString().split(' ').slice(0,3).join(' ');

console.log(firstDay)

===================================
var date = new Date();
date.setDate(date.getDate() + 6);

var strDate 	 = date.toString().split(' ').slice(0,3).join(' ');

if(strDate !== '' && strDate !== undefined && strDate !== null){
	var arrDate 	 = strDate.toString().split(' ');
	var strFinalDate = arrDate[0] + ', ' + arrDate[1] +' '+  arrDate[2];
}
===================

var startDate = new Date();
//startDate = new Date(startDate.replace(/-/g, "/"));
var endDate = "", noOfDaysToAdd = 3, count = 0;
while(count < noOfDaysToAdd) {
    endDate = new Date(startDate.setDate(startDate.getDate() + 1));
    if(endDate.getDay() != 0 && endDate.getDay() != 6){
       count++;
    }
}
console.log(endDate);//You can format this date as per your requirement
endDate = endDate.toString().split(' ').slice(0,3).join(' ');

if(endDate !== '' && endDate !== undefined && endDate !== null){
	var arrDate 	 = endDate.toString().split(' ');
	var strFinalDate = arrDate[0] + ', ' + arrDate[1] +' '+  arrDate[2];
}
console.log(strFinalDate);
=================================



var startDate = "10-DEC-2011";
startDate = new Date(startDate.replace(/-/g, "/"));
var endDate = "", noOfDaysToAdd = 13, count = 0;
while(count < noOfDaysToAdd){
    endDate = new Date(startDate.setDate(startDate.getDate() + 1));
    if(endDate.getDay() != 0 && endDate.getDay() != 6){
       count++;
    }
}
alert(endDate);//You can format this date as per your requirement