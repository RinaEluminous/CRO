var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {
	
	customClaimBadgeHP();

  	function customClaimBadgeHP(){
		if(jQuery('.custClaimBadge').length == 0){
			jQuery('<div class="custClaimBadge"> <span class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/gift-icon.svg"> </span> Claim 2 FREE Gifts + Get 10% OFF</div><div class="custClaimFreeWraper"> <div class="overlay"></div><div class="custClaimFreePopup"> <button class="closeBtn"></button> <div class="content"> <div class="logo_img"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/primary-logo_100x.png"> </div><h3>Claim Two FREE Gifts + Get 10% OFF</h3> <p>Don’t miss out. Sign up to get 10% off your order and receive two new products (Travel Wallet &amp; Luggage Tag). Plus, get early access to hot sales, events, and more:</p><div class="formFeild"> <input type="email" placeholder="Your email address..."> </div><div class="formFeild"> <input type="submit" value="Unlock my gifts &amp; discount" class="btn"> </div><a href="#" class="custClaimLink"> No thanks, I’ll shop without the coupon. </a> </div><div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/claim-pop-img.jpg"> </div></div></div>').appendTo('body');
	  	}
  	}

  	
 	clearInterval(waitForjQuery);
  }
}, 50); 