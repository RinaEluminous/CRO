window.onload = function () {
    addUpdateImage();
    miniCartUpdatePillowImg();
    clickOperations();

};

//update image and content
function addUpdateImage() {
    //add class to the select offer container
    const selectOfferContainer = document.querySelectorAll('.ads-product-variant__container');
    if (selectOfferContainer.length > 0) {
        selectOfferContainer[0].classList.add('custSelectOffer');
    }
    //add class to the product-media container for mobile view
    var productElements = document.querySelectorAll(".product-media");
    if (productElements.length > 0) {
       productElements[0].classList.add("custBannerSlider");
    }

    //add class to the .color-line-item-properties container for design
    var activeElements = document.querySelectorAll(
        ".custSelectOffer .color-line-item-properties.active"
    );
    if (activeElements.length > 0) {
        activeElements[0].classList.add("custProductsWrapper");
    }

    //update the total purchase div text
    var totalPurchasElement = document.querySelector(".total-purchases-estimate");
    if (totalPurchasElement) {
        totalPurchasElement.textContent =
            "Plus, receive a FREE Pillow Carry Bag ($7.99 value).";
        totalPurchasElement.classList.add("custTotalPurchaseDiv");
    }
    
    var variantHeadingElement = document.querySelector(".custSelectOffer .variant-heading");
    if (variantHeadingElement) {
        variantHeadingElement.textContent =
            "Step 1: Select your offer";
        }

    var colorLineHeadingElement = document.querySelector(".custSelectOffer .color-line-item-header");
    if (colorLineHeadingElement) {
            colorLineHeadingElement.textContent =
                "STEP 2: CHOOSE YOUR COLOR";
    }
        
    //add class to the purchase div for styling
    var totalPurchasElementContainer = document.querySelector(
        ".estimate-delivery-container"
    );
    if (totalPurchasElementContainer) {
        totalPurchasElementContainer.classList.add("custPurchaseContainer");
    }

    //add image container initially
    var propertyBlocks = document.querySelectorAll(
        ".custSelectOffer .color-line-item-property-block"
    );
    propertyBlocks.forEach(function (block, index) {
        var pillowIndex = index + 1;
        var imgContainer = block.querySelector(".img-container");
        if (!imgContainer) {

            var imgHTML =
                '<div class="img-container" data-pillow_index="' + pillowIndex + '" >';
            imgHTML +=
                '<img src="https://trtltravel.com/cdn/shop/files/Group2006_120x120_crop_center.jpg">';
            imgHTML += "</div>";
            
            var headingElement = block.querySelector(
                ".color-line-item-property-heading"
            );
            headingElement.insertAdjacentHTML("afterend", imgHTML);
        }
    });

    setTimeout(function () {
        miniCartUpdatePillowImg();
        clickOperations();
    }, 1500);
}

//image div for color swatch click
function insertImageAfterHeading(pillowIndex, imgUrl) {
    var existingImgContainer = document.querySelector('.color-line-item-property-block[data-color_index="' + pillowIndex + '"] .img-container');
    if (existingImgContainer) {
        var imgElement = existingImgContainer.querySelector('img');
        if (imgElement) {
            imgElement.src = imgUrl;
        }
    }
}

//mini cart update pillow image for TTRTLE PILLOW Product
function miniCartUpdatePillowImg() {
    var trtlPillowElements = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
    trtlPillowElements.forEach(function (element) {
        if (element.textContent.includes("TRTL TRAVEL PILLOW")) {
            var parentDiv = element.closest('.col-8');
            // Find the color span element
            var colorElement = parentDiv.querySelector('span.text-muted.fs-7');
            if (colorElement) {
                var colorName = colorElement.textContent.trim();
                var imgUrl = '';
                switch (colorName) {
                    case 'Grey':
                        imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/TPO_Grey_Sleeping.png';
                        break;
                    case 'Black':
                        imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/TPO_Black_Sleeping.png';
                        break;
                    case 'Red':
                        imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/TPO_Red_Sleeping.png';
                        break;
                    case 'Coral':
                        imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/TPO_Coral_Sleeping.png';
                        break;
                    default:
                        break;
                }

                if (imgUrl) {
                    var imageWrapper = parentDiv.parentNode.querySelector('.col-4 .image-wrapper');
                    if (imageWrapper) {
                        var imgElement = imageWrapper.querySelector('img');
                        if (imgElement) {
                            imgElement.srcset = imgUrl;
                        }
                    }
                }
            }
        }
    });

}

//color swatch click and Add to cart click
function clickOperations() {
    //color swatch click 
    var pillowBlocks = document.querySelectorAll(
        ".custSelectOffer .color-line-item-property-block.active"
    );
    pillowBlocks.forEach(function (pillowBlock) {
        var pillowIndex = parseInt(pillowBlock.getAttribute("data-color_index"));
        var colAutoElements = pillowBlock.querySelectorAll(".variant-swatch");
        colAutoElements.forEach(function (colAuto) {
            colAuto.addEventListener("click", function () {
                var colAutoParent = colAuto.closest(".col-auto");
                if (colAutoParent) {
                    var inputElement = colAutoParent.querySelector('input[type="radio"]');
                    if (inputElement) {
                        var value = inputElement.value;
                        // Update image URL based on pillow index
                        var imgUrl = "";
                        switch (value) {
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
                        if (imgUrl) {
                            insertImageAfterHeading(pillowIndex, imgUrl);
                        }
                    }
                }

            });
        });
    });
    //Select offer click
    var variantBlocks = document.querySelectorAll(".custSelectOffer .variant-block");
    variantBlocks.forEach(function (variantBlock) {
        variantBlock.addEventListener("click", function () {
            addUpdateImage();
            miniCartUpdatePillowImg();

        });
    });

    // Apply changes again on cart operations
    var cartButtons = document.querySelectorAll(
        "#cart-offcanvas-content button#line-item-button-decrement, #cart-offcanvas-content button#line-item-button-increment"
    );
    cartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            addUpdateImage();
            miniCartUpdatePillowImg();

        });
    });

    // PDP Add TO Cart - Trigger the function again
    var addToCartBtns = document.querySelectorAll(
        "button.proudct-add-to-cart-button[name=add]"
    );
    addToCartBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            setTimeout(function () {
                addUpdateImage();
                miniCartUpdatePillowImg();
            }, 1500);
        });
    });

    //delete code functionality

    var cartDltButtons = document.querySelectorAll(
        "#cart-offcanvas-content button.btn .fa-trash-alt"
    );

    cartDltButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            setTimeout(function () {
                addUpdateImage();
                miniCartUpdatePillowImg();
            }, 1500);
        });

    });
}