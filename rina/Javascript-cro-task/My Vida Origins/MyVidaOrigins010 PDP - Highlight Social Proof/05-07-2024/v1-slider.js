(function() {
    console.error('javascript initially invoke function');

    // Function to dynamically load CSS
    function loadCSS(url, id) {
        return new Promise((resolve, reject) => {
            if (!document.getElementById(id)) {
                const linkElement = document.createElement('link');
                linkElement.rel = 'stylesheet';
                linkElement.href = url;
                linkElement.id = id;
                linkElement.onload = () => {
                    console.log(`CSS loaded: ${url}`);
                    resolve();
                };
                linkElement.onerror = () => {
                    console.error(`Failed to load CSS: ${url}`);
                    reject(new Error(`Failed to load CSS: ${url}`));
                };
                document.head.appendChild(linkElement);
            } else {
                console.log(`CSS already loaded: ${url}`);
                resolve();
            }
        });
    }

    // Function to dynamically load JS and return a promise
    function loadJS(url, id) {
        return new Promise((resolve, reject) => {
            if (!document.getElementById(id)) {
                const scriptElement = document.createElement('script');
                scriptElement.src = url;
                scriptElement.id = id;
                scriptElement.async = true;
                scriptElement.onload = () => {
                    console.log(`JS loaded: ${url}`);
                    resolve();
                };
                scriptElement.onerror = () => {
                    console.error(`Failed to load JS: ${url}`);
                    reject(new Error(`Failed to load JS: ${url}`));
                };
                document.head.appendChild(scriptElement);
            } else {
                console.log(`JS already loaded: ${url}`);
                resolve();
            }
        });
    }

    // Function to initialize LightGallery
    function initializeLightGallery() {
        console.log('Initializing LightGallery and Slick sliders...');
        var videoSectionHtml ='{"source": [{"src":"https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov", "type":"video/mp4"}], "attributes": {"preload": false, "playsinline": true, "controls": true}}';

        var slickSliderHtml ='<div class="custProductGallery">'+
        '    <div id="aniimated-thumbnials" class="slider-for">'+
        '        <a href="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_600x.png">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_600x.png" />'+
        '<div class="custReviewNote">"My hair is shinier, thicker, and growing faster."</div>'+
        '        </a>'+
        '        <a href="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_B_002_600x.png?v=1704738798">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_B_002_600x.png?v=1704738798" />'+
        '        </a>'+
        '        <a href="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_C_002_600x.png?v=1704738798">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_C_002_600x.png?v=1704738798" />'+
        '        </a>'+
        '        <a href="https://www.myvidaorigins.com/cdn/shop/files/productimage-05_600x.jpg?v=1713383899">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/productimage-05_600x.jpg?v=1713383899" />'+
        '        </a>'+
        '        <a href="https://www.myvidaorigins.com/cdn/shop/files/ProductPhoto_600x.jpg?v=1713383899">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/ProductPhoto_600x.jpg?v=1713383899" alt="Alt">'+
        '        </a>'+
        '        <a href="https://www.myvidaorigins.com/cdn/shop/files/suppfacts_600x.jpg?v=1713383883">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/suppfacts_600x.jpg?v=1713383883" alt="Alt">'+
        '        </a>'+
        '        <a data-video='+videoSectionHtml+' data-poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">'+
        '            <video id="firstVideo" class="custVideoPlayer" autoplay="" playsinline="" muted="" poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">'+
        '                <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4"></video>'+
        '        </a>'+
        '    </div>'+
        '    <div class="slider-nav">'+
        '        <div class="item-slick">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_600x.png" alt="Alt">'+
        '        </div>'+
        '        <div class="item-slick">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_B_002_600x.png?v=1704738798" alt="Alt">'+
        '        </div>'+
        '        <div class="item-slick">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_C_002_600x.png?v=1704738798" alt="Alt">'+
        '        </div>'+
        '        <div class="item-slick">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/productimage-05_600x.jpg?v=1713383899" alt="Alt">'+
        '        </div>'+
        '        <div class="item-slick">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/ProductPhoto_600x.jpg?v=1713383899" alt="Alt">'+
        '        </div>'+
        '        <div class="item-slick">'+
        '            <img src="https://www.myvidaorigins.com/cdn/shop/files/suppfacts_600x.jpg?v=1713383883" alt="Alt">'+
        '        </div>'+
        '        <div class="item-slick">'+
        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png" alt="">'+
        '        </div>'+
        '    </div>'+
        '</div>';
        
        var productGalleryEle =document.querySelector('.Product__Gallery');
        if(productGalleryEle && document.querySelectorAll('.custProductGallery').length==0){
            productGalleryEle.insertAdjacentHTML('afterbegin',slickSliderHtml);
        }

        const animatedThumbnails = document.getElementById('aniimated-thumbnials');
        if (animatedThumbnails && typeof lightGallery !== 'undefined') {
            lightGallery(animatedThumbnails, {
                thumbnail: true,
            });
            console.log('LightGallery initialized.');
        } else {
            console.error('Error: lightGallery is not defined or animatedThumbnails not found.');
        }

        // Initialize Slick sliders
        if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
            const sliderFor = jQuery('.slider-for');
            const sliderNav = jQuery('.slider-nav');

            if (sliderFor.length && sliderNav.length) {
                sliderFor.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    fade: true,
                    adaptiveHeight: false,
                    asNavFor: '.slider-nav'
                });
                console.log('Main slider initialized.');

                sliderNav.slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    arrows: false,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: true,
                    variableWidth: true
                });
                console.log('Nav slider initialized.');
            }
        } else {
            console.error('Error: jQuery or Slick is not defined.');
        }
    }

    // Load all required CSS and JS files in sequence
    Promise.all([
        loadCSS('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css', 'custSlickBootstrapeSliderCSS'),
        loadCSS('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css', 'custSlickSliderCSS'),
        loadCSS('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.4/css/lg-fb-comment-box.min.css', 'custSlickCommentBoxSliderCSS'),
        loadCSS('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.4/css/lg-transitions.min.css', 'custSlickTransitionSliderCSS'),
        loadCSS('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.4/css/lightgallery.min.css', 'custSlickLightGallerySliderCSS')
    ])
    .then(() => {
        return loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'custJquerySliderJS');
    })
    .then(() => {
        return loadJS('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', 'custJqueryUISliderJS');
    })
    .then(() => {
        return loadJS('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js', 'custSlickSliderJS');
    })
    .then(() => {
        return loadJS('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.4/js/lightgallery-all.min.js', 'custLightGallerySliderJS');
    })
    .then(() => {
        // Initialize after all scripts are loaded
        initializeLightGallery();
    })
    .catch((error) => {
        console.error('Error loading scripts:', error);
    });

})();
