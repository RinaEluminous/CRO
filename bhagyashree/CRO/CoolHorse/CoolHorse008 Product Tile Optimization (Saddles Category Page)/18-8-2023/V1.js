	//Initial function call
	addCustomCtaToPlp();

	//Check ajax call when PLP details are refreshed
	var oldXHR = window.XMLHttpRequest;
	function newXHR() {
		var realXHR = new oldXHR();
		realXHR.addEventListener("readystatechange", function() {
		if(realXHR.readyState == 4 && realXHR.status == 200){ 
		 	setTimeout(function () {
				var strAjaxResponseURL  = realXHR.responseURL;
				if(strAjaxResponseURL.indexOf('/api/search/search.json') > -1){
					 addCustomCtaToPlp();
					}                   
				}, 50); 
			}
	 	}, false);
	  	return realXHR;
	}
	window.XMLHttpRequest = newXHR;

	function addCustomCtaToPlp(){
		var intCount  = 0;
		var isChecked = '';
		
		addCustViewDetailsCTA();

		if(jQuery('.custSeatSizeWrapper').length > 0) {
			jQuery('.custSeatSizeWrapper').remove();
		}

		if(jQuery('.custGulletWidthWrapper').length > 0) {
			jQuery('.custGulletWidthWrapper').remove();
		}

		if( jQuery(window).width() <= 767 ){
			var intInterval = setInterval (function (){
				intCount += 1;
				addCustSeatSizeFilter();
				addCustGulletWidthFilter();

				if( intCount === 100 ){
					clearInterval(intInterval);
				}
			},30);
		}
	}

	//To add the custom 'view details' CTA on PLP
	function addCustViewDetailsCTA(){
		var intRunCount  = 0;
		var intInterval = setInterval (function (){
			intRunCount += 1;
			if( jQuery('.ss-content-container #js-product-list .category-product').length > 0 ){
				jQuery('.ss-content-container #js-product-list .category-product').each(function (){
				
					var strText    = '';
					var strElement = jQuery(this).find('div[ng-if="!result.isInlineBanner"]');

					if(strElement.find('.category-product-name').length > 0){
					  var strProdName = strElement.find('.category-product-name').find('a').text().trim();
					
				  	if( strProdName.indexOf("New") !== -1 ){
			        	strText = strProdName.substring(0, strProdName.indexOf('New'));
			        	if(strProdName.indexOf("New!") !== -1){
			        		strText = strText +'New!';
			        	}
			        	else{
			        		strText = strText +'New';
			        	}
			    	}
			    	if( strProdName.indexOf("Used") !== -1 ) {
			        	strText = strProdName.substring(0, strProdName.indexOf('Used'));
			        	
			        	if(strProdName.indexOf("Used!") !== -1){
			        		strText = strText +'Used!';
			        	}
			        	else{
			        		strText = strText +'Used';
			        	}
			    	}
					  
					var strNewtext = strElement.find('.category-product-name').find('a').text().replace(strText,'<span class="custProdTag">'+strText+'</span>');
					  strElement.find('.category-product-name').find('a').html(strNewtext);
					}

					if(strElement.find('.custFreeShipping').length == 0){
						var strHref = jQuery(this).find('a').attr('href');
						jQuery('<div class="custFreeShipping"><p>Free Shipping (lower 48 states)</p><div class=""><a href="'+strHref+'">VIEW DETAILS</a></div>').appendTo(strElement);
					}
				});
				clearInterval(intInterval);
			}
			if( intRunCount === 100 ){
				clearInterval(intInterval);
			}
		},30);
	}

	//To add the custom Seat Size wrapper
	function addCustSeatSizeFilter() {
		if( jQuery('.custSeatSizeWrapper').length == 0 && jQuery('#ss-saddle_seat_size .ss-list-option').length > 0){
			var custSizeOptions = '';
			if(jQuery('#ss-saddle_seat_size .ss-show-more:contains(Show More) a').length > 0){
				jQuery('#ss-saddle_seat_size .ss-show-more:contains(Show More) a')[0].click();
			}

			jQuery('#ss-saddle_seat_size .ss-list-option').each(function (){
				var strOptions = jQuery(this).text().trim();
				var arrOption  = strOptions.split('"');
				if(jQuery(this).hasClass('ss-active')){
					isChecked = "checked";
				}
				else{
					isChecked = "";
				}
				custSizeOptions += '<li><div class="custcheckbox"><input type="checkbox" name="" '+isChecked+'>'+arrOption[0]+'"<span class="ss-facet-count ng-binding">'+arrOption[1]+'</span></div></li>'
			});

			jQuery('<div class="custSeatSizeWrapper custBlueButtonWrapper"><div class="custSelectSeatSize custSelectBlueDropDown">Seat Size</div><div class="custDropdownList"><ul>'+custSizeOptions+'</ul></div></div>').insertBefore('#searchspring-content .ss-toolbar-top.filter-items-container nav');
		}
	}

	//To add the custom Gullet Width wrapper
	function addCustGulletWidthFilter() {
		if( jQuery('.custGulletWidthWrapper').length == 0 && jQuery('#ss-saddle_gullet_width .ss-list-option').length > 0){
			var custGulletOptions = '';
			jQuery('#ss-saddle_gullet_width .ss-list-option').each(function (){
				var strOptions = jQuery(this).text().trim();
				var arrOption  = strOptions.split('"');
				if(jQuery(this).hasClass('ss-active')){
					isChecked = "checked";
				}
				else{
					isChecked = "";
				}
				custGulletOptions += '<li><div class="custcheckbox"><input type="checkbox" name="" '+isChecked+'>'+arrOption[0]+'"<span class="ss-facet-count ng-binding">'+arrOption[1]+'</span></div></li>';
			});

			jQuery('<div class="custGulletWidthWrapper custBlueButtonWrapper"><div class="custSelectGulletWidth custSelectBlueDropDown">Gullet Width</div><div class="custDropdownList"><ul>'+custGulletOptions+'</ul></div></div>').insertBefore('#searchspring-content .ss-toolbar-top.filter-items-container nav');
		}
	}

	//On pagination click call the function to add custom CTA for new loaded products
   	jQuery(document).on('click','#searchspring-sidebar .ss-summary .ss-summary-container .ss-list .ss-list-option .ss-list-link,.page-links-container span:contains(Prev),.page-links-container a:contains(Prev),.page-links-container span:contains(Next),.page-links-container a:contains(Next),.ss-pagination span.page-links-container.top-page-links .page-links-active,.ss-pagination span.page-links-container.top-page-links a.page-links-inactive', function(){
		
		addCustomCtaToPlp();
	});

   	//on custom Seat Size filter click trigger the default filter option
	jQuery(document).on('click','.custSeatSizeWrapper .custDropdownList .custcheckbox', function () {
        var strValue = jQuery(this).text();
        if( jQuery('#ss-saddle_seat_size .ss-list-option:contains('+strValue+')').length == 0 ) {
			if( jQuery('#ss-saddle_seat_size .ss-show-more').length > 0 ){
				jQuery('#ss-saddle_seat_size .ss-show-more a')[0].click();
			}
		}
		if( jQuery('#ss-saddle_seat_size .ss-list-link:contains('+strValue+')').length > 0 ){
			jQuery('#ss-saddle_seat_size .ss-list-link:contains('+strValue+')')[0].click();
		}
	});

	//on custom Gullet Width filter click trigger the default filter option
	jQuery(document).on('click','.custGulletWidthWrapper .custDropdownList .custcheckbox', function () {
        var strValue = jQuery(this).text();
        if( jQuery('#ss-saddle_gullet_width .ss-list-option:contains('+strValue+')').length == 0 ) {
			if( jQuery('#ss-saddle_gullet_width .ss-show-more').length > 0 ){
				jQuery('#ss-saddle_gullet_width .ss-show-more a')[0].click();
			}
		}
		if( jQuery('#ss-saddle_gullet_width .ss-list-link:contains('+strValue+')').length > 0 ){
			jQuery('#ss-saddle_gullet_width .ss-list-link:contains('+strValue+')')[0].click();
		}
	});

	//on clear CTA click rebuild the custom filter
	jQuery(document).on('click','.ss-list-option.ss-summary-reset',function (){
		addCustomCtaToPlp();
	});

	//on custom select filter click open/close select dropdown
	jQuery(document).on('click','.custSeatSizeWrapper .custSelectSeatSize,.custGulletWidthWrapper .custSelectGulletWidth', function () {
		jQuery('.custSelectBlueDropDown').not(this).removeClass("custActiveButton");
		jQuery(this).toggleClass("custActiveButton");
	});

	//on default sort by select filter click, close the custom select dropdown
	jQuery(document).on('click','.ss-toolbar select#l-sort-by' ,function (){
    	jQuery('.custSelectBlueDropDown').removeClass("custActiveButton");
	});