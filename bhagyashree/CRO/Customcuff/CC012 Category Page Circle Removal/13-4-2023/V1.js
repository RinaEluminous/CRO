var waitForJquery = setInterval(function() { 
   
   if (typeof jQuery != 'undefined') {
    console.log("%c C0012", "background:red;color : white;padding:10px");

    if(jQuery('.CollectionMain').length > 0){
      var intTotalProducts = jQuery('.ProductList .Grid__Cell').length;
      var intCount     = 6;
      var elementArray     = [];
      var strFirstImg    = "";
      onPageLoadV1();
      getProductMainImgV1();
      addCustomProductCTAV1();
    }

    function addCustomProductCTAV1(){
	    jQuery(".CollectionMain .ProductItem__Wrapper").each(function () {
		   if(jQuery(this).find('.custProdCtaV1').length == 0 ){
		   	    var strURL = jQuery(this).find('a.ProductItem__ImageWrapper').attr('href');
				jQuery('<a href="'+strURL+'" class="custProdCtaV1">Customize</a>').appendTo(this);
		   }
		});

	}


    function getProductMainImgV1() {
      jQuery(".ProductList .Grid__Cell .ProductItem__Wrapper a.ProductItem__ImageWrapper").each(function () {
            elementArray.push(jQuery(this));
        });

        // First ajax call.
        doAjax(0);
    }

      //Function to ajax fire
      function doAjax(arrCount) {
          var strURL    = elementArray[arrCount].attr("href");
          var strElement  = elementArray[arrCount];
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
    
    function onPageLoadV1() {
      if(jQuery(window).width() <= 1007) {
        
        if(jQuery('.custShopBy').length == 0 ){
          jQuery('<button class="custShopBy CollectionToolbar__Item CollectionToolbar__Item--sort Heading Text--subdued u-h6">Shop BY<svg class="Icon Icon--select-arrow" role="presentation" viewBox="0 0 19 12"><polyline fill="none" stroke="currentColor" points="17 2 9.5 10 2 2" fill-rule="evenodd" stroke-width="2" stroke-linecap="square"></polyline></svg></button>').insertAfter('button.CollectionToolbar__Item.CollectionToolbar__Item--sort');
        }

        if(jQuery('#custCollectionShopByPopover').length == 0){
          jQuery('<div id="custCollectionShopByPopover" class="Popover" aria-hidden="false"><header class="Popover__Header"><button class="Popover__Close Icon-Wrapper--clickable" data-action="close-popover" aria-label="Close"><svg class="Icon Icon--close" role="presentation" viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg></button><span class="Popover__Title Heading u-h4">Shop By</span></header><div class="Popover__Content"><div class="Popover__ValueList" data-scrollable=""><a href="https://www.customcuff.co/collections/new-in" class="custShopByButton">New Arrivals</a><a href="https://www.customcuff.co/collections/best-sellers" class="custShopByButton">Best Seller</a><a href="https://www.customcuff.co/collections/all" class="custShopByButton">Shop All</a><a href="https://www.customcuff.co/collections/coordinates-necklace" class="custShopByButton">Coordinates</a><a href="https://www.customcuff.co/collections/most-discounted" class="custShopByButton">On Sale</a><a href="https://www.customcuff.co/collections/gift-sets" class="custShopByButton">Gift Sets</a><a href="https://www.customcuff.co/collections/handwriting-necklace" class="custShopByButton">Handwriting</a><a href="https://www.customcuff.co/collections/initial-necklace" class="custShopByButton">Initials</a><a href="https://www.customcuff.co/collections/zodiac-necklace" class="custShopByButton">Star Map</a><a href="https://www.customcuff.co/collections/zodiac-necklace" class="custShopByButton">Zodiac Signs</a><a href="https://www.customcuff.co/collections/custom-necklace" class="custShopByButton">Necklaces</a><a href="https://www.customcuff.co/collections/custom-bracelets" class="custShopByButton">Bracelets</a><a href="https://www.customcuff.co/collections/rings" class="custShopByButton">Rings</a></div></div></div>').insertAfter('#collection-sort-popover');
        }
      }
      else{
        if(jQuery('.custSortingColumn').length == 0){
          jQuery('<div class="custSortingColumn"> <div class="inner"> <h6>Shop BY</h6> <ul> <li><a href="https://www.customcuff.co/collections/new-in">New Arrivals</a></li><li><a href="https://www.customcuff.co/collections/best-sellers">Best Seller</a></li><li><a href="https://www.customcuff.co/collections/all">Shop All </a></li><li><a href="https://www.customcuff.co/collections/coordinates-necklace">Coordinates</a></li><li><a href="https://www.customcuff.co/collections/most-discounted">On Sale</a></li><li><a href="https://www.customcuff.co/collections/gift-sets">Gift Sets</a></li><li><a href="https://www.customcuff.co/collections/handwriting-necklace">Handwriting </a></li><li><a href="https://www.customcuff.co/collections/initial-necklace">Initials</a></li><li><a href="https://www.customcuff.co/collections/zodiac-necklace">Star Map</a></li><li><a href="https://www.customcuff.co/collections/zodiac-necklace">Zodiac Signs</a></li><li><a href="https://www.customcuff.co/collections/custom-necklace">Necklaces</a></li><li><a href="https://www.customcuff.co/collections/custom-bracelets">Bracelets</a></li><li><a href="https://www.customcuff.co/collections/rings">Rings</a></li></ul> </div></div>').insertAfter('.CollectionInner .CollectionInner__Products');
        }
      }

      console.log("intCount >>> " + intCount);
      jQuery('.ProductList .Grid__Cell:lt('+intCount+')').css('display','inline-block');
      
      if(intTotalProducts > 6 && jQuery('.custShopMoreBtnWraper').length == 0) {
        jQuery('<div class="custShopMoreBtnWraper"><button class="shopMoreBtn">Show More</button></div>').insertAfter('.CollectionInner .CollectionInner__Products .ProductListWrapper');
      }
    }

    //on click of the 'Show more' 
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

    //on click of the sort 
    jQuery(document).on('click','.template-collection #collection-sort-popover .Popover__ValueList .Popover__Value',function (){
      console.log("on sort click...");
      
      console.log("intTotalProducts >>> " + intTotalProducts);
      setTimeout(function (){
        intTotalProducts = jQuery('.ProductList .Grid__Cell').length;
        intCount     = 6;
        onPageLoadV1();
        getProductMainImgV1();
      },750);
    });
    
    //on mouse over and out change image src
    jQuery(document).on({
        mouseenter: function () {
        var strImg = jQuery(this).find('img.ProductItem__Image:last').attr('cust-img');
        
        if(strImg !== undefined ) {
          jQuery(this).find('img:last').attr('src',strImg);
          
          console.log("Len >>> " + jQuery(this).find('img.ProductItem__Image.Image--fadeIn.lazyautosizes.Image--lazyLoaded').length );
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
                    if(imgSrc === undefined || imgSrc.indexOf('width') !== -1 ) {
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
          console.log("on mouse out >>");
          console.log("strFirstImg >>> " + strFirstImg);
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

    //open 'Shop by' category block on click of 'Shop By' CTA
    jQuery(document).on('click','.CollectionMain button.custShopBy', function(){
      	jQuery('#custCollectionShopByPopover').addClass('collection-shop-by-popover');
      	jQuery('.PageOverlay').addClass('is-visible');
      	jQuery('html').addClass('no-scroll');
    });

    //close the category block on click of 'close' icon
    jQuery(document).on('click','#custCollectionShopByPopover button.Popover__Close,.PageOverlay.is-visible', function(){
      	jQuery('#custCollectionShopByPopover').removeClass('collection-shop-by-popover');
      	jQuery('.PageOverlay').removeClass('is-visible');
      	jQuery('html').removeClass('no-scroll');
    });


  	clearInterval(waitForJquery);

    }
}, 50);  