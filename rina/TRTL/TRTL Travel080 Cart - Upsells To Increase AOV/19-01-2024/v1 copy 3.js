var strURL = window.location.href;
//check we are on checkout page or not
if (strURL.includes('/checkouts/')) {
	applyCouponCode();
}
var strThresholdValue = 90;	 
//Auto Apply Coupon Code on Checkout page
function applyCouponCode() {
	var couponCode = 'EXTRA10OFF-CU';
	var intCarValue  = document.querySelectorAll('.payment-due__price')[0].textContent.trim();
	var intCartPrice = intCarValue.replace('$', '');
	if(document.querySelectorAll('tbody[data-order-summary-section="line-items"] .product').length > 0){
		var productRows = document.querySelectorAll('tbody[data-order-summary-section="line-items"] .product');
		productRows.forEach(function(row) {
			var productName = row.querySelector('.product__description__name').textContent;
			//'TRTL TRAVEL PILLOW' product available and price is greater than 90 
			if (productName.includes('TRTL TRAVEL PILLOW') && (parseFloat(intCartPrice) >= strThresholdValue)) {				
					if(document.querySelectorAll('#order-summary form.edit_checkout .fieldset .field__input-wrapper #checkout_reduction_code').length > 0){
						document.querySelector('#order-summary form.edit_checkout .fieldset .field__input-wrapper #checkout_reduction_code').value = couponCode
						document.querySelector('#order-summary form.edit_checkout .fieldset button#checkout_submit').classList.remove("btn--disabled");
						document.querySelector('#order-summary form.edit_checkout .fieldset button#checkout_submit').disabled = false;
						document.querySelector('#order-summary form.edit_checkout .fieldset button#checkout_submit').click();	   
					}
			}
		});
	}
}

var waitForJquery = setInterval(function() {

	if (typeof jQuery != 'undefined' && jQuery('#cart-offcanvas-content').length > 0) {
     
		function addCustGetExtramsgMain(){

        	var custGetExtramsgMainHtml ='<div class="custGetExtramsgMain">'+
			'    <p class="custEligibleMsg">You are <strong>$20</strong> away from getting an extra 10% off your order.</p>'+
			'    <div class="congratsMsg">'+
			'        <div class="icon">'+
			'            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">'+
			'                <path d="M19.5105 10.1402L14.3806 15.2701L12.4906 13.3801C12.1006 12.9926 11.4706 12.9926 11.0806 13.3801C10.8919 13.5676 10.7844 13.8238 10.7844 14.0901C10.7844 14.3564 10.8919 14.6126 11.0806 14.8001L13.6707 17.3901C13.8582 17.5814 14.1132 17.6889 14.3807 17.6901C14.6482 17.6889 14.9032 17.5814 15.0907 17.3901L20.9208 11.5601C21.1095 11.3726 21.217 11.1163 21.217 10.85C21.217 10.5838 21.1095 10.3276 20.9208 10.14C20.5308 9.75254 19.9005 9.75267 19.5105 10.1402ZM26.5105 10.4302C26.2718 10.1652 26.0693 9.86891 25.9105 9.55016C25.8568 9.1789 25.8568 8.80142 25.9105 8.43016C26.023 7.58267 25.8355 6.72392 25.3806 6.00014C24.8068 5.34014 24.0156 4.90763 23.1505 4.78014C22.8005 4.70264 22.4643 4.57389 22.1505 4.40014C21.8893 4.14764 21.6668 3.85765 21.4905 3.54014C21.0905 2.7539 20.4293 2.13141 19.6205 1.78014C18.7855 1.59389 17.9105 1.70764 17.1505 2.10014C16.7843 2.24889 16.3955 2.33639 16.0005 2.36014C15.6167 2.31639 15.2417 2.21264 14.8905 2.05014C14.1305 1.65763 13.2555 1.5439 12.4205 1.73014C11.6117 2.08141 10.9504 2.7039 10.5504 3.49014C10.3742 3.80764 10.1517 4.09763 9.89044 4.35014C9.57669 4.52389 9.24046 4.65264 8.89044 4.73014C8.0042 4.86139 7.19668 5.31264 6.62042 6.00016C6.17418 6.74515 6.00791 7.6239 6.15041 8.48016C6.20416 8.85142 6.20416 9.2289 6.15041 9.60016C5.99166 9.91891 5.78916 10.2152 5.55041 10.4802C4.91165 11.0827 4.50541 11.8889 4.40039 12.7602C4.48039 13.6476 4.87415 14.4764 5.51041 15.1002C5.74916 15.3652 5.95165 15.6614 6.11041 15.9802C6.16416 16.3514 6.16416 16.7289 6.11041 17.1002C5.96791 17.9564 6.13416 18.8352 6.58042 19.5802C7.16417 20.2489 7.97044 20.6827 8.85044 20.8002C9.20046 20.8777 9.53668 21.0064 9.85044 21.1802C10.1117 21.4327 10.3342 21.7227 10.5104 22.0402C10.9104 22.8264 11.5717 23.4489 12.3805 23.8002C12.613 23.8752 12.8555 23.9127 13.1005 23.9102C13.7042 23.8714 14.2967 23.7264 14.8505 23.4801C15.2142 23.3114 15.6017 23.2039 16.0005 23.1601C16.3855 23.2076 16.7592 23.3151 17.1105 23.4801C17.8705 23.8727 18.7455 23.9864 19.5805 23.8001C20.3968 23.4389 21.058 22.8014 21.4505 22.0001C21.6268 21.6826 21.8493 21.3927 22.1105 21.1401C22.4243 20.9664 22.7605 20.8376 23.1105 20.7601C23.9755 20.6326 24.7668 20.2001 25.3406 19.5401C25.7868 18.7952 25.9531 17.9164 25.8106 17.0601C25.7568 16.6889 25.7568 16.3114 25.8106 15.9401C25.9693 15.6214 26.1718 15.3251 26.4106 15.0601C27.0468 14.4364 27.4406 13.6076 27.5206 12.7201C27.4506 11.8614 27.0868 11.0527 26.4906 10.4302H26.5105ZM24.9605 13.8401C24.5368 14.2813 24.198 14.7963 23.9605 15.3601C23.803 15.9601 23.7593 16.5838 23.8305 17.2001C23.8918 17.6051 23.8618 18.0188 23.7405 18.4101C23.4018 18.6438 23.0168 18.8013 22.6105 18.8701C22.0068 18.9951 21.4305 19.2288 20.9105 19.56C20.4443 19.965 20.058 20.4538 19.7705 21C19.5205 21.3901 19.2105 21.8701 18.9705 21.9501C18.5705 21.9413 18.1768 21.8426 17.8205 21.6601C17.2505 21.3826 16.633 21.2126 16.0005 21.1601C15.3718 21.1976 14.7543 21.3501 14.1805 21.6101C13.8143 21.7963 13.4105 21.8963 13.0005 21.9C12.7605 21.82 12.4505 21.34 12.2005 20.95C11.8993 20.4188 11.5018 19.9475 11.0305 19.56C10.5105 19.2288 9.93428 18.995 9.33053 18.87C8.92429 18.8013 8.53927 18.6438 8.20055 18.41C8.0793 18.0188 8.0493 17.605 8.11055 17.2C8.18805 16.585 8.15055 15.9613 8.00055 15.36C7.76305 14.7963 7.42429 14.2813 7.00055 13.84C6.69055 13.46 6.34055 13.0301 6.34055 12.76C6.34055 12.49 6.69057 12.0701 7.00055 11.69C7.42429 11.2488 7.76305 10.7338 8.00055 10.17C8.15805 9.57003 8.2018 8.94629 8.13055 8.33003C8.0693 7.92504 8.0993 7.51128 8.22055 7.12005C8.55681 6.8813 8.94305 6.72504 9.35053 6.66005C9.95553 6.54505 10.5355 6.3213 11.0606 6.00005C11.5306 5.61003 11.9268 5.14005 12.2305 4.61003C12.4805 4.22002 12.7905 3.74002 13.0305 3.61003H13.1405C13.4868 3.66253 13.823 3.76378 14.1405 3.91003C14.7268 4.17503 15.358 4.32878 16.0005 4.36002C16.6293 4.32627 17.2455 4.17752 17.8205 3.92002C18.1868 3.73377 18.5905 3.63377 19.0005 3.63002C19.2405 3.71002 19.5305 4.17002 19.8005 4.63002C20.0968 5.15002 20.483 5.61376 20.9405 6C21.4605 6.33126 22.0368 6.56499 22.6405 6.68998C23.048 6.75498 23.4343 6.91124 23.7705 7.14998C23.8918 7.54125 23.9218 7.95498 23.8605 8.35997C23.7968 8.96621 23.8443 9.57997 24.0005 10.17C24.238 10.7337 24.5768 11.2487 25.0005 11.69C25.3105 12.07 25.6605 12.4999 25.6605 12.76C25.6605 13.02 25.2505 13.46 24.9405 13.84L24.9605 13.8401Z" fill="#008000"></path>'+
			'                <path d="M23.1503 20.8C22.8003 20.8775 22.4641 21.0062 22.1503 21.18L22.1003 21.23V27.8502L16.3601 25.9302C16.1514 25.8702 15.9289 25.8702 15.7201 25.9302L9.94029 27.8502V21.1801C9.62654 21.0063 9.29031 20.8776 8.94029 20.8001C8.68029 20.7301 8.41031 20.6501 8.15027 20.5601C8.07402 20.6951 8.03277 20.8463 8.03027 21.0001V29.2401C8.03152 29.5613 8.18777 29.8638 8.45027 30.0501C8.71152 30.2351 9.04653 30.2838 9.35027 30.1801L16.0002 27.9401L22.74 30.1801C22.8425 30.2188 22.95 30.2401 23.06 30.2401C23.325 30.2401 23.58 30.1351 23.7675 29.9476C23.955 29.7601 24.06 29.5051 24.06 29.2401V21.0001C24.0575 20.8463 24.0163 20.6951 23.94 20.5601C23.68 20.6501 23.4103 20.73 23.1503 20.8Z" fill="#008000"></path>'+
			'            </svg>'+
			'        </div>'+
			'        <div class="content">'+
			'            <span>CONGRATULATIONS!</span>'+
			'            10% Off Applied at Checkout'+
			'        </div>'+
			'    </div>'+
			'    <div class="offerSlider">'+
			'        <div class="activeRangeSlider" style="width: 45%;"></div>'+
			'        <div class="custTick">'+
			'            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">'+
			'                <path d="M1 2.5L4 5.5L9 0.5" stroke="white"></path>'+
			'            </svg>'+
			'        </div>'+
			'    </div>'+
			'    <div class="offerTooltipMain custOfferTooltipMain">'+
			'        <div class="insider custOfferMsg">'+
			'            GET AN EXTRA 10% OFF'+
			'        </div>'+
			'    </div>'+
			'</div>';

			 if (jQuery('#cart-offcanvas-content .bm-t-023-active').length > 0 && jQuery('.custGetExtramsgMain').length == 0){
	            jQuery('#cart-offcanvas-content .bm-t-023-active').nextAll('.col-12.my-0').first().after(custGetExtramsgMainHtml);
	        }

			
			var intCartTotalPrice = parseFloat(jQuery('.col-6.mt-3.text-end').text().replace(/[^\d.]/g, ''));
			//var	intRoundCartTotalPrice = Math.round(intCartTotalPrice);
			
			if (parseFloat(intCartTotalPrice) >= strThresholdValue) {
				console.log('100 percent eligible');
				//var strNewMsg ='You are eligible for getting an extra 10% off your order.';
				// jQuery('.custGetExtramsgMain p').html(strNewMsg);
				//add custTick class to active class
				//add display none class to custEligibleMsg 	
				jQuery('.custGetExtramsgMain .custEligibleMsg').addClass('custHideContent');
				jQuery('.custGetExtramsgMain .custOfferTooltipMain').addClass('custHideContent');
				jQuery('.custTick').addClass('active');
				jQuery('.custGetExtramsgMain .activeRangeSlider').css('width','100%');
			}else{	
				
				jQuery('.custGetExtramsgMain .congratsMsg').css('display', 'none');
				jQuery('.congratsMsg').addClass('custHideContent');
				var intPendingAmount = strThresholdValue - parseFloat(intCartTotalPrice);
				if (!isNaN(intPendingAmount)) {
				//var intRoundPendingAmount = Math.floor(intPendingAmount);
				var strNewMsg ='$'+intPendingAmount.toFixed(2);
				jQuery('.custGetExtramsgMain p strong').html(strNewMsg);
				var intPendingAmountInPercentage = (intCartTotalPrice/strThresholdValue)*100;	
				jQuery('.custGetExtramsgMain .activeRangeSlider').css('width',intPendingAmountInPercentage+'%');
				}
			}
    	}

    	function addCustomUpSellProduct() {
	        var custUpSellProductHtml = '<div class="custCartRecommendWraper">'+
				        '    <h3>Recommended for you</h3>'+
				        '    <ul class="recommendList">'+
				        '        <li>'+
				        '            <div class="itemContent">'+
				        '                <div class="imgBox">'+
				        '                    <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPO_GREY_LINDA_SLEEP_120x120_crop_center.jpg">'+
				        '                </div>'+
				        '                <div class="itemDetails">'+
				        '                    <div class="title">TRAVEL PILLOW</div>'+
				        '                    <div class="price">$49.99</div>'+
				        '                </div>'+
				        '                <div class="addBtn">Add</div>'+
				        '                <div class="custProducts-colour-variant-swatches" id="custProducts-variant-swatches">'+
				        '                    <a class="custCloseCrossBlocks">✕</a>'+
				        '                    <div class="custSwitchBlocksSection">'+
				        '                        <div class="custSwatchWrapper">'+
				        '                            <div class="custSwatchColorPattern grey" data-color="Grey" title="Grey"></div>'+
				        '                            <div class="custSwatchColorPattern black" data-color="Black" title="Black"></div>'+
				        '                            <div class="custSwatchColorPattern red" data-color="Red" title="Red"></div>'+
				        '                            <div class="custSwatchColorPattern coral" data-color="Coral" title="Coral"></div>'+
				        '                        </div>'+
				        '                    </div>'+
				        '                </div>'+
				        '            </div>'+
				        '        </li>'+
				        '        <li>'+
				        '            <div class="itemContent">'+
				        '                <div class="imgBox">'+
				        '                    <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/TRTLTravelPillowJunior-zebra-2_8e829f2f-477d-44fc-86f7-21e3152b6b4d_120x120_crop_center.jpg">'+
				        '                </div>'+
				        '                <div class="itemDetails">'+
				        '                    <div class="title">PILLOW JUNIOR</div>'+
				        '                    <div class="price">$39.99</div>'+
				        '                </div>'+
				        '                <div class="addBtn">Add</div>'+
				        '                <div class="custProducts-colour-variant-swatches" id="custProducts-variant-swatches">'+
				        '                    <a class="custCloseCrossBlocks">✕</a>'+
				        '                    <div class="custSwitchBlocksSection">'+
				        '                        <div class="custSwatchWrapper">'+
				        '                            <div class="custSwatchColorPattern zebra" data-color="Zebra" title="Zebra"></div>'+
				        '                            <div class="custSwatchColorPattern aqua" data-color="Aqua" title="Aqua"></div>'+
				        '                            <div class="custSwatchColorPattern camo" data-color="Camo" title="Camo"></div>'+
				        '                        </div>'+
				        '                    </div>'+
				        '                </div>'+
				        '            </div>'+
				        '        </li>'+
				        '        <li>'+
				        '            <div class="itemContent">'+
				        '                <div class="imgBox">'+
				        '                    <img src="https://trtltravel.com/cdn/shop/products/IMG_9043cutcopy_1_5d863b0b-8659-4f15-8d08-6655256630e7_120x.jpg">'+
				        '                </div>'+
				        '                <div class="itemDetails">'+
				        '                    <div class="title">COMPRESSION SOCKS</div>'+
				        '                    <div class="price">$24.99</div>'+
				        '                </div>'+
				        '                <div class="addBtn">Add</div>'+
				        '                <div class="custProducts-colour-variant-swatches" id="custProducts-variant-swatches">'+
				        '                    <a class="custCloseCrossBlocks">✕</a>'+
				        '                    <div class="custSwitchBlocksSection" id="custCompressionSocks">'+
				        '                        <div class="custSwatchWrapper">'+
				        '                            <div class="custSwatchColorPattern new-york" data-color="New-York" title="New York"></div>'+
				        '                            <div class="custSwatchColorPattern fiji" data-color="Fiji" title="Fiji"></div>'+
				        '                            <div class="custSwatchColorPattern kyoto" data-color="Kyoto" title="Kyoto"></div>'+
				        '                            <div class="custSwatchColorPattern havana custHideContent" data-color="Havana" title="Havana"></div>'+
				        '                            <div class="custSwatchColorPattern paris" data-color="Paris" title="Paris"></div>'+
				        '                            <div class="custSwatchColorPattern seattle" data-color="Seattle" title="Seattle"></div>'+
				        '                            <div class="custSwatchColorPattern sydney" data-color="Sydney" title="Sydney"></div>'+
				        '                            <div class="custSwatchColorPattern vancouver" data-color="Vancouver" title="Vancouver"></div>'+
				        '                            <div class="custSwatchColorPattern jaipur" data-color="Jaipur" title="Jaipur"></div>'+
				        '                        </div>'+
				        '                        <div class="custSizeChart">'+
				        '                            <div class="custRow">'+
				        '                                <div class="cusColtSize">'+
				        '                                    <div class="col-auto"><div class="btn btn-outline-dark px-4" data-size="Small" for="template--15670323839169__main-2-0">S</div></div>'+
				        '                                    <div class="col-auto"><div class="btn btn-outline-dark px-4" data-size="Medium" for="template--15670323839169__main-2-1">M</div></div>'+
				        '                                    <div class="col-auto"><div class="btn btn-outline-dark px-4" data-size="Large" for="template--15670323839169__main-2-2">L</div></div>'+
				        '                                </div>'+
				        '                            </div>'+
				        '                        </div>'+
				        '                    </div>'+
				        '                </div>'+
				        '            </div>'+
				        '        </li>'+
				        '    </ul>'+
				        '</div>';

	        if(jQuery('#cart-offcanvas-content a[href="/checkout"]').parent().length > 0 && jQuery('.custCartRecommendWraper').length == 0) {
	            jQuery('#cart-offcanvas-content a[href="/checkout"]').parent().before(custUpSellProductHtml);	          
			}    
		}

		function modifyExistingCartContent(){
	     	// Check if the shipping-unlock-alert element exists
	        if (jQuery('shipping-unlock-alert.bm-t-23-minicart-priorityText').length > 0 ) {
	            // Select all col-12 elements that come after shipping-unlock-alert, excluding the first one
	            var col12Elements = jQuery('shipping-unlock-alert.bm-t-23-minicart-priorityText').nextAll('.col-12:not(:first):lt(4)');
	    
	            // Wrap the selected col-12 elements in a new container
	            if (col12Elements.length > 0) {
	                col12Elements.wrapAll('<div class="custCartFeatures"></div>');
	            }
	        }

	        //wrap price and item div into one div
	        if(jQuery('#cart-offcanvas-content .col-6.mt-3:contains(Item)').length > 0){
		        jQuery('#cart-offcanvas-content .col-6.mt-3:contains(Item)').addClass('custHideContent');
		        jQuery('#cart-offcanvas-content .col-6.mt-3:contains(Item)').next().addClass('custHideContent');
		    }

		    // Checkout CTA with Price
		    var newTextOfCheckout = jQuery('#cart-offcanvas-content a[href="/checkout"]').text() + ' - ' +jQuery('.col-6.mt-3.text-end').text();
          	jQuery('#cart-offcanvas-content a[href="/checkout"]').text(newTextOfCheckout);
		}

		if(jQuery('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase:contains(TRTL TRAVEL PILLOW)').length > 0){
			addCustGetExtramsgMain();
			addCustomUpSellProduct();
    		modifyExistingCartContent();
    		if (sessionStorage.getItem("isRecommendedProductAdded") != null) {
		        jQuery(".justify-content-end .xposition-relative img").trigger("click");
		        sessionStorage.removeItem("isRecommendedProductAdded");
		    }
		}

    	//on 'Add' CTA click of compression socks , show color/size panel
	    jQuery(document).on('click','.custCartRecommendWraper .addBtn', function(){
	        jQuery(this).siblings('.custProducts-colour-variant-swatches').addClass('custProductsOpen');
	    }); 
    
    	//on 'close' CTA click hide color/size panel
       	jQuery(document).on('click','.custCartRecommendWraper a.custCloseCrossBlocks', function() {
        	jQuery(this).parent().removeClass('custProductsOpen');
    	});

    	//on 'color' swatches click
    	jQuery(document).on('click', '.custCartRecommendWraper .custSwatchWrapper .custSwatchColorPattern', function() {
          
	        jQuery('.custSwatchColorPattern').removeClass('custSwatchActive');
	        jQuery(this).addClass('custSwatchActive');
	        var  strSelectedColor = jQuery(this).data('color');
      
	        var arrayColorValue = {
	            Grey: 42424477614273,
	            Black:42424477647041,
	            Red: 42424477679809,
	            Coral:42424477712577,
	            Zebra:42424741724353,
	            Aqua:42424741757121,
	            Camo:42424741789889,
	        };

        	var strSelectedProdId = arrayColorValue[strSelectedColor];
        	if(strSelectedProdId !== '' && strSelectedProdId !== undefined){
            	jQuery.ajax({
                  	type: "POST", 
	                url: 'https://trtltravel.com/cart/add', 
	                data: {
	                    id: strSelectedProdId,
	                    quantity: "1"
	                },      
	                dataType: "json",
	                success: function(response){
	                    sessionStorage.setItem('isRecommendedProductAdded','yes');
	                    location.reload();
	                }
            	});
        	}
    	});

    	// Apply changes again on cart operations
    	jQuery(document).on('click', '#cart-offcanvas-content button.btn', function(){
    		setTimeout(function(){
    			if(jQuery('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase:contains(TRTL TRAVEL PILLOW)').length > 0){
					addCustGetExtramsgMain();
					addCustomUpSellProduct();
		    		modifyExistingCartContent();
				}
    		}, 1500);
    	});

    	// PDP Add TO Cart - Trigger the function again
    	jQuery(document).on('click', 'button.add-to-cart-button[name=add], button.sticky-add-to-cart[name=add]', function(){
    		setTimeout(function(){
    			if(jQuery('#cart-offcanvas-content .col-12 .col-8 a.text-decoration-none.text-uppercase:contains(TRTL TRAVEL PILLOW)').length > 0){
					addCustGetExtramsgMain();
					addCustomUpSellProduct();
		    		modifyExistingCartContent();
				}
    		}, 1500);
    	});

    	//size-color with product Ids
		var arrCompressionSockColorSizeMapping = { "New-York-Small":42424784552129,"New-York-Medium":42424784584897,"New-York-Large": 42424784617665,"Fiji-Small":42424784650433,"Fiji-Medium":42424784683201,"Fiji-Large": 42424784715969,"Kyoto-Small":42424784748737,"Kyoto-Medium":42424784781505,"Kyoto-Large": 42424784814273,"Havana-Small":42424784847041,"Havana-Medium":42424784879809,"Havana-Large": 42424784912577,"Paris-Small":42424784945345,"Paris-Medium":42424784978113,"Paris-Large": 42424785010881,"Seattle-Small":42424785043649,"Seattle-Medium":42424785076417,"Seattle-Large": 42424785109185,"Sydney-Small":42424785141953,"Sydney-Medium":42424785174721,"Sydney-Large": 42424785207489,"Vancouver-Small":42424785240257,"Vancouver-Medium":42424785273025,"Vancouver-Large": 42424785305793,"Jaipur-Small":42424785338561,"Jaipur-Medium":42424785371329,"Jaipur-Large":42424785404097 }; 

    	//compression click
    	jQuery(document).on('click', '#custCompressionSocks .custSwatchColorPattern, #custCompressionSocks .cusColtSize div.btn', function() {

    		if(jQuery(this).hasClass('custSwatchColorPattern')){
    			jQuery('.custSwatchColorPattern').removeClass('custSwatchActive');
    			jQuery(this).addClass('custSwatchActive ')
    		}else{
    			jQuery('#custCompressionSocks .cusColtSize div.btn').removeClass('custSizeChartActive');
    			jQuery(this).addClass('custSizeChartActive');
    		}

	        var  strSelectedCompressionSockColor = jQuery('#custCompressionSocks .custSwatchColorPattern.custSwatchActive').attr('data-color'); 
	  
	        var strSelectedCompressionSockSize   = jQuery('#custProducts-variant-swatches .custSizeChart div.btn.custSizeChartActive').attr('data-size');  
	      
	        var strSelectedCompressionSockProdId = arrCompressionSockColorSizeMapping[strSelectedCompressionSockColor + '-' + strSelectedCompressionSockSize];

	        if(strSelectedCompressionSockProdId !== '' && strSelectedCompressionSockProdId !== undefined){
	            strSelectedCompressionSockColor = strSelectedCompressionSockColor.replace("-", " ");
	            jQuery.ajax({
	                  type: "POST", 
	                  url: 'https://trtltravel.com/cart/add', 
	                  data: {
	                    id: 	strSelectedCompressionSockProdId,
	                    Colour: strSelectedCompressionSockColor,
	                    Size: 	strSelectedCompressionSockSize,
	                    quantity: "1"
	                  },      
	                  dataType: "json",
	                  success: function(response){
	   					sessionStorage.setItem('isRecommendedProductAdded','yes');
	                    location.reload();
	                  }
	            });
	        }
      	});

    	clearInterval(waitForJquery);
    }
	  
}, 50);