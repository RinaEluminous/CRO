var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {

        if(jQuery('.page-home').length > 0 && sessionStorage.getItem("custIsSlideClosed") === null) { 
            custHpWaterAndSewerPlansSlide();
        }

        function custHpWaterAndSewerPlansSlide() {
            var intCount    = 0;
            var intInterval = setInterval( function () {
                intCount   += 1;

                if(jQuery('body').length  > 0) {
                    if(jQuery('.custBurstPipeRuin').length == 0 ) {
                        jQuery('<div class="custBurstPipeRuin"><div class="close-arrow"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/ARW/close-arrow.svg"></div><h3>Don\'t Let a Burst Pipe Ruin Your Home</h3> <p>Learn why protecting your water &amp; sewer lines are so important today!</p><a href="https://arwhome.com/wsl-plan"> <span>Explore More About </span> <span>Water & Sewer Line Protection</span> </a></div>').appendTo('body');
                    }
                }

                if( intCount ===  25 ){
                    if(jQuery(".custBurstPipeRuin").length > 0){
                        jQuery(".custBurstPipeRuin").addClass('custRuinOpen');
                    }
                    clearInterval(intInterval);
                }
            },50);
        }

        jQuery(document).on('click','.custBurstPipeRuin .close-arrow', function() {
            jQuery(".custBurstPipeRuin").removeClass('custRuinOpen');
            sessionStorage.setItem("custIsSlideClosed","1");
        });

        jQuery(document).on('click','.custBurstPipeRuin a', function() {
            sessionStorage.setItem("custIsSlideClosed","1");
        });

        clearInterval(waitForJquery);  
    }
}, 50); 