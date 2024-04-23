var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        if(jQuery(".product").length > 0){
            addCustHtmlOnPdp();
        }
     function addCustHtmlOnPdp(){

        if(jQuery(".product-form__quantity").length > 0 && jQuery(".custLoveItBlock").length == 0){

            var custHtml = '<div class="custLoveItBlock">' +
            '<h3>Why you\'ll love it:</h3>' +
            '<ul>' +
            '<li>10 ergonomically designed pockets</li>' +
            '<li>Adjustable strap to fit all sizes</li>' +
            '<li>Secure, hidden cash pocket</li>' +
            '<li>Zippered passport pocket</li>' +
            '<li>Highest grade genuine leather</li>' +
            '<li>Hand cut and sewn in fair trade factory</li>' +
            '<li>30 day money back guarantee</li>' +
            '</ul>' +
            '</div>';

            jQuery(custHtml).insertBefore('.product-form__quantity');
        }
        
     }
   } 
}, 50);