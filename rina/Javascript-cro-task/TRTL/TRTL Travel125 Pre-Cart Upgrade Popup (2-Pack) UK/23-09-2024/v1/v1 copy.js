function checkAndInitialize() {
    if (sessionStorage.getItem("isRecommendedProductAddedInCart") !== null) {
        var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
        if (closeButton) {
            closeButton.click();
         }
    }
    triggerExperience();
    clickOperations();
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


function triggerExperience() {

    var itemCountElement = document.querySelector('.cart_item-count');
    const itemCountText = itemCountElement.textContent;
    const intItemCount = parseInt(itemCountText);
    if (sessionStorage.getItem("isRecommendedProductAddedInCart") !== null) {
        var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
        if (closeButton) {
            closeButton.click();
         }
    }

    if(intItemCount == 1 && document.querySelectorAll('.custAddProductFromOffer').length > 0){
 
    var socsOfferProductElement = document.querySelector('.custAddProductFromOffer');
        if (socsOfferProductElement) {
            var socsProductTrashElement = document.querySelector('.custCarryBagTrashBtn');
            if (socsProductTrashElement) {
                socsProductTrashElement.click();
                localStorage.removeItem("isRecommendedProductAddedInCart");
                localStorage.removeItem("isPillowCarryBagAdded");
                localStorage.removeItem('addedProductIds');
            }
        }
    }
   
    if(intItemCount == 1 && document.querySelectorAll('.custAddProductFromOffer').length > 0){
      
        var socsOfferProductElement = document.querySelector('.custAddProductFromOffer');
        if (socsOfferProductElement) {
            var socsProductTrashElement = document.querySelector('.custCarryBagTrashBtn');
            if (socsProductTrashElement) {
                socsProductTrashElement.click();
                localStorage.removeItem("isRecommendedProductAddedInCart");
                localStorage.removeItem("isPillowCarryBagAdded");
                localStorage.removeItem('addedProductIds');
            }else {
               var custProductFromOfferTrashBtn = document.querySelector('.custProductFromOfferTrashBtn');
                if (custProductFromOfferTrashBtn) {
                    console.log('custCarryBagTrashBtn not available, clicking on custProductFromOfferTrashBtn');
                    custProductFromOfferTrashBtn.click();
                }
            }
        }
    }

    if (intItemCount !== 0) {

        if(document.querySelectorAll('.custAddProductFromOffer').length == 0 ){

        const productLinks = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
             productLinks.forEach(link => {
                
                const parentRow = link.closest('.col-8');
        
                const badgeElement = parentRow.querySelector('.badge.bg-green-light');
                
                if (badgeElement && badgeElement.textContent.trim() === 'Free pillow carry bag') {
                    console.log('Found Free pillow carry bag');
        
                    const removeButton = parentRow.querySelector('button[data-mp-cart-item-remove]');
                    
                    if (removeButton) {
                    console.log('Removing item from cart');
                    
                    removeButton.click();
                    localStorage.removeItem("isRecommendedProductAddedInCart");
                    localStorage.removeItem("isPillowCarryBagAdded");
                    localStorage.removeItem('addedProductIds');
                    }
                }
                });
        
        }
        addCustGetExtramsgFollowup();
        addTrtleTravelPillow();
        modifyExistingCartContent();
        addClassToOfferElement();
      
    }
    if(intItemCount == 0){
       if (document.querySelector('.custCarryBagTrashBtn')) {
                document.querySelector('.custCarryBagTrashBtn').click();
                localStorage.removeItem("isRecommendedProductAddedInCart");
                localStorage.removeItem("isPillowCarryBagAdded");
                localStorage.removeItem('addedProductIds');
        }

        if(document.querySelectorAll('.custUpgradeRangeWraper').length > 0){
            document.querySelector('.custUpgradeRangeWraper').classList.add('custHideContent'); 
        }
        if(document.querySelectorAll('.custBundleNDsaveWraper').length > 0){
            document.querySelector('.custUpgradeRangeWraper').classList.add('custHideContent'); 
            document.querySelector('.custUpgradeRangeWraper').classList.remove('custShowContent');
        }
        if(document.querySelectorAll('.custUpgradeRangeWraper').length > 0){
            document.querySelector('.custFreeCarryBagWraper').classList.remove('custShowContent');
            document.querySelector('.custFreeCarryBagWraper').classList.add('custHideContent');
        }
    }
   

}

function pollCartForTrtlPillow() {
   
    var checkCartInterval = setInterval(function() {
    var itemCountElement = document.querySelector('.cart_item-count');
    var itemCountElement = document.querySelector('.cart_item-count');
    const itemCountText = itemCountElement.textContent;
    const intItemCount = parseInt(itemCountText);
    if (sessionStorage.getItem("isRecommendedProductAddedInCart") !== null) {
        var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
        if (closeButton) {
            closeButton.click();
        }
    }

    if(intItemCount == 1 && document.querySelectorAll('.custAddProductFromOffer').length > 0){
      
        var socsOfferProductElement = document.querySelector('.custAddProductFromOffer');
        if (socsOfferProductElement) {
            var socsProductTrashElement = document.querySelector('.custCarryBagTrashBtn');
            if (socsProductTrashElement) {
                socsProductTrashElement.click();
                localStorage.removeItem("isRecommendedProductAddedInCart");
                localStorage.removeItem("isPillowCarryBagAdded");
                localStorage.removeItem('addedProductIds');
            }else {
               var custProductFromOfferTrashBtn = document.querySelector('.custProductFromOfferTrashBtn');
                if (custProductFromOfferTrashBtn) {
                    console.log('custCarryBagTrashBtn not available, clicking on custProductFromOfferTrashBtn');
                    custProductFromOfferTrashBtn.click();
                }
            }
        }
    }

    if (intItemCount !== 0) {
        clearInterval(checkCartInterval);
        if(document.querySelectorAll('.custAddProductFromOffer').length == 0 ){
           
            const productLinks = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
                 productLinks.forEach(link => {
                    
                    const parentRow = link.closest('.col-8');
            
                    const badgeElement = parentRow.querySelector('.badge.bg-green-light');
                    
                    if (badgeElement && badgeElement.textContent.trim() === 'Free pillow carry bag') {
                        console.log('Found Free pillow carry bag');
            
                        const removeButton = parentRow.querySelector('button[data-mp-cart-item-remove]');
                        
                        if (removeButton) {
                        console.log('Removing item from cart');
                        
                        removeButton.click();
                        localStorage.removeItem("isRecommendedProductAddedInCart");
                        localStorage.removeItem("isPillowCarryBagAdded");
                        localStorage.removeItem('addedProductIds');
                        }
                    }
                    });
            
            }
        addCustGetExtramsgFollowup();
        addTrtleTravelPillow();
        modifyExistingCartContent();
        addClassToOfferElement();
      
    }
     if(intItemCount == 0){
       if (document.querySelector('.custCarryBagTrashBtn')) {
                document.querySelector('.custCarryBagTrashBtn').click();
                localStorage.removeItem("isRecommendedProductAddedInCart");
                localStorage.removeItem("isPillowCarryBagAdded");
                localStorage.removeItem('addedProductIds');
        }

        if(document.querySelectorAll('.custUpgradeRangeWraper').length > 0){
            document.querySelector('.custUpgradeRangeWraper').classList.add('custHideContent'); 
        }
        if(document.querySelectorAll('.custBundleNDsaveWraper').length > 0){
            document.querySelector('.custUpgradeRangeWraper').classList.add('custHideContent'); 
            document.querySelector('.custUpgradeRangeWraper').classList.remove('custShowContent');
        }
        if(document.querySelectorAll('.custUpgradeRangeWraper').length > 0){
            document.querySelector('.custFreeCarryBagWraper').classList.remove('custShowContent');
            document.querySelector('.custFreeCarryBagWraper').classList.add('custHideContent');
        }
    }
    
    }, 500);
}

function addClassToOfferElement() {

    const cartProducts = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
     let addedProducts = JSON.parse(localStorage.getItem('addedProductIds')) || [];
    addedProducts = addedProducts.map(id => String(id).trim().toLowerCase());
    cartProducts.forEach(product => {
        const productHref = product.getAttribute('href');
    
        const urlParams = new URLSearchParams(productHref.split('?')[1] || '');
        const productId = urlParams.get('variant')?.trim().toLowerCase();
        if (addedProducts.includes(productId)) {

            const targetElement = product.closest('.col-12');
            if (targetElement) {
                targetElement.classList.add('custAddProductFromOffer');
            }
            const productTrash = product.querySelector('button.text-reset');
            if (productTrash) {
                productTrash.classList.add('custProductFromOfferTrashBtn');
            }
        }

        // add class for free carry bag
        if (localStorage.getItem("isPillowCarryBagAdded") !== null) {
            if (product.textContent.includes('TRTL PILLOW CARRY BAG')) {
                const freeCarryBagParentElement = product.closest('.row.g-3.align-items-center');
                if (freeCarryBagParentElement) {
                    const quantityInput = freeCarryBagParentElement.querySelector('input[name="quantity"]');

                    if (quantityInput) {
                        const quantityValue = quantityInput.value;
                         if (quantityValue === '2') {
                           const freeCarryBagParentCol12El = freeCarryBagParentElement.closest('.col-12');
                            if (freeCarryBagParentCol12El) {
                                freeCarryBagParentCol12El.classList.add('custFreeCarryBagAdded');
                            }
                            const carryBagTrash = freeCarryBagParentElement.querySelector('button.text-reset');
                            if (carryBagTrash) {
                                carryBagTrash.classList.add('custCarryBagTrashBtn');
                            }
                        }
                    }
                }

            }
        }
    });

    //hide offer product and show free product
    var offerProductElementDiv = document.querySelectorAll('.custAddProductFromOffer').length;
    if (offerProductElementDiv > 0) {
        document.querySelector('.custBundleNDsaveWraper')?.classList.remove('custShowContent');
        document.querySelector('.custBundleNDsaveWraper')?.classList.add('custHideContent');
        document.querySelector('.custFreeCarryBagWraper')?.classList.remove('custHideContent');
        document.querySelector('.custFreeCarryBagWraper')?.classList.add('custShowContent');
    } else {
        document.querySelector('.custFreeCarryBagWraper')?.classList.add('custHideContent');
        document.querySelector('.custFreeCarryBagWraper')?.classList.remove('custShowContent');

        document.querySelector('.custBundleNDsaveWraper')?.classList.remove('custHideContent');
     
        if (document.querySelector('.custCarryBagTrashBtn')) {
                document.querySelector('.custCarryBagTrashBtn').click();
                localStorage.removeItem("isRecommendedProductAddedInCart");
                localStorage.removeItem("isPillowCarryBagAdded");
                localStorage.removeItem('addedProductIds');
               
    
        }
    }

   
    var offerProducts = document.querySelectorAll('.custAddProductFromOffer');
    offerProducts.forEach(function(offerProduct) {
      var removeButton = offerProduct.querySelector('button[data-mp-cart-item-remove]');
        if (removeButton) {
            removeButton.classList.add('custProductFromOfferTrashBtn');
        }
    });


}

function addCustGetExtramsgFollowup() {
    // Threshold value
    var strThresholdValue = 80;
    var custGetExtramsgMainHtml = '<div class="custPreUpgradeProgress">' +
        '<h6>Expedited free shipping</h6>' +
        '<div class="custUpgradeRangeWraper">' +
        '    <span class="greyBar"></span>' +
        '    <span class="blueBar" style="width: 50%;"></span>' +
        '    <span class="rightBall"></span>' +
        '</div>' +
        '</div>';

    var targetElementOfExtramsg = document.querySelector('#cart-offcanvas .cart-offcanvas');

    if (targetElementOfExtramsg && document.querySelectorAll('.custPreUpgradeProgress').length == 0) {
      
        targetElementOfExtramsg.insertAdjacentHTML('beforebegin', custGetExtramsgMainHtml);
    }

    var intCartTotalPrice = parseFloat(document.querySelector('.col-6.mt-3.text-end').textContent.replace(/[^\d.]/g, ''));

    if (parseFloat(intCartTotalPrice) >= strThresholdValue) {

        var rangeSliderElement = document.querySelector('.custPreUpgradeProgress .blueBar');
        if (rangeSliderElement) {
            rangeSliderElement.style.width = '100%';
            document.querySelector('.custPreUpgradeProgress .rightBall').classList.add('full');
        }

    } else {

        var intPendingAmount = strThresholdValue - parseFloat(intCartTotalPrice);
        if (!isNaN(intPendingAmount)) {

            var intPendingAmountInPercentage = (intCartTotalPrice / strThresholdValue) * 100;
            document.querySelector('.custPreUpgradeProgress .blueBar').style.width = intPendingAmountInPercentage + '%';
            document.querySelector('.custPreUpgradeProgress .rightBall').classList.remove('full');
        }

     }
}

function addTrtleTravelPillow() {
    var trtleTravelPillowHtml = '<div class="custBundleNDsaveWraper">' +
        '    <h6>Bundle and Save! <span>Get 20% OFF your 2nd pillow + FREE Expedited Shipping</span></h6>' +
        '    <div class="custChooseItemImageWraper">' +
        '        <div class="itemImage">' +
        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">' +
        '        </div>' +
        '        <div class="itemContent">' +
        '            <div class="heading">' +
        '                Pillow color:' +
        '                <span class="colorName">Grey</span>' +
        '            </div>' +
        '            <div class="custColorSwatches">' +
        '                <div class="swatch swatch-color-grey active"  data-color="Grey"></div>' +
        '                <div class="swatch swatch-colour-black" data-color="Black"></div>' +
        '                <div class="swatch swatch-colour-red" data-color="Red"></div>' +
        '                <div class="swatch swatch-colour-coral" data-color="Coral"></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <div class="custPricingWraper">' +
        '        <div class="pricing">' +
        '            <div class="priceMain">' +
        '                <div class="finalPrice">£35.99</div>' +
        '                <div class="cancelPrice text-oblique">£59.99</div>' +
        '            </div>' +
        '            <div class="freeCarryBag">+ FREE Carry Bag</div>' +
        '        </div>' +
        '        <button class="btn btn-secondary add-to-cart-button custAddSave">Add &amp; save</button>' +
        '    </div>' +
        '</div>' +
        '<div class="custFreeCarryBagWraper custHideContent">' +
        '    <div class="imgBox">' +
        '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/free_carry_bags.png">' +
        '    </div>' +
        '    <div class="content">' +
        '        CONGRATS! YOU’VE GOT 2 FREE CARRY BAGS FOR FREE <span class="value">(£29.98 VALUE)</span>' +
        '    </div>' +
        '</div>';

    var targetElementOfBundleAndSave = document.querySelector('#cart-offcanvas .cart-item__wrapper');

    if (targetElementOfBundleAndSave && document.querySelectorAll('.custBundleNDsaveWraper').length == 0) {
        targetElementOfBundleAndSave.insertAdjacentHTML('afterend', trtleTravelPillowHtml);
    }

}

function addPillowCarryBag() {
   
    // Add free carry bag to cart
    if (localStorage.getItem("isRecommendedProductAddedInCart") !== null && localStorage.getItem("isPillowCarryBagAdded") == null) {

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://uk.trtltravel.com/cart/add');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
            }
        };
        xhr.send(JSON.stringify({
            id: '40612250386530',
            quantity: "2",
            properties: {
                '_pillowCarryBag': '1'
            }
        }));
    }

}

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

    //color swatch click for select color and change image
    var swatchesElement = document.querySelectorAll('.swatch');
    swatchesElement.forEach(function (swatch) {
        swatch.addEventListener('click', function (event) {
            var selectedColor = this.getAttribute('data-color');
            swatchesElement.forEach(sw => sw.classList.remove('active'));
            this.classList.add('active');
            if (selectedColor) {
                var imgUrl = "";
                switch (selectedColor) {
                    case "Grey":
                        imgUrl =
                            "https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png";
                        break;
                    case "Black":
                        imgUrl =
                            "https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-black.png";
                        break;
                    case "Red":
                        imgUrl =
                            "https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-red.png";
                        break;
                    case "Coral":
                        imgUrl =
                            "https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-coral.png";
                        break;
                    default:
                        break;
                }
            }

            if (imgUrl) {
              
                var imgElement = document.querySelector('.itemImage img');
                imgElement.src = imgUrl;
                var colorElement = document.querySelector('.colorName');
                if (colorElement) {
                    colorElement.textContent = selectedColor;
                }
            }
        });
    });


    //ADD and save button click for trtl pillow 
    var addToCartButton = document.querySelector('.custAddSave');
    if(addToCartButton){
        addToCartButton.addEventListener('click', function (event) {
         
            var strSelectedColor = document.querySelector('.custColorSwatches .swatch.active').getAttribute('data-color');
            // Add pillow to cart
            var arrayColorValue = {
                Grey: 40241105141858,
                Black: 40241105174626,
                Red: 40241105207394,
                Coral: 40241105240162,
            };
            var strSelectedProdId = arrayColorValue[strSelectedColor];
           
            if (strSelectedProdId !== '' && strSelectedProdId !== undefined) {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://uk.trtltravel.com/cart/add');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        let addedProducts = JSON.parse(localStorage.getItem('addedProductIds')) || [];
                        addedProducts.push(strSelectedProdId);
                        localStorage.setItem('addedProductIds', JSON.stringify(addedProducts));
    
                        localStorage.setItem('isRecommendedProductAddedInCart', 'yes');
                        if(document.querySelectorAll('.custFreeCarryBagAdded').length == 0 && localStorage.getItem("isPillowCarryBagAdded") == null){
                            addPillowCarryBag();
                            localStorage.setItem('isPillowCarryBagAdded', 'yes');
                        }
                        
                        setTimeout(function () {
                            location.reload();
                        }, 750);
                    }
                };
                xhr.send(JSON.stringify({
                    id: strSelectedProdId,
                    quantity: "1",
                    properties: {
                        '_trtltravelTravelPillow': '0.2'
                    }
    
                }));
            }
        });
    }
  

        //qty increment and decrement
        var cartButtonsDecrement = document.querySelectorAll('#cart-offcanvas-content button#line-item-button-decrement');

        if (cartButtonsDecrement.length > 0) {
            cartButtonsDecrement.forEach(function(button) {
                button.addEventListener('click', function(event) {
                    setTimeout(function() {
                        pollCartForTrtlPillow();
                    }, 2500);
                });
            });
        }
        
 
        var cartButtonsIncrement = document.querySelectorAll('#cart-offcanvas-content button#line-item-button-increment');
 
        if (cartButtonsIncrement.length > 0) {
            cartButtonsIncrement.forEach(function(button) {
                button.addEventListener('click', function(event) {
                    setTimeout(function() {
                        pollCartForTrtlPillow();
                    }, 1500); // Adjust the delay as needed
                });
            });
        }
        
 
    // PDP Add TO Cart - Trigger the function again
     var pdpAddToCartbtn = document.querySelector('button.add-to-cart-button[name=add]');
     if(pdpAddToCartbtn){
         pdpAddToCartbtn.addEventListener('click', function() {
             setTimeout(function() {
               pollCartForTrtlPillow();
             }, 1500);
 
         });
 
     }
 
    // PDP Add TO Cart - Trigger the function again for the sticky footer
    var pdpStickyAddToCartbtn = document.querySelector('button.sticky-add-to-cart[name=add]');
    if(pdpStickyAddToCartbtn){
        pdpStickyAddToCartbtn.addEventListener('click', function(event) {
            setTimeout(function() {
                pollCartForTrtlPillow();
            }, 1500);
 
        });
 
    }
 
     //Mini cart delete operations

     
     var productFromOfferDltButtons = document.querySelectorAll('.custProductFromOfferTrashBtn');
     if (productFromOfferDltButtons.length > 0) {
        productFromOfferDltButtons.forEach(function(button) {
              button.addEventListener('click', function(event) {
               console.log('productFromOfferDltButtons delete btn >>>> ');
                  setTimeout(function() {
                    if (document.querySelector('.custCarryBagTrashBtn')) {
                        document.querySelector('.custCarryBagTrashBtn').click();
                            localStorage.removeItem("isRecommendedProductAddedInCart");
                            localStorage.removeItem("isPillowCarryBagAdded");
                            localStorage.removeItem('addedProductIds');
                    }
                     pollCartForTrtlPillow();
                  }, 2500);
              });
          });
    }
 
    var cartDltButtons = document.querySelectorAll('#cart-offcanvas-content button.btn .fa-trash-alt');
 
    if (cartDltButtons.length > 0) {
        cartDltButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
              
                if (button.closest('.custProductFromOfferTrashBtn')) {
                    console.log('Clicked on a custProductFromOfferTrashBtn');
                   
                    // Remove items from localStorage
                    localStorage.removeItem("isRecommendedProductAddedInCart");
                    localStorage.removeItem("isPillowCarryBagAdded");
                    localStorage.removeItem('addedProductIds');
 
                    // Check for .custCarryBagTrashBtn and trigger its click
                    var carryBagBtn = document.querySelector('.custCarryBagTrashBtn');
                    var productFromOfferTrashBtn=document.querySelector('.custProductFromOfferTrashBtn');
                    if (carryBagBtn && productFromOfferTrashBtn) {
                        carryBagBtn.click();
                        productFromOfferTrashBtn.click();
                    }
 
                }
                setTimeout(function() {
                    pollCartForTrtlPillow();
                }, 2500);
            });
        });
    }


}