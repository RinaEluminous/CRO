function checkAndInitializeV2() {
    addDefault2PackV2();
    clickOperationsV2();

}

// Use window.onload to ensure all resources are fully loaded
window.onload = function () {
    checkAndInitializeV2();
};


document.addEventListener('DOMContentLoaded', function () {
    checkAndInitializeV2();
});

// In case the DOMContentLoaded event is already fired before the script loads
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    checkAndInitializeV2();
}

function addDefault2PackV2(){

        
 if (localStorage.getItem("isTRTLEadsProductAddedInCart") !== null) {
    console.log('condition satisfied');
        var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
        if (closeButton) {
            closeButton.click();
            console.log('closeButton >>>>');
        }
}

var urlPath =window.location.pathname;

if(urlPath == '/products/trtl-travel-pillow-ads3'){

    console.log('valid path >>>>>>>>>>>');
    var variantBlocksElementV2 = document.querySelector('.product-form .ads-product-variant__container');
    if(variantBlocksElementV2){
        console.log('variant-blocks element found');

        var custSelectOfferHtml ='<div class="custSelectBuyOfferWrapperV2">'+
'    <div class="custChooseItemBlock">'+
'        <div class="custChooseItemImageWraper">'+
'            <div class="itemContent">'+
'                <div class="heading">'+
'                    Pillow color:'+
'                    <span class="colorName">Grey</span>'+
'                </div>'+
'                <div class="custColorSwatches">'+
'                    <div class="swatch swatch-color-grey active" data-color="Grey"></div>'+
'                    <div class="swatch swatch-colour-black" data-color="Black"></div>'+
'                    <div class="swatch swatch-colour-red" data-color="Red"></div>'+
'                    <div class="swatch swatch-colour-coral" data-color="Coral"></div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'    <div class="price-container mt-3">'+
'        <div class="fs-5 price lh-1">'+
'            <span class="">$59.99</span>'+
'            <span class="d-none text-oblique me-3">$69.99</span>'+
'            <span style="top: -2px;" class="badge rounded-1 position-relative bg-green-light fs-7 px-3 py-2 text-uppercase font-heading d-none">'+
'                You save <span data-mp-product-saving="">SAVE 15%</span>'+
'            </span>'+
'        </div>'+
'    </div>'+
'    <div class="col-12 custQntWraper">'+
'        <div class="row">'+
'            <div class="col-4 col-xl-4">'+
'                <div class="quantity-container">'+
'                    <div class="input-group">'+
'                        <button class="btn ps-3 pe-2 btn-outline-dark border-end-0" aria-label="Decrease quantity" type="button" id="button-decrement"><i class="fa-solid fa-minus position-relative" style="left:-2px;" aria-hidden="true"></i></button>'+
'                        <input class="form-control text-center bg-transparent border-0 border-dark border-top border-bottom px-1 custqtyInputTag" type="text" name="quantity" id="Quantity-template--22504511799489__main" value="1" aria-label="Quantity">'+
'                        <button class="btn ps-2 pe-3 btn-outline-dark border-start-0" aria-label="Increase quantity" type="button" id="button-increment"><i class="fa-solid fa-plus position-relative" style="right:-2px;" aria-hidden="true"></i></button>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="col-xl-9">'+
'                <button class="btn btn-secondary add-to-cart-button custAddToCartBtn">add to cart</button>'+
'            </div>'+
'        </div>'+
'    </div>'+
'</div>';

    if(document.querySelectorAll('.custSelectBuyOfferWrapperV2').length == 0){
        variantBlocksElementV2.insertAdjacentHTML('afterend',custSelectOfferHtml);
    }
        }
    }
}

function clickOperationsV2 (){
    //color swatch click for select color 
    var swatchesElement = document.querySelectorAll('.custSelectBuyOfferWrapperV2 .swatch');
    swatchesElement.forEach(function (swatch) {
        swatch.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            console.log('color swatch click >>>')
            var selectedColor = this.getAttribute('data-color');
            swatchesElement.forEach(sw => sw.classList.remove('active'));
            this.classList.add('active');
            console.log('selectedColor >>>', selectedColor)
            var colorElement = document.querySelector('.custSelectBuyOfferWrapperV2 .colorName');
                if (colorElement) {
                    colorElement.textContent = selectedColor;
                }
            
        });
    });

    // Quantity input element
  
    var newIncrementBtn = document.querySelector('#button-increment');
    var newDecrementBtn = document.querySelector('#button-decrement');

    // Remove any previously added event listeners
    newIncrementBtn.replaceWith(newIncrementBtn.cloneNode(true));
    newDecrementBtn.replaceWith(newDecrementBtn.cloneNode(true));

    var quantityInput = document.querySelector('.custqtyInputTag');
    if (!quantityInput) {
        console.error('Quantity input not found!');
        return;
    }

    var clonedIncrementBtn = document.querySelector('#button-increment');
    var clonedDecrementBtn = document.querySelector('#button-decrement');

    // Increment button click event
    clonedIncrementBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        event.stopPropagation(); 

        let currentValue = parseInt(quantityInput.value, 10) || 0;
        let newValue = currentValue + 1;
        quantityInput.value = newValue;

        console.log('Final Incremented Value:', newValue);
    });

    // Decrement button click event
    clonedDecrementBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        event.stopPropagation(); 

        let currentValue = parseInt(quantityInput.value, 10) || 1;
        let newValue = Math.max(currentValue - 1, 1);
        quantityInput.value = newValue;

        console.log('Final Decremented Value:', newValue);
    });

    // Prevent invalid input
    quantityInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, ''); 
    });

    //add to cart btn functionality 
    var addToCartBtn = document.querySelector('.custAddToCartBtn');
    addToCartBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        event.stopPropagation();
        console.log('add and save button click >>>');
    
        var strSelectedColor = document.querySelector('.custSelectBuyOfferWrapperV2  .swatch.active').getAttribute('data-color');
        console.log('selectedColor >>>', strSelectedColor);
        // Add pillow to cart
        var arrayColorValue = {
            Grey: 48383104876737,
            Black: 48383104909505,
            Red: 48383104942273,
            Coral: 48383104975041,
        };
        var strSelectedProdId = arrayColorValue[strSelectedColor];
        console.log('strSelectedProdId >>>>>>>>>>>>>>>>>>>>>>>>>>>', strSelectedProdId);
        var quantityInputElement = document.querySelector('.custqtyInputTag');
        var intQty = quantityInputElement.value;
        console.log('input value >>',quantityInputElement.value)

        if (strSelectedProdId !== '' && strSelectedProdId !== undefined && quantityInputElement !== '' && quantityInputElement !== undefined) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://trtltravel.com/cart/add.js');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function () {
                if (xhr.status === 200) {
                localStorage.setItem('isTRTLEadsProductAddedInCart', 'yes');
                    setTimeout(function () {
                        location.reload();
                    }, 750);
                }
            };
            xhr.send(JSON.stringify({
                id: strSelectedProdId,
                quantity: intQty,
               }));
        }
        
    });


}




