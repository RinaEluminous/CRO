window.addEventListener('load', function () {
    
    setTimeout(function () {

        if (sessionStorage.getItem("isPageLoaded") !== null) {
            if (sessionStorage.getItem("isRecommendedProductAddedInCart") !== null) {
                var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
                if (closeButton) {
                    closeButton.click();
                }
            }
            sessionStorage.removeItem('isPageLoaded');
        }

        if (localStorage.getItem("isPageLoaded") == null) {
            triggerExperience();
            clickOperations();
        }
       
    }, 1500);
});

function removeItemCarryBagProductFromOffer(){

    const offerProductElement = document.querySelector('.custProductFromOfferTrashBtn');
    var freBagTrashElement = document.querySelector('.custCarryBagTrashBtn');

    if (offerProductElement) {
        setTimeout(function() {
            offerProductElement.click();
            localStorage.removeItem("isRecommendedProductAddedInCart");
            localStorage.removeItem('addedProductIds');
        }, 500);
       
    }

    if (freBagTrashElement) {
        setTimeout(function() {
            freBagTrashElement.click();
            localStorage.removeItem("isPillowCarryBagAdded");
        }, 500);
        
    }

    setTimeout(function () {
        
        if (localStorage.getItem("isPageLoaded") == null) {
            location.reload();
            sessionStorage.setItem('isPageLoaded', 'yes');
        }
     
      }, 1500);
}

function triggerExperience() {

    var itemCountElement = document.querySelector('.cart_item-count');
    const itemCountText = itemCountElement.textContent;
    const intItemCount = parseInt(itemCountText);
    if (localStorage.getItem("isRecommendedProductAddedInCart") !== null) {
        var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
        if (closeButton) {
            closeButton.click();
         }
    }

    if(intItemCount == 1 && document.querySelectorAll('.custAddProductFromOffer').length > 0){
        removeItemCarryBagProductFromOffer();
    }
    

    if (intItemCount !== 0) {
        if (intItemCount == 2) {
         
            const productLinks = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
             productLinks.forEach(link => {
                const parentCol12 = link.closest('.col-12');
               
                const badgeElement = parentCol12.querySelector('.badge.bg-green-light');
                
                if (badgeElement && badgeElement.textContent.trim() === 'Free pillow carry bag') {
                    const removeButton = parentCol12.querySelector('button[data-mp-cart-item-remove]');
                    
                    if (removeButton) {
                        removeButton.click();
                        setTimeout(() => {
                            removeItemCarryBagProductFromOffer(); 
                        }, 500); 
                    }
                }
            });
        }

    if (intItemCount == 3) {
               
                const productLinks = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
        
                let freeCarryBagTextPresent = false;
                let upsellTextPresent = false;

                let freeCarryBagAdded = false;
                let ProductFromOfferAdded =false
        
                productLinks.forEach(link => {

                    const parentCol12 = link.closest('.col-12'); 
                    if (parentCol12.classList.contains('custFreeCarryBagAdded')) {
                        freeCarryBagAdded = true;
                    }
                    if (parentCol12.classList.contains('custAddProductFromOffer')) {
                       ProductFromOfferAdded = true;
                    }

                    const badgeElement = parentCol12.querySelector('.badge.bg-green-light');
                    if (badgeElement && badgeElement.textContent.trim() === 'Free pillow carry bag') {
                        freeCarryBagTextPresent = true;
                    }
        
                    const upsellBadgeElement = parentCol12.querySelector('.badge.bg-green-light');
                    if (upsellBadgeElement && upsellBadgeElement.textContent.includes('20% of on cart upsell')) {
                        upsellTextPresent = true;
                    }
                });
                if (freeCarryBagAdded && ProductFromOfferAdded) {
                    removeItemCarryBagProductFromOffer(); 
                }
               
                if (freeCarryBagTextPresent && upsellTextPresent) {
                   removeItemCarryBagProductFromOffer(); 
                }
            }
        
        
        addCustGetExtramsgFollowup();
        addTrtleTravelPillow();
        modifyExistingCartContent();
        addClassToOfferElement();
      
    }
    if(intItemCount == 0){
       if (document.querySelector('.custCarryBagTrashBtn')) {
             removeItemCarryBagProductFromOffer();
        }

        if(document.querySelectorAll('.custPreUpgradeProgress').length > 0){
            document.querySelector('.custPreUpgradeProgress').classList.add('custHideContent'); 
        }
        if(document.querySelectorAll('.custBundleNDsaveWraper').length > 0){
            document.querySelector('.custPreUpgradeProgress').classList.add('custHideContent'); 
            document.querySelector('.custPreUpgradeProgress').classList.remove('custShowContent');
        }
        if(document.querySelectorAll('.custPreUpgradeProgress').length > 0){
            document.querySelector('.custFreeCarryBagWraper').classList.remove('custShowContent');
            document.querySelector('.custFreeCarryBagWraper').classList.add('custHideContent');
        }
    }
   

}

function triggerExperienceWithInterval() {
   
    var checkCartInterval = setInterval(function() {
    var itemCountElement = document.querySelector('.cart_item-count');
    var itemCountElement = document.querySelector('.cart_item-count');
    const itemCountText = itemCountElement.textContent;
    const intItemCount = parseInt(itemCountText);

    if (localStorage.getItem("isRecommendedProductAddedInCart") !== null) {
        var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
        if (closeButton) {
            closeButton.click();
        }
    }

    if(intItemCount == 1 && document.querySelectorAll('.custAddProductFromOffer').length > 0){
        removeItemCarryBagProductFromOffer();
    }

    if (intItemCount !== 0) {
        if (intItemCount == 2) {
         
            const productLinks = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
        
            productLinks.forEach(link => {
                const parentCol12 = link.closest('.col-12');
                const badgeElement = parentCol12.querySelector('.badge.bg-green-light');
                if (badgeElement && badgeElement.textContent.trim() === 'Free pillow carry bag') {
                    const removeButton = parentCol12.querySelector('button[data-mp-cart-item-remove]');
                    
                    if (removeButton) {
                        removeButton.click();
                        setTimeout(() => {
                            removeItemCarryBagProductFromOffer(); 
                        }, 500); 
                        
                    }
                }
            });
        }
        
            if (intItemCount == 3) {
              
                const productLinks = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
        
                let freeCarryBagTextPresent = false;
                let upsellTextPresent = false;

                let freeCarryBagAdded = false;
                let ProductFromOfferAdded =false
        
                productLinks.forEach(link => {
                    const parentCol12 = link.closest('.col-12'); 
                    if (parentCol12.classList.contains('custFreeCarryBagAdded')) {
                        freeCarryBagAdded = true;
                    }
                    if (parentCol12.classList.contains('custAddProductFromOffer')) {
                       ProductFromOfferAdded = true;
                    }

                    const badgeElement = parentCol12.querySelector('.badge.bg-green-light');
                    if (badgeElement && badgeElement.textContent.trim() === 'Free pillow carry bag') {
                        freeCarryBagTextPresent = true;
                    }
        
                    const upsellBadgeElement = parentCol12.querySelector('.badge.bg-green-light');
                    if (upsellBadgeElement && upsellBadgeElement.textContent.includes('20% of on cart upsell')) {
                        upsellTextPresent = true;
                    }
                });
                if (freeCarryBagAdded && ProductFromOfferAdded) {
                    removeItemCarryBagProductFromOffer(); 
                }
               
                if (freeCarryBagTextPresent && upsellTextPresent) {
                   removeItemCarryBagProductFromOffer(); 
                }
            }
           
          
        clearInterval(checkCartInterval);
        addCustGetExtramsgFollowup();
        addTrtleTravelPillow();
        modifyExistingCartContent();
        addClassToOfferElement();
      
    }
    
     if(intItemCount == 0){
       if (document.querySelector('.custCarryBagTrashBtn')) {
        removeItemCarryBagProductFromOffer();
        }

        if(document.querySelectorAll('.custPreUpgradeProgress').length > 0){
            document.querySelector('.custPreUpgradeProgress').classList.add('custHideContent'); 
        }
        if(document.querySelectorAll('.custBundleNDsaveWraper').length > 0){
            document.querySelector('.custPreUpgradeProgress').classList.add('custHideContent'); 
            document.querySelector('.custPreUpgradeProgress').classList.remove('custShowContent');
        }
        if(document.querySelectorAll('.custPreUpgradeProgress').length > 0){
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
            removeItemCarryBagProductFromOffer();
        }

        const productLinks = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
        if(productLinks){
            productLinks.forEach(link => {
                const parentCol12 = link.closest('.col-12');
            
                const badgeElement = parentCol12.querySelector('.badge.bg-green-light');
                if (badgeElement && badgeElement.textContent.trim() === 'Free pillow carry bag') {
                  const removeButton = parentCol12.querySelector('button[data-mp-cart-item-remove]');
                    if (removeButton) {
                        removeButton.click();
                        setTimeout(function() {
                            location.reload();
                        }, 500);
                    }
                }
            });
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

        //add class to the item and price div
     
        let existingCustItemCountDiv = document.querySelector('.custItemPriveDiv');

        if (!existingCustItemCountDiv) {
          
            const itemCountDiv = document.querySelector('.cart_item-count');
            const totalPriceDiv = document.querySelector('.cart_item-total-price');

            if (itemCountDiv && totalPriceDiv) {
            
                const custItemCountDiv = document.createElement('div');
                custItemCountDiv.classList.add('custItemPriveDiv');
                custItemCountDiv.appendChild(itemCountDiv);
                custItemCountDiv.appendChild(totalPriceDiv);
                const customShippingElement = document.querySelector('custom-shipping');
                if (customShippingElement) {
                    customShippingElement.insertAdjacentElement('afterend', custItemCountDiv);
                }
            }
        }

        //add class to the all increment and decrement btn
        
        const productLinks = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
        if(productLinks){
            productLinks.forEach(link => {
                const parentCol12 = link.closest('.col-12');
                
                const badgeElement = parentCol12.querySelector('.badge.bg-green-light');
                if (badgeElement && badgeElement.textContent.trim() === '2 discounts have been applied') {
                 badgeElement.textContent = '20% off';
                }
                const increaseBtnElement = parentCol12.querySelector('button[aria-label="Increase quantity"]');
                increaseBtnElement.classList.add('custIncrementBtn');
                const decreaseBtnElement = parentCol12.querySelector('button[aria-label="Decrease quantity"]');
            decreaseBtnElement.classList.add('custDecrementBtn');
            
            
            });
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
        '                <div class="finalPrice">£39.99</div>' +
        '                <div class="cancelPrice text-oblique">£49.99</div>' +
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
     // Get all increment and decrement buttons
    var increaseBtnElementbtn = document.querySelectorAll('.custIncrementBtn');
           if (increaseBtnElementbtn.length > 0) {
            increaseBtnElementbtn.forEach(function(button) {
                    button.addEventListener('click', function(event) {
                     
                      setTimeout(function() {
                        triggerExperienceWithInterval();
                        }, 2500);
                    });
                });
          }
           

          var decreaseBtnElementbtn = document.querySelectorAll('.custDecrementBtn');
          if (decreaseBtnElementbtn.length > 0) {
           decreaseBtnElementbtn.forEach(function(button) {
                   button.addEventListener('click', function(event) {
                     
                     setTimeout(function() {
                        triggerExperienceWithInterval();
                       }, 2500);
                   });
               });
         }

          

    // PDP Add TO Cart - Trigger the function again
     var pdpAddToCartbtn = document.querySelector('button.add-to-cart-button[name=add]');
     if(pdpAddToCartbtn){
         pdpAddToCartbtn.addEventListener('click', function() {
           setTimeout(function() {
                triggerExperienceWithInterval();
             }, 2500);
 
         });
 
     }
 
    // PDP Add TO Cart - Trigger the function again for the sticky footer
    var pdpStickyAddToCartbtn = document.querySelector('button.sticky-add-to-cart[name=add]');
    if(pdpStickyAddToCartbtn){
        pdpStickyAddToCartbtn.addEventListener('click', function(event) {
           setTimeout(function() {
                triggerExperienceWithInterval();
            }, 2500);
 
        });
 
    }
 
     //Mini cart delete operations
    var productFromOfferDltButtons = document.querySelectorAll('.custProductFromOfferTrashBtn');
     if (productFromOfferDltButtons.length > 0) {
        productFromOfferDltButtons.forEach(function(button) {
              button.addEventListener('click', function(event) {
              if (document.querySelector('.custCarryBagTrashBtn')) {
                    removeItemCarryBagProductFromOffer();
                }
                setTimeout(function() {
                    triggerExperienceWithInterval();
                  }, 2500);
              });
          });
    }
 
    var cartDltButtons = document.querySelectorAll('#cart-offcanvas-content button.btn .fa-trash-alt');

    if (cartDltButtons.length > 0) {
        cartDltButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
               if (button.closest('.custProductFromOfferTrashBtn')) {
                    removeItemCarryBagProductFromOffer()
                }
                setTimeout(function() {
                    triggerExperienceWithInterval();
                }, 2500);
            });
        });
    }
}