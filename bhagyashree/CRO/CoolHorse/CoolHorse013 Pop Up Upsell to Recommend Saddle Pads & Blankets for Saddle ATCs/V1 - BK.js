console.log('Coolhorse 013');
if(jQuery("#js-product-list").length > 0 ){
    addPopupUpsellOnSaddleATC();
}
function addPopupUpsellOnSaddleATC(){
    console.log('function addPopupUpsellOnSaddleATC');
	var intCount = 0;
    		var intInterval = setInterval(function (){
    			intCount += 1;
 if(jQuery("#js-product-list .custCategoryWrapper .custCTAButton").length > 0 && jQuery("#custOxbowProductPopup").length==0){
        console.log('In interval');
        //append popup to the body
        jQuery('<div class="custPopupOuter" id="custOxbowProductPopup"><div class="custPopupBox"><div class="custTopBar"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/vector.png" alt="vector"><h5>The item has been added to cart. Thank you!</h5><button class="custClosePopup"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/close.png" alt="close"></button></div><hr class="custBorder"><div class="custContent"><div class="custLeftBox"><h3>One-Time Exclusive Offer</h3><div class="custImgDesk"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/oxbow-tack.png" alt="vector"></div><h5>Oxbow Tack 34"X36" Contoured Blanket Top Fleece Show Pad</h5><ul class="custPriceList"><li><span class="custSave">SAVE 40%</span></li><li><span class="custPriceOff">$195.00</span><span class="custPrice">$110.00</span></li></ul><ul class="custDetailsProduct"><li>100% Wool Blanket Top</li><li>Provide max comfort for your horse’s back</li><li>Orthopedic-grade felt center absorbs shock</li></ul><div class="custSelectWrap"><select name="custColorSelect" id="custColorSelect"><option value="" selected="selected" disabled="disabled">Select One</option><option value="601160-TN/BR">1: Tan/Brown</option><option value="601160-GY/BK">3: Black/Grey</option><option value="601160-TN/BK">4: Chocolate/Tan</option></select><button id="custAddTocart" disabled="disabled">Add to Cart</button></div></div><div class="custRightBox"><div class="custImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Coolhorse/oxbow-tack.png" alt="vector"></div></div></div></div></div>').prependTo('body');
  }
  console.log('intCount',intCount);
    if(intCount === 200){
        clearInterval(intInterval);
    }
},50);  
   

}
//show popup on the click of Add to cart button
jQuery(document).on('click','#js-product-list .custCategoryWrapper .custCTAButton',function(){
    console.log('click Quick Add button');
    jQuery('#custOxbowProductPopup').css('display', 'flex');
   
});

//close popup on the click of close 
jQuery(document).on('click','.custClosePopup',function(){
    console.log('on click');
    jQuery('#custOxbowProductPopup').css('display','none');
});

//after change color event
jQuery(document).on('change','#custColorSelect',function(){
    // only on change of color Add to cart button should be enabled
    console.log('change color');
    var strColorCode = jQuery('#custColorSelect').val();

    if(strColorCode !== '' && strColorCode !== undefined && strColorCode !== null){
        jQuery('#custAddTocart').prop('disabled', false);
    } else {
        jQuery('#custAddTocart').prop('disabled', true);
    }
      
        var intLast_Selected_Option_ID ='';

        if(strColorCode=='601160-TN/BR'){
                 intLast_Selected_Option_ID ='19909';
        }else if(strColorCode=='601160-GY/BK'){
                intLast_Selected_Option_ID ='19911';
        }else if(strColorCode=='601160-TN/BK'){
             intLast_Selected_Option_ID ='19912';
        }

       
        jQuery.ajax({
                        type: "POST",
                        url:  "https://shop.coolhorse.com/mm5/json.mvc?Store_Code=COOLHORSE&Function=Runtime_AttributeList_Load_ProductVariant_Possible",
                        data:  {
                        'Product_Code': '601160',
                        'Dependency_Resolution': 'first',
                        'Predict_Discounts': '0',
                        'Calculate_Sale_Price': '1',
                        'Last_Selected_Attribute_ID': '5874',
                        'Last_Selected_AttributeTemplateAttribute_ID': '0',
                        'Last_Selected_Option_ID': intLast_Selected_Option_ID,
                        'Selected_Term_ID': '0',
                        'Selected_Attribute_IDs': '5874',
                        'Selected_AttributeTemplateAttribute_IDs': '0',
                        'Selected_Option_IDs': intLast_Selected_Option_ID,
                        'Selected_Attribute_Types': 'select',
                        'Unselected_Attribute_IDs': '',
                        'Unselected_AttributeTemplateAttribute_IDs':'', 
                        'Session_Type': 'runtime'
                         }, 

                        headers: {
                            'contentType' : 'application/json'
                        },
                        success: function(data){
                                  if(data !== '' && data !== undefined && data !== null){
                                var parsedData = JSON.parse(data);
                                var invAvailableCount = parsedData.data.variant.inv_available;
                                console.log("Available count:", invAvailableCount);
                            }
                        }
                    }); 

    });
    
    //add to cart click event for product add into the cart
    jQuery(document).on('click','#custAddTocart',function(){
    console.log('click add to cart button');
    var strColorCode = jQuery('#custColorSelect').val();
    // console.log('strColorCode',strColorCode);
    jQuery.ajax({
                        type: "POST",
                        url:  "https://shop.coolhorse.com/store/BASK",
                        data:  {
                            'Product_Code': '601160',
                            'Action': 'ADPR',
                            'Quantity': 1,
                            'Product_Attributes[1]:code': 'Color',
                            'Product_Attributes[1]:value': strColorCode
                        },
                        headers: {
                            'contentType' : 'application/json'
                        },
                        success: function(data){

                            if(jQuery('#custOxbowProductPopup').length > 0 ){
                                  jQuery('#custOxbowProductPopup').hide();
                            }
                          
                            // console.log('>>>>>>>>>>data',data)
                            if(data !== '' && data !== undefined && data !== null){
				                var strSelector = '';
				                var strCartHTML = jQuery(data).find('#js-mini-basket-container').html();

								if( jQuery(window).width() < 767 ){
									strSelector = '.mobile-basket-button #js-mini-basket-count';
								}else{
									strSelector = '.mini-basket #js-mini-basket-count';
								}

				                var intCartCount = jQuery(data).find(strSelector).text();
				                if(strCartHTML !== '' && strCartHTML !== undefined && strCartHTML !== null ){
			                	
				                	jQuery('#js-mini-basket-container').html(strCartHTML);

				                	jQuery(strSelector).text(intCartCount);

				                	if(jQuery('#js-main-header #js-mini-basket').length > 0){
				                		jQuery('#js-main-header #js-mini-basket')[0].click();	

				                		setTimeout(function (){
				                			jQuery('#js-main-header #js-mini-basket')[0].click();
				                		},5000);
				                	}
			                	}
		                    }              
                        }
                    }); 

});