
window.onload = function() {
    if( document.querySelectorAll('.template-product').length > 0){
        addStickyFooterOnPdp();
        AllClickOperations();
    }
   
};

function addStickyFooterOnPdp() {

    var strmaySaleEventUrl = "/product/test.com";
    if (document.querySelectorAll('.custMaySaleEventStickly').length == 0) {
        maySaleEventSticklyHTML = '<div class="custmaySaleEventStickly">' +
            '<a class="bm-container-link" href="' + strmaySaleEventUrl + '"></a>' +
            '    <div class="custStickyDCBundleWrapper">' +
            '        <div class="custMainLeftSide">' +
            '            <div class="custLeftSection">' +
            '                <div class="custBannerHeading"><a href="' + strmaySaleEventUrl + '">Memorial Day Sale!</a></div>' +
            '                <div class="custSubHeading">' +
            '                    <p>Get up to 50% OFF select products.</p>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '        <div class="custCtaWrapper">' +
            '            <p><a href="' + strmaySaleEventUrl + '" class="stretched-link btn btn-light custTryTodayBtn">SHOP' +
            '                    NOW</a>' +
            '            </p>' +
            '        </div>' +
            '    </div>' +
            '</div>';
  
        document.body.insertAdjacentHTML('beforeend', maySaleEventSticklyHTML);
    }

    window.addEventListener('scroll', toggleStickyFooter);
    window.addEventListener('resize', toggleStickyFooter);
}

function toggleStickyFooter() {

    console.log('toggleStickyFooter');

    const addToCartButtonElement = document.querySelector('.template-product .ProductForm__BuyButtons');
    const stickyFooterElement = document.querySelector('.custmaySaleEventStickly');
   //Gets the bottom position of the "Add to Cart" button relative to the viewport.
    const addToCartPosition = addToCartButtonElement.getBoundingClientRect().bottom;

    if (addToCartPosition < 0) {
        console.log('addToCartPosition>>>>>>>>>>>>>>>>>')
        stickyFooterElement.classList.add('visible');
        stickyFooterElement.classList.remove('hidden');
    } else {
        stickyFooterElement.classList.add('hidden');
        stickyFooterElement.classList.remove('visible');
    }
}


// Your click operations here
function AllClickOperations() {
    const tryItTodayButton = document.querySelector('.custTryTodayBtn');
    tryItTodayButton.addEventListener('click', () => {
        const addToCartButton =document.querySelector('.template-product .ProductForm__BuyButtons');
        addToCartButton.click(); // Trigger the Add to Cart button
    });
}
