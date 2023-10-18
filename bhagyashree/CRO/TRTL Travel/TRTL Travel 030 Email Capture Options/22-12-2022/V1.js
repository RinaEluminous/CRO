var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {
  	if( sessionStorage.getItem('custHPClaimBadgeSession') === null ){
  		customClaimBadgeHP();
  	}

  	//custom HTML
  	function customClaimBadgeHP(){
		if(jQuery('.custClaimBadge').length == 0){
			jQuery('<div class="custClaimBadge"> <span class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/gift-icon.svg"> </span> Claim 2 FREE Gifts + Get 10% OFF<button class="closeBtn"></button></div><div class="custClaimFreeWraper"> <div class="overlay"></div><div class="custClaimFreePopup"> <button class="closeBtn"></button> <div class="content"> <div class="logo_img"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/primary-logo_100x.png"> </div><h3>Claim Two FREE Gifts + Get 10% OFF</h3> <p>Don’t miss out. Sign up to get 10% off your order and receive two new products (Travel Wallet &amp; Luggage Tag). Plus, get early access to hot sales, events, and more:</p><div class="formFeild"> <input type="email" placeholder="Your email address..."> <span class="custError"></span></div><div class="formFeild"> <input type="submit" value="Unlock my gifts &amp; discount" class="btn"> </div><a href="javascript:void(0);" class="custClaimLink"> No thanks, I’ll shop without the coupon. </a> </div><div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/claim-pop-img.jpg"> </div></div></div>').appendTo('body');
	  	}
  	}

  	//on scroll manage sticky claim badge top css
  	jQuery(window).scroll(function(){
  		if(jQuery(window).width() > 767){
  			if( jQuery('#fixed-header').hasClass('scrolled-down') ){
	        	jQuery('.custClaimBadge').css("top","20px");
		    }
		    else{
		    	jQuery('.custClaimBadge').css("top","124px");
		    }
  		}
  	});

  	//claim badge click
  	jQuery(document).on("click",".custClaimBadge", function (event){
  		if(event.target.className == 'closeBtn' ){
  			jQuery(this).fadeOut();
  		}
  		else{
  			jQuery(".custClaimFreeWraper").fadeIn().css({'display': 'flex'});
  			jQuery(this).fadeOut();
  		}
  		
  		sessionStorage.setItem("custHPClaimBadgeSession","Yes");
  	});

  	//popup - 'no thanks' link click
  	jQuery(document).on("click",".custClaimFreeWraper .custClaimFreePopup .content a.custClaimLink", function () {
		jQuery(".custClaimFreeWraper").fadeOut();
  	});
  	
  	//popup - email on blur validation
  	jQuery(document).on("blur",'.custClaimFreeWraper .custClaimFreePopup .content .formFeild input[type="email"]', function (){
  		validateEmail();
  	});

  	//popup - submit Cta validation and redirection
  	jQuery(document).on("click",".custClaimFreeWraper .custClaimFreePopup .content .formFeild input.btn", function (){
  		var isValid = validateEmail();
  		if(isValid){
  			window.location.href = "https://trtltravel.com/collections/holiday-bundles";
  		}
  	});

  	//popup - close CTA and overlay click
  	jQuery(document).on("click",".custClaimFreePopup button.closeBtn,.custClaimFreeWraper .overlay",function() {
  		jQuery(".custClaimFreeWraper").fadeOut();
  	});

  	//popup - email validation
  	function validateEmail(){
  		jQuery(".custError").css({'display': 'none'});

  		var strEmail = jQuery('.custClaimFreeWraper .custClaimFreePopup .content .formFeild input[type="email"]').val().trim();
  		
  		if( strEmail !== null && strEmail !== '' && strEmail !== undefined ) {
	  		if(IsEmail(strEmail) == false){
		        jQuery(".custError").text("Please enter valid email address");
		        jQuery(".custError").css({'display': 'block'});
		        return false;
		    }
		    else{
		    	return true;
		    }
		}
		else{
			jQuery(".custError").text("Please enter email address");
			jQuery(".custError").css({'display': 'block'});
			return false;
		}
  	}

  	// email checker
	function IsEmail(email) {
	  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  if(!regex.test(email)) {
	  	return false;
	  } else {
	    return true;
	  }
	}

 	clearInterval(waitForjQuery);
  }
}, 50); 