function checkAndInitialize() {
    console.log('TRTL Travel125 Pre-Cart Upgrade Popup V2 UK >>>');
    triggerExperience();
}

// Use window.onload to ensure all resources are fully loaded
window.onload = function () {
    checkAndInitialize();
};


document.addEventListener('DOMContentLoaded', function () {
    checkAndInitialize();
});

// In case the DOMContentLoaded event is already fired before the script loads
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    checkAndInitialize();
}

// Check if TRAVEL PILLOW exist
function triggerExperience() {
    var itemCountElement = document.querySelector('.cart_item-count');
    const itemCountText = itemCountElement.textContent;
    const intItemCount = parseInt(itemCountText);
    console.log('itemCount >>', intItemCount);
    if (intItemCount !== 0) {
            console.log('TRAVEL PILLOW Exist>>>>>>>>')
            addCustomSocsProduct();
            modifyExistingCartContent();
            addClassToSocsOfferElement();
           // updateTextOnOfferProduct();
            if (sessionStorage.getItem("isRecommendedSocsProductAdded") !== null) {
                var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
                if (closeButton) {
                    closeButton.click();
                    console.log('closeButton >>>>');
                }
                // sessionStorage.removeItem("isRecommendedSocsProductAdded");
             }

            clickOperations();

        }else{
            var socsOfferProductElement=document.querySelector('.custAddSocsProductFromOffer');
            if(socsOfferProductElement){
                var socsProductTrashElement =document.querySelector('.custCompressionSocsTrashBtn');
                if(socsProductTrashElement){
                    socsProductTrashElement.click();
                }
               
            }
        }
}

//addd class to the socs offer
function addClassToSocsOfferElement() {
    //add class to the offer product 
    const cartProducts = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
    let addedProducts = JSON.parse(sessionStorage.getItem('addedSocsProductIds')) || [];
    addedProducts = addedProducts.map(id => String(id).trim().toLowerCase());
    
    cartProducts.forEach(product => {

        const productHref = product.getAttribute('href');
        console.log('productHref:', productHref);

        const urlParams = new URLSearchParams(productHref.split('?')[1] || '');
        const productId = urlParams.get('variant')?.trim().toLowerCase();
        if (addedProducts.includes(productId)) {

            const targetElement = product.closest('.col-12');
            if (targetElement) {
                targetElement.classList.add('custAddSocsProductFromOffer');
            }
         }

   });

   //hide offer product and show free product
   var offerProductElementDiv = document.querySelectorAll('.custAddSocsProductFromOffer').length;
   if (offerProductElementDiv > 0) {
       document.querySelector('.custBundleNDsaveWraperV2')?.classList.add('custHideContent');
    } 

    //add class to the trash element of offer product 
   var offerProductElementDiv =document.querySelector('.custAddSocsProductFromOffer');
        if(offerProductElementDiv){
            const freeCarryBagParentElement = offerProductElementDiv.querySelector('.row.g-3.align-items-center');
            console.log('freeCarryBagParentElement:', freeCarryBagParentElement);
            if (freeCarryBagParentElement) {
               
                        const CompressionSocsTrash = freeCarryBagParentElement.querySelector('button.text-reset');
                        console.log('CompressionSocsTrash >>', CompressionSocsTrash);
                        if (CompressionSocsTrash) {
                            CompressionSocsTrash.classList.add('custCompressionSocsTrashBtn');
                        }
                    
                }
            }
 }

    //add offer product
function addCustomSocsProduct() {
    var socsProductHtml = '<div class="custBundleNDsaveWraperV2">'+
                        '    <h6>Bundle and Save! <span>50% OFF Compression Socks.</span></h6>'+
                        '    <div class="custChooseItemImageWraper">'+
                        '        <div class="itemImage">'+
                        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/bundle_compression_socks.png">'+
                        '        </div>'+
                        '        <div class="itemContent">'+
                        '            <ul>'+
                        '                <li>Keep your legs healthy while traveling.</li>'+
                        '                <li>Comfy, breathable and super soft.</li>'+
                        '                <li>9 creative & fun designs</li>'+
                        '            </ul>'+
                        '        </div>'+
                        '    </div>'+
                        '    <div class="custPricingWraper">'+
                        '        <div class="pricing">'+
                        '            <div class="priceMain">'+
                        '                <div class="finalPrice">$35.99</div>'+
                        '                <div class="cancelPrice text-oblique">$59.99</div>'+
                        '            </div>'+
                        '            <div class="freeCarryBag">+ FREE Carry Bag</div>'+
                        '        </div>'+
                        '        <button class="btn btn-secondary add-to-cart-button custSelectColorSizeBtn">SELECT COLOR & SIZE</button>'+
                        '    </div>'+
                        '    <div class="custItemSizeSelection custHideContent">'+
                        '        <div class="custColorSelect">'+
                        '            <div class="heading">'+
                        '                Pillow color:'+
                        '                <span class="colorName">New York</span>'+
                        '            </div>'+
                        '            <div class="custColorSwatches">'+
                        '                <div class="swatch swatch-color-new-york active"  data-color="New-York"></div>'+
                        '                <div class="swatch swatch-color-fiji"  data-color="Fiji"></div>'+
                        '                <div class="swatch swatch-color-kyoto"  data-color="Kyoto"></div>'+
                        '                <div class="swatch swatch-color-paris"  data-color="Paris"></div>'+
                        '                <div class="swatch swatch-color-seattle"  data-color="Seattle"></div>'+
                        '                <div class="swatch swatch-color-sydney"  data-color="Sydney"></div>'+
                        '                <div class="swatch swatch-color-vancouver"  data-color="Vancouver"></div>'+
                        '                <div class="swatch swatch-colour-atlantic"  data-color="Atlantic"></div>'+
                       '            </div>'+
                        '        </div>'+
                        '        <div class="custSizeSelect">'+
                        '            <div class="heading">'+
                        '                Size -'+
                        '                <a class="cursor-pointer custViewSizeChart"> View size chart</a>'+
                        '            </div>'+
                        '            <div class="custSizesWraper">'+
                        '                <div class="btn btn-outline-dark custSize active"  data-size="Small">Small</div>'+
                        '            </div>'+
                        '            <button class="btn btn-secondary add-to-cart-button custAddNSaveBtn">Add &amp; save</button>'+
                        '        </div>'+
                        '    </div>'+
                        '</div>'+
                        '<div class="custFreeCarryBagWraperV2 custHideContent">'+
                        '<div class="imgBox">'+
                        '    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/free_carry_bags.png">'+
                        '</div>'+
                        '<div class="content">'+
                        '    CONGRATS! YOU’VE GOT 2 FREE CARRY BAGS FOR FREE <span class="value">($38.00 VALUE)</span>'+
                        '</div>'+
                        '</div>';
  

    var targetElementOfBundleAndSave = document.querySelector('#cart-offcanvas .cart-item__wrapper');

    if (targetElementOfBundleAndSave && document.querySelectorAll('.custBundleNDsaveWraperV2').length == 0) {
        targetElementOfBundleAndSave.insertAdjacentHTML('afterend', socsProductHtml);
    }

    //size chart modal 
     var sizeChartModalHtml = '<div class="modal fade custViewSizeChartModal" id="modal-chart-template--15985738219618__main" tabindex="-1" role="dialog" data-bs-backdrop="false" aria-modal="true">'+
    '    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">'+
    '        <div class="modal-content">'+
    '            <button type="button" class="btn-close position-absolute top-0 end-0 m-3 z-index-2 custModalCloseBtn" data-bs-dismiss="modal" aria-label="Close"></button>'+
    '            <div class="modal-body bg-white p-4">'+
    '                <img src="https://cdn.shopify.com/s/files/1/0215/5302/0992/files/NEW_SIZING_CHART_SOCKS_MOBILE.png?v=1658395870" alt="" class="d-block d-md-none w-100"><img src="https://cdn.shopify.com/s/files/1/0215/5302/0992/files/NEW_SOCK_SIZECART_copy.png?v=1658395909" alt="" class="d-none d-md-block w-100">'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>';

    if(document.querySelectorAll('.custViewSizeChartModal').length == 0){
        document.body.insertAdjacentHTML('beforeend', sizeChartModalHtml);
    }
    

}

//custom feature section changes
function modifyExistingCartContent() {

    // wrap all features into one div
    const cartCheckoutButtonElement = document.querySelector('#cart-offcanvas-content .col-12.cart_checkout-button');
    const cartCheckoutButtonElementSiblings = Array.from(cartCheckoutButtonElement.parentNode.children);
    const cartCheckoutButtonElementSiblingsIndex = cartCheckoutButtonElementSiblings.indexOf(cartCheckoutButtonElement);
    const nextDivs = cartCheckoutButtonElementSiblings.slice(cartCheckoutButtonElementSiblingsIndex + 1, cartCheckoutButtonElementSiblingsIndex + 5);
    const newParentDiv = document.createElement('div');

    if (document.querySelectorAll('.custMiniCartFeatures').length === 0) {
        newParentDiv.classList.add('custMiniCartFeatures');
        nextDivs.forEach(div => {
            newParentDiv.appendChild(div);
        });

        cartCheckoutButtonElement.parentNode.insertBefore(newParentDiv, cartCheckoutButtonElement.nextSibling);
    }

}

function clickOperations() {

  //click for view size chart 
  var viewChartElement = document.querySelector('.custViewSizeChart');
  if (viewChartElement) {
      viewChartElement.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
          console.log('ViewSizeChart click >>');
          var sizeChartModalElement = document.querySelector('.custViewSizeChartModal');
          if (sizeChartModalElement) {
              sizeChartModalElement.classList.add('custShow'); 
          }
      });
  }

    //modal close btn click
    var closeModalElement = document.querySelector('.custModalCloseBtn');
      if (closeModalElement) {
          closeModalElement.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
              console.log('ModalCloseBtn click >>');
              var sizeChartModalElement = document.querySelector('.custViewSizeChartModal');
              if (sizeChartModalElement) {
                  sizeChartModalElement.classList.remove('custShow');
              }
          });
      }

      //click for select color and size
    
    var selectColorAndSizeElement = document.querySelector('.custSelectColorSizeBtn');
    if(selectColorAndSizeElement){
      selectColorAndSizeElement.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopImmediatePropagation();
                console.log('SelectColorAndSize click >>');
                document.querySelector('.custItemSizeSelection').classList.remove('custHideContent');
                document.querySelector('.custItemSizeSelection').classList.add('custShowContent');
                
      });
      
    }

     //size click 
     var sizeElement = document.querySelectorAll('.custBundleNDsaveWraperV2 .custSizesWraper .custSize');
     sizeElement.forEach(function (size) {
         size.addEventListener('click', function (event) {
             event.preventDefault();
             event.stopImmediatePropagation();
             console.log('size click >>');
             var selectedSize = this.getAttribute('data-size');
             console.log('selectedColor >>>', selectedSize);
             sizeElement.forEach(sw => sw.classList.remove('active'));
             this.classList.add('active');
         
         });

     });

       //color swatch click for select color 
       var swatchesElement = document.querySelectorAll('.custColorSwatches .swatch');
       swatchesElement.forEach(function (swatch) {
           swatch.addEventListener('click', function (event) {
               event.preventDefault();
               event.stopImmediatePropagation();
               console.log('Swatch click >>');
               var strSelectedColor = this.getAttribute('data-color');
               //console.log('strSelectedCompressionSockColor >>>', strSelectedCompressionSockColor)
               swatchesElement.forEach(sw => sw.classList.remove('active'));
               this.classList.add('active');
               var colorElement = document.querySelector('.custBundleNDsaveWraperV2 .colorName');
               if (colorElement) {
                   colorElement.textContent = strSelectedColor;
               }

               if (strSelectedColor) {
                var imgUrl = "";
                switch (strSelectedColor) {
                    case "New-York":
                        imgUrl =
                            "https://uk.trtltravel.com/cdn/shop/products/IMG_9043cutcopy_1_1_0d1dc8ec-2d93-4583-90c4-8bc07b03af64_620x.jpg";
                        break;
                    case "Fiji":
                        imgUrl =
                            "https://uk.trtltravel.com/cdn/shop/products/DSC09351_55e689e4-5230-49c1-a405-48469da425da_620x.jpg";
                        break;
                    case "Kyoto":
                        imgUrl =
                            "https://uk.trtltravel.com/cdn/shop/products/DSC09363_3677ce46-ccc5-423f-b930-580b6859b510_620x.jpg";
                        break;
                    case "Paris":
                        imgUrl =
                            "https://uk.trtltravel.com/cdn/shop/products/DSC09373_f486a515-67a5-442f-b096-973290b3e6cb_620x.jpg";
                        break;
                    case "Seattle":
                            imgUrl =
                                "https://uk.trtltravel.com/cdn/shop/products/DSC09377_1bb234c6-eab8-42e2-a3da-6340a27e9aac_620x.jpg";
                            break;
                    case "Sydney":
                            imgUrl =
                                    "https://uk.trtltravel.com/cdn/shop/products/DSC09335_6f3f2a1b-23ea-4220-8a94-0a545f87631d_620x.jpg";
                            break;  
                    case "Vancouver":
                                imgUrl =
                                    "https://uk.trtltravel.com/cdn/shop/products/DSC09344_04393090-eba7-4431-a60e-5981c10a3824_620x.jpg";
                            break;  
                    case "Atlantic":
                                imgUrl =
                                    "https://uk.trtltravel.com/cdn/shop/products/SOCKS_NAVY_02_V1_df2cb4ee-fe78-4463-8a30-c2005b51a1e1_620x.jpg";
                            break;   
                    default:
                        break;
                }
   
                if (imgUrl) {
                    console.log('imgUrl >>>', imgUrl);
                    var imgElement = document.querySelector('.custBundleNDsaveWraperV2 .itemImage img');
                    imgElement.src = imgUrl;
                }
                
            }
       });
   
        });

         //compression socs product functionality
             
         var addnSaveElement = document.querySelector('.custAddNSaveBtn');
         if(addnSaveElement){
            addnSaveElement.addEventListener('click',function(event){
                event.preventDefault();
                event.stopImmediatePropagation();
                console.log('add and save >>>>>>>');
            //size-color with product Ids
            var arrCompressionSockColorSizeMapping = { "New-York-Small": 40241125851234, "Fiji-Small": 40241126178914, "Kyoto-Small": 40241126441058, "Paris-Small": 40241125949538, "Paris-Large": '', "Seattle-Small": 42424785043649, "Sydney-Small": 40241126637666, "Vancouver-Small": 40241126244450 };

            //compression click
            var selectedSizeElement = document.querySelector('.custBundleNDsaveWraperV2 .swatch.active');
            
            var strSelectedCompressionSockColor = selectedSizeElement.getAttribute('data-color');
            console.log('strSelectedCompressionSockSize >>',strSelectedCompressionSockSize);

            var selectedColorElement = document.querySelector('.custBundleNDsaveWraperV2 .custSize.active');
            var strSelectedCompressionSockSize = selectedColorElement.getAttribute('data-size');
            console.log('strSelectedCompressionSockSize >>',strSelectedCompressionSockColor);

             if(strSelectedCompressionSockColor !== null && strSelectedCompressionSockSize !== null){
                console.log('compression click >>>>>>>>>');
                    var strSelectedCompressionSockProdId = arrCompressionSockColorSizeMapping[strSelectedCompressionSockColor + '-' + strSelectedCompressionSockSize];

                    console.log('Selected Compression Sock Color >>', strSelectedCompressionSockColor);
                    console.log('Selected Compression Sock Size >>', strSelectedCompressionSockSize);
                    console.log('Selected Compression ID >>', strSelectedCompressionSockProdId);

                    if (strSelectedCompressionSockProdId !== '' && strSelectedCompressionSockProdId !== undefined) {
                        strSelectedCompressionSockColor = strSelectedCompressionSockColor.replace("-", " ");
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', 'https://uk.trtltravel.com/cart/add');
                        xhr.setRequestHeader('Content-Type', 'application/json');
                        xhr.onload = function() {
                            if (xhr.status === 200) {

                                let addedProducts = JSON.parse(sessionStorage.getItem('addedSocsProductIds')) || [];
                                addedProducts.push(strSelectedCompressionSockProdId);

                                sessionStorage.setItem('addedSocsProductIds', JSON.stringify(addedProducts));

                                sessionStorage.setItem('isRecommendedSocsProductAdded', 'yes');
                                setTimeout(function(){
                                    location.reload();
                                }, 750);
                            }
                        };
                        xhr.send(JSON.stringify({
                            id: strSelectedCompressionSockProdId,
                            Colour: strSelectedCompressionSockColor,
                            Size: strSelectedCompressionSockSize,
                            quantity: "1",
                            properties: {
                                '_cartDrawer': '0.5'
                            }
                        }));
                    }

                }


            });
        }

        //qty increment and decrement
        var cartButtonsDecrement = document.querySelector('#cart-offcanvas-content button#line-item-button-decrement');
        if(cartButtonsDecrement){
            cartButtonsDecrement.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopImmediatePropagation();
                console.log('Apply changes again on cart operations: minus');
                setTimeout(function() {
                    triggerExperience();
                }, 2500);
    
            });
    
        }

        var cartButtonsIncrement = document.querySelector('#cart-offcanvas-content button#line-item-button-increment');
        if(cartButtonsIncrement){
        cartButtonsIncrement.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            console.log('Apply changes again on cart operations: plus ');
            setTimeout(function() {
                triggerExperience();
            }, 2500);

        });

      }

      //Mini cart delete operations
    
    // var cartDltButtons = document.querySelector('#cart-offcanvas-content button.btn .fa-trash-alt');

    // if(cartDltButtons){
    //     cartDltButtons.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         event.stopImmediatePropagation();
    //         console.log('Mini cart delete operations >>>> ');
    //         setTimeout(function() {
    //             triggerExperience();
    //         }, 2500);

    //     });

    // }

     // PDP Add TO Cart - Trigger the function again
     var pdpAddToCartbtn = document.querySelector('button.add-to-cart-button[name=add]');
     if(pdpAddToCartbtn){
         pdpAddToCartbtn.addEventListener('click', function(event) {
             event.preventDefault();
             event.stopImmediatePropagation();
             console.log('PDP Add TO Cart >>>>');
             setTimeout(function() {
                 triggerExperience();
             }, 2500);
 
         });
 
     }

    // PDP Add TO Cart - Trigger the function again for the sticky footer
    var pdpStickyAddToCartbtn = document.querySelector('button.sticky-add-to-cart[name=add]');
    if(pdpStickyAddToCartbtn){
        pdpStickyAddToCartbtn.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            console.log('PDP Add TO Cart sticky footer >>>>');
            setTimeout(function() {
                triggerExperience();
            }, 2500);

        });

    }

  
}