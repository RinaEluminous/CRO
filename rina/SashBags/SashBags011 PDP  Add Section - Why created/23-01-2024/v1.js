console.log('SashBags011 PDP  Add Section - Why created');

var waitForJquery = setInterval(function () {

    if (typeof jQuery != "undefined") {

        if(jQuery(".product").length > 0) {
          var arrExcludedAddOnProducts = [
            "/products/dust-bag",
            "/products/honey-leather-cleaner",
            "/products/gift-card",
            "/products/leather-honey-cleaner",
            "/products/elephant-charm-keychain",
            "/products/sunglass-case",
            "/products/luggage-tag",
            "/products/fox-charm-keychain",
            "/products/sash-keychain",
            "/products/black-tan-sash-logo-strap",
            "/products/black-white-sash-logo-strap",
            "/products/lotus-jacquard-ribbon-strap",
            "/products/sapphire-jacquard-ribbon-strap",
           
          ];
  
         var strCurrenntLocationPath = window.location.pathname;
          if (jQuery.inArray(strCurrenntLocationPath, arrExcludedAddOnProducts) == -1) {
              addCustWhyCreatedSectionOnPDP();
          }
        }
      
      function addCustWhyCreatedSectionOnPDP() {
  
        var custWhyCreatedHtml ='<section class="custFounderWraper">'+
        '    <div class="container container--lg">'+
        '        <div class="row">'+
        '            <div class="col-md-6">'+
        '                <cite>A word from the Founder</cite>'+
        '                <h2>Why the Sash Bag was Created</h2>'+
        '                <p>"I was at an amusement park with my five-year old son and was so frustrated with my purse that I put it back in the car, but then I didn’t have enough room in my pockets for the things I needed. I wanted something that was not a purse, but still allowed me to magically have everything I need at my fingertips. I couldn’t find a good solution and then, the idea for a Sash Bag just popped into my head! So, I made one and after three people stopped and asked me where I got it, I knew I was on to something that could be big. Needless to say, I haven’t carried a “purse” in 13 years!"</p>'+
        '                <div class="signature">'+
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/founder-signature-img.png" alt="">'+
        '                </div>'+
        '            </div>'+
        '            <div class="col-md-6">'+
        '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/founder-desktop-img.png" alt="" class="fluid-img desktopImg">'+
        '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/founder-mobile-img.png" alt="" class="fluid-img mobileImg">'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</section>';
       


        if(jQuery('main section.shopify-section--apps:eq(0)').length > 0 && jQuery('.custFounderWraper').length == 0 ){
  
            jQuery(custWhyCreatedHtml).insertBefore('main section.shopify-section--apps:eq(0)');
  
      }
    }
    
    clearInterval(waitForJquery);
    
}
}, 50);