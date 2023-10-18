var waitForJquery = setInterval(function() { 
   
   if (typeof jQuery != 'undefined') {
		console.log("%c C0012", "background:red;color : white;padding:10px");

		var intTotalProducts = jQuery('.ProductList .Grid__Cell').length;
		var intCount 		 = 6;
		var elementArray     = [];

		if(jQuery('.CollectionMain').length > 0)
		onPageLoadV1();
		getProductMainImgV1();

		/*function getProductMainImage(){
			jQuery( ".ProductList .Grid__Cell .ProductItem__Wrapper" ).each(function( index ) {
			  	//console.log( index + ": " + jQuery( this ).text() );
			  	var strProdName = jQuery('.ProductItem__Title').text();
			  	console.log(strProdName);
			    var strURL = jQuery(this).find('a').attr("href");
			    console.log(strURL);

			    $.ajax({
					type: "GET",
				  	dataType: "html",
				  	url: "https://www.customcuff.co/"+strURL,
				  	cache: false,
				  	success: function(html) {
					  	console.log("response");
					   	//console.log(html);
					   	var imgSrc  = jQuery(html).find(".Product__SlideItem").find('img:first').attr("src");
					   	console.log("imgSrc >>>> ");
					   	console.log(imgSrc);
				    }
				});

			});
		}*/

		function getProductMainImgV1() {
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
	        //console.log("strURL >>> ");
	        //console.log(strURL);
	        $.ajax({
	            url:  "https://www.customcuff.co/"+strURL,
	            type:"GET",
	            dataType:"html",
	            cache: false,
	            success: function (html) {    
	            	var imgSrc  = jQuery(html).find(".Product__SlideItem").find('img:last').attr("src");
					//console.log("arrCount >> " +arrCount);
				   //	console.log("imgSrc >>>> ");
				   //	console.log(imgSrc);          
	                if (arrCount < elementArray.length-1) {
	                    //Next ajax call when current ajax call has been finished.
	                	arrCount++;
						strElement.find('img.ProductItem__Image:last').attr('cust-img',imgSrc);
	                	doAjax(arrCount);
	            	}
	       		}
	        });
	    }
		
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

		jQuery(document).on('click','.custShopMoreBtnWraper',function () {
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

		jQuery(".ProductListWrapper a.ProductItem__ImageWrapper").hover(function() {
			var strImg = jQuery(this).find('img.ProductItem__Image:last').attr('cust-img');
			console.log("strImg >>> " +strImg);
			if(strImg !== undefined ){
				jQuery(this).find('img:last').attr('src',strImg);
			}
			else{
				console.log("in else >>>>> ");
				var strURL = jQuery(this).attr("href");
				console.log("strURL >>> " + strURL);
				var $this = jQuery(this);
				$.ajax({
		            url:"https://www.customcuff.co/"+strURL,
		            type:"GET",
		            dataType:"html",
		            cache: false,
		            success: function (html) {    
		            	//console.log("html >>>");
		            	//console.log(html);
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
		});

		jQuery(".ProductListWrapper a.ProductItem__ImageWrapper").mouseout(function(){
		  console.log("mouseout >> ");
		  var strImg = jQuery(this).find('img.ProductItem__Image:last').prev("img").attr('src');
		  jQuery(this).find('img.ProductItem__Image:last').attr('src',strImg);
		});

	clearInterval(waitForJquery);

    }
}, 50);  