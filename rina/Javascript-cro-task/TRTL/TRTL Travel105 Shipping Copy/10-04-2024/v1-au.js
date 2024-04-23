window.onload = function() {
  var strURL = window.location.href;
  if (strURL.indexOf('/products/') > 0) {
      addShippingCopyOnPdpNew();
      // Set up interval for updating shipping copy every minute
      var intPreviousMinute = '';
      setInterval(function() {
          var strCurrentTime = new Date();
          var intCurrentMinute = strCurrentTime.getUTCMinutes();
          if (intPreviousMinute !== intCurrentMinute) {
              addShippingCopyOnPdpNew();
              intPreviousMinute = intCurrentMinute;
          }
      }, 60000);
  }
};

//add shipping copy on Pdp page
function addShippingCopyOnPdpNew() {
  // Add visible class to estimated delivery if it exists
    
      if(jQuery('.estimated-delivery').length > 0){
          jQuery('.estimated-delivery').addClass('visible');
      }
      
      var intCurrentHours = new Date().getUTCHours();
      var intCurrentMinutes = new Date().getUTCMinutes();
      var intCurrentDay = new Date().getUTCDay();

      var strDeliveryDay = '', intTotalHours = '';

      switch (intCurrentDay) {
        case 0:
          strDeliveryDay = "Tuesday";
          intTotalHours = 23;
          break;
        case 1:
          strDeliveryDay = "Wednesday";
          intTotalHours = 23;
          break;
        case 2:
          strDeliveryDay = "Thursday";
          intTotalHours = 23;
          break;
        case 3:
          strDeliveryDay = "Friday";
          intTotalHours = 23;
          break;
        case 4:
          strDeliveryDay = "Monday";
          intTotalHours = 23;
          break;
        case 5:
          strDeliveryDay = "Monday";
          intTotalHours = 23;
          break;
        case 6:
          strDeliveryDay = "Monday";
          intTotalHours = 23;
      }

      var intRemainingHours = intTotalHours - intCurrentHours;
      var intRemainingMinutes = 60 - intCurrentMinutes;

      if(intRemainingMinutes == 60){
        intRemainingHours = intRemainingHours + 1;
      }

      if (intRemainingMinutes !== '' && intRemainingMinutes !== undefined && intRemainingHours !== '' && intRemainingHours !== undefined && strDeliveryDay !== '' && strDeliveryDay !== undefined) {
          
      var estimatedDeliveryElement = document.querySelector('.estimated-delivery p');
     
      if (estimatedDeliveryElement !== null) {
          estimatedDeliveryElement.innerHTML = '<div class="col-13 custShipingMsg"><div class="custOrderWithinMsg">Order within <span>' + intRemainingHours + " hr " + intRemainingMinutes + " min" + '</span> to receive it by <span>' + strDeliveryDay + '</span></div></div>';
      }
  }
}