function checkAndInitialize() {
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

function checkProductAvailabilityInMinicart(strProductName){
    var isProductAvailable = false;
    var trtlPillowelements = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
    trtlPillowelements.forEach(function(element) {
        console.log('element >>>> ' + element)
        if (element.textContent.includes(strProductName)) {
            isProductAvailable = true;
            // if(strProductName == 'TRTL PASSPORT COVER'){
            //     if(!element.parentNode.nextElementSibling.textContent.includes('$0.00')){
            //         isProductAvailable = false;
            //     }
            // }
            
        }
     });
    return isProductAvailable;
}

// Check if TRTL TRAVEL PILLOW exist
function triggerExperience() {
    var isTravelPillowExists = checkProductAvailabilityInMinicart("TRTL TRAVEL PILLOW");
    console.log('isTravelPillowExists <<<<<<< ' + isTravelPillowExists);
        if (isTravelPillowExists) {
            console.log('TRTL TRAVEL PILLOW Exist>>>>>>>>')
            addCustGetExtramsgFollowup();
            addCustomSocsProduct();
            modifyExistingCartContent();
           // updateTextOnOfferProduct();
            if (sessionStorage.getItem("isRecommendedSocsProductAdded") !== null) {
                var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
                if (closeButton) {
                    closeButton.click();
                    console.log('closeButton >>>>');
                }
                sessionStorage.removeItem("isRecommendedSocsProductAdded");
                sessionStorage.removeItem("isPassPortAdded");
            }

            operationClick();

        }
}

//add Expedited free shipping
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
        console.log('custPreUpgradeProgress >>>>>>>>>>>>>>>>>');
        targetElementOfExtramsg.insertAdjacentHTML('beforebegin', custGetExtramsgMainHtml);
    }

    var intCartTotalPrice = parseFloat(document.querySelector('.col-6.mt-3.text-end').textContent.replace(/[^\d.]/g, ''));

    if (parseFloat(intCartTotalPrice) >= strThresholdValue) {

        var rangeSliderElement = document.querySelector('.custPreUpgradeProgress .blueBar');
        if (rangeSliderElement) {
            rangeSliderElement.style.width = '100%';
        }

    } else {

        var intPendingAmount = strThresholdValue - parseFloat(intCartTotalPrice);
        if (!isNaN(intPendingAmount)) {

            var intPendingAmountInPercentage = (intCartTotalPrice / strThresholdValue) * 100;
            document.querySelector('.custPreUpgradeProgress .blueBar').style.width = intPendingAmountInPercentage + '%';
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
                        '        <button class="btn btn-secondary add-to-cart-button">SELECT COLOR & SIZE</button>'+
                        '    </div>'+
                        '    <div class="custItemSizeSelection">'+
                        '        <div class="custColorSelect">'+
                        '            <div class="heading">'+
                        '                Pillow color:'+
                        '                <span class="colorName">New York</span>'+
                        '            </div>'+
                        '            <div class="custColorSwatches">'+
                        '                <div class="swatch swatch-color-new-york active"></div>'+
                        '                <div class="swatch swatch-color-fiji"></div>'+
                        '                <div class="swatch swatch-color-kyoto"></div>'+
                        '                <div class="swatch swatch-color-paris"></div>'+
                        '                <div class="swatch swatch-color-seattle"></div>'+
                        '                <div class="swatch swatch-color-sydney"></div>'+
                        '                <div class="swatch swatch-color-vancouver"></div>'+
                        '                <div class="swatch swatch-color-jaipur"></div>'+
                        '                <div class="swatch swatch-color-havanna"></div>'+
                        '            </div>'+
                        '        </div>'+
                        '        <div class="custSizeSelect">'+
                        '            <div class="heading">'+
                        '                Size -'+
                        '                <a class="cursor-pointer" data-bs-toggle="modal" data-bs-target="#modal-chart-template--22504511832257__main"> View size chart</a>'+
                        '            </div>'+
                        '            <div class="custSizesWraper">'+
                        '                <div class="btn btn-outline-dark">Small</div>'+
                        '                <div class="btn btn-outline-dark">Medium</div>'+
                        '                <div class="btn btn-outline-dark">Large</div>'+
                        '            </div>'+
                        '            <button class="btn btn-secondary add-to-cart-button">Add &amp; save</button>'+
                        '        </div>'+
                        '    </div>'+
                        '</div>'+
                        '<div class="custFreeCarryBagWraperV2"></div>'+
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
}