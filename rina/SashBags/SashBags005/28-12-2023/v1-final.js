var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        //collection all page condition
        if (jQuery("#MainContent .collection").length > 0) {
            addCustFilterHtml();
           
        }
        
    
        function addCustFilterHtml() {
            //added custom html for filter section
            if (jQuery("#product-grid").length > 0) {

                jQuery('<div id="filters"><h1>Material</h1><label><input type="checkbox" value="Leather">Leather</label><label><input type="checkbox" value="Faux Leather">Faux Leather</label><div class="fringe"><h4>Fringe</h4><label><input type="checkbox" value="Fringe">Yes</label><label><input type="checkbox" value="nofringe">No</label></div><div class="color"><h4>Color</h4><label><input type="checkbox" value="yes">Black</label><label><input type="checkbox" value="no">Brown</label><label><input type="checkbox" value="no">Silver</label><label><input type="checkbox" value="no">Gold</label><label><input type="checkbox" value="no">Pink</label><label><input type="checkbox" value="Durga">Red</label><label><input type="checkbox" value="Sapphire">Blue</label><label><input type="checkbox" value="no">Orange</label><label><input type="checkbox" value="no">Yellow</label><label><input type="checkbox" value="no">Green</label><label><input type="checkbox" value="no">Bronze</label><label><input type="checkbox" value="no">Gray</label><label><input type="checkbox" value="no">Tan</label></div></div>').insertBefore('#product-grid');
            }

            //add custome slider 

            if (jQuery('#custSwiperSliderJS').length == 0) {
                jQuery("head").append('<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
		        }
		        if(jQuery('#custSwiperSliderCSS').length == 0){
		            jQuery( "head" ).append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" id="custSwiperSliderCSS" />');

		        }

 				var intSwiperCnt = 0;
			    var intSwiperInterval = setInterval(function () {
			      	intSwiperCnt += 1;

		      	 	if (typeof Swiper !== 'undefined'){
		         		var swiper = new Swiper(".mySwiper", {
						slidesPerView: 1,						
						loop: true,
						spaceBetween: 20,
						pagination: {
							el: ".swiper-pagination",
							clickable: true,
						},
					    breakpoints: {
					    	1024: {
					          slidesPerView: 3,
					          spaceBetween: 20,
					        },
					        991: {
					            slidesPerView: 2,
					            spaceBetweenSlides: 20
					        },
					        320: {
					          slidesPerView: 1,
					          spaceBetween: 20,
					        },
						},
			    	});

					clearInterval(intSwiperInterval);
		      	}

		      	if(intSwiperCnt === 50){
		      		clearInterval(intSwiperInterval);
		      	}

		    },70);

        }

        function filterProducts() {
            var selectedCategories = [];

            // Get selected categories
            jQuery('input[type="checkbox"]:checked').each(function() {
                selectedCategories.push(jQuery(this).val());
            });
            console.log('selectedCategories >>>>>>>>>>>>>', selectedCategories)
            if (selectedCategories.length > 0) {
                // Hide all products
                jQuery('#product-grid .grid__item').hide();
                selectedCategories.forEach(function(category) {
                    console.log('cate >>>>>>>>>>>>>', category)
                    jQuery('#product-grid .grid__item:contains(' + category + ')').show();
                });

            } else {
                jQuery('#product-grid .grid__item').show();
            }
        }

        // filter changes
        jQuery(document).on('change', 'input[type="checkbox"]', function() {
            filterProducts();
            //pagination condition
            var intProductCount = jQuery('#product-grid .grid__item[style*="display: list-item;"]').length;
            jQuery("#ProductCountDesktop").text(intProductCount + ' products');
            if (intProductCount < 16) {
                console.log("less than");
                jQuery('.pagination-wrapper').css('display', 'none');
            } else {
                console.log("More than");
                jQuery('.pagination-wrapper').css('display', 'block');
            }
        });

        //sort by change
        jQuery(document).on('change', '#SortBy', function() {
            addCustFilterHtml();
        });

        //life style image effect on mouse hover
        jQuery(document).on({

            mouseenter: function () {

                var strImg = jQuery(this).find('img.ProductItem__Image:last').prev("img").attr('src');

                if (strImg !== undefined) {

                    jQuery(this).find('img:last').attr('src', strImg);

                }

            },

            mouseleave: function () {

                var strImg = jQuery(this).find('img.ProductItem__Image:last').attr('cust-lifestyle-img');

                if (strImg !== undefined) {

                    jQuery(this).find('img.ProductItem__Image:last').attr('src', strImg);

                }

            
 
            }

        }, ".ProductList .Grid__Cell a.ProductItem__ImageWrapper");

        clearInterval(waitForJquery);
    }
}, 50);