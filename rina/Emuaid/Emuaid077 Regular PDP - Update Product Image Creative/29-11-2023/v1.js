var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined' && jQuery('.flickity-slider').length > 0) {
        var strURL = window.location.href;
        var strMainProductImgDesk = strProductMainMobileImg = strThumbProductImg = "";
  
        if (strURL.indexOf('emuaid-first-aid-ointment-0-5oz') > 0) {
  
            strMainProductImgDesk = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_05ozfdg.png";
            strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_05oz_thumbgf.png";
  
        } else if (strURL.indexOf('emuaid-2') > 0) {
  
            strMainProductImgDesk = " https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_2ozgf.png";
            strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_2oz_thumbfgf.png";
  
        } else if (strURL.indexOf('emuaid-first-aid-ointment-16oz') > 0) {
  
            strMainProductImgDesk = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_16ozgfgdf.png";
            strThumbProductImg = "https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_16oz_thumbgfg.png";
  
        }
  
        if (strMainProductImgDesk != "" && strThumbProductImg != "") {
            updatePdpProductImgCreative();
        }
  
  
        function updatePdpProductImgCreative() {
            //added custom slider html
            if (jQuery('body[class*="product-"] .product .product__images .gallery-wrap').length > 0 && jQuery('.custProductGallery').length == 0) {
                var custSliderHtml = '<div class="custProductGallery">' +
                    '    <div class="swiper custProductSliderMain">' +
                    '        <div class="swiper-wrapper">' +
                    '            <div class="swiper-slide">' +
                    '                <a data-fancybox="gallery" data-zoom="false" href="' + strMainProductImgDesk + '">' +
                    '                    <img src="' + strMainProductImgDesk + '" />' +
                    '                </a>' +
                    '            </div>' +                  
                    '            <div class="swiper-slide">' +
                    '                <a data-fancybox="gallery" data-zoom="false" href="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_healing.png">' +
                    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_healing.png" />' +
                    '                </a>' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <a data-fancybox="gallery" data-zoom="false" href="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_safe.png">' +
                    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_safe.png" />' +
                    '                </a>' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <a data-fancybox="gallery" data-zoom="false" href="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_natural.png">' +
                    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_natural.png" />' +
                    '                </a>' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <a data-fancybox="gallery" data-zoom="false" href="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_ages.png">' +
                    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_ages.png" />' +
                    '                </a>' +
                    '            </div>' +
                    '            <div class="swiper-slide videoSlide">' +
                    '                <div class="gallery-cell" data-product-id="6549514027197" data-media-type="external_video" data-thumb="" data-title="EMUAID® First Aid Ointment 0.5oz">' +
                    '                    <div class="product-gallery__video" data-youtube-video> <iframe id="youtube-9144" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Player for EMUAID® First Aid Ointment" width="640" height="360" src="https://www.youtube.com/embed/yPaCr_sf2wc?autoplay=0&controls=0&disablekb=1&playsinline=0&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fwww.emuaid.com%2Fproducts%2Femuaid-2&noCookie=false&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fwww.emuaid.com&widgetid=1" data-gtm-yt-inspected-19="true" data-gtm-yt-inspected-25="true"></iframe></div>' +
                    '                </div>' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <a data-fancybox="gallery" data-zoom="false" href="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_anti-fungal.png">' +
                    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_anti-fungal.png" />' +
                    '                </a>' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <a data-fancybox="gallery" data-zoom="false" href="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_usa_today.png">' +
                    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_usa_today.png" />' +
                    '                </a>' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <a data-fancybox="gallery" data-zoom="false" href="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_quote.png">' +
                    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_quote.png" />' +
                    '                </a>' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <a data-fancybox="galler+y" data-zoom="false" href="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_physician.png">' +
                    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_physician.png" />' +
                    '                </a>' +
                    '            </div>' +
                    '        </div>' +
                    '        <div class="swiper-button-next">' +
                    '            <svg class="" viewBox="0 0 100 100">' +
                    '                <path d="M 10,50 L 60,100 L 62,90 L 22,50  L 62,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path>' +
                    '            </svg>' +
                    '        </div>' +
                    '        <div class="swiper-button-prev">' +
                    '            <svg class="" viewBox="0 0 100 100">' +
                    '                <path d="M 10,50 L 60,100 L 62,90 L 22,50  L 62,10 L 60,0 Z" class="arrow"></path>' +
                    '            </svg>' +
                    '        </div>' +
                    '    </div>' +
                    '    <div thumbsSlider="" class="swiper custProductSliderThumb">' +
                    '        <div class="swiper-wrapper">' +
                    '            <div class="swiper-slide">' +
                    '                <img src="' + strThumbProductImg + '" />' +
                    '            </div>' +                  
                    '            <div class="swiper-slide">' +
                    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_healing_thumb.png" />' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_safe_thumb.png" />' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_natural_thumb.png" />' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_ages_thumb.png" />' +
                    '            </div>' +
                    '            <div class="swiper-slide videoThumb">' +
                    '                <img src="https://www.emuaid.com/cdn/shop/products/hqdefault_ce92f206-a99f-4683-b730-f4c582136df5_300x.jpg" />' +
                    '                <svg class="media-badge" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 25H25V1H1V25Z" fill="white"></path>' +
                    '                    <path class="media-badge__outline" d="M0.5 25V25.5H1H25H25.5V25V1V0.5H25H1H0.5V1V25Z" stroke="black" stroke-opacity="0.05"></path>' +
                    '                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.19995 5.8V20.2L19.3999 12.5858L8.19995 5.8Z" fill="#3A3A3A" fill-opacity="0.6"></path>' +
                    '                </svg>' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_anti-fungal_thumb.png" />' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_usa_today_thumb.png" />' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_quote.png" />' +
                    '            </div>' +
                    '            <div class="swiper-slide">' +
                    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/EMUAID_reg_physician.png" />' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>';
  
                jQuery(custSliderHtml).insertAfter('body[class*="product-"] .product .product__images .gallery-wrap');
            }
  
            //add custome slider 
  

            if (jQuery('#custSwiperSliderJS').length == 0) {
                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
            }
            if (jQuery('#custSwiperSliderCSS').length == 0) {
                jQuery("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
            }
  
  
            var intSwiperCnt = 0;
            var intSwiperInterval = setInterval(function() {
                intSwiperCnt += 1;
  
                if (typeof Swiper !== 'undefined') {
                    var swiper = new Swiper(".custProductSliderThumb", {
                        spaceBetween: 10,
                        slidesPerView: 4.5,
                        freeMode: true,
                        watchSlidesProgress: true,
                    });
                    var swiper2 = new Swiper(".custProductSliderMain", {
                        autoHeight: true,
                        spaceBetween: 10,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        thumbs: {
                            swiper: swiper,
                        },
                    });
  
                    //fancybox
                    jQuery('[data-fancybox="gallery"]').fancybox({
                        loop: false,
                        buttons: [
                            "close"
                        ],
                        animationEffect: "fade",
                    });
                    clearInterval(intSwiperInterval);
                }
  
                if (intSwiperCnt === 50) {
                    clearInterval(intSwiperInterval);
                }
                
                jQuery('body[class*="product-"] .product .product__images').css('background', 'unset');
  
            }, 70);
        }
  
        clearInterval(waitForJquery);
    }
  }, 50);



  