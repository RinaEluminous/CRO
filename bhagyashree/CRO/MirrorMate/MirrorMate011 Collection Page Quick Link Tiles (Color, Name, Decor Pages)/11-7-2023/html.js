<div class="custProdustsSliderMF">
    <div class="container">
    <div class="custColorProducts">
        <div>
            <a href="https://www.mirrormate.com/collections/wood-tones">
                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/wood-tones.jpg">
                <span>Wood Tones</span>
                </a>
        </div>        
        <div>
            <a href="https://www.mirrormate.com/collections/wood-tones">
                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-white.jpg">
                <span>White</span>
                </a>
        </div>        
        <div>
            <a href="https://www.mirrormate.com/collections/wood-tones">
                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-silver.jpg">
                <span>Silver</span>
                </a>
        </div>        
        <div>
            <a href="https://www.mirrormate.com/collections/wood-tones">
                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-black.jpg">
                <span>Black</span>
                </a>
        </div>        
        <div>
            <a href="https://www.mirrormate.com/collections/wood-tones">
                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-bronze.jpg">
                <span>Bronze</span>
                </a>
        </div>        
        <div>
            <a href="https://www.mirrormate.com/collections/wood-tones">
                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-cherry-red.jpg">
                <span>Cherry / Red</span>
                </a>
        </div>        
        <div>
            <a href="https://www.mirrormate.com/collections/wood-tones">
                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-gold-champagne.jpg">
                <span>Gold / Champagne</span>
                </a>
        </div>        
        <div>
            <a href="https://www.mirrormate.com/collections/wood-tones">
                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-metallic.jpg">
                <span>Metallic</span>
                </a>
        </div>       
        <div>
            <a href="https://www.mirrormate.com/collections/wood-tones">
                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-paintable.jpg">
                <span>Paintable</span>
                </a>
        </div>
        </div>
    </div>    
</div>

if (jQuery('#custPopulerColorslick').length == 0) {
                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" id="custSwiperSliderJS"></script>');
            }
            if(jQuery('#custPopulerColorslick   ').length == 0){
                jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" id="custSwiperSliderCSS" />');
} 
jQuery(".custColorProducts").slick({
                slidesToShow: 9,
                infinite: true,
                dots: false,
                arrows: true,
                centerPadding: '0',
                infinite: true,
                centerMode: true, 
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {  
                            centerPadding: '70px',
                            slidesToShow: 7
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {  
                            centerPadding: '50px',
                            slidesToShow: 5
                        }
                    },
                    {
                      breakpoint: 640,
                      settings: {  
                        centerPadding: '40px',
                        slidesToShow: 3
                      }
                    }
                ]
                });