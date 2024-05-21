//document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', function () {
        console.log("testing experience >>>>");
        setTimeout(function () {
            addUpdateImage();
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

        var totalPurchasElement = document.querySelector('.total-purchases-estimate');
        if (totalPurchasElement) {
            totalPurchasElement.textContent = 'Plus, receive a FREE Pillow Carry Bag ($7.99 value).';
            totalPurchasElement.classList.add('custTotalPurchaseDiv');
        }

        var totalPurchasElementContainer = document.querySelector('.estimate-delivery-container');
        if (totalPurchasElementContainer) {
         totalPurchasElementContainer.classList.add('custPurchaseContainer');
        }

    }

    

  