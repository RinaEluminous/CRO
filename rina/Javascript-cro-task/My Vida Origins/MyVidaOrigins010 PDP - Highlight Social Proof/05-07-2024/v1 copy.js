 console.log('above windows onload');
window.onload = function() {
console.log('in windows onload');

    if( document.querySelectorAll('.template-product').length > 0){
        console.log('test working ornot ');
        addStickyFooterOnPdp();
        
        //addVideoInsliderOnPDP();

        highlightSocialProofOnPDP();

        if(window.innerWidth <= 767) {
           // highlightSocialProofOnPDPMob();
        }

        AllClickOperations();
    }
   
};

function highlightSocialProofOnPDP(){
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
    storiesSectionHeading.textContent = "Hear What Our Customers Are Saying"
    

    var customerContentElement = document.querySelector('.customer-content');
      customerContentElement.outerHTML = '<div class="custCustomerContent">' +
          '    <div class="custVideoDetails custFirstVideo">' +
          '        <video id="firstVideo" class="custVideoPlayer" autoplay playsinline muted poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">' +
          '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4">' +
          '        </video>' +
          '        <p>"The difference in my skin was exceptional."</p>' +
          '    </div>' +
          '    <div class="custVideoDetails custSecondVideo">' +
          '        <video id="secondVideo" class="custVideoPlayer" playsinline poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-2.png">' +
          '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles+2.mov" type="video/mp4">' +
          '        </video>' +
          '        <p>"My hair is shinier, thicker, and growing faster."</p>' +
          '    </div>' +
          '</div>';

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
         var jdgmPrevTextElement = document.querySelector('.jdgm-prev-badge__text');

         if(jdgmPrevTextElement){
            jdgmPrevTextElement.textContent = "Trusted By Over 900,000+ People";
         }

         //----- replace the description with new one 
         var descriptionParaElement = document.querySelector('.product_short_detail .description p');
         if(descriptionParaElement){
         descriptionParaElement.textContent ="Discover the dream team for beautiful hair, glowing skin, and nails that are hard as a rock. Hair, Skin, & Nails contains a blend of our essential ingredients - Vitamin C, Copper, Iodine, Biotin, Vitamin E, Silica, MSM, Saw Palmetto, Glycine, Cysteine, and more.";
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
             }
         });

         //-- Internal Nav html

         var internalNavHtml ='<div class="custInternalNav">'+
                            '    <ul>'+
                            '        <li>'+
                            '            <a href="#">Product</a>'+
                            '        </li>'+
                            '        <li>'+
                            '            <a href="#">Benefits</a>'+
                            '        </li>'+
                            '        <li>'+
                            '            <a href="#">Results</a>'+
                            '        </li>'+
                            '        <li>'+
                            '            <a href="#">Science</a>'+
                            '        </li>'+
                            '        <li>'+
                            '            <a href="#">Reviews</a>'+
                            '        </li>'+
                            '    </ul>'+
                            '</div>';

           var templateProductElement = document.querySelector('body.template-product main#main'); 

           if(templateProductElement && document.querySelectorAll('.custInternalNav').length == 0){
            templateProductElement.insertAdjacentHTML('afterbegin',internalNavHtml);
           }
           

              //-- Trusted By Over 900,000+ People

              var trustedByOverHtml='<div class="custTitleWraper">'+
              '    <img src="https://www.myvidaorigins.com/cdn/shop/files/stars_1.png">'+
              '    <h5>Trusted by over 900,000+ People</h5>'+
              '    <p>See real results and hear how others are regrowing their hair and nails while feeling their best.</p>'+
              '</div>';

              var delGloriaElement = document.querySelector('.custDeliaGloriaSection'); 

              if(delGloriaElement && document.querySelectorAll('.custTitleWraper').length == 0 ){
                delGloriaElement.insertAdjacentHTML('afterbegin',trustedByOverHtml);
              }
              

}

// Function to check if the video is playing
function isVideoPlaying(video) {
   return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
}


function addVideoInsliderOnPDP(){
    var ProductGalleryThumbElement =document.querySelector('.Product__Gallery--withThumbnails');

    if(ProductGalleryThumbElement){
        ProductGalleryThumbElement.classList.add('custProductGalleryThumb');
        var ProductGalleryThumbElement =document.querySelector('.Product__Gallery--withThumbnails');
    }
   

    ProductGalleryThumbElement.classList.add('custProductGalleryThumb');
    
}

function addStickyFooterOnPdp() {

    // var strmaySaleEventUrl = "/product/test.com";
    if (document.querySelectorAll('.custStickyAddtoCart').length == 0) {
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
  
        document.body.insertAdjacentHTML('beforeend', maySaleEventSticklyHTML);
    }

    window.addEventListener('scroll', toggleStickyFooter);
    window.addEventListener('resize', toggleStickyFooter);
}

function toggleStickyFooter() {

    console.log('toggleStickyFooter');

    const addToCartButtonElement = document.querySelector('.template-product .ProductForm__BuyButtons');
    const stickyFooterElement = document.querySelector('.custStickyAddtoCart');
   //Gets the bottom position of the "Add to Cart" button relative to the viewport.
    const addToCartPosition = addToCartButtonElement.getBoundingClientRect().bottom;

    if (addToCartPosition < 0) {
        console.log('addToCartPosition>>>>>>>>>>>>>>>>>');
        stickyFooterElement.classList.add('custShow');
        stickyFooterElement.classList.remove('custHide');
      
    } else {
        stickyFooterElement.classList.add('custHide');
        stickyFooterElement.classList.remove('custShow');
    }
}

//redirect functionality for all tab
function redirectTab(tabElement,fixedHeaderHeight) {
    if (tabElement) {
       
        const offsetTop = tabElement.getBoundingClientRect().top + window.pageYOffset - fixedHeaderHeight;
        console.log('Offset top:', offsetTop);
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    } 
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
                console.log('Pausing first video...');
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
}
