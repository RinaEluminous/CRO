function checkAndInitialize() {
    addDefault2Pack();
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

function addDefault2Pack(){

const urlPath =window.location.pathname;

if(urlPath == '/products/trtl-travel-pillow-ads3'){

    console.log('valid path >>>>>>>>>>>');
    var variantBlocksElement = document.querySelector('.product-form .ads-product-variant__container');
    if(variantBlocksElement){
        console.log('variant-blocks element found');

        var custSelectOfferHtml ='<div class="custSelectBuyOfferWrapper">'+
        '    <div class="custOfferHeading">Select your offer</div>'+
        '    <div class="custBuyBox">'+
        '        <div class="offerTitle">'+
        '            <div class="title">Buy 1 Pillow</div>'+
        '            <div class="price">$59.99</div>'+
        '        </div>'+
        '        <div class="custChooseItemBlock">'+
        '        <div class="custChooseItemImageWraper">'+
        '            <div class="itemImage">'+
        '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">'+
        '            </div>'+
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
        '</div>'+
        '    </div>'+
        '    <div class="custBuyBox selected">'+
        '        <div class="popularBadge">Most Popular</div>'+
        '        <div class="offerTitle">'+
        '            <div class="title">Buy 2 Save 20%</div>'+
        '            <div class="price">'+
        '                <div class="pillowPrice">Pillow price: <span class="price">$47.99</span></div>'+
        '                <div class="offerPrice">'+
        '                    <div class="cancelPrice text-oblique">$59.99</div>'+
        '                    <div class="finalPrice">$35.99</div>'+
        '                </div>'+
        '            </div>'+
        '        </div>'+
        '        <div class="custChooseItemBlock custShow">'+
        '            <div class="custChooseItemImageWraper">'+
        '                <div class="itemImage">'+
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">'+
        '                </div>'+
        '                <div class="itemContent">'+
        '                    <div class="heading">'+
        '                        Pillow color:'+
        '                        <span class="colorName">Grey</span>'+
        '                    </div>'+
        '                    <div class="custColorSwatches">'+
        '                        <div class="swatch swatch-color-grey active" data-color="Grey"></div>'+
        '                        <div class="swatch swatch-colour-black" data-color="Black"></div>'+
        '                        <div class="swatch swatch-colour-red" data-color="Red"></div>'+
        '                        <div class="swatch swatch-colour-coral" data-color="Coral"></div>'+
        '                    </div>'+
        '                </div>'+
        '            </div>'+
        '            <div class="custChooseItemImageWraper">'+
        '                <div class="itemImage">'+
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">'+
        '                </div>'+
        '                <div class="itemContent">'+
        '                    <div class="heading">'+
        '                        Pillow color:'+
        '                        <span class="colorName">Grey</span>'+
        '                    </div>'+
        '                    <div class="custColorSwatches">'+
        '                        <div class="swatch swatch-color-grey active" data-color="Grey"></div>'+
        '                        <div class="swatch swatch-colour-black" data-color="Black"></div>'+
        '                        <div class="swatch swatch-colour-red" data-color="Red"></div>'+
        '                        <div class="swatch swatch-colour-coral" data-color="Coral"></div>'+
        '                    </div>'+
        '                </div>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '<button class="btn btn-secondary add-to-cart-button custAddToCart">add to cart</button>'+
        '</div>';

    if(document.querySelectorAll('.custSelectBuyOfferWrapper').length == 0){
        variantBlocksElement.insertAdjacentHTML('afterend',custSelectOfferHtml);
    }
        }
    }
}

// Function to handle adding multiple products to the cart
function addMultipleProductsToCart(products) {
    products.forEach(function(prodObj, index) {
        setTimeout(function() {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://trtltravel.com/cart/add.js');  // Replace with your actual API endpoint
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function () {
                if (xhr.status === 200) {
                    console.log('Product added to cart:', prodObj.id);
                } else {
                    console.error('Error adding product to cart:', xhr.status);
                }
            };

            // Send the product ID and quantity for each selected product
            xhr.send(JSON.stringify({
                id: prodObj.id,
                quantity: prodObj.quantity
            }));
        }, index * 500);  // Delay each request by 500ms to avoid request overlap
    });

    // Optional: reload after all items are added
    setTimeout(function () {
        location.reload();
    }, (products.length * 500) + 750);
}

function clickOperations(){
     //click for pillow 1 and pillow 2 tab on title click

    //  var pillowTabElements = document.querySelectorAll('.custSelectBuyOfferWrapper .offerTitle');
    //  pillowTabElements.forEach(function (tab) {
    //      tab.addEventListener('click', function (event) {
    //         console.log('click pillow tab');
    //          var selectedTab = this;
    //          pillowTabElements.forEach(tab => tab.classList.remove('active'));
    //          selectedTab.classList.add('active');
            

    //          var selectedBuyBox = document.querySelectorAll('.custSelectBuyOfferWrapper .custBuyBox');
             
    //          if (selectedBuyBox) {
    //             selectedBuyBox.forEach(selectedBuyBox =>selectedBuyBox.classList.remove('selected'));
    //          }

    //          var buyBoxElement = tab.closest('.custBuyBox');
    //          if (buyBoxElement) {
    //              buyBoxElement.classList.add('selected');
    //          }
             
    //          var itemBlockWrapers = document.querySelectorAll('.custSelectBuyOfferWrapper .custBuyBox .custChooseItemBlock');
             
    //          if (itemBlockWrapers) {
    //             itemBlockWrapers.forEach(itemBlockWraper =>itemBlockWraper.classList.remove('custShow'));
    //          }
    //          var nextDivOfTab = tab.nextElementSibling;
    //          if (nextDivOfTab) {
    //             nextDivOfTab.classList.add('custShow');
    //          }


    //      });
    //     });

      //click for pillow 1 and pillow 2 tab on box click
    var pillowTabElements = document.querySelectorAll('.custSelectBuyOfferWrapper .custBuyBox');
    pillowTabElements.forEach(function (tab) {
        tab.addEventListener('click', function (event) {
           console.log('click pillow tab');
            var selectedTab = this;
            pillowTabElements.forEach(tab => tab.classList.remove('selected'));
            selectedTab.classList.add('selected');
           
            var itemBlockWrapers = document.querySelectorAll('.custSelectBuyOfferWrapper .custBuyBox .custChooseItemBlock');
            
            if (itemBlockWrapers) {
               itemBlockWrapers.forEach(itemBlockWraper =>itemBlockWraper.classList.remove('custShow'));
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
            event.preventDefault();
            event.stopImmediatePropagation();
            console.log('color swatch click >>>')
            var selectedColor = this.getAttribute('data-color');
           
            var parentContainer = this.closest('.custChooseItemImageWraper');
            parentContainer.querySelectorAll('.swatch').forEach(function(sw) {
                sw.classList.remove('active');
            });

            this.classList.add('active');
            // Update image URL based on pillow index
            console.log('selectedColor >>>', selectedColor)
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
                console.log('imgUrl >>>', imgUrl);
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
    event.preventDefault();
    event.stopImmediatePropagation();
    // Add pillow to cart
    var arrayColorValue = {
        Grey: 48383104876737,
        Black: 48383104909505,
        Red: 48383104942273,
        Coral: 48383104975041,
    };

  
    var selectedProdIds = [];

  
    var intQty =  1;
    console.log('Input value >>', intQty);


    var selectedBuyBox = document.querySelector('.custBuyBox.selected');

    if (selectedBuyBox) {
     
        var activeSwatches = selectedBuyBox.querySelectorAll('.custColorSwatches .swatch.active');

        if (activeSwatches.length > 0) {
          
            activeSwatches.forEach(function(swatch) {
                var selectedColor = swatch.getAttribute('data-color');
                var strSelectedProdId = arrayColorValue[selectedColor];

                if (strSelectedProdId !== '' && strSelectedProdId !== undefined) {
                    selectedProdIds.push({
                        id: strSelectedProdId,
                        quantity: intQty
                    });
                    console.log('Added to selectedProdIds:', selectedColor, strSelectedProdId);
                }
            });

       
            if (selectedProdIds.length > 0) {
                addMultipleProductsToCart(selectedProdIds);
            }

        }
    } 

});

}



