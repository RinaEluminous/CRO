var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {

		if(jQuery(".page-home").length > 0){
			customFreeQuoteHtml();
		}

		if(jQuery(".quote-banner").length > 0){
			setZipCodeValue();
		}

		function customFreeQuoteHtml(){
			if(jQuery(".custFreeQuoteWraper").length == 0){
				jQuery('<div class="custFreeQuoteWraper"><h4>Peace of mind and savings are only a few clicks away!</h4><form action="javascript:void(0);"><div class="formWraper"><input type="text" placeholder="Zip Code" class="field" required><button type="submit" class="custButton">Get a Free Quote</button></div></form></div>').appendTo("section.main-banner .bm-container");
			}
			
		}

		function setZipCodeValue(){
			var intCountRun  = 0;
			
			if(sessionStorage.getItem("custZipCode") !== null) {
				var intInterval  = setInterval(function() {
					intCountRun += 1;
					if(jQuery('#hs-form-iframe-0').length > 0) {

						// get the iframe element
						var iframe = jQuery('#hs-form-iframe-0'); 

						// get the form input element inside the iframe
						var input  = iframe.contents().find('#dtc_zip-6a90b49e-d11b-4b11-b195-a1d334cda05f'); 

						// set the value of the input element
						input.val(sessionStorage.getItem("custZipCode"));
					}
					
					if(intCountRun  === 60 ){
						clearInterval(intInterval);
					}
				},100);
			}
		}

		jQuery(document).on('click','.custFreeQuoteWraper .formWraper button.custButton', function(){
			var strZipCode = jQuery(".custFreeQuoteWraper .formWraper input.field").val().trim();
			if(strZipCode !== '' && strZipCode !== null && strZipCode !== undefined){
				sessionStorage.setItem("custZipCode", strZipCode);
				window.location.href = "https://arwhome.com/quote"; 
			}
		});

 		clearInterval(waitForJquery);  
    }
}, 50); 