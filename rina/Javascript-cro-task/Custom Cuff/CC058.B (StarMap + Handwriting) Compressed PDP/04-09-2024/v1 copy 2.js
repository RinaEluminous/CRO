
function checkAndInitialize() {

  const validPDPUrls = [

    "/products/custom-minimal-star-map-bracelet",
    "/products/custom-star-map-charm",
    "/products/custom-star-map-ring",
    "/collections/new-in/products/custom-handwriting-coin-necklace",
    "/products/handwriting-plate-necklace",
    "/products/custom-handwriting-ring",
    "/products/custom-handwriting-drawing-bracelet",
    "/products/handwriting-coin-necklace-set"
 
];

    const currentPath = window.location.pathname.replace(/\/$/, ''); 
    if (validPDPUrls.includes(currentPath)) {
        console.log('experience working');
        compressedPDPOfStarMapHandwriting();
        allClickOperations();
        addStickyFooterOnPdp();
        // allClickOperations();
        setTimeout(() => {
          console.log('Executing allClickOperations');
          allClickOperations();
          addStickyFooterOnPdp();
      }, 3000); 
      
    } else {
      setTimeout(checkAndInitialize, 100); // Check again in 100ms
    }
  }
  
  // Use window.onload to ensure all resources are fully loaded
  window.onload = function() {
    checkAndInitialize();
  };
  
  
  document.addEventListener('DOMContentLoaded', function() {
    checkAndInitialize();
  });
  
  // In case the DOMContentLoaded event is already fired before the script loads
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    checkAndInitialize();
    
  }

  function compressedPDPOfStarMapHandwriting(){
   //add home page slider before reviews section
    var homeSliderHtml = '<div class="shopify-section bm-video-section custHomePageSlider">'+
'    <div class="custPuraVidaVideoProducts">'+
'        <div class="custPuraVidaPlayVideoSlider">'+
'            <div class="container">'+
'                <div class="section_header">'+
'                    <h2 class="main-heading"></h2>'+
'                </div>'+
'                <swiper-slider>'+
'                    <div class="swiper collection_swiper swiper-container swiper-initialized swiper-horizontal swiper-pointer-events" data-dots="false" data-nav="false" data-prev-el=".sw-button-prev-template--15987059195965__9379c00b-f6cd-4f9e-9320-5fbdcae9fcc3" data-next-el=".sw-button-next-template--15987059195965__9379c00b-f6cd-4f9e-9320-5fbdcae9fcc3" data-pagination=".swiper-pagination-template--15987059195965__9379c00b-f6cd-4f9e-9320-5fbdcae9fcc3" data-breakpoints="{&quot;0&quot;:{&quot;slidesPerView&quot;:1.5,&quot;spaceBetween&quot;:10,&quot;centeredSlides&quot;:true},&quot;861&quot;:{&quot;slidesPerView&quot;:3,&quot;spaceBetween&quot;:10,&quot;centeredSlides&quot;:true},&quot;1200&quot;:{&quot;slidesPerView&quot;:4,&quot;spaceBetween&quot;:10,&quot;centeredSlides&quot;:true }}" data-thumbs="" data-thumbs-id=".swiper-thumbs-template--15987059195965__9379c00b-f6cd-4f9e-9320-5fbdcae9fcc3" autoplay="false" data-direction="horizontal" data-pause-video-on-change="true">'+
'                        <!-- Additional required wrapper -->'+
'                        <div class="swiper-wrapper" id="swiper-wrapper-d9b47feade205a66" aria-live="polite" style="transition-duration: 0ms; transform: translate3d(-837.5px, 0px, 0px);">'+
'                            <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="11" role="group" aria-label="12 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/2022-11-0214.14.162962644562200777292_7030873959.jpg?v=1692950678">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374683-fndhlvpo/watermarked/540/2022-11-0214.14.162962644562200777292_7030873959.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/collections/gift-sets/products/2x-custom-necklace-set">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="12" role="group" aria-label="13 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/2022-01-1717.31.562753283949614885318_7030873959.jpg?v=1693203257">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374886-jytsudig/watermarked/540/2022-01-1717.31.562753283949614885318_7030873959.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/products/custom-minimal-charm-necklace">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="13" role="group" aria-label="14 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/2022-11-0117.11.372962009533729020191_7030873959.jpg?v=1693203295">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374705-hqkwiuoe/watermarked/540/2022-11-0117.11.372962009533729020191_7030873959.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/blogs/custom-jewelry/womens-engraved-necklaces">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="14" role="group" aria-label="15 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/Screenshot_2024-02-17_at_10.48.48_AM.png?v=1708186327">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2024/1/24/1706140679-gqtndysk/watermarked/540/Jenna2.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/products/custom-cuff-necklace-bundle">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <!-- Slides -->'+
'                            <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="1 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/Screenshot_2024-02-17_at_10.50.16_AM.png?v=1708185165">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2024/1/24/1706140274-kbvmhcxz/watermarked/540/Piper3.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/products/custom-cuff-necklace-bundle">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" role="group" aria-label="2 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/Screenshot_2024-02-17_at_10.49.01_AM.png?v=1708185623">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2024/1/24/1706140421-xojgikay/watermarked/540/Jordy1.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/products/custom-cuff-necklace-bundle">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="2" role="group" aria-label="3 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/Screenshot_2024-02-17_at_10.49.16_AM.png?v=1708186145">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2024/1/24/1706140547-eybgkcmw/watermarked/540/Kara2.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/products/custom-cuff-necklace-bundle">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="3" role="group" aria-label="4 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/2022-10-1717.50.342951126783254215931_7030873959.jpg?v=1693202817">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374857-ygtapdqx/watermarked/540/2022-10-1717.50.342951126783254215931_7030873959.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/collections/necklaces-1/products/custom-plate-necklace?al_pg_id=f87ea663-0129-44d9-bbbd-e822f07b1ed2">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="4" role="group" aria-label="5 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/6-10.jpg?v=1692948696">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675177147-gqkjxanm/watermarked/540/6-10.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/collections/best-sellers/products/custom-necklace">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="5" role="group" aria-label="6 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/VIDEO03.jpg?v=1693202890">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674742921-cafvtjuo/watermarked/540/VIDEO03.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/collections/best-sellers">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="6" role="group" aria-label="7 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/303729308_431649165694913_4990643942257213426_n.jpg?v=1693202933">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675176566-ftszmajw/watermarked/540/303729308_431649165694913_4990643942257213426_n.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/products/magnetic-chain-necklace-set">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="7" role="group" aria-label="8 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/9d2898e643ac4b81962f0e58a7d9a3f0.jpg?v=1693203049">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675176756-uqnjpcyg/watermarked/540/9d2898e643ac4b81962f0e58a7d9a3f0.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/products/extra-matte-black-series-product">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="8" role="group" aria-label="9 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/6-21.jpg?v=1693203107">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2023/1/31/1675177051-vemkfozy/watermarked/540/6-21.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/collections/best-sellers">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="9" role="group" aria-label="10 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/d742efbc22fd487293792f74ef0185ea_1.jpg?v=1693203149">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2023/01/31/video-compiled/d742efbc22fd487293792f74ef0185ea/watermarked/540/d742efbc22fd487293792f74ef0185ea.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/blogs/custom-jewelry/womens-engraved-necklaces">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="10" role="group" aria-label="11 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/07ab6f17343244b8b81d443c64911d24.jpg?v=1693203191">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2023/1/26/1674739532-jpauyhtl/watermarked/540/07ab6f17343244b8b81d443c64911d24.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/products/carpe-diem-cuff">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="11" role="group" aria-label="12 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/2022-11-0214.14.162962644562200777292_7030873959.jpg?v=1692950678">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374683-fndhlvpo/watermarked/540/2022-11-0214.14.162962644562200777292_7030873959.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/collections/gift-sets/products/2x-custom-necklace-set">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="12" role="group" aria-label="13 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/2022-01-1717.31.562753283949614885318_7030873959.jpg?v=1693203257">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374886-jytsudig/watermarked/540/2022-01-1717.31.562753283949614885318_7030873959.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/products/custom-minimal-charm-necklace">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide" data-swiper-slide-index="13" role="group" aria-label="14 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/2022-11-0117.11.372962009533729020191_7030873959.jpg?v=1693203295">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374705-hqkwiuoe/watermarked/540/2022-11-0117.11.372962009533729020191_7030873959.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/blogs/custom-jewelry/womens-engraved-necklaces">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="14" role="group" aria-label="15 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/Screenshot_2024-02-17_at_10.48.48_AM.png?v=1708186327">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2024/1/24/1706140679-gqtndysk/watermarked/540/Jenna2.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/products/custom-cuff-necklace-bundle">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <!-- Slides -->'+
'                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" role="group" aria-label="1 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/Screenshot_2024-02-17_at_10.50.16_AM.png?v=1708185165">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2024/1/24/1706140274-kbvmhcxz/watermarked/540/Piper3.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/products/custom-cuff-necklace-bundle">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" role="group" aria-label="2 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/Screenshot_2024-02-17_at_10.49.01_AM.png?v=1708185623">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2024/1/24/1706140421-xojgikay/watermarked/540/Jordy1.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/products/custom-cuff-necklace-bundle">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" role="group" aria-label="3 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/Screenshot_2024-02-17_at_10.49.16_AM.png?v=1708186145">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2024/1/24/1706140547-eybgkcmw/watermarked/540/Kara2.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="/products/custom-cuff-necklace-bundle">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                            <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" role="group" aria-label="4 / 15" style="width: 325px; margin-right: 10px;">'+
'                                <div class="custPuraVidaVideoWrapper">'+
'                                    <video controls="" poster="//www.customcuff.co/cdn/shop/files/2022-10-1717.50.342951126783254215931_7030873959.jpg?v=1693202817">'+
'                                        <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374857-ygtapdqx/watermarked/540/2022-10-1717.50.342951126783254215931_7030873959.mp4" type="video/mp4">'+
'                                    </video>'+
'                                    <a href="https://www.customcuff.co/collections/necklaces-1/products/custom-plate-necklace?al_pg_id=f87ea663-0129-44d9-bbbd-e822f07b1ed2">Shop Now</a>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                        <div class="swiper-button-prev sw-button-prev-template--15987059195965__9379c00b-f6cd-4f9e-9320-5fbdcae9fcc3" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-d9b47feade205a66"></div>'+
'                        <div class="swiper-button-next sw-button-next-template--15987059195965__9379c00b-f6cd-4f9e-9320-5fbdcae9fcc3" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-d9b47feade205a66"></div>'+
'                        <!-- If we need pagination -->'+
'                        <!-- <div class="swiper-pagination swiper-pagination-template--15987059195965__9379c00b-f6cd-4f9e-9320-5fbdcae9fcc3"></div> -->'+
'                        <!-- If we need scrollbar -->'+
'                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'+
'                    </div>'+
'                </swiper-slider>'+
'            </div>'+
'        </div>'+
'    </div>'+
'  </div>';


    var reviewsElement = document.querySelector('.shopify-section.product_review_section_cus');
    var questionSecElement = document.querySelector('.shopify-quotes-section');
    var questionSecShopifyElement = questionSecElement.closest('.shopify-section');

    //change the position of reviews element before question section 
    if(reviewsElement && questionSecShopifyElement){
      questionSecShopifyElement.insertAdjacentElement('beforebegin',reviewsElement);
    }
    
    // add home slider before reviews element
    if(reviewsElement && document.querySelectorAll('.custHomePageSlider').length == 0){
      console.log("element exist");
      reviewsElement.insertAdjacentHTML('beforebegin', homeSliderHtml);
    }

   


  /* add show more */
  var showMoreBtnHtml ='<div class="custShowMoreBtn">'+
                      '    <span>Show more</span>'+
                      '</div>';

  var flickityViewPortElement = document.querySelector('.Product--medium .Product__Slideshow .flickity-viewport');

  if(flickityViewPortElement && document.querySelectorAll('.custShowMoreBtn').length == 0){
    console.log('sfds');
    flickityViewPortElement.insertAdjacentHTML('beforeend', showMoreBtnHtml);
  }
  
  /* reviews section */
  var reviewsHtml ='<div class="product_reviews custProductReviews">'+
                  '    <img width="500" height="300" decoding="async" loading="lazy" src="https://cdn.shopify.com/s/files/1/0026/0010/8078/files/image-removebg-preview_1.svg?v=1700742157">'+
                  '    <span>779 reviews</span>'+
                  '</div>';

  var headingElement = document.querySelector('.ProductMeta h1.ProductMeta__Title.Heading.u-h2');
  
  if(headingElement && document.querySelectorAll('.custProductReviews').length == 0){
    headingElement.insertAdjacentHTML('beforebegin', reviewsHtml);
  }

  /* premium gift box and non premium gift box */
  var premiumGiftBoxHtml = '<div class="custAddPremGiftBox">'+
'    <div class="title">'+
'        ADD PREMIUM GIFTBOX (+ $13.00) :'+
'    </div>'+
'    <div class="custRadioOptions">'+
'        <label class="container">'+
'            <div class="content">'+
'                <div class="imgBox">'+
'                    <img src="//www.customcuff.co/cdn/shop/t/262/assets/gift_box_premium.png?v=95932550959821705011723281697">'+
'                </div>'+
'                <div class="text">'+
'                    Premium gift box'+
'                    <span class="giftPrice">$13.00</span>'+
'                </div>'+
'            </div>'+
'            <input name="radio" checked="checked" type="radio">'+
'            <span class="checkmark"></span>'+
'        </label>'+
'        <label class="container">'+
'            <div class="content">'+
'                <div class="imgBox noImg">'+
'                    <img src="//www.customcuff.co/cdn/shop/t/262/assets/gift_box_premium.png?v=95932550959821705011723281697">'+
'                </div>'+
'                <div class="text">'+
'                    No premium gift box'+
'                </div>'+
'            </div>'+
'            <input name="radio" type="radio">'+
'            <span class="checkmark"></span>'+
'        </label>'+
'    </div>'+
'</div>';
  
var productOnWrappperElement = document.querySelector('.template-product .show-addon-for-option');

if(productOnWrappperElement && document.querySelectorAll('.custAddPremGiftBox').length == 0){
  productOnWrappperElement.insertAdjacentHTML('beforeend', premiumGiftBoxHtml);
}

/* shiping info and tab structure*/ 
var shipInfoNTabStructureHtml ='<ul class="custShippingInfo">'+
'    <li>'+
'        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/free_shipping_icon.svg" alt="">'+
'        Free Shipping'+
'    </li>'+
'    <li>'+
'        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/waterproof_icon.svg" alt="">'+
'        Fade Resistant & Waterproof'+
'    </li>'+
'    <li>'+
'        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/resize_icon.svg" alt="">'+
'        Adjustable Sizes'+
'    </li>'+
'    <li>'+
'        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/happiness_icon.svg" alt="">'+
'        Happiness Guaranteed'+
'    </li>'+
'</ul>'+
'<div class="tab-container custDescriptionTabWraper">'+
'    <ul class="tab-menu">'+
'        <li class="tab-item" data-tab="description">Description</li>'+
'        <li class="tab-item" data-tab="faq">FAQ</li>'+
'        <li class="tab-item" data-tab="reviews">Reviews</li>'+
'        <li class="tab-item" data-tab="shipping">Shipping</li>'+
'    </ul>'+
'    <div class="tab-content">'+
'        <div id="description" class="tab-content-item">This is the description content.</div>'+
'        <div id="faq" class="tab-content-item" style="display: none;">This is the FAQ content.</div>'+
'        <div id="reviews" class="tab-content-item" style="display: none;">This is the reviews content.</div>'+
'        <div id="shipping" class="tab-content-item" style="display: none;">This is the shipping content.</div>'+
'    </div>'+
'</div>';

var productMetaDescElement = document.querySelector('.template-product .ProductMeta__Description');

if(productMetaDescElement && document.querySelectorAll('.custShippingInfo').length == 0 && document.querySelectorAll('.custDescriptionTabWraper').length == 0){
  productMetaDescElement.insertAdjacentHTML('beforeend', shipInfoNTabStructureHtml);
}

 // move home slider before reviews section 
 var homeSliderElement =document.querySelector('.custHomePageSlider');
 if(reviewsElement && homeSliderElement){
   reviewsElement.insertAdjacentElement('beforebegin',homeSliderElement);
 }

}

//add sticky banner at footer
function addStickyFooterOnPdp() {

  var hostname = window.location.hostname;

// var checkedInputElement = document.querySelector('.input[type="radio"]:checked');
// var inputId = checkedInputElement.id;
// var labelElement = document.querySelector('label[for="' + inputId + '"]');
// var selectedColorText = labelElement.textContent;

// console.log(selectedColorText);

// var intProductPrice = document.querySelector('.ProductMeta__Price').textContent;

// var strProductName = document.querySelector('.ProductMeta__Title').textContent;

// var isSlectedElement =document.querySelector('.Carousel__Cell.is-selected .AspectRatio');
// var imgTag = isSlectedElement.querySelector('img');
// var imgSrc = imgTag.getAttribute('data-original-src');

// console.log(imgSrc);
console.log('before custStickyAddtoCart >>>>>>>>>>>>>>>>>>>>>>');
if (document.querySelectorAll('.custStickyAddtoCart').length == 0) {
                 console.log('custStickyAddtoCart >>>>>>>>>>>>>>>>>>>>>>');
  var  stickyBannerHTML = '<div class="custStickyAddtoCart custShow">'+
                          '    <div class="container">'+
                          '        <div class="productDetailCol">'+
                          '            <div class="productImg"> <img src="https://www.customcuff.co/cdn/shop/products/Untitled-80_400x.jpg" alt="Hair, Skin, &amp; Nails"> </div>'+
                          '            <div class="productName"> <img src="" alt="">'+
                          '                <h6>'+
                          '                    Handwriting Coin Necklace'+
                          '                    <span>Shiny silver</span>'+
                          '                </h6>'+
                          '                <div class="mobPrice">'+
                          '                    <span class="cancelPrice">$38.00</span>'+
                          '                    $27.00'+
                          '                </div>'+
                          '            </div>'+
                          '        </div>'+
                          '        <div class="productPriceCol">'+
                          '            <div class="deskPrice">'+
                          '                <span class="cancelPrice">$38.00</span>'+
                          '                $27.00'+
                          '            </div>'+
                          '            <div class="buttonBox"> <button class="btn custTryTodayBtn">ADD TO CART</button> </div>'+
                          '        </div>'+
                          '    </div>'+
                          '</div>';

                // var stickyBannerHTML ='<div class="custStickyAddtoCart custShow">'+
                //                       '    <div class="container">'+
                //                       '        <div class="productDetailCol">'+
                //                       '            <div class="productImg"> <img src="https://www.customcuff.co/cdn/shop/products/Untitled-80_400x.jpg" alt="product Image"> </div>'+
                //                       '            <div class="productName">'+
                //                       '                <h6>'+
                //                       '                    '+strProductName+''+
                //                       '                    <span>'+selectedColorText+'</span>'+
                //                       '                </h6>'+
                //                       '                <div class="mobPrice">'+
                //                       '                    <span class="cancelPrice">$38.00</span>'+
                //                       '                    $27.00'+
                //                       '                </div>'+
                //                       '            </div>'+
                //                       '        </div>'+
                //                       '        <div class="productPriceCol">'+
                //                       '            <div class="deskPrice">'+
                //                       '                <span class="cancelPrice">$38.00</span>'+
                //                       '               '+intProductPrice+''+
                //                       '            </div>'+
                //                       '            <div class="buttonBox"> <button class="btn custTryTodayBtn">ADD TO CART</button> </div>'+
                //                       '        </div>'+
                //                       '    </div>'+
                //                       '</div>';


     
          document.body.insertAdjacentHTML('beforeend', stickyBannerHTML);
     
  }

  window.addEventListener('scroll', toggleStickyFooter);
  window.addEventListener('resize', toggleStickyFooter);
}

//toggle sticky footer when Add to cart button present or absense
function toggleStickyFooter() {

  var addToCartButtons = document.querySelectorAll('.ProductForm__AddToCart');
  var firstAddToCartButton = addToCartButtons[0];
  
  const stickyFooterElement = document.querySelector('.custStickyAddtoCart');
  const custInternalNavElement = document.querySelector('.Header');

  if (firstAddToCartButton && stickyFooterElement && custInternalNavElement) {
      const addToCartPosition = firstAddToCartButton.getBoundingClientRect().bottom;
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

function allClickOperations(){
 //sticky footer try now btn functionality
 const custATCBtn = document.querySelector('.custTryTodayBtn');
 custATCBtn.addEventListener('click', () => {
    console.log('test');
     var addToCartButtons = document.querySelectorAll('.ProductForm__AddToCart');
     var firstAddToCartButton = addToCartButtons[0];
     if (firstAddToCartButton) {
        firstAddToCartButton.click();
     }
 });

 /* tabular structure */
 var tabs = document.querySelectorAll('.custTabItem');
 var contents = document.querySelectorAll('.custTabContentItem');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            console.log('clicked on tab <<<<<<<<<<')
            tabs.forEach(function (item) {
                item.classList.remove('active');
            });
            contents.forEach(function (content) {
                content.classList.remove('active');
            });

            tab.classList.add('active');
            var activeContent = document.getElementById(tab.getAttribute('data-tab'));
            activeContent.classList.add('active');
        });
    });

    // Initialize with the first tab active
    // tabs[0].classList.add('active');
    // contents[0].classList.add('active');

  /* main slider show more show less functionality*/

  var showMoreBtn = document.querySelector('.custShowMoreBtn');
  showMoreBtn.addEventListener('click',() => {
    var flickityViewPortElement = document.querySelector('.flickity-viewport');
    flickityViewPortElement.classList.toggle('showMore');

    var showMoreText = document.querySelector('.custShowMoreBtn span');

    if(flickityViewPortElement.classList.contains('showMore')){
      showMoreText.textContent = 'Show Less';
    }else{
      showMoreText.textContent = 'Show More';
    }

  });
    
}

