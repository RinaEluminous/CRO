var waitForJquery = setInterval(function () {
    if (typeof jQuery != 'undefined') {

        var strURL = window.location.pathname;
        
              var arrProducts = [
              "/products/trtl-travel-pillow",
              "/products/trtl-pillow-cool",
              "/products/trtl-pillow-plus",
              "/products/trtl-pillow-junior",
             ];

       
             if (jQuery.inArray(strURL,arrProducts) !== -1){ 
            
                    if(jQuery(".product-container").length > 0){
                      jQuery(".product-container").addClass('custPillowProduct');
                        addProductDescriptionList();
                    }
            }         

           function addProductDescriptionList() {

                var productDescriptionHtml ='<ul class="custProductDescListings">'+
                                        '    <li>Complete support for your head. No bobbing.</li>'+
                                        '    <li>No neck pain, strains or aches.</li>'+
                                        '    <li>Relieves stress on your spine and muscles.</li>'+
                                        '    <li>Cozy shoulder support. Sleep deeper.</li>'+
                                        '    <li>Super lightweight and easy to carry, pack or wrap around.</li>'+
                                        '    <li>Stylish and non-bulky. Looks like a scarf.</li>'+
                                        '    <li>Machine washable super-soft, hypoallergenic fabric.</li>'+
                                        '</ul>';

                if(jQuery('body.template-product #MainContent .product-container .product-description h6').length > 0 && jQuery('.custProductDescListings').length == 0){
                    jQuery(productDescriptionHtml).insertAfter('body.template-product #MainContent .product-container .product-description h6');
                }
         }
         clearInterval(waitForJquery);
    }
}, 50);