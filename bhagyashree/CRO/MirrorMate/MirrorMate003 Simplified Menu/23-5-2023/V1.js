var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {
		addCustSubMenuForShopOrder();
		
		function addCustSubMenuForShopOrder(){

			var custHTML = '<div class="custTabsShopOrder"><ul class="custTabsWrapper"><li class="custActive custProductsList" rel="tab1">By Color</li><li rel="tab2" class="custProductsList">By Decor</li><li rel="tab3" class="custProductsList">By Name</li><li rel="tab4" class="custProductsList">By Price</li><li><a href="https://www.mirrormate.com/collections/samples">Samples</a></li><li><a href="https://www.mirrormate.com/collections/all-frames">Best Sellers</a></li><li><a href="https://www.mirrormate.com/collections/shop-new-styles">New Arrivals</a></li><li><a href="https://www.mirrormate.com/products/gift-card">Gift Cards</a></li></ul><div class="custTabContainer"><ul class="custMobileMenuLinks"><li><a href="https://www.mirrormate.com/collections/samples">Samples</a></li></ul><h3 class="custTabDrawerHeading" rel="tab1">By Color</h3><div id="tab1" class="custTabContent"><a href="https://www.mirrormate.com/pages/shop-by-color" class="custViewAllButton">View All</a><ol class="custByColorProducts"><li><a href="https://www.mirrormate.com/collections/wood-tones"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/WoodTones_Frames_Assembled_Simpler.jpg?v=1651500746"><span>Shop Wood</span></a></li><li><a href="https://www.mirrormate.com/collections/white"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/White_d24c015a-f598-4b43-a718-8f07edc3b3472.jpg?v=1647972205"><span>Shop White</span></a></li><li><a href="https://www.mirrormate.com/collections/silver-grey"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/silver-home-bottom-2hg7vk2d_75fc8948-b7a1-4cad-b8c9-129a21b06247.jpg?v=1647972001"><span>Shop Silver</span></a></li><li><a href="https://www.mirrormate.com/collections/black"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/BlackFrames_Assembled_Simpler.jpg?v=1651500746"><span>Shop Black</span></a></li><li><a href="https://www.mirrormate.com/collections/bronze"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/corner-0001_medium.jpg?v=1651500283"><span>Shop Bronze</span></a></li><li><a href="https://www.mirrormate.com/collections/cherry-red"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/corner-0004_medium.jpg?v=1581190171"><span>Shop Cherry / Red</span></a></li><li><a href="https://www.mirrormate.com/collections/gold-champagne"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/325_providence_gold_lrg_medium.jpg?v=1651500217"><span>SHop GOLD/Champagne</span></a></li><li><a href="https://www.mirrormate.com/collections/metallic"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/Metallic_Group-tmp_medium.jpg?v=1635882856"><span>SHop Metallic</span></a></li><li><a href="https://www.mirrormate.com/collections/metallic"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Highline_SlimPaintable_CornerSLIM_97e5f01e-c51a-4343-8155-0dd8249d6afd_1500x.jpg?v=1667588271"><span>Paintable</span></a></li></ol></div><h3 class="custTabDrawerHeading" rel="tab2">By Decor</h3><div id="tab2" class="custTabContent"><a href="https://www.mirrormate.com/pages/shop-by-decor" class="custViewAllButton">View All</a><ol class="custByDecorProducts"><li><a href="https://www.mirrormate.com/collections/traditional"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/TraditionalFrames_Assembled_medium.jpg?v=1588602192"><span>Traditional</span></a></li><li><a href="https://www.mirrormate.com/collections/transitional"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/TransitionalFrames_Assembled_medium.jpg?v=1589289774"><span>Transitional</span></a></li><li><a href="https://www.mirrormate.com/collections/contemporary"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/ContemporaryFrames_Assembled_medium.jpg?v=1588602067"><span>Modern & Contemporary</span></a></li><li><a href="https://www.mirrormate.com/collections/farmhouse-rustic-lodge-cabin"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/038-Rustic-iStock-1211003958_square-min_medium.jpg?v=1589289737"><span>Farmhouse & Rustic</span></a></li><li><a href="https://www.mirrormate.com/collections/industrial"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/sbd-industrial-min_medium.jpg?v=1588602947"><span>Industrial</span></a></li><li><a href="https://www.mirrormate.com/collections/cottage"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/sbd-cottage-min_medium.jpg?v=1588602103"><span>Cottage</span></a></li><li><a href="https://www.mirrormate.com/collections/coastal"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/sbd-coastal-min_medium.jpg?v=1588602098"><span>Coastal</span></a></li><li><a href="https://www.mirrormate.com/collections/glam"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/038-Glam-iStock-467176390_square-min_medium.jpg?v=1589289754"><span>Glam</span></a></li></ol></div><h3 class="custTabDrawerHeading" rel="tab3">By Name</h3><div id="tab3" class="custTabContent"><a href="https://www.mirrormate.com/collections/all-frames" class="custViewAllButton">View All</a><ol class="custByNameProducts"><li><a href="https://www.mirrormate.com/collections/acadia"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/AcadiaOiledBronze_d3711676-25f8-49aa-89af-d571c532bd1b_360x.jpg?v=1658434399"><span>Acadia</span></a></li><li><a href="https://www.mirrormate.com/collections/annandale"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Annandale-White_V2.1_360x.jpg?v=1668014456"><span>Annandale</span></a></li><li><a href="https://www.mirrormate.com/collections/austin"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/austin-sl-grey-SL_360x.jpg?v=1682430888"><span>Austin</span></a></li><li><a href="https://www.mirrormate.com/collections/bellemeade"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Bellemeade_VintageSilver_Corner_25caaa77-584c-47e0-8438-49028665c242_360x.jpg?v=1627479345"><span>Bellemeade</span></a></li><li><a href="https://www.mirrormate.com/collections/big-sur"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/BigSur_OakBarrel_Corner_m-new_00f74624-89bc-477c-8dcf-439e8c9ad375_360x.jpg?v=1677096961"><span>Big Sur</span></a></li><li><a href="https://www.mirrormate.com/collections/broadway"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Broadway_BrushedChrome_Corner_360x.jpg?v=1658434959"><span>Broadway</span></a></li><li><a href="https://www.mirrormate.com/collections/chelsea"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Chelsea_SilverStreak_Corner_10027834-904c-4b86-bc0b-6c027343fb04_360x.jpg?v=1658435535"><span>Chelsea</span></a></li><li><a href="https://www.mirrormate.com/collections/cherokee"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Cherokee_EspressoWalnut_Corner_590x.jpg?v=1630723730"><span>Cherokee</span></a></li><li><a href="https://www.mirrormate.com/collections/cherokee-rustic"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Cherokee_OldVermontGrey_Corner-min_590x.jpg?v=1648661696"><span>Cherokee Rustic</span></a></li><li><a href="https://www.mirrormate.com/collections/corner-woods"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/WoodsWhite-CornerS-New2_120c0439-ea41-4fce-baed-073dbaef5890_360x.jpg?v=1667594521"><span>Corner Woods</span></a></li><li><a href="https://www.mirrormate.com/collections/essex"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Biltmore-White-Web-seam2-New_86f4827f-b13e-44fd-80f2-180e8597d2bd_360x.jpg?v=1655753075"><span>Essex</span></a></li><li><a href="https://www.mirrormate.com/collections/grandezza"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Grandezza_AgedSilver_CornerCropped2_FF-2_REF_e81c4797-2aed-49ca-8bde-e74f7683adcc_360x.jpg?v=1678117212"><span>Grandezza</span></a></li><li><a href="https://www.mirrormate.com/collections/highline"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Highline_SlimPaintable_CornerSLIM_360x.jpg?v=1667588371"><span>Highline</span></a></li><li><a href="https://www.mirrormate.com/collections/lexington"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Lexington_MetallicAsh_Corner_b7543cd5-f3cb-4c14-8764-8b5da7c4f723_360x.jpg?v=1639760747"><span>Lexington</span></a></li><li><a href="https://www.mirrormate.com/collections/newport"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/WeatheredWhite1_811702e7-061f-426a-83cd-b8b0285d3005_360x.jpg?v=1658437471"><span>Newport</span></a></li><li><a href="https://www.mirrormate.com/collections/pacifica"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Pacifica_SilverSheen_Corner_360x.jpg?v=1682431483"><span>Pacifica</span></a></li><li><a href="https://www.mirrormate.com/collections/paintable"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Highline_SlimPaintable_CornerSLIM_97e5f01e-c51a-4343-8155-0dd8249d6afd_360x.jpg?v=1682431441"><span>Paintable Mirror Frames</span></a></li><li><a href="https://www.mirrormate.com/collections/pemaquid"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Pemaquid_OldWorldSilver_Corner_0fcc7006-052b-4fd6-b566-4844ca032f38_360x.jpg?v=1647439121"><span>Pemaquid</span></a></li><li><a href="https://www.mirrormate.com/collections/perrin"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/PerrinBrownBlackcorner-min_360x.jpg?v=1660664400"><span>Perrin</span></a></li><li><a href="https://www.mirrormate.com/collections/portage"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Portage_MoonlightSilver_Corner_f9c8481e-46fb-4b07-a7e0-f172597189da_360x.jpg?v=1648131860"><span>Portage</span></a></li><li><a href="https://www.mirrormate.com/collections/providence"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Providence_OiledBronze_Corner2_2a98c4d7-7bb1-4ac4-bf43-857140bc9850_360x.jpg?v=1683665225"><span>Providence</span></a></li><li><a href="https://www.mirrormate.com/collections/soho"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Soho_White_Corner1500-2_360x.jpg?v=1637595806"><span>Soho</span></a></li><li><a href="https://www.mirrormate.com/collections/solana"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/cdn_shopify_com-SolanaModernSilver_20corner_ddf219e4-afb6-4a0a-a993-9975eb73f1d5_360x.jpg?v=1646665647"><span>Solana</span></a></li><li><a href="https://www.mirrormate.com/collections/tuscany"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Tuscany_Travertine_Corner_m-new_1ce422ec-674c-449b-9777-d2bb4cd6039d_360x.jpg?v=1677096972"><span>Tuscany</span></a></li></ol></div><h3 class="custTabDrawerHeading" rel="tab4">By Price</h3><div id="tab4" class="custTabContent"><a href="https://www.mirrormate.com/pages/shop-by-price" class="custViewAllButton">View All</a><ol class="custByPriceProducts"><li><a href="https://www.mirrormate.com/collections/price-a"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/corner-0047_medium.jpg?v=1581190258"><span>Simple ($102+)</span></a></li><li><a href="https://www.mirrormate.com/collections/price-b"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/corner-0021_medium.jpg?v=1581190267"><span>Classic ($123+)</span></a></li><li><a href="https://www.mirrormate.com/collections/price-c"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/corner-0042_medium.jpg?v=1581190275"><span>Decorative ($145+)</span></a></li></ol></div><ul class="custMobileMenuLinks"><li><a href="https://www.mirrormate.com/collections/all-frames">Best Sellers</a></li><li><a href="https://www.mirrormate.com/collections/shop-new-styles">New Arrivals</a></li><li><a href="https://www.mirrormate.com/products/gift-card">Gift Cards</a></li></ul></div></div>';

			if(jQuery(window).width() <= 1023 ) {
				if(jQuery('.custTakeQuiz').length == 0 ){
						jQuery('<li class="custTakeQuiz"><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np-poll-down.svg" class="custAkeStyleImg"><a href="https://www.mirrormate.com/#mmquiz-MTU=" target="_blank">TAKE QUIZ &amp; FIND YOUR STYLE<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/left-arrow.svg"></span></a></div></li>').prependTo('nav .account .text-links');
				}

				if(jQuery('.custShopOrderMobile').length == 0 ){
					jQuery('<div class="custShopOrderMobile"><button class="custTogleButton">Shop / Order</button></div>').insertAfter('#menu li.has-dropdown.has-dropdown--mega-menu.mainmenu-2');
				}

				if(jQuery('.custTabsShopOrder').length == 0 ){
					jQuery(custHTML).appendTo('.custShopOrderMobile');
					jQuery('.custTabsShopOrder').hide();
					if(jQuery('#shopify-section-header #menu ul.site-nav > li').length > 3){
						jQuery('#shopify-section-header #menu ul.site-nav > li').slice(-3).addClass('custRoundButtonBlock');
					}
				}

				if(jQuery('.custProductsList:first').hasClass('custActive')){
					jQuery('.custProductsList:first').removeClass('custActive');
				}


				if(jQuery('.custMobileMenuBtn').length == 0){
					jQuery('<button class="custMobileMenuBtn"><span></span></button>').prependTo('#shopify-section-header .mobile-menu');
				}
			}
			else{
				if(jQuery('.custTakeQuiz').length == 0 ){
						jQuery('<li class="custTakeQuiz"><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np-poll-down.svg" class="custAkeStyleImg"><a href="https://www.mirrormate.com/#mmquiz-MTU=" target="_blank">TAKE QUIZ &amp; FIND YOUR STYLE<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/left-arrow.svg"></span></a></div></li>').appendTo('header .left-wrapper .text-links');
				}

				if(jQuery('.custTabsShopOrder').length === 0) {
					jQuery(custHTML).appendTo('header.site-header nav.nav-bar ul.dropdown.dropdown--mega-menu.menu-1');
					jQuery(".custTabContent").hide();
	    			jQuery(".custTabContent:first").show();
				}
			}
		}

		

	    /* if in tab mode */
	    jQuery("ul.custTabsWrapper li.custProductsList").click(function() {
	        var activeTab = jQuery(this).attr("rel"); 
	        jQuery("ul.custTabsWrapper li.custProductsList").not(this).removeClass("custActive");

	        if( jQuery(this).hasClass("custActive")){
	        	jQuery(this).removeClass("custActive");
	        	jQuery(".custTabContainer #"+activeTab).fadeOut();	
	        }
	        else{
	        	jQuery(this).addClass("custActive");
	        	jQuery(".custTabContent").hide();
	        	jQuery(".custTabContainer #"+activeTab).fadeIn();	
	        	
	        }
	    });

	  
		/* if in drawer mode */
		jQuery(".custTabDrawerHeading").on("click",function() {
	        var d_activeTab = jQuery(this).attr("rel"); 
	        
	    	jQuery(".custTabDrawerHeading").not(this).removeClass("custMobileActive");
	        if( jQuery(this).hasClass("custMobileActive")){
	        	jQuery(this).removeClass("custMobileActive");
	        	 jQuery("#"+d_activeTab).fadeOut();
	        }
	        else{
	        	jQuery(this).addClass("custMobileActive");
	        	jQuery(".custTabContent").hide();
	        	jQuery("#"+d_activeTab).fadeIn();
	        }
	    }); 

	    jQuery('.custShopOrderMobile .custTogleButton').on('click', function(){
	    	jQuery('.custShopOrderMobile .custTogleButton').toggleClass("custMainMenuShopShow");
	    	jQuery('.custTabsShopOrder').slideToggle();

            if(!jQuery(this).hasClass('custMainMenuShopShow')){
	    		jQuery(".custTabDrawerHeading").removeClass("custMobileActive");
	    		jQuery('.custTabContainer .custTabContent').fadeOut();
	    	}
	    });

	    jQuery('.custMobileMenuBtn').on("click", function(){
	    	jQuery(this).toggleClass("customMenuShow");
	    	jQuery("body").toggleClass("customBodyCls");
	    	jQuery("#page nav#menu").toggleClass("customNavShow");
	    });

		clearInterval(waitForjQuery);
	}
  }, 50);   