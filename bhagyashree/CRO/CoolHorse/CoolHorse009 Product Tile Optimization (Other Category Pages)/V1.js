var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		addcustomCtatoPlp();

    	function addcustomCtatoPlp(){
    		var intCount = 0; 
    		var intInterval = setInterval(function (){
    			intCount += 1;
    			
				if(jQuery('main.ss-content-container.main-content.ng-scope').length > 0){
	    			jQuery('main.ss-content-container.main-content.ng-scope').addClass('custMainWrapper');
	    		}

	    		if(jQuery('#js-product-list .category-product').length > 0) {
					jQuery('#js-product-list .category-product').each(function (index) {
						
						if( index == 1 && jQuery('.custGreatProduct').length == 0 ) {
							jQuery('<div class="custGreatProduct column half medium-one-third large-one-fourth category-product ng-scope"><h5>“Great product and prices I am so glad I found this site. They have so many great things and so many things I want!”<span>-Robin B</span></h5></div>').insertAfter(this);
						}

						if( jQuery(this).find('custWrapDiv').length == 0 ){
							jQuery('<div class="custCategoryWrapper"><button class="custCTAButton">QUICK ADD</button><p>30-day money-back guarantee</p></div>').appendTo(this);
						}
					});
					clearInterval(intInterval);
				}
					

    			if(intCount == 50){
    				clearInterval(intInterval);
    			}
    		},50);
    	}

    	function customPriceFilter() {
			var strURL = window.location.href;
			var strFrom = '';
			var strTo   = '';

			if(strURL.indexOf('/filter:') >= 0 ){
				strURL = strURL +'/filter:price:' + strFrom + ':'+ strTo;
			}
			else{
				strURL = strURL +'#/filter:price:15:30';
			}

			//https://shop.coolhorse.com/store/category/Tack#/filter:price:24:50

			jQuery('#ss-price .ss-grid-option .ss-grid-link .ss-grid-label:eq(0)').text().replace(/[^0-9]/gi, '');

			jQuery('#ss-price .ss-grid-option .ss-grid-link .ss-grid-label:eq(0)').text().split('to')[1].replace(/[^0-9]/gi, '');

			jQuery('#ss-price .ss-grid-option .ss-grid-link .ss-grid-label:last').text().replace(/[^0-9]/gi, '');

			jQuery('#ss-price .ss-grid-option .ss-grid-link .ss-grid-label:last').text().split('to')[1].replace(/[^0-9]/gi, '');
    	}

    	jQuery(document).on('click','button.custCTAButton', function (){
	    		console.log("on CTA click....");
	    		console.log("category Len >> " +jQuery(this).parents('.category-product').length);
	    		console.log("product Len >> " + jQuery(this).parents('.category-product').find('.category-product-name').length);
	    		console.log("p code Len >> " + jQuery(this).parents('.category-product').find('p:contains(Code:)').length);
	    		console.log("p code Len >> " + jQuery(this).parents('.category-product').find('p:contains(Code:)').text());
	    		
	    		if( jQuery(this).parents('.category-product').find('p:contains(Code:)').length > 0 ){
	    			var strCode = jQuery(this).parents('.category-product').find('p:contains(Code:)').text().trim();

		    		var strProdCode = strCode.split(':')[1].trim();
		    		console.log(strProdCode);


		    		if(strProdCode !== "" && strProdCode !== undefined && strProdCode !== null){
						jQuery.ajax({
				            type: "POST",
				            url:  "https://shop.coolhorse.com/store/BASK",
				            data:  {
				            	'Product_Code': strProdCode,
				            	'Action': 'ADPR',
				            	'Quantity': 1

				            },
				            headers: {
				                'contentType' : 'application/json'
				            },
				            success: function(data){
				                console.log("data >>> ");
				                console.log(data);
				            }
		        		});
					}
	    		}

	    	});

		jQuery(document).on('click','.ss-sidebar-container a.ss-list-link.ss-checkbox', function(){
			console.log('on filter click >>>> ');
			if(jQuery('.custCategoryWrapper').length > 0){
				jQuery('.custCategoryWrapper').remove();
				addcustomCtatoPlp();
			}			
		});

		clearInterval(waitForJquery);
    }
}, 50);
