	//To add the 'quick add/view details' CTA on PLP
	addcustomCtatoPlp();

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
					/*if( jQuery('.custGreatProduct').length > 0 ){
						jQuery('.custGreatProduct').remove();
					}

					if( jQuery('.custCategoryWrapper').length > 0 ){
						jQuery('.custCategoryWrapper').remove();
						addcustomCtatoPlp();
					}
					addcustomCtatoPlp();*/
					}                   
				}, 20); 
			}
	 	}, false);
	  	return realXHR;
	}
	window.XMLHttpRequest = newXHR;


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
		
		/*if( jQuery('.custGreatProduct').length > 0 ){
			jQuery('.custGreatProduct').remove();
		}

		if( jQuery('.custCategoryWrapper').length > 0 ){
			jQuery('.custCategoryWrapper').remove();
		}	
		addcustomCtatoPlp();*/
	});

	jQuery('.section-header a[href="#cart-offcanvas]').length;