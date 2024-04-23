window.onload = function () {
    addNavigationBundleDropdownsV2();
    addCustHtmlV2();
    clickOperationsV2();
};

//add Navigation bundle dropdowns
function addNavigationBundleDropdownsV2() {
    //after pillows li add Bundles for the desktop
    const pillowTabCount = Array.from(document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li'))
        .filter(item => item.textContent.includes('Pillows'))
        .length;

    const bundlesTabCount = Array.from(document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li'))
        .filter(item => item.textContent.includes('Bundles'))
        .length;

    if (pillowTabCount > 0 && bundlesTabCount == 0) {
        var strBundleHtml = '<li class="nav-item dropdown has-megamenu"><a class="nav-link dropdown-toggle " href="https://trtltravel.com/collections/all-products#accessories" data-bs-toggle="dropdown">Bundles' +
            '    </a>' +
            '    <div class="dropdown-menu megamenu bg-transparent pt-4 m-0 pb-0" role="menu">' +
            '        <div class="dropdown-wrapper py-5 bg-white">' +
            '            <div class="container container-lg-fixed">' +
            '                <div class="row gx-8">' +
            '                    <div class="col-6">' +
            '                        <div class="row gy-4">' +
            '                            <div class="col-12">' +
            '                                <div class="tile-line-item-menu  custBestSellerHighlightV2">' +
            '                                    <div class="custItemImgBoxV2">' +
            '                                        <img src="https://trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x.png">' +
            '                                    </div>' +
            '                                    <div class="row">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                DEEP SLEEP BUNDLE' +
            '                                                <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>' +
            '                                            </h5>' +
            '                                            <div class="ms-auto product-flashtags-container d-flex justify-content-center align-items-start position-relative">' +
            '                                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: BEST SELLER" class="flashtag rounded-2 flashtag-flashtag-best-seller fade-in"></span></div>' +
            '                                                <a href="/products/trtl-travel-pillow" class="stretched-link" aria-label="TRTL TRAVEL PILLOW"></a>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" >' +
            '                                                The ultimate bundle with everything you need to arrive refreshed and recharged.' +
            '                                                <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                            <div class="col-12">' +
            '                                <div class="tile-line-item-menu">' +
            '                                    <div class="custItemImgBoxV2">' +
            '                                        <img src="https://trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x.jpg">' +
            '                                    </div>' +
            '                                    <div class="row">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                SNOOZE BUNDLE' +
            '                                                <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>' +
            '                                            </h5>' +
            '<div class="ms-auto product-flashtags-container d-flex justify-content-center align-items-start     position-relative">' +
            '    <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: NEW IN" class="flashtag rounded-2 flashtag-discount fade-in"></span></div>' +
            '    <a href="/products/trtl-pillow-cool" class="stretched-link" aria-label="TRTL PILLOW COOL"></a>' +
            '</div>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" >' +
            '                                                Sleep in comfort with a pillow of your choice plus our 100% blackout sleep mask.' +
            '                                                <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                            <div class="col-12">' +
            '                                <div class="tile-line-item-menu">' +
            '                                    <div class="custItemImgBoxV2">' +
            '                                        <img src="https://trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x.jpg">' +
            '                                    </div>' +
            '                                    <div class="row">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                PACKED-TO-PERFECTION BUNDLE' +
            '                                                <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="PACKED-TO-PERFECTION BUNDLE"></a>' +
            '                                            </h5>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" >' +
            '                                                Made and knitted with best technologies for a comfortable fit and experience.' +
            '                                                <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="PACKED-TO-PERFECTION BUNDLE"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                            <div class="col-12">' +
            '                                <div class="tile-line-item-menu" data-mp-tile-product="7548555985089">' +
            '                                    <div class="custItemImgBoxV2">' +
            '                                        <img src="https://trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png">' +
            '                                    </div>' +
            '                                    <div class="row">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                ALL ABOARD BUNDLE' +
            '                                                <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="ALL ABOARD BUNDLE"></a>' +
            '                                            </h5>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" >' +
            '                                                Get an original pillow plus a junior pillow.' +
            '                                                <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="ALL ABOARD BUNDLE"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                            <div class="col-12">' +
            '                                <a class="btn btn-secondary py-2 px-4 fw-bolder font-ibm-sans mt-2" href="/collections/all-products">' +
            '                                    <span class="d-inline-block position-relative pe-4">SHOP ALL<i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y"  aria-hidden="true"></i></span>' +
            '                                </a>' +
            '                            </div>' +
            '                        </div>' +
            '                    </div>' +
            '                    <div class="col-6">' +
            '                        <div class="col-12">' +
            '                            <div class="tile-product-menu position-relative overflow-hidden" data-mp-tile-product="10012603515073">' +
            '                                <div class="row g-0">' +
            '                                    <div class="position-relative col-12" style="width:400px">' +
            '                                        <div id="image-wrapper-43116221235393-ddecd-306501" class="image-wrapper overflow-hidden ">' +
            '                                            <picture class=" d-block">' +
            '                                                <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DOUBLE COMFORT BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPO_Grey_TPO_Grey_Passportcover_620x.jpg">' +
            '                                            </picture>' +
            '                                        </div>' +
            '                                        <div class="position-absolute top-0 start-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">' +
            '                                            <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag-priority="true" class="flashtag rounded-2 flashtag-discount fade-in">25% OFF</span></div>' +
            '                                        </div>' +
            '                                        <div class="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient-bottom-white">' +
            '                                            <div class="flex-grow-1 position-relative">' +
            '                                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">DOUBLE COMFORT BUNDLE</h5>' +
            '                                                <p class="ls-0-1 m-0" >' +
            '                                                    Includes Free Gift' +
            '                                                </p>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>' +
            '                            </div>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
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
                            tileLineItemMenuParent.classList.add('custBestSellerHighlightV2');
                        }
                    });
                }
            }
            if (listItem.textContent.trim() === 'Reviews') {
                //add class to the reviews section
                const parentListItem = listItem.parentElement;
                parentListItem.classList.add('custReviewMenuV2');

            }
        });
        //replace html of accessories with new 
        const parentSleepMaskCol6 = document.querySelector('a[aria-label="SLEEP MASK"]').closest('.col-6');
        parentSleepMaskCol6.innerHTML = '<div class="col-12">' +
            '    <div class="tile-product-menu position-relative overflow-hidden" data-mp-tile-product="10012603515073">' +
            '        <div class="row g-0">' +
            '            <div class="position-relative col-12" style="width:400px">' +
            '                <div id="image-wrapper-43116221235393-ddecd-306501" class="image-wrapper overflow-hidden ">' +
            '                    <picture class=" d-block">' +
            '                        <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DOUBLE COMFORT BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPO_Grey_TPO_Grey_Passportcover_620x.jpg">' +
            '                    </picture>' +
            '                </div>' +
            '                <div class="position-absolute top-0 start-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">' +
            '                    <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag-priority="true" class="flashtag rounded-2 flashtag-discount fade-in">25% OFF</span></div>' +
            '                </div>' +
            '                <div class="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient-bottom-white">' +
            '                    <div class="flex-grow-1 position-relative">' +
            '                        <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">DOUBLE COMFORT BUNDLE</h5>' +
            '                        <p class="ls-0-1 m-0">' +
            '                            Includes Free Gift' +
            '                        </p>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '        <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>' +
            '    </div>' +
            '</div>';
    }
    //Mobile view 
    var strMobileBundleHtml = '<div class="col-12">' +
        '    <a class="nav-link p-0 fs-3 font-ibm-mono offcanvas-dropdown-toggle position-relative collapsed" data-bs-toggle="collapse" href="#nav-offcanvas-link-bundle-sublinks" role="button" aria-expanded="false" aria-controls="nav-offcanvas-link-bundle-sublinks">' +
        '        Bundles' +
        '    </a>' +
        '    <div class="collapse" id="nav-offcanvas-link-bundle-sublinks">' +
        '        <div class="row g-3 mt-2">' +
        '            <div class="col-6 mt-2">' +
        '                <div class="tile-product-menu text-center overflow-hidden" data-mp-tile-product="7548442149057">' +
        '                    <div class="row g-0">' +
        '                        <div class="position-relative overflow-hidden col-12 mb-3 " style="width:400px;">' +
        '                            <div id="image-wrapper-25903854125249-b1b11-610449" class="image-wrapper overflow-hidden ">' +
        '                                <picture class=" d-block">' +
        '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="SNOOZE BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x.jpg">' +
        '                                </picture>' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>' +
        '                        </div>' +
        '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">' +
        '                            <div class="flex-grow-1 position-relative">' +
        '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">' +
        '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">' +
        '                                        SNOOZE BUNDLE' +
        '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>' +
        '                                    </span>' +
        '                                </h5>' +
        '                                <p class="font-ibm-sans text-info ls-0-1" >' +
        '                                    Sleep in comfort with a pillow of your choice plus our 100% blackout sleep mask.' +
        '                                </p>' +
        '                                <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="col-6 mt-2">' +
        '                <div class="tile-product-menu text-center overflow-hidden  custBestSellerHighlightV2">' +
        '                    <div class="row g-0">' +
        '                        <div class="position-relative overflow-hidden col-12 mb-3 " style="width:400px;">' +
        '                            <div id="image-wrapper-26403095281857-b1b11-902097" class="image-wrapper overflow-hidden ">' +
        '                                <picture class=" d-block">' +
        '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DEEP SLEEP BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x.png">' +
        '                                </picture>' +
        '                            </div>' +
        '                            <div class="position-absolute bottom-0 start-0 end-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">' +
        '                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: BEST SELLER" class="flashtag rounded-2 flashtag-flashtag-best-seller fade-in"></span></div>' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>' +
        '                        </div>' +
        '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">' +
        '                            <div class="flex-grow-1 position-relative">' +
        '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase"><span class="d-inline-block position-relative pe-4 mx-md-2">DEEP SLEEP BUNDLE<i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i></span></h5>' +
        '                                <p class="font-ibm-sans text-info ls-0-1" >' +
        '                                    The ultimate bundle with everything you need to arrive refreshed and recharged.' +
        '                                </p>' +
        '                                <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="col-6 mt-2">' +
        '                <div class="tile-product-menu text-center overflow-hidden">' +
        '                    <div class="row g-0">' +
        '                        <div class="position-relative overflow-hidden col-12 mb-3 " style="width:400px;">' +
        '                            <div id="image-wrapper-26403095281857-b1b11-902097" class="image-wrapper overflow-hidden ">' +
        '                                <picture class=" d-block">' +
        '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="PACKED-TO-PERFECTION BUNDLE" src="https://trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x.jpg">' +
        '                                </picture>' +
        '                            </div>' +
        '                            <div class="position-absolute bottom-0 start-0 end-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="PACKED-TO-PERFECTION BUNDLE"></a>' +
        '                        </div>' +
        '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">' +
        '                            <div class="flex-grow-1 position-relative">' +
        '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">' +
        '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">' +
        '                                        PACKED-TO-PERFECTION BUNDLE' +
        '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>' +
        '                                    </span>' +
        '                                </h5>' +
        '                                <p class="font-ibm-sans text-info ls-0-1" >' +
        '                                    Made and knitted with best technologies for a comfortable fit and experience.' +
        '                                </p>' +
        '                                <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="PACKED-TO-PERFECTION BUNDLE"></a>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="col-6 mt-2">' +
        '                <div class="tile-product-menu text-center overflow-hidden">' +
        '                    <div class="row g-0">' +
        '                        <div class="position-relative overflow-hidden col-12 mb-3 " style="width:400px;">' +
        '                            <div id="image-wrapper-26403095281857-b1b11-902097" class="image-wrapper overflow-hidden ">' +
        '                                <picture class=" d-block">' +
        '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="ALL ABOARD BUNDLE" src="https://trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png">' +
        '                                </picture>' +
        '                            </div>' +
        '                            <div class="position-absolute bottom-0 start-0 end-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="ALL ABOARD BUNDLE"></a>' +
        '                        </div>' +
        '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">' +
        '                            <div class="flex-grow-1 position-relative">' +
        '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">' +
        '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">' +
        '                                        ALL ABOARD BUNDLE' +
        '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>' +
        '                                    </span>' +
        '                                </h5>' +
        '                                <p class="font-ibm-sans text-info ls-0-1" >' +
        '                                    Get an original pillow plus a junior pillow.' +
        '                                </p>' +
        '                                <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="ALL ABOARD BUNDLE"></a>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="col-12 mt-2">' +
        '                <div class="tile-product-menu text-center overflow-hidden">' +
        '                    <div class="row g-0">' +
        '                        <div class="position-relative overflow-hidden col-12 mb-3 height-medium custMainProductNavV2">' +
        '                            <div id="image-wrapper-43116221235393-b1b11-198916" class="image-cover overflow-hidden">' +
        '                                <picture class=" d-block">' +
        '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DOUBLE COMFORT BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPO_Grey_TPO_Grey_Passportcover_620x.jpg">' +
        '                                </picture>' +
        '                            </div>' +
        '                            <div class="position-absolute top-0 start-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">' +
        '                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag-priority="true" class="flashtag rounded-2 flashtag-discount fade-in">25% OFF</span></div>' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>' +
        '                        </div>' +
        '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">' +
        '                            <div class="flex-grow-1 position-relative">' +
        '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">' +
        '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">' +
        '                                        DOUBLE COMFORT BUNDLE' +
        '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>' +
        '                                    </span>' +
        '                                </h5>' +
        '                                <p class="font-ibm-sans text-info ls-0-1" >' +
        '                                    Includes free gift' +
        '                                </p>' +
        '                                <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="col-6 mt-2">' +
        '                <div class="tile-callout card h-100 rounded-0 bg-transparent position-relative overflow-hidden">' +
        '                    <div class="text-center d-md-none">' +
        '                        <h5 class="mt-3 fw-bolder text-uppercase">' +
        '                            <span class="d-inline-block position-relative pe-4 mx-md-2">' +
        '                                SHOP ALL' +
        '                                <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y"  aria-hidden="true"></i>' +
        '                            </span>' +
        '                        </h5>' +
        '                    </div>' +
        '                    <div class="overlay-primary position-absolute"></div>' +
        '                    <a class="stretched-link" href="https://trtltravel.com/collections/all-products" aria-label="SHOP ALL"></a>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
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
                        tileLineItemMenuParent.classList.add('custBestSellerHighlightV2');
                    }
                });
            }
        }

        //replace html of accessories with new 
        const mobileDoubleComfortBundleParentHTML = '<div class="col-12 mt-2 custMobileBundleHtmlV2">' +
            '    <div class="tile-product-menu text-center overflow-hidden">' +
            '        <div class="row g-0">' +
            '            <div class="position-relative overflow-hidden col-12 mb-3 height-medium custMainProductNavV2">' +
            '                <div id="image-wrapper-43116221235393-b1b11-198916" class="image-cover overflow-hidden">' +
            '                    <picture class=" d-block"> <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DOUBLE COMFORT BUNDLE" src="https://trtltravel.com/cdn/shop/files/TPO_Grey_TPO_Grey_Passportcover_620x.jpg"> </picture>' +
            '                </div>' +
            '                <div class="position-absolute top-0 start-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">' +
            '                    <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag-priority="true" class="flashtag rounded-2 flashtag-discount fade-in">25% OFF</span></div>' +
            '                </div> <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>' +
            '            </div>' +
            '            <div class="pb-0 px-md-2 col-12 d-flex align-items-center">' +
            '                <div class="flex-grow-1 position-relative">' +
            '                    <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase"> <span class="d-inline-block position-relative pe-4 mx-md-2"> DOUBLE COMFORT BUNDLE <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i> </span> </h5>' +
            '                    <p class="font-ibm-sans text-info ls-0-1"> Includes free gift </p> <a href="https://trtltravel.com/products/double-comfort-bundle" class="stretched-link" aria-label="DOUBLE COMFORT BUNDLE"></a>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';

        var mobileDoubleBundleElements = document.querySelectorAll('.section-header .offcanvas .offcanvas-body .w-100 > .row > .col-12 .collapse > .row > .col-6');
        if (mobileDoubleBundleElements.length > 2 && document.querySelectorAll('.custMobileBundleHtmlV2').length == 0) {
            var thirdElement = mobileDoubleBundleElements[mobileDoubleBundleElements.length - 2];
            thirdElement.insertAdjacentHTML('afterend', mobileDoubleComfortBundleParentHTML);
        }

    });


}

// add Nav html changes 
function addCustHtmlV2() {
    //Conditions for desktop and mobile
    if (window.screen.width > 991) {
        document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li.nav-item .nav-link').forEach(navLink => {
            if (navLink.textContent.includes("Bundles") && !document.querySelector('.saveBadge')) {
                const anchElement = navLink.closest('a');
                anchElement.insertAdjacentHTML('beforeend', '<span class="saveBadge">SAVE UP TO 41%</span>');

            }
        });
    } else {
        //Bundle badge
        document.querySelectorAll('.section-header .offcanvas .offcanvas-body a.nav-link.offcanvas-dropdown-toggle').forEach(navLink => {
            if (navLink.textContent.includes("Bundles") && !document.querySelector('.budlesMobMenu')) {
                const anchElement = navLink.closest('a');
                anchElement.insertAdjacentHTML('beforeend', '<span class="saveBadge">SAVE UP TO 41%</span>');
                anchElement?.classList.add('budlesMobMenu');
            }
        });
        //Mobile Navigation 
        var mobileNavHtml = '<div class="custMobileNavPanelV2 custHideContentV2">' +
            '    <div class="custMenuHeaderV2"></div>' +
            '    <div class="custMenuBodyV2">' +
            '        <div class="custMenuItems">' +
            '            <div class="custMobileNavPanelV2">' +
            '                <div class="custMenuHeaderV2">' +
            '                    <div class="backBtn">' +
            '                        <img src="https://trtltravel.com/cdn/shop/t/158/assets/icon-arrow-nav.svg?v=175938150152755451101711104917" alt="TRTLE Back Button">' +
            '                        Back' +
            '                    </div>' +
            '                    <div class="custTabsMenus">' +
            '                        <div class="menuTab active" data-name="pillows">' +
            '                              <span>' +
            '                               <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-mob-icon.svg" alt="Pillows">' +
            '                            </span>' +
            '                            Pillows' +
            '                        </div>' +
            '                        <div class="menuTab" data-name="bundles">' +
            '                            <span class="saveBadge">SAVE UP TO 41%</span>' +
            '                            Bundles' +
            '                        </div>' +
            '                        <div class="menuTab" data-name="accessories">' +
            '                              <span>' +
            '                               <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/accessories-mob-icon.svg" alt="Accessories">' +
            '                            </span>' +
            '                            Accessories' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '                <div class="custMenuBodyV2">' +
            '                    <div id="pillowsMenu" class="custMenuItems custNavItems">' +
            '                        <div class="tile-line-item-menu custBestSellerHighlightV2">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/TPO_SLEEPING_NEW_100x100_crop_center.jpg?v=1674214662" data-srcset="//trtltravel.com/cdn/shop/files/TPO_SLEEPING_NEW_100x100_crop_center.jpg?v=1674214662 1x, //trtltravel.com/cdn/shop/files/TPO_SLEEPING_NEW_100x100_crop_center@2x.jpg?v=1674214662 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="PILLOW ORIGINAL" src="//trtltravel.com/cdn/shop/files/TPO_SLEEPING_NEW_100x100_crop_center.jpg?v=1674214662" srcset="//trtltravel.com/cdn/shop/files/TPO_SLEEPING_NEW_100x100_crop_center.jpg?v=1674214662 1x, //trtltravel.com/cdn/shop/files/TPO_SLEEPING_NEW_100x100_crop_center@2x.jpg?v=1674214662 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9 ">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                PILLOW ORIGINAL' +
            '                                                <a href="/products/trtl-travel-pillow" class="stretched-link" aria-label="TRTL TRAVEL PILLOW"></a>' +
            '                                            </h5>' +
            '                                            <div class="ms-auto product-flashtags-container d-flex justify-content-center align-items-start position-relative">' +
            '                                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: BEST SELLER" class="flashtag rounded-2 flashtag-flashtag-best-seller fade-in"></span></div>' +
            '                                                <a href="/products/trtl-travel-pillow" class="stretched-link" aria-label="TRTL TRAVEL PILLOW"></a>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" style="">' +
            '                                                The most comfortable sleep you\'ll ever have traveling' +
            '                                                <a href="/products/trtl-travel-pillow" class="stretched-link" aria-label="TRTL TRAVEL PILLOW"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/0-TPCSLEEPING_edc470e5-5f50-4496-9506-e1267e725365_100x100_crop_center.jpg?v=1700060449" data-srcset="//trtltravel.com/cdn/shop/files/0-TPCSLEEPING_edc470e5-5f50-4496-9506-e1267e725365_100x100_crop_center.jpg?v=1700060449 1x, //trtltravel.com/cdn/shop/files/0-TPCSLEEPING_edc470e5-5f50-4496-9506-e1267e725365_100x100_crop_center@2x.jpg?v=1700060449 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="PILLOW COOL" src="//trtltravel.com/cdn/shop/files/0-TPCSLEEPING_edc470e5-5f50-4496-9506-e1267e725365_100x100_crop_center.jpg?v=1700060449" srcset="//trtltravel.com/cdn/shop/files/0-TPCSLEEPING_edc470e5-5f50-4496-9506-e1267e725365_100x100_crop_center.jpg?v=1700060449 1x, //trtltravel.com/cdn/shop/files/0-TPCSLEEPING_edc470e5-5f50-4496-9506-e1267e725365_100x100_crop_center@2x.jpg?v=1700060449 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                PILLOW COOL' +
            '                                                <a href="/products/trtl-pillow-cool" class="stretched-link" aria-label="PILLOW COOL"></a>' +
            '                                            </h5>' +
            '                                            <div class="ms-auto product-flashtags-container d-flex justify-content-center align-items-start position-relative">' +
            '                                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: New In" class="flashtag rounded-2 flashtag-flashtag-new-in fade-in"></span></div>' +
            '                                                <a href="/products/trtl-pillow-cool" class="stretched-link" aria-label="PILLOW COOL"></a>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block">' +
            '                                                Stay cool and comfy on your journey' +
            '                                                <a href="/products/trtl-pillow-cool" class="stretched-link" aria-label="PILLOW COOL"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/TPP_SLEEPING_100x100_crop_center.jpg?v=1669371945" data-srcset="//trtltravel.com/cdn/shop/files/TPP_SLEEPING_100x100_crop_center.jpg?v=1669371945 1x, //trtltravel.com/cdn/shop/files/TPP_SLEEPING_100x100_crop_center@2x.jpg?v=1669371945 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="PILLOW PLUS" src="//trtltravel.com/cdn/shop/files/TPP_SLEEPING_100x100_crop_center.jpg?v=1669371945" srcset="//trtltravel.com/cdn/shop/files/TPP_SLEEPING_100x100_crop_center.jpg?v=1669371945 1x, //trtltravel.com/cdn/shop/files/TPP_SLEEPING_100x100_crop_center@2x.jpg?v=1669371945 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9 ">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                PILLOW PLUS' +
            '                                                <a href="/products/trtl-pillow-plus" class="stretched-link" aria-label="TRTL PILLOW PLUS"></a>' +
            '                                            </h5>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block">' +
            '                                                Height adjustable for your comfort' +
            '                                                <a href="/products/trtl-pillow-plus" class="stretched-link" aria-label="TRTL PILLOW PLUS"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/TRTLTravelPillowJunior-zebra-2_8e829f2f-477d-44fc-86f7-21e3152b6b4d_100x100_crop_center.jpg?v=1686824625" data-srcset="//trtltravel.com/cdn/shop/files/TRTLTravelPillowJunior-zebra-2_8e829f2f-477d-44fc-86f7-21e3152b6b4d_100x100_crop_center.jpg?v=1686824625 1x, //trtltravel.com/cdn/shop/files/TRTLTravelPillowJunior-zebra-2_8e829f2f-477d-44fc-86f7-21e3152b6b4d_100x100_crop_center@2x.jpg?v=1686824625 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="TRTL PILLOW JUNIOR" src="//trtltravel.com/cdn/shop/files/TRTLTravelPillowJunior-zebra-2_8e829f2f-477d-44fc-86f7-21e3152b6b4d_100x100_crop_center.jpg?v=1686824625" srcset="//trtltravel.com/cdn/shop/files/TRTLTravelPillowJunior-zebra-2_8e829f2f-477d-44fc-86f7-21e3152b6b4d_100x100_crop_center.jpg?v=1686824625 1x, //trtltravel.com/cdn/shop/files/TRTLTravelPillowJunior-zebra-2_8e829f2f-477d-44fc-86f7-21e3152b6b4d_100x100_crop_center@2x.jpg?v=1686824625 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9 ">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                PILLOW JUNIOR' +
            '                                                <a href="/products/trtl-pillow-junior" class="stretched-link" aria-label="TRTL PILLOW JUNIOR"></a>' +
            '                                            </h5>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block">' +
            '                                                Help you kids sleep easier (ages 8+)' +
            '                                                <a href="/products/trtl-pillow-junior" class="stretched-link" aria-label="TRTL PILLOW JUNIOR"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <a href="/collections/all-products" class="mt-3 fw-bolder text-uppercase custMobShopBtn">' +
            '                            <span class="d-inline-block position-relative pe-4 mx-md-2">SHOP ALL<i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:1px;"></i>' +
            '                            </span>' +
            '                        </a>' +
            '                    </div>' +
            '                    <div id="bundlesMenu" class="custMenuItems custNavItems">' +
            '                        <div class="tile-line-item-menu custBestSellerHighlightV2">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x.png?v=1674214662" data-srcset="//trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x.png?v=1674214662 1x, //trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x@2x.png?v=1674214662 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="DEEP SLEEP BUNDLE" src="//trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x.png?v=1674214662" srcset="//trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x.png?v=1674214662 1x, //trtltravel.com/cdn/shop/files/TPC_MW_SM_BUNDLE_b66111c7-7142-4ba9-85c7-51c457e3c995_620x@2x.png?v=1674214662 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9 ">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                DEEP SLEEP BUNDLE' +
            '                                                <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>' +
            '                                            </h5>' +
            '                                            <div class="ms-auto product-flashtags-container d-flex justify-content-center align-items-start position-relative">' +
            '                                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: BEST SELLER" class="flashtag rounded-2 flashtag-flashtag-best-seller fade-in"></span></div>' +
            '                                                <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" style="">' +
            '                                                The ultimate bundle with everything you need to arrive refreshed and recharged.' +
            '                                                <a href="https://trtltravel.com/products/deep-sleep-bundle" class="stretched-link" aria-label="DEEP SLEEP BUNDLE"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x.jpg?v=1700060449" data-srcset="//trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x.jpg?v=1700060449 1x, //trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x@2x.jpg?v=1700060449 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="SNOOZE BUNDLE" src="//trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x.jpg?v=1700060449" srcset="//trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x.jpg?v=1700060449 1x, //trtltravel.com/cdn/shop/files/TPOSMEYECUPS_620x@2x.jpg?v=1700060449 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                SNOOZE BUNDLE' +
            '                                                <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>' +
            '                                            </h5>' +
            '                                            <div class="ms-auto product-flashtags-container d-flex justify-content-center align-items-start position-relative">' +
            '                                                <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: 25% Off" class="flashtag rounded-2 flashtag-discount fade-in custSBoffer"></span></div>' +
            '                                                <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block">' +
            '                                                Sleep in comfort with a pillow of your choice plus our 100% blackout sleep mask.' +
            '                                                <a href="https://trtltravel.com/products/snooze-bundle/" class="stretched-link" aria-label="SNOOZE BUNDLE"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x.jpg?v=1669371945" data-srcset="//trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x.jpg?v=1669371945 1x, //trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x@2x.jpg?v=1669371945 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="TRTL PACKED-TO-PERFECTION BUNDLE" src="//trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x.jpg?v=1669371945" srcset="//trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x.jpg?v=1669371945 1x, //trtltravel.com/cdn/shop/products/TPO_PP_GREY_573e8c2f-9909-470d-9444-d252fc1d2662_620x@2x.jpg?v=1669371945 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9 ">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                PACKED-TO-PERFECTION BUNDLE' +
            '                                                <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="TRTL PACKED-TO-PERFECTION BUNDLE"></a>' +
            '                                            </h5>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block">' +
            '                                                Made and knitted with best technologies for a comfortable fit and experience.' +
            '                                                <a href="https://trtltravel.com/products/packed-to-perfection-bundle" class="stretched-link" aria-label="TRTL PACKED-TO-PERFECTION BUNDLE"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png?v=1686824625" data-srcset="//trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png?v=1686824625 1x, //trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x@2x.png?v=1686824625 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="ABOARD BUNDLE" src="//trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png?v=1686824625" srcset="//trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png?v=1686824625 1x, //trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x@2x.png?v=1686824625 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9 ">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                ALL ABOARD BUNDLE' +
            '                                                <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="TRTL ALL ABOARD BUNDLE"></a>' +
            '                                            </h5>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block">' +
            '                                                Get an original pillow plus a junior pillow.' +
            '                                                <a href="https://trtltravel.com/products/all-aboard-bundle" class="stretched-link" aria-label="TRTL ALL ABOARD BUNDLE"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <a href="/collections/all-products" class="mt-3 fw-bolder text-uppercase custMobShopBtn">' +
            '                            <span class="d-inline-block position-relative pe-4 mx-md-2">SHOP ALL<i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:1px;"></i>' +
            '                            </span>' +
            '                        </a>' +
            '                    </div>' +
            '                    <div id="accessoriesMenu" class="custMenuItems custNavItems">' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/DSC09507_b9ec7a18-d8d8-43cc-a48d-21b4976972a3_100x100_crop_center.jpg?v=1674214662" data-srcset="//trtltravel.com/cdn/shop/files/DSC09507_b9ec7a18-d8d8-43cc-a48d-21b4976972a3_100x100_crop_center.jpg?v=1674214662 1x, //trtltravel.com/cdn/shop/files/DSC09507_b9ec7a18-d8d8-43cc-a48d-21b4976972a3_100x100_crop_center@2x.jpg?v=1674214662 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="" src="//trtltravel.com/cdn/shop/files/DSC09507_b9ec7a18-d8d8-43cc-a48d-21b4976972a3_100x100_crop_center.jpg?v=1674214662" srcset="//trtltravel.com/cdn/shop/files/DSC09507_b9ec7a18-d8d8-43cc-a48d-21b4976972a3_100x100_crop_center.jpg?v=1674214662 1x, //trtltravel.com/cdn/shop/files/DSC09507_b9ec7a18-d8d8-43cc-a48d-21b4976972a3_100x100_crop_center@2x.jpg?v=1674214662 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9 ">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                PASSPORT COVER' +
            '                                                <a href="/products/trtl-passport-cover" class="stretched-link" aria-label="PASSPORT COVER"></a>' +
            '                                            </h5>' +
            '                                            <div class="ms-auto product-flashtags-container d-flex justify-content-center align-items-start position-relative">' +
            '                                                <!-- <div class="d-flex flex-nowrap flashtags-container overflow-hidden"><span data-tag="Flashtag: BEST SELLER" class="flashtag rounded-2 flashtag-flashtag-best-seller fade-in"></span></div> -->' +
            '                                                <a href="/products/trtl-passport-cover" class="stretched-link" aria-label="PASSPORT COVER"></a>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block" style="">' +
            '                                                Keep all your essential travel documents safely in one place.' +
            '                                                <a href="/products/trtl-passport-cover" class="stretched-link" aria-label="TRTL TRAVEL PILLOW"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/DSC00295_ac20c474-ccc3-462f-a213-198ab5a0885a_100x100_crop_center.jpg?v=1700060449" data-srcset="//trtltravel.com/cdn/shop/files/DSC00295_ac20c474-ccc3-462f-a213-198ab5a0885a_100x100_crop_center.jpg?v=1700060449 1x, //trtltravel.com/cdn/shop/files/DSC00295_ac20c474-ccc3-462f-a213-198ab5a0885a_100x100_crop_center@2x.jpg?v=1700060449 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="" src="//trtltravel.com/cdn/shop/files/DSC00295_ac20c474-ccc3-462f-a213-198ab5a0885a_100x100_crop_center.jpg?v=1700060449" srcset="//trtltravel.com/cdn/shop/files/DSC00295_ac20c474-ccc3-462f-a213-198ab5a0885a_100x100_crop_center.jpg?v=1700060449 1x, //trtltravel.com/cdn/shop/files/DSC00295_ac20c474-ccc3-462f-a213-198ab5a0885a_100x100_crop_center@2x.jpg?v=1700060449 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                PACKING PODS' +
            '                                            </h5>' +
            '                                            <div class="ms-auto product-flashtags-container d-flex justify-content-center align-items-start position-relative">' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block">' +
            '                                                Designed to fit well in all luggage without the need to cram a square cube in a round bag.' +
            '                                                <a href="/products/trtl-packing-pods" class="stretched-link" aria-label="PACKING PODS"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/IMG_9043cutcopy_1_f5db0950-d2e7-4853-8038-06e0b9cb22cd_100x100_crop_center.jpg?v=1669371945" data-srcset="//trtltravel.com/cdn/shop/files/IMG_9043cutcopy_1_f5db0950-d2e7-4853-8038-06e0b9cb22cd_100x100_crop_center.jpg?v=1669371945 1x, //trtltravel.com/cdn/shop/files/IMG_9043cutcopy_1_f5db0950-d2e7-4853-8038-06e0b9cb22cd_100x100_crop_center@2x.jpg?v=1669371945 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="TRTL COMPRESSION SOCKS" src="//trtltravel.com/cdn/shop/files/IMG_9043cutcopy_1_f5db0950-d2e7-4853-8038-06e0b9cb22cd_100x100_crop_center.jpg?v=1669371945" srcset="//trtltravel.com/cdn/shop/files/IMG_9043cutcopy_1_f5db0950-d2e7-4853-8038-06e0b9cb22cd_100x100_crop_center.jpg?v=1669371945 1x, //trtltravel.com/cdn/shop/files/IMG_9043cutcopy_1_f5db0950-d2e7-4853-8038-06e0b9cb22cd_100x100_crop_center@2x.jpg?v=1669371945 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9 ">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                COMPRESSION SOCKS' +
            '                                                <a href="/products/trtl-compression-socks" class="stretched-link" aria-label="TRTL COMPRESSION SOCKS"></a>' +
            '                                            </h5>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block">' +
            '                                                Made and knitted with the best technologies for a comfortable fit and experience.' +
            '                                                <a href="/products/trtl-compression-socks" class="stretched-link" aria-label="TRTL COMPRESSION SOCKS"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <div class="tile-line-item-menu">' +
            '                            <div class="row">' +
            '                                <div class="col-3">' +
            '                                    <div class="image-wrapper overflow-hidden ">' +
            '                                        <picture class=" d-block">' +
            '                                            <img data-src="//trtltravel.com/cdn/shop/files/01_1_a1023fba-ff11-4698-a87d-c3b78cb2af6a_100x100_crop_center.jpg?v=1686824625" data-srcset="//trtltravel.com/cdn/shop/files/01_1_a1023fba-ff11-4698-a87d-c3b78cb2af6a_100x100_crop_center.jpg?v=1686824625 1x, //trtltravel.com/cdn/shop/files/01_1_a1023fba-ff11-4698-a87d-c3b78cb2af6a_100x100_crop_center@2x.jpg?v=1686824625 2x" loading="lazy" class="image-fade img-fluid lazyload loaded" alt="FLASK" src="//trtltravel.com/cdn/shop/files/01_1_a1023fba-ff11-4698-a87d-c3b78cb2af6a_100x100_crop_center.jpg?v=1686824625" srcset="//trtltravel.com/cdn/shop/files/01_1_a1023fba-ff11-4698-a87d-c3b78cb2af6a_100x100_crop_center.jpg?v=1686824625 1x, //trtltravel.com/cdn/shop/files/01_1_a1023fba-ff11-4698-a87d-c3b78cb2af6a_100x100_crop_center@2x.jpg?v=1686824625 2x">' +
            '                                        </picture>' +
            '                                    </div>' +
            '                                </div>' +
            '                                <div class=" col-9 ">' +
            '                                    <div class="row gy-2">' +
            '                                        <div class="col-12 d-flex">' +
            '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">' +
            '                                                FLASK' +
            '                                                <a href="/products/trtl-flask" class="stretched-link" aria-label="FLASK"></a>' +
            '                                            </h5>' +
            '                                        </div>' +
            '                                        <div class="col-12">' +
            '                                            <p class="text-info ls-0-1 position-relative d-inline-block">' +
            '                                                Don\'t let dehydration spoil your trip, keep your cool and keep hydrated.' +
            '                                                <a href="/products/trtl-flask" class="stretched-link" aria-label="FLASK"></a>' +
            '                                            </p>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                        <a href="/collections/all-products" class="mt-3 fw-bolder text-uppercase custMobShopBtn">' +
            '                            <span class="d-inline-block position-relative pe-4 mx-md-2">SHOP ALL<i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:1px;"></i>' +
            '                            </span>' +
            '                        </a>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        const mobNavElement = document.querySelector('.section-header .offcanvas .offcanvas-body');
        if (mobNavElement && !document.querySelector('.custMobileNavPanelV2')) {
            // Append the HTML content to the end of the parent element
            mobNavElement.insertAdjacentHTML('beforeend', mobileNavHtml);
        }
    }

    //Trending badge
    var trendingBadgeHtml = '<span class="flashtag rounded-2 flashtag-trending fade-in custTrendingBadge">' +
        '    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/trending-icon.svg">' +
        '    TRENDING' +
        '</span>';

    const trendingBadgeElements = document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li.nav-item.has-megamenu .megamenu .tile-product-menu .product-flashtags-container');
    trendingBadgeElements.forEach(trendingBadgeElement => {
        if (trendingBadgeElement && !trendingBadgeElement.querySelector('.custTrendingBadge')) {
            trendingBadgeElement.insertAdjacentHTML('afterbegin', trendingBadgeHtml);
        }
    });

}
// All Click Operation
function clickOperationsV2() {

    const mobNavbarLinks = document.querySelectorAll('.section-header .offcanvas .offcanvas-body .w-100 > .row > .col-12 a');
    mobNavbarLinks.forEach(listItem => {
        if (listItem.textContent.trim().includes('Pillows')) {
            listItem.addEventListener('click', function (event) {
                const mobNavPanelElement = document.querySelector('.custMobileNavPanelV2');
                mobNavPanelElement?.classList.add('custShowContentV2');
                mobNavPanelElement?.classList.remove('custHideContentV2');
                //remove all active tab
                document.querySelectorAll('.custMobileNavPanelV2 .menuTab').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.custMobileNavPanelV2 .custNavItems').forEach(menu => menu.classList.add('custHideContentV2'));
                document.querySelectorAll('.custMobileNavPanelV2 .custNavItems').forEach(menu => menu.classList.remove('custShowContentV2'));
                // add active class to accessories tab
                document.querySelector('.menuTab[data-name="pillows"]').classList.add('active');
                document.getElementById('pillowsMenu').classList.add('custShowContentV2');

            });
        } else if (listItem.textContent.trim().includes('Accessories')) {
            listItem.addEventListener('click', function (event) {
                const mobNavPanelElement = document.querySelector('.custMobileNavPanelV2');
                mobNavPanelElement?.classList.add('custShowContentV2');
                mobNavPanelElement?.classList.remove('custHideContentV2');
                //remove all active tab
                document.querySelectorAll('.custMobileNavPanelV2 .menuTab').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.custMobileNavPanelV2 .custNavItems').forEach(menu => menu.classList.add('custHideContentV2'));
                document.querySelectorAll('.custMobileNavPanelV2 .custNavItems').forEach(menu => menu.classList.remove('custShowContentV2'));
                // add active class to accessories tab
                document.querySelector('.menuTab[data-name="accessories"]').classList.add('active');
                document.getElementById('accessoriesMenu').classList.add('custShowContentV2');

            });
        } else if (listItem.textContent.trim().includes('Bundles')) {
            listItem.addEventListener('click', function (event) {
                const mobNavPanelElement = document.querySelector('.custMobileNavPanelV2');
                mobNavPanelElement?.classList.add('custShowContentV2');
                mobNavPanelElement?.classList.remove('custHideContentV2');
                //remove all active tab
                document.querySelectorAll('.custMobileNavPanelV2 .menuTab').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.custMobileNavPanelV2 .custNavItems').forEach(menu => menu.classList.add('custHideContentV2'));
                document.querySelectorAll('.custMobileNavPanelV2 .custNavItems').forEach(menu => menu.classList.remove('custShowContentV2'));
                // add active class to accessories tab
                document.querySelector('.menuTab[data-name="bundles"]').classList.add('active');
                document.getElementById('bundlesMenu').classList.add('custShowContentV2');
            });
        }
    });

    //tab clicked operation 

    document.querySelectorAll('.menuTab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.menuTab').forEach(tab => tab.classList.remove('active'));
            // Add active class to the clicked tab
            tab.classList.add('active');
            // Hide all menus
            document.querySelectorAll('.custMobileNavPanelV2 .custNavItems').forEach(menu => menu.classList.add('custHideContentV2'));
            document.querySelectorAll('.custMobileNavPanelV2 .custNavItems').forEach(menu => menu.classList.remove('custShowContentV2'));
            // Show  menu
            let menuId = tab.getAttribute('data-name');
            document.getElementById(menuId + 'Menu').classList.add('custShowContentV2');
        });
    });

    //add clicks on back button and cancel buttons
    const cancelbuttons = document.querySelectorAll('.custMenuHeaderV2 .backBtn, .offcanvas-header button');
    cancelbuttons.forEach(button => {
        button.addEventListener('click', () => {
            const mobNavPanelElement = document.querySelector('.custMobileNavPanelV2');
            mobNavPanelElement?.classList.add('custHideContentV2');
            mobNavPanelElement?.classList.remove('custShowContentV2');
        });
    });

}