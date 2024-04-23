console.log('Emuaid078: Conditions LP - Highlight Guarantee');
var waitForJquery = setInterval(function() {

        var strURL = window.location.href;
    
        if (strURL.indexOf('nail-fungus-cndf01') > 0) {
          
            var custHtmlLogoGuaranteeSection ='<div  class="position-relative w-100 custHighlightGuaranteeWraper">'+
            '    <div class="position-absolute text-white d-flex flex-column align-items-start justify-content-center" style="top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0,0,0,.7);">'+
            '        <div class="container">'+
            '            <div class="col-md-6">'+
            '                <span style="color: #bbb;" class="text-uppercase">SubHeadline</span>'+
            '                <!-- on small screens remove display-4 -->'+
            '                <h1 class="mb-4 mt-2 display-4 font-weight-bold">Enter Your <span style="color: #9B5DE5;">Headline Here</span></h1>'+
            '                <p style="color: #bbb;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eos ea, cum quae facilis optio impedit tempora aliquam at eveniet?</p>'+
            '                <div class="mt-5">'+
            '                    <!-- hover background-color: white; color: black; -->'+
            '                    <a href="#" class="btn px-5 py-3 text-white mt-3 mt-sm-0" style="border-radius: 30px; background-color: #9B5DE5;">Get Started</a>'+
            '                </div>'+
            '            </div>'+
            '        </div>'+             
            '    </div>'+
            '</div>'+
            '<a href="https://componentity.com" target="_blank" class="block">'+
            '    <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png" width="120px" class="d-block mx-auto my-5">'+
            '</a>';
           
         

            var intCount = 0;
            var intLogoGuaranteeInterval = setInterval(function() {
                intCount += 1;

                
       
             if(jQuery('#replo-fullpage-element .r-1xxvabh').length > 0 && jQuery('.custHighlightGuaranteeWraper').length == 0){

                jQuery(custHtmlLogoGuaranteeSection).prependTo('#replo-fullpage-element .r-1xxvabh');

                        

             }
             if (intCount === 80) {
                clearInterval(intLogoGuaranteeInterval);
            }
        }, 30);
        
        } 
  
        clearInterval(waitForJquery);
    
  }, 50);
