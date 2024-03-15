window.onload = function () {
 addNavigationBundleDropdowns();
 function addNavigationBundleDropdowns(){
         //after pillows li add Bundles for the desktop

         const pillowTabCount = Array.from(document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li'))
         .filter(item => item.textContent.includes('Pillows'))
         .length;
     
         const bundlesTabCount = Array.from(document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li'))
         .filter(item => item.textContent.includes('Bundles'))
         .length;
         
         if(pillowTabCount > 0 && bundlesTabCount == 0) {

            var strBundleHtml = '<li class="nav-item dropdown has-megamenu"><a class="nav-link dropdown-toggle " href="https://trtltravel.com/collections/all-products#accessories" data-bs-toggle="dropdown">Bundles'+
            '    </a>'+
            '    <div class="dropdown-menu megamenu bg-transparent pt-4 m-0 pb-0" role="menu">'+
            '        <div class="dropdown-wrapper py-5 bg-white">'+
            '            <div class="container container-lg-fixed">'+
            '                <div class="row gx-8">'+
            '                    <div class="col-6">'+
            '                        <div class="row gy-4">'+
            '                            <div class="col-12">'+
            '                                <div class="tile-line-item-menu custBestSellerHighlight">'+
            '                                    <div class="custItemImgBox">'+
            '                                        <img src="https://trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x.png">'+
            '                                    </div>'+
            '                                    <div class="row">'+
            '                                        <div class="col-12 d-flex">'+
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">'+
            '                                                DEEP SLEEP BUNDLE'+
            '                                                <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>'+
            '                                            </h5>'+
            '                                            <div class="ms-auto product-flashtags-container d-flex justify-content-center align-items-start position-relative">'+
            '                                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: BEST SELLER" class="flashtag rounded-2 flashtag-flashtag-best-seller fade-in"></span></div>'+
            '                                                <a href="/products/trtl-travel-pillow" class="stretched-link" aria-label="TRTL TRAVEL PILLOW"></a>'+
            '                                            </div>'+
            '                                        </div>'+
            '                                        <div class="col-12">'+
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" >'+
            '                                                The ultimate bundle with everything you need to arrive refreshed and recharged.'+
            '                                                <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>'+
            '                                            </p>'+
            '                                        </div>'+
            '                                    </div>'+
            '                                </div>'+
            '                            </div>'+
            '                            <div class="col-12">'+
            '                                <div class="tile-line-item-menu">'+
            '                                    <div class="custItemImgBox">'+
            '                                        <img src="https://trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x.jpg">'+
            '                                    </div>'+
            '                                    <div class="row">'+
            '                                        <div class="col-12 d-flex">'+
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">'+
            '                                                SNOOZE BUNDLE'+
            '                                                <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>'+
            '                                            </h5>'+
            '                                        </div>'+
            '                                        <div class="col-12">'+
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" >'+
            '                                                Sleep in comfort with a pillow of your choice plus our 100% blackout sleep mask.'+
            '                                                <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>'+
            '                                            </p>'+
            '                                        </div>'+
            '                                    </div>'+
            '                                </div>'+
            '                            </div>'+
            '                            <div class="col-12">'+
            '                                <div class="tile-line-item-menu">'+
            '                                    <div class="custItemImgBox">'+
            '                                        <img src="https://trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x.jpg">'+
            '                                    </div>'+
            '                                    <div class="row">'+
            '                                        <div class="col-12 d-flex">'+
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">'+
            '                                                PACKED-TO-PERFECTION BUNDLE'+
            '                                                <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="PACKED-TO-PERFECTION BUNDLE"></a>'+
            '                                            </h5>'+
            '                                        </div>'+
            '                                        <div class="col-12">'+
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" >'+
            '                                                Made and knitted with best technologies for a comfortable fit and experience.'+
            '                                                <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="PACKED-TO-PERFECTION BUNDLE"></a>'+
            '                                            </p>'+
            '                                        </div>'+
            '                                    </div>'+
            '                                </div>'+
            '                            </div>'+
            '                            <div class="col-12">'+
            '                                <div class="tile-line-item-menu" data-mp-tile-product="7548555985089">'+
            '                                    <div class="custItemImgBox">'+
            '                                        <img src="https://trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png">'+
            '                                    </div>'+
            '                                    <div class="row">'+
            '                                        <div class="col-12 d-flex">'+
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">'+
            '                                                ALL ABOARD BUNDLE'+
            '                                                <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="ALL ABOARD BUNDLE"></a>'+
            '                                            </h5>'+
            '                                        </div>'+
            '                                        <div class="col-12">'+
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" >'+
            '                                                Get an original pillow plus a junior pillow.'+
            '                                                <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="ALL ABOARD BUNDLE"></a>'+
            '                                            </p>'+
            '                                        </div>'+
            '                                    </div>'+
            '                                </div>'+
            '                            </div>'+
            '                            <div class="col-12">'+
            '                                <a class="btn btn-secondary py-2 px-4 fw-bolder font-ibm-sans mt-2" href="/collections/all-products">'+
            '                                    <span class="d-inline-block position-relative pe-4">SHOP ALL<i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y"  aria-hidden="true"></i></span>'+
            '                                </a>'+
            '                            </div>'+
            '                        </div>'+
            '                    </div>'+
            '                    <div class="col-6">'+
            '                        <div class="col-12">'+
            '                            <div class="tile-product-menu position-relative overflow-hidden" data-mp-tile-product="10012603515073">'+
            '                                <div class="row g-0">'+
            '                                    <div class="position-relative col-12" style="width:400px">'+
            '                                        <div id="image-wrapper-43116221235393-ddecd-306501" class="image-wrapper overflow-hidden ">'+
            '                                            <picture class=" d-block">'+
            '                                                <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DOUBLE COMFORT BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPO_Grey_TPO_Grey_Passportcover_620x.jpg">'+
            '                                            </picture>'+
            '                                        </div>'+
            '                                        <div class="position-absolute top-0 start-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">'+
            '                                            <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag-priority="true" class="flashtag rounded-2 flashtag-discount fade-in">25% OFF</span></div>'+
            '                                        </div>'+
            '                                        <div class="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient-bottom-white">'+
            '                                            <div class="flex-grow-1 position-relative">'+
            '                                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">DOUBLE COMFORT BUNDLE</h5>'+
            '                                                <p class="ls-0-1 m-0" >'+
            '                                                    Includes Free Gift'+
            '                                                </p>'+
            '                                            </div>'+
            '                                        </div>'+
            '                                    </div>'+
            '                                </div>'+
            '                                <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>'+
            '                            </div>'+
            '                        </div>'+
            '                    </div>'+
            '                </div>'+
            '            </div>'+
            '        </div>'+
            '    </div>'+
            '</li>';

          
            const navbarLinks = document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li a');

                navbarLinks.forEach(listItem => {
                
                    if (listItem.textContent.trim() === 'Pillows') {
                      
                         const parentListItem = listItem.parentElement;
                         parentListItem.insertAdjacentHTML('afterend', strBundleHtml);
                         const flashtags = listItem.parentNode.querySelectorAll('[data-tag="Flashtag: BEST SELLER"]');
        
                         if (flashtags.length > 0) {
                             flashtags.forEach(flashtag => {
                                 const tileLineItemMenuParent = flashtag.closest('.tile-line-item-menu');
                                 if (tileLineItemMenuParent) {
                                     tileLineItemMenuParent.classList.add('custBestSellerHighlight');
                                 }
                             });
                         }
                    }

                   
                    if (listItem.textContent.trim() === 'Reviews') {
                         //add class to the reviews section
                        const parentListItem = listItem.parentElement;
                        parentListItem.classList.add('custReviewMenu');

                     }
                });

             
            //replace html of accessories with new 
        
            const parentSleepMaskCol6 = document.querySelector('a[aria-label="SLEEP MASK"]').closest('.col-6');

            parentSleepMaskCol6.innerHTML = '<div class="col-12">'+
            '    <div class="tile-product-menu position-relative overflow-hidden" data-mp-tile-product="10012603515073">'+
            '        <div class="row g-0">'+
            '            <div class="position-relative col-12" style="width:400px">'+
            '                <div id="image-wrapper-43116221235393-ddecd-306501" class="image-wrapper overflow-hidden ">'+
            '                    <picture class=" d-block">'+
            '                        <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DOUBLE COMFORT BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPO_Grey_TPO_Grey_Passportcover_620x.jpg">'+
            '                    </picture>'+
            '                </div>'+
            '                <div class="position-absolute top-0 start-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">'+
            '                    <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag-priority="true" class="flashtag rounded-2 flashtag-discount fade-in">25% OFF</span></div>'+
            '                </div>'+
            '                <div class="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient-bottom-white">'+
            '                    <div class="flex-grow-1 position-relative">'+
            '                        <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">DOUBLE COMFORT BUNDLE</h5>'+
            '                        <p class="ls-0-1 m-0" style="font-size: .85rem !important">'+
            '                            Includes Free Gift'+
            '                        </p>'+
            '                    </div>'+
            '                </div>'+
            '            </div>'+
            '        </div>'+
            '        <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>'+
            '    </div>'+
            '</div>';

         }

         //Mobile view 

         var strMobileBundleHtml ='<div class="col-12">'+
         '    <a class="nav-link p-0 fs-3 font-ibm-mono offcanvas-dropdown-toggle position-relative collapsed" data-bs-toggle="collapse" href="#nav-offcanvas-link-bundle-sublinks" role="button" aria-expanded="false" aria-controls="nav-offcanvas-link-bundle-sublinks">'+
         '        Bundles'+
         '    </a>'+
         '    <div class="collapse" id="nav-offcanvas-link-bundle-sublinks">'+
         '        <div class="row g-3 mt-2">'+
         '            <div class="col-6 mt-2">'+
         '                <div class="tile-product-menu text-center overflow-hidden" data-mp-tile-product="7548442149057">'+
         '                    <div class="row g-0">'+
         '                        <div class="position-relative overflow-hidden col-12 mb-3 " style="width:400px;">'+
         '                            <div id="image-wrapper-25903854125249-b1b11-610449" class="image-wrapper overflow-hidden ">'+
         '                                <picture class=" d-block">'+
         '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="SNOOZE BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x.jpg">'+
         '                                </picture>'+
         '                            </div>'+
         '                            <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>'+
         '                        </div>'+
         '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
         '                            <div class="flex-grow-1 position-relative">'+
         '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">'+
         '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">'+
         '                                        SNOOZE BUNDLE'+
         '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>'+
         '                                    </span>'+
         '                                </h5>'+
         '                                <p class="font-ibm-sans text-info ls-0-1" >'+
         '                                    Sleep in comfort with a pillow of your choice plus our 100% blackout sleep mask.'+
         '                                </p>'+
         '                                <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>'+
         '                            </div>'+
         '                        </div>'+
         '                    </div>'+
         '                </div>'+
         '            </div>'+
         '            <div class="col-6 mt-2">'+
         '                <div class="tile-product-menu text-center overflow-hidden custBestSellerHighlight">'+
         '                    <div class="row g-0">'+
         '                        <div class="position-relative overflow-hidden col-12 mb-3 " style="width:400px;">'+
         '                            <div id="image-wrapper-26403095281857-b1b11-902097" class="image-wrapper overflow-hidden ">'+
         '                                <picture class=" d-block">'+
         '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DEEP SLEEP BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x.png">'+
         '                                </picture>'+
         '                            </div>'+
         '                            <div class="position-absolute bottom-0 start-0 end-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">'+
         '                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: BEST SELLER" class="flashtag rounded-2 flashtag-flashtag-best-seller fade-in"></span></div>'+
         '                            </div>'+
         '                            <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>'+
         '                        </div>'+
         '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
         '                            <div class="flex-grow-1 position-relative">'+
         '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase"><span class="d-inline-block position-relative pe-4 mx-md-2">DEEP SLEEP BUNDLE<i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i></span></h5>'+
         '                                <p class="font-ibm-sans text-info ls-0-1" >'+
         '                                    The ultimate bundle with everything you need to arrive refreshed and recharged.'+
         '                                </p>'+
         '                                <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>'+
         '                            </div>'+
         '                        </div>'+
         '                    </div>'+
         '                </div>'+
         '            </div>'+
         '            <div class="col-6 mt-2">'+
         '                <div class="tile-product-menu text-center overflow-hidden">'+
         '                    <div class="row g-0">'+
         '                        <div class="position-relative overflow-hidden col-12 mb-3 " style="width:400px;">'+
         '                            <div id="image-wrapper-26403095281857-b1b11-902097" class="image-wrapper overflow-hidden ">'+
         '                                <picture class=" d-block">'+
         '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="PACKED-TO-PERFECTION BUNDLE" src="https://trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x.jpg">'+
         '                                </picture>'+
         '                            </div>'+
         '                            <div class="position-absolute bottom-0 start-0 end-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">'+
         '                            </div>'+
         '                            <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="PACKED-TO-PERFECTION BUNDLE"></a>'+
         '                        </div>'+
         '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
         '                            <div class="flex-grow-1 position-relative">'+
         '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">'+
         '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">'+
         '                                        PACKED-TO-PERFECTION BUNDLE'+
         '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>'+
         '                                    </span>'+
         '                                </h5>'+
         '                                <p class="font-ibm-sans text-info ls-0-1" >'+
         '                                    Made and knitted with best technologies for a comfortable fit and experience.'+
         '                                </p>'+
         '                                <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="PACKED-TO-PERFECTION BUNDLE"></a>'+
         '                            </div>'+
         '                        </div>'+
         '                    </div>'+
         '                </div>'+
         '            </div>'+
         '            <div class="col-6 mt-2">'+
         '                <div class="tile-product-menu text-center overflow-hidden">'+
         '                    <div class="row g-0">'+
         '                        <div class="position-relative overflow-hidden col-12 mb-3 " style="width:400px;">'+
         '                            <div id="image-wrapper-26403095281857-b1b11-902097" class="image-wrapper overflow-hidden ">'+
         '                                <picture class=" d-block">'+
         '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="ALL ABOARD BUNDLE" src="https://trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png">'+
         '                                </picture>'+
         '                            </div>'+
         '                            <div class="position-absolute bottom-0 start-0 end-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">'+
         '                            </div>'+
         '                            <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="ALL ABOARD BUNDLE"></a>'+
         '                        </div>'+
         '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
         '                            <div class="flex-grow-1 position-relative">'+
         '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">'+
         '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">'+
         '                                        ALL ABOARD BUNDLE'+
         '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>'+
         '                                    </span>'+
         '                                </h5>'+
         '                                <p class="font-ibm-sans text-info ls-0-1" >'+
         '                                    Get an original pillow plus a junior pillow.'+
         '                                </p>'+
         '                                <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="ALL ABOARD BUNDLE"></a>'+
         '                            </div>'+
         '                        </div>'+
         '                    </div>'+
         '                </div>'+
         '            </div>'+
         '            <div class="col-12 mt-2">'+
         '                <div class="tile-product-menu text-center overflow-hidden">'+
         '                    <div class="row g-0">'+
         '                        <div class="position-relative overflow-hidden col-12 mb-3 height-medium custMainProductNav">'+
         '                            <div id="image-wrapper-43116221235393-b1b11-198916" class="image-cover overflow-hidden">'+
         '                                <picture class=" d-block">'+
         '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DOUBLE COMFORT BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPO_Grey_TPO_Grey_Passportcover_620x.jpg">'+
         '                                </picture>'+
         '                            </div>'+
         '                            <div class="position-absolute top-0 start-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">'+
         '                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag-priority="true" class="flashtag rounded-2 flashtag-discount fade-in">25% OFF</span></div>'+
         '                            </div>'+
         '                            <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>'+
         '                        </div>'+
         '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
         '                            <div class="flex-grow-1 position-relative">'+
         '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">'+
         '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">'+
         '                                        DOUBLE COMFORT BUNDLE'+
         '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>'+
         '                                    </span>'+
         '                                </h5>'+
         '                                <p class="font-ibm-sans text-info ls-0-1" >'+
         '                                    Includes free gift'+
         '                                </p>'+
         '                                <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>'+
         '                            </div>'+
         '                        </div>'+
         '                    </div>'+
         '                </div>'+
         '            </div>'+
         '            <div class="col-6 mt-2">'+
         '                <div class="tile-callout card h-100 rounded-0 bg-transparent position-relative overflow-hidden">'+
         '                    <div class="text-center d-md-none">'+
         '                        <h5 class="mt-3 fw-bolder text-uppercase">'+
         '                            <span class="d-inline-block position-relative pe-4 mx-md-2">'+
         '                                SHOP ALL'+
         '                                <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y"  aria-hidden="true"></i>'+
         '                            </span>'+
         '                        </h5>'+
         '                    </div>'+
         '                    <div class="overlay-primary position-absolute"></div>'+
         '                    <a class="stretched-link" href="https://trtltravel.com/collections/all-products" aria-label="SHOP ALL"></a>'+
         '                </div>'+
         '            </div>'+
         '        </div>'+
         '    </div>'+
         '</div>';

        // Select the element after which you want to insert HTML
        const mobileTargetElement = document.querySelector('.section-header .offcanvas .offcanvas-body .w-100 > .row > .col-12:first-child');

        // Check if the target element exists
        if (mobileTargetElement) {
            mobileTargetElement.insertAdjacentHTML('afterend', strMobileBundleHtml);
        } 
        const mobileNavbarLinksElement = document.querySelectorAll('.section-header .offcanvas .offcanvas-body .w-100 > .row > .col-12 a');

        mobileNavbarLinksElement.forEach(listItem => {

            if (listItem.textContent.trim() === 'Pillows') {
                const flashtags = listItem.parentNode.querySelectorAll('[data-tag="Flashtag: BEST SELLER"]');
                 if (flashtags.length > 0) {
                     flashtags.forEach(flashtag => {
                         const tileLineItemMenuParent = flashtag.closest('.tile-product-menu');
                         if (tileLineItemMenuParent) {
                             tileLineItemMenuParent.classList.add('custBestSellerHighlight');
                         }
                     });
                 }
            }

              //replace html of accessories with new 
             
              const mobileDoubleComfortBundleParentHTML ='<div class="col-12 mt-2 custMobileBundleHtml">'+
              '    <div class="tile-product-menu text-center overflow-hidden">'+
              '        <div class="row g-0">'+
              '            <div class="position-relative overflow-hidden col-12 mb-3 height-medium custMainProductNav">'+
              '                <div id="image-wrapper-43116221235393-b1b11-198916" class="image-cover overflow-hidden">'+
              '                    <picture class=" d-block"> <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DOUBLE COMFORT BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPO_Grey_TPO_Grey_Passportcover_620x.jpg"> </picture>'+
              '                </div>'+
              '                <div class="position-absolute top-0 start-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">'+
              '                    <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag-priority="true" class="flashtag rounded-2 flashtag-discount fade-in">25% OFF</span></div>'+
              '                </div> <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>'+ 
              '            </div>'+
              '            <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
              '                <div class="flex-grow-1 position-relative">'+
              '                    <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase"> <span class="d-inline-block position-relative pe-4 mx-md-2"> DOUBLE COMFORT BUNDLE <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i> </span> </h5>'+
              '                    <p class="font-ibm-sans text-info ls-0-1"> Includes free gift </p> <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>'+
              '                </div>'+
              '            </div>'+
              '        </div>'+
              '    </div>'+
              '</div>';

              var mobileDoubleBundleElements = document.querySelectorAll('.section-header .offcanvas .offcanvas-body .w-100 > .row > .col-12 .collapse > .row > .col-6');
            if (mobileDoubleBundleElements.length > 2 && document.querySelectorAll('.custMobileBundleHtml').length == 0) {
                var thirdElement = mobileDoubleBundleElements[mobileDoubleBundleElements.length - 2];
                thirdElement.insertAdjacentHTML('afterend', mobileDoubleComfortBundleParentHTML);
            }

         });


    }

};