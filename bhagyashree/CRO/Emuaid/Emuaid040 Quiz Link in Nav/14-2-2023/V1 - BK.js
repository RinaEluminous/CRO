var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        console.log("%c Emuaid040: Quiz Link in Nav","background:red;color : white;padding:10px");
        addCustQuizCtaAndPopup();
        
        function addCustQuizCtaAndPopup() {
            console.log("in function...");
            console.log("session  >>> " + sessionStorage.getItem('customQuizCtaClosed'));
            
            if(sessionStorage.getItem('customQuizCtaClosed') === null ){
                console.log("add custom HTML >>>>>> ");
              
                var timesRun = 0;
                var interval = setInterval(function(){
                    timesRun += 1;

                    console.log("Len >> " + jQuery('.tmenu--wrap nav.tmenu_navbar ul.tmenu_nav').length);


                    if(jQuery('.customQuizCta').length == 0 && jQuery('header:not(#header) .tmenu--wrap nav.tmenu_navbar ul.tmenu_nav').length > 0){

                        jQuery('<div class="custNavLinksMain"><div class="tmenu_item tmenu_item--root tmenu_item_level_0 tmenu_item_submenu_type_flyout customQuizCta"> <a class="tmenu_item_link custTakeQuizCTA"> <span class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/quiz_icon.svg"> </span> <span class="tmenu_item_text">Take the Quiz</span> </a></div><div class="tmenu_item tmenu_item--root tmenu_item_level_0 tmenu_item_submenu_type_flyout tmenu_item_has_child custCallNav"> <a href="javascript:;" target="_self" title="Call EMUAID®" class="tmenu_item_link"> <span class="tmenu_item_text"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/call_icon.svg"> </span> </a> <ul class="tmenu_submenu tmenu_submenu_type_flyout tmenu_submenu--desktop tmenu_submenu_flyout_position_automatic"> <li> <a href="tel:+18008813900"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/call_icon.svg"> </div><div class="text"> Call Toll Free <span>1-800-881-3900</span> </div></a> </li><li> <a href="tel:+18884501718"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/text_icon.svg"> </div><div class="text">Text Toll Free<span>1-888-450-1718</span> </div></a> </li><li class="time"> <a href="javascript:;" target="_self"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/clock_icon.svg"> </div><div class="text">M-F: 8:30AM-6PM EST<span>Sat-Sun Closed</span> </div></a> </li></ul></div></div>').insertAfter('header.jsc-main-nav-menu .tmenu_navbar');
                            
                            clearInterval(interval);
                    }

                    if(timesRun === 60){
                        clearInterval(interval);
                    }

                }, 70);

              
                if(jQuery('.custProductQuizPopup').length == 0){
                    jQuery('<div class="custProductQuizPopup"><div id="custprodSelectionBlockQuiz" class="popupContentBlock"><button type="button" class="btn-close"></button><div class="prodSelectionBlock"><h3>Product Selection Quiz</h3><div class="popupProgressBar"><div class="custProgressSteps"></div></div><h2>Which condition are you struggling with below?</h2><div class="custProdListings"><ul><li><button data-name="max">Nail Fungus</button></li><li><button data-name="max">Psoriasis</button></li><li><button data-name="max">Shingles</button></li><li><button data-name="max">Scabies</button></li><li><button data-name="max">Genital warts</button></li><li><button data-name="max">Skin tags</button></li><li><button data-name="max">HS / Severe boils</button></li><li><button data-name="max">Athlete\'s foot</button></li><li><button data-name="max">Resistant/persistent infections</button></li><li><button class="customNextCTA" data-id="step-1">Other</button></li></ul></div></div><div class="prodSelectionBlock nextStepFirstGuide"><button type="button" class="btn-back" data-step="step-2"></button><h3>Product Selection Quiz</h3><div class="popupProgressBar"><div class="custProgressSteps"></div></div><h2>Are you struggling with one of the below?</h2><div class="custProdListings"><ul><li><button data-name="regular">Hemorrhoids</button></li><li><button data-name="regular">Eczema</button></li><li><button data-name="regular">Lichen sclerosus</button></li><li><button data-name="regular">Dermatitis</button></li><li><button data-name="regular">Neuropathy</button></li><li><button data-name="regular">Itching</button></li><li><button data-name="regular">Folliculitis</button></li><li><button data-name="regular">Vulvar Vestibulitis</button></li><li><button data-name="regular">Burns / Wounds / Rashes</button></li><li><button class="customNextCTA" data-id="step-2">Other</button></li></ul></div></div><div class="prodSelectionBlock nextStepSecondGuide"><button type="button" class="btn-back" data-step="step-3"></button><h3>Product Selection Quiz</h3><div class="popupProgressBar"><div class="custProgressSteps"></div></div><h2>Are you struggling with one of the below?</h2><div class="custProdListings"><ul><li><button data-name="acne">Acne</button></li><li><button data-name="acne">Blemishes and Cysts</button></li><li><button data-name="rosacea">Rosacea</button></li><li><button data-name="arthritis">Fibromyalgia</button></li><li><button data-name="arthritis">Arthritis</button></li><li><button data-name="arthritis">Joint / Muscle / Neck / Back aches and pains</button></li><li><button class="customNextCTA" data-id="step-3">Other</button></li></ul></div></div><div id="custWeSuggest" class="prodSuggest customSmallPopup"><h2>We suggest <span class="custProdName">EMUAIDMAX</span>.</h2><p>Enter your email to receive a discount code for your first purchase!</p><div class="imageContainer"><img class="custProdImage" src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg"></div><div class="custQuizForm"><div class="formField"><input type="email" required placeholder="Your email address..." id="custKlEmailField"><span class="customError">Please enter a valid email address</span></div><div class="formField"><button class="custRevealDiscountCodeCTA">Reveal discount code</button><a href="javascript:void(0)" class="custClosePopupCTA">I don’t want a discount</a></div><div class="klaviyo-form-WaHwn2"></div></div></div><div id="customQuizDiscount" class="prodDiscount customSmallPopup"><h2>10% Discount Code</h2><p>Copy the discount code below to use on your purchase.</p><div class="copyCode">B3PW59DPRR3E</div><div class="custQuizForm"><div class="formField"><button class="copyBtn">Copy code</button></div></div></div><div id="checkProduct" class="prodView customSmallPopup"><h2>Check out <span class="custProdName">EMUAIDMAX</span></h2><div class="imageContainer"><img class="custProdImage" src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg"></div><p>And start your successful healing journey!</p><div class="custQuizForm"><div class="formField"><a class="button" href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">View product</a></div></div></div><div id="chatSpecialist" class="prodChatSpecialist customSmallPopup"><h2><span class="chatIcon icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/chat-icon.svg"></span>Chat with a specialist!</h2><p>Chat with a condition specialist right now to figure out the best product for you and your condition.</p><div class="custQuizForm"><div class="formField"><a class="button custChatCTA" href="https://www.emuaid.com/pages/contact-us">Chat with a specialist</a><a><span class="clockIcon icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/clock-icon.svg"></span>Available 24/7</a></div></div></div></div><div class="overlay"></div></div>').prependTo('body');
                }

                /*if (document.querySelector('.customQuizCta a.custTakeQuizCTA') !== null) {
                    var strQuizSelector =  document.querySelector('.customQuizCta a.custTakeQuizCTA');
                    strQuizSelector.addEventListener("click", function(event) {
                        console.log("on CTA click >>>>> ");
                    });
                }*/

            }

            // setTimeout(function(){
            //     if(jQuery('.customQuizCta').length > 0){
            //         var intHeight = jQuery('.customQuizCta').height();
            //         if(jQuery(window).width() > 1024){
            //             jQuery('.customQuizCta + #header + .jsc-main-nav-menu.search-enabled--true').css('padding-top' , intHeight +'px');
            //         }else{
            //             jQuery('.customQuizCta + #header.mobile_nav-fixed--true').css('top', intHeight + 'px');
            //             var intHeaderHeight = jQuery('header#header').height();
            //             jQuery('#shopify-section-header').css('padding-top', intHeaderHeight + 'px');
            //         }
            //     }
            // }, 500);
        }
        // Scroll functionality for the sticky header 
        // jQuery(window).scroll(function(){
        //     if(jQuery('.customQuizCta').length > 0){
        //         var intHeight = jQuery('.customQuizCta').height();
        //         jQuery('.customQuizCta + #header.mobile_nav-fixed--true').css('top', intHeight + 'px');
        //         jQuery('.main-nav__wrapper.sticky_nav.sticky_nav--stick').css('top', intHeight + 'px');
        //     }
        // });

        // Close functionality for Sticky Header Banner
        // jQuery(document).on('click', '.customQuizCta .btn-close', function(){
        //     jQuery('.customQuizCta').remove();
        //     sessionStorage.setItem('customQuizCtaClosed', 'yes');
        //     if(jQuery(window).width() > 1024){
        //         jQuery('#header + .jsc-main-nav-menu.search-enabled--true').css('padding-top' , '0px');
        //     }else{
        //         jQuery('#header.mobile_nav-fixed--true').css('top', '0px');
        //     }
        //     jQuery('.main-nav__wrapper.sticky_nav').css('top', '0px');
        //     jQuery('#shopify-section-header').css('padding-top', '0px');
        // });

        // Close Functionality for the pop-up
        jQuery(document).on('click', '.custProductQuizPopup .btn-close, .custProductQuizPopup .popupContentBlock .custQuizForm .formField a.custClosePopupCTA, .custProductQuizPopup .overlay', function(){
            jQuery('.custProductQuizPopup').remove();
        });

        /*jQuery('.customQuizCta a.custTakeQuizCTA').on('click', function(){
            console.log("inn 1");
        });

        jQuery('.customQuizCta a.custTakeQuizCTA').click(function(){
            console.log("inn 2");
        });

        jQuery(document).on('click','.customQuizCta a.custTakeQuizCTA', function(){
            console.log("inn 3");
        });

        jQuery("body").on("click", function(event) {
            console.log("body click......");
            console.log(event.target);
            console.log(event.targetclassName)
        });

        $(function(){
            jQuery(document).on("click", '.customQuizCta a.custTakeQuizCTA',function(e) {  console.log("in function >>> on click");
            });
        });

        jQuery(document).ready(function() { 
            jQuery(document).on("click",'.customQuizCta a.custTakeQuizCTA',function(e) {
                  console.log("in document ready >>> on click");
            }); 
        })*/

        // Show Popup Functionality
        //jQuery('.customQuizCta a.custTakeQuizCTA').on('click', function(){
        jQuery(document).on('click','.customQuizCta a.custTakeQuizCTA', function(){
            console.log('clicked...');
            console.log('length >> ' + jQuery('.custProductQuizPopup').length);
            if(jQuery('.custProductQuizPopup').length == 0){                
                addCustQuizCtaAndPopup();
            }
            jQuery('.custProductQuizPopup').css('display', 'flex');
        });

        // Click functionality for Other CTA
        jQuery(document).on('click', '.custProductQuizPopup .customNextCTA', function(){
            if(jQuery(this).attr('data-id') == 'step-1'){
                jQuery('.custProductQuizPopup .prodSelectionBlock:eq(0)').hide();
                jQuery('.custProductQuizPopup .prodSelectionBlock.nextStepFirstGuide').show();
                jQuery('.custProductQuizPopup .popupContentBlock .popupProgressBar .custProgressSteps').css('width', '50%');
            }else if(jQuery(this).attr('data-id') == 'step-2'){
                jQuery('.custProductQuizPopup .prodSelectionBlock.nextStepFirstGuide').hide();
                jQuery('.custProductQuizPopup .prodSelectionBlock.nextStepSecondGuide').show();
                jQuery('.custProductQuizPopup .popupContentBlock .popupProgressBar .custProgressSteps').css('width', '75%');
            }else if(jQuery(this).attr('data-id') == 'step-3'){
                jQuery('.custProductQuizPopup .prodSelectionBlock.nextStepSecondGuide').hide();
                jQuery('.custProductQuizPopup #chatSpecialist').show();
            }
        });

        // Back functionality for Step-2 and Step-3
        jQuery(document).on('click', '.custProductQuizPopup #custprodSelectionBlockQuiz .prodSelectionBlock button.btn-back', function(){
            if(jQuery(this).attr('data-step') == 'step-2'){
                jQuery('.custProductQuizPopup .prodSelectionBlock.nextStepFirstGuide').hide();
                jQuery('.custProductQuizPopup .prodSelectionBlock:eq(0)').show();
                jQuery('.custProductQuizPopup .popupContentBlock .popupProgressBar .custProgressSteps').css('width', '25%');
            }else if(jQuery(this).attr('data-step') == 'step-3'){
                jQuery('.custProductQuizPopup .prodSelectionBlock.nextStepSecondGuide').hide();
                jQuery('.custProductQuizPopup .prodSelectionBlock.nextStepFirstGuide').show();
                jQuery('.custProductQuizPopup .popupContentBlock .popupProgressBar .custProgressSteps').css('width', '50%');
            }else{
                jQuery('.custProductQuizPopup .prodSelectionBlock.nextStepFirstGuide').hide();
                jQuery('.custProductQuizPopup .prodSelectionBlock:eq(0)').show();
                jQuery('.custProductQuizPopup .popupContentBlock .popupProgressBar .custProgressSteps').css('width', '25%'); 
            }
        });

        // Click functionality for links
        jQuery(document).on('click', ".custProductQuizPopup .popupContentBlock .custProdListings ul li button:not('.customNextCTA')", function(){
            
            var strProdType = jQuery(this).attr('data-name');
            var strProdLink = strProdImage = '', strProdName = '';

            if(strProdType == 'regular'){
                strProdLink = 'https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz';
                strProdImage = 'https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaid_0.5oz_front_E_96de6a22-25ea-4a27-8d57-112ba3ed34cb_2000x.jpg';
                strProdName = 'EMUAID';
            }else if(strProdType == 'max'){
                strProdLink = 'https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz';
                strProdImage = 'https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg';
                strProdName = 'EMUAIDMAX';
            }else if(strProdType == 'acne'){
                strProdLink = 'https://www.emuaid.com/products/overnight-acne-treatment';
                strProdImage = 'https://cdn.shopify.com/s/files/1/0549/3181/6637/products/overnight-acne-treatment-1000x1000_E_2000x.jpg?v=1620185861';
                strProdName = 'Overnight Acne Treatment';
            }else if(strProdType == 'rosacea'){
                strProdLink = 'https://www.emuaid.com/products/therapeutic-moisture-bar';
                strProdImage = 'https://cdn.shopify.com/s/files/1/0549/3181/6637/products/IMG-EMA-S444-003_5000x-REV_c591ecbf-9d17-42da-9655-804a5bb6d24d_2000x.jpg';
                strProdName = 'Therapeutic Moisture Bar';
            }else if(strProdType == 'arthritis'){
                strProdLink = 'https://www.emuaid.com/products/emuaid-pain-relieving-cream';
                strProdImage = 'https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaid-pain-relieving-cream_4oz_front_1000x1000_E_2000x.jpg';
                strProdName = 'Pain Relieving Cream';
            }else{
                strProdLink = 'https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz';
                strProdImage = 'https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg';
                strProdName = 'EMUAIDMAX';
            }

            jQuery('.custProductQuizPopup .popupContentBlock #checkProduct.customSmallPopup .custQuizForm .formField a').attr('href', strProdLink);
            jQuery('.custProductQuizPopup .popupContentBlock .imageContainer img.custProdImage').attr('src', strProdImage);
            jQuery('.custProductQuizPopup .popupContentBlock h2 span.custProdName').text(strProdName)

            jQuery('.custProductQuizPopup .prodSelectionBlock').hide();
            jQuery('.custProductQuizPopup #custWeSuggest').show();
        });

        // Click functionality Reveal Doscount CTA 
        jQuery(document).on('click', '.custProductQuizPopup .popupContentBlock .customSmallPopup .custQuizForm .formField button.custRevealDiscountCodeCTA', function(){
            var strEmail = jQuery("#custKlEmailField").val().trim();
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
            if(strEmail == "" || !regex.test(strEmail)){
                jQuery('.custProductQuizPopup .popupContentBlock .custQuizForm .formField span.customError').show();
            }else{
                jQuery('.custProductQuizPopup .popupContentBlock .custQuizForm .formField span.customError').hide();
                if(document.getElementById("email_53614150") !== null){
                    document.getElementById("email_53614150").value = strEmail;
                    document.getElementById("email_53614150").dispatchEvent(new Event("input"));
                }

                // Save data on klavio
                if(jQuery("#custWeSuggest .custQuizForm .klaviyo-form .go3894874857").length > 0){
                    jQuery("#custWeSuggest .custQuizForm .klaviyo-form .go3894874857").attr('id', 'custKlaviyoCTA');
                  
                    setTimeout(function(){
                        document.getElementById("custKlaviyoCTA").click();
                    }, 350);
                }
          
                jQuery('.custProductQuizPopup #custWeSuggest').hide();
                jQuery('.custProductQuizPopup #customQuizDiscount').show();
            }
        });

        // Click functionality Copy Code CTA 
        jQuery(document).on('click', '.custProductQuizPopup .popupContentBlock .customSmallPopup .custQuizForm .formField button.copyBtn', function(){
            var customInput = document.createElement("input");
            document.querySelector("body").append(customInput);
            customInput.value = 'B3PW59DPRR3E ';
            customInput.select();
            document.execCommand("copy");
            customInput.remove();

            jQuery('.custProductQuizPopup #customQuizDiscount').hide(); 
            jQuery('.custProductQuizPopup #checkProduct').show();
        });

        // Click functionality View Product CTA 
        jQuery(document).on('click', '.custProductQuizPopup .popupContentBlock #checkProduct.customSmallPopup .custQuizForm .formField a', function(){
            sessionStorage.setItem('customQuizCtaClosed', 'yes');
        });

        clearInterval(waitForJquery);  
    }
}, 50);