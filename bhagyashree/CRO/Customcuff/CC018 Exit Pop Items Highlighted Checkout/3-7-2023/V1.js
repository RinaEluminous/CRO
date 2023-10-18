var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

		var strCouponCode    = 'GET10OFF';
		var intCountDownTime = '10:00';

		//auto-set coupon code if it is checkout page
		if(jQuery('.custom-checkout').length > 0 && sessionStorage.getItem('custIsOfferRedeem') !== null ) {
			setAutoCouponCodeCheckoutV1();
		}		

		//custom offer popup
		function customCCpopupV1(){
			if( (  jQuery('.custom-checkout').length  > 0 && jQuery('.custom-checkout .sidebar tr.product').length > 0 ) && jQuery('.custCCpopupCartExitBlockv1').length == 0 && sessionStorage.getItem('custIsCCPopupClose') === null ) {
				
				jQuery('<div class="custCCpopupCartExitBlockv1"><div class="custSectionBlock"><div class="custLeftPopupContent"><h4>Order Summary</h4><div class="custCheckoutContant"></div><div class="custDiscountWrapper"><ul><li><h6>Discount:<span id="custDiscount">-$17.00</span></h6></li><li><h6>New Total:<span id="custTotal">-$17.00</span></h6></li></ul></div></div><div class="custRightPopupContent"><div class="main"><h2>Wait</h2><p>You still have items in your cart</p><div class="offerMsg">Save 10% OFF Today</div><button class="redeemBtn">Redeem Now</button></div><button class="Search__Close"><svg class="Icon Icon--close" role="presentation" viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg></button></div><div class="offerTiming">Special Offer Ends In:<div class="timer">01:00</div></div></div><div class="overlay"></div></div>').appendTo('body');

					var custTR = jQuery('.order-summary__section__content .product-table #gip-product-table-processed').html();

					if(jQuery('.custTable').length == 0){
						var custTable = '<table class="custTable">'+custTR +'</table>';
						jQuery(custTable).prependTo('.custCheckoutContant');
					}

				offerCountDownTime();
			}
		}

		//auto-set the coupon code on checkout page, if user has clicked on redeem CTA
		function setAutoCouponCodeCheckoutV1(){
			if(jQuery('#order-summary .tags-list').length == 0 && jQuery('#order-summary .tags-list .reduction-code__text').text().indexOf(strCouponCode) === -1){
				jQuery('#order-summary #checkout_reduction_code').val(strCouponCode);
				if(jQuery('#order-summary #checkout_submit').length > 0){
					jQuery('#order-summary #checkout_submit').removeAttr('disabled');
					jQuery('#order-summary #checkout_submit')[0].click();
				}
			
				var intCnt = 0;
				var intInterval = setInterval(function (){
					intCnt += 1; 
					if(jQuery('.total-line__price span[data-checkout-discount-amount-target]').length > 0){
						
						var floatDiscount  = jQuery('.total-line__price span[data-checkout-discount-amount-target]').text().trim();

						var floatCartTotal = jQuery('.total-line__price .payment-due__price').text().trim();

						jQuery('.custLeftPopupContent ul li span#custDiscount').text(floatDiscount);
						jQuery('.custLeftPopupContent ul li span#custTotal').text(floatCartTotal);
						jQuery('.custCCpopupCartExitBlockv1 .custDiscountWrapper').show();
						clearInterval(intInterval);

						if(intCnt === 50){
							clearInterval(intInterval);
						}
					}
				},50);

			}
		}

		//on popup close CTA or overlay click
		jQuery(document).on('click','.custCCpopupCartExitBlockv1 button.Search__Close,.custCCpopupCartExitBlockv1 .overlay', function(){
			jQuery('.custCCpopupCartExitBlockv1').fadeOut();
			sessionStorage.setItem('custIsCCPopupClose','1');
		});

		//on redeem CTA click
		jQuery(document).on('click','.custCCpopupCartExitBlockv1 button.redeemBtn', function(){
				jQuery('.custCCpopupCartExitBlockv1 button.redeemBtn').attr('disabled','disabled');
				sessionStorage.setItem('custIsCCPopupClose','1');
				sessionStorage.setItem('custIsOfferRedeem','1');
				if(jQuery('.custom-checkout').length > 0){
					setAutoCouponCodeCheckoutV1();
				}
				else{
					document.getElementById('DrawerCartForm').submit();
				}
		});

		//when user is about to exit site
		const mouseEvent = e => {
		 const shouldShowExitIntent = !e.toElement && !e.relatedTarget && e.clientY < 10;
		 if (shouldShowExitIntent) {
				customCCpopupV1();
		 }
		};

		document.addEventListener('mouseout', mouseEvent);

		//counter for offer price, once count down time ups close the popup
		function offerCountDownTime() {
			var timer2 = intCountDownTime;
				var interval = setInterval(function() {

				var timer = timer2.split(':');
				//by parsing integer, I avoid all extra string processing
				var minutes = parseInt(timer[0], 10);
				var seconds = parseInt(timer[1], 10);
				--seconds;
				minutes = (seconds < 0) ? --minutes : minutes;
				if (minutes < 0) clearInterval(interval);
				
				seconds = (seconds < 0) ? 59 : seconds;
				seconds = (seconds < 10) ? '0' + seconds : seconds;

				var countDownTime = minutes + ':' + seconds;
				jQuery('.custCCpopupCartExitBlockv1 .offerTiming .timer').html(countDownTime);
				timer2 = minutes + ':' + seconds;
				
				if(countDownTime == '0:00'){
					jQuery('.custCCpopupCartExitBlockv1').fadeOut();
					sessionStorage.setItem('custIsCCPopupClose','1');
					clearInterval(interval);
				}
			}, 1000);
		}

 		clearInterval(waitForJquery);
    }
}, 50); 