var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {

		updateSiteNavigation();
      
        addPromoBannerButton();
    
	    function addPromoBannerButton(){
	      if(jQuery(".custSitewideNavBanner").length == 0 ){
	        jQuery('<div class="custSitewideNavBanner"> Are you ready to be debt free?  <a href="https://www.bromwichandsmith.com/contact-us">Book A Free Consultation Today</a></div>').insertAfter('.jumbotron.generic_header.top-header-strip-wrapper');
	      }
	    }

		function updateSiteNavigation() {
            // Change logo
			if(jQuery('.custLogo').length == 0){
				jQuery('<img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/Bromwich-Smith-logo.svg" id="site-logo" class="custLogo">').insertBefore('.navbar > .container-fluid .navbar-brand a svg#site-logo');
			}
          
          	//re-position the Contact us menu to last position
			if(jQuery('.nav-wrapper .navbar .navbar-we-mega-menu ul.we-mega-menu-ul.nav.nav-tabs li.we-mega-menu-li:contains(Contact Us)').length > 0){
				var strElement  = jQuery('.nav-wrapper .navbar .navbar-we-mega-menu ul.we-mega-menu-ul.nav.nav-tabs li.we-mega-menu-li').last();
				jQuery('.nav-wrapper .navbar .navbar-we-mega-menu ul.we-mega-menu-ul.nav.nav-tabs li.we-mega-menu-li:contains(Contact Us)').insertAfter(strElement);
			}

			//reposition the 'Why-us' menu
			if(jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu:contains(Why Us)').length > 0 ) {
					jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu:contains(Why Us)').insertAfter('.we-mega-menu-ul.nav-tabs .dropdown-menu:contains(Resource Center)');
			}

			//rename the 'Resource Center' menu
			if(jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu .we-mega-menu-li:contains(Resource Center)').length > 0 ) {
				jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu .we-mega-menu-li:contains(Resource Center)').text('Understanding Debt');
			}

			//rename the 'Debt Relief Options' menu
			if(jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu .we-mega-menu-li:contains(Debt Relief Options )').length > 0) {
				jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu .we-mega-menu-li:contains(Debt Relief Options)').text('Debt Relief Solutions');
			}

			//remove the links from - Resource Center    
			if(jQuery('div.we-mega-menu-submenu-inner .nav-tabs li.we-mega-menu-li a:contains(Client + Creditor Package Requests)').length > 0) {
				
				jQuery('div.we-mega-menu-submenu-inner .nav-tabs li.we-mega-menu-li a:contains(Client + Creditor Package Requests)').parent().remove();
			}

			//remove the links from - Resource Center    
			if(jQuery('div.we-mega-menu-submenu-inner .nav-tabs li.we-mega-menu-li a:contains(Taxation + Reporting Forms)').parent().length > 0) {
				
				jQuery('div.we-mega-menu-submenu-inner .nav-tabs li.we-mega-menu-li a:contains(Taxation + Reporting Forms)').parent().remove();
			}

			//add custom menu with submenu
			if(jQuery('.customNavMenu').length == 0){
				jQuery('<li class="we-mega-menu-li dropdown-menu customNavMenu" data-level="0" data-element-type="we-mega-menu-li" description="" data-submenu="1" hide-sub-when-collapse="" data-group="0" data-class="" data-icon="" data-caption="" data-alignsub="" data-target=""> <a class="we-mega-menu-li" title="" target="">Resources</a> <div class="we-mega-menu-submenu" data-element-type="we-mega-menu-submenu" data-submenu-width="" data-class="" style="width: px"> <div class="we-mega-menu-submenu-inner"> <div class="we-mega-menu-row" data-element-type="we-mega-menu-row" data-custom-row="0"> <div class="we-mega-menu-col span12" data-element-type="we-mega-menu-col" data-width="12" data-block="" data-blocktitle="0" data-hidewhencollapse="" data-class=""> <ul class="nav nav-tabs subul"> <li class="we-mega-menu-li" data-level="1" data-element-type="we-mega-menu-li" description="" data-submenu="0" hide-sub-when-collapse="" data-group="0" data-class="" data-icon="" data-caption="" data-alignsub="" data-target="_self"> <a class="we-mega-menu-li" title="" href="https://www.bromwichandsmith.com/tax-forms/" target="_self"> Taxation + Reporting Forms </a> </li><li class="we-mega-menu-li" data-level="1" data-element-type="we-mega-menu-li" description="" data-submenu="0" hide-sub-when-collapse="" data-group="0" data-class="" data-icon="" data-caption="" data-alignsub="" data-target="_self"> <a class="we-mega-menu-li" title="" href="https://www.bromwichandsmith.com/proof-of-claim" target="_self"> Client + Creditor Package Request </a> </li></ul> </div></div></div></div></li>').insertAfter('.navbar-we-mega-menu ul.we-mega-menu-ul.nav.nav-tabs li.we-mega-menu-li[data-level="0"]:contains(FAQ)');
			}

		}
		
		clearInterval(waitForjQuery);
	}
  }, 50); 