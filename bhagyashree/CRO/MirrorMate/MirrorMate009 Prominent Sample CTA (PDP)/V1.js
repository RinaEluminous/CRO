var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
		
		//call function only on Collection page
        if(jQuery('.product-template').length > 0) {
            updatePdpSection();
        }

        //re-position the product description 
        function updatePdpSection(){
            console.log("Len >>" + jQuery('#desc-tab .description p').length );
            console.log("cust Len >>" + jQuery('.custProdDescription').length );
            if(jQuery('#desc-tab .description p').length > 0 && jQuery('.custProdDescription').length == 0){
                console.log("re-position >>");
                jQuery('#desc-tab .description p').addClass('custProdDescription');
                jQuery('.custProdDescription').insertAfter('.product-title.desktop-title');
                jQuery('<span id="custReadMore">Read more</span>').insertAfter('.custProdDescription');
            }
        }
		
        jQuery(document).on('click','.custOrder', function () {
            jQuery('.purchase-box .step-add-wizard.clearfix').show();
        });

        //on read more/read less CTA click
        jQuery(document).on('click','#custReadMore' , function (){
            if(jQuery(this).text().trim() == 'Read more'){
                jQuery('.custProdDescription').addClass('custBlockOpen');
                jQuery(this).text('Read less');
            }
            else{
                jQuery('.custProdDescription').removeClass('custBlockOpen');
                jQuery(this).text('Read more');
            }
        });

   	clearInterval(waitForJquery);
    } 
}, 50);   

