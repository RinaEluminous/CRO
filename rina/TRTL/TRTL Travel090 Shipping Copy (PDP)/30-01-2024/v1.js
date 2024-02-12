console.log('TRTL Travel090: Shipping Copy (PDP)');
var waitForJquery = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        var strURL = window.location.href;
        if (strURL.indexOf('/products/') > 0) {
            addShippingCopyOnPdp();
        }

        function addShippingCopyOnPdp() {
            
            const strDeliveryTime = new Date();
            strDeliveryTime.setDate(strDeliveryTime.getDate() + 2); // Add 2 days for Saturday delivery
            strDeliveryTime.setHours(14, 0, 0, 0); // Set the time to 14:00

            // Get the current time
            const strCurrentTime = new Date();
            console.log('strCurrentTime >>>>',strCurrentTime);
            //if current time is greater than 14:00 then add 1 day in delivery time
            if (strCurrentTime.getHours() >= 14) {      
                strDeliveryTime.setDate(strDeliveryTime.getDate() + 1);
            }   
            console.log('strDeliveryTime >>>>',strDeliveryTime);
            
            // Calculate the difference between the two times
           
            const strDiffMs = strDeliveryTime - strCurrentTime;
            const strDiffSec = Math.floor(strDiffMs / 1000);
            const strDiffMin = Math.floor(strDiffSec / 60);
            const strDiffHr = Math.floor(strDiffMin / 60);
           
           
            // Calculate the remaining hours and minutes
            const strRemHr = strDiffHr % 24;
            const strRemMin = strDiffMin % 60;

            // Get the current day of the week
            const strTodayDate = new Date();
            const strDayOfWeek = strTodayDate.getDay();
            console.log('strDayOfWeek >>>>>>>>>',strDayOfWeek)
         
            // Set the delivery day based on the current day of the week

            // let strDeliveryDay = '';
            // if (strDayOfWeek === 6) {
            //     strDeliveryDay = 'Saturday';
            // } else if (strDayOfWeek === 0) {
            //     strDeliveryDay = 'Monday';
            // } else {
            //     strDeliveryDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][strDayOfWeek + 2];
            // }



            console.log('strDeliveryDay >>>>>>>>>',strDeliveryDay);

            //add exist condition of strRemHr and strRemMin 
            if(strRemHr !== '' && strRemHr !== undefined && strRemMin !== '' && strRemMin !== undefined && strDeliveryDay !== '' && strDeliveryDay !== undefined){
      
                jQuery('.estimated-delivery p').html('<div class="col-12 custShipingMsg"><div class="custOrderWithinMsg">Order within <span>'+ strRemHr + " hr " + strRemMin + " min"+'</span> to receive it by <span>'+strDeliveryDay+'</span></div></div>');
            }
            
        }
        setInterval(addShippingCopyOnPdp, 60000); 
        clearInterval(waitForJquery);
    }
}, 50);


