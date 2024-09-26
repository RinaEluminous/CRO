console.log('%cTRTL before   >>> >>>', 'background-color: blue; font-weight: bold;');
function checkAndInitialize() {
    console.log('%cTRTL Travel126 Ads LP - Default 2-pack + Pricing test >>>', 'color: blue; font-weight: bold;');
    addDefault2Pack();
    addFreeCarryBagHtml();
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

function addDefault2Pack() {

    if (localStorage.getItem('callCheckAndInitialize') === 'true') {
     
       if (localStorage.getItem("isTRTLEadsProductAddedInCart") !== null) {

        var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
        if (closeButton) {
            closeButton.click();
         }
        localStorage.removeItem("isTRTLEadsProductAddedInCart");
        localStorage.removeItem('callCheckAndInitialize');
    }
    }

   var offcanvasBackDropElement = document.querySelectorAll('.offcanvas-backdrop');
    if (offcanvasBackDropElement.length >= 2) {
        offcanvasBackDropElement[0].style = display.none;
    }

    const urlPath = window.location.pathname;

    if (urlPath == '/products/trtl-travel-pillow-ads3') {


        var variantBlocksElement = document.querySelector('.product-form .ads-product-variant__container');
        if (variantBlocksElement) {


            var custSelectOfferHtml = '<div class="custSelectBuyOfferWrapper">' +
                '    <div class="custOfferHeading">Select your offer</div>' +
                '    <div class="custBuyBox">' +
                '        <div class="offerTitle">' +
                '            <div class="title">Buy 1 Pillow</div>' +
                '            <div class="price">$59.99</div>' +
                '        </div>' +
                '        <div class="custChooseItemBlock">' +
                '        <div class="custChooseItemImageWraper">' +
                '            <div class="itemImage">' +
                '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">' +
                '            </div>' +
                '            <div class="itemContent">' +
                '                <div class="heading">' +
                '                    Pillow color:' +
                '                    <span class="colorName">Grey</span>' +
                '                </div>' +
                '                <div class="custColorSwatches">' +
                '                    <div class="swatch swatch-color-grey active" data-color="Grey"></div>' +
                '                    <div class="swatch swatch-colour-black" data-color="Black"></div>' +
                '                    <div class="swatch swatch-colour-red" data-color="Red"></div>' +
                '                    <div class="swatch swatch-colour-coral" data-color="Coral"></div>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '</div>' +
                '    </div>' +
                '    <div class="custBuyBox selected">' +
                '        <div class="popularBadge">Most Popular</div>' +
                '        <div class="offerTitle">' +
                '            <div class="title">Buy 2 Save 20%</div>' +
                '            <div class="price">' +
                '                <div class="pillowPrice">Pillow price: <span class="price">$47.99</span></div>' +
                '                <div class="offerPrice">' +
                '                    <div class="cancelPrice text-oblique">$59.99</div>' +
                '                    <div class="finalPrice">$35.99</div>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="custChooseItemBlock custShow">' +
                '            <div class="custChooseItemImageWraper">' +
                '                <div class="itemImage">' +
                '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">' +
                '                </div>' +
                '                <div class="itemContent">' +
                '                    <div class="heading">' +
                '                        Pillow color:' +
                '                        <span class="colorName">Grey</span>' +
                '                    </div>' +
                '                    <div class="custColorSwatches">' +
                '                        <div class="swatch swatch-color-grey active" data-color="Grey"></div>' +
                '                        <div class="swatch swatch-colour-black" data-color="Black"></div>' +
                '                        <div class="swatch swatch-colour-red" data-color="Red"></div>' +
                '                        <div class="swatch swatch-colour-coral" data-color="Coral"></div>' +
                '                    </div>' +
                '                </div>' +
                '            </div>' +
                '            <div class="custChooseItemImageWraper">' +
                '                <div class="itemImage">' +
                '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">' +
                '                </div>' +
                '                <div class="itemContent">' +
                '                    <div class="heading">' +
                '                        Pillow color:' +
                '                        <span class="colorName">Grey</span>' +
                '                    </div>' +
                '                    <div class="custColorSwatches">' +
                '                        <div class="swatch swatch-color-grey active" data-color="Grey"></div>' +
                '                        <div class="swatch swatch-colour-black" data-color="Black"></div>' +
                '                        <div class="swatch swatch-colour-red" data-color="Red"></div>' +
                '                        <div class="swatch swatch-colour-coral" data-color="Coral"></div>' +
                '                    </div>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '<button class="btn btn-secondary add-to-cart-button custAddToCart">add to cart</button>' +
                '</div>';

            if (document.querySelectorAll('.custSelectBuyOfferWrapper').length == 0) {
                variantBlocksElement.insertAdjacentHTML('afterend', custSelectOfferHtml);
            }
        }
    }
}

function addFreeCarryBagHtml() {
    var freeCarryBagHtml = '<div class="swiper-slide col-12 product-image-wrapper custCarryBagImage">' +
        '    <div class="image-wrapper overflow-hidden">' +
        '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/carry-bag-gift.png">' +
        '    </div>' +
        '</div>';

    var featureSectionWrapperElement = document.querySelector('.desktop-grid-view-meida-container .feature-in-section-wrapper');
    if (featureSectionWrapperElement && document.querySelectorAll('.custCarryBagImage').length == 0) {
        featureSectionWrapperElement.insertAdjacentHTML('afterend', freeCarryBagHtml);
    }
}

// Function to handle adding multiple products to the cart
// function addMultipleProductsToCart(products) {
//     products.forEach(function (prodObj, index) {
//         setTimeout(function () {
//             var xhr = new XMLHttpRequest();
//             xhr.open('POST', 'https://trtltravel.com/cart/add.js');  // Replace with your actual API endpoint
//             xhr.setRequestHeader('Content-Type', 'application/json');
//             xhr.onload = function () {
//                 if (xhr.status === 200) {
//                     localStorage.setItem('isTRTLEadsProductAddedInCart', 'yes');

//                 }
//             };
//             // Send the product ID and quantity for each selected product
//             xhr.send(JSON.stringify({
//                 id: prodObj.id,
//                 quantity: prodObj.quantity
//             }));
//         }, index * 500);  // Delay each request by 500ms to avoid request overlap
//     });

//     // Optional: reload after all items are added
//     setTimeout(function () {
//         location.reload();
//     }, (products.length * 500) + 750);
// }



function addMultipleProductsToCart(products) {
    let promises = []; // Array to store all the promises

    products.forEach(function (prodObj, index) {
        // Create a new Promise for each product
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://trtltravel.com/cart/add.js');  // Replace with your actual API endpoint
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        localStorage.setItem('isTRTLEadsProductAddedInCart', 'yes');
                        resolve(); // Resolve the promise when product is added
                    } else {
                        reject();  // Reject the promise if there’s an error
                    }
                };
                xhr.onerror = function () {
                    reject();  // Reject if the request fails
                };
                // Send the product ID and quantity for each selected product
                xhr.send(JSON.stringify({
                    id: prodObj.id,
                    quantity: prodObj.quantity
                }));
            }, index * 500);  // Delay each request by 500ms to avoid request overlap
        });

        promises.push(promise);  // Add each promise to the array
    });

    // Ensure the array of promises is passed to Promise.all
    if (promises.length > 0) {
        Promise.all(promises)
            .then(function () {
              console.log('All products added to the cart successfully.');
                setTimeout(function () {
                    localStorage.setItem('callCheckAndInitialize', 'true');
                    location.reload();
                }, 750);
            })
            .catch(function () {
                console.error('Failed to add one or more products to the cart.');
                // Optionally, handle any error (e.g., show an error message)
            });
    } else {
        console.error('No products found to add to the cart.');
    }
}

function clickOperations() {

    //click for pillow 1 and pillow 2 tab on box click
    var pillowTabElements = document.querySelectorAll('.custSelectBuyOfferWrapper .custBuyBox');
    pillowTabElements.forEach(function (tab) {
        tab.addEventListener('click', function (event) {
            var selectedTab = this;
            pillowTabElements.forEach(tab => tab.classList.remove('selected'));
            selectedTab.classList.add('selected');
            var itemBlockWrapers = document.querySelectorAll('.custSelectBuyOfferWrapper .custBuyBox .custChooseItemBlock');
            if (itemBlockWrapers) {
                itemBlockWrapers.forEach(itemBlockWraper => itemBlockWraper.classList.remove('custShow'));
            }
            var nextDivOfTab = tab.querySelector('.custChooseItemBlock');
            if (nextDivOfTab) {
                nextDivOfTab.classList.add('custShow');
            }


        });
    });

    //color swatch click for select color and change image
    var swatchesElement = document.querySelectorAll('.custSelectBuyOfferWrapper .swatch');
    swatchesElement.forEach(function (swatch) {
        swatch.addEventListener('click', function (event) {
            // event.preventDefault();
            // event.stopImmediatePropagation();
            var selectedColor = this.getAttribute('data-color');
            var parentContainer = this.closest('.custChooseItemImageWraper');
            parentContainer.querySelectorAll('.swatch').forEach(function (sw) {
                sw.classList.remove('active');
            });

            this.classList.add('active');
            // Update image URL based on pillow index

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

                var custChooseItemBlockwrapper = swatch.closest('.custChooseItemImageWraper');
                var imgElement = custChooseItemBlockwrapper.querySelector('.itemImage img');
                imgElement.src = imgUrl;
                var colorElement = custChooseItemBlockwrapper.querySelector('.colorName');
                if (colorElement) {
                    colorElement.textContent = selectedColor;
                }
            }
        });
    });


    //add to cart functionality 

    // Add event listener to the "Add to Cart" button
    document.querySelector('.add-to-cart-button').addEventListener('click', function(event) {
        // event.preventDefault();
        var arrayColorValue = {
            Grey: 48383104876737,
            Black: 48383104909505,
            Red: 48383104942273,
            Coral: 48383104975041
        };
        var selectedProdIds = [];
        var intQty = 1;
        var selectedBuyBox = document.querySelector('.custBuyBox.selected');
        if (selectedBuyBox) {
            var activeSwatches = selectedBuyBox.querySelectorAll('.custColorSwatches .swatch.active');
            console.log('activeSwatches >>',activeSwatches);
            if (activeSwatches.length > 0) {
                activeSwatches.forEach(function(swatch) {
                    var selectedColor = swatch.getAttribute('data-color');
                    var strSelectedProdId = arrayColorValue[selectedColor];
                    if (strSelectedProdId !== '' && strSelectedProdId !== undefined) {
                        selectedProdIds.push({
                            id: strSelectedProdId,
                            quantity: intQty
                        });
                    }
                });
                
                console.log('selectedProdIds.length',selectedProdIds.length);
                // Add the selected products to the cart
                if (selectedProdIds.length > 0) {
                    addMultipleProductsToCart(selectedProdIds);
                }
            }
        }
    });

}