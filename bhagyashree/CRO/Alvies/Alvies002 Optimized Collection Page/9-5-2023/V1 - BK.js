var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

    if(jQuery('.collection').length > 0){
		updateCollectionStructure();    	
    }

    function updateCollectionStructure(){
    	jQuery('.collection h2').each(function(){
		    var $this = jQuery(this);
		    if($this.nextUntil('.bfg-collection').length > 0 ){
				contents  = $this.nextUntil('.bfg-collection');
		    }
		    else{
		    	contents  = $this.nextUntil('h2');
		    }
			jQuery(contents).wrapAll('<div class="custCollectionWrap"></div>')
		});

    	var intCount 	= 0; 
    	var intInterval = setInterval(function (){
    		intCount += 1;
    		
    		if(jQuery('.collection__card .okeReviews .oke-sr-count .oke-sr-total-text').text().indexOf('Reviews') !== -1){
				jQuery('.collection__card .okeReviews .oke-sr-count .oke-sr-total-text').each(function (){
					var strElement = jQuery(this);
		   			strElement.html(strElement.html().replace(' Reviews',''));
				});
    		}

    		if(intCount === 60){
    			clearInterval(intInterval);
    		}
    	},50);

	
    	if(jQuery('.custCollectionBreakInFast').length == 0){
    		jQuery('<div class="custCollectionBreakInFast"><div class="custCollectionBreakSlider"><div class="custDesktopNoSlider"> <div class="custCollectionBreakWraper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/break-in-fast.png" class="custCollectionMobileSlider"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/handmade.png" class="custCollectionDesktopSlider"><h3>Break in fast</h3><p>Usually, boots and flops can take a while to fully break in and become comfortable. Alvie designed these to break in fast. Real fast. After just a few days, they\'ll feel like they\'ve been part of your life for years.</p></div></div><div class="custDesktopNoSlider"><div class="custCollectionBreakWraper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/built-to-fast.png" class="custCollectionMobileSlider"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/fast-break.png" class="custCollectionDesktopSlider"> <h3>Built to last</h3> <p>Real craftsmanship means having something you can pass down to the next generation. Break the vicious two-year cycle of shoe buying, and invest that extra cash in going somewhere you\'ve never been or doing something you\'ve never done.</p></div></div><div class="custDesktopNoSlider"> <div class="custCollectionBreakWraper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/designed-for-life.png" class="custCollectionMobileSlider"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/designed-for-life-large.png" class="custCollectionDesktopSlider"><h3>Designed for life</h3><p>Usually, boots and flops can take a while to fully break in and become comfortable. Alvie designed these to break in fast. Real fast. After just a few days, they\'ll feel like they\'ve been part of your life for years.</p></div></div></div></div>').insertBefore('#shopify-section-footer');


    			jQuery(window).scroll(function(){
				    if (jQuery(this).scrollTop() > 100) {
				       jQuery('.in-page-nav').addClass('custNavScroll');
				    } else {
				       jQuery('.in-page-nav').removeClass('custNavScroll');
				    }
				});


				if( jQuery(window).width() <= 767 ){
					
					jQuery('.custCollectionBreakSlider').slick({
		                    slidesToShow: 3,
		                    infinite: true,
		                    slidesToScroll: 1,
		                    centerPadding: "0",
		                    centerMode: true,
		                    dots: true, 
		                    responsive: [
		                        {
		                            breakpoint: 991,
		                            settings: {
		                                slidesToShow: 2,
		                                slidesToScroll: 1,
		                                centerMode: true,
		                                centerPadding: '0',
		                            }
		                        },
		                        {
		                            breakpoint: 860,
		                            settings: {
		                                arrows: false,
		                                centerMode: true,
		                                centerPadding: '0',
		                                slidesToShow: 1
		                            }
		                        }
		                    ]
						});
				}
			}

		}

     	clearInterval(waitForjQuery);
    } 
}, 50);