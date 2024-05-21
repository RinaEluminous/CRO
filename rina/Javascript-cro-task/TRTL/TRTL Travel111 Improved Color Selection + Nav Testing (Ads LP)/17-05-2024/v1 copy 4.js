//document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', function () {
        console.log("testing experience >>>>");
        setTimeout(function () {
            addUpdateImage();
            clickOperations();
        }, 1500);
    
    });

    function addUpdateImage(){
        console.log('setout function call');
        var productElements = document.querySelectorAll('.product-media');
        if (productElements.length > 0) {
            console.log('custBannerSlider add class');
            productElements[0].classList.add('custBannerSlider');
        }

        var activeElements = document.querySelectorAll('.color-line-item-properties.active');
        if (activeElements.length > 0) {
            activeElements[0].classList.add('custProductsWrapper');
        }

          //add image container initially
          var propertyBlocks = document.querySelectorAll('.color-line-item-property-block');propertyBlocks.forEach(function(block, index) {
            var pillowIndex = index + 1;
            var imgContainer = block.querySelector('.img-container');
            if (!imgContainer) {
            // Create img-container HTML string
            var imgHTML = '<div class="img-container" data-pillow_index="' + pillowIndex + '" >';
                imgHTML += '<img src="https://trtltravel.com/cdn/shop/files/Group2006_120x120_crop_center.jpg">';
                imgHTML += '</div>';

            // Insert img-container after the heading element
            var headingElement = block.querySelector('.color-line-item-property-heading');
            headingElement.insertAdjacentHTML('afterend', imgHTML);
            }
        });

        
        var element = document.querySelector('.total-purchases-estimate');
        if (element) {
           element.textContent = 'Plus, receive a FREE Pillow Carry Bag ($7.99 value).';
            element.classList.add('custTotalPurchaseDiv');
        }
        miniCartUpdatePillowImg();
        
    }

    //mini cart update pillow image for TTRTLE PILLOW Product
    function miniCartUpdatePillowImg() {
    
    var trtlPillowElements = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
    
    trtlPillowElements.forEach(function (element) {
        if (element.textContent.includes("TRTL TRAVEL PILLOW")) {
            // Get the parent div that contains both the anchor and the span for color
            var parentDiv = element.closest('.col-8');
            console.log('parentDiv:', parentDiv);
    
            // Find the color span element
            var colorElement = parentDiv.querySelector('span.text-muted.fs-7');
            console.log('colorElement:', colorElement);
    
            if (colorElement) {
                var colorName = colorElement.textContent.trim();
                console.log('colorName >>', colorName);
                var imgUrl = '';
                switch (colorName) {
                    case 'Grey':
                        imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png';
                        break;
                    case 'Black':
                        imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-black.png';
                        break;
                    case 'Red':
                        imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-red.png';
                        break;
                    case 'Coral':
                        imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-coral.png';
                        break;
                    default:
                        break;
                }
    
                if (imgUrl) {
                    // Find the image wrapper in the sibling .col-4
                    var imageWrapper = parentDiv.parentNode.querySelector('.col-4 .image-wrapper');
                    console.log('imageWrapper:', imageWrapper);
    
                    if (imageWrapper) {
                        console.log('imagessssss');
                        var imgElement = imageWrapper.querySelector('img');
                        console.log('imgElement:', imgElement);
    
                        if (imgElement) {
                            console.log('fgfffff');
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
        var pillowBlocks = document.querySelectorAll('.color-line-item-property-block.active');
        pillowBlocks.forEach(function (pillowBlock) {
            var pillowIndex = parseInt(pillowBlock.getAttribute('data-color_index'));
            var colAutoElements = pillowBlock.querySelectorAll('.col-auto');
    
            colAutoElements.forEach(function (colAuto) {
    
                if (!colAuto.hasAttribute('data-click-listener')) {
                    colAuto.setAttribute('data-click-listener', 'true');
                    colAuto.addEventListener('click', function () {
                        console.log('color swatch click')
                        var inputElement = colAuto.querySelector('input[type="radio"]');
                        var value = inputElement.value;
                        // Update image URL based on pillow index
                        var imgUrl = '';
                        switch (value) {
                            case 'Grey':
                                imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png';
                                break;
                            case 'Black':
                                imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-black.png';
                                break;
                            case 'Red':
                                imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-red.png';
                                break;
                            case 'Coral':
                                imgUrl = 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-coral.png';
                                break;
                            default:
                                break;
                        }
    
                        if (imgUrl) {

                            
                        var existingImgContainer = document.querySelector('.color-line-item-property-block[data-color_index="' + pillowIndex + '"] .img-container');
                    
                        var imgElement = existingImgContainer.querySelector('img');
                        if (imgElement) {
                            console.log('image update');
                                imgElement.src = imgUrl;
                        }
                            // insertImageAfterHeading(pillowIndex, imgUrl);
                        }
                    });
                }
            });
        });
    
    
        //Select offer click
        var variantBlocks = document.querySelectorAll('.variant-block');
        variantBlocks.forEach(function (variantBlock) {
            variantBlock.addEventListener('click', function () {
                addUpdateImage();
    
            });
        });

        // Apply changes again on cart operations
            var cartButtons = document.querySelectorAll('#cart-offcanvas-content button#line-item-button-decrement, #cart-offcanvas-content button#line-item-button-increment');
            cartButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    console.log('Apply changes again on cart operations: plus and minus');
                   
                       addUpdateImage();
                    

                });
            });

        // PDP Add TO Cart - Trigger the function again
            var addToCartBtns = document.querySelectorAll('button.proudct-add-to-cart-button[name=add]');
            addToCartBtns.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    console.log('PDP Add TO Cart - Trigger the function again:');
                  
                        addUpdateImage();
                  
                });
            });
    
            //delete code functionality

            var cartDltButtons = document.querySelectorAll('#cart-offcanvas-content button.btn .fa-trash-alt')
            cartDltButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    console.log('delete code functionality');
                    addUpdateImage();
                });
            });
    }
    