var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		addCustomPopupForm();

    	function addCustomPopupForm() {
    		if(jQuery(window).width() <= 767 && jQuery("#protection").length > 0) {
                jQuery("#protection").hide();
                if(jQuery('.custBtnStyle').length == 0){
                    jQuery('<a class="custBtnStyle" id="custMobileCTA">Explore Protection Plans</a>').insertAfter("#protection");
                }
            }

            jQuery('#carrers_header .container a.btn-style').attr('href','javascript:void(0);');

            jQuery("head").append( '<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>');

            if(jQuery('.custPopupBlocks').length == 0){
            	jQuery('<div id="custQuotePopup1" class="custOverlay custPopupBlocks"><div class="custBlackBg"></div><div class="custPopup"> <h2>Start Here for Your FREE Quote</h2> <a class="close">×</a> <div class="custContent"> <form action="javascript:void(0);" id="custPopupForm" name="custPopupForm" method="POST"> <div class="username form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_first-name.svg"> <input type="text" name="username" id="first_name" placeholder="First Name" required="required"> </div><div class="username form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_first-name.svg"> <input type="text" name="lastname" id="last_name" placeholder="Last Name" required="required"> </div><div class="email form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_email.svg"> <input type="email" name="email" id="email_Id" placeholder="Email" required="required"> </div><div class="phonenumber form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_phone.svg"> <input type="tel" id="phone_no" name="phone" placeholder="(___) ___-____" required> </div><div class="zipcode form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_loction.svg"> <input type="text" name="zip_code" id="zip_code" class="" placeholder="Zip code" required="required"> </div><input type="submit" value="Submit" class="custSubmitBtn"> </form> <p>By entering my information &amp; submitting for a free quote, I provide my electronic signature in which I consent and agree to the following: (a) the <a href="https://arwhome.com/terms-conditions">Terms</a> and <a href="https://arwhome.com/privacy-policy">Privacy Policy.</a> (b) I am providing express written consent to share my information with ARW Home and authorize them to contact me through automated means (e.g., automatic telephone dialing system, text, artificial or pre-recorded messaging) for promotional marketing purposes at the phone number(s) and at the email address I provided above, via telephone, mobile device (including SMS and MMS) and/or email even if my telephone number is currently listed on any state, federal or corporate Do Not Call list. I understand that consent is not required as a condition to purchase a good/service, and that I can opt-out from SMS messages at any time by replying STOP. Message and data rates may apply. I understand that I may revoke this consent at any time.</p><div class="custImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/trustpilot.png" alt="trustpilot"></div></div></div></div>').appendTo('body');
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
                if(jQuery('iframe#hs-form-iframe-0').length > 0 && jQuery('.custPopupBlocks').length > 0){
                    jQuery('iframe#hs-form-iframe-0').appendTo('.custPopupBlocks');
                    jQuery('#carrers_header .container a.btn-style').removeAttr('href');
                    clearInterval(interval);
                }

                if(timesRun === 60){
                    clearInterval(interval);
                }
            }, 50);
        }


        jQuery(document).on('click','.custPopupBlocks .custSubmitBtn', function (){
    		var strFirstName = jQuery('.custPopupBlocks #first_name').val();
			var strLastName	 = jQuery('.custPopupBlocks #last_name').val();
			var strEmail   	 = jQuery('.custPopupBlocks #email_Id').val();
			var intPhone   	 = jQuery('.custPopupBlocks #phone_no').val();
			var strZipCode   = jQuery('.custPopupBlocks #zip_code').val();

			var iframe 		 = jQuery('#hs-form-iframe-0'); 
    		var iBody 		 = iframe.contents().find("body");

			if(strFirstName !== "" && strLastName !== "" && strEmail !== "" && intPhone !== "" && strZipCode !== "") {
                iframe.contents().find('input[name="firstname"]').val(strFirstName);
                iframe.contents().find('input[name="lastname"]').val(strLastName);
                iframe.contents().find('input[name="phone"]').val(intPhone);
                iframe.contents().find('input[name="dtc_zip"]').val(strZipCode);

                var iframe = document.getElementById('hs-form-iframe-0');
                iframe.contentWindow.document.querySelector('input[name="email"]').value = strEmail;

                var submitBtn = iBody.find(".hs-button");
                jQuery('.custPopupBlocks').hide();
                
                if(submitBtn.length >  0 ){
                   submitBtn[0].click();
                }
            }			
        });

        jQuery(document).on('click','#carrers_header .container a.btn-style, #custMobileCTA' , function (){
        	if(jQuery('.page-wsl-plan #exitModal').css('display') == "none"){
        		jQuery('.custPopupBlocks').show();
        	}
        });

        jQuery(document).on('click','.custPopupBlocks .close,.custPopupBlocks .custBlackBg', function (){
            jQuery('.custPopupBlocks').hide();
        });

	   clearInterval(waitForJquery);
    }
}, 50);   