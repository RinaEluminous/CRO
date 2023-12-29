var waitForJquery = setInterval(function () {
  if (typeof jQuery != 'undefined') {
    //collection all page condition
    if (jQuery("#MainContent .collection").length > 0) {
      addCustFilterHtml();

    }

    function addCustFilterHtml() {
      var custSliderHtml = '<div class="custCollectionSliderTop page-width">' +
        '    <div class="swiper collectionSwiper">' +
        '        <div class="swiper-wrapper">' +
        '            <div class="swiper-slide">' +
        '                <a href="https://www.thesashbag.com/collections/best-sellers" class="collectionProductBox">' +
        '                    <div class="imgBox">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_bestseller.png" alt="Best Sellers" title="Best Sellers">' +
        '                    </div>' +
        '                    <div class="productTitle">' +
        '                        Best Sellers' +
        '                    </div>' +
        '                </a>' +
        '            </div>' +
        '            <div class="swiper-slide">' +
        '                <a href="https://www.thesashbag.com/collections/see-whats-new" class="collectionProductBox">' +
        '                    <div class="imgBox">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_arrival.png" alt="New Arrivals" title="New Arrivals">' +
        '                    </div>' +
        '                    <div class="productTitle">' +
        '                        New Arrivals' +
        '                    </div>' +
        '                </a>' +
        '            </div>' +
        '            <div class="swiper-slide">' +
        '                <a href="https://www.thesashbag.com/collections/limited-edition-colors-leather" class="collectionProductBox">' +
        '                    <div class="imgBox">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_limited_edition.png" alt="Limited Edition" title="Limited Edition">' +
        '                    </div>' +
        '                    <div class="productTitle">' +
        '                        Limited Edition' +
        '                    </div>' +
        '                </a>' +
        '            </div>' +
        '            <div class="swiper-slide">' +
        '                <a href="https://www.thesashbag.com/collections/sale" class="collectionProductBox">' +
        '                    <div class="imgBox">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_onsale.png" alt="On Sale" title="On Sale">' +
        '                    </div>' +
        '                    <div class="productTitle">' +
        '                        On Sale' +
        '                    </div>' +
        '                </a>' +
        '            </div>' +
        '            <div class="swiper-slide">' +
        '                <a href="https://www.thesashbag.com/collections/sash-accessories" class="collectionProductBox">' +
        '                    <div class="imgBox">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_addons.png" alt="Add- Ons" title="Add- Ons">' +
        '                    </div>' +
        '                    <div class="productTitle">' +
        '                        Add- Ons' +
        '                    </div>' +
        '                </a>' +
        '            </div>' +
        '        </div>' +
        '        <div class="swiper-button-next">Next</div>' +
        '        <div class="swiper-button-prev">Prev</div>' +
        '    </div>' +
        '</div>';

      //added custom slider html
      var intCount = 0;
      var intFliterHtmlInterval = setInterval(function () {
        intCount += 1;
        if (jQuery('main#MainContent [id*="__banner"].section').length > 0 && jQuery('.custCollectionSliderTop').length == 0) {
          jQuery(custSliderHtml).insertAfter('main#MainContent [id*="__banner"].section');
          clearInterval(intFliterHtmlInterval);
        }

        if (intCount === 80) {
          clearInterval(intFliterHtmlInterval);
        }
      }, 30);


      //add custome slider 

      if (jQuery('#custSwiperSliderJS').length == 0) {
        jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
      }
      if (jQuery('#custSwiperSliderCSS').length == 0) {
        jQuery("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
      }


      var intSwiperCnt = 0;
      var intSwiperInterval = setInterval(function () {
        intSwiperCnt += 1;

        if (typeof Swiper !== 'undefined') {
          var swiper = new Swiper(".collectionSwiper", {
            slidesPerView: 2,
            spaceBetween: 5,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              375: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            },
          });

          clearInterval(intSwiperInterval);
        }

        if (intSwiperCnt === 50) {
          clearInterval(intSwiperInterval);
        }

        setTimeout(function () {
          jQuery('.custCollectionSliderTop').show();
        }, 2500);


      }, 70);

    }




    clearInterval(waitForJquery);
  }
}, 50);