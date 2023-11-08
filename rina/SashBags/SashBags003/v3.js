var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        //call function only on cart page
        if(jQuery('#MainContent .cart__contents').length > 0 && jQuery('.gradient .header__icons .icon-cart').length > 0) {
            recommendedProductOnCartPage();
        }

        function  recommendedProductOnCartPage(){
            jQuery('<div><p>Recommended for you</p><p>Clip on your keys or just add a little bling with our tassel keychains with customized charms.</p><span>$14.99</span><variant-radios class="no-js-hidden" data-section="template--16125110812826__main" data-url="/products/sash-keychain"><fieldset class="js product-form__input"><legend class="form__label">Color</legend><input type="radio" id="template--16125110812826__main-1-0" name="Color" value="Black" form="product-form-template--16125110812826__main" checked=""><label for="template--16125110812826__main-1-0">Black</label><input type="radio" id="template--16125110812826__main-1-1" name="Color" value="Brown" form="product-form-template--16125110812826__main"><label for="template--16125110812826__main-1-1">Brown</label><input type="radio" id="template--16125110812826__main-1-2" name="Color" value="Tan" form="product-form-template--16125110812826__main"><label for="template--16125110812826__main-1-2">Tan</label><input type="radio" id="template--16125110812826__main-1-3" name="Color" value="Gray" form="product-form-template--16125110812826__main"><label for="template--16125110812826__main-1-3">Gray</label></fieldset></variant-radios><button class="custAddTocart">Add To Cart</button></div>').insertAfter('cart-items');
        }
        var selectedColor="43938166341786";

        //change event for product color add into the cart
        jQuery(document).on('change', 'input[type="radio"][name="Color"]', function() {
                var selectedValue = jQuery(this).val(); 
                if(selectedValue== 'Black'){
                    selectedColor='43938166341786';
                }else if(selectedValue== 'Brown'){
                    selectedColor='43938166440090';
                }else if(selectedValue== 'Tan'){
                    selectedColor='43938166472858';
                }else if(selectedValue== 'Gray'){
                    selectedColor='43938166505626';
                }

                console.log('Selected value: ' + selectedValue);
             });

        //add to cart click event for product add into the cart
        jQuery(document).on('click', '.custAddTocart', function() {

            console.log('selected Color: ' + selectedColor);

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
                    location.reload();
                    console.log('response >>>>>>>>>>>',data)
                }
            });

        });
         clearInterval(waitForJquery);
    }
}, 50);   
