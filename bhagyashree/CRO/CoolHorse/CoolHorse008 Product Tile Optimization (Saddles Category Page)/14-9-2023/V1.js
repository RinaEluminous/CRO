	//To add the 'quick add/view details' CTA on PLP
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
					console.log("on search >>>> ");
					//console.log("filter size Len >> " + jQuery('#ss-saddle_seat_size .ss-list-option').length);

					//console.log("filter gullet Len >> " + jQuery('#ss-saddle_gullet_width .ss-list-option').length);
					
					if(jQuery('.custSeatSizeWrapper').length > 0) {
						jQuery('.custSeatSizeWrapper').remove();
					}

					if(jQuery('.custGulletWidthWrapper').length > 0) {
						jQuery('.custGulletWidthWrapper').remove();
					}
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

		if( jQuery(window).width() <= 767 ){
			var intInterval = setInterval (function (){
				intCount += 1;
				console.log("setInterval >>>>>> ");
				addCustSeatSizeFilter();
				addCustGulletWidthFilter();

				if( intCount === 100 ){
					clearInterval(intInterval);
				}
			},30);
		}
	}


	function addCustViewDetailsCTA(){
		
		if( jQuery('.ss-content-container #js-product-list .category-product').length > 0 ){
			jQuery('.ss-content-container #js-product-list .category-product').each(function (){
				//console.log("Len >> " + jQuery(this).find('.custFreeShipping').length);
				//console.log("href >> " + jQuery(this).find('a').attr('href'));
				var strElement = jQuery(this).find('div[ng-if="!result.isInlineBanner"]');
				if(strElement.find('.custFreeShipping').length == 0){
					var strHref = jQuery(this).find('a').attr('href');
					jQuery('<div class="custFreeShipping"><p>Free Shipping (lower 48 states)</p><div class=""><a href="'+strHref+'">VIEW DETAILS</a></div>').appendTo(strElement);
				}
			});
		}

	}

	function addCustSeatSizeFilter() {
		if( jQuery('.custSeatSizeWrapper').length == 0 && jQuery('#ss-saddle_seat_size .ss-list-option').length > 0){
			var custSizeOptions = '';
			if(jQuery('#ss-saddle_seat_size .ss-show-more:contains(Show More) a').length > 0){
				jQuery('#ss-saddle_seat_size .ss-show-more:contains(Show More) a')[0].click();
			}

			jQuery('#ss-saddle_seat_size .ss-list-option').each(function (){
				console.log(" option >>> " + jQuery(this).text());
				var strOptions = jQuery(this).text().trim();
				var arrOption  = strOptions.split('"');
				console.log(arrOption);
				if(jQuery(this).hasClass('ss-active')){
					isChecked = "checked";
				}
				else{
					isChecked = "";
				}
				custSizeOptions += '<li><div class="custcheckbox"><input type="checkbox" name="" '+isChecked+'>'+arrOption[0]+'"<span class="ss-facet-count ng-binding">'+arrOption[1]+'</span></div></li>'
			});

			jQuery('<div class="custSeatSizeWrapper"><a href="" class="custActiveButton custSelectSeatSize">Seat Size</a><div class="custDropdownList"><ul>'+custSizeOptions+'</ul></div></div>').insertBefore('#searchspring-content .ss-toolbar-top.filter-items-container');
		}
	}

	function addCustGulletWidthFilter() {
		if( jQuery('.custGulletWidthWrapper').length == 0 && jQuery('#ss-saddle_gullet_width .ss-list-option').length > 0){
			var custGulletOptions = '';
			jQuery('#ss-saddle_gullet_width .ss-list-option').each(function (){
				console.log(" option >>> " + jQuery(this).text());
				var strOptions = jQuery(this).text().trim();
				var arrOption  = strOptions.split('"');
				console.log(arrOption);
				if(jQuery(this).hasClass('ss-active')){
					isChecked = "checked";
				}
				else{
					isChecked = "";
				}
				custGulletOptions += '<li><div class="custcheckbox"><input type="checkbox" name="" '+isChecked+'>'+arrOption[0]+'"<span class="ss-facet-count ng-binding">'+arrOption[1]+'</span></div></li>'
			});

			jQuery('<div class="custGulletWidthWrapper"><a href="" class="custActiveButton custSelectGulletWidth">Gullet Width</a><div class="custDropdownList"><ul>'+custGulletOptions+'</ul></div></div>').insertBefore('#searchspring-content .ss-toolbar-top.filter-items-container');
		}
	}

	//On pagination click call the function to add custom CTA for new loaded products
   	jQuery(document).on('click','#searchspring-sidebar .ss-summary .ss-summary-container .ss-list .ss-list-option .ss-list-link,.page-links-container span:contains(Prev),.page-links-container a:contains(Prev),.page-links-container span:contains(Next),.page-links-container a:contains(Next),.ss-pagination span.page-links-container.top-page-links .page-links-active,.ss-pagination span.page-links-container.top-page-links a.page-links-inactive', function(){
		
		/*addCustomCtaToPlp();*/
	});

	jQuery(document).on('click','.custSeatSizeWrapper .custDropdownList .custcheckbox', function () {
		//console.log("seat size.....");
        var strValue = jQuery(this).text();
        console.log("strValue >>> " + strValue);
        console.log("Checkbox Len >> " + jQuery(this).find('input[type=checkbox]').length);
        // if(jQuery(this).find('input[type=checkbox]').is(":checked")) {
        //     console.log("Checkbox is checked.");
        // }
        // else {
        //     console.log("Checkbox is unchecked.");
        // }

        if( jQuery('#ss-saddle_seat_size .ss-list-option:contains('+strValue+')').length == 0 ) {
			if( jQuery('#ss-saddle_seat_size .ss-show-more').length > 0 ){
				jQuery('#ss-saddle_seat_size .ss-show-more a')[0].click();
			}
		}
		console.log("default size >> " +  jQuery('#ss-saddle_seat_size .ss-list-link:contains('+strValue+')').length);
		if( jQuery('#ss-saddle_seat_size .ss-list-link:contains('+strValue+')').length > 0 ){
			jQuery('#ss-saddle_seat_size .ss-list-link:contains('+strValue+')')[0].click();
		}
	});

	jQuery(document).on('click','.custGulletWidthWrapper .custDropdownList .custcheckbox', function () {
		//console.log("gullet size.....");
        var strValue = jQuery(this).text();
        console.log("strValue >>> " + strValue);
        console.log("Checkbox Len >> " + jQuery(this).find('input[type=checkbox]').length);
        if(jQuery(this).find('input[type=checkbox]').is(":checked")) {
            console.log("Checkbox is checked.");
        }
        else {
            console.log("Checkbox is unchecked.");
        }

        if( jQuery('#ss-saddle_gullet_width .ss-list-option:contains('+strValue+')').length == 0 ) {
			if( jQuery('#ss-saddle_gullet_width .ss-show-more').length > 0 ){
				jQuery('#ss-saddle_gullet_width .ss-show-more a')[0].click();
			}
		}
		console.log("default size >> " +  jQuery('#ss-saddle_gullet_width .ss-list-link:contains('+strValue+')').length);
		if( jQuery('#ss-saddle_gullet_width .ss-list-link:contains('+strValue+')').length > 0 ){
			jQuery('#ss-saddle_gullet_width .ss-list-link:contains('+strValue+')')[0].click();
		}
	});

	jQuery(document).on('click','.ss-list-option.ss-summary-reset',function (){
		console.log('on clear....');
		addCustomCtaToPlp();
	});

	jQuery(document).on('click','.custSeatSizeWrapper .custSelectSeatSize,.custGulletWidthWrapper .custSelectGulletWidth', function () {
		jQuery(this).toggleClass("custActiveButton");
	});