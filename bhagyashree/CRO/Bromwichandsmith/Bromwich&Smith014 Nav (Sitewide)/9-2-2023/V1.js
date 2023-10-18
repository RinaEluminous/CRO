var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {

		updateSiteNavigation();

		function updateSiteNavigation() {
			if(jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu:contains(Why Us)').length > 0 ){
				jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu:contains(Why Us)').insertAfter('.we-mega-menu-ul.nav-tabs .dropdown-menu:contains(Resource Center)');
				}

				if(jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu .we-mega-menu-li:contains(Resource Center)').length > 0 ){
					jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu .we-mega-menu-li:contains(Resource Center)').text('Understanding Debt');
				}

				if(jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu .we-mega-menu-li:contains(Debt Relief Options )').length > 0){
					jQuery('.we-mega-menu-ul.nav-tabs .dropdown-menu .we-mega-menu-li:contains(Debt Relief Options )').text('Debt Relief Solutions');
				}

				if(jQuery('.customNavMenu').length == 0){
					jQuery('<li class="we-mega-menu-li dropdown-menu" data-level="0" data-element-type="we-mega-menu-li" description="" data-submenu="1" hide-sub-when-collapse="" data-group="0" data-class="" data-icon="" data-caption="" data-alignsub="" data-target=""> <a class="we-mega-menu-li" title="" href="/your-options" target="">Resources</a> <div class="we-mega-menu-submenu" data-element-type="we-mega-menu-submenu" data-submenu-width="" data-class="" style="width: px"> <div class="we-mega-menu-submenu-inner"> <div class="we-mega-menu-row" data-element-type="we-mega-menu-row" data-custom-row="0"> <div class="we-mega-menu-col span12" data-element-type="we-mega-menu-col" data-width="12" data-block="" data-blocktitle="0" data-hidewhencollapse="" data-class=""> <ul class="nav nav-tabs subul"> <li class="we-mega-menu-li" data-level="1" data-element-type="we-mega-menu-li" description="" data-submenu="0" hide-sub-when-collapse="" data-group="0" data-class="" data-icon="" data-caption="" data-alignsub="" data-target="_self"> <a class="we-mega-menu-li" title="" href="https://www.bromwichandsmith.com/tax-forms/" target="_self"> Taxation + Reporting Forms </a> </li><li class="we-mega-menu-li" data-level="1" data-element-type="we-mega-menu-li" description="" data-submenu="0" hide-sub-when-collapse="" data-group="0" data-class="" data-icon="" data-caption="" data-alignsub="" data-target="_self"> <a class="we-mega-menu-li" title="" href="https://www.bromwichandsmith.com/proof-of-claim" target="_self"> Client + Creditor Package Request </a> </li></ul> </div></div></div></div></li>').insertAfter('.navbar-we-mega-menu ul.we-mega-menu-ul.nav.nav-tabs li.we-mega-menu-li:contains(FAQ)');

				}

		}
		
		clearInterval(waitForjQuery);
	}
  }, 50);