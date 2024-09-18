function checkAndInitialize() {
    addBundleAndSaveToCart();
    clickOperations();

}

// Use window.onload to ensure all resources are fully loaded
window.onload = function () {
    checkAndInitialize();
};


document.addEventListener('DOMContentLoaded', function () {
    checkAndInitialize();
});

// In case the DOMContentLoaded event is already fired before the script loads
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    checkAndInitialize();
}

function addBundleAndSaveToCart(){
    //check cart empty or not first
    var itemCountElement = document.querySelector('.cart_item-count');
    const itemCountText = itemCountElement.textContent;
    const intItemCount = parseInt(itemCountText);
    console.log('itemCount >>',intItemCount);
    if(intItemCount !== 0){
        addCustGetExtramsgFollowup();
    }
    
}

function addCustGetExtramsgFollowup() {
    // Threshold value
    var strThresholdValue = 80;
    var custGetExtramsgMainHtml = '<div class="custGetExtramsgFollowup">' +
        '    <p class="custEligibleMsg">Expedited free shipping</p>' +
        '    <div class="offerSlider">' +
        '        <div class="activeRangeSlider" style="width: 45%;"></div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    var targetElementOfExtramsg = document.querySelector('#cart-offcanvas-content .cart-item__wrapper');

    if (targetElementOfExtramsg && document.querySelectorAll('.custGetExtramsgFollowup').length == 0) {
        console.log('custGetExtramsgMainHtml>>>>>>>>>>>>>>>>>');
        targetElementOfExtramsg.insertAdjacentHTML('beforebegin', custGetExtramsgMainHtml);
    }

    var intCartTotalPrice = parseFloat(document.querySelector('.col-6.mt-3.text-end').textContent.replace(/[^\d.]/g, ''));

    if (parseFloat(intCartTotalPrice) >= strThresholdValue) {

        document.querySelector('.custGetExtramsgFollowup .custEligibleMsg') ?.classList.add('custHideContent');
       
        var rangeSliderElement = document.querySelector('.custGetExtramsgFollowup .activeRangeSlider');
        if (rangeSliderElement) {
            rangeSliderElement.style.width = '100%';
        }
    } else {
        document.querySelector('.custGetExtramsgFollowup .congratsMsg') && (document.querySelector('.custGetExtramsgFollowup .congratsMsg').style.display = 'none');
        document.querySelector('.congratsMsg') ?.classList.add('custHideContent');

        var intPendingAmount = strThresholdValue - parseFloat(intCartTotalPrice);
        if (!isNaN(intPendingAmount)) {
            var strNewMsg = '$' + intPendingAmount.toFixed(2);
            document.querySelector('.custGetExtramsgFollowup p strong').innerHTML = strNewMsg;
            var intPendingAmountInPercentage = (intCartTotalPrice / strThresholdValue) * 100;
            document.querySelector('.custGetExtramsgFollowup .activeRangeSlider').style.width = intPendingAmountInPercentage + '%';
        }


    }


}

function add 

function clickOperations() {
}