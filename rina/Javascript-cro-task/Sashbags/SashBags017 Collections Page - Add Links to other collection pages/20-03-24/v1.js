window.onload = function (){
    var strURL = window.location.pathname;
    if (strURL.includes("/collections/")) {
      addLinksToOtherCollectionsPage();
    }
    function addLinksToOtherCollectionsPage() {
        var  linkToOtherCollectionHtml ='<div class="custCollectionSliderTop2 page-width">'+
        '    <div class="swiper collectionSwiper">'+
        '        <div class="swiper-wrapper">'+
        '            <div class="swiper-slide">'+
        '                <a href="https://www.thesashbag.com/collections/frontpage" class="collectionProductBox">'+
        '                    <div class="imgBox" id="custAll">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection2_all.png" alt="All" title="All">'+
        '                    </div>'+
        '                    <div class="productTitle">'+
        '                        All'+
        '                    </div>'+
        '                </a>'+
        '            </div>'+
        '            <div class="swiper-slide">'+
        '                <a href="https://www.thesashbag.com/collections/classic" class="collectionProductBox">'+
        '                    <div class="imgBox" id="custLeather">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection2_leather.png" alt="Leather" title="Leather">'+
        '                    </div>'+
        '                    <div class="productTitle">'+
        '                        Leather'+
        '                    </div>'+
        '                </a>'+
        '            </div>'+
        '            <div class="swiper-slide">'+
        '                <a href="https://www.thesashbag.com/collections/faux-leather" class="collectionProductBox">'+
        '                    <div class="imgBox" id="custFauxLeather">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection2_faux_leather.png" alt="Faux Leather" title="Faux Leather">'+
        '                    </div>'+
        '                    <div class="productTitle">'+
        '                        Faux Leather'+
        '                    </div>'+
        '                </a>'+
        '            </div>'+
        '            <div class="swiper-slide">'+
        '                <a href="https://www.thesashbag.com/collections/fabric" class="collectionProductBox">'+
        '                    <div class="imgBox" id="custFabric">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection2_fabric.png" alt="Fabric" title="Fabric">'+
        '                    </div>'+
        '                    <div class="productTitle">'+
        '                        Fabric'+
        '                    </div>'+
        '                </a>'+
        '            </div>'+
        '            <div class="swiper-slide">'+
        '                <a href="https://www.thesashbag.com/collections/limited-edition" class="collectionProductBox">'+
        '                    <div class="imgBox" id="custLimitedEdition">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection2_limited_edition.png" alt="Limited Edition Colors" title="Limited Edition Colors">'+
        '                    </div>'+
        '                    <div class="productTitle">'+
        '                        Limited Edition Colors'+
        '                    </div>'+
        '                </a>'+
        '            </div>'+
        '            <div class="swiper-slide">'+
        '                <a href="https://www.thesashbag.com/collections/core-colors" class="collectionProductBox">'+
        '                    <div class="imgBox" id="custCoreColors">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection2_core_colors.png" alt="Core Colors" title="Core Colors">'+
        '                    </div>'+
        '                    <div class="productTitle">'+
        '                        Core Colors'+
        '                    </div>'+
        '                </a>'+
        '            </div>'+
        '            <div class="swiper-slide">'+
        '                <a href="https://www.thesashbag.com/collections/classic-2" class="collectionProductBox">'+
        '                    <div class="imgBox" id="custNonFringe">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection2_classic.png" alt="Classic (Non Fringe)" title="Classic (Non Fringe)">'+
        '                    </div>'+
        '                    <div class="productTitle">'+
        '                        Classic <br>(Non Fringe)'+
        '                    </div>'+
        '                </a>'+
        '            </div>'+
        '            <div class="swiper-slide">'+
        '                <a href="https://www.thesashbag.com/collections/fringe-1" class="collectionProductBox">'+
        '                    <div class="imgBox" id="custFringe">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection2_fringe.png" alt="Fringe" title="Fringe">'+
        '                    </div>'+
        '                    <div class="productTitle">'+
        '                        Fringe'+
        '                    </div>'+
        '                </a>'+
        '            </div>'+
        '            <div class="swiper-slide">'+
        '                <a href="https://www.thesashbag.com/collections/sash-accessories" class="collectionProductBox">'+
        '                    <div class="imgBox" id="custAddOns">'+
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection2_addons.png" alt="Add- Ons" title="Add- Ons">'+
        '                    </div>'+
        '                    <div class="productTitle">'+
        '                        Add-Ons'+
        '                    </div>'+
        '                </a>'+
        '            </div>'+
        '        </div>'+
        '        <div class="swiper-button-next">Next</div>'+
        '        <div class="swiper-button-prev">Prev</div>'+
        '    </div>'+
        '</div>';

            if( document.querySelectorAll('main#main [id*="__collection-banner"] .section-spacing--tight').length > 0 && document.querySelectorAll('.custCollectionSliderTop2').length == 0 ){
      
            var headlineSelector= document.querySelector('main#main [id*="__collection-banner"] .section-spacing--tight');
              headlineSelector.insertAdjacentHTML('beforeend', linkToOtherCollectionHtml);

            }

         // add active effect

         var  custArrayPageGet = {
            "/collections/frontpage": "custAll",
            "/collections/classic": "custLeather",
            "/collections/faux-leather": "custFauxLeather",
            "/collections/fabric": "custFabric",
            "/collections/limited-edition": "custLimitedEdition",
            "/collections/core-colors": "custCoreColors",
            "/collections/classic-2": "custNonFringe",
            "/collections/fringe-1": "custFringe",
            "/collections/sash-accessories": "custAddOns"

          }
          
          for (const keyword in custArrayPageGet) {
            if(keyword === strURL){
              document.getElementById(custArrayPageGet[keyword]).classList.add('custActive');
                break; 
            }
           
            
        }

        //add swiper script and html

        if (document.querySelectorAll('.custSwiperSliderJS').length == 0) {
            const scriptElement = document.createElement('script');
            scriptElement.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
            scriptElement.id = 'custSwiperSliderJS';
            document.head.appendChild(scriptElement);
        }

        if (document.querySelectorAll('.custSwiperSliderCSS').length ==0) {
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
            linkElement.id = 'custSwiperSliderCSS';
            document.head.appendChild(linkElement);
        }

        let intSwiperCnt = 0;
        const intSwiperInterval = setInterval(() => {
            intSwiperCnt += 1;

            if (typeof Swiper !== 'undefined') {
                const swiper = new Swiper(".collectionSwiper", {
                    slidesPerView: 2,
                    spaceBetween: 5,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 3.5,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 4.5,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 5.5,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 7.5,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 8.5,
                            spaceBetween: 20,
                        },
                        1400: {
                            slidesPerView: 9,
                            spaceBetween: 20,
                        },
                    },
                });

                clearInterval(intSwiperInterval);
            }

            if (intSwiperCnt === 50) {
                clearInterval(intSwiperInterval);
            }

            setTimeout(() => {
                document.querySelector('.custCollectionSliderTop2').style.display = 'block';
            }, 2500);

        }, 70);

    }

};