var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		updateContactFormHTML();
		addHtmlToContactPage();
  
		var oldXHR = window.XMLHttpRequest;
	  function newXHR() {
  
		  var realXHR = new oldXHR();
		  realXHR.addEventListener("readystatechange", function() {
			  if(realXHR.readyState == 4 && realXHR.status == 200){
				  setTimeout(function () {           
					   var strAjaxResponseURL  = realXHR.responseURL;
					  
					  if(jQuery('.webform-submission-form .js-form-submit.form-submit').length > 0){
						  //checking for function here
						  if(strAjaxResponseURL.indexOf('contact-us?ajax_form=') > -1){
								updateContactFormHTML();
								addHtmlToContactPage();
							  } 
					  }
  
				  }, 20); 
			  }
		  }, false);
		  return realXHR;
	  }
	  window.XMLHttpRequest = newXHR;
  
		//on browser back
		if (performance.navigation.type == 2) {
		  var intCounter = 0;
		  var intChkHtmlInterval = setInterval(function (){
			  intCounter += 1;
				  
			  if(jQuery('.custLeftColumn').length == 0 && jQuery('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content').length > 0){
				  updateContactFormHTML();
					addHtmlToContactPage();
				  clearInterval(intChkHtmlInterval);
			  }
  
			  if(intCounter === 100){
				  clearInterval(intChkHtmlInterval);
			  }
		  },50);
	  }
		
		//add custom HTML
		function addHtmlToContactPage(){
			if(jQuery('.custLeftColumn').length == 0){
			  jQuery('<div class="custLeftColumn"> <div class="imgBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/contact-img.png"></div><div class="custHelpInformation desk"> <h4>We have helped Canadians reduce their debt by up to 85%. Find out how we can help you.</h4> <div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/champion_icon.svg"> </div><div class="content"> <h5><span class="custCount">20</span> years</h5> <p>For 20 years we have been helping people just like you get out of debt</p></div></div><div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/client_icon.svg"> </div><div class="content"> <h5><span class="custCount">30 845</span> clients</h5> <p>We have helped 30845 Canadians find debt relief</p></div></div><div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/loan_icon.svg"> </div><div class="content"> <h5>$<span class="custCount">3,340,051,963</span></h5> <p>We have eliminated $3,340,051,963 in personal Canadian debt</p></div></div></div></div>').prependTo('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .group-left');
			}
  
			//for mobile
			if(jQuery('.custHelpInformation.mobile').length == 0){
				jQuery('<div class="custHelpInformation mobile"> <h4>We have helped Canadians reduce their debt by up to 85%. Find out how we can help you.</h4> <div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/champion_icon.svg"> </div><div class="content"> <h5><span class="custCount">20</span> years</h5> <p>For 20 years we have been helping people just like you get out of debt</p></div></div><div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/client_icon.svg"> </div><div class="content"> <h5><span class="custCount">30 845</span> clients</h5> <p>We have helped 30845 Canadians find debt relief</p></div></div><div class="infoBox"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/loan_icon.svg"> </div><div class="content"> <h5>$<span class="custCount">3,340,051,963</span></h5> <p>We have eliminated $3,340,051,963 in personal Canadian debt</p></div></div></div>').appendTo('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .group-middle');
			}
  
			if(jQuery('.formTexualContent').length == 0){
				jQuery('<div class="custQualifyForm"> <div class="formTexualContent"> <h2>Find out if you qualify</h2> <p class="subPara"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/bm-chat-icon.svg"> Free, confidential, no obligation consultation with a Debt Relief Consultant</p></div><div class="custCreditRangeForm"> <h4>What is your total credit card debt amount?</h4> <div class="slidecontainer"> <input type="range" min="1" max="100" value="50" class="slider" id="custCredit" name="custCredit"> <output for="custCredit" onforminput="value=custCredit.valueAsNumber;"></output> </div><div class="custBtnWraper"> <input type="button" class="webform-button--submit button button--primary js-form-submit form-submit form-type-submit btn btn-default" value="Get A Free Quote"> </div></div></div> <div class="custSpecialistForm"> <div class="formTexualContent"> <h2>Speak with a Debt Relief Specialist</h2> <p class="subPara"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/bm-chat-icon.svg"> Free, confidential, no obligation consultation with a Debt Relief Consultant</p></div></div> <div class="custQuoteWraper"> <div class="swiper custEngageHeroQuoteSlider"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="quoteBox desk"> <div class="text"> I was referred by a friend. I was hesitating, because of what they might think of me. From the first time I called to walking in the door, I was treated with respect and dignity the whole way through the process. No one judged, and everyone understood. I would recommend this company to everyone !!!! </div><cite>- Nicole C.</cite> </div></div><div class="swiper-slide"> <div class="quoteBox desk"> <div class="text"> I was referred by a friend. I was hesitating, because of what they might think of me. From the first time I called to walking in the door, I was treated with respect and dignity the whole way through the process. No one judged, and everyone understood. I would recommend this company to everyone !!!! </div><cite>- Nicole C.</cite> </div></div></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div>').prependTo('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .group-middle');
			}
  
			if(jQuery('.custAwardsSection').length == 0){
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
  
  
				jQuery('<div class="custAwardsSection"><div class="container"><h3>Award Winning Debt Relief</h3><div class="awardsLogoWraper"><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-11/Scarborough%20Mirror%20Reader%27s%20Choice%20Award.jpg" width="305" height="200" alt="Scarborough Mirror Reader\'s Choice Award" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/bbea_0-min.jpeg" width="130" height="130" alt="BBEA" typeof="foaf:Image"></div><div class="logoImg toronto-star20-logo"><img loading="lazy" src="/sites/default/files/2021-10/toronto-star-2020-min.jpeg" width="431" height="130" alt="Toronto Star 2020" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/toronto-star-2019-min.jpeg" width="295" height="130" alt="Toronto Star-2019" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/torch-min.jpeg" width="130" height="130" alt="Torch Awards 2021" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/threebest-min.jpeg" width="146" height="130" alt=" Threebest" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/torch-2020_0-min.jpeg" width="518" height="130" alt="Torch" typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/top-choice-min.jpeg" width="130" height="130" alt="Top Choice " typeof="foaf:Image"></div><div class="logoImg"><img loading="lazy" src="/sites/default/files/2021-10/alberta-business-min.jpeg" width="130" height="130" alt="Alberta Business" typeof="foaf:Image"></div></div></div></div>').insertAfter('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .row:eq(0)');
  
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
		function updateContactFormHTML(){
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
			  jQuery('.webform-submission-form .js-form-submit.form-submit').val('Find out if you qualify');
		  }
  
			  if(jQuery('.custContactFooterContain').length == 0){
				  jQuery('<p class="custContactFooterContain">A debt relief specialist will contact you today regarding your request.</p>').insertAfter('body[data-once="form-single-submit detailsAria"] #content-wrapper main article.landing-page .node__content #tile-1778 .jumbotron .container .group-middle form div[id*="edit-actions"] span');
				}
		  }
  
		  //if in case placeholders not replaced call function again
		  var intCnt = 0;
		  var intCheckInterval = setInterval(function (){
			  intCnt += 1;
				  
			  if(jQuery('.webform-submission-form .js-form-item input[name="first_name"]').attr('placeholder')!=='First Name') {
				  updateContactFormHTML();
				  addHtmlToContactPage();
				  clearInterval(intCheckInterval);
			  }
  
			  if(intCnt === 50){
				  clearInterval(intCheckInterval);
			  }
		  },100);	
		}
		

		//swiper slider
		jQuery( "head" ).append( '<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>' );
		jQuery( "head" ).append( '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />' );
		var swiper = new Swiper(".custEngageHeroQuoteSlider", {
			navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
			},
		});
	  
		clearInterval(waitForjQuery);
	}
  }, 50);