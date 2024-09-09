console.log('PG022 Gold IRA LP - Minimal Page >>>>>>>>>');
document.body.classList.add('custGoldIraLpMinimal');

window.onload = function () {
  console.log('in onload >>>>>>>>>');
  //target test only on gold era page
  if (window.location.pathname === "/gold-ira") {
    document.body.classList.remove('custGoldIraLpMinimal');
    goldIraLPMinimalPage();
    addCustomHtmlForGoldIraPage();
    addReviewsSlider();
    AllClickOperations();
   
  }
};


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

  //replace image 
 var imageTagForFormElement= document.querySelector('.row-number-6 .hs_cos_wrapper img');
  if(imageTagForFormElement){
    imageTagForFormElement.src = 'https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/gold-ira-kit.png';
    imageTagForFormElement.srcset = 'https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/gold-ira-kit.png';
  }
}

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
 
  var reviewsHtml = '<div class="custTestimonialsSlider">'+
'    <div class="container">'+
'        <div class="custLeftTestimonilas">'+
'            <div class="custPreserveGoldreviews">'+
'                <a href="https://www.trustindex.io/reviews/www.preservegold.com" target="_blank">'+
'                    <h2>Preserve <br>Gold reviews</h2>'+
'                    <h6>Excellent</h6>'+
'                    <div class="custReivewStar">'+
'                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/symbols_star-rounded.svg">'+
'                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/symbols_star-rounded.svg">'+
'                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/symbols_star-rounded.svg">'+
'                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/symbols_star-rounded.svg">'+
'                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/symbols_star-rounded.svg">'+
'                    </div>'+
'                    <h4>Based on <span>206 reviews</span></h4>'+
'                    <div class="custTrustedLogo">'+
'                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/trust-index-logo.svg">'+
'                    </div>'+
'                </a>'+
'            </div>'+
'        </div>'+
'<div class="custRightSlider">' +
' <div class="custReviewsMain">' +
'    <div class="container">' +
'        <div class="swiper custReviewslider">' +
'            <div class="swiper-wrapper">' +
'                <div class="swiper-slide">' +
'                    <div class="custPartnerBox">' +
'                      <div class="custReivewwrapper">'+
'                         <div class="custReivewText">'+
'                           <img src="https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/green-star.jpg">'+
'                             <h4>I give Preserve Gold 5 STARS! </h4>'+
'                               <p>The knowledge my representative gave me was paramount to my success, and to do this all without making me feel inadequate is what ALL precious metal firms should be doing with ALL of their clients. I previously contacted 5 different companies and each call ended with me feeling lost and even more confused. I am excited to start protecting my wealth with a firm that I feel truly has my best interest at heart.</p>'+
'                                 <h6>Olivia Bauer</h6>'+
'                               </div>'+
'                         </div>'+
'                    </div>' +
'                </div>' +
'                <div class="swiper-slide">' +
'                    <div class="custPartnerBox">' +
'                      <div class="custReivewwrapper">'+
'                         <div class="custReivewText">'+
'                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/green-star.jpg">'+
'                               <h4>To any New Investor - 5 Star Customer Service & Experience </h4>'+
'                                  <p>As a new investor in precious metals, Preserve Gold helped me in every step of the way. From setting up my account to taking the time building an investment strategy by understanding my risk tolerance.Their customer service sets the bar for anyone looking to invest in precious metals while preserving wealth through economic uncertainty.</p>'+
'                                    <h6>Brett Farina KnoxtheOx</h6>'+
'                                  </div>'+
'                             </div>'+
'                      </div>' +
'                </div>' +
'                <div class="swiper-slide">' +
'                    <div class="custPartnerBox">' +
'                      <div class="custReivewwrapper">'+
'                        <div class="custReivewText">'+
'                          <img src="https://growth-hit.s3.us-west-2.amazonaws.com/preservegold/green-star.jpg">'+
'                            <h4>Highly Recommend! Knowledgeable & Best Pricing!</h4>'+
'                              <p>I have been looking into purchasing gold for quite some time and have called a plethora of companies, but Preserve Gold was the only one who answered all my questions, treated me with respect and most importantly offered the best best pricing. Looking forward to doing business with them soon!</p>'+
'                                <h6>Mia Rempala</h6>'+
'                                </div>'+
'                             </div>'+
'                         </div>' +
'                     </div>' +
'                </div>' +
'            <div class="custSliderControls">' +
'                <div class="swiper-pagination"></div>' +
'            </div>' +
'        </div>' +
'    </div>' +
'</div>'+
'</div>'+
'</div>'+
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
  
  var limitedOfferSectionHtml ='<div class="custCenterFreeKit">'+
  '    <a class="custGetMyFreeKitAnch">Get My FREE Kit!</a>'+
  '</div>'+
  '<div class="custBottomBanner">'+
  '    <div class="container">'+
  '        <div class="custLimitedOffers">'+
  '            <h3>'+currentMonthStr+' 2024 Limited Time Offer:</h3>'+
  '            <p>Get 1% "cashback" in your choice of gold or silver - up to $25,000 - with a qualified purchase when you open a Gold IRA with Preserve Gold. </p>'+
  '        </div>'+
  '        <div class="custPreserveGold">'+
  '            <div class="custRightlagreIMG">'+
  '                <img src="https://offers.preservegold.com/hs-fs/hubfs/Precious%20Metals%20IRA%20Cover%20Combo%201.png?width=2000&height=919&name=Precious%20Metals%20IRA%20Cover%20Combo%201.png">'+
  '            </div>'+
  '            <div class="custRightlagreText">'+
  '                <h2>Ready to Open Your Gold IRA with Preserve Gold?</h2>'+
  '                <a href="tel:(866) 512-6425"><img src="https://offers.preservegold.com/hs-fs/hubfs/Preserve%20Gold%20Group/Images/call.png?width=20&height=20&name=call.png">Call (866) 259-3964 to Claim Your Offer Now </a>'+
  '                <small>Offer valid until '+currentMonthStr+' 30th, 2024.</small>'+
  '            </div>'+
  '        </div>'+
  '    </div>'+
  '</div>';

var testimonialSliderElement = document.querySelector('.custTestimonialsSlider');
  if (testimonialSliderElement && document.querySelectorAll('.custCenterFreeKit').length == 0) {
    testimonialSliderElement.insertAdjacentHTML('afterend', limitedOfferSectionHtml);
  }

}

function addReviewsSlider() {

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
        spaceBetween: 12,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        678: {
          loop: true,
        },
        keyboard: true,
        breakpoints: {
          991: {
           spaceBetween: 24,
           slidesPerView: 3,
           loop:false,
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
  const getMyFreeKitElement = document.querySelector('.custGetMyFreeKitAnch');
  if (getMyFreeKitElement) {
    getMyFreeKitElement.addEventListener('click', () => {
      const targetSectionElement = document.querySelector('#custFreeGoldIraKitDndClm');
      if (targetSectionElement) {
        const fixedHeaderHeight = 200;
        const offsetTop = targetSectionElement.getBoundingClientRect().top + window.pageYOffset - fixedHeaderHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }


}