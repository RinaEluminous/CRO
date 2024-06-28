window.onload = function (){
   addMaterialSelectorOnPDP();
};

function addMaterialSelectorOnPDP() {

    var priceElement = document.querySelector('.ProductMeta__Price.Price.Price--highlight .money');

    
    var price = priceElement.textContent;
     console.log(price);
    var finishDiv = document.querySelector('div[data-option-name="FINISH"]');
   if (finishDiv) {
        finishDiv.classList.add('custColor');
    }
    var liElements = document.querySelectorAll('.custColor li');
    
    liElements.forEach(function(li) {
        var label = li.querySelector('label');
        if (label) {
            var optionValue = label.textContent.trim();
            console.log(optionValue);

            var custClassName='cust' + optionValue.replace(/\s+/g, '');

          
        var customDivHtml = '<div class="'+custClassName+'"><li>test1</li><li>test2</li><li>test3</li></div>';
        
        if (!document.querySelector('.'+custClassName)) {
            label.insertAdjacentHTML('afterend', customDivHtml);
            }
        } 
    });
}

function clickOperation(){

    //color options click
    var colorOptions = document.querySelectorAll('.productOption--finish input[name="option-0"]');

    colorOptions.forEach(function(button) {
        button.addEventListener('click', function() {
           console.log('test');
           
        });
    });

  
    //yes no click 
    
    var yesNoOptions = document.querySelectorAll('.SizeSwatchList input[name="option-2"]');
    yesNoOptions.forEach(function(button) {
        button.addEventListener('click', function() {
           console.log('yesNoOptions');
        });
    });


   
}


