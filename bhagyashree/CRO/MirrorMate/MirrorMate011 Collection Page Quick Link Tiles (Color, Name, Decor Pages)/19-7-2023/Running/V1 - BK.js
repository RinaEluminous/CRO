var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        
        //call function only on Collection page
        if(jQuery('.template-collection').length > 0) {
            addCustTestimonalToPlpV1();
            addCustQuickLinksTitles();
        }

        function addCustTestimonalToPlpV1(){

            var intCount       = 0;
            var intPlpInterval = setInterval(function (){
                intCount      += 1;

                //check if there are products on the collection page
                if( jQuery('.collection .products.products-grid div.spf-col-6').length > 0) {
                    
                    //check if there are 3 or more than 3 products on the collection page, show first testimonal
                    if( jQuery('.collection .products.products-grid div.spf-col-6').length >= 3 && jQuery('.custReviewFeedbackBoxV1').length == 0 ){
                        jQuery('<div class="spf-col-xl-4 spf-col-lg-4 spf-col-md-6 spf-col-sm-12 spf-col-6 custFeedbackSectionV1"><div class="custReviewFeedbackBoxV1"><div class="custStartImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/rating-stars.svg"></div><h5>Wow! Super easy to order.</h5><p>Wow! Super easy to order, prep and install. And it looks awesome!</p><span>– Amy M.</span></div></div>').insertAfter('.products.products-grid div.spf-col-6:eq(1)');
                    }

                    //check if there are 9 products on the collection page, show second testimonal
                    if( jQuery('.collection .products.products-grid div.spf-col-6').length > 9 && jQuery('.custSecondTestimonialV1').length == 0 ){
                        jQuery('<div class="spf-col-xl-4 spf-col-lg-4 spf-col-md-6 spf-col-sm-12 spf-col-6 custFeedbackSectionV1"><div class="custReviewFeedbackBoxV1 custSecondTestimonialV1"><div class="custStartImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/rating-stars.svg"></div><h5>Wow Factor!</h5><p>Ours eyes popped as we put it up and saw the difference right away! Love it and now ordering for another mirror!</p><span>– Leticia H.</span></div></div>').insertAfter('.products.products-grid div.spf-col-6:eq(8)');
                    }
                }
                
                if(intCount === 80){
                    clearInterval(intPlpInterval);
                }

            }, 50);
        }

        function addCustQuickLinksTitles(){
            var strURL           =  window.location.href;
            var customSliderHTML = '', strShopByLink = '';
            var intInitialSlide  = 1;
            var custDecorHTML = '<div><a href="https://www.mirrormate.com/collections/traditional"><img src="https://www.mirrormate.com/cdn/shop/collections/TraditionalFrames_Assembled_medium.jpg?v=1588602192"><span>TRADITIONAL</span></a></div><div><a href="https://www.mirrormate.com/collections/transitional"><img src="https://www.mirrormate.com/cdn/shop/collections/TransitionalFrames_Assembled_medium.jpg?v=1589289774"><span>Transitional</span></a></div><div><a href="https://www.mirrormate.com/collections/contemporary"><img src="https://www.mirrormate.com/cdn/shop/collections/ContemporaryFrames_Assembled_medium.jpg?v=1588602067"><span>Modern & Contemporary</span></a></div><div><a href="https://www.mirrormate.com/collections/farmhouse-rustic-lodge-cabin"><img src="https://www.mirrormate.com/cdn/shop/collections/038-Rustic-iStock-1211003958_square-min_medium.jpg?v=1589289737"><span>Farmhouse & Rustic</span></a></div><div><a href="https://www.mirrormate.com/collections/industrial"><img src="https://www.mirrormate.com/cdn/shop/collections/sbd-industrial-min_medium.jpg?v=1588602947"><span>Industrial</span></a></div><div><a href="https://www.mirrormate.com/collections/cottage"><img src="https://www.mirrormate.com/cdn/shop/collections/sbd-cottage-min_medium.jpg?v=1588602103"><span>COTTAGE</span></a></div><div><a href="https://www.mirrormate.com/collections/coastal"><img src="https://www.mirrormate.com/cdn/shop/collections/sbd-coastal-min_medium.jpg?v=1588602098"><span>COASTAL</span></a></div><div><a href="https://www.mirrormate.com/collections/glam"><img src="https://www.mirrormate.com/cdn/shop/collections/038-Glam-iStock-467176390_square-min_medium.jpg?v=1589289754"><span>GLAM</span></a></div>'; 

             var custColorHTML = '<div><a href="https://www.mirrormate.com/collections/wood-tones"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/wood-tones.jpg"><span>Wood Tones</span></a></div><div><a href="https://www.mirrormate.com/collections/white"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-white.jpg"><span>White</span></a></div><div><a href="https://www.mirrormate.com/collections/silver-grey"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-silver.jpg"><span>Silver</span></a></div><div><a href="https://www.mirrormate.com/collections/black"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-black.jpg"><span>Black</span></a></div><div><a href="https://www.mirrormate.com/collections/bronze"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-bronze.jpg"><span>Bronze</span></a></div><div><a href="https://www.mirrormate.com/collections/cherry-red"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-cherry-red.jpg"><span>Cherry / Red</span></a></div><div><a href="https://www.mirrormate.com/collections/gold-champagne"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-gold-champagne.jpg"><span>Gold / Champagne</span></a></div><div><a href="https://www.mirrormate.com/collections/metallic"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-metallic.jpg"><span>Metallic</span></a></div><div><a href="https://www.mirrormate.com/collections/paintable"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/mirror-paintable.jpg"><span>Paintable</span></a></div>';

             var custFramesHTML = '<div><a href="https://www.mirrormate.com/collections/acadia"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/AcadiaOiledBronze_360x.jpg?v=1682430829"><span>Acadia</span></a></div><div><a href="https://www.mirrormate.com/collections/annandale"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Annandale-WhiteSL-06.02_360x.jpg?v=1682430865"><span>Annandale</span></a></div><div><a href="https://www.mirrormate.com/collections/austin"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Austin_Gray_Corner1_360x.jpg?v=1682430882"><span>Austin</span></a></div><div><a href="https://www.mirrormate.com/collections/bellemeade"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Bellemeade_VintageSilver_Corner_360x.jpg?v=1682430901"><span>Bellemeade</span></a></div><div><a href="https://www.mirrormate.com/collections/big-sur"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/BigSur_OakBarrel_Corner_m_360x.jpg?v=1686685164"><span>Big Sur</span></a></div><div><a href="https://www.mirrormate.com/collections/broadway"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Broadway_BrushedChrome_Corner_b46f4661-5956-45bc-998f-4e42fdf8a2fb_360x.jpg?v=1682430928"><span>Broadway</span></a></div><div><a href="https://www.mirrormate.com/collections/chelsea"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Chelsea_SilverStreak_Corner_360x.jpg?v=1682431142"><span>Chelsea</span></a></div><div><a href="https://www.mirrormate.com/collections/cherokee"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Cherokee_EspressoWalnut_Corner_360x.jpg?v=1682431178"><span>Cherokee</span></a></div><div><a href="https://www.mirrormate.com/collections/cherokee-rustic"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Cherokee_OldVermontGrey_Corner-min_360x.jpg?v=1682431250"><span>Cherokee Rustic</span></a></div><div><a href="https://www.mirrormate.com/collections/corner-woods"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/WoodsWhite-CornerS_360x.jpg?v=1686685152"><span>Corner Woods</span></a></div><div><a href="https://www.mirrormate.com/collections/essex"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Biltmore-Black-Web-Alt_360x.jpg?v=1673362261"><span>Essex</span></a></div><div><a href="https://www.mirrormate.com/collections/grandezza"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Grandezza_AgedSilver_CornerCropped2_FF-2_360x.jpg?v=1686685365"><span>Grandezza</span></a></div><div><a href="https://www.mirrormate.com/collections/highline"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/highlineslimcorner2SLIM_13dba0c9-cab3-45f6-bf4f-4667f0117c27_360x.jpg?v=1682431449"><span>Highline</span></a></div><div><a href="https://www.mirrormate.com/collections/lexington"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Lexington_MetallicAsh_Corner_360x.jpg?v=1682431467"><span>Lexington</span></a></div><div><a href="https://www.mirrormate.com/collections/newport"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/WeatheredWhite1_360x.jpg?v=1687802276"><span>Newport</span></a></div><div><a href="https://www.mirrormate.com/collections/pacifica"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Pacifica_WhiteCap_Corner_360x.jpg?v=1682431490"><span>Pacifica</span></a></div><div><a href="https://www.mirrormate.com/collections/paintable"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Highline_SlimPaintable_CornerSLIM_97e5f01e-c51a-4343-8155-0dd8249d6afd_360x.jpg?v=1682431441"><span>Paintable</span></a></div><div><a href="https://www.mirrormate.com/collections/pemaquid"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/pemaquid-sl-silver-SL_360x.jpg?v=1682431625"><span>Pemaquid</span></a></div><div><a href="https://www.mirrormate.com/collections/perrin"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/PerrinBrownBlackcorner-min_c53b8156-4bf8-446b-a12e-6f32ac31cb78_360x.jpg?v=1682431638"><span>Perrin</span></a></div><div><a href="https://www.mirrormate.com/collections/portage"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Portage_MoonlightSilver_Corner_360x.jpg?v=1682431647"><span>Portage</span></a></div><div><a href="https://www.mirrormate.com/collections/providence"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Providence_OiledBronze_Corner2_360x.jpg?v=1683665231"><span>Providence</span></a></div><div><a href="https://www.mirrormate.com/collections/soho"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Soho_MatteBlack_Corner2_23cf8f28-f331-44f1-8be5-1a479c690609_360x.jpg?v=1682431659"><span>Soho</span></a></div><div><a href="https://www.mirrormate.com/collections/solana"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/SolanaModernSilvercorner_360x.jpg?v=1682431679"><span>Solana</span></a></div><div><a href="https://www.mirrormate.com/collections/tuscany"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Tuscany_Travertine_Corner_m_360x.jpg?v=1686685187"><span>Tuscany</span></a></div>';

            if(custDecorHTML.indexOf(strURL) !== -1){
                customSliderHTML = custDecorHTML;
                strShopByLink    = 'https://www.mirrormate.com/pages/shop-by-decor';
                strShopByText    = 'Shop By Decor';
            }
            else if(custColorHTML.indexOf(strURL) !== -1){
                customSliderHTML = custColorHTML;
                strShopByLink    = 'https://www.mirrormate.com/pages/shop-by-color';
                strShopByText    = 'Shop By Color';
            }
            else if(custFramesHTML.indexOf(strURL) !== -1 || strURL == 'https://www.mirrormate.com/collections/all-frames'){
                customSliderHTML = custFramesHTML;
                strShopByLink    = 'https://www.mirrormate.com/collections/all-frames';
                strShopByText    = 'Shop By Frame Name';
            }

            if(jQuery('.custProdustsSliderMF').length == 0 && customSliderHTML !== '' ){
                jQuery('<div class="custProdustsSliderMF"><div class="container"><div class="custCollectionProducts">'+customSliderHTML+'</div></div></div>').insertAfter('header.content-util');

                if(jQuery('header.content-util nav.breadcrumb a').length > 0 && jQuery('.custBreadcrumb').length == 0 ) {
                    jQuery('header.content-util nav.breadcrumb span:eq(0)').text('/');
                    jQuery('<a class="custBreadcrumb" href="'+strShopByLink+'" title="Back to the shop by color">'+strShopByText+'</a><span aria-hidden="true">/</span>').insertAfter('header.content-util nav.breadcrumb span:eq(0)');

                    //if the page is all-frames 
                    if(strURL == 'https://www.mirrormate.com/collections/all-frames') {
                        jQuery('header.content-util nav.breadcrumb span:last').text('Shop all');
                    }
                }

                //count total number of the products in the slider
                var intTotalSides = jQuery('.custCollectionProducts a').length 

                //add slick slider JS and CSS
                if (jQuery('#custSlickSliderJS').length == 0) {
                    jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" id="custSlickSliderJS"></script>');
                }

                if(jQuery('#custSlickSliderCSS').length == 0){
                    jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" id="custSlickSliderCSS" />');
                } 

                //initialize slick slider
                var intRunsTime = 0; 
                var intSliderInterval = setInterval( function () {
                    intRunsTime += 1;
                    
                    if (jQuery.fn.slick) {
                        jQuery(".custCollectionProducts").slick({
                            slidesToShow: intTotalSides >= 9 ? 9 : intTotalSides,
                            dots: false,
                            arrows: true,
                            slidesToScroll: 5,
                            responsive: [
                                {
                                    breakpoint: 1200,
                                    settings: {  
                                        centerPadding: '25px',
                                        slidesToShow: 5
                                    }
                                },
                                {
                                    breakpoint: 769,
                                    settings: {  
                                        centerPadding: '50px',
                                        slidesToShow: 4
                                    }
                                },
                                {
                                  breakpoint: 700,
                                  settings: {  
                                    centerPadding: '40px',
                                    slidesToShow: 2,
                                     arrows: false,
                                    centerPadding: '30px',
                                    centerMode: true,
                                    initialSlide: intInitialSlide
                                  }
                                }
                            ]
                        });

                        //add active class to active category from slide
                        jQuery('.custCollectionProducts .slick-slide a[href="'+strURL+'"]').parent('.slick-slide').addClass('custActiveTiles');
                        jQuery('.custProdustsSliderMF').show();
                        
                        clearInterval(intSliderInterval);
                    }

                    if(intRunsTime === 80){
                        clearInterval(intSliderInterval);
                    }
                },50); 
            }
        }
       

        //on click of the pagination, sorting, filter and clear CTA, call testimonal function again
        jQuery(document).on('click','.gf-filter-contents ul.gf-option-box li a,#globo-dropdown-sort_options span,.collection .collection-container .pagination span,.collection-container #gf-tree a.gf-refine-toggle,.collection #gf-controls-container .selected-item.gf-option-label,#gf-tree .globo-selected-items-wrapper button.clear-refinements,div#gf-tree .selected-item.gf-option-label', function (){
            addCustTestimonalToPlpV1();
        });

        //on change of the show record limit CTA, call testimonal function again
        jQuery(document).on('change','.collection select#setLimit', function (){
            addCustTestimonalToPlpV1();
        });

        clearInterval(waitForJquery);
    } 
}, 50);   
