      console.log("%c Alvies007 before JS", "background:red;color : white;padding:10px");

var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {

      console.log("%c Alvies007 after JS", "background:red;color : white;padding:10px");
		var strCouponCode    = 'TEST10OFF';
		var intCountDownTime = '10:00';

		// var script  = document.createElement('script');
		// script.type = 'text/javascript';
		// script.src  = 'https://code.jquery.com/jquery-3.4.1.min.js';
		// document.getElementsByTagName('head')[0].appendChild(script);


		//auto-set coupon code if it is checkout page
		console.log('checkout Len >> '  + jQuery("#checkout-main").length);
		if( document.querySelector("#checkout-main") !== null && sessionStorage.getItem('custIsOfferRedeem') !== null ) {
			setAutoCouponCodeCheckout();
		}		

		//custom offer popup
		function customCCpopup(){
			var intProdInCart = 0;
			if(jQuery('.utility-nav__item-count').length > 0){
				intProdInCart = jQuery('.utility-nav__item-count').text().replace(/[^\d]/g,'');
			}
			
			if( (  jQuery('.template-cart').length  > 0 && intProdInCart > 0 ) && jQuery('.custCCpopupCartExit').length == 0 && sessionStorage.getItem('custIsCCPopupClose') === null ) {
				
				jQuery('<div class="custCCpopupCartExit"> <div class="main"> <h2>Wait</h2> <p>You still have items in your cart</p><div class="offerMsg">Save 10% OFF Today</div><button class="redeemBtn">Redeem Now</button> <div class="offerTiming"> Special Offer Ends In: <div class="timer">01:00</div></div><button class="Search__Close"> <svg class="Icon Icon--close " role="presentation" viewBox="0 0 16 14"> <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path> </svg> </button> </div><div class="overlay"></div></div>').appendTo('body');

				offerCountDownTime();
			}
		}

		//auto-set the coupon code on checkout page, if user has clicked on redeem CTA
		function setAutoCouponCodeCheckout(){
			 //let strDiscountText = document.querySelector("input[name='reductions']").value;

			//if(document.querySelector("input[name='reductions']") !== null )

			if(jQuery('#order-summary .tags-list').length == 0 && jQuery('#order-summary .tags-list .reduction-code__text').text().indexOf(strCouponCode) === -1){
				jQuery('#order-summary #checkout_reduction_code').val(strCouponCode);
				jQuery('#order-summary #checkout_submit').length;
				jQuery('#order-summary #checkout_submit').removeAttr('disabled');
				//jQuery('#order-summary #checkout_submit')[0].click();
			}
		}

		//on popup close CTA or overlay click
		jQuery(document).on('click','.custCCpopupCartExit .main button.Search__Close,.custCCpopupCartExit .overlay', function(){
			jQuery('.custCCpopupCartExit').fadeOut();
			sessionStorage.setItem('custIsCCPopupClose','1');
		});

		//on redeem CTA click
		jQuery(document).on('click','.custCCpopupCartExit .main button.redeemBtn', function(){
				jQuery('.custCCpopupCartExit').fadeOut();
				sessionStorage.setItem('custIsCCPopupClose','1');
				sessionStorage.setItem('custIsOfferRedeem','1');
				
				if( jQuery('.template-cart').length  > 0){
					jQuery('button#checkout-button')[0].click();
				}
				else{
					setAutoCouponCodeCheckout();
				}
		});

		//when user is about to exit site
		const mouseEvent = e => {
		    const shouldShowExitIntent = !e.toElement && !e.relatedTarget && e.clientY < 10;
		    if (shouldShowExitIntent) {
				customCCpopup();
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
				jQuery('.custCCpopupCartExit .main .offerTiming .timer').html(countDownTime);
				timer2 = minutes + ':' + seconds;
				
				if(countDownTime == '0:00'){
					jQuery('.custCCpopupCartExit').fadeOut();
					sessionStorage.setItem('custIsCCPopupClose','1');
					clearInterval(interval);
				}
			}, 1000);
		}

 		clearInterval(waitForJquery);  
    }
}, 50); 