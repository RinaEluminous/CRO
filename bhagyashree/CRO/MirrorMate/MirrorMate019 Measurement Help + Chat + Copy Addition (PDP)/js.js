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
            
            if(jQuery(".step-add-wizard .gr-col-6 .eympr-2").find('img').length > 0){
                if(jQuery('.custParaMeasure').length==0){
                jQuery(".step-add-wizard .gr-col-6 .eympr-2").before('<div class="custParaMeasure"><a><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/measuring-instructions.png"/><span>Click Here for Measuring Instructions</span></a></div>');
                }
            }
            //show 6th image from list on description page
            var elements = jQuery("#ProductThumbsSlider-product-template .flickity-viewport .product-thumb--cell"); // Select all elements with the specified classes
            elements.each(function (index) {
                if (elements.length >= 6) {
                    if (index == 5) {
                        var sixthImageLink = jQuery(this).find('a').attr('href');
                        if(jQuery('.tab_container #desc-tab [itemprop="description"]').length > 0 ){
                            if(jQuery('.custquoteOnDescription').length==0){
                            jQuery('.tab_container #desc-tab [itemprop="description"]').prepend('<p class="custquoteOnDescription">“Absolutely love the frames! Probably one of our smartest purchases made for our new home!”</p>');
                            }
                            if(jQuery('.custProductImage').length==0){
                                jQuery('.tab_container #desc-tab [itemprop="description"]').after('<div class="custProductImage"><img src="'+sixthImageLink+'"></div>');
                            }
                        }
                       
                       
                    }
                }
            });

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
          
        });

        jQuery('.custSpecificationDiv').hide();
        //on click function of measure tab open on paragraph
        jQuery(document).on("click", ".custFrameSpecifications", function () {
            jQuery('.custSpecificationDiv').show();
        });
       
        clearInterval(waitForJquery);
    } 
}, 50);   

