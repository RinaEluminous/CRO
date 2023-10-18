var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        
        //call function only on Collection page
        if(jQuery('.product-template').length > 0) {
            updatePdpSection();
        }

        function updatePdpSection(){
            //re-position the product description 
            if(jQuery('#desc-tab .description p').length > 0 && jQuery('.custProdDescription').length == 0){
                jQuery('#desc-tab .description p').addClass('custProdDescription');
                jQuery('.custProdDescription').insertAfter('.product-title.desktop-title');
                    var intTotalWordsArr = jQuery('.custProdDescription').text().trim().split(' ');
                    if(intTotalWordsArr.length > 40){
                        intTotalWordsArr.splice(40, 0,'<span id="custDots">...</span>');
                        intTotalWordsArr  = intTotalWordsArr.join(' ');
                        var partialText   = intTotalWordsArr.split('</span>');
                        var firstPartText = partialText[0].trim();
                        var finalText     = "<p>"+firstPartText+"</span><span id='custMoreText'>"+partialText[1]+"</span><a href='javascript:void(0);' id='custReadMore'>Read more</a></p>";
                        jQuery('.custProdDescription').html(finalText);
                    }
                }

            //add custom Order CTAs
            if( jQuery('.custDarkProdustsWrapper').length == 0 ){
                jQuery('<div class="custDarkProdustsWrapper"><div class="custOrderButtonDark">ORDER FRAME</div><div class="custOrderSample"><div class="custOrderSampleCTA">Order $2 Sample</div> <p>See how the frame style and color will look in your bath.</p></div></div>').insertAfter('.custProdDescription');
            }

            //add custom feature block 
            if( jQuery('.custCherokeeBarnwoodFrame').length == 0 ){
                jQuery('<div class="custCherokeeBarnwoodFrame"><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/custom-made-Icon.svg"><span>Custom made to fit your mirror</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/guaranteed-Icon.svg"><span>Guaranteed to last</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np-easy-icon.svg"><span>Fast and easy to install</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/eco-friendly-icon.svg"><span>Eco-friendly</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/durability-tested-icon.svg"><span>Durability-tested </span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np-position-icon.svg"><span>Crafted in Charlotte, NC</span></li></ul></div>').insertAfter('.product-aside .step-add-wizard');
            }
        }
        
        //When a user clicks on Order Frame CTA,it should scroll to the ordering section
        jQuery(document).on('click','.custDarkProdustsWrapper .custOrderButtonDark',function(){
            jQuery('.purchase-box .step-add-wizard').show();
            jQuery('html, body').animate({
                    scrollTop: jQuery('.purchase-box .step-add-wizard').offset().top-50
            }, 1000);
        });

        //On click of the 'Order $2 Sample' CTA, add product to cart
        jQuery(document).on('click','.custOrderSample .custOrderSampleCTA', function () {
            if( jQuery('a#p-order-sample').length > 0 ) {
                jQuery('a#p-order-sample')[0].click();
            }
        });
      
        //On click read more/read less CTA, show less/more content
        jQuery(document).on("click", ".custProdDescription #custReadMore", function() {
            if(jQuery(this).text() == "Read more"){
                jQuery('#custDots').css('display','none');
                jQuery('#custMoreText').css('display','inline');
                jQuery(this).text('Read less') ;
            }
            else{
                jQuery('#custDots').css('display','inline');
                jQuery('#custMoreText').css('display','none');
                jQuery(this).text('Read more') ;
            }           
        });

    clearInterval(waitForJquery);
    } 
}, 50);   