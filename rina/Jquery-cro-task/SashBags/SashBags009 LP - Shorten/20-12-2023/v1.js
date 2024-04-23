var waitForJquery = setInterval(function() {

    if (typeof jQuery != "undefined") {
        var strURL = window.location.href;
        if (strURL.indexOf('pages/sash-everyday') > 0) {
            addCustHtmlOnEverydayPage();
            replaceProductInfo();
        }
       
        function addCustHtmlOnEverydayPage(){
            if(jQuery('#e-1689117702069').length > 0){
                jQuery('#e-1689704893219').insertBefore('#e-1689117702069'); 
            }

            if(jQuery('#e-1689117702069').length > 0){
                jQuery('#e-1689125530228,#e-1689819494460,#m-1689112988688').insertAfter('#m-1689114780803'); 
            }
            
            if(jQuery('#m-1689112988688').length > 0){
                jQuery('#e-1689129057958,#e-1689207283869,#r-1642967937158').insertAfter('#m-1689112988688'); 
            }
           
            if(jQuery('#r-1642967937158').length > 0){
                jQuery('#e-1689704758534,#e-1689704755708,#r-1642967799770').insertAfter('#r-1642967937158'); 
            }
          
            if(jQuery('#r-1642967799770').length > 0){
                
                jQuery('#e-1689191224367,#r-1689191366544').insertAfter('#r-1642967799770'); 
            }

       
            if(jQuery('#r-1689191366544').length > 0){
                jQuery('#e-1689130326277,#e-1689114939222,#r-1642966485491').insertAfter('#r-1689191366544'); 
            }

            if(jQuery('#r-1642966485491').length > 0){
                jQuery('#e-1689121278238,#e-1689133437759,#e-1689133692233,#e-1689190465580,#e-1689819176936').insertAfter('#r-1642966485491'); 
            }

            if(jQuery('#r-1642966485491').length > 0){
                jQuery('#m-1689825666100').insertAfter('#e-1689190465580'); 
            }
        
            if (jQuery(window).width() < 767) {
                if(jQuery('#e-1689117702069').length > 0){
                    jQuery('#e-1689826376747').insertBefore('#e-1689117702069'); 
                }

                if(jQuery('#e-1689114939222').length > 0){
                    jQuery('#r-1689206968428').insertAfter('#e-1689114939222'); 
                }
            }
            
            //Express Yourself - With Color 
            var expressYourSelfHtml ='<div class="custWithColorWraper">'+
            '    <div class="custCol-4">'+
            '        <div class="custItemBox">'+
            '            <form method="post" action="/cart/add" accept-charset="UTF-8" class="AddToCartForm" enctype="multipart/form-data" data-productid="7921686577306">'+
            '                <input type="hidden" name="form_type" value="product" />'+
            '                <input type="hidden" name="utf8" value="✓" />'+
            '                <input name="id" type="hidden" value="43934277435546" data-productid="7921686577306" data-value="43934277435546" />'+
            '                <a href="https://www.thesashbag.com/products/lotus-leather-sash-bag?_pos=4&_sid=5e7d72bb6&_ss=r" class="itemImgBox">'+
            '                    <img src="https://www.thesashbag.com/cdn/shop/files/Sash_ProdPhoto_India_Flatlay_Lotus_Leather.jpg" alt="Lotus Faux Leather Sash Bag" />'+
            '                </a>'+
            '                <div class="itemDetailBox">'+
            '                    <a href="https://www.thesashbag.com/products/lotus-leather-sash-bag?_pos=4&_sid=5e7d72bb6&_ss=r" class="title">Lotus Leather Sash Bag</a>'+
            '                    <div class="price">$ 179.99</div>'+
            '                    <button class="custShopBtn button">Shop NOW</button>'+
            '                </div>'+
            '            </form>'+
            '        </div>'+
            '    </div>'+
            '    <div class="custCol-4">'+
            '        <div class="custItemBox">'+
            '            <form method="post" action="/cart/add" accept-charset="UTF-8" class="AddToCartForm" enctype="multipart/form-data" data-productid="7892457193626">'+
            '                <input type="hidden" name="form_type" value="product" />'+
            '                <input type="hidden" name="utf8" value="✓" />'+
            '                <input name="id" type="hidden" value="43840301432986" data-productid="7892457193626" data-value="43840301432986" />'+
            '                <a href="https://www.thesashbag.com/products/sapphire-faux-leather-fringe-sash-bag-canada-only?_pos=2&_sid=b8ac89259&_ss=r" class="itemImgBox">'+
            '                    <img src="https://www.thesashbag.com/cdn/shop/files/Sash_ProdPhoto_India_Flatlay_Sapphire_Faux_Fringe.jpg" alt="Sapphire Faux Leather Fringe Sash Bag" />'+
            '                </a>'+
            '                <div class="itemDetailBox">'+
            '                    <a href="https://www.thesashbag.com/products/sapphire-faux-leather-fringe-sash-bag-canada-only?_pos=2&_sid=b8ac89259&_ss=r" class="title">Sapphire Faux Leather Fringe Sash Bag</a>'+
            '                    <div class="price">$ 89.99</div>'+
            '                    <button class="custShopBtn button">Shop NOW</button>'+
            '                </div>'+
            '            </form>'+
            '        </div>'+
            '    </div>'+
            '    <div class="custCol-4">'+
            '        <div class="custItemBox">'+
            '            <form method="post" action="/cart/add" accept-charset="UTF-8" class="AddToCartForm" enctype="multipart/form-data" data-productid="7921686347930">'+
            '                <input type="hidden" name="form_type" value="product" />'+
            '                <input type="hidden" name="utf8" value="✓" />'+
            '                <input name="id" type="hidden" value="43934276878490" data-productid="7921686347930" data-value="43934276878490" />'+
            '                <a href="https://www.thesashbag.com/products/durga-leather-fringe-sash-bag?_pos=4&_sid=98438d14b&_ss=r" class="itemImgBox">'+
            '                    <img src="https://www.thesashbag.com/cdn/shop/files/Sash_ProdPhoto_India_Flatlay_Durga_Leather_Fringe.jpg" alt="Durga Leather Fringe Sash Bag" />'+
            '                </a>'+
            '                <div class="itemDetailBox">'+
            '                    <a href="https://www.thesashbag.com/products/durga-leather-fringe-sash-bag?_pos=4&_sid=98438d14b&_ss=r" class="title">Durga Leather Fringe Sash Bag</a>'+
            '                    <div class="price">$ 199.99</div>'+
            '                    <button class="custShopBtn button">Shop NOW</button>'+
            '                </div>'+
            '            </form>'+
            '        </div>'+
            '    </div>'+
            '</div>';

            if(jQuery('#e-1689191224367').length > 0 && jQuery('.custWithColorWraper').length == 0 ){
                jQuery(expressYourSelfHtml).insertAfter('#e-1689191224367');
            }
            //Our Patented Design images
            var custPatentedDesignHtml ='<div class="custDesignIdeaWraper">'+
            '    <div class="custCol-6">'+
            '        <div class="designImgBox">'+
            '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/design-idea-front.png" alt="front">'+
            '        </div>'+
            '    </div>'+
            '    <div class="custCol-6">'+
            '        <div class="designImgBox">'+
            '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/design-idea-back.png" alt="back">'+
            '        </div>'+
            '    </div>'+
            '</div>';

            if(jQuery('#e-1689133692233').length > 0 && jQuery('.custDesignIdeaWraper').length == 0 ){
                jQuery(custPatentedDesignHtml).insertAfter('#e-1689133692233');
            }
          
        }

        function replaceProductInfo(){
            var intCount = 0;
            var intProductInfoInterval = setInterval(function() {
                intCount += 1;
            //image
            if(jQuery('#m-1689114780803-0').length > 0){
                var strMainProductImg ='https://www.thesashbag.com/cdn/shop/products/Black_Classic_Leather.jpg';

                jQuery('#m-1689114780803-0').find('img').attr({
                    'data-zoom-src': strMainProductImg,
                    'data-src': strMainProductImg,
                    'href': strMainProductImg,
                    'srcset': strMainProductImg
                    
                });
               
            }
            //title
            if(jQuery('#m-1689114780803-1 .gf_product-title').length > 0){
                jQuery('#m-1689114780803-1 .gf_product-title').text('Black Leather Sash Bag');
            }
            //price
            if(jQuery('#m-1689114780803-2 .gf_product-price').length > 0){
                jQuery('#m-1689114780803-2 .gf_product-price').text('$ 169.99');
                jQuery('#m-1689114780803-2 .gf_product-price').attr('','');
            }
           
            //input value

            if(jQuery('#m-1689114780803 input[name="id"]').length > 0){
                jQuery('#m-1689114780803 input[name="id"]').attr({
                    'data-productid': '7369662660762',
                    'data-value': '42097380982938',
                    'value':'42097380982938'
                });
            }

            //form product id value
            if(jQuery('form.AddToCartForm').length > 0){
                jQuery('form.AddToCartForm').attr('data-productid', '7369662660762');
            }

            if (intCount === 80) {
                clearInterval(intProductInfoInterval);
            }
        }, 30);

        }
        clearInterval(waitForJquery);
    }

}, 50);

