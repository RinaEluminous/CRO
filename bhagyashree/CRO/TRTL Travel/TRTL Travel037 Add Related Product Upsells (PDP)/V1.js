var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
data-type="add-to-cart-form"
	
	addCustomUpSellProduct();

	var arrCompressionSockColorSizeMapping = {
	"New-York-Small":42424784552129,"New-York-Medium":42424784584897,"New-York-Large": 42424784617665,
	"Fiji-Small":42424784650433,"Fiji-Medium":42424784683201,"Fiji-Large": 42424784715969,
	"Kyoto-Small":42424784748737,"Kyoto-Medium":42424784781505,"Kyoto-Large": 42424784814273,
	"Havana-Small":42424784847041,"Havana-Medium":42424784879809,"Havana-Large": 42424784912577,
	"Paris-Small":42424784945345,"Paris-Medium":42424784978113,"Paris-Large": 42424785010881,
	"Seattle-Small":42424785043649,"Seattle-Medium":42424785076417,"Seattle-Large": 42424785109185,
	"Sydney-Small":42424785141953,"Sydney-Medium":42424785174721,"Sydney-Large": 42424785207489,
	"Vancouver-Small":42424785240257,"Vancouver-Medium":42424785273025,"Vancouver-Large": 42424785305793,
	"Jaipur-Small":42424785338561,"Jaipur-Medium":42424785371329,"Jaipur-Large":42424785404097};  

	function addCustomUpSellProduct(){
		if(jQuery('.custProductsInfoshortAdding').length == 0){
			jQuery('<div class="custProductsInfoshortAdding"> <div class="custAddToCard"> <div class="custCardWrapper"> <div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/socks.png" alt="socks"></div><div class="custProductsInfoBlocks"> <h3>COMPRESSION SOCKS</h3> <div>$24.99</div><p>Gentle compression to reduce swelling &amp; discomfort</p></div><div class="custProductsindiaction"> <a href="#" class="button-add-toggle">Add</a> </div></div><div id="custProducts-variant-swatches" class="custProducts-colour-variant-swatches"> <button class="custCloseCrossBlocks">✕</button> <div class="custSwatchWrapper"> <div class="custSwatchColorPattern new-york" data-color="New-York"></div><div class="custSwatchColorPattern fiji" data-color="Fiji"></div><div class="custSwatchColorPattern kyoto" data-color="Kyoto"></div><div class="custSwatchColorPattern havana" data-color="Havana"></div><div class="custSwatchColorPattern paris" data-color="Paris"></div><div class="custSwatchColorPattern seattle" data-color="Seattle"></div><div class="custSwatchColorPattern sydney" data-color="Sydney"></div><div class="custSwatchColorPattern vancouver" data-color="Vancouver"></div><div class="custSwatchColorPattern jaipur" data-color="Jaipur"></div></div><div class="custSizeChart"> <div class="row"> <div class="col-auto"> <label class="btn btn-outline-dark px-4 custSizeChartActive" for="template--15670323839169__main-2-0"> Small </label> </div><div class="col-auto"> <label class="btn btn-outline-dark px-4" for="template--15670323839169__main-2-1"> Medium </label> </div><div class="col-auto"> <label class="btn btn-outline-dark px-4" for="template--15670323839169__main-2-2"> Large </label> </div><div class="custButtonBlocks"><a href="#" class="button-add-toggle">Add to Cart</a></div></div></div></div></div><div class="custAddToCard"> <div class="custCardWrapper"> <div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/wrap.png" alt="socks"></div><div class="custProductsInfoBlocks"> <h3>TRTL WRAP</h3> <div>$99.99</div><p>Cocoons your body for a secure feeling that aids sleep while traveling.</p></div><div class="custProductsindiaction"> <a href="#" class="button-add-toggle">Add</a> </div></div></div></div>').insertBefore('.product-container .product-description');
		}
	}

    // Custom Add To Bag Button
    jQuery(document).on('click', '.custSocksMainWrapper .custSocksPanel .stickyFooter #customAddToBag', function(){
        var strSelectedColor = jQuery('.custSocksMainWrapper .socksListings li.customColorActive').attr('data-color');              
        var strSelectedSize = jQuery('.custSocksMainWrapper .productSizesListings li.customSizeActive').attr('data-size');          
        var strSelectedProdId = arrCompressionSockColorSizeMapping[strSelectedColor + '-' + strSelectedSize];     
        if(strSelectedProdId != ''){
            var customFormData = new FormData();
            customFormData.append("add_to_cart[products][" + strSelectedProdId+ "]", 1);
            /*jQuery.ajax({
              type: "POST", 
              url: 'https://www.hunterboots.com/us/en_us/api/cart/add', 
              data: customFormData,      

              dataType: "json",
              processData: false,
              contentType: false,
              success: function(data){
                 location.reload();
                 localStorage.setItem('isUSSockAdded', 'yes');
              } 
            });*/

            jQuery.ajax({
			      type: "POST", 
			      url: 'https://trtltravel.com/cart/add', 
			      data: {
			          	id: "42424784945345",
			          	Colour: "Paris",
			          	Size: "Small",
			          	quantity: "1"
			      },      
			      dataType: "json",
			      success: function(data){
			    } 
			});
			
			/****/
			jQuery.ajax({
		          type: "POST", 
		          url: 'https://trtltravel.com/cart/add', 
		          data: {
		                id: "42424784781505",
		                Colour: "Kyoto",
		                Size: "Medium",
		                quantity: "1"
		          },      
		          dataType: "json",
		          success: function(response){
		              console.log("in successs");
		              console.log(response)
		          },
		         error: function(err) {
		             console.log('In error......');
		             console.log(err)
		    }
    });
        }
    });



    clearInterval(waitForJquery);
    }
}, 50);  