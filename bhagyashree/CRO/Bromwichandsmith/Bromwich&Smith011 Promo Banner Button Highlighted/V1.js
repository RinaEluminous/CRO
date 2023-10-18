var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {
  
  addPromoBannerButtonV1();
    
    function addPromoBannerButtonV1(){
      if(jQuery(".custSitewideConsultBannerV1").length == 0 ){
        jQuery('<div class="custSitewideConsultBannerV1"> Are you ready to be debt free?  <a href="https://www.bromwichandsmith.com/contact-us">Book A Free Consultation Today</a></div>').insertAfter('.jumbotron.generic_header.top-header-strip-wrapper');
      }
    }

  clearInterval(waitForjQuery);
  }
}, 50);