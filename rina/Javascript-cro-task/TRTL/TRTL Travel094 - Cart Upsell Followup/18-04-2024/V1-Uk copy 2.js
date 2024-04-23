(function () {
    // **************all functions****************** 
        //check product is available in cart
    function checkProductAvailabilityInMinicartUK(strProductName) {
        var isProductAvailable = false;
        var trtlPillowelements = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
      
        trtlPillowelements.forEach(function (element) {
            if (element.textContent.includes(strProductName)) {
                isProductAvailable = true;
                if (strProductName == 'TRTL PASSPORT COVER') {
                   
                    if (!element.parentNode.nextElementSibling.textContent.includes('£0.00')) {
                        isProductAvailable = false;
                    }
                }

            }
        });
      
        return isProductAvailable;
    }
    
    // Check if TRTL TRAVEL PILLOW exist
    function triggerTestUK() {
        var isTravelPillowExists = checkProductAvailabilityInMinicartUK("TRTL PILLOW ORIGINAL");
        if (isTravelPillowExists) {
            addCustGetExtramsgFollowupUK();
            addCustomUpSellProductUK();
            modifyExistingCartContentUK();
            updateTextOnOfferProductUK();
            if (sessionStorage.getItem("isRecommendedProductAddedNewUk") !== null) {
                var closeButton = document.querySelector(".justify-content-end .xposition-relative img");
                if (closeButton) {
                    closeButton.click();
                }
                sessionStorage.removeItem("isRecommendedProductAddedNewUk");
                sessionStorage.removeItem("isPassPortAddedUK");
            }

            operationClickUK();

        }
    }
    
    //add Free expedited shipping msg
    function addCustGetExtramsgFollowupUK() {
        // Threshold value
        var strThresholdValue = 80;
        var custGetExtramsgMainHtml = '<div class="custGetExtramsgFollowup">' +
            '    <p class="custEligibleMsg">You are <strong>$20</strong> away from being upgraded to free expedited shipping.</p>' +
            '    <div class="congratsMsg">' +
            '        <div class="icon">' +
            '            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">' +
            '                <path d="M19.5105 10.1402L14.3806 15.2701L12.4906 13.3801C12.1006 12.9926 11.4706 12.9926 11.0806 13.3801C10.8919 13.5676 10.7844 13.8238 10.7844 14.0901C10.7844 14.3564 10.8919 14.6126 11.0806 14.8001L13.6707 17.3901C13.8582 17.5814 14.1132 17.6889 14.3807 17.6901C14.6482 17.6889 14.9032 17.5814 15.0907 17.3901L20.9208 11.5601C21.1095 11.3726 21.217 11.1163 21.217 10.85C21.217 10.5838 21.1095 10.3276 20.9208 10.14C20.5308 9.75254 19.9005 9.75267 19.5105 10.1402ZM26.5105 10.4302C26.2718 10.1652 26.0693 9.86891 25.9105 9.55016C25.8568 9.1789 25.8568 8.80142 25.9105 8.43016C26.023 7.58267 25.8355 6.72392 25.3806 6.00014C24.8068 5.34014 24.0156 4.90763 23.1505 4.78014C22.8005 4.70264 22.4643 4.57389 22.1505 4.40014C21.8893 4.14764 21.6668 3.85765 21.4905 3.54014C21.0905 2.7539 20.4293 2.13141 19.6205 1.78014C18.7855 1.59389 17.9105 1.70764 17.1505 2.10014C16.7843 2.24889 16.3955 2.33639 16.0005 2.36014C15.6167 2.31639 15.2417 2.21264 14.8905 2.05014C14.1305 1.65763 13.2555 1.5439 12.4205 1.73014C11.6117 2.08141 10.9504 2.7039 10.5504 3.49014C10.3742 3.80764 10.1517 4.09763 9.89044 4.35014C9.57669 4.52389 9.24046 4.65264 8.89044 4.73014C8.0042 4.86139 7.19668 5.31264 6.62042 6.00016C6.17418 6.74515 6.00791 7.6239 6.15041 8.48016C6.20416 8.85142 6.20416 9.2289 6.15041 9.60016C5.99166 9.91891 5.78916 10.2152 5.55041 10.4802C4.91165 11.0827 4.50541 11.8889 4.40039 12.7602C4.48039 13.6476 4.87415 14.4764 5.51041 15.1002C5.74916 15.3652 5.95165 15.6614 6.11041 15.9802C6.16416 16.3514 6.16416 16.7289 6.11041 17.1002C5.96791 17.9564 6.13416 18.8352 6.58042 19.5802C7.16417 20.2489 7.97044 20.6827 8.85044 20.8002C9.20046 20.8777 9.53668 21.0064 9.85044 21.1802C10.1117 21.4327 10.3342 21.7227 10.5104 22.0402C10.9104 22.8264 11.5717 23.4489 12.3805 23.8002C12.613 23.8752 12.8555 23.9127 13.1005 23.9102C13.7042 23.8714 14.2967 23.7264 14.8505 23.4801C15.2142 23.3114 15.6017 23.2039 16.0005 23.1601C16.3855 23.2076 16.7592 23.3151 17.1105 23.4801C17.8705 23.8727 18.7455 23.9864 19.5805 23.8001C20.3968 23.4389 21.058 22.8014 21.4505 22.0001C21.6268 21.6826 21.8493 21.3927 22.1105 21.1401C22.4243 20.9664 22.7605 20.8376 23.1105 20.7601C23.9755 20.6326 24.7668 20.2001 25.3406 19.5401C25.7868 18.7952 25.9531 17.9164 25.8106 17.0601C25.7568 16.6889 25.7568 16.3114 25.8106 15.9401C25.9693 15.6214 26.1718 15.3251 26.4106 15.0601C27.0468 14.4364 27.4406 13.6076 27.5206 12.7201C27.4506 11.8614 27.0868 11.0527 26.4906 10.4302H26.5105ZM24.9605 13.8401C24.5368 14.2813 24.198 14.7963 23.9605 15.3601C23.803 15.9601 23.7593 16.5838 23.8305 17.2001C23.8918 17.6051 23.8618 18.0188 23.7405 18.4101C23.4018 18.6438 23.0168 18.8013 22.6105 18.8701C22.0068 18.9951 21.4305 19.2288 20.9105 19.56C20.4443 19.965 20.058 20.4538 19.7705 21C19.5205 21.3901 19.2105 21.8701 18.9705 21.9501C18.5705 21.9413 18.1768 21.8426 17.8205 21.6601C17.2505 21.3826 16.633 21.2126 16.0005 21.1601C15.3718 21.1976 14.7543 21.3501 14.1805 21.6101C13.8143 21.7963 13.4105 21.8963 13.0005 21.9C12.7605 21.82 12.4505 21.34 12.2005 20.95C11.8993 20.4188 11.5018 19.9475 11.0305 19.56C10.5105 19.2288 9.93428 18.995 9.33053 18.87C8.92429 18.8013 8.53927 18.6438 8.20055 18.41C8.0793 18.0188 8.0493 17.605 8.11055 17.2C8.18805 16.585 8.15055 15.9613 8.00055 15.36C7.76305 14.7963 7.42429 14.2813 7.00055 13.84C6.69055 13.46 6.34055 13.0301 6.34055 12.76C6.34055 12.49 6.69057 12.0701 7.00055 11.69C7.42429 11.2488 7.76305 10.7338 8.00055 10.17C8.15805 9.57003 8.2018 8.94629 8.13055 8.33003C8.0693 7.92504 8.0993 7.51128 8.22055 7.12005C8.55681 6.8813 8.94305 6.72504 9.35053 6.66005C9.95553 6.54505 10.5355 6.3213 11.0606 6.00005C11.5306 5.61003 11.9268 5.14005 12.2305 4.61003C12.4805 4.22002 12.7905 3.74002 13.0305 3.61003H13.1405C13.4868 3.66253 13.823 3.76378 14.1405 3.91003C14.7268 4.17503 15.358 4.32878 16.0005 4.36002C16.6293 4.32627 17.2455 4.17752 17.8205 3.92002C18.1868 3.73377 18.5905 3.63377 19.0005 3.63002C19.2405 3.71002 19.5305 4.17002 19.8005 4.63002C20.0968 5.15002 20.483 5.61376 20.9405 6C21.4605 6.33126 22.0368 6.56499 22.6405 6.68998C23.048 6.75498 23.4343 6.91124 23.7705 7.14998C23.8918 7.54125 23.9218 7.95498 23.8605 8.35997C23.7968 8.96621 23.8443 9.57997 24.0005 10.17C24.238 10.7337 24.5768 11.2487 25.0005 11.69C25.3105 12.07 25.6605 12.4999 25.6605 12.76C25.6605 13.02 25.2505 13.46 24.9405 13.84L24.9605 13.8401Z" fill="#008000"></path>' +
            '                <path d="M23.1503 20.8C22.8003 20.8775 22.4641 21.0062 22.1503 21.18L22.1003 21.23V27.8502L16.3601 25.9302C16.1514 25.8702 15.9289 25.8702 15.7201 25.9302L9.94029 27.8502V21.1801C9.62654 21.0063 9.29031 20.8776 8.94029 20.8001C8.68029 20.7301 8.41031 20.6501 8.15027 20.5601C8.07402 20.6951 8.03277 20.8463 8.03027 21.0001V29.2401C8.03152 29.5613 8.18777 29.8638 8.45027 30.0501C8.71152 30.2351 9.04653 30.2838 9.35027 30.1801L16.0002 27.9401L22.74 30.1801C22.8425 30.2188 22.95 30.2401 23.06 30.2401C23.325 30.2401 23.58 30.1351 23.7675 29.9476C23.955 29.7601 24.06 29.5051 24.06 29.2401V21.0001C24.0575 20.8463 24.0163 20.6951 23.94 20.5601C23.68 20.6501 23.4103 20.73 23.1503 20.8Z" fill="#008000"></path>' +
            '            </svg>' +
            '        </div>' +
            '        <div class="content">' +
            '            <span>YOU’VE BEEN UPGRADED TO FREE EXPEDITED SHIPPING!</span>' +
            '        </div>' +
            '    </div>' +
            '    <div class="offerSlider">' +
            '        <div class="activeRangeSlider" style="width: 45%;"></div>' +
            '        <div class="custTick">' +
            '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/shipping-icon.svg" alt="">' +
            '        </div>' +
            '    </div>' +
            '    <div class="offerTooltipMain">' +
            '        <div class="insider">' +
            '            free expedited shipping' +
            '        </div>' +
            '    </div>' +
            '</div>';

         var targetElementOfExtramsg = document.querySelector('#cart-offcanvas-content');
         var cartItemWrapperElement = targetElementOfExtramsg.querySelector('.col-12.my-0');
    
        if (cartItemWrapperElement && document.querySelectorAll('.custGetExtramsgFollowup').length == 0) {
            cartItemWrapperElement.insertAdjacentHTML('beforebegin', custGetExtramsgMainHtml);
        }

        var intCartTotalPrice = parseFloat(document.querySelector('.col-6.mt-3.text-end').textContent.replace(/[^\d.]/g, ''));

        if (parseFloat(intCartTotalPrice) >= strThresholdValue) {

            document.querySelector('.custGetExtramsgFollowup .custEligibleMsg')?.classList.add('custHideContent');
            document.querySelector('.custTick')?.classList.add('active');
            // document.querySelector('.custGetExtramsgFollowup .activeRangeSlider')?.style.width = '100%';
            var rangeSliderElement = document.querySelector('.custGetExtramsgFollowup .activeRangeSlider');
            if (rangeSliderElement) {
                rangeSliderElement.style.width = '100%';
            }
        } else {
            document.querySelector('.custGetExtramsgFollowup .congratsMsg') && (document.querySelector('.custGetExtramsgFollowup .congratsMsg').style.display = 'none');
            document.querySelector('.congratsMsg')?.classList.add('custHideContent');

            var intPendingAmount = strThresholdValue - parseFloat(intCartTotalPrice);
            if (!isNaN(intPendingAmount)) {
                var strNewMsg = '$' + intPendingAmount.toFixed(2);
                document.querySelector('.custGetExtramsgFollowup p strong').innerHTML = strNewMsg;
                var intPendingAmountInPercentage = (intCartTotalPrice / strThresholdValue) * 100;
                document.querySelector('.custGetExtramsgFollowup .activeRangeSlider').style.width = intPendingAmountInPercentage + '%';
            }
        }
    }
    
    //add Special deals product html
    function addCustomUpSellProductUK() {
        var custUpSellProductHtml = '<div class="custCartFollowupWraper">' +
            '    <div class="custDiscountBox">' +
            '        <h3>SPECIAL DEALS OF THE DAY</h3>' +
            '        <span class="offerBadge">' +
            '            GET 10% OFF' +
            '        </span>' +
            '    </div>' +
            '    <ul class="recommendList">' +
            '        <li>' +
            '            <div class="itemContent">' +
            '                <div class="imgBox">' +
            '                    <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPO_GREY_LINDA_SLEEP_120x120_crop_center.jpg">' +
            '                </div>' +
            '                <div class="itemDetails">' +
            '                    <div class="title">TRTL PILLOW ORIGINAL</div>' +
            '                    <div class="price">' +
            '                        <div class="mainPrice">$44.99</div>' +
            '                        <div class="cancelPrice">$49.99</div>' +
            '                    </div>' +
            '                </div>' +
            '                <div class="addBtn">Add</div>' +
            '                <div class="custProducts-colour-variant-swatches" id="custProducts-variant-swatches">' +
            '                    <a class="custCloseCrossBlocks">✕</a>' +
            '                    <div class="custSwitchBlocksSection">' +
            '                        <div class="custSwatchWrapper">' +
            '                            <div class="custSwatchColorPattern grey" data-color="Grey" title="Grey"></div>' +
            '                            <div class="custSwatchColorPattern black" data-color="Black" title="Black"></div>' +
            '                            <div class="custSwatchColorPattern red" data-color="Red" title="Red"></div>' +
            '                            <div class="custSwatchColorPattern coral" data-color="Coral" title="Coral"></div>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '        </li>' +
            '        <li>' +
            '            <div class="itemContent">' +
            '                <div class="imgBox">' +
            '                    <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/TRTLTravelPillowJunior-zebra-2_8e829f2f-477d-44fc-86f7-21e3152b6b4d_120x120_crop_center.jpg">' +
            '                </div>' +
            '                <div class="itemDetails">' +
            '                    <div class="title">TRTL PILLOW JUNIOR</div>' +
            '                    <div class="price">' +
            '                        <div class="mainPrice">$31.49</div>' +
            '                        <div class="cancelPrice">$34.99</div>' +
            '                    </div>' +
            '                </div>' +
            '                <div class="addBtn">Add</div>' +
            '                <div class="custProducts-colour-variant-swatches" id="custProducts-variant-swatches">' +
            '                    <a class="custCloseCrossBlocks">✕</a>' +
            '                    <div class="custSwitchBlocksSection">' +
            '                        <div class="custSwatchWrapper">' +
            '                            <div class="custSwatchColorPattern zebra" data-color="Zebra" title="Zebra"></div>' +
            '                            <div class="custSwatchColorPattern aqua" data-color="Aqua" title="Aqua"></div>' +
            '                            <div class="custSwatchColorPattern camo" data-color="Camo" title="Camo"></div>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '        </li>' +
            '        <li>' +
            '            <div class="itemContent">' +
            '                <div class="imgBox">' +
            '                    <img src="https://uk.trtltravel.com/cdn/shop/products/IMG_9043cutcopy_1_1_0d1dc8ec-2d93-4583-90c4-8bc07b03af64_400x.jpg">' +
            '                </div>' +
            '                <div class="itemDetails">' +
            '                    <div class="title">TRTL TRAVEL SOCKS</div>' +
            '                    <div class="price">' +
            '                        <div class="mainPrice">$22.49</div>' +
            '                        <div class="cancelPrice">$24.99</div>' +
            '                    </div>' +
            '                </div>' +
            '                <div class="addBtn">Add</div>' +
            '                <div class="custProducts-colour-variant-swatches" id="custProducts-variant-swatches">' +
            '                    <a class="custCloseCrossBlocks">✕</a>' +
            '                    <div class="custSwitchBlocksSection" id="custCompressionSocks">' +
            '                        <div class="custSwatchWrapper">' +
            '                            <div class="custSwatchColorPattern new-york" data-color="New-York" title="New York">' +
            '                            </div>' +
            '                            <div class="custSwatchColorPattern paris" data-color="Paris" title="Paris"></div>' +
            '                            <div class="custSwatchColorPattern sydney" data-color="Sydney" title="Sydney"></div>' +
            '                            <div class="custSwatchColorPattern fiji" data-color="Fiji" title="Fiji"></div>' +
            '                            <div class="custSwatchColorPattern vancouver" data-color="Vancouver" title="Vancouver"></div>' +
            '                            <div class="custSwatchColorPattern jaipur" data-color="Jaipur" title="Jaipur"></div>' +
            '                            <div class="custSwatchColorPattern kyoto" data-color="Kyoto" title="Kyoto"></div>' +
            '                            <div class="custSwatchColorPattern seattle" data-color="Seattle" title="Seattle"></div>' +
            '                            <div class="custSwatchColorPattern atlantic" data-color="Atlantic" title="Atlantic"></div>' +
            '                        </div>' +
            '                        <div class="custSizeChart">' +
            '                            <div class="custRow">' +
            '                                <div class="cusColtSize">' +
            '                                    <div class="col-auto"><label class="btn btn-outline-dark px-4 custSize" data-size="Small" for="template--15670323839169__main-2-0">S</label></div>' +
            '                                    <div class="col-auto"><label class="btn btn-outline-dark px-4 custSize" data-size="Medium" for="template--15670323839169__main-2-1">M</label></div>' +
            '                                    <div class="col-auto"><label class="btn btn-outline-dark px-4 custSize" data-size="Large" for="template--15670323839169__main-2-2">L</label></div>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '        </li>' +
            '    </ul>' +
            '    <div class="custPassportCoverBox">' +
            '        <div class="demandLevel">' +
            '            <div class="circle"></div>' +
            '            <div class="levelTxt">High demand. Stock Levels <span class="side">LOW</span></div>' +
            '        </div>' +
            '        <div class="coverBox">' +
            '            <div class="coverImgBox">' +
            '                <img src="//uk.trtltravel.com/cdn/shop/files/DSC09507_70x70_crop_center.jpg?v=1693390718" alt="PASSPORT COVER">' +
            '            </div>' +
            '            <div class="coverConent">' +
            '                <p><span>+ FREE PASSPORT COVER <em>($29.99 VALUE)</em></span> INCLUDED WHEN YOU ADD A DEAL TO CART</p>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';

        const checkoutLink = document.querySelector('#cart-offcanvas-content a[href="/checkout"]');
        const checkoutLinkParent = checkoutLink?.parentNode;
        if (checkoutLinkParent && document.querySelectorAll('.custCartFollowupWraper').length === 0) {
            checkoutLinkParent.insertAdjacentHTML('beforebegin', custUpSellProductHtml);
        }

    }
    
    //modifcation in existing code
    function modifyExistingCartContentUK() {
        // wrap all features into one div
        // const cartCheckoutButtonElement = document.querySelector('#cart-offcanvas-content .col-12.cart_checkout-button');

        const custCartFollowupWraperElement = document.querySelector('.custCartFollowupWraper');
        const nextCol12Element = custCartFollowupWraperElement.nextElementSibling;
        const cartCheckoutButtonElementSiblings = Array.from(nextCol12Element.parentNode.children);
        const cartCheckoutButtonElementSiblingsIndex = cartCheckoutButtonElementSiblings.indexOf(nextCol12Element);
        const nextDivs = cartCheckoutButtonElementSiblings.slice(cartCheckoutButtonElementSiblingsIndex + 1, cartCheckoutButtonElementSiblingsIndex + 5);
        const newParentDiv = document.createElement('div');

        if (document.querySelectorAll('.custMiniCartFeatures').length === 0) {
            newParentDiv.classList.add('custMiniCartFeatures');
            nextDivs.forEach(div => {
                newParentDiv.appendChild(div);
            });

            nextCol12Element.parentNode.insertBefore(newParentDiv, nextCol12Element.nextSibling);
        }

        // Wrap price and item div into one div
        var itemTextElements = Array.from(document.querySelectorAll('#cart-offcanvas-content .col-6.mt-3'));
        itemTextElements.forEach(function (element) {
            if (element.textContent.includes('Item')) {
                element.classList.add('custHideContent');
                if (element.nextElementSibling) {
                    element.nextElementSibling.classList.add('custHideContent');
                }
            }
        });

        // Checkout CTA with Price
        //check passport product is added or not and update checkout price
        var newTextOfCheckout = 'Checkout - ' + document.querySelector('.col-6.mt-3.text-end').textContent.trim();
        document.querySelector('#cart-offcanvas-content a[href="/checkout"]').textContent = newTextOfCheckout;
    }
    
    //add FREE PASSPORT COVER product from special product click
    function addPassportProductUK() {
        //check Special Product is added 

        if (sessionStorage.getItem("isRecommendedProductAddedNewUk") !== null) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://uk.trtltravel.com/cart/add');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function () {
                if (xhr.status === 200) {
                    document.querySelector('.custPassportCoverBox')?.classList.add('custHideContent');
                    sessionStorage.setItem('isPassPortAddedUK', 'yes');
                    //location.reload();
                }
            };
            xhr.send(JSON.stringify({
                id: '40440104058978',
                quantity: "1",
                properties: {
                    '_cartPassport': '1'
                }
            }));
        }
    }
    
    // update text on offer product in mini cart
    function updateTextOnOfferProductUK() {

        var trtlPillowelements = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');
        trtlPillowelements.forEach(function (element) {
            // if (element.textContent.includes("TRTL TRAVEL PILLOW")) {
            //     var intOriginalPrice = '$59.99';
            // } else if (element.textContent.includes("TRTL COMPRESSION SOCKS")) {
            //     var intOriginalPrice = '$24.99';
            // } else if (element.textContent.includes("TRTL PILLOW JUNIOR")) {
            //     var intOriginalPrice = '$39.99';
            // }
            // var parentElement = element.closest('.align-items-center');
            // if (parentElement) {
            //     var offerDiv = parentElement.querySelector('.font-heading');
            //     if (offerDiv) {
            //         if (offerDiv.textContent.includes("10% of on cart upsell")) {
            //             var intPriceDiv = parentElement.querySelector('.line-price');
            //             intPriceDiv?.classList.add('custNewOfferPrice');
            //             offerDiv?.classList.add('custHideContent');
            //             if (intPriceDiv && parentElement.querySelectorAll('.custOriginalPrice').length == 0) {
            //                 intPriceDiv.insertAdjacentHTML('afterend', '<span class="custOriginalPrice">' + intOriginalPrice + '</span>');
            //             }
            //         }

            //     }
            // }

            //passport cover product conditions
            if (element.textContent.includes("TRTL PASSPORT COVER")) {
                var passportParentElement = element.closest('.align-items-center');
                if (passportParentElement) {
                    var passportOfferDiv = passportParentElement.querySelector('.font-heading');
                    if (passportOfferDiv) {
                      
                        if (passportOfferDiv.textContent.includes("Free gift")) {
                         
                            //hide passport cover box from the special product
                            document.querySelector('.custPassportCoverBox')?.classList.add('custHideContent');
                            //hide quntity and delete icon
                            var priceDiv = passportParentElement.querySelector('.line-price');
                            if (priceDiv) {
                               
                                var priceParentDiv = priceDiv.closest('.row');
                                var nextpriceParentDiv = priceParentDiv.parentNode;
                                var nextSiblingDiv = nextpriceParentDiv.nextElementSibling;
                                if (nextSiblingDiv) {
                                    nextSiblingDiv?.classList.add('custHideContent');
                                    var removeButton = nextSiblingDiv.querySelector('[data-mp-cart-item-remove]');
                                    if (removeButton) {
                                        removeButton?.classList.add('custRemovebtnPassPort');
                                    }

                                }

                            }

                        }
                    }
                }
            }
        });

        //hide offer line
        const shippingElement = document.querySelector('#cart-offcanvas-content shipping-unlock-alert.bm-t-23-minicart-priorityText').previousElementSibling;
        if (shippingElement && shippingElement.classList.contains('col-12') && shippingElement.textContent.includes("You're saving")) {
            shippingElement.classList.add('custHideContent');
        }

    }
    
    //all click operations
    function operationClickUK() {

        // **************all clicks******************
        //on 'Add' CTA click show color/size panel
        var addBtns = document.querySelectorAll('.custCartFollowupWraper .addBtn');
        addBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var siblings = btn.parentElement.querySelectorAll('.custProducts-colour-variant-swatches');
                siblings.forEach(function (sibling) {
                    sibling.classList.add('custProductsOpen');
                });

            });
        });

        //on 'close' CTA click hide color/size panel
        var closeButtons = document.querySelectorAll('.custCartFollowupWraper a.custCloseCrossBlocks');
        closeButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                btn.parentElement.classList.remove('custProductsOpen');
            });

        });

        // Apply changes again on cart operations
        var cartButtons = document.querySelectorAll('#cart-offcanvas-content button#line-item-button-decrement, #cart-offcanvas-content button#line-item-button-increment');
        cartButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                console.log('click operation working on increment and decrement button');
                setTimeout(function () {
                    triggerTestUK();
                }, 2000);

            });
        });

        //Mini cart delete operationst

        //delete code functionality
        var cartDltButtons = document.querySelectorAll('#cart-offcanvas-content button.btn .fa-trash-alt')
        cartDltButtons.forEach(function (button) {
        button.addEventListener('click', function () {
                console.log('click operation on delete');
                var parentElement = button.closest('.align-items-center');
                var offerDiv = parentElement.querySelector('.font-heading');
                var specialOfferProductCount = 0;

                var trtlPillowelements = document.querySelectorAll('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase');

                if (offerDiv) {
                    console.log('offerDiv >>>',offerDiv);
                    if (offerDiv.textContent.includes("10% of on cart upsell")) {
                        trtlPillowelements.forEach(function (element) {
                            var parentElement = element.closest('.align-items-center');
                            if (parentElement) {
                                var offerDiv = parentElement.querySelector('.font-heading');
                                console.log('offerDiv',offerDiv)
                                if (offerDiv) {
                                    console.log('offerDiv',offerDiv.textContent)
                                    if (offerDiv.textContent.includes("10% of on cart upsell")) {
                                        specialOfferProductCount++
                                    }
                                }

                            }
                        });
                    }
                }


                console.log('specialOfferProductCount',specialOfferProductCount);

                //return false;

                if (specialOfferProductCount == 1) {
                    if (document.querySelector('.custRemovebtnPassPort')) {
                        setTimeout(function () {
                            triggerTestUK();
                            document.querySelector('.custRemovebtnPassPort').click();
                        }, 1500);

                    }
                }

                setTimeout(function () {
                    triggerTestUK();
                }, 3500);

            });
        });

        // PDP Add TO Cart - Trigger the function again
        var addToCartBtns = document.querySelectorAll('.button.add-to-cart-button[name=add], button.sticky-add-to-cart[name=add]');
        addToCartBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                setTimeout(function () {
                    triggerTestUK();
                }, 1500);
            });
        });

        //on 'color' swatches click of Trtle Pillow and Pillow Junior
        var swatchesButtons = document.querySelectorAll('.custCartFollowupWraper .custSwatchWrapper .custSwatchColorPattern');
        swatchesButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {

                var allSwatches = document.querySelectorAll('.custCartFollowupWraper .custSwatchWrapper .custSwatchColorPattern');
                allSwatches.forEach(function (swatch) {
                    swatch.classList.remove('custSwatchActive');
                });

                btn.classList.add('custSwatchActive');
                var strSelectedColor = btn.dataset.color;
                 var arrayColorValue = {
                    Grey: 40241105141858,
                    Black: 40241105174626,
                    Red: 40241105207394,
                    Coral: 40241105240162,
                    Zebra: 40241117266018,
                    Aqua: 40241117298786,
                    Camo: 40241117233250,
                };

                var strSelectedProdId = arrayColorValue[strSelectedColor];

                if (strSelectedProdId !== '' && strSelectedProdId !== undefined) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', 'https://uk.trtltravel.com/cart/add');
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            sessionStorage.setItem('isRecommendedProductAddedNewUk', 'yes');
                            var isPassportCoverExists = checkProductAvailabilityInMinicartUK("TRTL PASSPORT COVER");

                            if (!isPassportCoverExists) {
                                addPassportProductUK();
                            }
                            setTimeout(function () {
                                location.reload();
                            }, 750);
                        }
                    };
                    xhr.send(JSON.stringify({
                        id: strSelectedProdId,
                        quantity: "1",
                        properties: {
                            '_cartDrawer': '0.1'
                        }
                    }));
                }

            });

        });

        //compression socs product functionality
        //size-color with product Ids

        var arrCompressionSockColorSizeMapping = { "New-York-Small": 40241125851234, "New-York-Medium": 40241125884002, "New-York-Large": 40241125916770, "Paris-Small": 40241125949538,"Paris-Medium": 40241125982306, "Paris-Large": 40241126015074, "Sydney-Small": 40241126047842,"Sydney-Medium": 40241126080610,"Sydney-Large": 40241126113378,"Fiji-Small": 40241126178914, "Fiji-Medium": 40241126146146, "Fiji-Large": 40241126211682,"Vancouver-Small": 40241126244450, "Vancouver-Medium": 40241126277218, "Vancouver-Large": 40241126309986, "Jaipur-Small": 40241126342754, "Jaipur-Medium": 40241126375522, "Jaipur-Large": 40241126408290,"Kyoto-Small": 40241126441058, "Kyoto-Medium": 40241126473826,"Kyoto-Large": 40241126506594,"Seattle-Small": 40241126637666,"Seattle-Medium": 40241126670434,"Seattle-Large": 40241126703202,"Atlantic-Small": 40241126735970,"Atlantic-Medium": 40241126768738,"Atlantic-Large": 40241126801506 };
       
        //compression click
        var custCompressionSocks = document.getElementById('custCompressionSocks');
        if (custCompressionSocks) {

            custCompressionSocks.addEventListener('click', function (event) {
                var target = event.target;
                if (target.matches('.custSwatchColorPattern') || target.matches('.custSizeChart .custRow label.btn')) {
                    // For .custSwatchColorPattern elements
                    if (target.classList.contains('custSwatchColorPattern')) {
                        var allSwatches = document.querySelectorAll('.custSwatchColorPattern');
                        allSwatches.forEach(function (swatch) {
                            swatch.classList.remove('custSwatchActive');
                        });

                        target.classList.add('custSwatchActive');
                    } else if (target.closest('#custCompressionSocks .custSizeChart .custRow label.btn')) {

                        var allSizeButtons = document.querySelectorAll('#custCompressionSocks .custSizeChart .custRow label.btn');
                        allSizeButtons.forEach(function (button) {
                            button.classList.remove('custSizeChartActive');
                        });

                        target.classList.add('custSizeChartActive');
                    }

                    var strSelectedCompressionSockColor = document.querySelector('#custCompressionSocks .custSwatchColorPattern.custSwatchActive')?.getAttribute('data-color');

                    var strSelectedCompressionSockSize = document.querySelector('#custProducts-variant-swatches .custSizeChart .custRow label.btn.custSizeChartActive')?.getAttribute('data-size');

                    var strSelectedCompressionSockProdId = arrCompressionSockColorSizeMapping[strSelectedCompressionSockColor + '-' + strSelectedCompressionSockSize];

                    if (strSelectedCompressionSockProdId !== '' && strSelectedCompressionSockProdId !== undefined) {
                        strSelectedCompressionSockColor = strSelectedCompressionSockColor.replace("-", " ");
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', 'https://uk.trtltravel.com/cart/add');
                        xhr.setRequestHeader('Content-Type', 'application/json');
                        xhr.onload = function () {
                            if (xhr.status === 200) {
                                sessionStorage.setItem('isRecommendedProductAddedNewUk', 'yes');
                                var isPassportCoverExists = checkProductAvailabilityInMinicartUK("TRTL PASSPORT COVER");

                                if (!isPassportCoverExists) {
                                    addPassportProductUK();
                                }
                                setTimeout(function () {
                                    location.reload();
                                }, 750);
                            }
                        };
                        xhr.send(JSON.stringify({
                            id: strSelectedCompressionSockProdId,
                            Colour: strSelectedCompressionSockColor,
                            Size: strSelectedCompressionSockSize,
                            quantity: "1",
                            properties: {
                                '_cartDrawer': '0.1'
                            }
                        }));
                    }

                }
            });
        }
    }

    setTimeout(function () {
        // Call initial function
        triggerTestUK();
    }, 1500);

})();