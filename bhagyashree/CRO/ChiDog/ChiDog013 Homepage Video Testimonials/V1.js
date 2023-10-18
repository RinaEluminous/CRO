var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        
        //custom video slider HTML
        addCustVideoSlidesHP();

        function addCustVideoSlidesHP() {
            if(jQuery('.custHomepageVideoTestimonials').length == 0) {
                jQuery('<div class="custHomepageVideoTestimonials"><div class="custContainerFull"><div class="custVideoTestimonialsSlider"><div><div class="custVideoWrapper custLightBG"><div class="custLeftVideoSection"><div class="custArrowImages"><h5>Hear Whiskey\'s story</h5><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/video-top-arrow.png"></div><div class="custPlayBtn" cust-data="https://www.youtube.com/embed/B94riLYqR5c"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/dog-patient-whiskey.jpg"></div></div><div class="custRightTextSection"><h3>“Almost passing away to now being a healthy dog”</h3><div class="custPatient">Patient:<span>Whiskey</span></div><ul><li>Anti-inflamatory</li><li>Fire Diet</li></ul></div></div></div><div><div class="custVideoWrapper custDarkBG"><div class="custRightTextSection"><h3>“She is more active”</h3><div class="custPatient">Patient:<span>Pena</span></div><ul><li>Picky Eater and Anti-inflamatory</li><li>Wood - Picky Eater and Fire for Anti inflammatory</li></ul></div><div class="custLeftVideoSection"><div class="custArrowImages"><h5>Hear Whiskey\'s story</h5><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/video-top-arrow.png"></div><div class="custPlayBtn" cust-data="https://www.youtube.com/embed/K1IN5-iexlQ"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/dog-pena.jpg"></div></div></div></div><div><div class="custVideoWrapper custLightBG"><div class="custLeftVideoSection"><div class="custArrowImages"><h5>Hear Whiskey\'s story</h5><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/video-top-arrow.png"></div><div class="custPlayBtn" cust-data="https://www.youtube.com/embed/XU5Y-0IurIw"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/dog-penas-story.jpg"></div></div><div class="custRightTextSection"><h3>“They love their chidog”</h3><div class="custPatient">Patient:<span>Willie & Bertie</span></div><ul><li>Skin allergies & dry skin</li><li>Fire & Metal Diets</li></ul></div></div></div></div></div><div class="custVideoPopupBlocks"><iframe width="560" height="315" src="https://www.youtube.com/embed/B94riLYqR5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><button class="custClose"></button><div class="custOverlay"></div></div></div>').insertAfter('.shopify-section .bm-banner .mobile-slide');

                if (jQuery('#custSlickSliderJS').length == 0) {
                    jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" id="custSlickSliderJS"></script>');
                }

                if (jQuery('#custSlickSliderCSS').length == 0) {
                    jQuery("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" id="custSlickSliderCSS" />');
                }

                //initialize slider
                var intSlickCounter  = 0;
                var intSlickInterval = setInterval(function() {
                    intSlickCounter += 1;

                    if (jQuery('#custSlickSliderJS').length > 0 && jQuery(".custVideoTestimonialsSlider").length > 0 ) {
                        
                        jQuery(".custVideoTestimonialsSlider").slick({
                            slidesToShow: 1, 
                            dots: true,
                            arrows: true,    
                            slidesToScroll: 1, 
                            responsive: [
                                {
                                    breakpoint: 989,
                                    settings: {
                                        arrows: false,
                                        dots: true
                                }
                            }
                            ]
                        }).on('afterChange', function(e, slick, currentSlide) {
                            var strSrc = jQuery('.custContainerFull .slick-initialized .slick-slide.slick-current .custLeftVideoSection div.custPlayBtn').attr('cust-data');
                            jQuery('.custVideoPopupBlocks iframe').attr('src',strSrc);
                        });
                        clearInterval(intSlickInterval);  
                    }

                    if (intSlickCounter === 80) {
                        clearInterval(intSlickInterval);
                    }
                }, 80);
            }
        }

        //on play button click open popup and play video
        jQuery(document).on('click','.custLeftVideoSection div.custPlayBtn', function() {
            var strSrc =  jQuery(this).attr('cust-data');
            
            if(strSrc.indexOf("?autoplay=1") === -1){
                jQuery('.custVideoPopupBlocks iframe').attr('src', strSrc+'?autoplay=1');
            }

            jQuery('.custVideoPopupBlocks').addClass('custVideoActive');
            jQuery('body').addClass('custNoScroll');
        });

        //on close button click close the video popup
        jQuery(document).on('click','.custVideoPopupBlocks button.custClose,.custVideoPopupBlocks .custOverlay', function() {
            var strSrc      = jQuery('.custVideoPopupBlocks iframe').attr('src');
            var updatedSrc  = strSrc.replace('?autoplay=1','');

            jQuery('.custVideoPopupBlocks').removeClass('custVideoActive');
            jQuery('body').removeClass('custNoScroll');
            jQuery('.custVideoPopupBlocks iframe').attr('src',updatedSrc);
        });

        clearInterval(waitForJquery);
    }
}, 50);   