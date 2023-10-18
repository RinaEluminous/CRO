var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        //call function only on PDP page
        if(jQuery('#shopify-section-product-template').length > 0) {
            addNewPageRedesignOnTherapeuticMoistureBar();
            addSwiperSlider();
        }
        function addNewPageRedesignOnTherapeuticMoistureBar() {
            if(jQuery('#shopify-section-product-template .purchase-details').length > 0  && jQuery('#shopify-section-product-template .purchase-details .custImageSection').length == 0){
                var whyEmuidWorkTabText=jQuery('#s-4a5f04b9-6b92-4456-98b5-5e7ee1169d98').text();
                jQuery('#shopify-section-product-template .purchase-details').append('<div class="custImageSection">Image section</div><div class="custAccordian"><h3 class="accordian">Why EMUAID® Works</h3><div class="panel"><p>'+whyEmuidWorkTabText+'</p></div><h3 class="accordian">Ingredients</h3><div class="panel"><p>Some text here simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div><h3 class="accordian">30 Day Money-Back Guarantee</h3><div class="panel"><p>Some text here simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div><h3 class="accordian">How To Use</h3><div class="panel"><p>Some text here simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div></div>');
            }
        }
        function addSwiperSlider(){
            if(jQuery("#shopify-section-product-template .product__images").length  > 0 && jQuery("#shopify-section-product-template .custSlickSlider").length == 0) {
                
                jQuery("#shopify-section-product-template .product__images").append('<div id="page" class="custSlickSlider"><div class="row"><div class="column small-11 small-centered"><div class="slider slider-single"><div><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Slide 2"></div><div><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="Slide 2"></div><div><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="Slide 2"></div><div><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Slide 2"></div><div><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="Slide 2"></div></div><div class="slider slider-nav"><div><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Slide 2"></div><div><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="Slide 2"></div><div><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="Slide 2"></div><div><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Slide 1"></div><div><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Slide 2"></div><div><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="Slide 2"></div></div></div></div></div>');

                if(jQuery("#shopify-section-product-template .product__images .custSlickSlider").length  > 0){
               
                    if (jQuery('#custSlickJs').length == 0 && jQuery('#custModernizrJs').length == 0 ) {
                    jQuery("head").append('<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" id="custModernizrJs"></script>');
                    jQuery("head").append('<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" id="custSlickJs"></script>');
                }

                    if (jQuery('#custSlickCss').length == 0 && jQuery('#custSlickThemeCss').length == 0  && jQuery('#custFoundationCss').length == 0) {
                    jQuery("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation/5.5.0/css/foundation.css" id="custFoundationCss"/>');
                    jQuery("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" id="custSlickCss"/>');
                    jQuery("head").append('<link rel="stylesheet" href="//kenwheeler.github.io/slick/slick/slick-theme.css" id="custSlickThemeCss"/>');

                    }

                 var intSlickCnt = 0;
                 var intSlickInterval = setInterval(function () {
                       intSlickCnt += 1;
 
                       if (typeof $.fn.slick !== 'undefined') {

                        jQuery('.slider-single').not('.slick-initialized').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true,
                            fade: false,
                            adaptiveHeight: true,
                            infinite: false,
                           useTransform: true,
                            speed: 400,
                            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
                        });
                       
                        jQuery('.slider-nav')
                            .on('init', function(event, slick) {
                                jQuery('.slider-nav .slick-slide.slick-current').addClass('is-active');
                            })
                            .not('.slick-initialized').slick({
                                slidesToShow: 7,
                                slidesToScroll: 7,
                                dots: false,
                                focusOnSelect: false,
                                infinite: false,
                                responsive: [{
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 5,
                                        slidesToScroll: 5,
                                    }
                                }, {
                                    breakpoint: 640,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 4,
                                   }
                                }, {
                                    breakpoint: 420,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                               }
                                }]
                            });
                       
                            jQuery('.slider-single').on('afterChange', function(event, slick, currentSlide) {
                                jQuery('.slider-nav').slick('slickGoTo', currentSlide);
                            var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
                            jQuery('.slider-nav .slick-slide.is-active').removeClass('is-active');
                            jQuery(currrentNavSlideElem).addClass('is-active');
                        });
                       
                        jQuery('.slider-nav').on('click', '.slick-slide', function(event) {
                            event.preventDefault();
                            var goToSingleSlide = jQuery(this).data('slick-index');
                       
                            jQuery('.slider-single').slick('slickGoTo', goToSingleSlide);
                        });
                                
                                 }
            
                            if(intSlickCnt === 50){
                               
                                clearInterval(intSlickInterval);
                            }
 
                        },70);
                    }
                }

            
     
        clearInterval(waitForJquery);
    } 
}
}, 50);   

