var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        
        //call function only on PDP page
        if(jQuery('.product-template').length > 0) {
            updatePdpSection();
        }

        function updatePdpSection(){
            //add custom class to description tab
            if( jQuery("#desc-tab-title").parent().length > 0){
                jQuery("#desc-tab-title").parent().addClass('custDescription');
            }
            
            //add para for measuring instructions
            if(jQuery(".step-add-wizard .gr-col-6 .eympr-2").length > 0 && jQuery('.custParaMeasure').length == 0 ){
                jQuery(".step-add-wizard .gr-col-6 .eympr-2").before('<div class="custParaMeasure"><a><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/measuring-instructions.png"/><span>Click Here for Measuring Instructions</span></a></div>');
            }

            var intCnt   = 0;
            var sixthImageLink  = '';
            var intInterval = setInterval(function (){
              intCnt       += 1;

              if(jQuery('#ProductPhoto-product-template .product-image--slider').length > 0 ){
                // Select all elements with the specified classes
                var elements = jQuery("#ProductPhoto-product-template .product-image--slider .product-image--cell"); 
                  if (elements.length >= 6) {
                    
                    //show 6th image from list on description page
                    if( jQuery('div#ProductPhoto-product-template .product-image--slider .product-image--cell:eq(5) a').hasClass('sb3-video') ){
                        sixthImageLink = jQuery('div#ProductPhoto-product-template .product-image--slider .product-image--cell:eq(6) a').attr('href');
                    }
                    else{
                        sixthImageLink = jQuery('div#ProductPhoto-product-template .product-image--slider .product-image--cell:eq(5) a').attr('href');
                    }

                    if(sixthImageLink !== '' && sixthImageLink !== undefined && sixthImageLink !== null){
                        var strImgSrc = sixthImageLink.split(',')[0];
                      
                        if(strImgSrc.indexOf('_') !== -1){
                          strText = strImgSrc.split('_').pop();
                          strText = strText.split('.')[0];
                          sixthImageLink = strImgSrc.replace(strText, '590x');
                          
                          if(jQuery('.tab_container #desc-tab [itemprop="description"]').length > 0  && jQuery('.custquoteOnDescription').length == 0 && 
                            jQuery('.custProductImage').length == 0 ){
                            jQuery('.tab_container #desc-tab [itemprop="description"]').prepend('<p class="custquoteOnDescription">"Absolutely love the frames! Probably one of our smartest purchases made for our new home!"</p>');
                            jQuery('.tab_container #desc-tab [itemprop="description"]').after('<div class="custProductImage"><img src="'+sixthImageLink+'"></div>');
                          } 
                        }
                    }
                  }
                }
                if(intCnt === 100){
                  clearInterval(intInterval);
                }
            },30);
           

            //show specification on click of see of frame specification
            if ( jQuery(".tab_container #desc-tab h3:contains('Specifications')").length > 0) {
                if (jQuery(".tab_container #desc-tab h3:contains('Specifications')").next("ul").length > 0) {
                    jQuery(".tab_container #desc-tab h3:contains('Specifications')").next("ul").wrap("<div class='custSpecificationDiv'></div>");
                }
               
                jQuery(".tab_container #desc-tab h3:contains('Specifications')").append('<a class="custFrameSpecifications">See Frame Specifications</a>');
            }

            //add custom logos
            if(jQuery(window).width() >= 767 && jQuery('.custProdLogosOnPdp').length == 0){
                jQuery('<div class="custProdLogosOnPdp"><div class="as-seen-image-container"><ul><li>AS SEEN IN</li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/3-Better_Homes.jpg?v=1632854398" width="245" height="60" alt="Better Homes and Garden"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/4-House_Beautiful.jpg?v=1632854398" width="245" height="60" alt="House Beautiful"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/5-This_Old_House.jpg?v=1632854398" width="245" height="60" alt="This Old House"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/2-HGTV.jpg?v=1632854398" width="245" height="60" alt="HGTV"></li><li><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/1-Today.jpg?v=1632854398" width="245" height="60" alt="Today"></li></ul></div></div>').insertAfter('#shopify-section-product-template .wrapper .grid-row:eq(0)');
            }
        }

        //on click of 'Click Here for Measuring Instructions', slide user to measuring tab
        jQuery(document).on("click", ".custParaMeasure", function () {
          if(jQuery('.tab-accord .tabs li.nav-item[rel="htom-tab"]').length > 0){
            jQuery('.tab-accord .tabs li.nav-item[rel="htom-tab"]')[0].click();
          }
          scrollDownToTabAccord();
        });

      
        //on click 'See Frame Specifications' CTA, show Specification and hide CTA
        jQuery(document).on("click", ".custFrameSpecifications", function () {
            jQuery(this).hide();
            jQuery('.custSpecificationDiv').show();
        });

        //scroll down user to the measuring tab
        function scrollDownToTabAccord() {
            if(jQuery(".tab_container.custDescription").length > 0 ) {
                var tabAccordTop = jQuery('.product-template .grid-row .tab-accord').offset().top;
                if(jQuery(window).width() <= 767 ) {
                    tabAccordTop + 100; 
                }
                else {
                  tabAccordTop -= 180; 
                }

                jQuery("html, body").animate({
                 scrollTop: tabAccordTop
               }, 1000); 
            }
        }
       
        clearInterval(waitForJquery);
    } 
}, 50);   