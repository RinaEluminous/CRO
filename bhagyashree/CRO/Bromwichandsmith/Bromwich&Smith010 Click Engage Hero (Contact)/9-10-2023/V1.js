var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {
    var strParentEle  = '';
    var yearFlag = 0, clientFlag = 0, debtFlag = 0, flag = 0;  
  
    reDesignContactForm();
    addCustomHtmlToContactPage();
  
    if(jQuery(".custHelpInformation .infoBox").length  > 0 ){
       if (elementInView(jQuery(".custHelpInformation .infoBox:eq(1)"))) {
        if(flag == 0){
          flag = 1;
          startCounters();
        }
      }
    }
   
  
    var oldXHR = window.XMLHttpRequest;
    function newXHR() {
  
    var realXHR = new oldXHR();
    realXHR.addEventListener("readystatechange", function() {
      if(realXHR.readyState == 4 && realXHR.status == 200){
      setTimeout(function () {           
         var strAjaxResponseURL  = realXHR.responseURL;
        
        if(jQuery('.webform-submission-form .js-form-submit.form-submit').length > 0){
        //checking for function here
        if(strAjaxResponseURL.indexOf('contact-us?ajax_form=') > -1){
          reDesignContactForm();
          addCustomHtmlToContactPage();
          } 
        }
  
      }, 20); 
      }
    }, false);
    return realXHR;
    }
    window.XMLHttpRequest = newXHR;
  
    //on browser back
    if (performance.navigation.type == 2) {
    var intCounter = 0;
    var intChkHtmlInterval = setInterval(function (){
      intCounter += 1;
      
      if(jQuery('.custLeftColumnSection').length == 0 && jQuery('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content').length > 0){
      reDesignContactForm();
      addCustomHtmlToContactPage();
      clearInterval(intChkHtmlInterval);
      }
  
      if(intCounter === 100){
      clearInterval(intChkHtmlInterval);
      }
    },50);
    }
    
    //add custom HTML
    function addCustomHtmlToContactPage(){
    if(jQuery('.custLeftColumnSection').length == 0){
      jQuery('<div class="custLeftColumnSection"> <div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/contact-img.png"></div><div class="custHelpInformation desk"> <h4>We have helped Canadians reduce their debt by up to 85%. Find out how we can help you.</h4> <div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/champion_icon.svg"> </div><div class="content"> <h5><span class="custCount custYearCounter">0</span> years</h5> <p>For 20 years we have been helping people just like you get out of debt</p></div></div><div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/client_icon.svg"> </div><div class="content"> <h5><span class="custCount custClientCounter">0</span> clients</h5> <p>We have helped 30845 Canadians find debt relief</p></div></div><div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/loan_icon.svg"> </div><div class="content"> <h5>$<span class="custCount custDebtCounter">0</span></h5> <p>We have eliminated $3,340,051,963 in personal Canadian debt</p></div></div></div></div>').prependTo('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .group-left');
    }
  
    //for mobile
    if(jQuery('.custHelpInformation.mobile').length == 0){
      jQuery('<div class="custHelpInformation mobile"> <h4>We have helped Canadians reduce their debt by up to 85%. Find out how we can help you.</h4> <div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/champion_icon.svg"> </div><div class="content"> <h5><span class="custCount custYearCounter">0</span> years</h5> <p>For 20 years we have been helping people just like you get out of debt</p></div></div><div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/client_icon.svg"> </div><div class="content"> <h5><span class="custCount custClientCounter">0</span> clients</h5> <p>We have helped 30845 Canadians find debt relief</p></div></div><div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/loan_icon.svg"> </div><div class="content"> <h5>$<span class="custCount custDebtCounter">0</span></h5> <p>We have eliminated $3,340,051,963 in personal Canadian debt</p></div></div></div>').appendTo('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .group-middle');
    }
  
    if(jQuery('.custFormTexualContent').length == 0){
      jQuery('<div class="custQualifyForm"> <div class="custFormTexualContent"> <h2>Find out if you qualify</h2> <p class="subPara"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/bm-chat-icon.svg"> Free, confidential, no obligation consultation with a Debt Relief Specialist </p></div><div class="custCreditRangeForm"> <h4>What is your total credit card debt amount?</h4> <div class="slidecontainer"> <div class="range-input-tooltip"> <label for="debtamountCCV3c" style="left: 20.2703%;" id="custCreditValue">$20,000</label> </div><input type="range" min="5000" max="100000" value="20000" class="slider" id="custCreditSlider" name="custCredit"> </div><div class="custReviews"> <a href="javascript:void(0);"> <div class="googleIcon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/google-icon.svg"> </div><div class="reviewContent"> <div class="reviewsStarWraper"> <div class="starsWraper"> <div class="starsCount">4.9</div><div class="starsListing"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> </div></div></div><div class="reviewsNumber"> 941 Google Reviews </div></div></a> </div><div class="custBtnWraper"> <input type="button" class="webform-button--submit button button--primary js-form-submit form-submit form-type-submit btn btn-default" value="Get A Free Quote"> </div></div></div><div class="custSpecialistForm"> <div class="custFormTexualContent"> <h2>Speak with a Debt Relief Specialist</h2> <p class="subPara"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/bm-chat-icon.svg"> Free, confidential, no obligation consultation with a Debt Relief Consultant </p></div></div><div class="custQuoteWraper"> <div class="swiper custEngageHeroQuoteSlider"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="quoteBoxContact"> <div class="text"> I was referred by a friend. I was hesitating, because of what they might think of me. From the first time I called to walking in the door, I was treated with respect and dignity the whole way through the process. No one judged, and everyone understood. I would recommend this company to everyone !!!! </div><cite>- Nicole C.</cite> </div></div><div class="swiper-slide"> <div class="quoteBoxContact"> <div class="text">Talked to John about my messy financial situation. John was able to answer my questions and put my mind at ease with multiple scenarios and solutions to my debt. Now I can see light at the end of the tunnel and it feels great. </div><cite>- Mark W.</cite> </div></div><div class="swiper-slide"> <div class="quoteBoxContact"> <div class="text"> My younger brother is considering bankruptcy with another firm, but I wanted to check on some items he was claiming they had told him..... John was very helpful in relieving my concerns by answering my questions (for free). It was nice to get some professional advice with no pressure to utilize their services further. However, I will be recommending them to my brother. </div><cite>- Don R.</cite> </div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>').prependTo('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .group-middle');       
  
    }
  
    if(jQuery('.custAwardWinningSection').length == 0){
  
      if(jQuery("#custSlickJS").length == 0){
      jQuery( "head" ).append( '<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" id="custSlickJS"></script>' );
      }
      
      if(jQuery("#custSlickThemeCSS").length == 0){
        jQuery( "head" ).append( '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" id="custSlickThemeCSS"/>' );
      }
  
      if(jQuery("#custSlickCSS").length == 0){
        jQuery( "head" ).append( '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" id="custSlickCSS"/>' );
      }
  
  
      jQuery('<div class="custAwardWinningSection"><div class="container"><h3>Award Winning Debt Relief</h3><div class="awardsLogoWraper"><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-11/Scarborough%20Mirror%20Reader%27s%20Choice%20Award.jpg" width="305" height="200" alt="Scarborough Mirror Reader\'s Choice Award" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/bbea_0-min.jpeg" width="130" height="130" alt="BBEA" typeof="foaf:Image"></div><div class="logoImg toronto-star20-logo"><img loading="lazy" src="/sites/default/files/2021-10/toronto-star-2020-min.jpeg" width="431" height="130" alt="Toronto Star 2020" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/toronto-star-2019-min.jpeg" width="295" height="130" alt="Toronto Star-2019" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/torch-min.jpeg" width="130" height="130" alt="Torch Awards 2021" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/threebest-min.jpeg" width="146" height="130" alt=" Threebest" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/torch-2020_0-min.jpeg" width="518" height="130" alt="Torch" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/top-choice-min.jpeg" width="130" height="130" alt="Top Choice " typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/alberta-business-min.jpeg" width="130" height="130" alt="Alberta Business" typeof="foaf:Image"></div></div></div></div>').insertAfter('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .row:eq(0)');
  
      var intSliderCnt = 0;
      var intSliderInterval = setInterval(function (){
      intSliderCnt += 1;
      if (jQuery.fn.slick){
        //Slick initialization 
        jQuery('.awardsLogoWraper').slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          variableWidth: true,
        });
      
        clearInterval(intSliderInterval);
      }
  
      if(intSliderCnt === 100){
        clearInterval(intSliderInterval);
      }
      },100);       
    }
    }
  
    //update form structure
    function reDesignContactForm(){
    if(jQuery('.webform-submission-form').length > 0){
  
      jQuery('.webform-submission-form .js-form-item input[name="first_name"]').attr('placeholder','First Name');
  
      jQuery('.webform-submission-form .js-form-item input[name="last_name"]').attr('placeholder','Last Name');
  
      jQuery('.webform-submission-form .js-form-item input[name="email"]').attr('placeholder','Your Email');
  
      jQuery('.webform-submission-form .js-form-item input[name="phone_number"]').attr('placeholder','Your Phone Number');
  
      jQuery('.webform-submission-form .js-form-item input[name="city"]').attr('placeholder','Your City');
  
      jQuery(".webform-submission-form .form-select.custom-select button[data-id*='edit-province'] span.filter-option").text('Your Province');
  
      jQuery('.webform-submission-form .js-form-item input[name="postal_code"]').attr('placeholder','Postal Code');
  
      if(jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation label').length > 0){
      
      jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation label').text('How can we Help?');
      
      if(jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation textarea.form-control').length > 0){
        jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation textarea.form-control').attr('placeholder','');
      }
    }
  
    if(jQuery('.webform-submission-form .js-form-submit.form-submit').length > 0){
      jQuery('.webform-submission-form .js-form-submit.form-submit').val('I Want A Free Quote');
    }
    }
  
    //if in case placeholders not replaced call function again
    var intCnt = 0;
    var intCheckInterval = setInterval(function (){
      intCnt += 1;
      
      if(jQuery('.webform-submission-form .js-form-item input[name="first_name"]').attr('placeholder')!=='First Name') {
      reDesignContactForm();
      addCustomHtmlToContactPage();
      clearInterval(intCheckInterval);
      }
  
      if(intCnt === 50){
      clearInterval(intCheckInterval);
      }
    },100); 
    }
    
  
    //swiper slider
    if(jQuery(".custEngageHeroQuoteSlider").length > 0){
     
    if(jQuery("#custSwiperJS").length == 0){
      jQuery( "head" ).append( '<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" id="custSwiperJS"></script>' );
    }
    
    if(jQuery("#custSwiperCSS").length == 0){
      jQuery( "head" ).append( '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" id="custSwiperCSS"/>' );
    }
    
    var intSwiperCnt = 0;
    var intSwiperInterval = setInterval(function (){
      intSwiperCnt += 1;
      
      if (typeof Swiper !== 'undefined'){
        var swiper = new Swiper(".custEngageHeroQuoteSlider", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        });
        clearInterval(intSwiperInterval);
      }
  
      if(intSwiperCnt === 100){
      clearInterval(intSwiperInterval);
      }
  
    },100);
    }
  
  
    function elementInView(elem){
    var elementTop = jQuery(elem).offset().top;
    var elementBottom = elementTop + jQuery(elem).outerHeight();
    var viewportTop = jQuery(window).scrollTop();          
    var viewportBottom = viewportTop + jQuery(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
    };
  
    jQuery(window).scroll(function() {
      startCounters();
    });
  
  
    function startCounters(){
    if(jQuery(window).width() <= 767){
       strParentEle = '.custHelpInformation.mobile ';
    }
    else{
      strParentEle = '.custLeftColumnSection ';
    }
  
    if(jQuery(strParentEle + '.custYearCounter').length > 0){
  
      if (elementInView(jQuery(strParentEle + '.custYearCounter'))) {
      if(yearFlag == 0) {
        yearFlag = 1;
        
        jQuery(strParentEle + '.custYearCounter').prop('Counter',0).animate({
            Counter: 20
        }, {
          duration: 2000,
          speed : 'slow',
          easing: 'swing',
          step: function (now) {
          jQuery(strParentEle + '.custYearCounter').text(Math.ceil(now));
          }
        });
      }        
      }
    }
  
  
    if(jQuery(strParentEle + '.custClientCounter').length > 0){
      if (elementInView(jQuery(strParentEle + '.custClientCounter'))){
      if(clientFlag == 0) {
        clientFlag = 1;
         
        jQuery(strParentEle + '.custClientCounter').prop('Counter',0).animate({
            Counter: 30845
          }, {
          duration: 7000,
          speed : 'slow',
          easing: 'swing',
          step: function (now) {
            jQuery(strParentEle + '.custClientCounter').text(Math.ceil(now));
          }
        });
      }        
      }
    }
  
    if(jQuery(strParentEle + '.custDebtCounter').length > 0){
      if (elementInView(jQuery(strParentEle + '.custDebtCounter'))){
      if(debtFlag == 0){
        debtFlag = 1;
  
        jQuery(strParentEle + '.custDebtCounter').prop('Counter',0).animate({
          Counter: 3340051963
        }, {
          duration: 9000,
          speed : 'slow',
          easing: 'swing',
          step: function (now) {
  
          jQuery(strParentEle + '.custDebtCounter').text(now.toLocaleString('en-US'));
          }
        });
      }        
      }
    }
    }
  
    jQuery(document).on("click",".custQualifyForm .custCreditRangeForm .custBtnWraper" , function (){
      jQuery(".custQualifyForm").hide();
      jQuery('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .group-middle [id*="webform-submission-main-inquiry-form-"].webform-ajax-form-wrapper').show();
      jQuery(".custSpecialistForm").show();
    });
  
    const range = document.querySelector(".slidecontainer .slider#custCreditSlider");
  
    setBubble(range);
    range.addEventListener("input", () => {
      setBubble(range);
    });
  
    function setBubble(range) {
    const bubble = document.querySelector(".slidecontainer #custCreditValue");
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal      = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML  = '$'+val;
    var strCssValue   = val/max*100;
    strCssValue       = Math.ceil(strCssValue);
  
    range.style.background = 'linear-gradient(to right, #26D07C 0%, #26D07C ' + strCssValue + '%, #CCC ' + strCssValue + '%, #CCC 100%)';
  
    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
  
    clearInterval(waitForjQuery);
  }
  }, 50);