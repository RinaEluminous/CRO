// (function checkDOMReady() {
//     if (document.readyState === 'complete' || document.readyState === 'interactive') {
//       if(document.querySelectorAll('body.template-index').length > 0 && (window.innerWidth <= 767) ) {
//         document.querySelector('body').classList.add('custBodySocialProof');
//         console.log('DOM is ready yet');
//         goldIraLPMinimalPage();
//         addReviewsSlider();
//     }
//   } else {
//       console.log('DOM is not ready yet');
//       setTimeout(checkDOMReady, 100); // Check again in 100ms
//     }
//   })();

console.log('PG022: Gold IRA LP - Minim');
window.onload = function () {
  //target test only on gold era page
  if (window.location.pathname === "/gold-ira") {
    console.log("gold-ira page.");
    goldIraLPMinimalPage();
    addCustomHtmlForGoldIraPage();
    addReviewsSlider();
    AllClickOperations();
  }
};

function addCustomHtmlForGoldIraPage() {

  var heroSectionLeftSideHtml = '<div class="custLeftBannerText">' +
    '    <h2>Get The <span>GOLD IRA KIT</span> Americans Are Using To help Protect Their Retirement Savings</h2>' +
    '    <h5>Inside this kit, you’ll uncover:</h5>' +
    '    <ul class="custListWrpper">' +
    '        <li>How to choose the best Gold IRA provider to help protect and diversify your money.</li>' +
    '        <li>Proven strategies to help shield your savings from inflation.</li>' +
    '        <li>How to add physical precious metals to your retirement account tax and penalty-free.</li>' +
    '        <li>Expert tips to help you select the precious metals that meet your investment goals.</li>' +
    '    </ul>' +
    '    <ul class="custLogoWrpper">' +
    '        <li>As seen on</li>' +
    '        <li>' +
    '            <img src="' +
    'https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/forbes-logo.svg">' +
    '            <img src="' +
    'https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/fortune-logo.svg">' +
    '            <img src="' +
    'https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/rubin-logo.svg">' +
    '            <img src="' +
    'https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/newsmax-logo.svg">' +
    '            <img src="' +
    'https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/save-amarica-logo.svg">' +
    '        </li>' +
    '    </ul>' +
    '    <div class="custTrustedTransactions">' +
    '        <img src="' +
    'https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/trusted-transactions.svg">' +
    '    </div>' +
    '</div>';

  var rowNumber4Element = document.querySelector('.row-number-4');
  if (rowNumber4Element && document.querySelectorAll('.custLeftBannerText').length == 0) {

    rowNumber4Element.insertAdjacentHTML('beforebegin', heroSectionLeftSideHtml);
  }


  //Reviews section 
  var excellentHtml = document.querySelector('.ti-footer');
  var reviewsHtml = '<div class="custTestimonialsSlider">' +
    '    <div class="container">' +
    '        <div class="custLeftTestimonilas">' +
    '            <h4>Preserve Gold reviews</h4>' +
    '            <div class="custShortCode">' + excellentHtml.innerHTML + '</div>' +
    '        </div>' +
    '<div class="custRightSlider">' +
    '<div class="custReviewsMain">' +
    '    <div class="container">' +
    '        <div class="swiper custReviewslider">' +
    '            <div class="swiper-wrapper">' +
    '                <div class="swiper-slide">' +
    '                    <div class="custPartnerBox">' +
    '                        <p>"The Trtl Pillow will be your sleep savior"</p>' +
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_2_100x.png" alt="savior">' +
    '                    </div>' +
    '                </div>' +
    '                <div class="swiper-slide">' +
    '                    <div class="custPartnerBox">' +
    '                        <p>"Makes the middle seat feel like first class"</p>' +
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_9_100x.png" alt="middle seat">' +
    '                    </div>' +
    '                </div>' +
    '                <div class="swiper-slide">' +
    '                    <div class="custPartnerBox">' +
    '                        <p>"I\'ve truly never slept better on a plane"</p>' +
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x.png" alt="never slept better">' +
    '                    </div>' +
    '                </div>' +
    '                <div class="swiper-slide">' +
    '                    <div class="custPartnerBox">' +
    '                        <p>"Its design is unique to anything else"</p>' +
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_4_100x.png" alt="unique">' +
    '                    </div>' +
    '                </div>' +
    '                <div class="swiper-slide">' +
    '                    <div class="custPartnerBox">' +
    '                        <p>"Don\'t know how I ever flew without it"</p>' +
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x.png" alt="without">' +
    '                    </div>' +
    '                </div>' +
    '                <div class="swiper-slide">' +
    '                    <div class="custPartnerBox">' +
    '                        <p>"I never travel without my Trtl Pillow"</p>' +
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x.png" alt="never travel without">' +
    '                    </div>' +
    '                </div>' +
    '            </div>' +
    '            <div class="custSliderControls">' +
    '                <div class="swiper-pagination"></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';
  '        </div>' +
    '    </div>' +
    '</div>';


  var rowNumber8Element = document.querySelector('.row-number-8');
  if (rowNumber8Element && document.querySelectorAll('.custTestimonialsSlider').length == 0) {
    rowNumber8Element.insertAdjacentHTML('beforebegin', reviewsHtml);
  }

  //limited offer section 
  // calculate current month
  var now = new Date();
  var monthIndexInt = now.getMonth();
  var monthNamesArray = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  var currentMonthStr = monthNamesArray[monthIndexInt];
  console.log('Current Month>>>>', currentMonthStr);

  var limitedOfferSectionHtml = '<div class="custCenterFreeKit">' +
    '    <a>Get My FREE Kit!</a>' +
    '</div>' +
    '<div class="custBottomBanner">' +
    '    <div class="container">' +
    '        <div class="custLimitedOffers">' +
    '            <h3>August 2024 Limited Time Offer:</h3>' +
    '            <p>Get 1% "cashback" in your choice of gold or silver - up to $25,000 - with a qualified purchase when you open a Gold IRA with Preserve Gold. </p>' +
    '        </div>' +
    '        <div class="custPreserveGold">' +
    '            <div class="custRightlagreIMG">' +
    '                <img src="https://offers.preservegold.com/hs-fs/hubfs/Precious%20Metals%20IRA%20Cover%20Combo%201.png?width=2000&height=919&name=Precious%20Metals%20IRA%20Cover%20Combo%201.png">' +
    '            </div>' +
    '            <div class="custRightlagreText">' +
    '                <h2>Ready to Open Your Gold IRA with Preserve Gold?</h2>' +
    '                <a href="tel:(866) 512-6425"><img src="https://offers.preservegold.com/hs-fs/hubfs/Preserve%20Gold%20Group/Images/call.png?width=20&height=20&name=call.png">Call (866) 259-3964 to Claim Your Offer Now </a>' +
    '                <small>Offer valid until ' + currentMonthStr + ' 30th, 2024.</small>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

  var testimonialSliderElement = document.querySelector('.custTestimonialsSlider');
  if (testimonialSliderElement) {
    console.log('dfdfdfd');
    testimonialSliderElement.insertAdjacentHTML('afterend', limitedOfferSectionHtml);
  }

}


function goldIraLPMinimalPage() {
  //add css for Limited time offer section 
  const matchTextElement = "Limited Time Offer:";
  const spanElement = document.querySelectorAll("span");

  spanElement.forEach(span => {
    if (span.textContent.includes(matchTextElement)) {
      let parentDiv = span.closest(".row-number-38 ");
      if (parentDiv) {
        parentDiv.classList.add("custLimitedTimeOfferSection");
      }
    }
  });

  var rowNumber1 = document.querySelector('.row-number-1');
  if (rowNumber1) {
    rowNumber1.classList.add('custHeadStrip');
  }

  //add id and class for the form

  var formTitleElement = document.querySelector('.form-title');
  if (formTitleElement) {
    formTitleElement.textContent = 'FREE 2024 Gold IRA Kit';
  }

  var rowNumber7Element = document.querySelector('.row-number-7');
  if (rowNumber7Element) {
    rowNumber7Element.id = 'custRowNumber7';
  }

  var agreementElement = document.querySelector('.hs_t_c_agreements');
  if (agreementElement) {
    var agreementFieldSetElement = agreementElement.closest('fieldset');
    agreementFieldSetElement.classList.add('custAgreementSection');
  }

  var custAgreementSection = document.querySelector('.custAgreementSection');
  var submitButtonElement = document.querySelector('.hs_submit');

  if (submitButtonElement && custAgreementSection) {
    custAgreementSection.insertAdjacentElement('beforebegin', submitButtonElement);
  }

  //change value of submit button 

  var inputElementOfFormSubmit = document.querySelector('.hs-button');
  if (inputElementOfFormSubmit) {
    inputElementOfFormSubmit.value = 'Get My FREE Kit!';
  }

  var widgetTypeformElement = document.querySelector('.widget-type-form');
  if (widgetTypeformElement) {
    var dndModuleElement = widgetTypeformElement.closest('.dnd-module');
    if (dndModuleElement) {
      dndModuleElement.id = 'custDndModule';
    }
  }

  // change the placeholder value of form

  var inputFirstNameField = document.querySelector('input[name="firstname"]');
  if (inputFirstNameField) {
    inputFirstNameField.placeholder = 'First name';
  }

  var inputLastNameField = document.querySelector('input[name="lastname"]');
  if (inputLastNameField) {
    inputLastNameField.placeholder = 'Last name';
  }

  var inputEmailField = document.querySelector('input[name="email"]');
  if (inputEmailField) {
    inputEmailField.placeholder = 'Enter your email';
  }

  var inputPhoneField = document.querySelector('input[name="phone"]');
  if (inputPhoneField) {
    inputPhoneField.placeholder = 'Enter your phone number';
  }

  var rowNumber6 = document.querySelector('.row-number-6');
  var rowNumber7 = document.querySelector('.row-number-7');
  if (rowNumber6 && rowNumber7) {
    freeGoldIraKitDivHtml = "<div class='custFreeGoldIraKitDiv' id='custFreeGoldIraKit'></div>";
    if (document.querySelectorAll('.custfreeGoldIraKitDiv').length == 0) {
      rowNumber6.insertAdjacentHTML('beforebegin', freeGoldIraKitDivHtml);
    }
    var freeGoldIraKitDivElement = document.querySelector('#custFreeGoldIraKit');
    if (freeGoldIraKitDivElement) {
      var dndColumnBeforeFreeGoldIra = freeGoldIraKitDivElement.closest('.span6');
      if (dndColumnBeforeFreeGoldIra) {
        dndColumnBeforeFreeGoldIra.id = "custFreeGoldIraKitDndClm"
      }
      freeGoldIraKitDivElement.appendChild(rowNumber6);
      freeGoldIraKitDivElement.appendChild(rowNumber7);
    }

  }

}


function addReviewsSlider() {
  //add partner slider 
  // var partnerSliderHtml = '<div class="custReviewsMain">' +
  //   '    <div class="container">' +
  //   '        <div class="swiper custReviewslider">' +
  //   '            <div class="swiper-wrapper">' +
  //   '                <div class="swiper-slide">' +
  //   '                    <div class="custPartnerBox">' +
  //   '                        <p>"The Trtl Pillow will be your sleep savior"</p>' +
  //   '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_2_100x.png" alt="savior">' +
  //   '                    </div>' +
  //   '                </div>' +
  //   '                <div class="swiper-slide">' +
  //   '                    <div class="custPartnerBox">' +
  //   '                        <p>"Makes the middle seat feel like first class"</p>' +
  //   '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_9_100x.png" alt="middle seat">' +
  //   '                    </div>' +
  //   '                </div>' +
  //   '                <div class="swiper-slide">' +
  //   '                    <div class="custPartnerBox">' +
  //   '                        <p>"I\'ve truly never slept better on a plane"</p>' +
  //   '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x.png" alt="never slept better">' +
  //   '                    </div>' +
  //   '                </div>' +
  //   '                <div class="swiper-slide">' +
  //   '                    <div class="custPartnerBox">' +
  //   '                        <p>"Its design is unique to anything else"</p>' +
  //   '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_4_100x.png" alt="unique">' +
  //   '                    </div>' +
  //   '                </div>' +
  //   '                <div class="swiper-slide">' +
  //   '                    <div class="custPartnerBox">' +
  //   '                        <p>"Don\'t know how I ever flew without it"</p>' +
  //   '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x.png" alt="without">' +
  //   '                    </div>' +
  //   '                </div>' +
  //   '                <div class="swiper-slide">' +
  //   '                    <div class="custPartnerBox">' +
  //   '                        <p>"I never travel without my Trtl Pillow"</p>' +
  //   '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x.png" alt="never travel without">' +
  //   '                    </div>' +
  //   '                </div>' +
  //   '            </div>' +
  //   '            <div class="custSliderControls">' +
  //   '                <div class="swiper-pagination"></div>' +
  //   '            </div>' +
  //   '        </div>' +
  //   '    </div>' +
  //   '</div>';

  // var trtlTravelPillowSleepSupportElement = document.querySelector('.custLimitedTimeOfferSection');

  // if (trtlTravelPillowSleepSupportElement && document.querySelectorAll('.custReviewsMain').length == 0) {
  //   trtlTravelPillowSleepSupportElement.insertAdjacentHTML('afterend', partnerSliderHtml);
  // }

  if (document.querySelectorAll('.custSwiperSliderJS').length == 0) {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js';
    scriptElement.id = 'custSwiperSliderJS';
    document.head.appendChild(scriptElement);
  }

  if (document.querySelectorAll('.custSwiperSliderCSS').length == 0) {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.css';
    linkElement.id = 'custSwiperSliderCSS';
    document.head.appendChild(linkElement);
  }

  let intSwiperCnt = 0;
  const intSwiperInterval = setInterval(() => {
    intSwiperCnt += 1;

    if (typeof Swiper !== 'undefined') {
      var swiper = new Swiper(".custReviewsMain .custReviewslider", {
        cssMode: true,
        slidesPerView: 1.1,
        spaceBetween: 15,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          }
        },
      });

      clearInterval(intSwiperInterval);
    }

    if (intSwiperCnt === 50) {
      clearInterval(intSwiperInterval);
    }

  }, 70);

}


function AllClickOperations() {


  const getMyFreeKitElement = document.querySelector('.custCenterFreeKit');

  if (getMyFreeKitElement) {
    getMyFreeKitElement.addEventListener('click', () => {
      console.log('click working >>>>>>>>');
      const targetSectionElement = document.querySelector('#custFreeGoldIraKitDndClm');
      if (targetSectionElement) {
        const fixedHeaderHeight = 200;
        // redirectTab(faqSectionElement, fixedHeaderHeight);
        const offsetTop = targetSectionElement.getBoundingClientRect().top + window.pageYOffset - fixedHeaderHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }


}