var waitForJquery = setInterval(function () {
    if (typeof jQuery != "undefined") {
    
    addCategoryHeroSection();

function addCategoryHeroSection() {
    var intCount = 0;
    var intInterval = setInterval(function (){
    intCount += 1;
    if(jQuery('.FlexboxIeFix header.PageHeader--small.PageHeader--withBackground').length > 0 && jQuery('.FlexboxIeFix .custCCheroBanner').length == 0){
        jQuery('<div class="custCCheroBanner"><div class="imageBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cc_category_hero1.png"></div><div class="imageBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cc_category_hero2.png"></div><div class="imageBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/cc_category_hero3.png"></div><div class="textBox"><h2>Bestsellers</h2><p>Crafted with Purpose, Unforgettable, and Timeless</p></div></div>').appendTo('header.PageHeader--small.PageHeader--withBackground');
    }
   
    if(intCount === 120){
        clearInterval(intInterval);
    }
    },30);  
   
}

clearInterval(waitForJquery);
}
}, 50);