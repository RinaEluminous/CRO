console.log('above windows onload');
window.onload = function() {
   
console.log('in windows onload');
    if( document.querySelectorAll('.template-product').length > 0){
        
        console.log('test working ornot ');
        addStickyFooterOnPdp();
        
        addVideoInsliderOnPDP();
        // setTimeout(function(){
        //     if (document.querySelector('.custMainSliderRealResultImg')) {
        //         console.log('custMainSliderRealResultImg >>>>>>>')
        //         addVideoInsliderOnPDP();
        //     } 
        // },1500);
        highlightSocialProofOnPDP();

        if(window.innerWidth <= 767) { 
           // highlightSocialProofOnPDPMob();
        }

        AllClickOperations();
    }
   
};

function highlightSocialProofOnPDP(){
    var hostname = window.location.hostname;
      //-----Our customer stories section -----

    const customerStoriesSection = document.querySelector('.our-customer-stories-section');

        if (customerStoriesSection) {
            const shopifyCustomerStoriesSection = customerStoriesSection.closest('.shopify-section');
            if (shopifyCustomerStoriesSection) {
                shopifyCustomerStoriesSection.classList.add('custStoriesSection');
            } 
    }

    // replace the headline
    var storiesSectionHeading = document.querySelector('.custStoriesSection .customer-stories-heading');

    if (hostname.includes('es')) {
    storiesSectionHeading.textContent = "Escucha lo que nuestras clientes están diciendo"
    }else{
    storiesSectionHeading.textContent = "Hear What Our Customers Are Saying"
    }

    var customerContentElement = document.querySelector('.customer-content');
    if (hostname.includes('es')) {
      customerContentElement.outerHTML = '<div class="custCustomerContentV1">' +
          '    <div class="custVideoDetailsV1 custFirstVideo">' +
          '        <video id="firstVideo" class="custVideoPlayer" autoplay playsinline muted poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">' +
          '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4">' +
          '        </video>' +
          '        <p>"La diferencia en mi piel fue excepcional."</p>' +
          '    </div>' +
          '    <div class="custVideoDetailsV1 custSecondVideo">' +
          '        <video id="secondVideo" class="custVideoPlayer" playsinline poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-2.png">' +
          '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles+2.mov" type="video/mp4">' +
          '        </video>' +
          '        <p>"Mi cabello es más brillante, más grueso y crece más rápido."</p>' +
          '    </div>' +
          '</div>';
    }else{

        customerContentElement.outerHTML = '<div class="custCustomerContentV1">' +
        '    <div class="custVideoDetailsV1 custFirstVideo">' +
        '        <video id="firstVideo" class="custVideoPlayer" autoplay playsinline muted poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">' +
        '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4">' +
        '        </video>' +
        '        <p>"The difference in my skin was exceptional."</p>' +
        '    </div>' +
        '    <div class="custVideoDetailsV1 custSecondVideo">' +
        '        <video id="secondVideo" class="custVideoPlayer" playsinline poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-2.png">' +
        '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles+2.mov" type="video/mp4">' +
        '        </video>' +
        '        <p>"My hair is shinier, thicker, and growing faster."</p>' +
        '    </div>' +
        '</div>';

    }

          //----- Features logo section 

          var featureLogoSection = document.querySelector('.vida-logo-with-text');
          if(featureLogoSection){
            var shopifyfeatureLogoSection= featureLogoSection.closest('.shopify-section');
            if(shopifyfeatureLogoSection){
                shopifyfeatureLogoSection.classList.add('custFeatureLogoSection'); 
            }
          }
         //----- Offer section

         var flexIconSection = document.querySelector('.flex-icons');
         if(flexIconSection){
            flexIconSection.classList.add('custflexIconSection');
         }

         //repositioning the Features logo section 
        var featureLogoSectionElement = document.querySelector('.custFeatureLogoSection');
        flexIconSection.insertAdjacentElement('afterend',featureLogoSectionElement);

         //-----repositioning Delia and Gloria section 
         var myVidaBeforeAfterElement = document.querySelector('.myvida_before_after_pdp');
         if(myVidaBeforeAfterElement){
         var shopifyMyVidaBeforeAfterElement = myVidaBeforeAfterElement.closest('.shopify-section');
            if(shopifyMyVidaBeforeAfterElement){
                shopifyMyVidaBeforeAfterElement.classList.add('custDeliaGloriaSection')
            }
         }

        //  add class to the hero section 
        var heroSection = document.querySelector('.new-custom-product');
        if(heroSection){
            heroSection.classList.add('custNewProduct');
        }
        var deliaGloriaSectionSection = document.querySelector('.custDeliaGloriaSection');

        var newProductElement =document.querySelector('.custNewProduct');

        newProductElement.insertAdjacentElement('afterend',deliaGloriaSectionSection);
       

          //----- 78 reviews replacement text
          setTimeout(function(){

            var jdgmPrevTextElement = document.querySelector('.jdgm-prev-badge__text');

            if(jdgmPrevTextElement){
               if (hostname.includes('es')) {
               jdgmPrevTextElement.textContent = "Con la confianza de más de 900.000 personas";
               }else{
                   jdgmPrevTextElement.textContent = "Trusted By Over 900,000+ People";  
               }
            }

          },2000);
        

         //----- replace the description with new one 
         var descriptionParaElement = document.querySelector('.product_short_detail .description p');
         if(descriptionParaElement){
            if (hostname.includes('es')) {
                descriptionParaElement.textContent ="Descubra el equipo ideal para un cabello hermoso, una piel radiante y unas uñas duras como una piedra. Cabello, piel y uñas contiene una mezcla de nuestros ingredientes esenciales: vitamina C, cobre, yodo, biotina, vitamina E, sílice, MSM, palma enana americana, glicina, cisteína y más.";
            }else{

                descriptionParaElement.textContent ="Discover the dream team for beautiful hair, glowing skin, and nails that are hard as a rock. Hair, Skin, & Nails contains a blend of our essential ingredients - Vitamin C, Copper, Iodine, Biotin, Vitamin E, Silica, MSM, Saw Palmetto, Glycine, Cysteine, and more.";
       
            }
         }

         //add class to the fsq section 
         var faqSectionElement =  document.querySelector('.faq-section');
         if(faqSectionElement){
            var shopifyfaqSectionElement = faqSectionElement.closest('.shopify-section');
            shopifyfaqSectionElement.classList.add('custFaqSection');
         }

         const buttons = document.querySelectorAll('.Collapsible .Collapsible__Button');

        buttons.forEach(function(button) {
             if (button.textContent.includes('Frequently Asked Questions')) {
                 button.classList.add('custFaqCollapsibleElement');
             }else if(button.textContent.includes('Preguntas Frecuentes')){
                button.classList.add('custFaqCollapsibleElement');
             }
         });

         //-- Internal Nav html
         if (hostname.includes('es')) {

            var internalNavHtml ='<div class="custInternalNav">'+
                                '    <ul>'+
                                '        <li>'+
                                '            <a data-section="custProduct" class="active">Producto</a>'+
                                '        </li>'+
                                '        <li>'+
                                '            <a data-section="custBenefits">Beneficios</a>'+
                                '        </li>'+
                                '        <li>'+
                                '            <a data-section="custResults">Resultados</a>'+
                                '        </li>'+
                                '        <li>'+
                                '            <a data-section="custScience">Ciencia</a>'+
                                '        </li>'+
                                '        <li>'+
                                '            <a data-section="custReviews">Reseñas</a>'+
                                '        </li>'+
                                '    </ul>'+
                                '</div>';
         

         }else{
            var internalNavHtml ='<div class="custInternalNav">'+
                            '    <ul>'+
                            '        <li>'+
                            '            <a data-section="custProduct" class="active">Product</a>'+
                            '        </li>'+
                            '        <li>'+
                            '            <a  data-section="custBenefits">Benefits</a>'+
                            '        </li>'+
                            '        <li>'+
                            '            <a data-section="custResults">Results</a>'+
                            '        </li>'+
                            '        <li>'+
                            '            <a data-section="custScience">Science</a>'+
                            '        </li>'+
                            '        <li>'+
                            '            <a  data-section="custReviews">Reviews</a>'+
                            '        </li>'+
                            '    </ul>'+
                            '</div>';
         }               

           var templateProductElement = document.querySelector('body.template-product main#main'); 

           if(templateProductElement && document.querySelectorAll('.custInternalNav').length == 0){
            templateProductElement.insertAdjacentHTML('afterbegin',internalNavHtml);
           }
           

              //-- Trusted By Over 900,000+ People
              if (hostname.includes('es')) {
              var trustedByOverHtml='<div class="custTitleWraper">'+
              '    <img src="https://www.myvidaorigins.com/cdn/shop/files/stars_1.png">'+
              '    <h5>Con la confianza de más de 900.000 personas</h5>'+
              '    <p>Vea resultados reales y escuche cómo a otras personas les vuelve a crecer el cabello y las uñas mientras se sienten mejor.</p>'+
              '</div>';
              }else{

                var trustedByOverHtml='<div class="custTitleWraper">'+
                '    <img src="https://www.myvidaorigins.com/cdn/shop/files/stars_1.png">'+
                '    <h5>Trusted by over 900,000+ People</h5>'+
                '    <p>See real results and hear how others are regrowing their hair and nails while feeling their best.</p>'+
                '</div>';

              }

              var delGloriaElement = document.querySelector('.custDeliaGloriaSection'); 

              if(delGloriaElement && document.querySelectorAll('.custTitleWraper').length == 0 ){
                delGloriaElement.insertAdjacentHTML('afterbegin',trustedByOverHtml);
              }
              
            //-- Add classes for redirect sections and add id to that section
            var benefitOfProduct = document.querySelector('.benefits_of_product');
            if(benefitOfProduct){
                var benefitOfProductShopify = benefitOfProduct.closest('.shopify-section');
                benefitOfProductShopify.id = 'custBenefits';
            }

            var resultOfProduct = document.querySelector('.myvida_progress_section');
            if(resultOfProduct){
                var resultOfProductShopify = resultOfProduct.closest('.shopify-section');
                resultOfProductShopify.id = 'custResults';
            }

            var reviewsOfProduct = document.querySelector('.loyal-customer-sec');
            if(reviewsOfProduct){
                var reviewsOfProductShopify = reviewsOfProduct.closest('.shopify-section');
                reviewsOfProductShopify.id = 'custReviews';
            }

            var scienceOfProduct = document.querySelector('.myvida_ingredients_pdp');
            if(scienceOfProduct){
                var scienceOfProductShopify = scienceOfProduct.closest('.shopify-section');
                scienceOfProductShopify.id = 'custScience';
            }
            
            var ProductEl = document.querySelector('.Product');
            if(ProductEl){
                var productShopify = ProductEl.closest('.shopify-section');
                productShopify.id = 'custProduct';
            }
}

// Function to check if the video is playing
function isVideoPlaying(video) {
   return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
}

//custom slick slider

// Function to dynamically load CSS
function loadCSS(url, id) {
    return new Promise((resolve) => {
        if (document.getElementById(id) === null) {
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = url;
            linkElement.id = id;
            linkElement.onload = () => {
                console.log(`CSS loaded: ${url}`);
                resolve();
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
        if (document.getElementById(id) === null) {
            const scriptElement = document.createElement('script');
            scriptElement.src = url;
            scriptElement.id = id;
            scriptElement.onload = () => {
                console.log(`JS loaded: ${url}`);
                resolve();
            };
            scriptElement.onerror = () => {
                console.error(`Failed to load JS: ${url}`);
                reject(new Error(`Failed to load script: ${url}`));
            };
            document.head.appendChild(scriptElement);
        } else {
            console.log(`JS already loaded: ${url}`);
            resolve();
        }
    });
}

function addVideoInsliderOnPDP(){

    var slickSliderHtml ='<div class="custProductGallery">'+
'    <div id="aniimated-thumbnials" class="slider-for">'+
'        <a href="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_600x.png">'+
'            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_600x.png" />'+
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
'        <a data-video='/{"source": [{"src":"https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov", "type":"video/mp4"}], "attributes": {"preload": false, "playsinline": true, "controls": true}}/' data-poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">'+
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



// Load CSS files
Promise.all([
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css', 'custSlickBootstrapeSliderCSS'),
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css', 'custSlickSliderCSS'),
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.4/css/lg-fb-comment-box.min.css', 'custSlickCommentBoxSliderCSS'),
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.4/css/lg-transitions.min.css', 'custSlickTransitionSliderCSS'),
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.4/css/lightgallery.min.css', 'custSlickLightGallerySliderCSS')
])
.then(() => {
    // Load JS files in sequence
    return loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'custJquerySliderJS')
        .then(() => loadJS('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', 'custJqueryUISliderJS'))
        .then(() => loadJS('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js', 'custSlickSliderJS'))
        .then(() => loadJS('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.6.4/js/lightgallery-all.min.js', 'custLightGallerySliderJS'));
})
.then(() => {
    // Check if the libraries are loaded properly
    const checkLibrariesLoaded = () => {
        return new Promise((resolve, reject) => {
            const checkInterval = setInterval(() => {
                let jQueryLoaded = (typeof jQuery !== 'undefined');
                let slickLoaded = (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined');
                let lightGalleryLoaded = (typeof lightGallery !== 'undefined');
                
                console.log(`jQuery loaded: ${jQueryLoaded}`);
                console.log(`Slick loaded: ${slickLoaded}`);
                console.log(`lightGallery loaded: ${lightGalleryLoaded}`);

                if (jQueryLoaded && slickLoaded && lightGalleryLoaded) {
                    clearInterval(checkInterval);
                    console.log('All libraries loaded successfully.');
                    resolve();
                }
            }, 50);
            setTimeout(() => {
                clearInterval(checkInterval);
                reject(new Error('Timeout: Required libraries are not loaded.'));
            }, 200000); 
        });
    };

    return checkLibrariesLoaded();
})
.then(() => {
    // Initialize LightGallery
    const animatedThumbnails = document.getElementById('aniimated-thumbnials');
    if (animatedThumbnails) {
        lightGallery(animatedThumbnails, {
            thumbnail: true,
        });
        console.log('LightGallery initialized.');
    }

    // Initialize Slick sliders
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
})
.catch((error) => {
    console.error('Error loading scripts:', error);
});



}

//existing slider change 

// function addVideoInsliderOnPDP(){
//     var mainImageSliderHtml = '<div id="Media80" tabindex="0" class="Product__SlideItem Product__SlideItem--image Carousel__Cell Product__SlideItem--hidden custMainSliderRealResultImg" data-media-type="image" data-media-id="80" data-media-position="2" data-image-media-position="1">'+
//         '    <div class="AspectRatio AspectRatio--withFallback" style="padding-bottom: 100.0%; --aspect-ratio: 1.0;">'+
//         '        <img class="Image--fadeIn lazyautosizes Image--lazyLoaded" data-widths="[200,400,600,700,800,900,1000,1200,1400,1600]" data-sizes="auto" data-expand="-100" alt="Hair, Skin, &amp; Nails" data-max-width="3000" data-max-height="3000" data-original-src="https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031" data-srcset="https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031" sizes="550px" srcset="https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031, https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031">'+
//         '        <span class="Image__Loader"></span>'+
//         '        <noscript>'+
//         '            <img src="https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031" alt="Hair, Skin, &amp; Nails">'+
//         '        </noscript>'+
//         '    </div>'+
//         '</div>'+
//         '<div id="Media90" tabindex="0" class="Product__SlideItem Product__SlideItem--image Carousel__Cell custMainExceptonalHairVideo" data-media-type="image" data-media-id="90" data-media-position="5" data-image-media-position="4" >'+
//         '    <div class="AspectRatio AspectRatio--withFallback" style="padding-bottom: 100.0%;--aspect-ratio: 1.0;">'+
//         '        <div class="custCustomerContent">'+
//         '            <div class="custVideoDetails">'+
//         '                <video controls="" autoplay="" poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">'+
//         '                    <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4">'+
//         '                </video>'+
//         '            </div>'+
//         '        </div>'+
//         '        <span class="Image__Loader"></span>'+
//         '        <noscript>'+
//         '            <video  autoplay="" poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">'+
//         '                <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4">'+
//         '            </video>'+
//         '        </noscript>'+
//         '    </div>'+
//         '</div>';
   
   
//         var productMainImages = document.querySelectorAll('.flickity-slider .Product__SlideItem');
        
//         if (productMainImages.length > 0 && document.querySelectorAll('.custMainSliderRealResultImg').length == 0) {
//             productMainImages[0].insertAdjacentHTML('afterend', mainImageSliderHtml);
//         }
//          productMainImages.forEach(function(productItem, index) {
             
//                 productItem.setAttribute('data-media-position', index + 1);
//                 productItem.setAttribute('data-image-media-position', index);
//                 var leftPosition = index * 100;
        
//                 productItem.style.position = 'absolute';
//                 productItem.style.left = leftPosition + '%';
//         });
        
//         var productGalleryImgHtml = '<a href="https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031" data-media-id="80" class="Product__SlideshowNavImage AspectRatio custRealResultGalleryImg" style="--aspect-ratio: 1.0">'+
//     '    <img src="https://www.myvidaorigins.com/cdn/shop/files/image_15_84c2f4b8-e68b-4cb6-bf7e-a87414dfbf16.png?v=1715269031" alt="Hair, Skin, &amp; Nails"></a>'+
//     '<a href="//www.myvidaorigins.com/cdn/shop/files/productimage-05_1024x.jpg?v=1713383899" data-media-id="90" class="Product__SlideshowNavImage AspectRatio custExceptonalHairGalleryVideo" style="--aspect-ratio: 1.0">'+
//     '    <div class="custCustomerContent">'+
//     '        <div class="custVideoDetails">'+
//     '            <video  autoplay="" poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">'+
//     '                <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4">'+
//     '            </video>'+
//     '        </div>'+
//     '    </div>'+
//     '</a>';
 
//     var productMainImages = document.querySelectorAll('.Product__SlideshowNavImage');
//     productMainImages.forEach(function(productItem, index) {
//         if (index === 0) {
//             productItem.insertAdjacentHTML('afterend', productGalleryImgHtml);
//         }
//     });
// }

function addStickyFooterOnPdp() {
    var hostname = window.location.hostname;
    // var strmaySaleEventUrl = "/product/test.com";
    if (document.querySelectorAll('.custStickyAddtoCart').length == 0) {

       if (hostname.includes('es')) {
        maySaleEventSticklyHTML = '<div class="custStickyAddtoCart custHide">'+
        '    <div class="container">'+
        '        <div class="productDetailCol">'+
        '            <div class="productImg">'+
        '                <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_600x.png" alt="Pelo piel uñas">'+
        '            </div>'+
        '            <div class="productName">'+
        '                <img src="https://www.myvidaorigins.com/cdn/shop/files/stars_1.png" alt="">'+
        '                <h6>Pelo piel uñas</h6>'+
        '                <div class="mobPrice">$64.99</div>'+
        '            </div>'+
        '        </div>'+
        '        <div class="productPriceCol">'+
        '            <div class="deskPrice">$64.99</div>'+
        '            <div class="buttonBox">'+
        '                <button class="btn custTryTodayBtn">PRUEBA HOY</button>'+
        '                <span>Garantía de 30 días</span>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</div>';
    }else{

        maySaleEventSticklyHTML = '<div class="custStickyAddtoCart custHide">'+
        '    <div class="container">'+
        '        <div class="productDetailCol">'+
        '            <div class="productImg">'+
        '                <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_600x.png" alt="Hair, Skin, & Nails">'+
        '            </div>'+
        '            <div class="productName">'+
        '                <img src="https://www.myvidaorigins.com/cdn/shop/files/stars_1.png" alt="">'+
        '                <h6>Hair, Skin, & Nails</h6>'+
        '                <div class="mobPrice">$64.99</div>'+
        '            </div>'+
        '        </div>'+
        '        <div class="productPriceCol">'+
        '            <div class="deskPrice">$64.99</div>'+
        '            <div class="buttonBox">'+
        '                <button class="btn custTryTodayBtn">TRY tODAY</button>'+
        '                <span>30 day guarantee</span>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</div>';

    }
  
        document.body.insertAdjacentHTML('beforeend', maySaleEventSticklyHTML);
    }

    window.addEventListener('scroll', toggleStickyFooter);
    window.addEventListener('resize', toggleStickyFooter);
}

function toggleStickyFooter() {

console.log('toggleStickyFooter');

const addToCartButtonElement = document.querySelector('.template-product .ProductForm__BuyButtons');
const stickyFooterElement = document.querySelector('.custStickyAddtoCart');
const custInternalNavElement = document.querySelector('.custInternalNav'); 

if (addToCartButtonElement && stickyFooterElement && custInternalNavElement) {
    const addToCartPosition = addToCartButtonElement.getBoundingClientRect().bottom;
    const custInternalNavPosition = custInternalNavElement.getBoundingClientRect().bottom;

    if (addToCartPosition < custInternalNavPosition) {
        console.log('addToCartPosition is below custInternalNav');
        stickyFooterElement.classList.add('custShow');
        stickyFooterElement.classList.remove('custHide');
    } else {
        stickyFooterElement.classList.add('custHide');
        stickyFooterElement.classList.remove('custShow');
    }
}

}

//redirect functionality for all tab
function redirectTab(tabElement,fixedHeaderHeight,sectionId) {
    if (tabElement) {
     targetSectionElement  = tabElement;
    }else{
    targetSectionElement  =  document.getElementById(sectionId);
    } 

    const offsetTop = targetSectionElement.getBoundingClientRect().top + window.pageYOffset - fixedHeaderHeight;
    console.log('Offset top:', offsetTop);
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Your click operations here
function AllClickOperations() {
    //sticky footer try now btn functionality
    const tryItTodayButton = document.querySelector('.custTryTodayBtn');
    tryItTodayButton.addEventListener('click', () => {
        console.log('click working or not');
         const addToCartButton = document.querySelector('.ProductForm__BuyButtons .ProductForm__AddToCart');
        if (addToCartButton) {
            addToCartButton.click();
        } 
    });

    // video play/pause functionality 
    var firstVideo = document.querySelector('#firstVideo');
    var secondVideo = document.querySelector('#secondVideo');

    // Autoplay first video if not already playing
    if (!isVideoPlaying(firstVideo)) {
        firstVideo.play().catch(error => {
        });
    }

    // Event listener for clicks
    document.addEventListener('click', function (event) {
        if (event.target === firstVideo) {
            // Toggle play/pause for first video only
            if (firstVideo.paused) {
                firstVideo.play().catch(error => {
                  
                });
            } else {
                
                firstVideo.pause();
            }
        } else if (event.target === secondVideo) {
            // Toggle play/pause for second video only
            if (secondVideo.paused) {
               
                secondVideo.play().catch(error => {
                  
                });
            } else {
               
                secondVideo.pause();
            }
        }
    });

    //Frequently asked question text functionality for redirection 
    const faqCollapsibleElement = document.querySelector('.custFaqCollapsibleElement');

    if (faqCollapsibleElement) {
        faqCollapsibleElement.addEventListener('click', () => {
            console.log('click working or not');
            const faqSectionElement = document.querySelector('.custFaqSection');
            if (faqSectionElement) {
              const fixedHeaderHeight = 200;
              redirectTab(faqSectionElement,fixedHeaderHeight);
            } 
        });
    }

    //Internal nav click
    document.querySelectorAll('.custInternalNav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            // Remove 'active' class from all links
            document.querySelectorAll('.custInternalNav a').forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');
            console.log('tabElement>>',sectionId);
            const fixedHeaderHeight = 200; 
            redirectTab('', fixedHeaderHeight,sectionId);
        });
    });
}