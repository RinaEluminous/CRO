//add custom Logo Slider
function addCustLogoSlider(){
    
    var intRunsTime = 0; 
    var intSliderInterval = setInterval(function () {
        intRunsTime += 1;
        if(jQuery('.custProductsLogos').length > 0 ){
            
            if (jQuery('#custMinSlickSliderJS').length == 0) {
                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js" id="custMinSlickSliderJS"></script>');
                }
    
            if(jQuery('#custSlickSliderCSS').length == 0){
                jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css" id="custSlickSliderCSS" />');
            }

          

                if (jQuery.fn.slick) {
                    jQuery(".custProductsLogos").slick({
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 1000,
                        arrows: false,
                        dots: false,
                        centerPadding: "60px",
                        slidesToShow: 4,
                        padding: "20px",
                        loop: false,
                        responsive: [
                          {
                            breakpoint: 768,
                            settings: {
                              arrows: false,
                              centerMode: true,
                              centerPadding: "40px",
                              slidesToShow: 3,
                            },
                          },
                          {
                            breakpoint: 480,
                            settings: {
                              arrows: false,
                              centerMode: true,
                              centerPadding: "40px",
                              slidesToShow: 1,
                            },
                          },
                        ],
                      });
                }
           
            clearInterval(intSliderInterval);
        }
        
        if(intRunsTime === 70){
            clearInterval(intSliderInterval);
        }
    },50);
}