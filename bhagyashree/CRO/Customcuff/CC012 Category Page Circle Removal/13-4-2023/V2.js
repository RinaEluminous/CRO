var waitForJquery = setInterval(function() { 
   
   if (typeof jQuery != 'undefined') {
   		
   		if(jQuery('.CollectionMain').length > 0){
			var intTotalProducts = jQuery('.ProductList .Grid__Cell').length;
			var intCount 		 = 6;
			var elementArray     = [];
			rePositionCategorySection();
			onPageLoadV2();
			getProductMainImgV2();
		}

		
		function getProductMainImgV2() {
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
	        console.log("strURL >>> ");
	        console.log(strURL);
	        $.ajax({
	            url:  "https://www.customcuff.co/"+strURL,
	            type: "GET",
	            dataType: "html",
	            cache: false,
	            success: function (html) {    
	            	var imgSrc  = jQuery(html).find(".Product__SlideItem").find('img:last').attr("src");
					
					//console.log("arrCount >> " +arrCount);
				    console.log("imgSrc >>>> ");
				    console.log(imgSrc);

				    if(imgSrc === undefined || imgSrc.indexOf('width') !== -1 ) {
		            	imgSrc = jQuery(html).find(".Product__SlideItem").find('img:last').attr("data-original-src");
				    }

	                if ( arrCount < elementArray.length - 1 ) {
	                    //Next ajax call when current ajax call has been finished.
	                	arrCount++;
						strElement.find('img.ProductItem__Image:last').attr('cust-img',imgSrc);
	                	doAjax(arrCount);
	            	}
	       		}
	        });
	    }
		
		//re-position the category roundal block
   		function rePositionCategorySection(){
   			var intTimeRuns = 0;
   			var intInterval = setInterval(function () {
   				intTimeRuns += 1;
   				console.log(" category len >> " + jQuery('.shopify-custom-collection-list').length );
   				console.log("Collection Len >> " + jQuery('.CollectionMain').length);

   				if(jQuery('.shopify-custom-collection-list').parents('.shopify-section') > 0 && jQuery('.CollectionMain').length > 0 ){
   					var strElment = jQuery('.shopify-custom-collection-list').parents('.shopify-section');
					jQuery(strElment).insertBefore('.CollectionMain');
					//jQuery('.shopify-custom-collection-list').css('display','flex');
					//clearInterval(intInterval);
   				}

   				if(intTimeRuns === 30 ){
   					var strElment = jQuery('.shopify-custom-collection-list').parents('.shopify-section');
					jQuery(strElment).insertBefore('.CollectionMain');
					jQuery('.shopify-custom-collection-list').css('display','flex');
					clearInterval(intInterval);
   				}

   			},100);

   			/*setTimeout(function (){
   				if( jQuery('.shopify-custom-collection-list').length > 0 && jQuery('.CollectionMain').length > 0 ){
   					var strElment = jQuery('.shopify-custom-collection-list').parents('.shopify-section');
					jQuery(strElment).insertBefore('.CollectionMain');
					clearInterval(intInterval);
   				}
   			},2000);*/
  		}

		function onPageLoadV2() {
			console.log("onPageLoadV2 >>> ");
			console.log("intCount >>" + intCount);
			
			jQuery('.ProductList .Grid__Cell:lt('+intCount+')').css('display','inline-block');
			
			if(intTotalProducts > 6 && jQuery('.custShopMoreBtnWraperV2').length == 0) {
				jQuery('<div class="custShopMoreBtnWraperV2"><button class="shopMoreBtn">Show More</button></div>').insertAfter('.CollectionInner .CollectionInner__Products .ProductListWrapper');
			}
		}

		jQuery(document).on('click','.custShopMoreBtnWraperV2', function () {
		  	console.log('on show more click....');
			intCount = (intCount+3 <= intTotalProducts) ? intCount+3 : intTotalProducts;
			console.log("intCount >>> " + intCount);
			
			jQuery('.ProductList .Grid__Cell:lt('+intCount+')').css('display','inline-block');

			if(intCount == intTotalProducts) {
				jQuery(this).hide();
				jQuery('.CollectionInner .Pagination').show();
			}
		});


		jQuery(document).on('click','.template-collection #collection-sort-popover .Popover__ValueList .Popover__Value',function (){
			console.log("on sort click...");
			
			console.log("intTotalProducts >>> " + intTotalProducts);
			setTimeout(function (){
				intTotalProducts = jQuery('.ProductList .Grid__Cell').length;
				intCount 		 = 6;
				onPageLoadV2();
			},750);
		});

		
		//on mouse over and out change image src
		jQuery(document).on({
		    mouseenter: function () {
				var strImg = jQuery(this).find('img.ProductItem__Image:last').attr('cust-img');
				if(strImg !== undefined ) {
					jQuery(this).find('img:last').attr('src',strImg);

					if(jQuery(this).find('img.ProductItem__Image.Image--fadeIn.lazyautosizes.Image--lazyLoaded').length > 0){
						
						strFirstImg = jQuery(this).find('img.ProductItem__Image.Image--fadeIn.lazyautosizes.Image--lazyLoaded').attr('data-srcset');

						if(strFirstImg === undefined){
							strFirstImg = jQuery(this).find('img.ProductItem__Image.Image--fadeIn.lazyautosizes.Image--lazyLoaded').attr('data-src');
						}

						console.log("strFirstImg >>> " + strFirstImg);

						jQuery(this).find('img.ProductItem__Image.Image--fadeIn.lazyautosizes.Image--lazyLoaded').attr({
							    "src": strImg,
							    "srcset": strImg,
							    "data-srcset" :strImg
							});
					}
				}
				else{
					var strURL = jQuery(this).attr("href");
					var $this  = jQuery(this);
					$.ajax({
			            url :"https://www.customcuff.co/"+strURL,
			            type : "GET",
			            dataType : "html",
			            cache : false,
			            success : function (html) {    
			            	var imgSrc = jQuery(html).find(".Product__SlideItem").find('img:last').attr("src");
			            	if(imgSrc === undefined){
			            		imgSrc = jQuery(html).find(".Product__SlideItem").find('img:last').attr("data-original-src");
			            	}
			            	
			            	console.log("imgSrc >>");
			            	console.log(imgSrc);
			            	console.log("Len >> " + $this.find('img.ProductItem__Image:last').length);
			            	console.log("Last Len >> " + $this.find('img.ProductItem__Image').last().length);
			            	console.log("All images >>>> " + $this.find('img.ProductItem__Image').length);
							$this.find('img.ProductItem__Image').last().attr('cust-img',imgSrc);
							$this.find('img:last').attr('src',imgSrc);
			       		}
			        });
				}
		    },
		    mouseleave: function () {
			    var strImg = jQuery(this).find('img.ProductItem__Image:last').prev("img").attr('src');
			    jQuery(this).find('img.ProductItem__Image:last').attr('src',strImg);
			     if(strFirstImg !== ""){
			    	jQuery(this).find('img.ProductItem__Image.Image--fadeIn.lazyautosizes.Image--lazyLoaded').attr({
					    "src": strFirstImg,
					    "srcset": strFirstImg,
					    "data-srcset" :strFirstImg
					});
			    	strFirstImg = "";
			    }
		    }
		}, ".ProductListWrapper a.ProductItem__ImageWrapper"); 


		clearInterval(waitForJquery);
    }
}, 50);  