        //remove existing quiz elements
        if(jQuery('.custQuizeBanner').length > 0 && sessionStorage.getItem('custTopQuizBannerClosed') === null){
            jQuery('.custQuizeBanner').remove();
            jQuery('.custQuizePopup').remove();
        }

        var strCouponCode = 'B3PW59DPRR3E';

        //call apply function only for cart page and when session is set
        if(jQuery('.cart').length > 0 && sessionStorage.getItem('custApplyCoupon') !== null ){
           applyAutoCouponCode(); 
        }

        function applyAutoCouponCode() {
            var intCount    = 0;
            var intInterval = setInterval(function (){
                intCount   += 1;
                if( jQuery('.cart #cart_form input.limoniapps-discountninja-cartdiscountfield-input').length > 0 && !jQuery('.cart #cart_form button.limoniapps-discountninja-cartdiscountfield-apply').hasClass('disabled')){
                     jQuery('.cart #cart_form input.limoniapps-discountninja-cartdiscountfield-input').val(sessionStorage.getItem('custApplyCoupon'));
                    jQuery('.cart #cart_form button.limoniapps-discountninja-cartdiscountfield-apply')[0].click();
                    clearInterval(intInterval);
                }

                if(intCount === 60){
                    clearInterval(intInterval);
                }
            },50);
        }

        //add new quiz changes
        function addStickyBannerAndPopup(){
            if(sessionStorage.getItem('custTopQuizBannerClosed') === null ){
                if(jQuery('.custTopQuizBanner').length == 0 && jQuery('#shopify-section-header header#header').length > 0){
                    jQuery('<div class="custTopQuizBanner"> <div class="bm-container"> <div class="custGetOfferBannerMain"> <div class="custGetOfferDiv"> <p>Need help choosing the right product?</p></div><div class="productBannerImg"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/desk_banner_img.png" class="desk_img"> </div><div class="custOfferDealBtn"> <button class="custTakeQuiz" class="btn btn btn-secondary">Take the quiz</button> </div></div><button type="button" class="btn-close"></button> </div></div>').insertBefore('#shopify-section-header header#header');
                }

                if(jQuery('.custMainQuizPopup').length == 0){
                    jQuery('<div class="custMainQuizPopup"> <div id="ProductSelectionQuiz" class="popupContainer"> <button type="button" class="btn-close"></button> <div class="prodSelection InitialStep"> <h3>Product Selection Quiz</h3> <div class="progressBar"> <div class="progressSteps"></div></div><h2>Which condition are you struggling with below?</h2> <div class="prodListings"> <ul> <li><button data-name="max">Nail Fungus</button></li><li><button data-name="max">Psoriasis</button></li><li><button data-name="max">Shingles</button></li><li><button data-name="max">Scabies</button></li><li><button data-name="max">Genital warts</button></li><li><button data-name="max">Skin tags</button></li><li><button data-name="max">HS / Severe boils</button></li><li><button data-name="max">Athlete\'s foot</button></li><li><button data-name="max">Resistant/persistent infections</button></li><li><button class="custNextCTA" data-id="step-1">Other</button></li></ul> </div></div><div class="prodSelection nextStepOneGuide"> <h3>Product Selection Quiz</h3> <div class="progressBar"> <div class="progressSteps"></div></div><h2>Are you struggling with one of the below?</h2> <div class="prodListings"> <ul> <li><button data-name="regular">Hemorrhoids</button></li><li><button data-name="regular">Eczema</button></li><li><button data-name="regular">Lichen sclerosus</button></li><li><button data-name="regular">Dermatitis</button></li><li><button data-name="regular">Neuropathy</button></li><li><button data-name="regular">Itching</button></li><li><button data-name="regular">Folliculitis</button></li><li><button data-name="regular">Vulvar Vestibulitis</button></li><li><button data-name="regular">Burns / Wounds / Rashes</button></li><li><button class="custNextCTA" data-id="step-2">Other</button></li></ul> </div><div class="custBottomNavigation"> <button type="button" class="btn-back" data-step="step-2"></button> </div></div><div class="prodSelection nextStepTwoGuide"> <h3>Product Selection Quiz</h3> <div class="progressBar"> <div class="progressSteps"></div></div><h2>Are you struggling with one of the below?</h2> <div class="prodListings"> <ul> <li><button data-name="acne">Acne</button></li><li><button data-name="acne">Blemishes and Cysts</button></li><li><button data-name="rosacea">Rosacea</button></li><li><button data-name="arthritis">Fibromyalgia</button></li><li><button data-name="arthritis">Arthritis</button></li><li><button data-name="arthritis">Joint / Muscle / Neck / Back aches and pains</button></li><li><button class="custNextCTA" data-id="step-3">Other</button></li></ul> </div><div class="custBottomNavigation"> <button type="button" class="btn-back" data-step="step-3"></button> </div></div><div id="weSuggest" class="prodSuggest smallPopup"> <h3>Product Selection Quiz</h3> <div class="progressBar"> <div class="progressSteps"></div></div><div class="custOintmentRow"> <div class="imageContainer"> <h2>We suggest <span class="custProdName">EMUAIDMAX</span>.</h2> <img class="custProdImage" src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaidmax.jpg"> </div><div class="custProductsBloks"> <h2>We suggest <span class="custProdName">EMUAIDMAX</span>.</h2> <h5>Why It\'s Special:</h5> <ul> <li>EmuaidMAX is the last ointment your skin will ever need.</li><li>EProven to penetrate through the skin\'s outermost layer and deliver powerful healing benefits to your skin (unlike most ointments on the market).</li><li>EMaximum Strength Formula delivers powerful anti-bacterial and anti-fungal properties help eliminate the symptoms of harmful infections like nail fungus, balanitis, vaginitis and more.</li></ul> <div class="custQuizForm"> <div class="custStepNumber"><b>Step 1:</b> Enter your email for discount code </div><div class="formField"><input type="email" required="" placeholder="Your email address..." id="custKlEmail"><span class="customError">Please enter a valid email address</span></div><div class="formField"><button class="custRevealDiscountCTA">Get discount</button></div><div class="klaviyo-form-WaHwn2"></div></div></div></div><div class="custBottomNavigation"> <button type="button" class="btn-back" data-step="step-4"></button> <button type="button" class="btn-skip" data-step="step-4"></button> </div></div><div id="quizeDiscount" class="prodDiscount smallPopup"> <h3>Product Selection Quiz</h3> <div class="progressBar"> <div class="progressSteps"></div></div><h2>Choose your Size</h2> <p class="custBlueTag">Your discount code is automatically applied to your cart</p><div class="custStepNumber"><b>Step 2:</b> Select your Optimal Size </div><div class="custAutomaticallyApplied"> <ul> <li> <a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/product-selection-14ml.jpg"> <h4>0.5oz (14ml)</h4> <span>$1.99/ml</span> </a> </li><li> <a href="https://www.emuaid.com/products/emuaidmax-3"> <div class="custDiscountTag">Save 25%</div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/product-selection-59ml.jpg"> <h4>2oz (59ml)</h4> <span>$1.08/ml</span> </a> </li><li> <a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-16oz"> <div class="custDiscountTag">Save 25%</div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/product-selection-14ml.jpg"> <h4>16oz (480ml)</h4> <span>$0.80/ml</span> </a> </li></ul> </div><div class="custBottomNavigation"> <button type="button" class="btn-back" data-step="step-5"></button> </div></div><div id="chatSpecialist" class="prodChatSpecialist smallPopup"> <h2><span class="chatIcon icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/chat-icon.svg"></span>Chat with a specialist!</h2> <p>Chat with a condition specialist right now to figure out the best product for you and your condition.</p><div class="custQuizForm"> <div class="formField"><a class="button custChatCTA" href="https://www.emuaid.com/pages/contact-us">Chat with a specialist</a><a><span class="clockIcon icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/clock-icon.svg"></span>Available 24/7</a></div></div></div></div><div class="overlay"></div></div>').prependTo('body');
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

        //call function only for home page
        if(jQuery('.index').length >  0){
            addStickyBannerAndPopup();
        }
        

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
                jQuery('.custMainQuizPopup .prodSelection.InitialStep').hide();
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '45%');
            }else if(jQuery(this).attr('data-id') == 'step-2'){
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').hide();
                jQuery('.custMainQuizPopup .prodSelection.nextStepTwoGuide').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '65%');
            }else if(jQuery(this).attr('data-id') == 'step-3'){
                jQuery('.custMainQuizPopup .prodSelection.nextStepTwoGuide').hide();
                jQuery('.custMainQuizPopup #chatSpecialist').show();
            }
        });

        // Skip functionality to skip the steps
        jQuery(document).on('click', '.custMainQuizPopup #ProductSelectionQuiz .custBottomNavigation button.btn-skip', function(){
            jQuery('.custMainQuizPopup').remove();
        });

        // Back functionality for Step-2 and Step-3
        jQuery(document).on('click', '.custMainQuizPopup #ProductSelectionQuiz .custBottomNavigation button.btn-back', function(){
            if(jQuery(this).attr('data-step') == 'step-2'){
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').hide();
                jQuery('.custMainQuizPopup .prodSelection.InitialStep').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '25%');
            }else if(jQuery(this).attr('data-step') == 'step-3'){
                jQuery('.custMainQuizPopup .prodSelection.nextStepTwoGuide').hide();
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '45%');
            }else if(jQuery(this).attr('data-step') == 'step-4'){
                var strStepAttr = jQuery('.custMainQuizPopup .popupContainer .smallPopup .custQuizForm .formField button').attr('cust-data-type');
                if(strStepAttr == 'max') {
                    jQuery('.custMainQuizPopup .InitialStep').show();
                }
                
                if(strStepAttr == 'regular') {
                    jQuery('.custMainQuizPopup .nextStepOneGuide').show();
                }

                if(strStepAttr == 'acne' || strStepAttr == 'rosacea' || strStepAttr == 'arthritis'){
                    jQuery('.custMainQuizPopup .nextStepTwoGuide').show();
                }

                jQuery('.custMainQuizPopup .prodSuggest').hide();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '65%');
            }else if(jQuery(this).attr('data-step') == 'step-5'){
                jQuery('.custMainQuizPopup .prodDiscount').hide();
                jQuery('.custMainQuizPopup .prodSuggest').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '85%');
            }else{
                jQuery('.custMainQuizPopup .prodSelection.nextStepOneGuide').hide();
                jQuery('.custMainQuizPopup .InitialStep').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '25%'); 
            }
        });

        // Click functionality for links
        jQuery(document).on('click', ".custMainQuizPopup .popupContainer .prodListings ul li button:not('.custNextCTA')", function(){
            var strProdType = jQuery(this).attr('data-name');
            var strProdLink = strProdImage = '', strProdName = '', strFeatures = '' ;
            if(strProdType == 'regular'){
                strProdImage = 'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid.jpg';
                strProdName  = 'EMUAID';
                strFeatures  = '<li>Emuaid is the last ointment your skin will ever need.</li><li>Proven to penetrate through the skin\'s outermost layer and deliver powerful healing benefits to your skin (unlike most ointments on the market).</li><li>Powerful medical grade natural ingredients eliminate infection, itching, inflammation, pain and irritation for conditions like eczema, hemorrhoids, psoriasis and more.</li>';
            }else if(strProdType == 'max'){
                strProdImage = 'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaidmax.jpg';
                strProdName  = 'EMUAIDMAX';
                strFeatures  = '<li>EmuaidMAX is the last ointment your skin will ever need.</li><li>EProven to penetrate through the skin\'s outermost layer and deliver powerful healing benefits to your skin (unlike most ointments on the market).</li><li>EMaximum Strength Formula delivers powerful anti-bacterial and anti-fungal properties help eliminate the symptoms of harmful infections like nail fungus, balanitis, vaginitis and more.</li>';
            }else if(strProdType == 'acne'){
                strProdImage = 'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/acne-treatment.jpg';
                strProdName  = 'EMUAID Overnight Acne Treatment';
                strFeatures  = '<li>EmuaidMAX is the last ointment your skin will ever need.</li><li>EProven to penetrate through the skin\'s outermost layer and deliver powerful healing benefits to your skin (unlike most ointments on the market).</li><li>EMaximum Strength Formula delivers powerful anti-bacterial and anti-fungal properties help eliminate the symptoms of harmful infections like nail fungus, balanitis, vaginitis and more.</li>';
            }else if(strProdType == 'rosacea'){
                strProdImage = 'https://cdn.shopify.com/s/files/1/0549/3181/6637/products/IMG-EMA-S444-003_5000x-REV_c591ecbf-9d17-42da-9655-804a5bb6d24d_2000x.jpg';
                strProdName  = 'Therapeutic Moisture Bar';
                strFeatures  = '<li>A perfect complement to EMUAID® First Aid Ointment, EMUAID® Therapeutic Moisture Bar deeply cleanses and detoxifies the skin, delivers intense hydration and restores moisture, exfoliates to promote cellular turnover and stimulates natural skin regeneration.</li><li>Use on face and body - excellent for shaving or shampoo.</li><li>No parabens, phthalates, paraffin, gluten, propylene glycol, mineral oil, synthetic fragrance, PABA, synthetic color, DEA or sulfates.</li>';
            }else if(strProdType == 'arthritis'){
                strProdImage = 'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/relieving-cream.jpg';
                strProdName  = 'EMUAID Pain Relieving Cream';
                strFeatures  = '<li>This is the last pain relief cream you will ever need.</li><li>Natural pain relief in minutes!</li><li>Designed to deliver deeper penetrating pain relief for aching muscles, joints, backaches, nerve pain, inflammation, and arthritis.</li>';
            }else{
                strProdImage = 'https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaidmax.jpg';
                strProdName  = 'EMUAIDMAX';
                strFeatures  = '<li>EmuaidMAX is the last ointment your skin will ever need.</li><li>EProven to penetrate through the skin\'s outermost layer and deliver powerful healing benefits to your skin (unlike most ointments on the market).</li><li>EMaximum Strength Formula delivers powerful anti-bacterial and anti-fungal properties help eliminate the symptoms of harmful infections like nail fungus, balanitis, vaginitis and more.</li>';
            }

            jQuery('.custMainQuizPopup .popupContainer #checkProduct.smallPopup .custQuizForm .formField a').attr('href', strProdLink);
            jQuery('.custMainQuizPopup .popupContainer .imageContainer img.custProdImage').attr('src', strProdImage);
            jQuery('.custMainQuizPopup .popupContainer h2 span.custProdName').text(strProdName)
            jQuery('.custMainQuizPopup .popupContainer .custProductsBloks ul').html(strFeatures);
            jQuery('.custMainQuizPopup .popupContainer .smallPopup .custQuizForm .formField button').attr('cust-data-type',strProdType);
            jQuery('.custMainQuizPopup .prodSelection').hide();
            jQuery('.custMainQuizPopup #weSuggest').show();
            jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width', '65%');
        });

        // Click functionality Reveal Doscount CTA 
        jQuery(document).on('click', '.custMainQuizPopup .popupContainer .smallPopup .custQuizForm .formField button.custRevealDiscountCTA', function(){
            var strEmail = jQuery("#custKlEmail").val().trim();
            var regex    = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
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
                
                var strProdTypeAttr = jQuery(this).attr('cust-data-type');

                if(strProdTypeAttr == 'max'){
                    jQuery('#quizeDiscount .custStepNumber').html('<b>Step 2:</b> Select your Optimal Size');
                    jQuery('.custAutomaticallyApplied ul li a:eq(0)').attr('href','https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(0)').html('0.5oz (14ml)');
                    jQuery('.custAutomaticallyApplied ul li span:eq(0)').html('$1.99/ml');
                    jQuery('.custAutomaticallyApplied ul li img:eq(0)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/product-selection-14ml.jpg');
                    
                    jQuery('.custAutomaticallyApplied ul li a:eq(1)').attr('href','https://www.emuaid.com/products/emuaidmax-3');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(1)').html('2oz (59ml)');  
                    jQuery('.custAutomaticallyApplied ul li span:eq(1)').html('$1.08/ml');
                    jQuery('.custAutomaticallyApplied ul li img:eq(1)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/product-selection-59ml.jpg');

                    jQuery('.custAutomaticallyApplied ul li a:eq(2)').attr('href','https://www.emuaid.com/products/emuaidmax-first-aid-ointment-16oz');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(2)').html('16oz (480ml)'); 
                    jQuery('.custAutomaticallyApplied ul li span:eq(2)').html('$0.80/ml'); 
                    jQuery('.custAutomaticallyApplied ul li img:eq(2)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/product-selection-475ml.jpg');
                     jQuery('.custAutomaticallyApplied ul li:eq(1),.custAutomaticallyApplied ul li:eq(2)').show();
                }
                else if(strProdTypeAttr == 'regular'){
                    jQuery('#quizeDiscount .custStepNumber').html('<b>Step 2:</b> Select your Optimal Size');
                    jQuery('.custAutomaticallyApplied ul li a:eq(0)').attr('href','https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(0)').html('0.5oz (14ml)');
                    jQuery('.custAutomaticallyApplied ul li span:eq(0)').html('$1.57/ml');
                    jQuery('.custAutomaticallyApplied ul li img:eq(0)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid14ml.jpg');
                    
                    jQuery('.custAutomaticallyApplied ul li a:eq(1)').attr('href','https://www.emuaid.com/products/emuaid-2');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(1)').html('2oz (59ml)');  
                    jQuery('.custAutomaticallyApplied ul li span:eq(1)').html('$0.90/ml');
                    jQuery('.custAutomaticallyApplied ul li img:eq(1)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid59ml.jpg');

                    jQuery('.custAutomaticallyApplied ul li a:eq(2)').attr('href','https://www.emuaid.com/products/emuaid-first-aid-ointment-16oz');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(2)').html('16oz (475ml)'); 
                    jQuery('.custAutomaticallyApplied ul li span:eq(2)').html('$0.67/ml');
                    jQuery('.custAutomaticallyApplied ul li img:eq(2)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid475ml.jpg'); 
                    jQuery('.custAutomaticallyApplied ul li:eq(1),.custAutomaticallyApplied ul li:eq(2)').show();
                }
                else if(strProdTypeAttr == 'acne'){
                    jQuery('#quizeDiscount .custStepNumber').html('<b>Step 2:</b> Select your Personalized Product');
                    jQuery('.custAutomaticallyApplied ul li a:eq(0)').attr('href','https://www.emuaid.com/products/overnight-acne-treatment');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(0)').html('Overnight Acne Treatment');
                    jQuery('.custAutomaticallyApplied ul li span:eq(0)').html(''); 

                    jQuery('.custAutomaticallyApplied ul li img:eq(0)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/acne-treatment-small.jpg'); 

                    jQuery('.custAutomaticallyApplied ul li:eq(1),.custAutomaticallyApplied ul li:eq(2)').hide();
                }
                else if(strProdTypeAttr == 'arthritis'){
                    jQuery('#quizeDiscount .custStepNumber').html('<b>Step 2:</b> Select your Personalized Product');
                    jQuery('.custAutomaticallyApplied ul li a:eq(0)').attr('href','https://www.emuaid.com/products/emuaid-pain-relieving-cream');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(0)').html('Pain Relieving Cream');
                    jQuery('.custAutomaticallyApplied ul li span:eq(0)').html(''); 
                    jQuery('.custAutomaticallyApplied ul li:eq(1),.custAutomaticallyApplied ul li:eq(2)').hide();

                    jQuery('.custAutomaticallyApplied ul li img:eq(0)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/relieving-cream-small.jpg');
                }
                else if(strProdTypeAttr == 'rosacea'){
                    jQuery('#quizeDiscount .custStepNumber').html('<b>Step 2:</b> Select your Personalized Product');
                    jQuery('.custAutomaticallyApplied ul li a:eq(0)').attr('href','https://www.emuaid.com/products/therapeutic-moisture-bar');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(0)').html('Therapeutic Moisture Bar');
                    jQuery('.custAutomaticallyApplied ul li span:eq(0)').html(''); 
                    jQuery('.custAutomaticallyApplied ul li:eq(1),.custAutomaticallyApplied ul li:eq(2)').hide();

                    jQuery('.custAutomaticallyApplied ul li img:eq(0)').attr('src','https://cdn.shopify.com/s/files/1/0549/3181/6637/products/IMG-EMA-S444-003_5000x-REV_c591ecbf-9d17-42da-9655-804a5bb6d24d_2000x.jpg');
                }
                else{
                    jQuery('#quizeDiscount .custStepNumber').html('<b>Step 2:</b> Select your Optimal Size');
                    jQuery('.custAutomaticallyApplied ul li a:eq(0)').attr('href','https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(0)').html('0.5oz (14ml)');
                    jQuery('.custAutomaticallyApplied ul li span:eq(0)').html('$1.99/ml');
                    jQuery('.custAutomaticallyApplied ul li img:eq(0)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/product-selection-14ml.jpg');
                    
                    jQuery('.custAutomaticallyApplied ul li a:eq(1)').attr('href','https://www.emuaid.com/products/emuaidmax-3');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(1)').html('2oz (59ml)');  
                    jQuery('.custAutomaticallyApplied ul li span:eq(1)').html('$1.08/ml');
                    jQuery('.custAutomaticallyApplied ul li img:eq(1)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/product-selection-59ml.jpg');

                    jQuery('.custAutomaticallyApplied ul li a:eq(2)').attr('href','https://www.emuaid.com/products/emuaidmax-first-aid-ointment-16oz');
                    jQuery('.custAutomaticallyApplied ul li h4:eq(2)').html('16oz (480ml)'); 
                    jQuery('.custAutomaticallyApplied ul li span:eq(2)').html('$0.80/ml'); 
                    jQuery('.custAutomaticallyApplied ul li img:eq(2)').attr('src','https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/product-selection-475ml.jpg');
                    jQuery('.custAutomaticallyApplied ul li:eq(1),.custAutomaticallyApplied ul li:eq(2)').show();
                }
                jQuery('.custMainQuizPopup #weSuggest').hide();
                jQuery('.custMainQuizPopup #quizeDiscount').show();
                jQuery('.custMainQuizPopup .popupContainer .progressBar .progressSteps').css('width','85%');
            }
        });

        // Click functionality View Product CTA 
        jQuery(document).on('click', '.custMainQuizPopup .popupContainer #checkProduct.smallPopup .custQuizForm .formField a', function(){
            sessionStorage.setItem('custTopQuizBannerClosed', 'yes');
        });


        jQuery(document).on('click','.custAutomaticallyApplied ul li a', function () {
           sessionStorage.setItem('custApplyCoupon',strCouponCode) ;
        });      