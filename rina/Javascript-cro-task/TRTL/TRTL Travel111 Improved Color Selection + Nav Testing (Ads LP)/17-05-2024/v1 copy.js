document.addEventListener('DOMContentLoaded', function () {
    console.log("testing experience >>>>");
    
    setTimeout(function () {
        console.log('setout function call');
        clickOperations();
       
    }, 2500);
});

clickOperations();

//Conditions for desktop and mobile
if(window.screen.width > 767){
    //add class 
    var productElements = document.querySelectorAll('.product-media');
    if (productElements.length > 0) {
        console.log('activeElements');
        productElements[0].classList.add('custBannerSlider');
    }
}


//color swatch click and Add to cart click
function clickOperations() {
      
       //Select offer click
        var variantBlocks = document.querySelectorAll('.variant-block');
        variantBlocks.forEach(function(block) {
            block.addEventListener('click', function() {
                  //add class 
                var activeElements = document.querySelectorAll('.color-line-item-properties.active');
                if (activeElements.length > 0) {
                    console.log('activeElements');
                activeElements[0].classList.add('custProductsWrapper');
                }
                var variantIndex = parseInt(block.getAttribute('data-variant_index'));
                console.log('Clicked variant index:', variantIndex);
    
                insertHTMLAtIndex(variantIndex);
            });
        });
    
        function insertHTMLAtIndex(index) {
            if (index < 1) {
                return;
            }
    
            var existingImgContainer = document.querySelector('.color-line-item-property-block[data-color_index="' + index + '"] .img-container');
    
            if (!existingImgContainer) {
                var headingElement = document.querySelector('.color-line-item-property-block[data-color_index="' + index + '"] .color-line-item-property-heading');
                if (headingElement) {
                    var imgHTML = '<div class="img-container" style="height: 100px; width: 100px;" data-pillow_index="' + index + '">';
                    imgHTML += '<img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">';
                    imgHTML += '</div>';
                    headingElement.insertAdjacentHTML('afterend', imgHTML);
                }
            }
    
            // Recursively call the function for the preceding index
            insertHTMLAtIndex(index - 1);
        }


          //color swatch click 
    var pillowBlocks = document.querySelectorAll('.color-line-item-property-block.active');
    pillowBlocks.forEach(function (pillowBlock) {

    });
}   






