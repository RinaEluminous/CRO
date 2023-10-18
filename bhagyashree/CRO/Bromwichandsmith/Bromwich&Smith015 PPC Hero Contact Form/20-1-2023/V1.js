var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
  	//link css
	if(jQuery('#custBromwichCSS').length == 0 ){
		jQuery("head").append("<link rel='stylesheet' href='https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Bromwich-Smith015-CSS.css' type='text/css' media='screen' id='custBromwichCSS'>");
  	}

  	//functions to modify existing contact form add custom html 
	modifyContactFormHTML();
	addCustomHtmlToPage();
	custLeftPanelHtml();
  
	var oldXHR = window.XMLHttpRequest;
	function newXHR() {
	    var realXHR = new oldXHR();
	    realXHR.addEventListener("readystatechange", function() {
			if(realXHR.readyState == 4 && realXHR.status == 200){
			  setTimeout(function () {           
				var strAjaxResponseURL  = realXHR.responseURL;
				  	
				if(jQuery('.webform-submission-form .js-form-submit.form-submit').length > 0){
				    
				    //checking for ajax call on form submit
				    if(strAjaxResponseURL.indexOf('contact-us?ajax_form=') > -1 || strAjaxResponseURL.indexOf('?ajax_form=') > -1 || strAjaxResponseURL.indexOf('calgary-bankruptcy-alternatives?ajax_form=') > -1){
						modifyContactFormHTML();
						custLeftPanelHtml();
						addCustomHtmlToPage();
					} 
				}

			}, 20); 
		}
	}, false);
	return realXHR;
	}

	window.XMLHttpRequest = newXHR;
  
	//call functions again on browser back
	if (performance.navigation.type == 2) {
	  	var intCounter = 0;
	  	var intChkHtmlInterval = setInterval(function (){
		  	intCounter += 1;
			  

		  	if(jQuery('.custLeftPanelSection').length == 0 && jQuery('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content').length > 0){
			  	
			  	modifyContactFormHTML();
			  	custLeftPanelHtml();
			  	addCustomHtmlToPage();
			  	
			  	clearInterval(intChkHtmlInterval);
		  	}

		  	if(jQuery('.customMainContentWrapper').length == 0 && jQuery('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content').length > 0){
			  addCustomHtmlToPage();
			  clearInterval(intChkHtmlInterval);
			}

		  	if(intCounter === 100){
			  clearInterval(intChkHtmlInterval);
		  	}
	  	},50);
	}
  
	//add custom HTML to page
	function addCustomHtmlToPage(){
		if(jQuery('.customMainContentWrapper').length == 0){
			jQuery('<div class="customMainContentWrapper"> <div class="debtFreeSection"> <div class="container"> <h2>Finally Live Debt Free</h2> <h3>See how much we can save you on your debt</h3> <div class="row"> <div class="div col-md-6"> <div class="graphBox"> <h4>For example if your current debt owed is $55,000 the total cost you would have to pay over 5 years</h4><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/geo-graph-img.png" alt=""> </div></div><div class="div col-md-6"> <div class="repaymentBox"> <h4>Customer monthly repayments before and after debt help</h4> <div class="helpBoxWraper"> <div class="row"> <div class="col-sm-6"> <div class="helpBox dislike"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/dislike-icon.svg" alt=""> <div class="helpTitle">Before help</div><div class="helpPrice">$910</div></div></div><div class="col-sm-6"> <div class="helpBox like"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/like-icon.svg" alt=""> <div class="helpTitle">After help</div><div class="helpPrice">$105</div></div></div></div></div><p>Monthly payments are based on individual financial circumstances</p><div class="btnWraper"><a href="javascript:void(0);">Get your FREE savings estimate</a></div></div></div></div></div></div><div class="debtSolutionSection"> <div class="container"> <h2>No Matter Your Debt We Have A Solution For You</h2> <h3>See how much we can save you on your debt</h3> <ul> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/credit-card-icon.svg" alt=""> <h6>Credit Card</h6> </li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/income-tax-icon.svg" alt=""> <h6>Income Tax</h6> </li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/lines-of-credit.svg" alt=""> <h6>Loans & Lines of Credit</h6> </li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/payday-loans-icon.svg" alt=""> <h6>Payday Loans</h6> </li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/legal-fees-icon.svg" alt=""> <h6>Legal Fees</h6> </li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/debts-icon.svg" alt=""> <h6>Debts in Collection</h6> </li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/students-loan-icon.svg" alt=""> <h6>Student Loans</h6> </li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/phone-debts-icon.svg" alt=""> <h6>Cell Phone Debt</h6> </li></ul> <div class="btnWraper"><a href="javascript:void(0);">Check if you qualify</a></div></div></div><div class="howWeHelpYouSection forgivnessSection"> <div class="container"> <h2>How does debt forgiveness work?</h2> <h3>At Bromwich+Smith we offer a powerful debt relief solution called a Consumer Proposal, which usually reduces debt to only a percentage of original amount owed. The rest is forgiven.</h3> <div class="row mb-100"> <div class="col-6"><img class="img-fluid" src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/geo-img-1.png"></div><div class="col-6"> <ul> <li><b>Eliminating debt shouldn\'t cost you more money!</b> Only a Licensed Insolvency Trustee like Bromwich+Smith has the legal authority to administer a Consumer Proposal for you. In fact, if an online or offline debt relief service offers a Consumer Proposal, ask if they are Licensed Insolvency Trustees. If they are not, they will by law be required to engage an external Trustee, which could add their unnecessary fees to the process.</li><li><b>Legally binding on all creditors,</b> including CRA Taxes, Credit Cards, Payday Loans, Bills and all other unsecured debt.</li><li><b>Up to 5 years to pay, interest free!</b> Get off the interest treadmill. There are absolutely no interest charges with a Consumer Proposal, and a Proposal can be paid over 5 years, with all debt combined into a single monthly payment.</li></ul> </div></div><div class="row mb-100"> <div class="col-6"> <ul> <li><b>Immediately stops all creditor calls and actions.</b> All creditor collections and legal actions must stop. No more bothersome calls or stressful letters. If wages are being garnisheed, this too is stopped.</li><li><b>Does not involve your assets.</b> Your home, car and other possessions are not touched by a Consumer Proposal.</li><li><b>No Hidden Fees.</b> We are paid out of the settlement to your creditors.</li></ul> </div><div class="col-6"><img class="img-fluid" src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/geo-img-2.png"></div></div><div class="confidencial-wt-box"> <h4>Unbiased Nonjudmental & Completely Confidential</h4> <div class="btnWraper"><a href="javascript:void(0);">See how we can help you</a> </div></div></div></div><div class="custTestimonialWraper"> <div class="container"><iframe src="https://embedsocial.com/api/reviews/widget/6c93c4f3c8e14b81ff6176e125eb52bbf9fcc5dc/"></iframe> </div></div></div>').appendTo('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content');
		}
	}
		
	//add custom HTML to the top left panel
	function custLeftPanelHtml(){
		
		if(jQuery('.custLeftPanelSection').length == 0){
			//Get dynamic page name
			const url		 =  window.location.pathname
			const arrSegment = url.split("-");
			var strPage  	 = arrSegment[0].replace('/','').trim();

			if(strPage == 'new'){
				strPage	= strPage +' '+ arrSegment[1].trim();
			}

			if(jQuery('nav.navbar.navbar-default.navbar-fixed-top').length > 0 && jQuery( window ).width() <= 767 ) {
				var intHeight = jQuery('nav.navbar.navbar-default.navbar-fixed-top').outerHeight();
				jQuery('div.node__content').css('margin-top', intHeight + 'px');
			}

			//custom class for tile
			if(jQuery('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content  div[id^=tile-] .jumbotron .container:has(.group-left)').length > 0){
				jQuery('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content div[id^=tile-] .webform-ajax-form-wrapper').parents('div[id^="tile-"]').addClass('customTileContainer');
			}

			jQuery('<div class="custLeftPanelSection"><div class="custHeroSection"> <div class="container"> <div class="custHeroContent"> <h5>' +strPage+ ' Emergency Government Debt Relief</h5> <h2>Reduce Your Debt Up To 85%</h2> <ul> <li>Roll your debt into one easy payment with 0% interest.</li><li>No more annoying collection calls from harrassing creditors</li><li>Conquer debt now and learn how to rebuild your credit</li></ul> <div class="heroBthSection"> <div class="btnWraper"> <div class="reviews"><a href="#review-widget-slider"> <div class="googleIcon"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/google-icon.svg"> </div><div class="reviewContent"> <div class="reviewsStarWraper"> <div class="starsWraper"> <div class="starsCount">4.9</div><div class="starsListing"><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Star-icon.svg"></span> </div></div></div><div class="reviewsNumber">976 Google Reviews</div></div></a></div></div></div></div><div class="custHeroImage"><img class="img-fluid" src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/geo-hero-img.png"></div></div></div>').prependTo('.customTileContainer .group-left');
			}	

			if(jQuery('.custAwardWinningBlock').length == 0) {

				var script  = document.createElement('script');
				script.type = 'text/javascript';
				script.src  = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js';
				document.getElementsByTagName('head')[0].appendChild(script);

				var head  = document.getElementsByTagName('HEAD')[0];
				var link  = document.createElement('link');
				link.rel  = 'stylesheet';
				link.type = 'text/css';
				link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css';
				head.appendChild(link);

				var head  = document.getElementsByTagName('HEAD')[0];
				var link  = document.createElement('link');
				link.rel  = 'stylesheet';
				link.type = 'text/css';
				link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css';
				head.appendChild(link);
	  
				jQuery('<div class="custAwardWinningBlock"><div class="container"><h3>Award Winning Debt Relief</h3><div class="awardsLogoWraper"><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-11/Scarborough%20Mirror%20Reader%27s%20Choice%20Award.jpg" width="305" height="200" alt="Scarborough Mirror Reader\'s Choice Award" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/bbea_0-min.jpeg" width="130" height="130" alt="BBEA" typeof="foaf:Image"></div><div class="logoImg toronto-star20-logo"><img loading="lazy" src="/sites/default/files/2021-10/toronto-star-2020-min.jpeg" width="431" height="130" alt="Toronto Star 2020" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/toronto-star-2019-min.jpeg" width="295" height="130" alt="Toronto Star-2019" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/torch-min.jpeg" width="130" height="130" alt="Torch Awards 2021" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/threebest-min.jpeg" width="146" height="130" alt=" Threebest" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/torch-2020_0-min.jpeg" width="518" height="130" alt="Torch" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/top-choice-min.jpeg" width="130" height="130" alt="Top Choice " typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/alberta-business-min.jpeg" width="130" height="130" alt="Alberta Business" typeof="foaf:Image"></div></div></div></div>').insertAfter('.customTileContainer .row:eq(0)');

				 	var intSliderCnt = 0;
				  	var intSliderInterval = setInterval(function (){
					  	intSliderCnt += 1;
					  	if (jQuery.fn.slick){
						  	//Slick initialization 
						    jQuery('.awardsLogoWraper').slick({
								dots: true,
								infinite: true,
								slidesToShow: 1,
								variableWidth: true,
						    });
					  
						clearInterval(intSliderInterval);
					  }
	  
					  if(intSliderCnt === 100){
						  clearInterval(intSliderInterval);
					  }
				  },100); 			
			}
		}
  
		//update form structure
		function modifyContactFormHTML(){
			if(jQuery('.webform-submission-form').length > 0){
  
			   jQuery('.webform-submission-form .js-form-item input[name="first_name"]').attr('placeholder','First Name');
  
			   jQuery('.webform-submission-form .js-form-item input[name="last_name"]').attr('placeholder','Last Name');
  
			   jQuery('.webform-submission-form .js-form-item input[name="email"]').attr('placeholder','Your Email');
  
			   jQuery('.webform-submission-form .js-form-item input[name="phone_number"]').attr('placeholder','Your Phone Number');
  
			  jQuery('.webform-submission-form .js-form-item input[name="city"]').attr('placeholder','Your City');
  
			  jQuery(".webform-submission-form .form-select.custom-select button[data-id*='edit-province'] span.filter-option").text('Your Province');
  
			  jQuery('.webform-submission-form .js-form-item input[name="postal_code"]').attr('placeholder','Postal Code');
  
			  	if(jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation label').length > 0){
				  
					jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation label').text('How can we Help?');
					
					if(jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation textarea.form-control').length > 0){
						jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation textarea.form-control').attr('placeholder','');
					}
		  		}
  
				if(jQuery('.webform-submission-form .js-form-submit.form-submit').length > 0){
					//change form submit CTA text
					jQuery('.webform-submission-form .js-form-submit.form-submit').val('Book Your Free Consultation');
					//display tile div using custom class
					jQuery('.customTileContainer').show();
				}
		  	}
  
			//if in case placeholders not replaced call function again
			var intCnt = 0;
			var intCheckInterval = setInterval(function (){
				intCnt += 1;
				if(jQuery('.webform-submission-form .js-form-item input[name="first_name"]').attr('placeholder')!=='First Name') {
					modifyContactFormHTML();
					custLeftPanelHtml();
					clearInterval(intCheckInterval);
				}

				//display tile div using custom class
				if(jQuery('.customTileContainer').css('display') !== 'block' ){
					jQuery('.customTileContainer').show();
				}
  
				if(intCnt === 50){
					clearInterval(intCheckInterval);
				}

		  },100);	
		}

		//On click of CTA scroll page to top
		jQuery(document).on('click','.customMainContentWrapper .btnWraper > a,.customMainContentWrapper .btnWraper>a', function () {
			
			if(jQuery('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content div[id^=tile-] .webform-ajax-form-wrapper').length > 0){
					jQuery("html, body").animate({ 
						scrollTop: jQuery('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content div[id^=tile-] .webform-ajax-form-wrapper').offset().top - 150
				}, 550);
			}
			

		});
	  
		clearInterval(waitForjQuery);
	}
  }, 50);