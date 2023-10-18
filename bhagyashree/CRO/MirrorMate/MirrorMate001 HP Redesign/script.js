if (jQuery('#custPopulerColorslick').length == 0) {
    jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" id="custSwiperSliderJS"></script>');
    }
    if(jQuery('#custPopulerColorslick   ').length == 0){
        jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" id="custSwiperSliderCSS" />');
    } 

jQuery(".custPopulerColorslick").slick({
    slidesToShow: 6,
    infinite: true,
    dots: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 3
            }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
    ]
    });

    jQuery(".custReviewSlider").slick({
    slidesToShow: 3,
    infinite: true,
    dots: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 3
            }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
    ]
    });


    jQuery(".custCustomersVideo").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    centerPadding: '25px',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 3
            }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        }
    ]
    });