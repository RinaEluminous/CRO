var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        console.log("%c ARW Home049: MicroCommitments Free Quote", "background:red;color : white;padding:10px");
        addCustomQuoteSteps();

        function addCustomQuoteSteps(){

            if(jQuery('.custQuoteTopHeader').length == 0 ){
                var strElement  = '';
                if( jQuery('.custQuteMainSection').length > 0 ){
                    strElement  = jQuery('.quote-banner .custQuteMainSection');
                }
                else{
                    jQuery('.quote-banner .hs-form-iframe').parents('.row').last().addClass('custFormParent custHideStep');
                    strElement  =  jQuery('.page-quote .row.custFormParent');
                }

                jQuery('<section class="container custQuteMainSection"><div class="custQuoteTopHeader"> <a href="https://arwhome.com/reviews" target="_blank" class="custReviews btn"><div class="googleIcon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/google-icon.svg"> </div><div class="reviewContent"> <div class="reviewsNumber">Google Ratings</div><div class="reviewsStarWraper"> <div class="starsWraper"> <div class="starsCount">4.8</div><div class="starsListing"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> </div></div></div></div></a><div class="liveChatBtn btn"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/chat_icon.svg" alt="Start live chat"> </div><div class="txt">Start live chat</div></div><div class="callNumer btn"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/call_icon.svg" alt="(888) 524-1145"> </div><div class="txt"><a href="tel:(888) 524-1145">(888) 524-1145</a></div></div></div><div class="custQuteStepsMain"> <div class="custBackArrow custHideStep"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/back_arrow_icon.svg" alt="back arrow"/> </div><div class="progressbar-wrapper"> <ul class="progressbar"> <li class="active">Start</li><li>Application</li><li>Quote</li></ul> </div></div><div class="custQuoteStartSection" id="start"> <h2>Just 1 minute to Find the best warranty deal for you</h2> <h3>What type of Home do you have?</h3> <ul> <li> <div class="custIconBox" id="custHouse"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/house_icon.svg" alt="House" width="95px" height="80px"> <div class="title">HOUSE</div></div></li><li> <div class="custIconBox" id="custTownHouse"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/townhouse_icon.svg" alt="TOWNHOUSE" width="94px" height="94px"> <div class="title">TOWNHOUSE</div></div></li><li> <div class="custIconBox" id="custApartmentBuilding"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/apartment_icon.svg" alt="APARTMENT BUILDING" width="92px" height="92px"> <div class="title">APARTMENT BUILDING</div></div></li></ul> <button class="btn custQuoteBtn" disabled>Continue</button></div><div class="custQuoteStartSection custHideStep" id="application"> <h3>What systems and appliances are you wanting to protect, select all that apply below</h3> <ul> <li> <div class="custIconBox" id="custHeatingAndCooling"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/heating_icon.svg" alt="Heating & Cooling" width="74px" height="74px"> <div class="title">Heating & Cooling</div></div></li><li> <div class="custIconBox" id="custPlumbingSystems"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/plumbing_icon.svg" alt="Plumbing Systems" width="58px" height="72px"> <div class="title">Plumbing Systems</div></div></li><li> <div class="custIconBox" id="custElectricalSystems"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/electrical_icon.svg" alt="Electrical Systems" width="38px" height="70px"> <div class="title">Electrical Systems</div></div></li><li> <div class="custIconBox" id="custKitchenAppliances"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/applience_icon.svg" alt="Kitchen Appliances" width="60px" height="75px"> <div class="title">Kitchen Appliances</div></div></li><li> <div class="custIconBox" id="custLaundryAppliances"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/laundry_icon.svg" alt="Laundry Appliances" width="58px" height="75px"> <div class="title">Laundry Appliances</div></div></li><li> <div class="custIconBox" id="custElectronics"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/electronic_icon.svg" alt="Electronics" width="76px" height="58px"> <div class="title">Electronics</div></div></li><li> <div class="custIconBox" id="custPoolAndHotTub"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/pool_icon.svg" alt="Pool and Hot Tub" width="80px" height="75px"> <div class="title">Pool and Hot Tub</div></div></li></ul> <button class="btn custQuoteBtn" disabled>Start Saving Now</button></div></div>').insertBefore(strElement);

                if( jQuery('.custQuoteFormHeading').length == 0 ){
                    jQuery('<h2 class="custQuoteFormHeading"><span>Don’t Let Unexpected Breakdowns Get You Down</span>Let’s Start Protecting Your Home</h2>').insertBefore('.page-quote .container.custQuteMainSection + .row .hbspt-form');
                }

                if( jQuery('.custLighteningBox').length == 0 ) {
                    jQuery('<div class="custLighteningBox"><div class="icon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/lightning_icon.svg"></div><div class="txt"><strong>374</strong> people have checked their coverage today</div></div>').insertAfter('.page-quote .container.custQuteMainSection + .row .hbspt-form');
                }


                if (jQuery('.hbspt-form').find('.custFormBtnContainer').length == 0) {   // jQuery('.hbspt-form').prepend('<div class="custFormBtnContainer"><button type="button" id="custQuoteSubmitCta" >Submit to Get Quote</button></div>');  

                 jQuery('<div class="custFormBtnContainer"><button type="button" id="custQuoteSubmitCta" >Submit to Get Quote</button></div>').appendTo('.hbspt-form'); 

                  jQuery('#' + jQuery("iframe").attr("id")).contents().find('h1').css('text-align', 'left');
                 }
            }
        }

        jQuery('#custQuoteSubmitCta').on('click', function() {  
            jQuery('#' + jQuery("iframe").attr("id")).contents().find('.hs-button').trigger("click");
        });


        //On step 1 click
        jQuery(document).on('click','.container.custQuteMainSection .custQuoteStartSection#start button.btn.custQuoteBtn', function(){
            var strSelectedHomeType = jQuery('.container.custQuteMainSection .custQuoteStartSection#start ul li .custIconBox.active')[0].id;

            jQuery('.container.custQuteMainSection .custQuoteStartSection#start').addClass('custHideStep');

            jQuery('.container.custQuteMainSection .custQuoteStartSection#application').removeClass('custHideStep');

            jQuery('.page-quote .custQuteStepsMain .progressbar li:eq(1)').addClass('active');
            
            jQuery('.page-quote .container.custQuteMainSection .custQuteStepsMain .custBackArrow').removeClass('custHideStep');

            jQuery('.page-quote .container.custQuteMainSection .custQuteStepsMain').removeClass('custQuoteStepsWrapper');
        });


        //On step 2 click
        jQuery(document).on('click','.container.custQuteMainSection .custQuoteStartSection#application button.btn.custQuoteBtn', function(){
            
            
            jQuery('.container.custQuteMainSection .custQuoteStartSection#application').addClass('custHideStep');

            jQuery('.page-quote .custFormParent').removeClass('custHideStep');
            jQuery('.page-quote .container.custQuteMainSection + .row.custFormParent .hbspt-form').show();
            
            jQuery('.page-quote .custFormBtnContainer').show();

            jQuery('.page-quote .custQuteStepsMain .progressbar li:eq(2)').addClass('active');
        });

        //STEP 1 - home type options click
        jQuery(document).on('click','.container.custQuteMainSection .custQuoteStartSection#start ul li .custIconBox', function (){
            jQuery('.container.custQuteMainSection .custQuoteStartSection#start ul li .custIconBox').not(this).removeClass('active');
            jQuery(this).addClass('active');
            jQuery('.container.custQuteMainSection .custQuoteStartSection#start button.btn.custQuoteBtn').removeAttr("disabled");
        });

        //STEP 2 - systems/appliances options click
        jQuery(document).on('click','.container.custQuteMainSection .custQuoteStartSection#application ul li .custIconBox', function () {
            
            if(jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active');
            }
            else{
                jQuery(this).addClass('active');
            }

            if(jQuery('.container.custQuteMainSection .custQuoteStartSection#application ul li .custIconBox.active').length > 0){
                jQuery('.container.custQuteMainSection .custQuoteStartSection#application button.btn.custQuoteBtn').removeAttr("disabled");
            }
            else{
                jQuery('.container.custQuteMainSection .custQuoteStartSection#application button.btn.custQuoteBtn').attr("disabled","disabled");    
            }
        });

        jQuery(document).on('click', '.page-quote .container.custQuteMainSection .custQuteStepsMain .custBackArrow', function () {
            var strStep = jQuery('.custQuteStepsMain .progressbar li.active:last').text().trim();

            if(strStep == 'Quote'){
                jQuery('.custFormParent').addClass('custHideStep');
                 jQuery('.page-quote .container.custQuteMainSection + .row.custFormParent .hbspt-form').hide();
                jQuery('.container.custQuteMainSection .custQuoteStartSection#application').removeClass('custHideStep');

                jQuery('.page-quote .container.custQuteMainSection .custQuteStepsMain .custBackArrow').removeClass('custHideStep');

                jQuery('.page-quote .container.custQuteMainSection .custQuteStepsMain').removeClass('custQuoteStepsWrapper');
            }
            if(strStep == 'Application'){
                jQuery('.container.custQuteMainSection .custQuoteStartSection#application').addClass('custHideStep');
                jQuery('.container.custQuteMainSection .custQuoteStartSection#start').removeClass('custHideStep');

                jQuery('.page-quote .container.custQuteMainSection .custQuteStepsMain .custBackArrow').addClass('custHideStep');

                jQuery('.page-quote .container.custQuteMainSection .custQuteStepsMain').addClass('custQuoteStepsWrapper');
            }

            jQuery('.custQuteStepsMain .progressbar li.active:last').removeClass('active');
        });
        clearInterval(waitForJquery);
    }
}, 50);  