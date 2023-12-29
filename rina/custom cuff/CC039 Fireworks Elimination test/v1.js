var waitForJquery = setInterval(function() {
    if (typeof jQuery != "undefined") {
         if(jQuery('.custPuraVidaVideoProducts').parent().length > 0){
                jQuery('.custPuraVidaVideoProducts').parent().hide();
            }
          clearInterval(waitForJquery);
        }
}, 50);