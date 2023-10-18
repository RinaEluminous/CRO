var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        
        addCustomPopupForm();

        //add custom popup
        function addCustomPopupForm() {
            //add custom CTA for mobile only
            if(jQuery(window).width() <= 767 && jQuery("#protection").length > 0) {
                jQuery("#protection").hide();
                if(jQuery('.custBtnStyle').length == 0){
                    jQuery('<a class="custBtnStyle" id="custMobileCTA">Explore Protection Plans</a>').insertAfter("#protection");
                }
            }

            jQuery('#carrers_header .container a.btn-style').attr('href','javascript:void(0);');

            jQuery("head").append( '<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>');

            if(jQuery('.custPopupBlocks').length == 0){
                jQuery('<div id="custQuotePopup1" class="custOverlay custPopupBlocks"><div class="custBlackBg"></div><div class="custPopup"> <h2>Start Here for Your FREE Quote</h2> <a class="close">×</a> <div class="custContent"> <form action="javascript:void(0);" id="custPopupForm" name="custPopupForm" method="POST"> <div class="first_name form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_first-name.svg"> <input type="text" name="username" id="first_name" placeholder="First Name"> </div><div class="last_name form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_first-name.svg"> <input type="text" name="lastname" id="last_name" placeholder="Last Name"> </div><div class="email form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_email.svg"> <input type="email" name="email" id="email_Id" placeholder="Email"> </div><div class="phonenumber form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_phone.svg"> <input type="tel" id="phone_no" name="phone" placeholder="(___) ___-____"> </div><div class="zipcode form-control"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/np_loction.svg"> <input type="text" name="zip_code" id="zip_code" class="" placeholder="Zip code"> </div><input type="submit" value="Submit" class="custSubmitBtn"> </form> <p>By entering my information &amp; submitting for a free quote, I provide my electronic signature in which I consent and agree to the following: (a) the <a href="https://arwhome.com/terms-conditions">Terms</a> and <a href="https://arwhome.com/privacy-policy">Privacy Policy.</a> (b) I am providing express written consent to share my information with ARW Home and authorize them to contact me through automated means (e.g., automatic telephone dialing system, text, artificial or pre-recorded messaging) for promotional marketing purposes at the phone number(s) and at the email address I provided above, via telephone, mobile device (including SMS and MMS) and/or email even if my telephone number is currently listed on any state, federal or corporate Do Not Call list. I understand that consent is not required as a condition to purchase a good/service, and that I can opt-out from SMS messages at any time by replying STOP. Message and data rates may apply. I understand that I may revoke this consent at any time.</p><div class="custImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/trustpilot.png" alt="trustpilot"></div></div></div></div>').appendTo('body');
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

        //append hubspot form to custom popup
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

        //validate form input on from submit click
        jQuery(document).on('click','.custPopupBlocks .custSubmitBtn', function (e){
            e.preventDefault();
            var isCheck = valdiateForm('.custPopupBlocks .form-control input');
            if( isCheck ){
                submitHubSpotForm();
            }
        });

        //validate form input on blur
        jQuery('.custPopupBlocks .form-control input').on('blur', function(e){
            e.preventDefault();
            var isCheck = false;
            if(e.which == 13) {
               valdiateForm('.custPopupBlocks .form-control input');
            }
            else{
                valdiateForm(jQuery(this));
            }
            if( isCheck && e.which == 13){
                submitHubSpotForm();
            }
        });


        //validate form input on keyup
        jQuery('.custPopupBlocks .form-control input#email_Id,.custPopupBlocks .form-control input#phone_no').on('keyup', function(e){
            e.preventDefault();
            var isCheck = false;
            if(e.which == 13) {
               valdiateForm('.custPopupBlocks .form-control input');
            }
            else{
                valdiateForm(jQuery(this));
            }
            if( isCheck && e.which == 13){
                submitHubSpotForm();
            }
        });

        //on form input focus remove error 
        jQuery(".custPopupBlocks .form-control input").focus(function() {
            if(jQuery(this).siblings('.error').length > 0){
                jQuery(this).siblings('.error').remove();
            }
        });

        //validate form fields
        function valdiateForm(strElement) {
            var isValid = false;
            jQuery(strElement).each(function(){
                jQuery(this).siblings('.error').remove();
                if(jQuery(this).val() == "" || jQuery(this).length == 0) {
                    jQuery(this).after('<span class="error">Please complete this required field.</span>');
                    jQuery(this).siblings('.error').show();
                }
                else{
                    if(jQuery(this)[0].id == "email_Id") {
                        var regex       = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                        var validEmail  = regex.test(jQuery(this).val());
                        if (!validEmail) {
                            if(jQuery(this).siblings('.error').length > 0){
                                jQuery(this).siblings('.error').remove();
                            }

                            jQuery(this).after('<span class="error">Email must be formatted correctly.</span>');
                            jQuery(this).siblings('.error').show();
                        }
                    }

                    if(jQuery(this)[0].id == "phone_no"){
                        var phoneRegEx    = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;
                        var validPhoneNo  = phoneRegEx.test(jQuery(this).val());
                        
                        if (!validPhoneNo) {

                            if(jQuery(this).siblings('.error').length > 0){
                                jQuery(this).siblings('.error').remove();
                            }

                            jQuery(this).after('<span class="error">Must contain only numbers, +()-</span>');
                            jQuery(this).siblings('.error').show();
                        }
                    }
                }
            })

            if(jQuery('.custPopupBlocks .error').length == 0){
               isValid = true;
            }
            else{
                isValid = false; 
            }

            return isValid;
        }

        //Submit HubSpot Form
        function submitHubSpotForm(){
            var strFirstName  = jQuery('.custPopupBlocks #first_name').val();
            var strLastName   = jQuery('.custPopupBlocks #last_name').val();
            var strEmail      = jQuery('.custPopupBlocks #email_Id').val();
            var intPhone      = jQuery('.custPopupBlocks #phone_no').val();
            var strZipCode    = jQuery('.custPopupBlocks #zip_code').val();
            var iframe       = jQuery('#hs-form-iframe-0'); 
            var iBody        = iframe.contents().find("body");

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
        }

        //On 'Protection Plan Options' CTA click open custom popup
        jQuery(document).on('click','#carrers_header .container a.btn-style, #custMobileCTA' , function (){
            if(jQuery('.page-wsl-plan #exitModal').css('display') == "none"){
                jQuery('.custContent #custPopupForm .form-control span.error').remove();
                jQuery('#custPopupForm')[0].reset();
                jQuery('.custPopupBlocks').show();
            }
        });

        //On 'close' CTA/overlay click close custom popup
        jQuery(document).on('click','.custPopupBlocks .close,.custPopupBlocks .custBlackBg', function (){
            jQuery('.custPopupBlocks').hide();
        });

       clearInterval(waitForJquery);
    }
}, 50);   