window.onload = function () {
    if (document.querySelectorAll('.template-product').length > 0) {
        addStickyFooterOnPdp();
        highlightSocialProofOnPDP();
        addMainFlickitySlider();
        var popupShow = document.querySelector('.popup.show');
        if (popupShow) {
            document.body.classList.add('custNoScroll');
        }
        AllClickOperations();
    }

};

function highlightSocialProofOnPDP() {
    var hostname = window.location.hostname;
    //add class to the top header
    var topHeader = document.querySelector('#fsb_container');
    if (topHeader) {
        if (hostname.includes('es')) {
            topHeader.classList.add('custTopHeaderV1');
        } else {
            topHeader.classList.add('custTopHeaderV1');
        }
    }
    //-----Our customer stories section -----
    const customerStoriesSection = document.querySelector('.our-customer-stories-section');
    if (customerStoriesSection) {
       customerStoriesSection.classList.add('custStoriesSection');
       
    }
    // replace the headline
    var storiesSectionHeading = document.querySelector('.custStoriesSection .customer-stories-heading');
    if (hostname.includes('es')) {
        storiesSectionHeading.textContent = "Escucha lo que nuestras clientes están diciendo"
    } else {
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
    } else {
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
    if (featureLogoSection) {
        var shopifyfeatureLogoSection = featureLogoSection.closest('.shopify-section');
        if (shopifyfeatureLogoSection) {
            shopifyfeatureLogoSection.classList.add('custFeatureLogoSection');
        }
    }
    //----- Offer section
    var flexIconSection = document.querySelector('.flex-icons');
    if (flexIconSection) {
        flexIconSection.classList.add('custflexIconSection');
    }
    //repositioning the Features logo section 
    var featureLogoSectionElement = document.querySelector('.custFeatureLogoSection');
    flexIconSection.insertAdjacentElement('afterend', featureLogoSectionElement);

    //-----repositioning Delia and Gloria section 
    var myVidaBeforeAfterElement = document.querySelector('.myvida_before_after_pdp');
    if (myVidaBeforeAfterElement) {
        var shopifyMyVidaBeforeAfterElement = myVidaBeforeAfterElement.closest('.shopify-section');
        if (shopifyMyVidaBeforeAfterElement) {
            shopifyMyVidaBeforeAfterElement.classList.add('custDeliaGloriaSection')
        }
    }

    //  add class to the hero section 
    var heroSection = document.querySelector('.new-custom-product');
    if (heroSection) {
        heroSection.classList.add('custNewProduct');
    }
    var deliaGloriaSectionSection = document.querySelector('.custDeliaGloriaSection');

    var newProductElement = document.querySelector('.custNewProduct');

    newProductElement.insertAdjacentElement('afterend', deliaGloriaSectionSection);


    //----- 78 reviews replacement text
    setTimeout(function () {

        var jdgmPrevTextElement = document.querySelector('.jdgm-prev-badge__text');

        if (jdgmPrevTextElement) {
            if (hostname.includes('es')) {
                jdgmPrevTextElement.textContent = "Con la confianza de más de 900.000 personas";
            } else {
                jdgmPrevTextElement.textContent = "Trusted By Over 900,000+ People";
            }
        }

    }, 2000);


    //----- replace the description with new one 
    var descriptionParaElement = document.querySelector('.product_short_detail .description p');
    if (descriptionParaElement) {
        if (hostname.includes('es')) {
            descriptionParaElement.textContent = "Descubra el equipo ideal para un cabello hermoso, una piel radiante y unas uñas duras como una piedra. Cabello, piel y uñas contiene una mezcla de nuestros ingredientes esenciales: vitamina C, cobre, yodo, biotina, vitamina E, sílice, MSM, palma enana americana, glicina, cisteína y más.";
        } else {

            descriptionParaElement.textContent = "Discover the dream team for beautiful hair, glowing skin, and nails that are hard as a rock. Hair, Skin, & Nails contains a blend of our essential ingredients - Vitamin C, Copper, Iodine, Biotin, Vitamin E, Silica, MSM, Saw Palmetto, Glycine, Cysteine, and more.";

        }
    }

    //add class to the fsq section 
    var faqSectionElement = document.querySelector('.faq-section');
    if (faqSectionElement) {
        var shopifyfaqSectionElement = faqSectionElement.closest('.shopify-section');
        shopifyfaqSectionElement.classList.add('custFaqSection');
    }

    const buttons = document.querySelectorAll('.Collapsible .Collapsible__Button');

    buttons.forEach(function (button) {
        if (button.textContent.includes('Frequently Asked Questions')) {
            button.classList.add('custFaqCollapsibleElement');
        } else if (button.textContent.includes('Preguntas Frecuentes')) {
            button.classList.add('custFaqCollapsibleElement');
        }
    });

    //-- Internal Nav html
    if (hostname.includes('es')) {

        var internalNavHtml = '<div class="custInternalNav">' +
            '    <ul>' +
            '        <li>' +
            '            <a data-section="custProduct" class="active">Producto</a>' +
            '        </li>' +
            '        <li>' +
            '            <a data-section="custBenefits">Beneficios</a>' +
            '        </li>' +
            '        <li>' +
            '            <a data-section="custResults">Resultados</a>' +
            '        </li>' +
            '        <li>' +
            '            <a data-section="custScience">Ciencia</a>' +
            '        </li>' +
            '        <li>' +
            '            <a data-section="custReviews">Reseñas</a>' +
            '        </li>' +
            '    </ul>' +
            '</div>';


    } else {
        var internalNavHtml = '<div class="custInternalNav">' +
            '    <ul>' +
            '        <li>' +
            '            <a data-section="custProduct" class="active">Product</a>' +
            '        </li>' +
            '        <li>' +
            '            <a  data-section="custBenefits">Benefits</a>' +
            '        </li>' +
            '        <li>' +
            '            <a data-section="custResults">Results</a>' +
            '        </li>' +
            '        <li>' +
            '            <a data-section="custScience">Science</a>' +
            '        </li>' +
            '        <li>' +
            '            <a  data-section="custReviews">Reviews</a>' +
            '        </li>' +
            '    </ul>' +
            '</div>';
    }

    var templateProductElement = document.querySelector('body.template-product main#main');

    if (templateProductElement && document.querySelectorAll('.custInternalNav').length == 0) {
        templateProductElement.insertAdjacentHTML('afterbegin', internalNavHtml);
    }


    //-- Trusted By Over 900,000+ People
    if (hostname.includes('es')) {
        var trustedByOverHtml = '<div class="custTitleWraper">' +
            '    <img src="https://www.myvidaorigins.com/cdn/shop/files/stars_1.png">' +
            '    <h5>Con la confianza de más de 900.000 personas</h5>' +
            '    <p>Vea resultados reales y escuche cómo a otras personas les vuelve a crecer el cabello y las uñas mientras se sienten mejor.</p>' +
            '</div>';
    } else {

        var trustedByOverHtml = '<div class="custTitleWraper">' +
            '    <img src="https://www.myvidaorigins.com/cdn/shop/files/stars_1.png">' +
            '    <h5>Trusted by over 900,000+ People</h5>' +
            '    <p>See real results and hear how others are regrowing their hair and nails while feeling their best.</p>' +
            '</div>';

    }

    var delGloriaElement = document.querySelector('.custDeliaGloriaSection');

    if (delGloriaElement && document.querySelectorAll('.custTitleWraper').length == 0) {
        delGloriaElement.insertAdjacentHTML('afterbegin', trustedByOverHtml);
    }

    //-- Add classes for redirect sections and add id to that section
    var benefitOfProduct = document.querySelector('.benefits_of_product');
    if (benefitOfProduct) {
        var benefitOfProductShopify = benefitOfProduct.closest('.shopify-section');
        benefitOfProductShopify.id = 'custBenefits';
    }

    var resultOfProduct = document.querySelector('.myvida_progress_section');
    if (resultOfProduct) {
        var resultOfProductShopify = resultOfProduct.closest('.shopify-section');
        resultOfProductShopify.id = 'custResults';
    }

    var reviewsOfProduct = document.querySelector('.loyal-customer-sec');
    if (reviewsOfProduct) {
        var reviewsOfProductShopify = reviewsOfProduct.closest('.shopify-section');
        reviewsOfProductShopify.id = 'custReviews';
    }

    var scienceOfProduct = document.querySelector('.myvida_ingredients_pdp');
    if (scienceOfProduct) {
        var scienceOfProductShopify = scienceOfProduct.closest('.shopify-section');
        scienceOfProductShopify.id = 'custScience';
    }

    var ProductEl = document.querySelector('.Product');
    if (ProductEl) {
        var productShopify = ProductEl.closest('.shopify-section');
        productShopify.id = 'custProduct';
    }

    //reposition of customer stories section
    var deliaGloriaSectionElement = document.querySelector('.custDeliaGloriaSection');
    var storiesSectionElement = document.querySelector('.custStoriesSection');

    if (deliaGloriaSectionElement && storiesSectionElement) {
        deliaGloriaSectionElement.insertAdjacentElement('afterend', storiesSectionElement);
    }

    //repositioning money back garantee
    var moneyBackGarantee = document.querySelector('.money-back-guarantee');
    var featureLogoSectionEl =document.querySelector('.custFeatureLogoSection');
    if(moneyBackGarantee && featureLogoSectionEl){
        featureLogoSectionEl.insertAdjacentElement('beforebegin',moneyBackGarantee);
    }

    //add display none class for fifty-col
    var fiftyCols = document.querySelectorAll('.fifty-col');
    if (fiftyCols.length >= 2) {
        fiftyCols[1].style.display = 'none';
    }

}

function addMainFlickitySlider() {

    var hostname = window.location.hostname;
    if (hostname.includes('es')) {
        reviewNoteHtml = '<p class="custReviewNote">"Mi cabello es más brillante, más grueso y crece más rápido."</p>';
    } else {
        reviewNoteHtml = '<p class="custReviewNote">"My hair is shinier, thicker, and growing faster."</p>';
    }

    var productGalleryElement = document.querySelector('.Product__Gallery');
    if (productGalleryElement) {
        productGalleryElement.outerHTML = '<div class="main-gallery" data-flickity=\'{ "wrapAround": true, "pageDots": false }\'>' +
            '    <div class="gallery-cell">' +
            '        <a href="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_800x.png?v=1704738798" class="popup-trigger">' +
            '            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_800x.png?v=1704738798" alt="Image 1">' + reviewNoteHtml +
            '        </a>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <a href="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/before-after-img-1.jpg" class="popup-trigger">' +
            '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/before-after-img-1.jpg" alt="Image 2">' +
            '        </a>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <a href="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" class="popup-trigger">' +
            '            <video width="100%" height="100%" controls playsinline poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">' +
            '                <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4">' +
            '            </video>' +
            '        </a>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <a href="https://www.myvidaorigins.com/cdn/shop/files/productimage-05_800x.jpg?v=1713383899" class="popup-trigger">' +
            '            <img src="https://www.myvidaorigins.com/cdn/shop/files/productimage-05_800x.jpg?v=1713383899" alt="Image 3">' +
            '        </a>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <a href="https://www.myvidaorigins.com/cdn/shop/files/suppfacts_800x.jpg?v=1713383883" class="popup-trigger">' +
            '            <img src="https://www.myvidaorigins.com/cdn/shop/files/suppfacts_800x.jpg?v=1713383883" alt="Image 4">' +
            '        </a>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <a href="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles+2.mov" class="popup-trigger">' +
            '            <video width="100%" height="100%" controls poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-2.png">' +
            '                <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles+2.mov" type="video/mp4">' +
            '            </video>' +
            '        </a>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <a href="https://www.myvidaorigins.com/cdn/shop/files/ProductPhoto_800x.jpg?v=1713383899" class="popup-trigger">' +
            '            <img src="https://www.myvidaorigins.com/cdn/shop/files/ProductPhoto_800x.jpg?v=1713383899" alt="Image 4">' +
            '        </a>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <a href="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_B_002_800x.png?v=1704738798" class="popup-trigger">' +
            '            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_B_002_800x.png?v=1704738798" alt="Image 4">' +
            '        </a>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <a href="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_C_002_800x.png?v=1704738798" class="popup-trigger">' +
            '            <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_C_002_800x.png?v=1704738798" alt="Image 4">' +
            '        </a>' +
            '    </div>' +
            '</div>' +
            '<div class="thumbnail-gallery" data-flickity=\'{ "asNavFor": ".main-gallery", "contain": true, "pageDots": false }\'>' +
            '    <div class="gallery-cell">' +
            '        <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_800x.png" alt="Image 1">' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/before-after-img-1.jpg" alt="Image 2">' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <video width="100%" height="100%" controls playsinline poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">' +
            '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4">' +
            '        </video>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <img src="https://www.myvidaorigins.com/cdn/shop/files/productimage-05_800x.jpg?v=1713383899" alt="Image 3">' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <img src="https://www.myvidaorigins.com/cdn/shop/files/suppfacts_800x.jpg?v=1713383883" alt="Image 4">' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <video width="100%" height="100%" controls playsinline poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-2.png">' +
            '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles+2.mov" type="video/mp4">' +
            '        </video>' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <img src="https://www.myvidaorigins.com/cdn/shop/files/ProductPhoto_800x.jpg?v=1713383899" alt="Image 4">' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_B_002_600x.png?v=1704738798" alt="Image 4">' +
            '    </div>' +
            '    <div class="gallery-cell">' +
            '        <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_C_002_600x.png?v=1704738798" alt="Image 4">' +
            '    </div>' +
            '</div>' +
            '<div class="overlay"></div>' +
            '<div class="popup">' +
            '    <div class="popup-content">' +
            '        <div class="close"><svg class="Icon Icon--close " role="presentation" viewBox="0 0 16 14">' +
            '                <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>' +
            '            </svg></div>' +
            '        <div class="nav-arrow prev"><svg class="Icon Icon--arrow-left" viewBox="0 0 100 100"><path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" class="arrow"></path></svg></div>' +
            '        <div class="nav-arrow next"><svg class="Icon Icon--arrow-right" viewBox="0 0 100 100"><path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></div>' +
            '        <div class="popup-body">' +
            '            <!-- Dynamic content goes here -->' +
            '        </div>' +
            '    </div>' +
            '</div>';

    }

    if (document.querySelectorAll('.custFlickitySliderJS').length == 0) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.2/flickity.pkgd.min.js';
        scriptElement.id = 'custFlickitySliderJS';
        document.head.appendChild(scriptElement);
    }

    if (document.querySelectorAll('.custFlickitySliderCSS').length == 0) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.2/flickity.min.css';
        linkElement.id = 'custFlickitySliderCSS';
        document.head.appendChild(linkElement);
    }


    // Initialize Flickity for main gallery
    var mainGallery = document.querySelector('.main-gallery');
    var flickityMain = new Flickity(mainGallery, {
        wrapAround: true,
        pageDots: false
    });

    // Initialize Flickity for thumbnail gallery
    var thumbnailGallery = document.querySelector('.thumbnail-gallery');
    var flickityThumb = new Flickity(thumbnailGallery, {
        asNavFor: '.main-gallery',
        contain: true,
        pageDots: false,
        loop: false
    });

    var currentIndex = 0;
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.overlay');
    var popupBody = document.querySelector('.popup-body');

    var nextbtnElement = document.querySelector('.main-gallery .flickity-prev-next-button.next svg');
    if (nextbtnElement) {
        nextbtnElement.outerHTML = '<svg viewBox="0 0 100 100"><path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>';
    }

    var prevbtnElement = document.querySelector('.main-gallery .flickity-prev-next-button.previous svg');

    if (prevbtnElement) {
        prevbtnElement.outerHTML = '<svg viewBox="0 0 100 100"><path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" class="arrow"></path></svg>';
    }

    // Function to show popup with video or image
    function showPopup(index) {
        if (!(window.innerWidth <= 767)) {
           
            currentIndex = index;
            var currentCell = mainGallery.querySelectorAll('.gallery-cell')[currentIndex];
            var content;

            // Check if the current cell contains a video
            if (currentCell.querySelector('video')) {
                content = '<video width="100%" height="100%" autoplay controls poster="' +
                    currentCell.querySelector('video').getAttribute('poster') + '">' +
                    '<source src="' + currentCell.querySelector('video source').getAttribute('src') + '" type="video/mp4">' +
                    'Your browser does not support the video tag.' +
                    '</video>';
            } else {
                content = '<img src="' + currentCell.querySelector('img').getAttribute('src') + '" alt="Popup Image">';
            }

            popupBody.innerHTML = content;
            popup.classList.add('show');
            document.body.classList.add('custNoScroll');
            overlay.classList.add('show');
            const popupImgElement = document.querySelector('.popup-content img');
            if (popupImgElement) {
                popupImgElement.classList.add('custPopupImg');
            }


        }
    }

    // Function to hide popup
    function hidePopup() {
        popup.classList.remove('show');
        document.body.classList.remove('custNoScroll');
        overlay.classList.remove('show');
        popupBody.innerHTML = '';
        const popupContent = document.querySelector('.popup-content');
        const popupContentImg = document.querySelector('.custPopupImg');
        if(popupContentImg){
            popupContentImg.classList.remove('zoomed');
        }
    }

    // Function to show next item in popup
    function showNext() {
      
        currentIndex = (currentIndex + 1) % mainGallery.querySelectorAll('.gallery-cell').length;
        var popupShow = document.querySelector('.popup.show');
        if (popupShow) {
            document.body.classList.add('custNoScroll');
        }
        showPopup(currentIndex);


    }

    // Function to show previous item in popup
    function showPrev() {
      
        currentIndex = (currentIndex - 1 + mainGallery.querySelectorAll('.gallery-cell').length) % mainGallery.querySelectorAll('.gallery-cell').length;

        var popupShow = document.querySelector('.popup.show');
        if (popupShow) {
            document.body.classList.add('custNoScroll');
        }
        showPopup(currentIndex);

    }

    document.querySelectorAll('.popup-trigger').forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            var popupShow = document.querySelector('.popup.show');
            if (popupShow) {
                document.body.classList.add('custNoScroll');
            }
            e.preventDefault();
            // Pause video in the currently selected gallery cell
            var selectedCell = document.querySelector('.gallery-cell.is-selected');
            var selectedVideo = selectedCell.querySelector('video');
            if (selectedVideo) {
                selectedVideo.pause();
            }
            // Determine the index of the clicked gallery cell
            var index = Array.prototype.indexOf.call(mainGallery.querySelectorAll('.gallery-cell'), this.closest('.gallery-cell'));

            showPopup(index);


        });
    });


    document.querySelector('.close').addEventListener('click', hidePopup);

    document.querySelector('.nav-arrow.next').addEventListener('click', showNext);

    document.querySelector('.nav-arrow.prev').addEventListener('click', showPrev);

    overlay.addEventListener('click', hidePopup);
}

// Function to check if the video is playing
function isVideoPlaying(video) {
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
}

function addStickyFooterOnPdp() {
    var hostname = window.location.hostname;
    // var strmaySaleEventUrl = "/product/test.com";
    if (document.querySelectorAll('.custStickyAddtoCart').length == 0) {

        if (hostname.includes('es')) {
            maySaleEventSticklyHTML = '<div class="custStickyAddtoCart custHide">' +
                '    <div class="container">' +
                '        <div class="productDetailCol">' +
                '            <div class="productImg">' +
                '                <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_600x.png" alt="Pelo piel uñas">' +
                '            </div>' +
                '            <div class="productName">' +
                '                <img src="https://www.myvidaorigins.com/cdn/shop/files/stars_1.png" alt="">' +
                '                <h6>Cabello, Piel y Uñas</h6>' +
                '                <div class="mobPrice">$64.99</div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="productPriceCol">' +
                '            <div class="deskPrice">$64.99</div>' +
                '            <div class="buttonBox">' +
                '                <button class="btn custTryTodayBtn">PRUEBA HOY</button>' +
                '                <span>Garantía de 30 días</span>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';
        } else {

            maySaleEventSticklyHTML = '<div class="custStickyAddtoCart custHide">' +
                '    <div class="container">' +
                '        <div class="productDetailCol">' +
                '            <div class="productImg">' +
                '                <img src="https://www.myvidaorigins.com/cdn/shop/files/30ct-Hair-Skin-Nails_w-shadow_A_002_600x.png" alt="Hair, Skin, & Nails">' +
                '            </div>' +
                '            <div class="productName">' +
                '                <img src="https://www.myvidaorigins.com/cdn/shop/files/stars_1.png" alt="">' +
                '                <h6>Hair, Skin, & Nails</h6>' +
                '                <div class="mobPrice">$64.99</div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="productPriceCol">' +
                '            <div class="deskPrice">$64.99</div>' +
                '            <div class="buttonBox">' +
                '                <button class="btn custTryTodayBtn">TRY tODAY</button>' +
                '                <span>30 day guarantee</span>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</div>';

        }

        document.body.insertAdjacentHTML('beforeend', maySaleEventSticklyHTML);
    }

    window.addEventListener('scroll', toggleStickyFooter);
    window.addEventListener('resize', toggleStickyFooter);
}

function toggleStickyFooter() {

    const addToCartButtonElement = document.querySelector('.template-product .ProductForm__BuyButtons');
    const stickyFooterElement = document.querySelector('.custStickyAddtoCart');
    const custInternalNavElement = document.querySelector('.custInternalNav');

    if (addToCartButtonElement && stickyFooterElement && custInternalNavElement) {
        const addToCartPosition = addToCartButtonElement.getBoundingClientRect().bottom;
        const custInternalNavPosition = custInternalNavElement.getBoundingClientRect().bottom;

        if (addToCartPosition < custInternalNavPosition) {

            stickyFooterElement.classList.add('custShow');
            stickyFooterElement.classList.remove('custHide');
        } else {
            stickyFooterElement.classList.add('custHide');
            stickyFooterElement.classList.remove('custShow');
        }
    }

}

//redirect functionality for all tab
function redirectTab(tabElement, fixedHeaderHeight, sectionId) {
    if (tabElement) {
        targetSectionElement = tabElement;
    } else {
        targetSectionElement = document.getElementById(sectionId);
    }

    const offsetTop = targetSectionElement.getBoundingClientRect().top + window.pageYOffset - fixedHeaderHeight;

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
            const faqSectionElement = document.querySelector('.custFaqSection');
            if (faqSectionElement) {
                const fixedHeaderHeight = 200;
                redirectTab(faqSectionElement, fixedHeaderHeight);
            }
        });
    }

    //Internal nav click
    document.querySelectorAll('.custInternalNav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            // Remove 'active' class from all links
            document.querySelectorAll('.custInternalNav a').forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');
            const fixedHeaderHeight = 200;
            redirectTab('', fixedHeaderHeight, sectionId);
        });
    });

    //slider section
    document.querySelectorAll('.flickity-prev-next-button').forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
             // Find the currently selected gallery cell
            var selectedCell = document.querySelector('.gallery-cell.is-selected');
            // Find the video element within the selected cell
            var selectedVideo = selectedCell.querySelector('video');

            if (selectedVideo) {
                // Check if video exists
                if (selectedVideo.paused) {
                    selectedVideo.play(); // Play video if it's paused
                } else {
                    selectedVideo.pause(); // Pause video if it's playing
                }
            } 

            // Additional logic to handle stopping video in previous cells
            var allCells = document.querySelectorAll('.gallery-cell');
            allCells.forEach(function (cell) {
                var video = cell.querySelector('video');
                if (video && cell !== selectedCell) {
                    video.pause(); // Pause video in non-selected cells
                }
            });
        });
    });

    //Outside popup click

    const popupContentElement = document.querySelector('.popup-content');
    if (popupContentElement) {
            popupContentElement.addEventListener('click', () => {
            const popupContentImg = document.querySelector('.custPopupImg');
            if (popupContentImg) {
                popupContentImg.classList.toggle('zoomed');
            }

        });
    }

    //popup click next and previous
    const popupContent = document.querySelector('.popup-content');

    if (popupContent) {
        popupContent.addEventListener('click', (event) => {
            // Check if the clicked element is a previous arrow
            if (event.target.classList.contains('nav-arrow') && event.target.classList.contains('prev')) {
                const popupContentImg = document.querySelector('.custPopupImg');
                if (popupContentImg) {
                    popupContentImg.classList.remove('zoomed');
                }
            }
            // Check if the clicked element is a next arrow
            if (event.target.classList.contains('nav-arrow') && event.target.classList.contains('next')) {
                const popupContentImg = document.querySelector('.custPopupImg');
                if (popupContentImg) {
                    popupContentImg.classList.remove('zoomed');
                }
                
            }
        });
    }
}