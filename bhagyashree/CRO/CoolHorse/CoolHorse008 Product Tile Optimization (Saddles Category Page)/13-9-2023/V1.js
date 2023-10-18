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
				//console.log("Respone Data >>> ");
				//console.log(realXHR.response);
				if(strAjaxResponseURL.indexOf('/api/search/search.json') > -1){
					console.log("on search >>>> ");
					/*addCustomCtaToPlp();*/
					updateCustomFilter(strAjaxResponseURL);

					}                   
				}, 20); 
			}
	 	}, false);
	  	return realXHR;
	}
	window.XMLHttpRequest = newXHR;

	function updateCustomFilter(strUrl){
		console.log("strUrl >>> ")
		console.log(strUrl);
		var hashes = strUrl.split('&');
	    console.log(hashes)
	    for(var i = 0; i < hashes.length; i++)
	    {
	        if(hashes[i].indexOf('filter.saddle_seat_size') !== -1){
	        	console.log(hashes[i].replace('%22','"'));
	        }
	    }
	}

	function addCustomCtaToPlp(){
		if( jQuery(window).width() <= 767 ){
			if( jQuery('.custSeatSize').length == 0 ){
				jQuery('<div class="custSeatSize"><a href="" class="custActiveButtonWrapper custOnClickButton">Seat Size</a><div class="custSizeDropdownList"><ul><li><div class="custcheckbox"><input type="checkbox" name="">10" <span class="ss-facet-count ng-binding">(15)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">11.5" <span class="ss-facet-count ng-binding">(3)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">12" <span class="ss-facet-count ng-binding">(18)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">12.5" <span class="ss-facet-count ng-binding">(6)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">13" <span class="ss-facet-count ng-binding">(24)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">13.5" <span class="ss-facet-count ng-binding">(20)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">14" <span class="ss-facet-count ng-binding">(49)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">14.5" <span class="ss-facet-count ng-binding">(52)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">15" <span class="ss-facet-count ng-binding">(45)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">15.5" <span class="ss-facet-count ng-binding">(35)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">16" <span class="ss-facet-count ng-binding">(36)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">16.5" <span class="ss-facet-count ng-binding">(8)</span></div></li><li><div class="custcheckbox"><input type="checkbox" name="">17" <span class="ss-facet-count ng-binding">(9)</span></div></li></ul></div></div>').insertBefore('#searchspring-content .ss-toolbar-top.filter-items-container');
			}
			
		}
	}

	/*if( jQuery('#ss-saddle_seat_size .ss-list-link').length > 0 ){
		jQuery('#ss-saddle_seat_size a.ss-list-link:contains(9)')[0].click();
	}

	if( jQuery('#ss-saddle_seat_size a.ss-list-link:contains(10" (15))').length > 0 ){
		jQuery('#ss-saddle_seat_size a.ss-list-link:contains(9)')[0].click();
	}

	if(jQuery('#ss-saddle_seat_size .ss-show-more').length > 0){
		jQuery('#ss-saddle_seat_size .ss-show-more a')[0].click();
	}*/


	//On pagination click call the function to add custom CTA for new loaded products
   	jQuery(document).on('click','#searchspring-sidebar .ss-summary .ss-summary-container .ss-list .ss-list-option .ss-list-link,.page-links-container span:contains(Prev),.page-links-container a:contains(Prev),.page-links-container span:contains(Next),.page-links-container a:contains(Next),.ss-pagination span.page-links-container.top-page-links .page-links-active,.ss-pagination span.page-links-container.top-page-links a.page-links-inactive', function(){
		
		/*addCustomCtaToPlp();*/
	});

	jQuery(document).on('click','.custSeatSize .custSizeDropdownList .custcheckbox', function () {
		//console.log("seat size.....");
        var strValue = jQuery(this).text();
        /*console.log("strValue >>> " + strValue);
        console.log("Checkbox Len >> " + jQuery(this).find('input[type=checkbox]').length);
        if(jQuery(this).find('input[type=checkbox]').is(":checked")) {
            console.log("Checkbox is checked.");
        }
        else {
            console.log("Checkbox is unchecked.");
        }*/

        if( jQuery('#ss-saddle_seat_size .ss-list-option:contains('+strValue+')').length == 0 ) {
			
			if( jQuery('#ss-saddle_seat_size .ss-show-more').length > 0 ){
				jQuery('#ss-saddle_seat_size .ss-show-more a')[0].click();
			}
		}
		
		if( jQuery('#ss-saddle_seat_size .ss-list-link:contains('+strValue+')').length > 0 ){
			sessionStorage.setItem('isCustomChecked','yes');
			jQuery('#ss-saddle_seat_size .ss-list-link:contains('+strValue+')')[0].click();
			
			setTimeout(function () {
				sessionStorage.removeItem('isCustomChecked');
			},2000);
		}

	});

	jQuery(document).on('click','#ss-saddle_seat_size .ss-list-option',function () {
		//console.log("default seat size.....");
		//console.log("session is set >> " + sessionStorage.getItem('isCustomChecked'));
		if( sessionStorage.getItem('isCustomChecked') === null ) {
			var $this    = jQuery(this);
	        var strValue = $this.text().trim();
	        //console.log("default  strValue >>> " + strValue);
	        //console.log("custom Len >>"+jQuery('.custSeatSize .custSizeDropdownList .custcheckbox:contains('+strValue+')').length);
	        
	        setTimeout(function () {
				//console.log("is active >> " + $this.hasClass('ss-active'));

		        if( jQuery('.custSeatSize .custSizeDropdownList .custcheckbox:contains('+strValue+')').length > 0 ){
					//jQuery('.custSeatSize .custSizeDropdownList .custcheckbox:contains('+strValue+')')[0].click();
					if($this.hasClass('ss-active')){
						jQuery('.custSeatSize .custSizeDropdownList .custcheckbox:contains('+strValue+') input[type=checkbox]').prop("checked", true);
					}
					else{
						jQuery('.custSeatSize .custSizeDropdownList .custcheckbox:contains('+strValue+') input[type=checkbox]').prop("checked", false);
					}
				}
	        },2000);
		}        
	});


	jQuery(document).on('click','.ss-list-option.ss-summary-reset',function (){
		//console.log('on clear....');
		jQuery('.custSeatSize .custSizeDropdownList .custcheckbox input[type=checkbox]').prop("checked", false);
	});

	//on filter option click
	jQuery(document).on('click','.ss-facets .ss-list .ss-list-option .ss-list-link', function (){
		
		if( jQuery('#ss-saddle_seat_size .ss-list-option').length > 0 ){
			
			jQuery('#ss-saddle_seat_size .ss-list-option').each(function (){
				console.log(" option >>> " + jQuery(this).text());
			});

			jQuery('#ss-saddle_gullet_width .ss-list-option').each(function (){
				console.log(" option >>> " + jQuery(this).text());
			});

		}
	});