var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        //collection all page condition
        var strURL = window.location.href;
        
        if (jQuery("#MainContent .collection").length > 0) {
            addCustFilterHtml();
        }
  
        function addCustFilterHtml() {
           
            var strLeatherUrl= 'https://www.thesashbag.com/collections/core-leather';
            var strFauxLeatherUrl='https://www.thesashbag.com/collections/core-faux-leather';
            var strClassicColorsUrl='https://www.thesashbag.com/collections/classic-style-faux-non-fringe';
            var strLimitedEditionColorsUrl='https://www.thesashbag.com/collections/limited-edition-colors-leather';
            var strFringeUrl='https://www.thesashbag.com/collections/fringe-leather';
            var strNoFringeUrl='https://www.thesashbag.com/collections/classic-style-leather-non-fringe';

           

            var custSliderHtml = '<div class="custCollectionSliderTop page-width">' +
                '    <div class="swiper collectionSwiper">' +
                '        <div class="swiper-wrapper">' +
                '            <div class="swiper-slide">' +
                '                <a href="https://www.thesashbag.com/collections/best-sellers" class="collectionProductBox">' +
                '                    <div class="imgBox">' +
                '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_bestseller.png" alt="Best Sellers" title="Best Sellers">' +
                '                    </div>' +
                '                    <div class="productTitle">' +
                '                        Best Sellers' +
                '                    </div>' +
                '                </a>' +
                '            </div>' +
                '            <div class="swiper-slide">' +
                '                <a href="https://www.thesashbag.com/collections/see-whats-new" class="collectionProductBox">' +
                '                    <div class="imgBox">' +
                '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_arrival.png" alt="New Arrivals" title="New Arrivals">' +
                '                    </div>' +
                '                    <div class="productTitle">' +
                '                        New Arrivals' +
                '                    </div>' +
                '                </a>' +
                '            </div>' +
                '            <div class="swiper-slide">' +
                '                <a href="https://www.thesashbag.com/collections/limited-edition-colors-leather" class="collectionProductBox">' +
                '                    <div class="imgBox">' +
                '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_limited_edition.png" alt="Limited Edition" title="Limited Edition">' +
                '                    </div>' +
                '                    <div class="productTitle">' +
                '                        Limited Edition' +
                '                    </div>' +
                '                </a>' +
                '            </div>' +
                '            <div class="swiper-slide">' +
                '                <a href="https://www.thesashbag.com/collections/sale" class="collectionProductBox">' +
                '                    <div class="imgBox">' +
                '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_onsale.png" alt="On Sale" title="On Sale">' +
                '                    </div>' +
                '                    <div class="productTitle">' +
                '                        On Sale' +
                '                    </div>' +
                '                </a>' +
                '            </div>' +
                '            <div class="swiper-slide">' +
                '                <a href="https://www.thesashbag.com/collections/sash-accessories" class="collectionProductBox">' +
                '                    <div class="imgBox">' +
                '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/collection_addons.png" alt="Add- Ons" title="Add- Ons">' +
                '                    </div>' +
                '                    <div class="productTitle">' +
                '                        Add- Ons' +
                '                    </div>' +
                '                </a>' +
                '            </div>' +
                '        </div>' +
                '        <div class="swiper-button-next">Next</div>' +
                '        <div class="swiper-button-prev">Prev</div>' +
                '    </div>' +
                '</div>';
       
            var mobileCategoriesMenuHtml ='<div class="custCategoryMenu">'+
                                              '    <div class="menuBtn">'+
                                              '        Shop by categories'+
                                              '    </div>'+
                                              '    <input type="checkbox">'+
                                              '    <ul>'+
                                              '        <li><a href="'+strLeatherUrl+'">Leather</a></li>'+
                                              '        <li class="active"><a href='+strFauxLeatherUrl+'>Faux Leather</a></li>'+
                                              '        <li><a href='+strClassicColorsUrl+'>Classic Colors</a></li>'+
                                              '        <li><a href='+strLimitedEditionColorsUrl+'>Limited Edition Colors</a></li>'+
                                              '        <li><a href='+strFringeUrl+'>Fringe</a></li>'+
                                              '        <li><a href='+strNoFringeUrl+'>No Fringe</a></li>'+
                                              '    </ul>'+
                                              '    <span class="arrow"></span>'+
                                              '</div>';
  
             var webCategoriesMenuHtml ='<div class="custFilterSidebar">'+
                                        '    <div class="inner">'+
                                        '        <h4>Browse by:</h4>'+
                                        '        <ul>'+
                                        '            <li id="custLeather"><a href='+strLeatherUrl+'>Leather</a></li>'+
                                        '            <li id="custFauxLeather"><a href='+strFauxLeatherUrl+'>Faux Leather</a></li>'+
                                        '            <li><a href='+strClassicColorsUrl+'>Classic Colors</a></li>'+
                                        '            <li><a href='+strLimitedEditionColorsUrl+'>Limited Edition Colors</a></li>'+
                                        '            <li id="custFringe"><a href='+strFringeUrl+'>Fringe</a></li>'+
                                        '            <li id="custNoFringe"><a href='+strNoFringeUrl+'>No Fringe</a></li>'+
                                        '        </ul>'+
                                        '    </div>'+
                                        '</div>';
  
          
           
                                       
            //added custom slider html
            var intCount = 0;
            var intFliterHtmlInterval = setInterval(function() {
                intCount += 1;
                if (jQuery('main#MainContent [id*="__banner"].section').length > 0 && jQuery('.custCollectionSliderTop').length == 0) {
                    jQuery(custSliderHtml).insertAfter('main#MainContent [id*="__banner"].section');
                    clearInterval(intFliterHtmlInterval);
                }
                //mobile categories menu
                if(jQuery('#main-collection-filters .facets-container > facet-filters-form').length > 0 && jQuery('.custCategoryMenu').length == 0){
                  jQuery(mobileCategoriesMenuHtml).insertBefore('#main-collection-filters .facets-container > facet-filters-form');
                  clearInterval(intFliterHtmlInterval);
                }
                //web categories menu
                if(jQuery('main#MainContent [id*="shopify-section-template--"] div#ProductGridContainer').length > 0 && jQuery('.custFilterSidebar').length == 0){
                  jQuery(webCategoriesMenuHtml).prependTo('main#MainContent [id*="shopify-section-template--"] div#ProductGridContainer');
                  clearInterval(intFliterHtmlInterval);
                }
  
  
                if (intCount === 80) {
                    clearInterval(intFliterHtmlInterval);
                }
            }, 30);

            //active effect
            var intCountMenu = 0;
            var intCategoryMenuInterval = setInterval(function() {
            intCountMenu += 1;
                if(jQuery('.custCategoryMenu a').length > 0 ){
                    console.log('custCategoryMenu length');
                    
                    
                    if (strURL.indexOf("core-leather") > 0) {
                       
                        jQuery('#custLeather').addClass('active');

                    }else if(strURL.indexOf("faux-leather") > 0){
                      
                        jQuery('#custFauxLeather').addClass('active');

                    }else if(strURL.indexOf("classic-style-faux-non-fringe") > 0){

                        jQuery('.custFilterSidebar ul li a:contains("Classic Colors")').parent().addClass('active');

                    }else if(strURL.indexOf("limited-edition-colors") > 0){

                       jQuery('.custFilterSidebar ul li a:contains("Limited Edition Colors")').parent().addClass('active');

                    }else if(strURL.indexOf("fringe-leather") > 0){
                       jQuery('#custFringe').addClass('active');
                        
                    }else if(strURL.indexOf("classic-style-leather-non-fringe") > 0){
                        
                        jQuery('#custNoFringe').addClass('active');
                    }
        
                }
            
                if (intCountMenu === 80) {
                    clearInterval(intCategoryMenuInterval);
                }
                }, 30);




  
            //add custome slider 
  
            if (jQuery('#custSwiperSliderJS').length == 0) {
                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
            }
            if (jQuery('#custSwiperSliderCSS').length == 0) {
                jQuery("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" id="custSwiperSliderCSS" />');
            }
  
            
            var intSwiperCnt = 0;
            var intSwiperInterval = setInterval(function() {
                intSwiperCnt += 1;
  
                if (typeof Swiper !== 'undefined') {
                    var swiper = new Swiper(".collectionSwiper", {
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
                            375: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        },
                    });
  
                    clearInterval(intSwiperInterval);
                }
  
                if (intSwiperCnt === 50) {
                    clearInterval(intSwiperInterval);
                }
  
                setTimeout(function() {
                    jQuery('.custCollectionSliderTop').show();
                }, 2500);
  
  
            }, 70);
            
          

        }
  

      clearInterval(waitForJquery);
    }
  }, 50);