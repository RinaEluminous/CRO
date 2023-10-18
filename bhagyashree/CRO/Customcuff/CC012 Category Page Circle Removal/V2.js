var waitForJquery = setInterval(function() { 
   
   if (typeof jQuery != 'undefined') {
   		
   		var intTotalProducts	= jQuery('.ProductList .Grid__Cell').length;
		var intCount			= 6;
		
		rePositionCategorySection();
   		onPageLoadV2();
		
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
			
			if(jQuery('.custShopMoreBtnWraperV2').length == 0) {
				jQuery('<div class="custShopMoreBtnWraperV2"><button class="shopMoreBtn">Shop More</button></div>').insertAfter('.CollectionInner .CollectionInner__Products .ProductListWrapper');
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


		clearInterval(waitForJquery);
    }
}, 50);  