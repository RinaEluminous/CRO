 //call function only on PDP page
        if(jQuery('#shopify-section-product-template').length > 0) {
            addNewPageRedesignOnTherapeuticMoistureBar();
            addSlickSlider();
        }
        function addNewPageRedesignOnTherapeuticMoistureBar() {
            if(jQuery('#shopify-section-product-template .purchase-details').length > 0  && jQuery('#shopify-section-product-template .purchase-details .custImageSection').length == 0){
                var whyEmuidWorkTabText=jQuery('#s-4a5f04b9-6b92-4456-98b5-5e7ee1169d98').text();
                jQuery('#shopify-section-product-template .purchase-details').append('<div class="custImageSection">Image section</div><div class="custAccordian"><h3 class="accordian">Why EMUAID® Works</h3><div class="panel"><p>'+whyEmuidWorkTabText+'</p></div><h3 class="accordian">Ingredients</h3><div class="panel"><p>Some text here simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div><h3 class="accordian">30 Day Money-Back Guarantee</h3><div class="panel"><p>Some text here simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div><h3 class="accordian">How To Use</h3><div class="panel"><p>Some text here simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div></div>');
            }
        }
        function addSlickSlider(){

            if(jQuery("#shopify-section-product-template .product__images").length  > 0 && jQuery("#shopify-section-product-template .custSlider").length == 0) {
                
                jQuery("#shopify-section-product-template .product__images").append('<div class="custSlider"><div class="carousel carousel-main" data-flickity=\'{ "sync": ".carousel-nav", "prevNextButtons": false }\'><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="Slide 1"></div></div><div class="carousel carousel-nav" data-flickity=\'{ "asNavFor": ".carousel-main", "contain" : true, "pageDots": false }\'><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="Slide 1"></div> <div class="carousel-cell"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="Slide 2"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="Slide 1"></div><div class="carousel-cell"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="Slide 1"></div></div></div>');



                if(jQuery("#shopify-section-product-template .product__images .custSlider").length  > 0){
               
                    if (jQuery('#custFlickityMinJs').length == 0 && jQuery('#custFlickitySyncJs').length == 0 ) {
                    jQuery("head").append('<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" id="custFlickityMinJs"></script>');
                    jQuery("head").append('<script src="https://unpkg.com/flickity-sync@2.0.0/flickity-sync.js" id="custFlickitySyncJs"></script>');
                    }

                    if (jQuery('#custFlickityCss').length == 0) {
                    jQuery("head").append('<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" id="custFlickityCss"/>');
                    

                    }

                 
                }
            }

            
     
      
        } 


