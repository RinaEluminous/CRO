window.onload = function (){
  
  if(document.querySelectorAll('body.template-index').length > 0 && (window.innerWidth <= 991) ) {
    document.querySelector('body').classList.add('custBodyV1');
  if(document.querySelectorAll('.template-index .section-footer').length > 0) {
     document.querySelector('.template-index .section-footer').classList.add('custFooterV1');
  }
  addCustomHTMLForHomePageV1();
  }
  
  };
  
  function addCustomHTMLForHomePageV1(){
  var swiperSliderHtml ='<div class="custWrapperV1">'+
  '    <section class="custToolbarWrapperV1">'+
  '        <ul class="custToolbarWrapV1">'+
  '            <li><span class="custToolbarIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/shipping.svg" alt="Free standard shipping within the U.S."></span><span class="custToolbarText">Free standard shipping within the U.S.</span></li>'+
  '            <li><span class="custToolbarIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/calendar.svg" alt="100 day money-back guarantee"></span><span class="custToolbarText">100 day money-back guarantee</span></li>'+
  '            <li><span class="custToolbarIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/scientifically.svg" alt="Scientifically proven neck support"></span><span class="custToolbarText">Scientifically proven neck support</span></li>'+
  '        </ul>'+
  '    </section>'+
  '<section class="custHPheaderWraperV1">'+
  '    <div class="review">'+
  '        <img src="'+
  'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="">'+
  '        <p>5000+5-STAR REVIEWS</p>'+
  '    </div>'+
  '    <h3>your best sleep while traveling</h3>'+
  '    <p>Scientifically proven to help you drift off anywhere, anytime. Effective for all kinds of travel.</p>'+
  '</section>'+
  '    <section class="custProductsWrapperV1">'+
  '        <div class="container px-xxl-0 custContainer1200V1">'+
  '            <div class="swiper custMySwiper">'+
  '                <div class="custProductsWrap swiper-wrapper">'+
  '<div class="custProductsCard custHeroIamge swiper-slide firstSSlideItem swiper-slide-active" data-swiper-slide-index="0" style="width: 239.25px; margin-right: 12px;">'+
  '    <div class="custProductsCardImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/hp-slider-img-1.png" class="img-fluid" alt="Pillow"></div>'+
  '    <div class="custProductsCardText">'+
  '        <a href="/collections/all-products" class="custBtnV1 custYellowBtnV1">SHOP All</a>'+
  '    </div>'+
  '</div>'+
  '<a href="https://trtltravel.com/products/trtl-travel-pillow" class="custProductsCard swiper-slide">'+
  '                        <div class="custProductsCardImg"><img src="https://trtltravel.com/cdn/shop/files/TPO_SLEEPING_300x.jpg?v=1669372025" class="img-fluid" alt="Pillow"><span class="custProductBestSeller">BEST SELLER</span></div>'+
  '                        <div class="custProductsCardText">'+
  '                            <p class="custProductsCardTextTitle">Pillow<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/black-right-arrow.svg" alt="Right Arrow"></span></p>'+
  '                            <p>The most comfortable sleep you\'ll ever have travelling</p>'+
  '                        </div>'+
  '                    </a><a href="https://trtltravel.com/products/trtl-pillow-plus" class="custProductsCard swiper-slide">'+
  '                        <div class="custProductsCardImg"><img src="https://trtltravel.com/cdn/shop/files/TPP_SLEEPING_300x.jpg?v=1669371945" class="img-fluid" alt="Pillow plus"></div>'+
  '                        <div class="custProductsCardText">'+
  '                            <p class="custProductsCardTextTitle">Pillow plus<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/black-right-arrow.svg" alt="Right Arrow"></span></p>'+
  '                            <p>The world\'s first fully adjustable travel pillow that fits all heights</p>'+
  '                        </div>'+
  '                    </a><a href="https://trtltravel.com/products/trtl-pillow-cool" class="custProductsCard swiper-slide">'+
  '                        <div class="custProductsCardImg"><img src="https://trtltravel.com/cdn/shop/files/TPC_SLEEPING_7b01210e-64ca-4e77-905b-bcf04359116d_300x.jpg?v=1671452020" class="img-fluid" alt="Pillow Cool"></div>'+
  '                        <div class="custProductsCardText">'+
  '                            <p class="custProductsCardTextTitle">Pillow Cool<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/black-right-arrow.svg" alt="Right Arrow"></span></p>'+
  '                            <p>Stay cool and comfy on your journey</p>'+
  '                        </div>'+
  '                    </a><a href="https://trtltravel.com/products/deep-sleep-bundle" class="custProductsCard swiper-slide">'+
  '                        <div class="custProductsCardImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg" class="img-fluid" alt="Deep Sleep Bundle"><span class="custProductBestSeller custYellowBgV1 custBlackV1">UP TO 41% Off!</span></div>'+
  '                        <div class="custProductsCardText">'+
  '                            <p class="custProductsCardTextTitle">Deep Sleep Bundle<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/black-right-arrow.svg" alt="Right Arrow"></span></p>'+
  '                            <p>Easy and relaxing journey. Ready for action.</p>'+
  '                        </div>'+
  '                    </a></div>'+
  '                <div class="swiper-pagination"></div>'+
  '            </div>'+
  '        </div>'+
  '    </section>'+
  '<div class="custPartnersMainV1">'+
  '    <h4 class="custSectionTitleV1"><span class="custBlueV1">OVER 1 MILLION </span> RELAXED <br> TRAVELLER\'S CAN\'T BE WRONG</h4>'+
  '    <div class="container">'+
  '        <div class="swiper custPartnerslider">'+
  '            <div class="swiper-wrapper">'+
  '                <div class="swiper-slide">'+
  '                    <div class="custPartnerBox">'+
  '                        <p>"Makes the middle seat feel like first class"</p>'+
  '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_9_100x.png" alt="">'+
  '                    </div>'+
  '                </div>'+
  '                <div class="swiper-slide">'+
  '                    <div class="custPartnerBox">'+
  '                        <p>"I\'ve truly never slept better on a plane"</p>'+
  '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x.png" alt="">'+
  '                    </div>'+
  '                </div>'+
  '                <div class="swiper-slide">'+
  '                    <div class="custPartnerBox">'+
  '                        <p>"Its design is unique to anything else"</p>'+
  '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_4_100x.png" alt="">'+
  '                    </div>'+
  '                </div>'+
  '                <div class="swiper-slide">'+
  '                    <div class="custPartnerBox">'+
  '                        <p>"Don\'t know how I ever flew without it"</p>'+
  '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x.png" alt="">'+
  '                    </div>'+
  '                </div>'+
  '                <div class="swiper-slide">'+
  '                    <div class="custPartnerBox">'+
  '                        <p>"I never travel without my Trtl Pillow"</p>'+
  '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x.png" alt="">'+
  '                    </div>'+
  '                </div>'+
  '                <div class="swiper-slide">'+
  '                    <div class="custPartnerBox">'+
  '                        <p>"The Trtl Pillow will be your sleep savior"</p>'+
  '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_2_100x.png" alt="">'+
  '                    </div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="custSliderControls">'+
  '                <div class="swiper-pagination"></div>'+
  '            </div>'+
  '        </div>'+
  '    </div>'+
  '</div>'+ 
  '    <section class="custUltimateTravelV1">'+
  '        <div class="container custContainer1280V1 px-xxl-0">'+
  '            <h2 class="custSectionTitleV1">The<span class="custBlueV1"> Ultimate</span> Travel<br> Pillow Experience!</h2>'+
  '            <div class="row custMarginBottom80 flex-lg-row-reverse">'+
  '                <div class="col-lg-6 d-flex justify-content-center"><img class="directional-imgV1" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-ultimate-travel-pillow-experience.png" alt="The Ultimate Travel Pillow Experience!"></div>'+
  '                <div class="col-lg-6">'+
  '                    <div class="custTextLeft">'+
  '                        <p>Your sleep quality affects every aspect of your life - from your mood to your health, your career, and beyond. So why compromise on a travel pillow that can\'t provide you with the best sleep possible? Here\'s why we are 100% confident that the Trtl Pillow Original is the ultimate travel pillow in the world:</p>'+
  '                    </div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80 custUnmatched">'+
  '                <div class="col-lg-7">'+
  '                    <div class="custTextWrapper custUnmatchedDeskImgV1">'+
  '                        <div class="custText"><span class="custNumbers">1</span>'+
  '                            <h3 class="custTextTitle">Unmatched Comfort & Support</h3>'+
  '                            <p class="custSubTitle">The Trtl Pillow Original is designed with your comfort in mind. It features a unique ergonomic design that provides unparalleled neck and head support, allowing you to sleep in the most natural and comfortable positions. No more waking up with a stiff neck or aching muscles after a long flight or car ride.</p>'+
  '                        </div>'+
  '                    </div>'+
  '                </div>'+
  '                <div class="col-lg-5 custUnmatched2Img">'+
  '                    <div class="custImgBox d-flex justify-content-end"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/unmatched-comfort-&-support-desk-2.png" alt=""></div>'+
  '                    <div class="custImgBox mb-0"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/unmatched-comfort-&-support-desk-3.png" alt=""></div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80 custCompact">'+
  '                <div class="col-lg-3 order-2 order-lg-1 custCompact2Img">'+
  '                    <div class="custImgBox d-flex justify-content-end custPortableDesk1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-1.png" alt=""></div>'+
  '                    <div class="custImgBox mb-0 custPortableDesk2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-2.png" alt="" class="d-none d-lg-block"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-3.png" alt="" class="d-block d-lg-none"></div>'+
  '                </div>'+
  '                <div class="col-lg-6 order-1 order-lg-2">'+
  '                    <div class="custTextWrapper">'+
  '                        <div class="custText text-left text-sm-center align-items-start align-items-sm-center"><span class="custNumbers">2</span>'+
  '                            <h3 class="custTextTitle">Compact &<br> Portable</h3>'+
  '                            <p class="custSubTitle">Say goodbye to bulky travel pillows that take up valuable space in your luggage. The Trtl Pillow Original is incredibly compact and lightweight, making it the perfect travel companion. It easily wraps around your neck and provides the support you need without the added bulk.</p>'+
  '                        </div>'+
  '                    </div>'+
  '                </div>'+
  '                <div class="col-lg-3 order-3 order-lg-3">'+
  '                    <div class="custImgBox d-flex justify-content-end custPortableDesk3"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-3.png" alt="" class="d-none d-lg-block"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-2.png" alt="" class="d-block d-lg-none"></div>'+
  '                    <div class="custImgBox mb-0 custPortableDesk4 d-none d-lg-block"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-4.png" alt=""></div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80 custMachine">'+
  '                <div class="col-lg-3 order-3 order-lg-1 custMachine2Img">'+
  '                    <div class="custImgBox d-flex justify-content-end custMachineDesk1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-1.png" alt="Machine Washable & Easy to clean"></div>'+
  '                    <div class="custImgBox mb-0 custMachineDesk2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-2.png" alt="Machine Washable & Easy to clean"></div>'+
  '                </div>'+
  '                <div class="col-lg-3 order-2 order-lg-2">'+
  '                    <div class="custImgBox d-flex justify-content-end custMachineDesk3"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-3.png" alt="Machine Washable & Easy to clean"></div>'+
  '                    <div class="custImgBox mb-0 custMachineDesk4 d-none d-lg-block"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-4.png" alt="Machine Washable & Easy to clean"></div>'+
  '                </div>'+
  '                <div class="col-lg-6 order-1 order-lg-3">'+
  '                    <div class="custTextWrapper">'+
  '                        <div class="custText text-left text-sm-center align-items-sm-center"><span class="custNumbers">3</span>'+
  '                            <h3 class="custTextTitle">Machine<br> Washable & Easy<br> to clean</h3>'+
  '                            <p class="custSubTitle">We understand that travel can get messy, which is why the Trtl Pillow Original is machine washable. Simply remove the inner support and toss it in the washing machine for a fresh and clean pillow, ready for your next adventure.</p>'+
  '                        </div>'+
  '                    </div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80">'+
  '                <div class="col-lg-12">'+
  '                    <div class="custTextWrapper pb-0">'+
  '                        <div class="custText text-sm-center align-items-sm-center"><span class="custNumbers">4</span>'+
  '                            <h3 class="custTextTitle">Trusted by Millions</h3>'+
  '                            <div class="row justify-content-sm-center">'+
  '                                <div class="col-lg-6">'+
  '                                    <p class="custSubTitle">Join the 1 million+ travelers who have already experienced the comfort and convenience of the Trtl Pillow Original. Our satisfied customers rave about how this pillow has transformed their travel experiences, allowing them to arrive at their destination well-rested and ready to explore.</p>'+
  '                                </div>'+
  '                            </div>'+
  '                            <div class="custTestiWrapper">'+
  '                                <div class="custTestiBox order-1"><span class="custTestiStarQuote"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>I actually slept!</b>Comfortable and very useful. Hated those around the neck pillows and the head bobbing and this erased that. Got some actual sleep on a flight for the first time.</p>'+
  '                                    <p>– Irma V.</p>'+
  '                                </div>'+
  '                                <div class="custTestiBox order-4"><span class="custTestiStarQuote"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Slept on international flights.</b>I usually can\'t sleep for long on international flights, but with this product, ear plugs and an eye mask, I slept for the majority of my flights to and from India (I live in the Midwest).</p>'+
  '                                    <p>– Madeline</p>'+
  '                                </div>'+
  '                                <div class="custTestiBox order-2"><span class="custTestiStarQuote"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Love this product!</b>This product made sitting upright in a coach airline seat comfortable! Would definitely recommend to anyone who has a plane right and must sit in coach.</p>'+
  '                                    <p>– JS Newman</p>'+
  '                                </div>'+
  '                                <div class="custTestiBox order-5"><span class="custTestiStarQuote"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Great neck support.</b>I\'m terrible at sleeping on airplanes. But, I had a red eye flight and HAD to get some rest. The turtle pillow allowed me to sleep. I\'m a side sleeper and it was great.</p>'+
  '                                    <p> – Briana Lawrence P.</p>'+
  '                                </div>'+
  '                                <div class="custTestiBox order-3"><span class="custTestiStarQuote"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Game changer/ Best travel pillow.</b>It is so comfortable and I actually fell asleep in the middle seat of the plane! I also used it on a long car ride and it was awesome to help me feel comfortable with my neck supported. Game changer !!</p>'+
  '                                    <p>– Linda T.</p>'+
  '                                </div>'+
  '                                <div class="custTestiBox order-6"><span class="custTestiStarQuote"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Works like a charm.</b>I bought this for my trip to Thailand from Sydney. It really helped me get some sleep and I would recommend it. I\'ve tried various pillows in the past and have always been disappointed. It took me a while to buy this as I didn\'t think it would work, but I\'m so happy to be proved wrong!!</p>'+
  '                                    <p>– Gemma H.</p>'+
  '                                </div>'+
  '                            </div>'+
  '                            <div class="custButtonWrapper"><a class="custBtnV1" href="https://trtltravel.com/pages/reviews">Show more</a></div>'+
  '                        </div>'+
  '                    </div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80 custUnmatched custRiskFree">'+
  '                <div class="col-lg-12">'+
  '                    <div class="custTextWrapper justify-content-start custRiskFreeDeskImgV1">'+
  '                        <div class="custText"><span class="custNumbers text-white">5</span>'+
  '                            <h3 class="custTextTitle text-white">100-Day Risk-Free Trial</h3>'+
  '                            <p class="text-white">We are so confident that you\'ll love our Trtl Products that we offer a 100-day risk-free trial. Try them out on your travels, and if they don\'t meet your expectations, simply return it for a full refund. Your satisfaction is our top priority.</p>'+
  '                        </div>'+
  '                    </div>'+
  '                </div>'+
  '            </div>'+
  '        </div>'+
  '    </section>'+
  '</div>';
  
  if(document.querySelectorAll('#MainContent').length > 0 && document.querySelectorAll('.custWrapperV1').length == 0){
  let mainContentElement = document.querySelector('#MainContent');
  mainContentElement.insertAdjacentHTML('afterbegin', swiperSliderHtml);
  } 
  
  //main slider 
  if (document.querySelectorAll('#custSwiperBunddleSliderJS').length == 0) {
  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
  scriptElement.id = 'custSwiperBunddleSliderJS';
  document.head.appendChild(scriptElement);
  }
  
  //initialise the custom slider	
  var intRunCount = 0 ;
  var intRunInterval = setInterval(function (){
  intRunCount += 1;
  
  if(typeof Swiper !== 'undefined' && jQuery('.custMySwiper').length > 0) {
     var swiper = new Swiper(".custMySwiper", {
       slidesPerView: 1,
       spaceBetween: 10,
       watchSlidesVisibility: true,
       loop: true,
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
       breakpoints: {
         320: {
           slidesPerView: 1.6,
           spaceBetween: 12,
         },
         576: {
           slidesPerView: 2.3,
           spaceBetween: 20,
         },
         768: {
           slidesPerView: 3,
           spaceBetween: 30,
         },
         992: {
           slidesPerView: 4,
           spaceBetween: 20,
         },
         1200: {
           slidesPerView: 4,
           spaceBetween: 40,
         },
       },
     });
          clearInterval(intRunInterval);
    }
  
  
    if(intRunCount === 150){
     clearInterval(intRunInterval);
   }
  
  }, 30);
  
  //partnership slider
  
  if (document.querySelectorAll('.custSwiperSliderJS').length == 0) {
       const scriptElement = document.createElement('script');
       scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js';
       scriptElement.id = 'custSwiperSliderJS';
       document.head.appendChild(scriptElement);
   }
  
   if (document.querySelectorAll('.custSwiperSliderCSS').length ==0) {
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
         var swiper = new Swiper(".custPartnerslider", {
           cssMode: true,
           slidesPerView: 1,
           spaceBetween: 50,
           autoplay: {
             delay: 2500,
             disableOnInteraction: false,
           },
           pagination: {
             el: ".swiper-pagination",
             clickable: true,
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