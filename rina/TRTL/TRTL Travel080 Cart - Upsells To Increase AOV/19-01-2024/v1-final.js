	var strURL = window.location.href;
	//check we are on checkout page or not
	if (strURL.includes('/checkouts/')) {
		applyCouponCode();
	}
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
			if (productName.includes('TRTL TRAVEL PILLOW') && (parseFloat(intCartPrice) >= 90)) {
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
                                    '    <p>You are <strong>$20</strong> away from getting an extra 10% off your order.</p>'+
                                    '    <div class="offerSlider">'+
                                    '        <div class="activeRangeSlider" style="width: 45%;"></div>'+
                                    '    </div>'+
                                    '    <div class="offerTooltipMain">'+
                                    '        <div class="insider custOfferMsg">'+
                                    '            GET AN EXTRA 10% OFF'+
                                    '        </div>'+
                                    '    </div>'+
                                    '</div>';

			 if (jQuery('#cart-offcanvas-content .bm-t-023-active').length > 0 && jQuery('.custGetExtramsgMain').length == 0){
	            jQuery('#cart-offcanvas-content .bm-t-023-active').nextAll('.col-12.my-0').first().after(custGetExtramsgMainHtml);
	        }

			
			var intCartTotalPrice = jQuery('.col-6.mt-3.text-end').text().replace(/[^\d.]/g, '');
			var	intRoundCartTotalPrice = Math.round(intCartTotalPrice);
			
			if (parseFloat(intRoundCartTotalPrice) >= 90) {
				var strNewMsg ='You are eligible for getting an extra 10% off your order.';
				jQuery('.custGetExtramsgMain p').html(strNewMsg);
				jQuery('.custGetExtramsgMain .activeRangeSlider').css('width','100%');
			}else{	
				var intPendingAmount = 90 - parseFloat(intRoundCartTotalPrice);
				if (!isNaN(intPendingAmount)) {
				var intRoundPendingAmount = Math.floor(intPendingAmount);
				var strNewMsg ='$'+intRoundPendingAmount;
				jQuery('.custGetExtramsgMain p strong').html(strNewMsg);
				var intPendingAmountInPercentage = (intRoundCartTotalPrice/90)*100;	
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
				        '                    <div class="price">$44.99</div>'+
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
				        '                    <div class="price">$35.99</div>'+
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