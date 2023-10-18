var waitForJquery = setInterval(function() { 
  /*Most Popular link required*/
   if (typeof jQuery != 'undefined') {
		console.log("%c C0012", "background:red;color : white;padding:10px");

		var intTotalProducts = jQuery('.ProductList .Grid__Cell').length;
		var intCount 		 = 6;

		onPageLoadV1();
		
		function onPageLoadV1() {

			if(jQuery('.custSortingColumn').length == 0){
				jQuery('<div class="custSortingColumn"> <div class="inner"> <h6>Shop BY</h6> <ul> <li><a href="https://www.customcuff.co/collections/new-in">New Arrivals</a></li><li><a href="#">Most Popular</a></li><li><a href="https://www.customcuff.co/collections/all">Shop All </a></li><li><a href="https://www.customcuff.co/collections/coordinates-necklace">Coordinates</a></li><li><a href="https://www.customcuff.co/collections/most-discounted">On Sale</a></li><li><a href="https://www.customcuff.co/collections/gift-sets">Gift Sets</a></li><li><a href="https://www.customcuff.co/collections/handwriting-necklace">Handwriting </a></li><li><a href="https://www.customcuff.co/collections/initial-necklace">Initials</a></li><li><a href="https://www.customcuff.co/collections/zodiac-necklace">Star Map</a></li><li><a href="https://www.customcuff.co/collections/zodiac-necklace">Zodiac Signs</a></li><li><a href="https://www.customcuff.co/collections/custom-necklace">Necklaces</a></li><li><a href="https://www.customcuff.co/collections/custom-bracelets">Bracelets</a></li><li><a href="https://www.customcuff.co/collections/rings">Rings</a></li></ul> </div></div>').insertAfter('.CollectionInner .CollectionInner__Products');
			}

			console.log("intCount >>> " + intCount);

			jQuery('.ProductList .Grid__Cell:lt('+intCount+')').css('display','inline-block');
			
			if(jQuery('.custShopMoreBtnWraper').length == 0) {
				jQuery('<div class="custShopMoreBtnWraper"><button class="shopMoreBtn">Shop More</button></div>').insertAfter('.CollectionInner .CollectionInner__Products .ProductListWrapper');
			}
		}

		jQuery(document).on('click','.custShopMoreBtnWraper', function () {
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
				onPageLoadV1();
			},750);
			
		});

	clearInterval(waitForJquery);

    }
}, 50);  