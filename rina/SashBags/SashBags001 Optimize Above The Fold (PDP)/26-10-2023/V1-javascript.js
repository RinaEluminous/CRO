var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        if (document.querySelectorAll('.product').length > 0) {
            addCustHtmlOnPdp();
        }

        function addCustHtmlOnPdp() {
            if (document.querySelectorAll(".product-form__quantity").length > 0 && document.querySelectorAll(".custLoveItBlock").length == 0) {

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

                var productFormQuantity = document.querySelector(".product-form__quantity");
                if (productFormQuantity) {
                    var nextSibling = productFormQuantity.nextSibling;

                    // If there is a next sibling, insert before it, otherwise, just append to the parent
                    if (nextSibling) {
                        console.log('sibling is there or not');
                        productFormQuantity.parentNode.insertBefore(parseHTML(custHtml), nextSibling);
                    } else {
                        console.log('no siblings');
                        productFormQuantity.parentNode.appendChild(parseHTML(custHtml));
                    }
                }
            }
        }
    }
}, 50);

// Helper function to parse HTML string into DOM elements
function parseHTML(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}
 