var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        //call function only on cart page
        if(jQuery('#MainContent .cart__contents').length > 0 && jQuery('.gradient .header__icons .icon-cart').length > 0) {
            recommendedProductOnCartPage();
        }

        function  recommendedProductOnCartPage(){
    
            jQuery('<div><p>Recommended for you</p><p>Clip on your keys or just add a little bling with our tassel keychains with customized charms.</p><span>$14.99</span><button class="custAddTocart">Add To Cart</button></div>').insertAfter('cart-items');
        }   

        //add to cart click event for product add into the cart
        jQuery(document).on('click', '.custAddTocart', function() {
            jQuery.ajax({
                type: "POST",
                url: "https://www.thesashbag.com/cart/add",
                data: {
                    'form_type': 'product',
                    'id': '43938166341786',
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
