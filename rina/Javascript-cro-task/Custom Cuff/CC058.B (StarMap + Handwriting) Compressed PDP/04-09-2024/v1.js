// Use window.onload to ensure all resources are fully loaded
window.onload = function() {
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
        compressedPDPOfStarMapHandwriting();
        addStickyFooterOnPdp();
        allClickOperations();
     } 
};

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
    reviewsElement.insertAdjacentHTML('beforebegin', homeSliderHtml);
  }

/* add show more */
var showMoreBtnHtml ='<div class="custShowMoreBtn">'+
                    '    <span>Show more</span>'+
                    '</div>';

var flickityViewPortElement = document.querySelector('.Product--medium .Product__Slideshow .flickity-viewport');

if(flickityViewPortElement && document.querySelectorAll('.custShowMoreBtn').length == 0){
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

var addOnElement = document.querySelector('.addOn');
var moneyElement = document.querySelector('.container .money');
if (addOnElement) {
  var addOnTextContent = addOnElement.textContent.trim();
  var addOnMatch = addOnTextContent.match(/Rs\.\s*([\d,]+\.\d+)/);
  if (addOnMatch) {
      var premiumGiftValue = addOnMatch[1];
    } 
}else if(moneyElement){
  var premiumGiftValue = moneyElement.textContent.trim();
}
/* premium gift box and non premium gift box */

var premiumGiftBoxHtml = '<div class="custAddPremGiftBox">'+
'    <div class="title">'+
'        ADD PREMIUM GIFTBOX <span class="custPremiumPrice">(+ <span class="custPremiumGiftValue">'+premiumGiftValue+'</span>) :</span>'+
'    </div>'+
'    <div class="custRadioOptions">'+
'        <label class="container">'+
'            <div class="content">'+
'                <div class="imgBox">'+
'                    <img src="//www.customcuff.co/cdn/shop/t/262/assets/gift_box_premium.png?v=95932550959821705011723281697">'+
'                </div>'+
'                <div class="text">'+
'                    Premium gift box'+
'                    <span class="giftPrice custPremiumGiftValue">'+premiumGiftValue+'</span>'+
'                </div>'+
'            </div>'+
'            <input name="radio"  type="radio"  value="premium">'+
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
'            <input name="radio" checked="checked" type="radio" value="noPremium">'+
'            <span class="checkmark"></span>'+
'        </label>'+
'    </div>'+
'</div>';

var productOnWrappperElement = document.querySelector('.template-product .show-addon-for-option');
var productOnWrapperContainer = document.querySelector('.template-product .product-add-on-wrapper');

// if(productOnWrappperElement && document.querySelectorAll('.custAddPremGiftBox').length == 0){
// productOnWrappperElement.insertAdjacentHTML('beforeend', premiumGiftBoxHtml);
// console.log('for other product>>');
// }else if(productOnWrapperContainer && document.querySelectorAll('.custAddPremGiftBox').length == 0){
//   console.log('custom-minimal-star-map-bracelet product>>');
//   productOnWrapperContainer.insertAdjacentHTML('beforeend', premiumGiftBoxHtml);
// }

if (productOnWrappperElement && document.querySelectorAll('.custAddPremGiftBox').length === 0) {
 
  productOnWrappperElement.insertAdjacentHTML('beforeend', premiumGiftBoxHtml);
} else if (productOnWrapperContainer && document.querySelectorAll('.custAddPremGiftBox').length === 0) {
 
  productOnWrapperContainer.insertAdjacentHTML('beforeend', premiumGiftBoxHtml);
} else {
  console.log('No elements ');
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
'        <li class="custTabItem active" data-tab="description">Description</li>'+
'        <li class="custTabItem" data-tab="reviews">Size & Materials</li>'+
'        <li class="custTabItem" data-tab="shipping">Shipping</li>'+
'        <li class="custTabItem" data-tab="faq">FAQ</li>'+
'    </ul>'+
'    <div class="tab-content">'+
'        <div id="description" class="custTabContentItem active">'+
'            <p>We\'re beyond excited to bring you our new custom handwriting/drawing collection! Make those fine personal lines of ink last forever by engraving them on beautiful handcrafted jewelry. Choose between multiple colors and pieces including rings, bracelets and necklaces.</p>'+
'            <h6>HOW IT WORKS:</h6>'+
'            <p><strong>STEP 1</strong>: Write or draw on a piece of paper (or find an old note worth remembering forever).</p>'+
'            <p><strong>STEP 2</strong>: Take a picture of the note/paper and upload it here on the product page via the upload button above</p>'+
'            <p><strong>STEP 3</strong>: Our talented designer removes the background of the writing/drawing so it looks the best when engraved</p>'+
'            <p><strong>STEP 4</strong>: Your insanely custom piece gets created within 3-5 days and shipped right to your door. It\'s sure to be the most meaningful piece of jewelry you\'ll ever own!</p>'+
'            <span class="custTabReadMoreBtn">Read more</span>'+
'        </div>'+
'        <div id="reviews" class="custTabContentItem">'+
'            <h6>Material:</h6>'+
'            <ul class="materialList">'+
'                <li>Gold Finish - 18K Gold Dipped</li>'+
'                <li>Rose Gold - 18K Rose Gold Dipped</li>'+
'                <li>Silver Finish - Durable, Mirror finish 316L stainless steel</li>'+
'                <li>Matte Black Finish- Coated in Ceramic Matte Black</li>'+
'            </ul>'+
'            <p>20mm coin charm diameter, 1.5mm thickness</p>'+
'            <span class="custTabReadMoreBtn">Read more</span>'+
'        </div>'+
'        <div id="shipping" class="custTabContentItem">'+
'            <h6>We ship Worldwide:</h6>'+
'            <h6>UK Delivery - Free For Orders Over $75 USD</h6>'+
'            <ul>'+
'                <li>- Standard Delivery (7-12 Working Days)</li>'+
'                <li>- Express Delivery (7-8 Working Days)</li>'+
'            </ul>'+
'            <h6>US Delivery - Free For Orders Over $75 USD</h6>'+
'            <ul>'+
'                <li>- Standard Shipping (4-7 Working Days)</li>'+
'                <li>- Priority Shipping (3-5 Working Days)</li>'+
'            </ul>'+
'            <h6>European Delivery - Free For Orders Over $75 USD </h6>'+
'            <ul>'+
'                <li>- EU Standard Shipping (7-12 Working Days)</li>'+
'                <li>- EU Priority Shipping (7-8 Working Days)</li>'+
'            </ul>'+
'            <h6>CA Delivery - Free For Orders Over $75 USD</h6>'+
'            <ul>'+
'                <li>- Canada Standard Shipping (7-12 Working Days)</li>'+
'                <li>- Canada Priority Shipping (7-8 Working Days)</li>'+
'            </ul>'+
'            <h6>AU & NZ Delivery <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/AU-flag.png" alt=""></h6>'+
'            <ul>'+
'                <li>- AU Standard Shipping (7-12 Working Days)</li>'+
'                <li>- AU Priority Shipping (7-9 Working Days)</li>'+
'            </ul>'+
'            <h6>Rest of the world <img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/Globe.png" alt=""></h6>'+
'            <ul>'+
'                <li>- Standard Shipping (7-15 Working Days)</li>'+
'                <li>- Priority Shipping (5-10 Working Days)</li>'+
'            </ul>'+
'            <p><strong>Shipping Information</strong> All orders are shipped from our EU fulfillment centre. All custom products take <strong>1-5 Days</strong> to ship out as they are made to order.</p>'+
'            <h6>Failed Delivery:</h6>'+
'            <p>If the package cannot be delivered to the given shipping address due to causes ascribable to the absent cooperation of the customer (wrong or incorrect shipping address, absent receiver,) or if the customer refuses to collect the package, the package will be returned to the sender (Customcuff) at the customers expense. For custom products we do not accept returns, so the customer will be contacted and requested to provide a correct address for the reshipment. The customer will be liable to pay the additional incurred shipping cost.</p>'+
'            <h6>Items Not Received But Tracking Shows Delivered </h6>'+
'            <p>Please note we do not refund or replace items that are tracked as being delivered. For this reason, we always recommend that you get items delivered to a secure address. The shipping company will only mark the package as delivered once they deliver it to the address you provided. If your order is marked as delivered and you didn\'t receive it, we suggest checking your mailbox or contacting your local post office.</p>'+
'            <p>You will receive a shipment confirmation email when your order is shipped with tracking information.</p>'+
'            <p>Please also note that the delivery date estimate on the product page is only an estimate based on the average delivery speed to your country. It is therefore not guaranteed.</p>'+
'            <span class="custTabReadMoreBtn">Read more</span>'+
'        </div>'+
'        <div id="faq" class="custTabContentItem">'+
'            <h6>Is your jewelry waterproof?</h6>'+
'            <p>YES! Our products will never fade, tarnish or lose its colour - even when exposed to sweat and heat, in the shower, sea or pool - So dive in! We use the highest quality 316L Stainless steel, 18k gold and sterling silver for all our products.</p>'+
'            <h6>Do you ship worldwide?</h6>'+
'            <p>Yes! We ship to most countries in the world. Packages shipped to international addresses generally take 5-10 business days to arrive after your order is processed. Note that often orders will be passed to and delivered by your country\'s local postal service.</p>'+
'            <h6>What about sizes?</h6>'+
'            <p>You can adjust the cuffs by the two flexible metal ends. They are high-quality and flexible, so they will not break under any circumstance. Our cuffs will fit any wrist size, they\'re perfect for him & her! All our other bracelets are adjustable as well. Our custom bar necklace comes with a 55cm chain, but we sell 65cm chains as well (simply search "necklace chain"). For ring sizes please refer to the ring size guide on the Custom ring product page.</p>'+
'            <span class="custTabReadMoreBtn">Read more</span>'+
'        </div>'+
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

//change product lable flash with new one 
var flashElement = document.querySelectorAll('.ProductForm__Label');
if(flashElement){
flashElement.forEach(function(label){
  if(label.textContent.includes('FINISH:')){
    
    label.textContent='SELECT FINISH:';
    var sizeSwatchList = label.nextElementSibling;
    if (sizeSwatchList) {
     sizeSwatchList.classList.add('custFinishUlElement');
   }
  }
  
});

}

/* image html add into the color selector */

var sizeSwatchElement = document.querySelectorAll('.custFinishUlElement li.HorizontalList__Item label.SizeSwatch');

if(sizeSwatchElement && document.querySelectorAll('.custColorImg').length == 0){

sizeSwatchElement.forEach(function(swatch){

 if(swatch.textContent=='SILVER'){
   var colorSwatchImg = 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/steel_silver.png'
   swatch.innerHTML = 'SHINY <br>SILVER';
 }else if(swatch.textContent=='GOLD'){
   var colorSwatchImg ='https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gold.png"'
   swatch.innerHTML = 'SHINY <br>GOLD';
 }else if(swatch.textContent=='ROSE'){
   var colorSwatchImg ='https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rose_gold.png'
   swatch.innerHTML = 'SHINY <br>ROSE';
 }else if(swatch.textContent=='MATTE BLACK'){
   var colorSwatchImg ='https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/matte_black.png'
   swatch.innerHTML = 'MATTE <br>BLACK';
 }else if(swatch.textContent=='ARRORA GOLD'){
   var colorSwatchImg ='https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/arora_gold.png'
   swatch.innerHTML = 'SHINY <br>ARRORA GOLD';
 }
 var colorSwatchImgHtml ='<div class="colorImg custColorImg">'+
                       '    <img src="'+colorSwatchImg+'" alt="color Image">'+
                       '</div>';
   swatch.insertAdjacentHTML('afterbegin',colorSwatchImgHtml);
                       
 });
}

var addToCartButtons = document.querySelectorAll('.ProductForm__AddToCart');
if (addToCartButtons.length > 0) {

var priceContainerElement = document.querySelector('.ProductMeta__PriceList');
if (priceContainerElement) {
  if(priceContainerElement.querySelector('.Price--highlight') && priceContainerElement.querySelector('.Price--compareAt')) {
    var intActualPrice = priceContainerElement.querySelector('.Price--highlight').textContent.trim();
    //var intCancelPrice = priceContainerElement.querySelector('.Price--compareAt').textContent.trim();
  }else{
    var intActualPrice = document.querySelector('.ProductMeta__Price').textContent;
  }
}

if (priceContainerElement) {

  addToCartButtons.forEach(function(button) {
    var spanElement = button.querySelector('span');
    if (spanElement) {
      spanElement.textContent = 'Add to cart - ' + intActualPrice;
    }
  });
}

}



}

//add sticky banner at footer
function addStickyFooterOnPdp() {

var hostname = window.location.hostname;

var checkedInputElement = document.querySelector('.SizeSwatchList input[type="radio"]:checked');
if (checkedInputElement) {
  var inputId = checkedInputElement.id;
  var labelElement = document.querySelector('label[for="' + inputId + '"]');
  if (labelElement) {
      var selectedColorText = labelElement.textContent;
     } 
}

var priceContainerElement = document.querySelector('.ProductMeta__PriceList');
if (priceContainerElement) {
if(priceContainerElement.querySelector('.Price--highlight') && priceContainerElement.querySelector('.Price--compareAt')) {
  var intActualPrice = priceContainerElement.querySelector('.Price--highlight').textContent.trim();
  var intCancelPrice = priceContainerElement.querySelector('.Price--compareAt').textContent.trim();
}else{
  var intActualPrice = document.querySelector('.ProductMeta__Price').textContent;
}
}
var strProductName = document.querySelector('.ProductMeta__Title').textContent;
var isSlectedElement =document.querySelector('.Carousel__Cell.is-selected .AspectRatio');
var imgTag = isSlectedElement.querySelector('img');
var imgSrc = imgTag.getAttribute('data-original-src');
if (document.querySelectorAll('.custStickyAddtoCart').length == 0) {
             
var  stickyBannerHTML = '<div class="custStickyAddtoCart custHide">'+
                        '    <div class="container">'+
                        '        <div class="productDetailCol">'+
                        '            <div class="productImg"> <img src="'+imgSrc+'" alt="product page"> </div>'+
                        '            <div class="productName">'+
                        '                <h6>'+
                        '                    '+strProductName+''+
                        '                    <span> '+selectedColorText+'</span>'+
                        '                </h6>'+
                        '                <div class="mobPrice">'+
                        '                    <span class="cancelPrice">'+ 
                        (intCancelPrice ? 
                          intCancelPrice: '$38.00') +'</span>'+
                        '                    '+intActualPrice+''+
                        '                </div>'+
                        '            </div>'+
                        '        </div>'+
                        '        <div class="productPriceCol">'+
                        '            <div class="deskPrice">'+
                        '                <span class="cancelPrice">'+ 
                        (intCancelPrice ? 
                          intCancelPrice : '$38.00') +'</span>'+
                        '               '+intActualPrice+''+
                        '            </div>'+
                        '            <div class="buttonBox"> <button class="btn custTryTodayBtn">ADD TO CART</button> </div>'+
                        '        </div>'+
                        '    </div>'+
                        '</div>';
   
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
  console.log('add to card btn click at footer >>>');
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


/* main slider show more show less functionality*/
var showMoreBtn = document.querySelector('.custShowMoreBtn');
if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {

    
    var flickityViewPortElement = document.querySelector('.flickity-viewport');
    if (flickityViewPortElement) {
      
      var showMoreText = document.querySelector('.custShowMoreBtn span');
      if (flickityViewPortElement.classList.contains('showMore')) {
      
        flickityViewPortElement.classList.remove('showMore');
        showMoreText.textContent = 'Show More';
      } else {
        showMoreText.textContent = 'Show Less';
        flickityViewPortElement.classList.add('showMore');
      }
    } 
  });
}

/* read more read less functionality for tab */
var readMoreBtns = document.querySelectorAll('.custTabReadMoreBtn');
readMoreBtns.forEach(function (readMoreBtn) {
  readMoreBtn.addEventListener('click', function () {
    
    var readMoreContent = readMoreBtn.closest('.active');
    if (readMoreContent) {
    readMoreContent.classList.toggle('showMoreDesc');
      if (readMoreContent.classList.contains('showMoreDesc')) {
        readMoreBtn.textContent = 'Read less';
        
      } 
    } 
  });
});

/* click for color swatch */
var sizeSwatchElement = document.querySelectorAll('.template-product .SizeSwatchList li.HorizontalList__Item label.SizeSwatch');
sizeSwatchElement.forEach(function(swatch){
swatch.addEventListener('click', function(){

  compressedPDPOfStarMapHandwriting();
  addStickyFooterOnPdp();
  setTimeout(function(){
    var checkedInputElement = document.querySelector('.SizeSwatchList input[type="radio"]:checked');
    if (checkedInputElement) {
        var inputId = checkedInputElement.id;
        var labelElement = document.querySelector('label[for="' + inputId + '"]');
        if (labelElement) {
            var selectedColorText = labelElement.textContent;
          } 
    }
   
  var priceContainerElement = document.querySelector('.ProductMeta__PriceList');
  if (priceContainerElement) {

    if(priceContainerElement.querySelector('.Price--highlight') && priceContainerElement.querySelector('.Price--compareAt')) {
      var intActualPrice = priceContainerElement.querySelector('.Price--highlight').textContent.trim();
      var intCancelPrice = priceContainerElement.querySelector('.Price--compareAt').textContent.trim();
    }else{
      var intActualPrice = document.querySelector('.ProductMeta__Price').textContent;
    }
   
  }

    var strProductName = document.querySelector('.ProductMeta__Title').textContent;

    var isSlectedElement =document.querySelector('.Carousel__Cell.is-selected .AspectRatio');
    var imgTag = isSlectedElement.querySelector('img');
    var imgSrc = imgTag.getAttribute('data-original-src');
    
    document.querySelector('.custStickyAddtoCart .productImg img').src =imgSrc;

    // Update tittle
    var handwritingTextElement = document.querySelector('.custStickyAddtoCart .productName h6');
    if (handwritingTextElement) {
      handwritingTextElement.firstChild.textContent = strProductName;
    }

    // Update color 
    var silverTextElement = document.querySelector('.custStickyAddtoCart .productName h6 span');
    if (silverTextElement) {
      silverTextElement.textContent = selectedColorText; 
    }

    // Update price
    var priceTextElement = document.querySelector('.custStickyAddtoCart .productName .mobPrice');
    if (priceTextElement) {
      priceTextElement.lastChild.textContent = intActualPrice; 
    }

    var deskPriceElement = document.querySelector('.custStickyAddtoCart .deskPrice');
    if (deskPriceElement) {
     deskPriceElement.lastChild.textContent = intActualPrice;
    }

    //update cancel price 
    var cancelPriceTextElement = document.querySelector('.custStickyAddtoCart .productName .cancelPrice');
    if (cancelPriceTextElement) {
      cancelPriceTextElement.textContent = intCancelPrice;
    }

  },1000);

});

});

/* Premium gift box click */

var giftBoxOptions = document.querySelectorAll('.custRadioOptions label');
giftBoxOptions.forEach(function(option) {
  option.addEventListener('click', function(e) {
    e.preventDefault();
    var selectedValue = this.querySelector('input[type="radio"]').value;
    console.log('Selected Value>>> ', selectedValue);

    if (selectedValue === 'premium') {
      console.log('Premium gift box selected >>');
      document.querySelector('input[type="radio"][value="noPremium"]').checked = false;
      document.querySelector('input[type="radio"][value="premium"]').checked = true;

      // Handle premium gift box logic
      var labelElements = document.querySelectorAll('.gpo-label');
      labelElements.forEach(function(labelElement) {
        if (labelElement.textContent.includes("ADD PREMIUM GIFTBOX")) {
          console.log('PREMIUM GIFT BOX >>>');

          var checkboxElement = labelElement.closest('.gpo-element').querySelector('input[type="checkbox"]');
          if (checkboxElement && !checkboxElement.checked) {
            console.log('Clicking ADD PREMIUM GIFT BOX checkbox');
            checkboxElement.click();

            var addOnElement = document.querySelector('.addOn');
            if (addOnElement) {
              var addOnTextContent = addOnElement.textContent.trim();
              var addOnMatch = addOnTextContent.match(/Rs\.\s*([\d,]+\.\d+)/);
              if (addOnMatch) {
                var premiumGiftValue = addOnMatch[1];
                console.log('Extracted value>>>> ' + premiumGiftValue);
              }
            }

            var premiumPriceElement = document.querySelector('.custPremiumPrice');
            if (premiumPriceElement) {
              premiumPriceElement.style.display = 'inline-block';
            }

            var PremiumGiftValueElement = document.querySelector('.custPremiumGiftValue');
            if (PremiumGiftValueElement) {
              PremiumGiftValueElement.textContent = premiumGiftValue;
            }
          }
        }
      });

    } else if (selectedValue === 'noPremium') {
  
      document.querySelector('input[type="radio"][value="noPremium"]').checked = true;
      document.querySelector('input[type="radio"][value="premium"]').checked = false;

      var checkboxElement = document.querySelector('.gpo-choicelist.gpo-checkbox input[name="ADD GIFTBOX"][value="YES"]');
      if (checkboxElement && checkboxElement.checked) {
        console.log('Unchecking ADD PREMIUM GIFT BOX checkbox');
        checkboxElement.click();
      }
      var premiumPriceElement = document.querySelector('.custPremiumPrice');
      if (premiumPriceElement) {
        premiumPriceElement.style.display = 'none';
      }

      var PremiumGiftValueElement = document.querySelector('.custPremiumGiftValue');
      if (PremiumGiftValueElement) {
        PremiumGiftValueElement.textContent = '';
      }
    }
  });
});


}