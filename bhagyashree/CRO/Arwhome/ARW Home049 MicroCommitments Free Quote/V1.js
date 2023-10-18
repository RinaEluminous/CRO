var waitForJquery = setInterval(function() { 
    
    if (typeof jQuery != 'undefined') {
		console.log("%c ARW Home049: MicroCommitments Free Quote", "background:red;color : white;padding:10px");
        var timesRun = 0;
     	var intInterval = setInterval(function(){
             timesRun += 1;
            console.log("First Name Len >> "+ jQuery('input[id^="dtc_first_name"]').length);
            console.log("Last Name Len >> "+ jQuery('input[id^="dtc_last_name"]').length);
            if(jQuery('input[id^="dtc_first_name"]').length > 0){
                 jQuery('input[id^="dtc_first_name"]').val('test first name');
                jQuery('input[id^="dtc_last_name"]').val('test last name');

                //jQuery('input[type="submit"]')[0].click();
            }

            if(timesRun === 60){
                clearInterval(intInterval);
            }


        }, 1000);

        

    	clearInterval(waitForJquery);  
    
    }
}, 50); 