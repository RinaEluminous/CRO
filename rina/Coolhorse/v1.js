var allSaddleProductCodes = [];
allSaddleProduct();
function allSaddleProduct(){
    if (jQuery('#js-product-list .category-product').length > 0) {
        jQuery('#js-product-list .category-product').each(function(index) {
             var productCodes = jQuery(this).find('p.ng-binding').text();
             allSaddleProductCodes.push(productCodes);
    });
}
    var commaSeparatedCodes = allSaddleProductCodes.join(',');
    var cleanedResponse = commaSeparatedCodes.replace(/Code: /g, '');
    console.log('All product codes:',cleanedResponse);

}


