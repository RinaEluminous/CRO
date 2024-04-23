var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        //call function only on cart page
        if(jQuery('#MainContent .cart__contents').length > 0 && jQuery('.gradient .header__icons .icon-cart').length > 0) {
            recommendedProductOnCartPage();
        }

        function  recommendedProductOnCartPage(){
            
            var custHtmlforRecommendedProduct = '<div class="custSScartRecommendMain">' +
                    '            <div class="insideBox">' +
                    '              <div class="itemImgBox">' +
                    '                <img src="https://www.thesashbag.com/cdn/shop/files/BlackSashcharm.jpg?v=1696024217&width=823" alt="">' +
                    '              </div>' +
                    '              <div class="itemRightBox">' +
                    '                <div class="recommendFlag">Recommended'+ 'for you</div>' +
                    '                <div class="recommendColorWraper">' +
                    '                  <div class="colorsRecommendMain">' +
                    '                    <button class="colorBtn">Black</button>' +
                    '                    <button class="colorBtn">Brown</button>' +
                    '                    <button class="colorBtn">Tam</button>' +
                    '                    <button class="colorBtn">Grey</button>' +
                    '                  </div>' +
                    '                  <div class="itemContentWraper">' +
                    '                    <div class="text">' +
                    '                      Clip on your keys or just add a little bling with our tassel keychains with customized charms.' +
                    '                    </div>' +
                    '                    <div class="buttonMain">' +
                    '                      <button class="custAddTocart">$14.99 - Add To Cart</button>' +
                    '                    </div>' +
                    '                  </div>' +
                    '                </div>' +
                    '              </div>' +
                    '            </div>' +
                    '          </div>' ;


            if(jQuery('#main-cart-footer .cart__footer').length > 0 && jQuery('.custSScartRecommendMain').length == 0){
                jQuery(custHtmlforRecommendedProduct).prependTo('#main-cart-footer .cart__footer');
            }        
       
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
