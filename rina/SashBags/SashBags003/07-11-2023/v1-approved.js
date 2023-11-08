var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        //call function only on cart page
        if(jQuery('#MainContent .cart__contents').length > 0 && jQuery('.gradient .header__icons .icon-cart').length > 0) {
            recommendedProductOnCartPage();
        }
        function  recommendedProductOnCartPage(){

            if(jQuery('#main-cart-footer .cart__footer').length > 0 && jQuery('.custSScartRecommendMain').length == 0){
                
            var custHtmlOfRecommendedProduct='<div class="custSScartRecommendMain">'+
                                            '    <div class="insideBox">'+
                                            '        <div class="itemImgBox"><img src="https://www.thesashbag.com/cdn/shop/files/BlackSashcharm.jpg" alt=""></div>'+
                                            '        <div class="itemRightBox">'+
                                            '            <div class="recommendFlag mob">Recommended for you</div>'+
                                            '            <div class="recommendColorWraper">'+
                                            '                <div class="itemContentWraper">'+
                                            '                    <div class="text">Clip on your keys or just add a little bling with our tassel keychains with customized charms.<div class="colorsRecommendMain"><button class="colorBtn active">Black</button><button class="colorBtn">Brown</button><button class="colorBtn">Tan</button><button class="colorBtn">Gray</button></div>'+
                                            '                    </div>'+
                                            '                    <div class="buttonMain">'+
                                            '                        <div class="recommendFlag desk">Recommended for you</div><button class="custAddTocart">$14.99 - Add To Cart</button>'+
                                            '                    </div>'+
                                            '                </div>'+
                                            '            </div>'+
                                            '        </div>'+
                                            '    </div>'+
                                            '</div>';
                        
                jQuery(custHtmlOfRecommendedProduct).prependTo('#main-cart-footer .cart__footer');
            }
        }
        var selectedColor="43938166341786";
        var selectedColorImage='https://www.thesashbag.com/cdn/shop/files/BlackSashcharm.jpg';
        var selectedValue='Black';

        //change event for product color add into the cart
        jQuery(document).on('click', '.custSScartRecommendMain .colorsRecommendMain .colorBtn', function() {

        jQuery('.custSScartRecommendMain .colorsRecommendMain .colorBtn').removeClass("active");
        jQuery(this).addClass('active');

                selectedValue = jQuery(this).text(); 
                if(selectedValue== 'Black'){
                    selectedColor='43938166341786';
                    selectedColorImage='https://www.thesashbag.com/cdn/shop/files/BlackSashcharm.jpg';
                }else if(selectedValue== 'Brown'){
                    selectedColor='43938166440090';
                    selectedColorImage='https://www.thesashbag.com/cdn/shop/files/BrownSashcharm.jpg';
                }else if(selectedValue== 'Tan'){
                    selectedColor='43938166472858';
                    selectedColorImage='https://www.thesashbag.com/cdn/shop/files/TanSashCharm.jpg';
                }else if(selectedValue== 'Gray'){
                    selectedColor='43938166505626';
                    selectedColorImage='https://www.thesashbag.com/cdn/shop/files/GraySashcharm.jpg';
                }

                jQuery('.custSScartRecommendMain .itemImgBox img').attr('src', selectedColorImage);
             });

        //add to cart click event for product add into the cart
        jQuery(document).on('click', '.custAddTocart', function() {
               jQuery.ajax({
                type: "POST",
                url: "https://www.thesashbag.com/cart/add",
                data: {
                    'form_type': 'product',
                    'id': selectedColor,
                    'product-id': '7922957418650',
                    'utf8': '✓',
                    'sections': 'cart-notification-product,cart-notification-button,cart-icon-bubble',
                    'sections_url': '/products/sash-keychain'               
                },
                headers: {
                    'contentType': 'application/json'
                },
                success: function(data) {
                    if(jQuery('.cart-notification__header').length > 0 && jQuery('#cart-notification').length > 0 && jQuery('.cart-count-bubble span').length > 0){
                        jQuery('#cart-notification').addClass('active');

                        jQuery('#cart-notification-product').html('<div id="cart-notification-product" class="cart-notification-product"><div class="cart-notification-product__image global-media-settings"><img src="'+selectedColorImage+'" alt="Sash Keychain" width="70" height="70" loading="lazy"></div><div><h3 class="cart-notification-product__name h4">Sash Keychain</h3><dl><div class="product-option"><dt>Color:</dt><dd>'+selectedValue+'</dd></div></dl></div></div>');

                        var updatedCount = parseInt(jQuery('.cart-count-bubble span').eq(1).text()) + 1;
                        
                        jQuery('.cart-count-bubble span').text(updatedCount);
                        }   

                    setTimeout(function() {
                        location.reload(); 
                      }, 3000);

                    
                }
            });

        });
         clearInterval(waitForJquery);
    }
}, 50);