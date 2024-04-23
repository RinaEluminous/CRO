var waitForJquery = setInterval(function() {

    var strURL = window.location.href;

    if (strURL.indexOf('nail-fungus-cndf01') > 0) {
      
        var custHtmlLogoGuaranteeSection ='<bmelement class="custHighlightGuaranteeWraper">'+
        '    <div class="custAseenWraper">'+
        '        <div class="bm-logo-section">'+
        '            <div class="bm-logos">'+
        '                <div class="bm-text">As Seen In</div>'+
        '                <div class="bm-logo"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/as_seen_01.png" alt="Logo"></div>'+
        '                <div class="bm-logo"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/as_seen_02.png" alt="Logo"></div>'+
        '                <div class="bm-logo"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/as_seen_03.png" alt="Logo"></div>'+
        '                <div class="bm-logo"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/as_seen_04.png" alt="Logo"></div>'+
        '                <div class="bm-logo"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/as_seen_05.png" alt="Logo"></div>'+
        '                <div class="bm-logo"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/as_seen_06.png" alt="Logo"></div>'+
        '                <div class="bm-logo bm-rating-logo"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/as_seen_07.png" alt="Rating"></div>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '    <div class="custGuaranteeWraper">'+
        '        <div class="cust-cg-container">'+
        '            <div class="custGuaranteeMain">'+
        '                <div class="guaranteeBox">'+
        '                    <div class="icon">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/guarantee_icon.svg">'+
        '                    </div>'+
        '                    30 DAY MONEY BACK GUARANTEE'+
        '                </div>'+
        '                <div class="title">'+
        '                    You have nothing to lose but nail fungus!'+
        '                </div>'+
        '                <div class="text">'+
        '                    If you are not happy with your results within 30 days, we\'ll refund your money - no questions asked.'+
        '                </div>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</bmelement>';
        
        var intCount = 0;
        var intLogoGuaranteeInterval = setInterval(function() {
            intCount += 1;

        if(jQuery('#replo-fullpage-element .r-dubctv .r-svamie .r-1ohsdsb').length > 0 && jQuery('.custTryBtn').length == 0){

           jQuery('<a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="custTryBtn">Try EMUAIDMAX<span>RISK-FREE FOR 30 DAYS</span></a>').appendTo('#replo-fullpage-element .r-dubctv .r-svamie .r-1ohsdsb');
         }  

   
         if(jQuery('#replo-fullpage-element .r-1dxd43j').length > 0 && jQuery('.custHighlightGuaranteeWraper').length == 0){

            jQuery(custHtmlLogoGuaranteeSection).insertAfter('#replo-fullpage-element .r-1dxd43j');

         }
         if (intCount === 80) {
            clearInterval(intLogoGuaranteeInterval);
        }
    }, 30);
    
    } 

    clearInterval(waitForJquery);

}, 50);