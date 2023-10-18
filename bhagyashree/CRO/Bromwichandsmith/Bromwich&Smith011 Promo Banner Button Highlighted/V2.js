var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {
  
    addPromoBannerButtonV2();
    
    function addPromoBannerButtonV2(){
      if(jQuery(".custSitewideConsultBannerV2").length == 0 ){
        jQuery('<div class="custSitewideConsultBannerV2"> Are you ready to be debt free?  <a href="https://www.bromwichandsmith.com/contact-us">Book A Free Consultation Today</a></div>').insertAfter('.jumbotron.generic_header.top-header-strip-wrapper');
      }
    }

  clearInterval(waitForjQuery);
  }
}, 50);