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
		}
		
		clearInterval(waitForjQuery);
	}
  }, 50);