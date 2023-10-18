var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {
        
        if(jQuery('.page-home').length > 0){
            addCustWaterAndSewerCtaToHP();
        }

        function addCustWaterAndSewerCtaToHP(){
            var strText = "";
            if(jQuery(window).width() <= 767){
                strText = "Shop Plans";
            }
            else{
                strText = "Shop Our Home Warranty Plans";
            }

            if( jQuery(".custStickyWaterSewer").length == 0 ) {
                jQuery('<div class="custStickyWaterSewer"><div class="custWaterSewerBlocks">Water &amp; Sewer Line Protection</div><div class="custBurstPipeRuin"><div class="close-arrow"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/close-arrow.svg"></div><h3>Don\'t Let a Burst Pipe Ruin Your Home</h3> <p>Learn why protecting your water &amp; sewer lines are so important today!</p><a href="https://arwhome.com/wsl-plan"> <span>Explore More About </span>Water &amp; Sewer Line Protection </a></div></div>').prependTo(".page-home .arw-bg-grey-lite:contains("+strText+")");
            }
        }

    	jQuery(document).on('click','.custBurstPipeRuin .close-arrow', function() {
    		jQuery('.custStickyWaterSewer .custWaterSewerBlocks').removeClass('custWaterActive');
    	});

        jQuery(document).on('click','.custStickyWaterSewer .custWaterSewerBlocks', function (){
            jQuery(this).addClass('custWaterActive');
        });

    	clearInterval(waitForJquery);  
    }
}, 50); 