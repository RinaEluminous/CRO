function checkAndInitialize() {
    addBundleAndSaveToCart();
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

function addBundleAndSaveToCart(){
    //check cart empty or not first
    var itemCountElement = document.querySelector('.cart_item-count');
    const itemCountText = itemCountElement.textContent;
    const intItemCount = parseInt(itemCountText);
    console.log('itemCount >>',intItemCount);
    if(intItemCount !== 0){
        console.log('calling function >>>>');
        addCustGetExtramsgFollowup();
        addTrtleTravelPillow();
    }
    
}

function addCustGetExtramsgFollowup() {
    // Threshold value
    var strThresholdValue = 80;
    var custGetExtramsgMainHtml = '<div class="custPreUpgradeProgress">'+
                                '<h6>Expedited free shipping</h6>'+
                                '<div class="custUpgradeRangeWraper">'+
                                '    <span class="greyBar"></span>'+
                                '    <span class="blueBar" style="width: 50%;"></span>'+
                                '    <span class="rightBall"></span>'+
                                '</div>'+
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

function addTrtleTravelPillow(){
    var trtleTravelPillowHtml = '<div class="custBundleNDsaveWraper">'+
'    <h6>Bundle and Save! <span>Get 20% OFF your 2nd pillow + FREE Expedited Shipping</span></h6>'+
'    <div class="custChooseItemImageWraper">'+
'        <div class="itemImage">'+
'            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">'+
'        </div>'+
'        <div class="itemContent">'+
'            <div class="heading">'+
'                Pillow color:'+
'                <span class="colorName">Grey</span>'+
'            </div>'+
'            <div class="custColorSwatches">'+
'                <div class="swatch swatch-color-grey active"  data-color="Grey"></div>'+
'                <div class="swatch swatch-colour-black" data-color="Black"></div>'+
'                <div class="swatch swatch-colour-red" data-color="Red"></div>'+
'                <div class="swatch swatch-colour-coral" data-color="Coral"></div>'+
'            </div>'+
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
'        <button class="btn btn-secondary add-to-cart-button custAddSave">Add &amp; save</button>'+
'    </div>'+
'</div>'+
'<div class="custFreeCarryBagWraper">'+
'    <div class="imgBox">'+
'        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/free_carry_bags.png">'+
'    </div>'+
'    <div class="content">'+
'        CONGRATS! YOU’VE GOT 2 FREE CARRY BAGS FOR FREE <span class="value">($38.00 VALUE)</span>'+
'    </div>'+
'</div>';

var targetElementOfBundleAndSave = document.querySelector('#cart-offcanvas .cart-item__wrapper');

if (targetElementOfBundleAndSave && document.querySelectorAll('.custBundleNDsaveWraper').length == 0) {
    targetElementOfBundleAndSave.insertAdjacentHTML('afterend', trtleTravelPillowHtml);
}

}

function clickOperations() {

    //color swatch click for select color and change image
   
    var swatchesElement = document.querySelectorAll('.swatch');

    swatchesElement.forEach(function (swatch) {
        swatch.addEventListener('click', function () {
            console.log('color swatch click >>>')
        var selectedColor = this.getAttribute('data-color');
        swatchesElement.forEach(sw => sw.classList.remove('active'));
        this.classList.add('active');
        // Update image URL based on pillow index
        console.log('selectedColor >>>',selectedColor)
           if(selectedColor){
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
            console.log('imgUrl >>>',imgUrl);
            var imgElement = document.querySelector('.itemImage img');
            imgElement.src = imgUrl;
            var colorElement =document.querySelector('.colorName');
            if(colorElement){
                colorElement.textContent = selectedColor;
            }
           }
         });
    });


    //ADD and save button click for trtl pillow 
    var addToCartButton = document.querySelector('.custAddSave');
    addToCartButton.addEventListener('click', function () {
        console.log('add and save button click >>>');
        var strSelectedColor = document.querySelector('.swatch.active').getAttribute('data-color');
        console.log('selectedColor >>>',strSelectedColor);
        // Add pillow to cart
        var arrayColorValue = {
            Grey: 40241105141858,
            Black: 40241105174626,
            Red: 40241105207394,
            Coral: 40241105240162,
        };
        var strSelectedProdId = arrayColorValue[strSelectedColor];
        console.log('strSelectedProdId >>>>>>>>>>>>>>>>>>>>>>>>>>>', strSelectedProdId);
        if (strSelectedProdId !== '' && strSelectedProdId !== undefined) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://uk.trtltravel.com/cart/add');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                if (xhr.status === 200) {
                   sessionStorage.setItem('isRecommendedProductAddedInCart', 'yes');
                   setTimeout(function(){
                        location.reload();
                    }, 750);
                }
            };
            xhr.send(JSON.stringify({
                id: strSelectedProdId,
                quantity: "1",
                // properties: {
                //     '_cartDrawer': '0.1'
                // }
            }));
        }
    });

}