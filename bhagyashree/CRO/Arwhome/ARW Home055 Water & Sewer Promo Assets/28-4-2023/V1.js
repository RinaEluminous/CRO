var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		addCustomPopupForm();

		function addCustForm(){

    		jQuery('#carrers_header .container a.btn-style').removeAttr('href');

            jQuery("head").append( '<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>');

            if(jQuery('.custPopupBlocks').length == 0){
            	jQuery('<div id="custQuotePopup1" class="custOverlay custPopupBlocks"> <div class="custPopup"> <h2>Start Here for Your FREE Quote</h2> <a class="close">×</a> <div class="custContent"> <p>By entering my information &amp; submitting for a free quote, I provide my electronic signature in which I consent and agree to the following: (a) the <a href="#">Terms</a> and <a href="">Privacy Policy.</a> (b) I am providing express written consent to share my information with ARW Home and authorize them to contact me through automated means (e.g., automatic telephone dialing system, text, artificial or pre-recorded messaging) for promotional marketing purposes at the phone number(s) and at the email address I provided above, via telephone, mobile device (including SMS and MMS) and/or email even if my telephone number is currently listed on any state, federal or corporate Do Not Call list. I understand that consent is not required as a condition to purchase a good/service, and that I can opt-out from SMS messages at any time by replying STOP. Message and data rates may apply. I understand that I may revoke this consent at any time.</p><div class="custImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/trustpilot.png" alt="trustpilot"></div></div></div></div>').appendTo('body');
            }

            setTimeout(function() {
                hbspt.forms.create({
                    region: "na1",
                    portalId: "20923640",
                    formId: "759c5431-850b-4f90-a9c2-715ecf30bc33"
                });

                repositionHubSpotForm();
                
            }, 2000);

		}


    	function addCustomPopupForm() {
    		jQuery('#carrers_header .container a.btn-style').removeAttr('href');

            jQuery("head").append( '<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>');

            if(jQuery('.custPopupBlocks').length == 0){
            	jQuery('<div id="custQuotePopup1" class="custOverlay custPopupBlocks"> <div class="custPopup"> <h2>Start Here for Your FREE Quote</h2> <a class="close" href="#">×</a> <div class="custContent"> <form action="javascript:void(0);" id="custPopupForm" name="custPopupForm" method="POST"> <div class="username form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_first-name.svg"> <input type="text" name="username" id="first_name" placeholder="First Name" required="required"> </div><div class="username form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_first-name.svg"> <input type="text" name="lastname" id="last_name" placeholder="Last Name" required="required"> </div><div class="email form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_email.svg"> <input type="email" name="email" id="email_Id" placeholder="Email" required="required"> </div><div class="phonenumber form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_phone.svg"> <input type="tel" id="phone_no" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="(___) ___-____"> </div><div class="zipcode form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_loction.svg"> <input type="text" name="zip_code" id="zip_code" class="" placeholder="Zip code" required="required"> </div><input type="submit" value="Submit" class="custSubmitBtn"> </form> <p>By entering my information &amp; submitting for a free quote, I provide my electronic signature in which I consent and agree to the following: (a) the <a href="#">Terms</a> and <a href="">Privacy Policy.</a> (b) I am providing express written consent to share my information with ARW Home and authorize them to contact me through automated means (e.g., automatic telephone dialing system, text, artificial or pre-recorded messaging) for promotional marketing purposes at the phone number(s) and at the email address I provided above, via telephone, mobile device (including SMS and MMS) and/or email even if my telephone number is currently listed on any state, federal or corporate Do Not Call list. I understand that consent is not required as a condition to purchase a good/service, and that I can opt-out from SMS messages at any time by replying STOP. Message and data rates may apply. I understand that I may revoke this consent at any time.</p><div class="custImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/trustpilot.png" alt="trustpilot"></div></div></div></div>').appendTo('body');
            }

            setTimeout(function() {
                hbspt.forms.create({
                    region: "na1",
                    portalId: "20923640",
                    formId: "759c5431-850b-4f90-a9c2-715ecf30bc33"
                });

                repositionHubSpotForm();
            }, 2000);
        }

        function repositionHubSpotForm() {
            var timesRun = 0;
            var interval = setInterval(function(){
                timesRun += 1;
                console.log("iframe Len >> " + jQuery('iframe#hs-form-iframe-0').length);
                console.log("custom form >> " + jQuery('.custPopupBlocks').length );
                if(jQuery('iframe#hs-form-iframe-0').length > 0 && jQuery('.custPopupBlocks').length > 0){
                    jQuery('iframe#hs-form-iframe-0').appendTo('.custPopupBlocks');
                    //jQuery('iframe#hs-form-iframe-0').prependTo(".custPopup .custContent");
                    jQuery('.page-wsl-plan .hs-form-iframe').show();
                    clearInterval(interval);
                }

                if(timesRun === 60){
                    clearInterval(interval);
                }
            }, 50);
        }


        jQuery(document).on('click','.custPopupBlocks .custSubmitBtn', function (){
        	jQuery('.custPopupBlocks').hide();
        	
        	//setTimeout(function (){
        		var strFirstName = jQuery('.custPopupBlocks #first_name').val();
				var strLastName	 = jQuery('.custPopupBlocks #last_name').val();
				var strEmail   	 = jQuery('.custPopupBlocks #email_Id').val();
				var intPhone   	 = jQuery('.custPopupBlocks #phone_no').val();
				var strZipCode   = jQuery('.custPopupBlocks #zip_code').val();

				var iframe 		 = jQuery('#hs-form-iframe-0'); 
	    		var iBody 		 = iframe.contents().find("body");

				console.log("strFirstName >> " + strFirstName);
				console.log("strLastName >> " + strLastName);
				console.log("strEmail >> " + strEmail);
				console.log("intPhone >> " + intPhone);
				console.log("strZipCode >> " + strZipCode);
				console.log("first_name Len  >> " + iframe.contents().find('input[name="dtc_first_name"]').length);
				console.log("last_name Len  >> " + iframe.contents().find('input[name="dtc_last_name"]').length);

                if(strFirstName !== "" && strLastName !== "" && strEmail !== "" && intPhone !== "" && strZipCode !== "") {

                    console.log("submit form.......");
                    iframe.contents().find('input[name="firstname"]').val(strFirstName);
                    //document.querySelector('input[name="dtc_first_name"]').value = strFirstName;
                    //document.querySelector('input[name="dtc_first_name"]').dispatchEvent(new Event("input"));

                    iframe.contents().find('input[name="lastname"]').val(strLastName);

                    //document.querySelector('input[name="dtc_last_name"]').value = inputLastName;
                    //document.querySelector('input[name="dtc_last_name"]').dispatchEvent(new Event("input"));

                    //iframe.contents().find('input[id$="email"]').val(strEmail);
                    
                    //iframe.contents().find('input[name="phone"]').val(intPhone);

                    iframe.contents().find('input[name="dtc_zip"]').val(strZipCode);
                    
                    /*var myframe = document.getElementById('hs-form-iframe-0');
                    myframe.document.getElementById('input[id="dtc_first_name-"]').value = strFirstName;
                    myframe.document.getElementById('input[id="dtc_last_name-"]').value = strLastName;
                    myframe.document.getElementById('input[id="email-"]').value     = strEmail;
                    myframe.document.getElementById('input[id="phone-"]').value     = intPhone;
                    myframe.document.getElementById('input[id="dtc_zip-"]').value   = strZipCode;*/

                    /*console.log("check element >>>> ");
                    console.log(document.querySelector('input[name="dtc_first_name"]'));
                    document.querySelector('input[name="dtc_first_name"]').value = strFirstName;
                    document.querySelector('input[name="dtc_first_name"]').dispatchEvent(new Event("input"))*/


                    var iframe = document.getElementById('hs-form-iframe-0');
                    
                    //console.log( iframe.contentWindow.document.querySelector('input[name="dtc_last_name"]') );

                    console.log(iframe.contentWindow.document.querySelector('input[name="email"]'));
                    iframe.contentWindow.document.querySelector('input[name="email"]').setAttribute('value',strEmail);
                    iframe.contentWindow.document.querySelector('input[name="email"]').value = strEmail;

                    console.log(iframe.contentWindow.document.querySelector('input[name="phone"]'));
                    //iframe.contentWindow.document.querySelector('input[name="phone"]').value= intPhone;
                    iframe.contentWindow.document.querySelector('input[name="phone"]').setAttribute('value',intPhone);


                    //iframe.contentDocument.document.querySelector('input[name="dtc_last_name"]').setAttribute("value", "democlass"); 

                    /*iframe.contentWindow.document.getElementById('input[name="dtc_last_name"]').value = strFirstName;
                    
                    iframe.contentWindow.document.querySelector('input[name="dtc_last_name"]').value = strLastName;
                    
                    iframe.contentWindow.document.querySelector('input[name="email"]').value = strEmail;
                    
                    iframe.contentWindow.document.querySelector('input[name="phone"]').value = intPhone;
                    
                    iframe.contentWindow.document.querySelector('input[name="dtc_zip"]').value = strZipCode;*/

                    var submitBtn   = iBody.find(".hs-button");
                    console.log("Submit Len >>>> " + submitBtn.length);
                    

                    // console.log("btn len >> " + document.getElementsByClassName("hs-button").length);
                    // console.log("Len >> " + document.querySelector('.hs-button').length);

                    if(submitBtn.length >  0 ){
                        //submitBtn[0].click();
                    }

                }
        	//},2000);
			
    		// if(document.getElementsByClassName("hs-button").length > 0){
    		// 	document.getElementsByClassName("hs-button")[0].click();
    		// }
        });

        jQuery(document).on('click','#carrers_header .container a.btn-style' , function (){
        	
        	if(jQuery('.page-wsl-plan #exitModal').css('display') == "none"){
        		jQuery('.custPopupBlocks').show();
        	}
        });

        jQuery(document).on('click','.custPopupBlocks .close', function (){
            jQuery('.custPopupBlocks').hide();
        });


	clearInterval(waitForJquery);
    }
}, 50);   