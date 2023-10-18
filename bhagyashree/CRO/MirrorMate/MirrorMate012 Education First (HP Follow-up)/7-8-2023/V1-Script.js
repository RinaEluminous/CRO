var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined' && window.MirrorMate012String1 && window.MirrorMate012String2) {
		var flag = 0;
	
		//function to add custom HTML to the Home Page
		if(jQuery('.template-index').length > 0){
			addCustHTMLForHpEducationFirst();
		}
		
		//If user is redirected from Home page to FAQ page, then scroll it to second FAQ section
		if(jQuery('#frequently-asked-questions-faq-mirrormate').length > 0 && sessionStorage.getItem('custFAQRedirect') !== null ) {
			setTimeout(function (){
				jQuery('html,body').animate({
					scrollTop: jQuery(".wrapper .content-container .faqsectiondiv:eq(1)").offset().top-200
				}); 
				
				if(jQuery(".wrapper .faqsectiondiv:eq(1) .faqpage #section1").hasClass('accordion-close')){
					jQuery(".wrapper .faqsectiondiv:eq(1) .faqpage #section1")[0].click();
				}
				sessionStorage.removeItem('custFAQRedirect');
			},1500);
		}
		
		function addCustHTMLForHpEducationFirst () {
			//change footer About us link
			if(jQuery('footer.site-footer ul li a:contains(About)').length > 0){
				jQuery('footer.site-footer ul li a:contains(About)').attr('href','https://www.mirrormate.com/pages/about-us');
			}
		
			//add custom HTML
			if (jQuery('.custMirrorMateHtmlSection').length == 0) {
				jQuery('<div class="custMirrorMateHtmlSection">'+window.MirrorMate012String1+window.MirrorMate012String2+'</div>').prependTo('.main-content');
			}
		
			//make the heading text in camel case 
			if(jQuery('.custom-content-container .custom__item .content h1').length > 0){
				var str =  jQuery('.custom-content-container .custom__item .content h1').text();
					str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
					return letter.toUpperCase();
				});
				jQuery('.custom-content-container .custom__item .content h1').text(str);
			}
		
		
			jQuery('.custHowItWorksVideoPopup button#custPlayButton').trigger('click');
		
		
			if (jQuery('.shopify-section .custom-content .content .richtext .customBlueButton').length == 0) {
				jQuery('<a href="https://www.mirrormate.com/collections/all-frames" class="customBlueButton">SHOP POPULAR FRAMES</a>').appendTo('.shopify-section .custom-content .content .richtext');
			}
		
			//re-position the FQA at the last after the default section
			if(jQuery('.main-content .shopify-section:last').length > 0){
				jQuery('.custFAQBlock').insertAfter('.main-content .shopify-section:last');	
			}		
		
			if (jQuery('#custSlickSliderJS').length == 0) {
				jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" id="custSlickSliderJS"></script>');
			}
		
			if (jQuery('#custSlickSliderCSS').length == 0) {
				jQuery("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" id="custSlickSliderCSS" />');
			}
		
			//initialize sliders
			var intSlickCnt = 0;
			var intSlickInterval = setInterval(function() {
				intSlickCnt += 1;
				
				if (typeof jQuery().slick !== 'undefined') {
					
					var colorSlidesPerPage = 6,maxColorPages = 0,slidesPerPage = 5,maxPages = 0;
				   
					   //set the number of dots to show for slider
					jQuery(".custMostPopulerColorSlider").on("init", function(event, slick) {
						maxColorPages = Math.ceil(slick.slideCount / colorSlidesPerPage);
					});
		
					jQuery(".custMostPopulerColorSlider").slick({
						dots: true,
						infinite: true,
						arrows: true,
						slidesToShow: colorSlidesPerPage,
						slidesToScroll: 3,
						dotsClass: 'slick-dots',
						initialSlide: 0,
						responsive: [{
								breakpoint: 992,
								settings: {
									centerMode: true,
									centerPadding: '80px',
									slidesToShow: 3,
									initialSlide: 1,
									dots: false,
								}
							},
							{
								breakpoint: 768,
								settings: {
									centerMode: true,
									centerPadding: '30px',
									slidesToShow: 2,
									initialSlide: 1,
									dots: false,
								}
							}
						]
					});
		
					//set the number of dots to show for slider
					jQuery(".custClientReviewSlider").on("init", function(event, slick) {
						maxPages = Math.ceil(slick.slideCount / slidesPerPage);
					});
		
					jQuery(".custClientReviewSlider").slick({
						slidesToShow: slidesPerPage,
						slidesToScroll: slidesPerPage,
						autoplay: true,
						arrows: true,
						dots: true,
						infinite: true,
						dotsClass: 'slick-dots',
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									dots: false,
									slidesToShow: 3,
									slidesToScroll: 3,
									centerMode: true,
									centerPadding: '80px',
								}
							},
							{
								breakpoint: 769,
								settings: {
									dots: false,
									slidesToShow: 2,
									slidesToScroll: 2,
									centerMode: true,
									centerPadding: '60px',
								}
								},
								{
								breakpoint: 641,
								settings: {
									dots: false,
									slidesToShow: 2,
									slidesToScroll: 2,
									centerMode: true,
									centerPadding: '30px',
								}
							}
						]
					});
		
					jQuery(".custMainVideoBlock").slick({
						slidesToShow: 3,
						infinite: true,
						slidesToScroll: 1,
						arrows: true,
						dots: true,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									centerPadding: '30px',
									slidesToShow: 3,
									dots: true,
								}
							},
							{
								breakpoint: 769,
								settings: {
									centerPadding: '20px',
									slidesToShow: 1
								}
							}
						]
					});
					
					clearInterval(intSlickInterval);
				}
		
				if (intSlickCnt === 80) {
					jQuery(".custMostPopulerColorSlider").show();
					clearInterval(intSlickInterval);
				}
			}, 50);
		}
		
		function updateTheHeadingStyle(){
			//make the heading text in camel case 
			var intCount    = 0;
			var intInterval = setInterval(function () {
				intCount   += 1;
		
				if(jQuery('.ssw-instagram-widget .gw-container h2').length > 0){
					flag = 1;
					var str =  jQuery('.ssw-instagram-widget .gw-container h2').text();
						str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
						return letter.toUpperCase();
					});
					jQuery('.ssw-instagram-widget .gw-container h2').text(str);
				}
		
				if(intCount == 80){
					clearInterval(intInterval);
				}
			},50);
		}
		
		//on click of the FAQ open, close all other FQA accodion and open recent one
		 jQuery(document).on('click','.custFAQBlock input[type="checkbox"]',function(){
			 jQuery('.custFAQBlock input[type="checkbox"]').not(this).prop("checked", false);
		 });	
		
		 jQuery(window).scroll(function(){
			if(flag == 0){
				updateTheHeadingStyle();
			}
		});
		
		 //on click of the play CTA, play the video
		jQuery(document).on('click','.custHowItWorksVideoPopup button#custPlayButton',function(){
			 jQuery(this).hide();
			 var mediaVideo = jQuery("#custHowItWorkVideo").get(0);
			 mediaVideo.play();
		 });	
		
		//on click of the video CTA, pause the video
		 jQuery(document).on('click','.custHowItWorksVideoPopup #custHowItWorkVideo',function(){
			 var mediaVideo = jQuery("#custHowItWorkVideo").get(0);
			 mediaVideo.pause();
			 jQuery('.custHowItWorksVideoPopup button#custPlayButton').show();
		 });	
		
		 //on click of the Works On Any Mirror image redirect to FAQ
		 jQuery(document).on('click','.custWorksOnAnyMirror ul li a',function(){
			 sessionStorage.setItem('custFAQRedirect','1');
		 });	

		jQuery('body').css('opacity','1')
        clearInterval(waitForjQuery);
    }
}, 50); 