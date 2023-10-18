var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
 	
 	addCustomNavMenu();

    function addCustomNavMenu(){
    	if(jQuery('#site-header .main-nav #main-nav__menus li.main-nav__parent').length > 0 && jQuery('.custNavMenu').length == 0) {
   			
   			//Mobile
   			if(jQuery(window).width() <= 991 ){
				jQuery('<li class="main-nav__parent has-child custNavMenu"> <div class="custMobileMenuPlus"> <div class="custMenuLink">Mens</div><div class="custNavMenuDesignMobile"> <div class="custMenuList"> <div class="custTabWrapper"> <div> <input type="radio" name="tabset" id="tab1" aria-controls="custTabsBoots"><label for="tab1">boots</label> <div class="custTabPanel" id="custTabsBoots"> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-boots/mens-boots-shop-all.jpg"><a href="https://www.alvies.com/collections/mens-boots">Shop All</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-boots/cowhide.jpg"><a href="https://www.alvies.com/collections/cowhide-leather-boots">Cowhide</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-boots/exotics.jpg"><a href="https://www.alvies.com/search?q=exotics">Exotics</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-boots/roper.jpg"><a href="https://www.alvies.com/collections/mens-boots/products/the-manchaca">Roper</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-boots/BFG.jpg"><a href="https://www.alvies.com/collections/mens-boots#product-bfg">BFG</a></li></ol> </div></div><div> <input type="radio" name="tabset" id="tab2" aria-controls="custTabsFlops"><label for="tab2">Flops</label> <div class="custTabPanel" id="custTabsFlops"> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-flops/mens-flops-shop-all.jpg"><a href="https://www.alvies.com/collections/flops">Shop All</a></li><li class="custListProdusts"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-riverside-448668_360x.jpg?v=1678216352"><a href="https://www.alvies.com/collections/flops/products/the-riverside?color=san-marcos-suntan"><span>THE RIVERSIDE</span> SAN MARCOS SUNTAN</a></li><li class="custListProdusts"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-riverside-975289_360x.jpg?v=1678216352"><a href="https://www.alvies.com/collections/flops/products/the-riverside?color=hill-country-rain"><span>THE RIVERSIDE</span> HILL COUNTRY RAIN</a></li><li class="custListProdusts"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-riverside-130301_360x.jpg?v=1678216352"><a href="https://www.alvies.com/collections/flops/products/the-riverside?color=backyard-tiki-bar"><span>THE RIVERSIDE</span> BACKYARD TIKI BAR</a></li></ol> </div></div><div> <input type="radio" name="tabset" id="tab3" aria-controls="custTabsGear"><label for="tab3">GEAR</label> <div class="custTabPanel" id="custTabsGear"> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-gear/mens-gear-shop-all.jpg"><a href="https://www.alvies.com/collections/gear">Shop All</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-gear/mens-gear-tees.jpg"><a href="https://www.alvies.com/collections/tees"> Tees</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-gear/mens-gear-hats.jpg"><a href="https://www.alvies.com/collections/hats"> Hats</a></li></ol> </div></div><div> <input type="radio" name="tabset" id="tab4" aria-controls="custTabsVinyl"><label for="tab4">VINYL</label> <div class="custTabPanel" id="custTabsVinyl"> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-vinyl/mens-vinyl.jpg"><a href="https://www.alvies.com/collections/waterloo-records-recommends">Shop All</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-vinyl/mens-vinyl-gray-clark.jpg"><a href="https://www.alvies.com/collections/waterloo-records-recommends/products/gary-clark-jr-cjg-live"> GARY CLARK</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-vinyl/mens-vinyl-nelson.jpg"><a href="https://www.alvies.com/collections/waterloo-records-recommends/products/willie-nelson-a-beautiful-time-1"> WILLIE NELSON</a></li></ol> </div></div><div class="custGiftCardMenu"><a href="#"><label for="tab4">GiFT CARDS</label></a></div></div></div></div></div></li><li class="main-nav__parent has-child"> <div class="custMobileMenuPlus"> <div class="custMenuLink">womens</div><div class="custNavMenuDesignMobile custWomanListDesign"> <div class="custMenuList"> <div class="custTabWrapper"> <div> <input type="radio" name="tabset" id="tab5" aria-controls="custTabsBoots"><label for="tab5">boots</label> <div class="custTabPanel" id="custTabsBoots"> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women-boots/woman-boots.jpg"><a href="https://www.alvies.com/collections/womens-boots">Shop All</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women-boots/woman-boots-cow-girl.jpg"><a href="https://www.alvies.com/collections/womens-cowgirl">Cowgirl</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women-boots/woman-boots-shorty.jpg"><a href="https://www.alvies.com/collections/womens-shorty">Shorty</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women-boots/woman-boots-ankle.jpg"><a href="https://www.alvies.com/collections/womens-ankle">Ankle</a></li></ol> </div></div><div> <input type="radio" name="tabset" id="tab6" aria-controls="custTabsFlops"><label for="tab6">Artist Series</label> <div class="custTabPanel" id="custTabsFlops"> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-flops/mens-flops-shop-all.jpg"><a href="https://www.alvies.com/collections/artist-series">Shop All</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women+artist+series/josh-adams.jpg"><a href="https://www.alvies.com/collections/artist-series/products/artist-series-josh-adams?color=hand-painted-rainey-boot">JOSH ADAMS</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women+artist+series/kelsey-archbold.jpg"><a href="https://www.alvies.com/collections/artist-series/products/artist-series-kelsey-archbold?color=hand-painted-rainey-boot">KELSEY ARCHBOLD</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women+artist+series/jennay-say-qua.jpg"><a href="https://www.alvies.com/collections/artist-series/products/artist-series-jennay-sayqua?color=hand-painted-rainey-boot">JENNAY SAY QUA</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women+artist+series/danika-ostrowski.jpg"><a href="https://www.alvies.com/collections/artist-series/products/artist-series-danika-ostrowski?color=hand-painted-rainey-boot">DANIKA OSTROWSKI</a></li></ol> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women+artist+series/david-regone.jpg"><a href="https://www.alvies.com/collections/artist-series/products/artist-series-david-regone?color=hand-painted-rainey-boot">DAVID REGONE</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women+artist+series/nora-burke.jpg"><a href="https://www.alvies.com/collections/artist-series/products/artist-series-nora-burke?color=hand-painted-rainey-boot">NORA BURKE</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women+artist+series/mikaela-friedman.jpg"><a href="https://www.alvies.com/collections/artist-series/products/artist-series-mikaela-friedman?color=hand-painted-rainey-boot">MIKAELA FRIEDMAN</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women+artist+series/laree-evelyn.jpg"><a href="https://www.alvies.com/collections/artist-series/products/artist-series-laree-evelyn?color=hand-painted-rainey-boot">LAREE EVELYN</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women+artist+series/brandon-owen.jpg"><a href="https://www.alvies.com/products/artist-series-brandon-owen?_pos=1&_sid=e44cbd259&_ss=r&color=hand-painted-rainey-boot">BRANDON OWEN</a></li></ol> </div></div><div> <input type="radio" name="tabset" id="tab7" aria-controls="custTabsGear"><label for="tab7">Flops</label> <div class="custTabPanel" id="custTabsGear"> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/women-flops/woman-flops.jpg"><a href="https://www.alvies.com/collections/flops">Shop All</a></li><li class="custListProdusts"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-riverside-448668_360x.jpg?v=1678216352"><a href="https://www.alvies.com/collections/flops/products/the-riverside?color=san-marcos-suntan"><span>THE LAKE AUSTIN</span> BACKYARD TIKI BAR</a></li><li class="custListProdusts"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-lake-austin-814761_360x.jpg?v=1678216202"><a href="https://www.alvies.com/collections/flops/products/the-lake-austin?color=hill-country-rain"><span>THE LAKE AUSTIN</span> HILL COUNTRY RAIN</a></li><li class="custListProdusts"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-riverside-130301_360x.jpg?v=1678216352"><a href="https://www.alvies.com/collections/flops/products/the-lake-austin?color=old-wood-canoe"><span>THE LAKE AUSTIN </span> OLD WOOD CANOE</a></li></ol> </div></div><div> <input type="radio" name="tabset" id="tab8" aria-controls="custTabsGear"><label for="tab8">GEAR</label> <div class="custTabPanel" id="custTabsGear"> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-gear/mens-gear-shop-all.jpg"><a href="https://www.alvies.com/collections/gear">Shop All</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-gear/mens-gear-tees.jpg"><a href="https://www.alvies.com/collections/tees"> Tees</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-gear/mens-gear-hats.jpg"><a href="https://www.alvies.com/collections/hats"> Hats</a></li></ol> </div></div><div> <input type="radio" name="tabset" id="tab9" aria-controls="custTabsVinyl"><label for="tab9">VINYL</label> <div class="custTabPanel" id="custTabsVinyl"> <ol> <li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-vinyl/mens-vinyl.jpg"><a href="https://www.alvies.com/collections/waterloo-records-recommends">Shop All</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-vinyl/mens-vinyl-gray-clark.jpg"><a href="https://www.alvies.com/collections/waterloo-records-recommends/products/gary-clark-jr-cjg-live"> GARY CLARK</a></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/mens-vinyl/mens-vinyl-nelson.jpg"><a href="https://www.alvies.com/collections/waterloo-records-recommends/products/willie-nelson-a-beautiful-time-1"> WILLIE NELSON</a></li></ol> </div></div><div class="custGiftCardMenu"><a href="#"><label for="tab4">GiFT CARDS</label></a></div></div></div></div></div></li>').insertAfter('#main-nav__menus li.main-nav__parent:eq(1)');
			}
			else{
    			}
			}
    	}

    	//on main menu hover show its first submenu by default active
		jQuery(document).on({
	      	mouseover: function () {
	      		jQuery(this).siblings('.custNavMenuDesign').find('.custMenuList .custTabWrapper label.custMenuLabel').removeClass('custActiveTab');
	      		jQuery(this).siblings('.custNavMenuDesign').find('.custMenuList .custTabWrapper label.custMenuLabel:eq(0)').addClass('custActiveTab');
	      	}
	    },'#site-header .main-nav #main-nav__menus li.main-nav__parent .main-nav__top-item');

    	//submenu hover show its submenu
    	jQuery(document).on({
	      mouseover: function () {
	        jQuery('.custMenuList .custTabWrapper label.custMenuLabel').not(this).removeClass('custActiveTab');
    		jQuery(this).addClass('custActiveTab');
	      }
	    },'.custMenuList .custTabWrapper label.custMenuLabel');
		

    	//on main menu click show its submenu
		jQuery(document).on('click','#main-nav__menus .custMobileMenuPlus .custMenuLink', 
			function(){
			console.log("Check class >>" + jQuery(this).hasClass('custMenuLinkActive'));
			
			if(jQuery('#main-nav__menus li.main-nav__parent.has-child.has-open-child-menu').length > 0){
				jQuery('#main-nav__menus li.main-nav__parent.has-child.has-open-child-menu').removeClass('has-open-child-menu');	
			}

			//close submenus of the main menu
			jQuery('#main-nav__menus .custMobileMenuPlus .custMenuLink').siblings('.custNavMenuDesignMobile').find('input[type="radio"]').prop('checked',false);

			if(jQuery(this).hasClass('custMenuLinkActive')) {
				jQuery(this).removeClass('custMenuLinkActive');
			}
			else{
				jQuery('#main-nav__menus .custMobileMenuPlus .custMenuLink').not(this).removeClass('custMenuLinkActive');
				jQuery(this).addClass('custMenuLinkActive');
			}
		});

		/*jQuery(document).on('click','#main-nav__menus li.main-nav__parent.has-child', 
			function(){
			console.log("Remove class..");
			console.log("Len >> " + jQuery('#main-nav__menus li.main-nav__parent.has-child.has-open-child-menu').length);
			if(jQuery('#main-nav__menus li.main-nav__parent.has-child.has-open-child-menu').length > 0){
				jQuery('#main-nav__menus li.main-nav__parent.has-child').not(this).removeClass('has-open-child-menu');
			}
	 	});*/

		clearInterval(waitForJquery);
    }
}, 50);  
