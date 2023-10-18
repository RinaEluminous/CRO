var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        
        //call function only on PDP page
        if(jQuery('.product-template').length > 0) {
            updatePdpSection();
        }

        function updatePdpSection(){
            //adde para for measuring instructions

            if( jQuery("#desc-tab-title").parent().length > 0){
                jQuery("#desc-tab-title").parent().addClass('custDescription');
            }
            
            if(jQuery(".step-add-wizard .gr-col-6 .eympr-2").length > 0 && jQuery('.custParaMeasure').length==0){
                jQuery(".step-add-wizard .gr-col-6 .eympr-2").before('<div class="custParaMeasure"><a><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/measuring-instructions.png"/><span>Click Here for Measuring Instructions</span></a></div>');
               
            }
            //show 6th image from list on description page
            var elements = jQuery("#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell"); // Select all elements with the specified classes
            if (elements.length >= 6) {
                var sixthImageLink = jQuery("#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell").find('img').eq(5).attr('srcset');
                if(jQuery('.tab_container #desc-tab [itemprop="description"]').length > 0  && jQuery('.custquoteOnDescription').length==0 && jQuery('.custProductImage').length==0){
                    jQuery('.tab_container #desc-tab [itemprop="description"]').prepend('<p class="custquoteOnDescription">"Absolutely love the frames! Probably one of our smartest purchases made for our new home!"</p>');
                    jQuery('.tab_container #desc-tab [itemprop="description"]').after('<div class="custProductImage"><img src="'+sixthImageLink+'"></div>');
                }
            }

            //hide and show specification on click of see of frame specification text
                if ( jQuery(".tab_container #desc-tab h3:contains('Specifications')").length > 0) {
                 
                    if (jQuery(".tab_container #desc-tab h3:contains('Specifications')").next("ul").length > 0) {
                        jQuery(".tab_container #desc-tab h3:contains('Specifications')").next("ul").wrap("<div class='custSpecificationDiv'></div>");
                    }
                   
                    jQuery(".tab_container #desc-tab h3:contains('Specifications')").append('<a class="custFrameSpecifications">See Frame Specifications</a>');
               
                }
       
            
        }
        //on click function of measure tab open on paragraph
        jQuery(document).on("click", ".custParaMeasure", function () {
            console.log('on clicked event occur')
          //hide description tab  
          jQuery('.tab-accord .tabs li.nav-item[rel="desc-tab"]').removeClass('active');
          jQuery('.tab_container #desc-tab-title').removeClass('d_active');
          jQuery('.tab_container #desc-tab').css('display', 'none');
          //show How to measure tab  
          jQuery('.tab-accord .tabs li.nav-item[rel="htom-tab"]').addClass('active');
          jQuery('.tab_container #htom-tab-title').addClass('d_active');
          jQuery('.tab_container #htom-tab').css('display', 'block');

          scrollDownToTabAccord();
          
        });

      
        //on click function of measure tab open on paragraph
        jQuery(document).on("click", ".custFrameSpecifications", function () {
            jQuery('.custSpecificationDiv').show();
        });

            //scroll down effect on click  of custpara measure
            function scrollDownToTabAccord() {

                if(jQuery("#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell").length > 0 ) {
                    var tabAccordTop = jQuery("#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell").offset().top;
                    jQuery("html, body").animate({
                     scrollTop: tabAccordTop
                   }, 1000); 
                }
              
              }
       
        clearInterval(waitForJquery);
    } 
}, 50);   

