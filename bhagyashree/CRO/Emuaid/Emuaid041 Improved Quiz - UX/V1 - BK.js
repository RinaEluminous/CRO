var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

        console.log("%c Emuaid041", "background:red;color : white;padding:10px");

        //remove existing quiz elements
        if(jQuery('.custQuizeBanner').length > 0){
            jQuery('.custQuizeBanner').remove();
        }

        if(jQuery('.custQuizePopup').length > 0){
            jQuery('.custQuizePopup').remove();
        }


        //add new quiz changes
        function addStickyBannerAndPopup(){
            if(sessionStorage.getItem('custTopQuizBannerClosed') === null ){
                if(jQuery('.custTopQuizBanner').length == 0 && jQuery('#shopify-section-header header#header').length > 0){
                    jQuery('<div class="custTopQuizBanner"> <div class="bm-container"> <div class="custGetOfferBannerMain"> <div class="custGetOfferDiv"> <p>Need help choosing the right product?</p></div><div class="productBannerImg"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/desk_banner_img.png" class="desk_img"> </div><div class="custOfferDealBtn"> <button class="custTakeQuiz" class="btn btn btn-secondary">Take the quiz</button> </div></div><button type="button" class="btn-close"></button> </div></div>').insertBefore('#shopify-section-header header#header');
                }

                if(jQuery('.custMainQuizPopup').length == 0){
                    jQuery('<div class="custMainQuizPopup"><div id="ProductSelectionQuiz" class="popupContainer"><button type="button" class="btn-close"></button><div class="prodSelection"><h3>Product Selection Quiz</h3><div class="progressBar"><div class="progressSteps"></div></div><h2>Which condition are you struggling with below?</h2><div class="prodListings"><ul><li><button data-name="max">Nail Fungus</button></li><li><button data-name="max">Psoriasis</button></li><li><button data-name="max">Shingles</button></li><li><button data-name="max">Scabies</button></li><li><button data-name="max">Genital warts</button></li><li><button data-name="max">Skin tags</button></li><li><button data-name="max">HS / Severe boils</button></li><li><button data-name="max">Athlete\'s foot</button></li><li><button data-name="max">Resistant/persistent infections</button></li><li><button class="custNextCTA" data-id="step-1">Other</button></li></ul></div></div><div class="prodSelection nextStepOneGuide"><button type="button" class="btn-back" data-step="step-2"></button><h3>Product Selection Quiz</h3><div class="progressBar"><div class="progressSteps"></div></div><h2>Are you struggling with one of the below?</h2><div class="prodListings"><ul><li><button data-name="regular">Hemorrhoids</button></li><li><button data-name="regular">Eczema</button></li><li><button data-name="regular">Lichen sclerosus</button></li><li><button data-name="regular">Dermatitis</button></li><li><button data-name="regular">Neuropathy</button></li><li><button data-name="regular">Itching</button></li><li><button data-name="regular">Folliculitis</button></li><li><button data-name="regular">Vulvar Vestibulitis</button></li><li><button data-name="regular">Burns / Wounds / Rashes</button></li><li><button class="custNextCTA" data-id="step-2">Other</button></li></ul></div></div><div class="prodSelection nextStepTwoGuide"><button type="button" class="btn-back" data-step="step-3"></button><h3>Product Selection Quiz</h3><div class="progressBar"><div class="progressSteps"></div></div><h2>Are you struggling with one of the below?</h2><div class="prodListings"><ul><li><button data-name="acne">Acne</button></li><li><button data-name="acne">Blemishes and Cysts</button></li><li><button data-name="rosacea">Rosacea</button></li><li><button data-name="arthritis">Fibromyalgia</button></li><li><button data-name="arthritis">Arthritis</button></li><li><button data-name="arthritis">Joint / Muscle / Neck / Back aches and pains</button></li><li><button class="custNextCTA" data-id="step-3">Other</button></li></ul></div></div><div id="weSuggest" class="prodSuggest smallPopup"><h2>We suggest <span class="custProdName">EMUAIDMAX</span>.</h2><p>Enter your email to receive a discount code for your first purchase!</p><div class="imageContainer"><img class="custProdImage" src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg"></div><div class="custQuizForm"><div class="formField"><input type="email" required placeholder="Your email address..." id="custKlEmail"><span class="customError">Please enter a valid email address</span></div><div class="formField"><button class="custRevealDiscountCTA">Reveal discount code</button><a href="javascript:void(0)" class="custClosePopup">I don’t want a discount</a></div><div class="klaviyo-form-WaHwn2"></div></div></div><div id="quizeDiscount" class="prodDiscount smallPopup"><h2>10% Discount Code</h2><p>Copy the discount code below to use on your purchase.</p><div class="copyCode">B3PW59DPRR3E</div><div class="custQuizForm"><div class="formField"><button class="copyBtn">Copy code</button></div></div></div><div id="checkProduct" class="prodView smallPopup"><h2>Check out <span class="custProdName">EMUAIDMAX</span></h2><div class="imageContainer"><img class="custProdImage" src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg"></div><p>And start your successful healing journey!</p><div class="custQuizForm"><div class="formField"><a class="button" href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">View product</a></div></div></div><div id="chatSpecialist" class="prodChatSpecialist smallPopup"><h2><span class="chatIcon icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/chat-icon.svg"></span>Chat with a specialist!</h2><p>Chat with a condition specialist right now to figure out the best product for you and your condition.</p><div class="custQuizForm"><div class="formField"><a class="button custChatCTA" href="https://www.emuaid.com/pages/contact-us">Chat with a specialist</a><a><span class="clockIcon icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/clock-icon.svg"></span>Available 24/7</a></div></div></div></div><div class="overlay"></div></div>').prependTo('body');
                }
            }

            setTimeout(function(){
                if(jQuery('.custTopQuizBanner').length > 0){
                    var intHeight = jQuery('.custTopQuizBanner').height();
                    if(jQuery(window).width() > 1024){
                        jQuery('.custTopQuizBanner + #header + .jsc-main-nav-menu.search-enabled--true').css('padding-top' , intHeight +'px');
                    }else{
                        jQuery('.custTopQuizBanner + #header.mobile_nav-fixed--true').css('top', intHeight + 'px');
                        var intHeaderHeight = jQuery('header#header').height();
                        jQuery('#shopify-section-header').css('padding-top', intHeaderHeight + 'px');
                    }
                }
            }, 500);
        }

        addStickyBannerAndPopup();

        // Scroll functionality for the sticky header 
        jQuery(window).scroll(function(){
            if(jQuery('.custTopQuizBanner').length > 0){
                var intHeight = jQuery('.custTopQuizBanner').height();
                jQuery('.custTopQuizBanner + #header.mobile_nav-fixed--true').css('top', intHeight + 'px');
                jQuery('.main-nav__wrapper.sticky_nav.sticky_nav--stick').css('top', intHeight + 'px');
            }
        });

        // Close functionality for Sticky Header Banner
        jQuery(document).on('click', '.custTopQuizBanner .btn-close', function(){
            jQuery('.custTopQuizBanner').remove();
            sessionStorage.setItem('custTopQuizBannerClosed', 'yes');
            if(jQuery(window).width() > 1024){
                jQuery('#header + .jsc-main-nav-menu.search-enabled--true').css('padding-top' , '0px');
            }else{
                jQuery('#header.mobile_nav-fixed--true').css('top', '0px');
            }
            jQuery('.main-nav__wrapper.sticky_nav').css('top', '0px');
            jQuery('#shopify-section-header').css('padding-top', '0px');
        });

        // Close Functionality for the pop-up
        jQuery(document).on('click', '.custMainQuizPopup .btn-close, .custMainQuizPopup .popupContainer .custQuizForm .formField a.custClosePopup, .custMainQuizPopup .overlay', function(){
            jQuery('.custMainQuizPopup').remove();
        });

        // Show Popup Functionality
        jQuery(document).on('click', '.custTopQuizBanner .custOfferDealBtn .custTakeQuiz', function(){
            if(jQuery('.custMainQuizPopup').length == 0){
                addStickyBannerAndPopup();
            }
            jQuery('.custMainQuizPopup').css('display', 'flex');
        });

        // Click functionality for Other CTA
        jQuery(document).on('click', '.custMainQuizPopup .custNextCTA', function(){
            if(jQuery(this).attr('data-id') == 'step-1'){
                jQuery('.custMainQuizPopup .prodSelection:eq(0)').hide();
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '50%');
            }else if(jQuery(this).attr('data-id') == 'step-2'){
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').hide();
                jQuery('.custMainQuizPopup .prodSelection.nextStepTwoGuide').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '75%');
            }else if(jQuery(this).attr('data-id') == 'step-3'){
                jQuery('.custMainQuizPopup .prodSelection.nextStepTwoGuide').hide();
                jQuery('.custMainQuizPopup #chatSpecialist').show();
            }
        });

        // Back functionality for Step-2 and Step-3
        jQuery(document).on('click', '.custMainQuizPopup #ProductSelectionQuiz .prodSelection button.btn-back', function(){
            if(jQuery(this).attr('data-step') == 'step-2'){
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').hide();
                jQuery('.custMainQuizPopup .prodSelection:eq(0)').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '25%');
            }else if(jQuery(this).attr('data-step') == 'step-3'){
                jQuery('.custMainQuizPopup .prodSelection.nextStepTwoGuide').hide();
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '50%');
            }else{
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').hide();
                jQuery('.custMainQuizPopup .prodSelection:eq(0)').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '25%'); 
            }
        });

        // Click functionality for links
        jQuery(document).on('click', ".custMainQuizPopup .popupContainer .prodListings ul li button:not('.custNextCTA')", function(){
            
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

            jQuery('.custMainQuizPopup .popupContainer #checkProduct.smallPopup .custQuizForm .formField a').attr('href', strProdLink);
            jQuery('.custMainQuizPopup .popupContainer .imageContainer img.custProdImage').attr('src', strProdImage);
            jQuery('.custMainQuizPopup .popupContainer h2 span.custProdName').text(strProdName)

            jQuery('.custMainQuizPopup .prodSelection').hide();
            jQuery('.custMainQuizPopup #weSuggest').show();
        });

        // Click functionality Reveal Doscount CTA 
        jQuery(document).on('click', '.custMainQuizPopup .popupContainer .smallPopup .custQuizForm .formField button.custRevealDiscountCTA', function(){
            var strEmail = jQuery("#custKlEmail").val().trim();
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
            if(strEmail == "" || !regex.test(strEmail)){
                jQuery('.custMainQuizPopup .popupContainer .custQuizForm .formField span.customError').show();
            }else{
                jQuery('.custMainQuizPopup .popupContainer .custQuizForm .formField span.customError').hide();
                if(document.getElementById("email_53614150") !== null){
                    document.getElementById("email_53614150").value = strEmail;
                    document.getElementById("email_53614150").dispatchEvent(new Event("input"));
                }

                // Save data on klavio
                if(jQuery("#weSuggest .custQuizForm .klaviyo-form .go3894874857").length > 0){
                    jQuery("#weSuggest .custQuizForm .klaviyo-form .go3894874857").attr('id', 'custKlaviyoCTA');
                  
                    setTimeout(function(){
                        document.getElementById("custKlaviyoCTA").click();
                    }, 350);
                }
          
                jQuery('.custMainQuizPopup #weSuggest').hide();
                jQuery('.custMainQuizPopup #quizeDiscount').show();
            }
        });

        // Click functionality Copy Code CTA 
        /*jQuery(document).on('click', '.custMainQuizPopup .popupContainer .smallPopup .custQuizForm .formField button.copyBtn', function(){
            var customInput = document.createElement("input");
            document.querySelector("body").append(customInput);
            customInput.value = 'B3PW59DPRR3E ';
            customInput.select();
            document.execCommand("copy");
            customInput.remove();

            jQuery('.custMainQuizPopup #quizeDiscount').hide(); 
            jQuery('.custMainQuizPopup #checkProduct').show();
        });*/

        // Click functionality View Product CTA 
        jQuery(document).on('click', '.custMainQuizPopup .popupContainer #checkProduct.smallPopup .custQuizForm .formField a', function(){
            sessionStorage.setItem('custTopQuizBannerClosed', 'yes');
        });

        clearInterval(waitForJquery);  
    }
}, 50);