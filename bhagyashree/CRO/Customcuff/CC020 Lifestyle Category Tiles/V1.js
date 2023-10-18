var waitForJquery = setInterval(function() { 
   
   if (typeof jQuery != 'undefined') {
   		
   		if(jQuery('.CollectionMain').length > 0){
			var intTotalProducts = jQuery('.ProductList .Grid__Cell').length;
			var intCount 		 = 6;
			var elementArray     = [];
			var strFirstImg      = "";
			rePositionCategoryCollection();
			onCollectionPageLoad();
			getProductMainImgFromPDP();
			addCustProdCtaToCollection();
		}

		function addCustProdCtaToCollection(){
		    jQuery(".CollectionMain .ProductItem__Wrapper").each(function () {
			   if(jQuery(this).find('.custCollectionProductCta').length == 0 ){
			   	    var strURL = jQuery(this).find('a.ProductItem__ImageWrapper').attr('href');
					jQuery('<a href="'+strURL+'" class="custCollectionProductCta">Customize</a>').appendTo(this);
			   }
			});

	 	}
		
		function getProductMainImgFromPDP() {
			jQuery(".ProductList .Grid__Cell .ProductItem__Wrapper a.ProductItem__ImageWrapper").each(function () {
		        elementArray.push(jQuery(this));
		    });

		    // First ajax call.
		    doAjax(0);
		}

	    //Function to ajax fire
	    function doAjax(arrCount) {
	        var strURL 		= elementArray[arrCount].attr("href");
	        var strElement 	= elementArray[arrCount];
	        $.ajax({
	            url:  "https://www.customcuff.co/"+strURL,
	            type: "GET",
	            dataType: "html",
	            cache: false,
	            success: function (html) {    
	            	var imgSrc = jQuery(html).find(".Product__SlideItem").find('img:last').attr("src");

				    if(imgSrc === undefined || imgSrc.indexOf('width') !== -1 ) {
		            	imgSrc = jQuery(html).find(".Product__SlideItem").find('img:last').attr("data-original-src");
				    }

					strElement.find('img.ProductItem__Image:last').attr('cust-lifestyle-img',imgSrc);
					strElement.find('img.ProductItem__Image:last').attr('src',imgSrc);

	                if ( arrCount < elementArray.length - 1  ) {
	                    //Next ajax call when current ajax call has been finished.
						arrCount++;
						doAjax(arrCount);
	                	
	            	}
	       		}
	        });
	    }
		
		//re-position the category roundal block
   		function rePositionCategoryCollection(){
   			var intTimeRuns = 0;
   			var intInterval = setInterval(function () {
   				intTimeRuns += 1;

   				if(jQuery('.shopify-custom-collection-list').parents('.shopify-section') > 0 && jQuery('.CollectionMain').length > 0 ){
   					var strElment = jQuery('.shopify-custom-collection-list').parents('.shopify-section');
					jQuery(strElment).insertBefore('.CollectionMain');
   				}

   				if(intTimeRuns === 30 ){
   					var strElment = jQuery('.shopify-custom-collection-list').parents('.shopify-section');
					jQuery(strElment).insertBefore('.CollectionMain');
					jQuery('.shopify-custom-collection-list').css('display','flex');
					clearInterval(intInterval);
   				}

   			},100);
  		}

		function onCollectionPageLoad() {
			
			jQuery('.ProductList .Grid__Cell:lt('+intCount+')').css('display','inline-block');
			
			if(intTotalProducts > 6 && jQuery('.custShopMoreCtaWrapper').length == 0) {
				jQuery('<div class="custShopMoreCtaWrapper"><button class="shopMoreBtn">Show More</button></div>').insertAfter('.CollectionInner .CollectionInner__Products .ProductListWrapper');
			}
		}

 		//on click of the 'Show more' 
		jQuery(document).on('click','.custShopMoreCtaWrapper', function () {
			intCount = (intCount+3 <= intTotalProducts) ? intCount+3 : intTotalProducts;
			
			jQuery('.ProductList .Grid__Cell:lt('+intCount+')').css('display','inline-block');

			if(intCount == intTotalProducts) {
				jQuery(this).hide();
				jQuery('.CollectionInner .Pagination').show();
			}
		});

		//on click of the sort 
		jQuery(document).on('click','.template-collection #collection-sort-popover .Popover__ValueList .Popover__Value',function (){
			
			setTimeout(function (){
				intTotalProducts = jQuery('.ProductList .Grid__Cell').length;
				intCount 		 = 6;
				onCollectionPageLoad();
				addCustProdCtaToCollection();
			},750);
		});

		
		//on mouse over and out change image src
		jQuery(document).on({
		    mouseenter: function () {
		    	var strImg = jQuery(this).find('img.ProductItem__Image:last').prev("img").attr('src');
		    	if(strImg !== undefined ) {
		    		jQuery(this).find('img:last').attr('src',strImg);
		    	}
		    },
		    mouseleave: function () {
		    	var strImg = jQuery(this).find('img.ProductItem__Image:last').attr('cust-lifestyle-img');
		    	if(strImg !== undefined ) {
		    		jQuery(this).find('img.ProductItem__Image:last').attr('src',strImg);
		    	}
		    	else{
		    		//if no image found, then using ajax call get image 
					var strURL = jQuery(this).attr("href");
					var $this  = jQuery(this);
					$.ajax({
			            url :"https://www.customcuff.co/"+strURL,
			            type : "GET",
			            dataType : "html",
			            cache : false,
			            success : function (html) {    
			            	var imgSrc = jQuery(html).find(".Product__SlideItem").find('img:last').attr("src");
			            	
			            	console.log("Ajax imgSrc >> " + imgSrc)
			            	if(imgSrc === undefined || imgSrc.indexOf('width') !== -1 ) {
				            	imgSrc = jQuery(html).find(".Product__SlideItem").find('img:last').attr("data-original-src");
						    }
			            	
							$this.find('img.ProductItem__Image').last().attr('cust-lifestyle-img',imgSrc);
							$this.find('img.ProductItem__Image:last').attr('src',imgSrc);
			       		}
			        });
				}

			    
		    }
		}, ".ProductList .Grid__Cell a.ProductItem__ImageWrapper"); 


		clearInterval(waitForJquery);
    }
}, 50);  