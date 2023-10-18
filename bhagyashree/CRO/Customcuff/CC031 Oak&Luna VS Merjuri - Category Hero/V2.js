var waitForJquery = setInterval(function () {
if (typeof jQuery != "undefined") {
changeTextToCategoryHeroSection();

function changeTextToCategoryHeroSection(){
    var intCount = 0;
    var intInterval = setInterval(function (){
        intCount += 1;
    //change text of h1
   
    if(jQuery('.FlexboxIeFix .Container .SectionHeader h1').length > 0 ) {
        jQuery('.FlexboxIeFix .Container .SectionHeader h1').text('BestSellers');
    }
  
    //change text of description
    if(jQuery('.FlexboxIeFix .Container .SectionHeader .SectionHeader__Description p span').length > 0){
        jQuery('.FlexboxIeFix .Container .SectionHeader .SectionHeader__Description p span').text('Crafted with Purpose, Unforgettable, and Timeless');
    }
    
  
    if(intCount === 120){
        clearInterval(intInterval);
    }
    },30);  

}
clearInterval(waitForJquery);
}
}, 50);