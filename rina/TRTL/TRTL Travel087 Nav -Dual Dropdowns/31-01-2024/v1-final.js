var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
        addNewNavDualDropdowns();
        
        function addNewNavDualDropdowns() {
            //replace name of shop with pillows
            if( jQuery('.navbar-expand ul li a:contains("Shop")').length > 0){
                jQuery('.navbar-expand ul li a:contains("Shop")').text('Pillows');
            }
      
            if(jQuery('.section-header nav.navbar ul.navbar-nav li.nav-item.has-megamenu .megamenu .tile-line-item-menu').length > 0 ){
                jQuery('.section-header nav.navbar ul.navbar-nav li.nav-item.has-megamenu .megamenu .tile-line-item-menu').each(function(index) {
                   
                    var strImagePath;
                    if (index === 0) {
                        strImagePath = 'https://trtltravel.com/cdn/shop/files/image-1_300x.png?v=1701711306'; 
                    } else if (index === 1) {  
                        strImagePath = 'https://trtltravel.com/cdn/shop/files/TPCSLEEPING_620x_d104ca2e-2425-4c96-b27f-04554cee0d94_300x.webp?v=1704780236'; 
                    }else if (index === 2) {
                        strImagePath = 'https://trtltravel.com/cdn/shop/files/TPP_SLEEPING_8280d313-bed0-4354-9bcf-19f76598e1ed_300x.jpg?v=1675687331'; 
                     } else if (index === 3)  {
                        strImagePath = 'https://trtltravel.com/cdn/shop/files/TRTLTravelPillowJunior-zebra-2_8e829f2f-477d-44fc-86f7-21e3152b6b4d_300x300.jpg?v=1686824625'; 
                    }
            
                    var custImageSectionHtml ='<div class="custItemImgBox">'+
                    '<img src="'+strImagePath+'">'+
                    '</div>';

                    if(strImagePath !=="" && strImagePath !== undefined && strImagePath !== null){
                        if (jQuery(this).find('.custItemImgBox').length == 0) {
                            jQuery(this).prepend(custImageSectionHtml);
                        }
                    }
                   
                });
            }
            
            //after pillows li add accessories for the desktop
            if( jQuery('.navbar-expand ul li a:contains("Pillows")').length > 0 && jQuery('.navbar-expand ul li a:contains("Accessories")').length == 0){

                var strAccessoriesHtml = '<li class="nav-item dropdown has-megamenu"><a class="nav-link dropdown-toggle " href="https://trtltravel.com/collections/all-products" data-bs-toggle="dropdown">Accessories</a>'+
                '    <div class="dropdown-menu megamenu bg-transparent pt-4 m-0 pb-0" role="menu">'+
                '        <div class="dropdown-wrapper py-5 bg-white">'+
                '            <div class="container container-lg-fixed">'+
                '                <div class="row gx-8">'+
                '                    <div class="col-6">'+
                '                        <div class="row gy-4">'+
                '                            <div class="col-12">'+
                '                                <div class="tile-line-item-menu">'+
                '                                    <div class="custItemImgBox">'+
                '                                        <img src="https://trtltravel.com/cdn/shop/products/TPHlighter_764cefa0-ec1a-4a8a-baf2-2005925a9fb9_620x.jpg?v=1675341953">'+
                '                                    </div>'+
                '                                    <div class="row gy-2">'+
                '                                        <div class="col-12 d-flex">'+
                '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">'+
                '                                                PASSPORT COVER'+
                '                                                <a href="https://trtltravel.com/products/trtl-passport-cover" class="stretched-link" aria-label="PASSPORT COVER"></a>'+
                '                                            </h5>'+
                '                                        </div>'+
                '                                        <div class="col-12">'+
                '                                            <p class="text-info ls-0-1 position-relative d-inline-block" style="font-size: .85rem !important">'+
                '                                                Keep all your essential travel documents safely in one place.'+
                '                                                <a href="https://trtltravel.com/products/trtl-passport-cover" class="stretched-link" aria-label="PASSPORT COVER"></a>'+
                '                                            </p>'+
                '                                        </div>'+
                '                                    </div>'+
                '                                </div>'+
                '                            </div>'+
                '                            <div class="col-12">'+
                '                                <div class="tile-line-item-menu">'+
                '                                    <div class="custItemImgBox">'+
                '                                        <img src="https://trtltravel.com/cdn/shop/products/DSC00295_f7325f43-05c3-4e60-9fd2-4779de42a086_620x.jpg?v=1675342450">'+
                '                                    </div>'+
                '                                    <div class="row gy-2">'+
                '                                        <div class="col-12 d-flex">'+
                '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">'+
                '                                                PACKING PODS'+
                '                                                <a href="https://trtltravel.com/products/trtl-packing-pods" class="stretched-link" aria-label="TRTL PACKING PODS"></a>'+
                '                                            </h5>'+
                '                                        </div>'+
                '                                        <div class="col-12">'+
                '                                            <p class="text-info ls-0-1 position-relative d-inline-block" style="font-size: .85rem !important">'+
                '                                                Designed to fit well in all luggage without the need to cram a square cube in a round bag.'+
                '                                                <a href="https://trtltravel.com/products/trtl-packing-pods" class="stretched-link" aria-label="TRTL PACKING PODS"></a>'+
                '                                            </p>'+
                '                                        </div>'+
                '                                    </div>'+
                '                                </div>'+
                '                            </div>'+
                '                            <div class="col-12">'+
                '                                <div class="tile-line-item-menu">'+
                '                                    <div class="custItemImgBox">'+
                '                                        <img src="https://trtltravel.com/cdn/shop/products/IMG_9043cutcopy_1_5d863b0b-8659-4f15-8d08-6655256630e7_620x.jpg?v=1675346148">'+
                '                                    </div>'+
                '                                    <div class="row gy-2">'+
                '                                        <div class="col-12 d-flex">'+
                '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">'+
                '                                                COMPRESSION SOCKS'+
                '                                                <a href="https://trtltravel.com/products/trtl-compression-socks" class="stretched-link" aria-label="TRTL COMPRESSION SOCKS"></a>'+
                '                                            </h5>'+
                '                                        </div>'+
                '                                        <div class="col-12">'+
                '                                            <p class="text-info ls-0-1 position-relative d-inline-block" style="font-size: .85rem !important">'+
                '                                                Made and knitted with best technologies for a comfortable fit and experience.'+
                '                                                <a href="https://trtltravel.com/products/trtl-compression-socks" class="stretched-link" aria-label="TRTL COMPRESSION SOCKS"></a>'+
                '                                            </p>'+
                '                                        </div>'+
                '                                    </div>'+
                '                                </div>'+
                '                            </div>'+
                '                            <div class="col-12">'+
                '                                <div class="tile-line-item-menu" data-mp-tile-product="7548555985089">'+
                '                                    <div class="custItemImgBox">'+
                '                                        <img src="https://trtltravel.com/cdn/shop/files/01_1_620x.jpg?v=1683024940">'+
                '                                    </div>'+
                '                                    <div class="row gy-2">'+
                '                                        <div class="col-12 d-flex">'+
                '                                            <h5 class="m-0 fw-bolder text-md-uppercase d-flex position-relative">'+
                '                                                FLASK'+
                '                                                <a href="https://trtltravel.com/products/trtl-flask" class="stretched-link" aria-label="TRTL Flask"></a>'+
                '                                            </h5>'+
                '                                        </div>'+
                '                                        <div class="col-12">'+
                '                                            <p class="text-info ls-0-1 position-relative d-inline-block" style="font-size: .85rem !important">'+
                '                                                Don\'t let dehydration spoil your trip, keep your cool and keep hydrated.'+
                '                                                <a href="https://trtltravel.com/products/trtl-flask" class="stretched-link" aria-label="TRTL Flask"></a>'+
                '                                            </p>'+
                '                                        </div>'+
                '                                    </div>'+
                '                                </div>'+
                '                            </div>'+
                '                            <div class="col-12">'+
                '                                <a class="btn btn-secondary py-2 px-4 fw-bolder font-ibm-sans mt-2" href="/collections/all-products#accessories">'+
                '                                    <span class="d-inline-block position-relative pe-4">SHOP ALL<i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:1px;" aria-hidden="true"></i></span>'+
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
                '                                                <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="SLEEP MASK" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/flask-menu-img.png">'+
                '                                            </picture>'+
                '                                        </div>'+
                '                                        <div class="position-absolute bottom-0 start-0 end-0 p-3">'+
                '                                            <div class="flex-grow-1 position-relative">'+
                '                                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">SLEEP MASK</h5>'+
                '                                                <p class="ls-0-1 m-0" style="font-size: .85rem !important">'+
                '                                                    Total blackout for deep sleep'+
                '                                                </p>'+
                '                                            </div>'+
                '                                        </div>'+
                '                                    </div>'+
                '                                </div>'+
                '                                <a href="https://trtltravel.com/products/trtl-glimpse-sleep-mask" class="stretched-link" aria-label="SLEEP MASK"></a>'+
                '                            </div>'+
                '                        </div>'+
                '                    </div>'+
                '                </div>'+
                '            </div>'+
                '        </div>'+
                '    </div>'+
                '</li>';

                jQuery('.navbar-expand ul li a:contains("Pillows")').parent().after(strAccessoriesHtml);
            }

            //after reviews hide remaining li   
            if( jQuery('.navbar-expand ul li a:contains("Reviews")').length > 0){
                jQuery('.navbar-expand ul li a:contains("Press")').parent().hide();
                jQuery('.navbar-expand ul li a:contains("Blog")').parent().hide();
                jQuery('.navbar-expand ul li a:contains("Contact Us")').parent().hide();
                
            }

            //mobile views

               //replace name of shop with pillows
               if(jQuery('.offcanvas-body .w-100  .g-4 .col-12 a:contains("Shop")').length > 0){
                jQuery('.offcanvas-body .w-100  .g-4 .col-12 a:contains("Shop")').text('Pillows');
            }

           if( jQuery('.offcanvas-body .w-100  .g-4 .col-12 a:contains("Pillows")').length > 0 && jQuery('.offcanvas-body .w-100  .g-4 .col-12 a:contains("Accessories")').length == 0){

                var strAccessoriesMobileHtml = '<div class="col-12">'+
                '    <a class="nav-link p-0 fs-3 font-ibm-mono offcanvas-dropdown-toggle position-relative collapsed" data-bs-toggle="collapse" href="#nav-offcanvas-link-1-sublinks" role="button" aria-expanded="false" aria-controls="nav-offcanvas-link-1-sublinks">'+
                '        Accessories'+
                '    </a>'+
                '    <div class="collapse" id="nav-offcanvas-link-1-sublinks">'+
                '        <div class="row g-3 mt-2">'+
                '            <div class="col-12 mt-2">'+
                '                <div class="tile-product-menu text-center overflow-hidden">'+
                '                    <div class="row g-0">'+
                '                        <div class="position-relative overflow-hidden col-12 mb-3 height-medium" style="width:400px;">'+
                '                            <div id="image-wrapper-43116221235393-b1b11-198916" class="image-cover overflow-hidden">'+
                '                                <picture class=" d-block">'+
                '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="SLEEP MASK" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/flask-menu-img.png">'+
                '                                </picture>'+
                '                            </div>'+
                '                            <a href="https://trtltravel.com/products/trtl-glimpse-sleep-mask" class="stretched-link" aria-label="SLEEP MASK"></a>'+
                '                        </div>'+
                '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
                '                            <div class="flex-grow-1 position-relative">'+
                '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">'+
                '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">'+
                '                                        SLEEP MASK'+
                '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>'+
                '                                    </span>'+
                '                                </h5>'+
                '                                <p class="font-ibm-sans text-info ls-0-1" style="font-size: .85rem !important">'+
                '                                    Total blackout for deep sleep'+
                '                                </p>'+
                '                                <a href="https://trtltravel.com/products/trtl-glimpse-sleep-mask" class="stretched-link" aria-label="SLEEP MASK"></a>'+
                '                            </div>'+
                '                        </div>'+
                '                    </div>'+
                '                </div>'+
                '            </div>'+
                '            <div class="col-6 mt-2">'+
                '                <div class="tile-product-menu text-center overflow-hidden" data-mp-tile-product="7548442149057">'+
                '                    <div class="row g-0">'+
                '                        <div class="position-relative overflow-hidden col-12 mb-3 " style="width:400px;">'+
                '                            <div id="image-wrapper-25903854125249-b1b11-610449" class="image-wrapper overflow-hidden ">'+
                '                                <picture class=" d-block">'+
                '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="PASSPORT COVER" src="https://trtltravel.com/cdn/shop/products/TPHlighter_764cefa0-ec1a-4a8a-baf2-2005925a9fb9_620x.jpg?v=1675341953">'+
                '                                </picture>'+
                '                            </div>'+
                '                            <a href="https://trtltravel.com/products/trtl-passport-cover" class="stretched-link" aria-label="PASSPORT COVER"></a>'+
                '                        </div>'+
                '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
                '                            <div class="flex-grow-1 position-relative">'+
                '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">'+
                '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">'+
                '                                        PASSPORT COVER'+
                '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>'+
                '                                    </span>'+
                '                                </h5>'+
                '                                <p class="font-ibm-sans text-info ls-0-1" style="font-size: .85rem !important">'+
                '                                    Keep all your essential travel documents safely in one place.'+
                '                                </p>'+
                '                                <a href="https://trtltravel.com/products/trtl-passport-cover" class="stretched-link" aria-label="PASSPORT COVER"></a>'+
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
                '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="PACKING PODS" src="https://trtltravel.com/cdn/shop/products/DSC00295_f7325f43-05c3-4e60-9fd2-4779de42a086_620x.jpg?v=1675342450">'+
                '                                </picture>'+
                '                            </div>'+
                '                            <a href="https://trtltravel.com/products/trtl-packing-pods" class="stretched-link" aria-label="PACKING PODS"></a>'+
                '                        </div>'+
                '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
                '                            <div class="flex-grow-1 position-relative">'+
                '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase"><span class="d-inline-block position-relative pe-4 mx-md-2">PACKING PODS<i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i></span></h5>'+
                '                                <p class="font-ibm-sans text-info ls-0-1" style="font-size: .85rem !important">'+
                '                                    Designed to fit well in all luggage without the need to cram a square cube in a round bag.'+
                '                                </p>'+
                '                                <a href="https://trtltravel.com/products/trtl-packing-pods" class="stretched-link" aria-label="PACKING PODS"></a>'+
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
                '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="COMPRESSION SOCKS" src="https://trtltravel.com/cdn/shop/products/IMG_9043cutcopy_1_5d863b0b-8659-4f15-8d08-6655256630e7_620x.jpg?v=1675346148">'+
                '                                </picture>'+
                '                            </div>'+
                '                            <div class="position-absolute bottom-0 start-0 end-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">'+
                '                            </div>'+
                '                            <a href="https://trtltravel.com/products/trtl-compression-socks" class="stretched-link" aria-label="COMPRESSION SOCKS"></a>'+
                '                        </div>'+
                '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
                '                            <div class="flex-grow-1 position-relative">'+
                '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">'+
                '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">'+
                '                                        COMPRESSION SOCKS'+
                '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>'+
                '                                    </span>'+
                '                                </h5>'+
                '                                <p class="font-ibm-sans text-info ls-0-1" style="font-size: .85rem !important">'+
                '                                    Made and knitted with best technologies for a comfortable fit and experience.'+
                '                                </p>'+
                '                                <a href="https://trtltravel.com/products/trtl-compression-socks" class="stretched-link" aria-label="COMPRESSION SOCKS"></a>'+
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
                '                                    <img loading="lazy" class="image-fade img-fluid lazyload loaded" alt="FLASK" src="https://trtltravel.com/cdn/shop/files/01_1_620x.jpg?v=1683024940">'+
                '                                </picture>'+
                '                            </div>'+
                '                            <div class="position-absolute bottom-0 start-0 end-0 z-index-2 m-3 product-flashtags-container d-flex justify-content-center">'+
                '                            </div>'+
                '                            <a href="https://trtltravel.com/products/trtl-flask" class="stretched-link" aria-label="FLASK"></a>'+
                '                        </div>'+
                '                        <div class="pb-0 px-md-2 col-12 d-flex align-items-center">'+
                '                            <div class="flex-grow-1 position-relative">'+
                '                                <h5 class="mb-1 mb-md-2 fw-bolder text-md-uppercase">'+
                '                                    <span class="d-inline-block position-relative pe-4 mx-md-2">'+
                '                                        FLASK'+
                '                                        <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:2px;" aria-hidden="true"></i>'+
                '                                    </span>'+
                '                                </h5>'+
                '                                <p class="font-ibm-sans text-info ls-0-1" style="font-size: .85rem !important">'+
                '                                    Don’t let dehydration spoil your trip, keep your cool and keep hydrated.'+
                '                                </p>'+
                '                                <a href="https://trtltravel.com/products/trtl-flask" class="stretched-link" aria-label="FLASK"></a>'+
                '                            </div>'+
                '                        </div>'+
                '                    </div>'+
                '                </div>'+
                '            </div>'+
                '            <div class="col-6 mt-2">'+
                '                <div class="tile-callout card h-100 rounded-0 bg-transparent position-relative overflow-hidden">'+
                '                    <div class="text-center">'+
                '                        <h5 class="mt-3 fw-bolder text-uppercase">'+
                '                            <span class="d-inline-block position-relative pe-4 mx-md-2">'+
                '                                SHOP ALL'+
                '                                <i class="fa-regular fa-arrow-right position-absolute top-50 end-0 translate-middle-y" style="margin-top:1px;" aria-hidden="true"></i>'+
                '                            </span>'+
                '                        </h5>'+
                '                    </div>'+
                '                    <div class="overlay-primary position-absolute"></div>'+
                '                    <a class="stretched-link" href="https://trtltravel.com/collections/all-products#accessories"aria-label="SHOP ALL"></a>'+
                '                </div>'+
                '            </div>'+
                '        </div>'+
                '    </div>'+
                '</div>';

                jQuery('.offcanvas-body .w-100  .g-4 a:contains("Pillows")').parent().after( strAccessoriesMobileHtml);
            }

             //after reviews hide remaining div  
             if( jQuery('.offcanvas-body .w-100  .g-4 a:contains("Reviews")').length > 0){
                jQuery('.offcanvas-body .w-100 .g-4 a:contains("Press")').parent().hide();
                jQuery('.offcanvas-body .w-100 .g-4 a:contains("Blog")').parent().hide();
                jQuery('.offcanvas-body .w-100 .g-4 a:contains("Contact Us")').parent().hide();
            }
         }
        clearInterval(waitForjQuery);
    }
}, 50);