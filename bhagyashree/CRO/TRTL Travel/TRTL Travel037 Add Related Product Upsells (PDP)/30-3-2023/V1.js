
var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {

    addCustomUpSellProduct();

    if(sessionStorage.getItem('custIsProductAdded') !== null){
        if(jQuery('.nav-wrapper a[href="#cart-offcanvas"]').length > 0){
            setTimeout(function(){
                jQuery('.nav-wrapper a[href="#cart-offcanvas"]:eq(0)')[0].click(); 
                sessionStorage.removeItem('custIsProductAdded');
            }, 1000);
        }
    }

    //size-color with product Ids
    var arrCompressionSockColorSizeMapping = { "New-York-Small":42424784552129,"New-York-Medium":42424784584897,"New-York-Large": 42424784617665,"Fiji-Small":42424784650433,"Fiji-Medium":42424784683201,"Fiji-Large": 42424784715969,"Kyoto-Small":42424784748737,"Kyoto-Medium":42424784781505,"Kyoto-Large": 42424784814273,"Havana-Small":42424784847041,"Havana-Medium":42424784879809,"Havana-Large": 42424784912577,"Paris-Small":42424784945345,"Paris-Medium":42424784978113,"Paris-Large": 42424785010881,"Seattle-Small":42424785043649,"Seattle-Medium":42424785076417,"Seattle-Large": 42424785109185,"Sydney-Small":42424785141953,"Sydney-Medium":42424785174721,"Sydney-Large": 42424785207489,"Vancouver-Small":42424785240257,"Vancouver-Medium":42424785273025,"Vancouver-Large": 42424785305793,"Jaipur-Small":42424785338561,"Jaipur-Medium":42424785371329,"Jaipur-Large":42424785404097 };  

    //to add custom HTML
    function addCustomUpSellProduct() {
        if(jQuery('.custProductsInfoshortAdding').length == 0) {
            jQuery('<div class=custProductsInfoshortAdding><div class=custAddToCard><div class=custCardWrapper><div><img alt=socks src=https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/socks.png></div><div class=custProductsInfoBlocks><h3>COMPRESSION SOCKS</h3><div>$24.99</div><p>Gentle compression to reduce swelling & discomfort</div><div class=custProductsindiaction><a class=button-add-toggle id=custAddBtn>ADD</a></div></div><div class=custProducts-colour-variant-swatches id=custProducts-variant-swatches><a class=custCloseCrossBlocks>✕</a><div class=custSwitchBlocksSection><div class=custSwatchWrapper><div class="custSwatchColorPattern new-york custSwatchActive" data-color=New-York title="New York"></div><div class="custSwatchColorPattern fiji"data-color=Fiji title=Fiji></div><div class="custSwatchColorPattern kyoto"data-color=Kyoto title=Kyoto></div><div class="custSwatchColorPattern havana"data-color=Havana title=Havana></div><div class="custSwatchColorPattern paris"data-color=Paris title=Paris></div><div class="custSwatchColorPattern seattle"data-color=Seattle title=Seattle></div><div class="custSwatchColorPattern sydney"data-color=Sydney title=Sydney></div><div class="custSwatchColorPattern vancouver"data-color=Vancouver title=Vancouver></div><div class="custSwatchColorPattern jaipur"data-color=Jaipur title=Jaipur></div></div><div class=custSizeChart><div class=custRow><div class=cusColtSize><div class=col-auto><label class="btn btn-outline-dark px-4 custSizeChartActive"data-size=Small for=template--15670323839169__main-2-0>Small</label></div><div class=col-auto><label class="btn btn-outline-dark px-4"data-size=Medium for=template--15670323839169__main-2-1>Medium</label></div><div class=col-auto><label class="btn btn-outline-dark px-4"data-size=Large for=template--15670323839169__main-2-2>Large</label></div></div><div class=custButtonBlocks><a class=button-add-toggle id=custAddProdCTA aria-disabled=true>Add to Cart</a></div></div></div></div></div></div><div class=custAddToCard><div class=custCardWrapper><div><img alt=socks src=https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/wrap.png></div><div class=custProductsInfoBlocks><h3>TRTL WRAP</h3><div>$99.99</div><p>Cocoons your body for a secure feeling that aids sleep while traveling.</div><div class=custProductsindiaction><a class=button-add-toggle id=custAddWrapBtn>ADD</a></div></div></div></div>').insertBefore('.product-container .product-description');
        }
    }

    //on 'add' CTA click of 'COMPRESSION SOCKS', add this product to cart
    jQuery(document).on('click', '.custProductsInfoshortAdding #custAddProdCTA', function(){
        var strSelectedColor  = jQuery('.custSwatchColorPattern.custSwatchActive').attr('data-color');    
        var strSelectedSize   = jQuery('.custProductsInfoshortAdding .custSizeChart label.custSizeChartActive').attr('data-size');  
        var strSelectedProdId = arrCompressionSockColorSizeMapping[strSelectedColor + '-' + strSelectedSize];

        if(strSelectedProdId !== '' && strSelectedProdId !== undefined){
            strSelectedColor = strSelectedColor.replace("-", " ");
            jQuery.ajax({
                type: "POST", 
                url: 'https://trtltravel.com/cart/add', 
                data: {
                    id:     strSelectedProdId,
                    Colour: strSelectedColor,
                    Size:   strSelectedSize,
                    quantity: "1"
                },      
                dataType: "json",
                success: function(response){
                    sessionStorage.setItem('custIsProductAdded', "yes");
                    location.reload();
                }
            });
        }
    });

    //on 'Add' CTA click of compression socks , show color/size panel
    jQuery(document).on('click','.custProductsindiaction #custAddBtn', function(){
        jQuery('.custProducts-colour-variant-swatches').addClass('custProductsOpen');
        checkIsAvailable();
    });

    //on 'close' CTA click hide color/size panel
    jQuery(document).on('click','.custProductsInfoshortAdding a.custCloseCrossBlocks', function() {
        jQuery('.custProducts-colour-variant-swatches').removeClass('custProductsOpen');
    });

    //on 'color' swatches click
    jQuery('.custProductsInfoshortAdding .custSwatchWrapper .custSwatchColorPattern').on('click', function() {
        jQuery('.custSwatchColorPattern').removeClass('custSwatchActive');
        jQuery(this).addClass('custSwatchActive');
        checkIsAvailable();
    });

    //on 'size' click
    jQuery('.custProductsInfoshortAdding .custSizeChart label').on('click', function() {
        jQuery('.custSizeChart label').removeClass('custSizeChartActive');
        jQuery(this).addClass('custSizeChartActive');
        checkIsAvailable();
    });

    //on 'add' CTA click of 'TRTL WRAP', add this product to cart
    jQuery(document).on('click','.custAddToCard .custCardWrapper #custAddWrapBtn',function () {
          var intProductId = '42424607572161';
          jQuery.get('https://trtltravel.com/products/trtl-wrap-travel-blanket?variant='+intProductId+'&section_id=template--15870653825217__main', function(html) {

                var strProdCtaText  = jQuery(html).find(".add-to-cart-button span:eq(0)").text().trim();
                    if(strProdCtaText == 'Add to cart' ){

                        jQuery('#custAddWrapBtn').removeClass('custDisableButton');

                        jQuery.ajax({
                            type: "POST", 
                            url: 'https://trtltravel.com/cart/add', 
                            data: {
                                id: intProductId,
                                Colour: "Blue",
                                quantity: "1"
                            },      
                            dataType: "json",
                            success: function(response){
                                    sessionStorage.setItem('custIsProductAdded', "yes");
                                    location.reload();                                    
                            }                            
                         });
                    }
                    else{
                        jQuery('#custAddWrapBtn').text(strProdCtaText);
                        jQuery('#custAddWrapBtn').addClass('custDisableButton');
                    }
                });            
    });

    //check if product is in stock or sold out
    function checkIsAvailable() {

        var strSelectedColor  = jQuery('.custSwatchColorPattern.custSwatchActive').attr('data-color');    
        var strSelectedSize   = jQuery('.custProductsInfoshortAdding .custSizeChart label.custSizeChartActive').attr('data-size');  
        var strSelectedProdId = arrCompressionSockColorSizeMapping[strSelectedColor + '-' + strSelectedSize];

        jQuery('#custAddProdCTA').addClass('custDisableButton');
      
        jQuery.get('https://trtltravel.com/products/trtl-compression-socks?variant='+strSelectedProdId+'&section_id=template--15670323839169__main', function(html) {
            
            if(jQuery(html).find(".add-to-cart-button span").length > 0){

                var strCtaText  = jQuery(html).find(".add-to-cart-button span:eq(0)").text().trim();

                if(strCtaText == 'Add to cart' ) {                  
                    jQuery('#custAddProdCTA').text(strCtaText);
                    jQuery('#custAddProdCTA').removeClass('custDisableButton');
                }
                else{
                    jQuery('#custAddProdCTA').text(strCtaText);
                    jQuery('#custAddProdCTA').addClass('custDisableButton');
                }
            }
            
        });
    }

    clearInterval(waitForJquery);
    }
}, 50);  