//document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', function() {
        console.log("testing experience >>>>");
        setTimeout(function () {
            console.log('setout function call');
            clickOperations();
            miniCartUpdatePillowImg();
        }, 2500);
    
    });
    
    clickOperations();
    miniCartUpdatePillowImg();
    
    var activeElements = document.querySelectorAll('.color-line-item-properties.active');
    if (activeElements.length > 0) {
      activeElements[0].classList.add('custProductsWrapper');
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
                            insertImageAfterHeading(pillowIndex, imgUrl);
                        }
                    });
                }
            });
        });
    
        //Add to cart click
       var firstATCButton = document.querySelector('.add-to-cart-button-wrapper button:first-of-type');
       firstATCButton.addEventListener('click', function() {
        setTimeout(function () {
        miniCartUpdatePillowImg();
            console.log('Operation executed on click of the first button');
        });
    }, 2500);
    
        //Select offer click
        var variantBlocks = document.querySelectorAll('.variant-block');
        variantBlocks.forEach(function(variantBlock) {
        variantBlock.addEventListener('click', function() {
          
            clickOperations();
    
        });
    });
    
    }
    
    //image div for color swatch click
    function insertImageAfterHeading(pillowIndex, imgUrl) {
    
        var existingImgContainer = document.querySelector('.color-line-item-property-block[data-color_index="' + pillowIndex + '"] .img-container');
        if (!existingImgContainer) {
            var headingElement = document.querySelector('.color-line-item-property-block[data-color_index="' + pillowIndex + '"] .color-line-item-property-heading');
            if (headingElement) {
                var imgHTML = '<div class="img-container" style="height: 100px;width: 100px;"data-pillow_index="' + pillowIndex + '" >';
                imgHTML += '<img src="' + imgUrl + '">';
                imgHTML += '</div>';
                headingElement.insertAdjacentHTML('afterend', imgHTML);
            }
        } else {
            var imgElement = existingImgContainer.querySelector('img');
            if (imgElement) {
                imgElement.src = imgUrl;
            }
        }
    }
    
    //mini cart update pillow image for TTRTLE PILLOW Product
    function miniCartUpdatePillowImg(){
    
    var trtlPillowElements = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
    
    trtlPillowElements.forEach(function (element) {
        if (element.textContent.includes("TRTL TRAVEL PILLOW")) {
            var colorElement = element.closest('.cart-items-selector').querySelector('.text-muted.fs-7');
            if (colorElement) {
            var colorName = colorElement.textContent.trim();
            console.log('colorName >>',colorName);
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
                var imageWrapper = element.closest('.cart-items-selector').querySelector('.image-wrapper');
                if (imageWrapper) {
                    console.log('imagessssss');
                    var imgElement = imageWrapper.querySelector('img');
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