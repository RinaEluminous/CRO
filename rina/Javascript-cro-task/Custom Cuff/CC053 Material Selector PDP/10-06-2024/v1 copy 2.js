// window.addEventListener('load', function () {
    // window.onload = function (){
        (function() {
            console.log('CC053: Material Selector PDP');
            setTimeout(function () {
            addMaterialSelectorOnPDP();
            clickOperation();
            }, 1500);
            })();
        //  };
        // });
         
         //add Material selector html 
         function addMaterialSelectorOnPDP() {
            // change position 
            var productFormOptionElement = document.querySelector('.ProductForm__Option.ProductForm__Option--labelled.productOption--finish');
        
            var productSwitcherBoxElement = document.querySelector('.product-custom-switcher-box');
        
            if (productFormOptionElement && productSwitcherBoxElement) {
               productSwitcherBoxElement.insertBefore(productFormOptionElement, productSwitcherBoxElement.firstChild);
            }
        
            // add classs to the Finish data attribute
            var finishDiv = document.querySelector('div[data-option-name="FINISH"]');
            if (finishDiv) {
                 finishDiv.classList.add('custColor');
             }
        
             //add loop for color swatch
             var colorOptionsArray = {
                'GOLD': { colorName: '18K Gold Vermeil', imgSrc: 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/gold.png' },
                'ROSE': { colorName: '18K Rose Gold Vermeil', imgSrc: 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/rose_gold.png' },
                'MATTE BLACK': { colorName: 'Ceramic Matte Black', imgSrc: 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/matte_black.png'},
                'SILVER': { colorName: '316K Stainless Steel Silver', imgSrc: 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/steel_silver.png' },
                'AURRORA': { colorName: '18K Gold Aurora Finish', imgSrc: 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/arora_gold.png' },
               
            };
        
             var liElements = document.querySelectorAll('.custColor li');
             liElements.forEach(function(li) {
                 var label = li.querySelector('label');
                 if (label) {
                    setTimeout(function() {
                     var optionValue = label.textContent.trim();
                     console.log(optionValue);
        
                     var colorOptionData = colorOptionsArray[optionValue];
         
                     var custClassName='cust' + optionValue.replace(/\s+/g, '');
                     
                     var priceElement = document.querySelector('.ProductMeta__Price.Price.Price--highlight .money');
                     if (priceElement) {
                     var price = priceElement.textContent;
                     }
                  
    
                //add not null undefined and not empty condition for all below variable which is present in html 
                if (colorOptionData && price && custClassName) {
                     var colorBoxHtml ='<div class="custColorBox '+custClassName+'">'+
                                    '    <div class="colorImg">'+
                                    '        <img src="' + colorOptionData.imgSrc + '">'+
                                    '    </div>'+
                                    '    <div class="colorName">' + colorOptionData.colorName + '</div>'+
                                    '    <div class="price">' + price + '</div>'+
                                    '</div>';
                 
                    if (!document.querySelector('.'+custClassName)) {
                        label.insertAdjacentHTML('beforeend', colorBoxHtml);
                    }
                 } 
                }, 500);    
                }
    
             });
        
           
         }
         
        // update material price
         function updatePrice(){
             //add delay for the price
             setTimeout(function() {
            var priceElement = document.querySelector('.ProductMeta__Price.Price.Price--highlight .money');
            if (priceElement) {
                var price = priceElement.textContent;
                console.log(price);
            }    
            
             //update price in div custColorBox
             var custColorBoxes = document.querySelectorAll('.custColorBox');
             if(custColorBoxes){
                custColorBoxes.forEach(function(custColorBox) {
                    var custClassName = custColorBox.className.split(' ')[1];
                         if (custClassName) {
                        var priceElement = custColorBox.querySelector('.price');
                        priceElement.textContent = price;
                    }
                });
             }
            
            }, 500);
         }
        
         //click operation on color swatch and 
         function clickOperation(){
              //color options click
             var colorOptions = document.querySelectorAll('.productOption--finish input[name="option-0"]');
         
             colorOptions.forEach(function(button) {
                 button.addEventListener('click', function() {
                    console.log('test');
                    setTimeout(function () {
                        updatePrice();
                }, 1500);
                 });
             });
         
           
             //yes no click 
            var yesNoOptions = document.querySelectorAll('.SizeSwatchList input[name="option-2"]');
             yesNoOptions.forEach(function(button) {
                 button.addEventListener('click', function() {
                    console.log('yesNoOptions');
                    setTimeout(function () {
                        updatePrice();
                    }, 1500);
                 });
             });
         
         }