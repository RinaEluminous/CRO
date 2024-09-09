(function checkDOMReady() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    if (document.querySelectorAll('body.template-index').length > 0 && (window.innerWidth <= 767)) {
      document.querySelector('body').classList.add('custBodySocialProof');
    addHpCustSocialProof();
    }
  } else {
    setTimeout(checkDOMReady, 100); // Check again in 100ms
  }
})();

function addHpCustSocialProof() {
  //change reviews text 
  var reviewElement = document.querySelectorAll('.d-inline-block.fs-6.ms-2 p')[0];
  if (reviewElement) {
    reviewElement.textContent = "19,000+ 5-STAR REVIEWS";
  }

  var reviewElementDiv =reviewElement.closest('.col-12');
  if (reviewElementDiv) {
    reviewElementDiv.classList.add('custReviewWrapper');
  }

  //change description below heading 
  var descriptionElement = document.querySelector('.container-xl-fixed .lh-sm p');
  if (descriptionElement) {
    descriptionElement.textContent = 'Scientifically proven travel pillows to help you drift off anywhere, anytime. Effective for all kinds of travel.';
  }

  var containerXlFixedElement = document.querySelector('.container-xl-fixed.d-md-none');
  if (containerXlFixedElement) {
    containerXlFixedElement.classList.add('custNewBannerTital');
  }

  //logo slider section 
  var custLogoHtml = '<div class="custLogoList">' +
    '    <ul>' +
    '        <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/cnn-logo.svg" alt="TRT-logo"></li>' +
    '        <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/travel-plus-logo.svg" alt="TRT-logo"></li>' +
    '        <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/loncy-planet-logo.svg" alt="TRT-logo"></li>' +
    '        <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzz-feed.svg" alt="TRT-logo"></li>' +
    '        <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/strategist.svg" alt="TRT-logo"></li>' +
    '    </ul>' +
    '</div>' +
    '<div class="custProdList">' +
    '    <h3>trusted by <span>2 Million+</span> relaxed Travellers</h3>' +
    '    <div class="custProdBox">' +
    '        <a href="/products/trtl-travel-pillow-ads3">' +
    '            <div class="custProdImage">' +
    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/Product_Explainer-img-1.png">' +
    '                <span class="custBadge">#1 BEST SELLING</span>' +
    '            </div>' +
    '            <div class="custProdTital">' +
    '                <h4>Travel Pillow</h4>' +
    '                <p>The best pillow ever made</p>' +
    '            </div>' +
    '        </a>' +
    '    </div>' +
    '    <div class="custProdBox">' +
    '        <a href="/products/trtl-pillow-cool">' +
    '            <div class="custProdImage">' +
    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/Product_Explainer-img-2.png">' +
    '                <span class="custBadge">COOLING FABRIC</span>' +
    '            </div>' +
    '            <div class="custProdTital">' +
    '                <h4>Pillow Cool</h4>' +
    '                <p>For those who like to stay cool</p>' +
    '            </div>' +
    '        </a>' +
    '    </div>' +
    '    <div class="custProdBox">' +
    '        <a href="/products/trtl-pillow-plus">' +
    '            <div class="custProdImage">' +
    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/Product_Explainer-img-3.png">' +
    '                <span class="custBadge">ADJUSTABLE HEIGHT</span>' +
    '            </div>' +
    '            <div class="custProdTital">' +
    '                <h4>Pillow Plus</h4>' +
    '                <p>For necks big and small</p>' +
    '            </div>' +
    '        </a>' +
    '    </div>' +
    '    <div class="custProdBox">' +
    '        <a href="/products/deep-sleep-bundle?view=simplified_dbs&$3">' +
    '            <div class="custProdImage">' +
    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/Product_Explainer-img-4.png">' +
    '                <span class="custBadge">SAVE UP TO 41%</span>' +
    '            </div>' +
    '            <div class="custProdTital">' +
    '                <h4>Bundles</h4>' +
    '                <p>Save big on better sleep</p>' +
    '            </div>' +
    '        </a>' +
    '    </div>' +
    '    <div class="custButtons">' +
    '        <a href="/collections/all-products">SHOP NOW</a>' +
    '        <p>100 day money-back guarantee</p>' +
    '    </div>' +
    '</div>' +
    '<div class="custPromoBanner">' +
    '    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/Product_Explainer_banner_img.jpg">' +
    '</div>';

  //change description below heading 
  var descriptionCol12Element = descriptionElement.closest('.col-12');
  if (descriptionCol12Element && document.querySelectorAll('.custLogoList').length == 0) {
    descriptionCol12Element.insertAdjacentHTML('afterend', custLogoHtml);
  }

  //add partner slider 
  var partnerSliderHtml = '<div class="custPartnersMainSp">' +
    '    <div class="container">' +
    '        <div class="swiper custPartnerslider">' +
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

  var trtlTravelPillowSleepSupportElement = document.querySelector('.custNewBannerTital');

  if (trtlTravelPillowSleepSupportElement && document.querySelectorAll('.custPartnersMainSp').length == 0) {
    trtlTravelPillowSleepSupportElement.insertAdjacentHTML('afterend', partnerSliderHtml);
  }

    var positionCoverElement = document.querySelector('.fs-4.fw-bold.lh-1');

    if (positionCoverElement) {
      const positionCoverElementParentElement = positionCoverElement.closest('.bg-light');
      if(positionCoverElementParentElement){
        positionCoverElementParentElement.classList.add('custPositionCover');
      }
  }

  var positionRelativeElement = document.querySelector('.position-relative.mt-4.mt-md-0');
  if(positionRelativeElement){
    positionRelativeElement.classList.add('custImageDiv');
  }

   const matchTextElement = "Makes the middle seat feel like first class";
   const paragraphsElement = document.querySelectorAll("p");
 
   paragraphsElement.forEach(paragraph => {
     if (paragraph.textContent.includes(matchTextElement)) {
      let parentDiv = paragraph.closest(".shopify-section.overflow-hidden.position-relative");
      if (parentDiv) {
         parentDiv.classList.add("custLogoSectionWithoutSlider");
      } 
     }
   });

  //partnership slider

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
      var swiper = new Swiper(".custPartnersMainSp .custPartnerslider", {
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