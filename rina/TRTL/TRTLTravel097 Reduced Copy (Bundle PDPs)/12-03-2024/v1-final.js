
window.onload = function() {
    const strURL = window.location.pathname;
    const doubleBundleProducts = '/products/double-comfort-bundle-free-gift';
    if (doubleBundleProducts.includes(strURL)) {
        const productContainers = document.querySelector('.product-container');
        if (document.querySelectorAll('.product-container').length > 0) {
            productContainers.classList.add('custDoubleBundle');
            addProductDescriptionList();
        }
    }
    function addProductDescriptionList() {

        const productDescriptionHtml = `<ul class="custProductDescListings">
                                        <li>Complete support for your head. No bobbing.</li>
                                        <li>No neck pain, strains or aches.</li>
                                        <li>Relieves stress on your spine and muscles.</li>
                                        <li>Cozy shoulder support. Sleep deeper.</li>
                                        <li>Super lightweight and easy to carry, pack or wrap around.</li>
                                        <li>Stylish and non-bulky. Looks like a scarf.</li>
                                        <li>Machine washable super-soft, hypoallergenic fabric.</li>
                                        </ul>`;

        var productDescriptionContainer = document.querySelector('body.template-product #MainContent .product-container .product-description');
        // Check if the container exists
        if (productDescriptionContainer) {
            var h6Elements = productDescriptionContainer.querySelectorAll('h6');
            h6Elements.forEach(function(h6Element) {
                if (h6Element.textContent.includes("WHY IT’S SPECIAL")) {
                  if(document.querySelectorAll('.custProductDescListings').length == 0){
                    h6Element.insertAdjacentHTML('afterend', productDescriptionHtml);
                  }
                   
                }
            });
        }

    }

};