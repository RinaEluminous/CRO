restructuredHomePageHtml();

if(jQuery('#content-wrapper .webform-submission-form').length > 0) {
  autoFillContactFormFields();
}

function autoFillContactFormFields(){
  if(sessionStorage.getItem('custFormData') !== null){
      var obj = JSON.parse(sessionStorage.getItem('custFormData'));
      if(jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-first-name').length > 0){
        jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-first-name').val(obj.first_name);
      }

      if(jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-last-name').length > 0){
          jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-last-name').val(obj.last_name);
      }

      if( jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-email').length > 0 ){
            jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-email').val(obj.your_email);
      }
  
      if( jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-phone-number').length > 0 ){
            jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-phone-number').val(obj.phone_number);
      }

      if( jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-city').length > 0 ){
            jQuery('#content-wrapper .jumbotron .container .group-middle form input#edit-city').val(obj.your_city);
      }

      if(jQuery(".js-form-item-province span.filter-option.pull-left").length > 0 ){
        jQuery('select[id^=edit-province]').val(obj.province).attr("selected", "selected");
        jQuery(".js-form-item-province span.filter-option.pull-left").text(obj.province);
        jQuery('.js-form-item-province button.btn.dropdown-toggle').removeClass('bs-placeholder');
      }

      if(jQuery('#content-wrapper .jumbotron .container .group-middle form input[id^=edit-postal-code]').length > 0){
        jQuery('#content-wrapper .jumbotron .container .group-middle form input[id^=edit-postal-code]').val(obj.postal_code);
      }
  }
}

function elementInView(elem){
  var elementTop     = jQuery(elem).offset().top;
  var elementBottom  = elementTop + jQuery(elem).outerHeight();
  var viewportTop    = jQuery(window).scrollTop();          
  var viewportBottom = viewportTop + jQuery(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};


function restructuredHomePageHtml(){
    if(jQuery(".custHomePagebodyWrapper").length == 0 ){
      jQuery('<div class="custHomePageWrapper"> <div class="custHeroSectionBd"> <div class="container"> <div class="row"> <div class="col-lg-8 col-md-6"> <h2>Considering Declaring Bankruptcy?</h2> <p>No Matter What The Financial Situation, There Are Always Options.</p><p class="subpara">We\'ll find the right solution for your specific financial situation and get you back on track to rebuilding your worth today, debt free.</p><div class="custHeroButtonSection_sp"> <div class="custBtnWraper"> <a href="tel:1-855-884-9243" class="btn fill">Call: 1-855-884-9243</a> <div class="custReviews"> <a href="#review-widget-slider"> <div class="googleIcon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/google-icon.svg"> </div><div class="reviewContent"> <div class="reviewsStarWraper"> <div class="starsWraper"> <div class="starsCount">4.9</div><div class="starsListing"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"> </span> </div></div></div><div class="reviewsNumber"> 1041 Google Reviews </div></div></a> </div></div></div><div class="custHeroFetureMain"> <div class="featureList"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/satisfaction_icon.svg" alt="satisfaction_icon"> </div>30,000+ Satisfied Canadians </div><div class="featureList"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/experience_icon.svg" alt="experience_icon"> </div>Over 20 Years Experience </div><div class="featureList"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/save_money_icon.svg" alt="save_money_icon"> </div>Over $3 Billion Debt Eliminated </div></div></div><div class="col-lg-4 col-md-6"> <form id="custBookFreeConsultationForm"> <div class="custBookForm"> <h5>Book a Free Consultation</h5> <div class="formFieldRow"> <div class="row"> <div class="col-sm-6"> <input type="text" name="first_name" value="" placeholder="First Name" class="form-control" required> </div><div class="col-sm-6"> <input type="text" name="last_name" value="" placeholder="Last Name" class="form-control" required> </div></div></div><div class="formFieldRow"> <input type="email" name="your_email" value="" placeholder="Your Email" class="form-control" required> </div><div class="formFieldRow"> <input type="text" name="phone_number" value="" placeholder="Your Phone Number" class="form-control" required> </div><div class="formFieldRow"> <input type="text" name="your_city" value="" placeholder="Your City" class="form-control" required> </div><div class="formFieldRow"> <div class="row"> <div class="col-sm-6"> <select class="form-control" name="province" required> <option value="">Your Province</option> <option>Alberta</option> <option>British Columbia</option> <option>Manitoba</option> <option>New Brunswick</option> <option>Newfoundland</option> <option>Nova Scotia</option> <option>Ontario</option> <option>Prince Edward Island</option> <option>Saskatchewan</option> <option>Quebec</option> </select> </div><div class="col-sm-6"> <input type="text" name="postal_code" value="" placeholder="Postal Code" class="form-control" required> </div></div></div><div class="formFieldRow"> <button type="submit" class="custFormSubmitBtn">Book Your Free Consultation </button> </div></form> </div></div></div></div></div><div class="custConsumerProposalWraper"> <div class="container"> <div class="row"> <div class="col-md-6"> <h2>What Happens After You Declare Bankruptcy?</h2> <p>When you declare bankruptcy, Bromwich+Smith immediately stops all creditor actions. <b>Creditors can no longer contact you and collection activities must stop.</b> Gain peace of mind knowing your past is behind you and a blank slate awaits. </p></div><div class="col-md-6"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> </div><div class="quotes">"Dear Bromwich & Smithâ€¦.You deliver what you promise! You provide a valuable service. All of your staff are very professional treating the client with dignity, understanding and respect, and eager to help. You are a good company!"</div><cite>- Allison L.</cite> </div></div></div></div></div><div class="custAdvProposalSection"> <div class="container"> <h3> Advantages Of Declaring Bankruptcy <span>Although it is not to be undertaken lightly, there are advantages to declaring bankruptcy.</span> </h3> <div class="row"> <div class="div col-md-3 col-sm-3"> <div class="advtBox"> <p>Financial review with one of our Licensed Insolvency Trustees.</p></div></div><div class="div col-md-3 col-sm-3"> <div class="advtBox"> <p>Gain money management skills through private counseling meetings.</p></div></div><div class="div col-md-3 col-sm-3"> <div class="advtBox"> <p>Last as little as 9 months from filing.</p></div></div><div class="div col-md-3 col-sm-3"> <div class="advtBox"> <p>Eliminate your debt and gives you a fresh start.</p></div></div></div></div></div><div class="custWorryingDebtSectionBd"> <div class="container"> <div class="row"> <div class="col-6"> <img class="img-fluid" src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/options_img.png"> </div><div class="col-6"> <h2>You have options</h2> <p>Before we recommend that you declare bankruptcy, all other options, such as a Consumer Proposal, are examined in detail. However, in some cases, declaring bankruptcy can be the best option to eliminate debt and allow you to start over with a clean slate.</p><p>If it is determined that bankruptcy is your best option, donâ€™t worryâ€”we\'ll work with you to rebuild your worth, every step of the day.</p></div></div></div></div><div class="ListendHelpSection"> <div class="container"> <div class="ListendHelpMain"> <div class="custContent"> <h3> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/consulting.png" alt="We Are Here To Listen And Help"/> We Are Here To Listen And Help </h3> <p> <strong>Compassionate & Confidential</strong> Wherever you are, whenever you need us. All services available virtually, 7 days a week. </p></div><div class="custBookBtnWrapper"> <a href="https://www.bromwichandsmith.com/contact-us" class="btn fill">Book A Free Consultation</a> <a href="tel:1-855-884-9243" class="btn outline">Call: 1-855-884-9243</a> </div></div></div></div><div class="bankruptcyProcessSection"> <div class="container"> <h3>The Bankruptcy Process <span>Declaring bankruptcy is easier than you think.</span> </h3> <div class="processMain"> <div class="box"> <h4> <div class="num">1</div><span>Speak With A Debt Relief Specialist</span> </h4> <p>First, a Bromwich+Smith Debt Relief Specialist will go over your current financial situation with you. Your free bankruptcy consultation takes place over the phone and from the comfort of your own home. </p><div class="arrowIcon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/large_arrow.svg" alt="large_arrow"> </div></div><div class="box"> <h4> <div class="num">2</div><span>Discover Your Options</span> </h4> <p>We will review your income and any family situation expenses (child/spousal support payable, child care costs, medical expenses, etc.) against a government set standard to determine the amount you will have to pay each month (called surplus income), plus any debt that can be recouped from the sale of any non-exempt assets (see the note below). </p><div class="arrowIcon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/large_arrow.svg" alt="large_arrow"> </div></div><div class="box"> <h4> <div class="num">3</div><span>How Long Can It Take</span> </h4> <p>The length of time you will have to make payments depends upon whether or not you have been bankrupt before. In some cases, you wonâ€™t even have to make any payments at all and you will be finished in as little as 9 months!</p><div class="arrowIcon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/large_arrow.svg" alt="large_arrow"> </div></div><div class="box"> <h4> <div class="num">4</div><span>You Are Free</span> </h4> <p>Next, Bromwich+Smith will formally declare bankruptcy on your behalf. Then, a massive burden will be immediately lifted from your shoulders: no more bothersome phone calls, no more garnished wages, active lawsuits come to an end, and any frozen bank accounts are thawed.</p><div class="arrowIcon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/large_star-arrow.svg" alt="large_star-arrow"> </div></div></div><div class="highlightedBankruptcy"> Under Canadian law, you can only file for bankruptcy through the help of a federally Licensed Insolvency Trustee like Bromwich+Smith. </div></div></div><div class="custHomePageFeedbackSection"> <div class="container"> <h3>Hear How We Have Helped Other Canadians Just Like You <span>Follow these 5 clients on their journey from struggling with overwhelming debt to new hope and optimism on the path to rebuilding their worth</span> </h3> <div class="custSwiperMain"> <div class="swiper custFeedbackSwiper_hp"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="row"> <div class="col-sm-12"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> </div><div class="quotes">Amy, a single mother of 4, struggles to make it through the stress brought on by unmanageable debt while she provides for her family. Amy shares here story of how she found a solution to eliminate her debt and is back on the path to rebuilding her worth.</div><cite>Amy</cite> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-12"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> </div><div class="quotes">I was referred by a friend. I was hesitating, because of what they might think of me. From the first time I called to walking in the door, I was treated with respect and dignity the whole way through the process. No one judged, and everyone understood. I would recommend this company to everyone !!!!</div><cite>- Nicole C.</cite> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-12"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=green_star_icon""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> </div><div class="quotes">Adam takes us through his journey of dealing with stress and unmanageable debt brought on by a separation and a period of under employment. </div><cite>Adam</cite> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-12"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> </div><div class="quotes">George struggles to keep afloat during a very stressful period of financial hardship, while staying at his wife\'s side during critical illness.</div><cite>George</cite> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-12"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> </div><div class="quotes">Struggling with injury and job loss, Linda\'s financial situation deteriorates with unmanageable debt.</div><cite>Linda</cite> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-12"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt="green_star_icon"> </span> </div><div class="quotes">Explore Linda\'s story as she recovers from an injury, family hardship and the resulting devastating debt.</div><cite>Linda P</cite> </div></div></div></div></div><div class="swiper-pagination"></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div></div><div class="custCreditorSection"> <div class="container"> <div class="whiteBox"> <h2>Put a stop to creditor actions &amp; eliminate debt today</h2> <p> <strong>FREE CONSULTATION</strong>. We\'ll find the right solution for your specific financial situation and get you back on track to rebuilding your worth today, debt free. </p><div class="btnWraper"> <a href="https://www.bromwichandsmith.com/contact-us">Book A Free Consultation</a> </div></div></div></div></div>').insertBefore('.path--bankruptcy #content-wrapper main .node .group-footer');

        if(jQuery('#custSwiperSliderJS').length == 0){
          jQuery( "head" ).append( '<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
        }

        if(jQuery('#custSwiperSliderCSS').length == 0){
          jQuery( "head" ).append( '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.css" id="custSwiperSliderCSS" />');
        }
        
        var intInterval = setInterval(function () {
            if (typeof Swiper !== 'undefined') {
                var swiper = new Swiper(".custFeedbackSwiper_hp", {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  breakpoints: {
                      // when window width is >= 320px
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      // when window width is >= 480px
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      }
                  },
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    type: 'bullets',
                  },
                  navigation: {
                   nextEl: ".swiper-button-next",
                   prevEl: ".swiper-button-prev",
                  },
                });

                clearInterval(intInterval);
          }
     }, 100);

  }
}

jQuery("#custBookFreeConsultationForm").submit(function(e){
    e.preventDefault();
    var arrFormData = {};
    jQuery('#custBookFreeConsultationForm').find(':input').not(':button').each(function(){
       var attrKey = jQuery(this).attr('name');
       var strVal  = jQuery(this).val();
       arrFormData[attrKey] = strVal;
    });
    sessionStorage.setItem('custFormData', JSON.stringify(arrFormData));
    window.location = "https://www.bromwichandsmith.com/contact-us";
});    