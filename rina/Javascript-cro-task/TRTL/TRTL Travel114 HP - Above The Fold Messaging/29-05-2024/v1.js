window.onload = function (){
   
  if(document.querySelectorAll('body.template-index').length > 0) {
         document.querySelector('body').classList.add('custBodyV1');
      if(document.querySelectorAll('.template-index .section-footer').length > 0) {
          document.querySelector('.template-index .section-footer').classList.add('custFooterV1');
      }
      addCustomHTMLForHomePage();
  }

};

function addCustomHTMLForHomePage(){
  var swiperSliderHtml ='<div class="custWrapperV1">'+
  '    <section class="custToolbarWrapperV1">'+
  '        <ul class="custToolbarWrapV1">'+
  '            <li><span class="custToolbarIconV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/shipping.svg" alt="Free standard shipping within the U.S."></span><span class="custToolbarTextV1">Free standard shipping within the U.S.</span></li>'+
  '            <li><span class="custToolbarIconV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/calendar.svg" alt="100 day money-back guarantee"></span><span class="custToolbarTextV1">100 day money-back guarantee</span></li>'+
  '            <li><span class="custToolbarIconV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/scientifically.svg" alt="Scientifically proven neck support"></span><span class="custToolbarTextV1">Scientifically proven neck support</span></li>'+
  '        </ul>'+
  '    </section>'+
  '    <section class="custHeroWrapperV1">'+
  '        <div class="container px-0 custContainer1280V1">'+
  '            <div class="custHeroWrapV1">'+
  '                <div class="custHeroWrapTextV1">'+
  '                    <div class="custHeroReviewV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> 5000+ 5-STAR REVIEWS</div>'+
  '                    <h2 class="custHeroTitleV1">YOUR BEST SLEEP WHILE TRAVELING</h2>'+
  '                    <h4 class="custHeroSubTitleV1">Scientifically proven to help you drift off anywhere, anytime. Effective for all kinds of travel.</h4><a href="https://trtltravel.com/products/trtl-travel-pillow" class="custBtnV1 custYellowBtnV1">SHOP NOW</a>'+
  '                </div>'+
  '            </div>'+
  '        </div>'+
  '    </section>'+
  '    <section class="custProductsWrapperV1">'+
  '<div class="custSocialProofV1">'+
  '    <p><span>OVER 1 Million </span>relaxed Traveller\'s can\'t be wrong</p>'+
  '</div>'+
  '        <div class="container px-xxl-0 custContainer1200V1">'+
  '            <div class="swiper custMySwiperV1">'+
  '                <div class="custProductsWrapV1 swiper-wrapper"><a href="https://trtltravel.com/products/trtl-travel-pillow" class="custProductsCardV1 swiper-slide">'+
  '                        <div class="custProductsCardImgV1"><img src="https://trtltravel.com/cdn/shop/files/TPO_SLEEPING_300x.jpg?v=1669372025" class="img-fluid" alt="Pillow"><span class="custProductBestSellerV1">BEST SELLER</span></div>'+
  '                        <div class="custProductsCardTextV1">'+
  '                            <p class="custProductsCardTextTitleV1">Pillow<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/black-right-arrow.svg" alt="Right Arrow"></span></p>'+
  '                            <p>The most comfortable sleep you\'ll ever have travelling</p>'+
  '                        </div>'+
  '                    </a><a href="https://trtltravel.com/products/trtl-pillow-plus" class="custProductsCardV1 swiper-slide">'+
  '                        <div class="custProductsCardImgV1"><img src="https://trtltravel.com/cdn/shop/files/TPP_SLEEPING_300x.jpg?v=1669371945" class="img-fluid" alt="Pillow plus"></div>'+
  '                        <div class="custProductsCardTextV1">'+
  '                            <p class="custProductsCardTextTitleV1">Pillow plus<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/black-right-arrow.svg" alt="Right Arrow"></span></p>'+
  '                            <p>The world\'s first fully adjustable travel pillow that fits all heights</p>'+
  '                        </div>'+
  '                    </a><a href="https://trtltravel.com/products/trtl-pillow-cool" class="custProductsCardV1 swiper-slide">'+
  '                        <div class="custProductsCardImgV1"><img src="https://trtltravel.com/cdn/shop/files/TPC_SLEEPING_7b01210e-64ca-4e77-905b-bcf04359116d_300x.jpg?v=1671452020" class="img-fluid" alt="Pillow Cool"></div>'+
  '                        <div class="custProductsCardTextV1">'+
  '                            <p class="custProductsCardTextTitleV1">Pillow Cool<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/black-right-arrow.svg" alt="Right Arrow"></span></p>'+
  '                            <p>Stay cool and comfy on your journey</p>'+
  '                        </div>'+
  '                    </a><a href="https://trtltravel.com/products/deep-sleep-bundle" class="custProductsCardV1 swiper-slide">'+
  '                        <div class="custProductsCardImgV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/deep-sleep-bundle.jpg" class="img-fluid" alt="Deep Sleep Bundle"><span class="custProductBestSellerV1 custYellowBgV1 custBlackV1">UP TO 41% Off!</span></div>'+
  '                        <div class="custProductsCardTextV1">'+
  '                            <p class="custProductsCardTextTitleV1">Deep Sleep Bundle<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/black-right-arrow.svg" alt="Right Arrow"></span></p>'+
  '                            <p>Easy and relaxing journey. Ready for action.</p>'+
  '                        </div>'+
  '                    </a></div>'+
  '                <div class="swiper-pagination"></div>'+
  '            </div>'+
  '        </div>'+
  '    </section>'+
  '    <div class="marquee">'+
  '        <div class="track">'+
  '            <div class="content">'+
  '                <div class="custMarqueeWrapperV1">'+
  '                    <div class="custMarqueeWrapV1"><span>"Its design is unique to anything else"</span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist"></div>'+
  '                    <div class="custMarqueeWrapV1"><span>"I\'ve truly never slept better on a plane"</span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed"></div>'+
  '                    <div class="custMarqueeWrapV1"><span>"Its design is unique to anything else"</span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist"></div>'+
  '                    <div class="custMarqueeWrapV1"><span>"I\'ve truly never slept better on a plane"</span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed"></div>'+
  '                    <div class="custMarqueeWrapV1"><span>"Its design is unique to anything else"</span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist"></div>'+
  '                    <div class="custMarqueeWrapV1"><span>"I\'ve truly never slept better on a plane"</span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed"></div>'+
  '                    <div class="custMarqueeWrapV1"><span>"Its design is unique to anything else"</span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist"></div>'+
  '                    <div class="custMarqueeWrapV1"><span>"I\'ve truly never slept better on a plane"</span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed"></div>'+
  '                </div>'+
  '            </div>'+
  '        </div>'+
  '    </div>'+
  '    <section class="custUltimateTravelV1">'+
  '        <div class="container custContainer1280V1 px-xxl-0">'+
  '            <h2 class="custSectionTitleV1">The<span class="custBlueV1"> Ultimate</span> Travel<br> Pillow Experience!</h2>'+
  '            <div class="row custMarginBottom80V1 flex-lg-row-reverse">'+
  '                <div class="col-lg-6 d-flex justify-content-center"><img class="directional-img" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-ultimate-travel-pillow-experience.png" alt="The Ultimate Travel Pillow Experience!"></div>'+
  '                <div class="col-lg-6">'+
  '                    <div class="custTextLeftV1">'+
  '                        <p>Your sleep quality affects every aspect of your life - from your mood to your health, your career, and beyond. So why compromise on a travel pillow that can\'t provide you with the best sleep possible? Here\'s why we are 100% confident that the Trtl Pillow Original is the ultimate travel pillow in the world:</p>'+
  '                    </div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80V1 custUnmatchedV1">'+
  '                <div class="col-lg-7">'+
  '                    <div class="custTextWrapperV1 custUnmatchedDeskImgV1">'+
  '                        <div class="custTextV1"><span class="custNumbersV1">1</span>'+
  '                            <h3 class="custTextTitleV1">Unmatched Comfort & Support</h3>'+
  '                            <p class="custSubTitleV1">The Trtl Pillow Original is designed with your comfort in mind. It features a unique ergonomic design that provides unparalleled neck and head support, allowing you to sleep in the most natural and comfortable positions. No more waking up with a stiff neck or aching muscles after a long flight or car ride.</p>'+
  '                        </div>'+
  '                    </div>'+
  '                </div>'+
  '                <div class="col-lg-5 custUnmatched2ImgV1">'+
  '                    <div class="custImgBoxV1 d-flex justify-content-end"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/unmatched-comfort-&-support-desk-2.png" alt=""></div>'+
  '                    <div class="custImgBoxV1 mb-0"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/unmatched-comfort-&-support-desk-3.png" alt=""></div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80V1 custCompactV1">'+
  '                <div class="col-lg-3 order-2 order-lg-1 custCompact2ImgV1">'+
  '                    <div class="custImgBoxV1 d-flex justify-content-end custPortableDesk1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-1.png" alt=""></div>'+
  '                    <div class="custImgBoxV1 mb-0 custPortableDesk2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-2.png" alt="" class="d-none d-lg-block"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-3.png" alt="" class="d-block d-lg-none"></div>'+
  '                </div>'+
  '                <div class="col-lg-6 order-1 order-lg-2">'+
  '                    <div class="custTextWrapperV1">'+
  '                        <div class="custTextV1 text-left text-sm-center align-items-start align-items-sm-center"><span class="custNumbersV1">2</span>'+
  '                            <h3 class="custTextTitleV1">Compact &<br> Portable</h3>'+
  '                            <p class="custSubTitleV1">Say goodbye to bulky travel pillows that take up valuable space in your luggage. The Trtl Pillow Original is incredibly compact and lightweight, making it the perfect travel companion. It easily wraps around your neck and provides the support you need without the added bulk.</p>'+
  '                        </div>'+
  '                    </div>'+
  '                </div>'+
  '                <div class="col-lg-3 order-3 order-lg-3">'+
  '                    <div class="custImgBoxV1 d-flex justify-content-end custPortableDesk3V1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-3.png" alt="" class="d-none d-lg-block"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-2.png" alt="" class="d-block d-lg-none"></div>'+
  '                    <div class="custImgBoxV1 mb-0 custPortableDesk4V1 d-none d-lg-block"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-4.png" alt=""></div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80V1 custMachineV1">'+
  '                <div class="col-lg-3 order-3 order-lg-1 custMachine2ImgV1">'+
  '                    <div class="custImgBoxV1 d-flex justify-content-end custMachineDesk1V1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-1.png" alt="Machine Washable & Easy to clean"></div>'+
  '                    <div class="custImgBoxV1 mb-0 custMachineDesk2V1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-2.png" alt="Machine Washable & Easy to clean"></div>'+
  '                </div>'+
  '                <div class="col-lg-3 order-2 order-lg-2">'+
  '                    <div class="custImgBoxV1 d-flex justify-content-end custMachineDesk3V1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-3.png" alt="Machine Washable & Easy to clean"></div>'+
  '                    <div class="custImgBoxV1 mb-0 custMachineDesk4V1 d-none d-lg-block"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-4.png" alt="Machine Washable & Easy to clean"></div>'+
  '                </div>'+
  '                <div class="col-lg-6 order-1 order-lg-3">'+
  '                    <div class="custTextWrapperV1">'+
  '                        <div class="custTextV1 text-left text-sm-center align-items-sm-center"><span class="custNumbersV1">3</span>'+
  '                            <h3 class="custTextTitleV1">Machine<br> Washable & Easy<br> to clean</h3>'+
  '                            <p class="custSubTitleV1">We understand that travel can get messy, which is why the Trtl Pillow Original is machine washable. Simply remove the inner support and toss it in the washing machine for a fresh and clean pillow, ready for your next adventure.</p>'+
  '                        </div>'+
  '                    </div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80V1">'+
  '                <div class="col-lg-12">'+
  '                    <div class="custTextWrapperV1 pb-0">'+
  '                        <div class="custTextV1 text-sm-center align-items-sm-center"><span class="custNumbersV1">4</span>'+
  '                            <h3 class="custTextTitleV1">Trusted by Millions</h3>'+
  '                            <div class="row justify-content-sm-center">'+
  '                                <div class="col-lg-6">'+
  '                                    <p class="custSubTitleV1">Join the 1 million+ travelers who have already experienced the comfort and convenience of the Trtl Pillow Original. Our satisfied customers rave about how this pillow has transformed their travel experiences, allowing them to arrive at their destination well-rested and ready to explore.</p>'+
  '                                </div>'+
  '                            </div>'+
  '                            <div class="custTestiWrapperV1">'+
  '                                <div class="custTestiBoxV1 order-1"><span class="custTestiStarQuoteV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>I actually slept!</b>Comfortable and very useful. Hated those around the neck pillows and the head bobbing and this erased that. Got some actual sleep on a flight for the first time.</p>'+
  '                                    <p>– Irma V.</p>'+
  '                                </div>'+
  '                                <div class="custTestiBoxV1 order-4"><span class="custTestiStarQuoteV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Slept on international flights.</b>I usually can\'t sleep for long on international flights, but with this product, ear plugs and an eye mask, I slept for the majority of my flights to and from India (I live in the Midwest).</p>'+
  '                                    <p>– Madeline</p>'+
  '                                </div>'+
  '                                <div class="custTestiBoxV1 order-2"><span class="custTestiStarQuoteV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Love this product!</b>This product made sitting upright in a coach airline seat comfortable! Would definitely recommend to anyone who has a plane right and must sit in coach.</p>'+
  '                                    <p>– JS Newman</p>'+
  '                                </div>'+
  '                                <div class="custTestiBoxV1 order-5"><span class="custTestiStarQuoteV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Great neck support.</b>I\'m terrible at sleeping on airplanes. But, I had a red eye flight and HAD to get some rest. The turtle pillow allowed me to sleep. I\'m a side sleeper and it was great.</p>'+
  '                                    <p> – Briana Lawrence P.</p>'+
  '                                </div>'+
  '                                <div class="custTestiBoxV1 order-3"><span class="custTestiStarQuoteV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Game changer/ Best travel pillow.</b>It is so comfortable and I actually fell asleep in the middle seat of the plane! I also used it on a long car ride and it was awesome to help me feel comfortable with my neck supported. Game changer !!</p>'+
  '                                    <p>– Linda T.</p>'+
  '                                </div>'+
  '                                <div class="custTestiBoxV1 order-6"><span class="custTestiStarQuoteV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote"></span>'+
  '                                    <p><b>Works like a charm.</b>I bought this for my trip to Thailand from Sydney. It really helped me get some sleep and I would recommend it. I\'ve tried various pillows in the past and have always been disappointed. It took me a while to buy this as I didn\'t think it would work, but I\'m so happy to be proved wrong!!</p>'+
  '                                    <p>– Gemma H.</p>'+
  '                                </div>'+
  '                            </div>'+
  '                            <div class="custButtonWrapperV1"><a class="custBtnV1" href="https://trtltravel.com/pages/reviews">Show more</a></div>'+
  '                        </div>'+
  '                    </div>'+
  '                </div>'+
  '            </div>'+
  '            <div class="row custMarginBottom80V1 custUnmatchedV1 custRiskFreeV1">'+
  '                <div class="col-lg-12">'+
  '                    <div class="custTextWrapperV1 justify-content-start custRiskFreeDeskImgV1">'+
  '                        <div class="custTextV1"><span class="custNumbersV1 text-white">5</span>'+
  '                            <h3 class="custTextTitleV1 text-white">100-Day Risk-Free Trial</h3>'+
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
  
  
  if (document.querySelectorAll('#custSwiperBunddleSliderJSV1').length == 0) {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      scriptElement.id = 'custSwiperBunddleSliderJSV1';
      document.head.appendChild(scriptElement);
  }

      //initialise the custom slider	
      var intRunCount = 0 ;
      var intRunInterval = setInterval(function (){
      intRunCount += 1;

      if(typeof Swiper !== 'undefined' && jQuery('.custMySwiperV1').length > 0) {
          var swiper = new Swiper(".custMySwiperV1", {
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
}