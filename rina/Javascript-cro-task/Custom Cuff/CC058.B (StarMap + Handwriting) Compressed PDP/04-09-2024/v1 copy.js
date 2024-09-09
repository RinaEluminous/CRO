// Use window.onload to ensure all resources are fully loaded
console.log('CC058.B (StarMap + Handwriting) Compressed PDP >>');
document.addEventListener('DOMContentLoaded', function() {
    console.log('In windows on load experience working');
   
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
  
  const currentPathURl = window.location.pathname.replace(/\/$/, ''); 
  console.log('currentPath >>>>',currentPathURl)
  if (validPDPUrls.includes(currentPathURl)) {
      console.log('validPDPUrls >>>>>>>>>>>>>>>>>>>');
      compressedPDPOfStarMapHandwriting();
     //AllClickOperations();
    
  }
});
  
function compressedPDPOfStarMapHandwriting() {
    //add home page slider before reviews section
    var homeSliderHtml = '<div id="shopify-section-template--15987059195965__9379c00b-f6cd-4f9e-9320-5fbdcae9fcc3" class="shopify-section bm-video-section">'+
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
    console.log('*********************************************');
    if(reviewsElement && questionSecShopifyElement){
      console.log('questionSecShopifyElement >>>')
      questionSecShopifyElement.insertAdjacentElement('beforebegin',reviewsElement);
    }
    
    if(reviewsElement && document.querySelectorAll('.custPuraVidaVideoProducts').length == 0){
      console.log("reviewsElement >>>>");
      reviewsElement.insertAdjacentHTML('beforebegin', homeSliderHtml);
    }

    var homeSliderElement =document.querySelector('.custPuraVidaVideoProducts');
    if(reviewsElement && homeSliderElement){
      console.log('homeSliderElement >>>')
      reviewsElement.insertAdjacentElement('beforebegin',homeSliderElement);
    }

 

   
}