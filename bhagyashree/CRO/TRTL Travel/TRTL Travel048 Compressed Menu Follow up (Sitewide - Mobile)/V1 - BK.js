var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
		
		updateShopAllNavigationGrid();

		function updateShopAllNavigationGrid(){
			
			if(jQuery(window).width() < 991){

				//Mobile navigation
				if(jQuery('.custMobileShopNavCompGrids').length == 0){
					jQuery('<div class="custMobileShopNavCompGrids"> <div class="custShopAllBtn"> <a href="https://trtltravel.com/collections/all-products"> Shop All <i class="fa-regular fa-arrow-right"></i> </a> </div><ul> <li> <a href="https://trtltravel.com/products/trtl-travel-pillow"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/TPO_SLEEPING_300x.jpg?v=1669372025" alt="Travel PILLOW" class="img-fluid"> <span class="lable bestselleer">BEST SELLER</span> </div><div class="shopListContent"> <div class="title">Travel PILLOW <i class="fa-regular fa-arrow-right"></i> </div><p>Our most popular travel pillow at a cozy price.</p></div></a> </li><li> <a href="https://trtltravel.com/products/trtl-pillow-plus"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/TPP_SLEEPING_300x.jpg?v=1669371945" alt="Pillow Plus" class="img-fluid"> </div><div class="shopListContent"> <div class="title">Pillow Plus <i class="fa-regular fa-arrow-right"></i></div><p>Max comfort with adjustable neck support.</p></div></a> </li><li> <a href="https://trtltravel.com/products/trtl-pillow-cool"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPCSLEEPING_300x300.jpg?v=1671526549" alt="PILLOW COOL" class="img-fluid"> <span class="lable">NEW IN</span> </div><div class="shopListContent"> <div class="title">PILLOW COOL <i class="fa-regular fa-arrow-right"></i></div><p>Stay cool and sweat-free with breathable fabric.</p></div></a> </li><li> <a href="https://trtltravel.com/products/trtl-pillow-junior"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/Trtl_Pillow_Junior_Zebra_Open_M_copy_300x.png?v=1673278591" alt="Pillow Junior" class="img-fluid"> </div><div class="shopListContent"> <div class="title">Pillow Junior <i class="fa-regular fa-arrow-right"></i></div><p>Help your kids sleep easier (ages 8+).</p></div></a> </li><li class="custBundlesLink"> <a href="https://trtltravel.com/collections/all-bundles"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/TPO_PP_WRAP_BREAKDOWN_300x.png?v=1669372720" alt="Bundles" class="img-fluid"> </div><div class="shopListContent"> <div class="title">Bundles <i class="fa-regular fa-arrow-right"></i></div><p>Our best offers. Bundle up and save $$$ and get free gifts.</p></div></a> </li></ul> </div>').insertBefore('#nav-offcanvas .offcanvas-body a.nav-link.offcanvas-dropdown-toggle + .collapse > .row');
				}

				//scroll to bundle section if user navigates by clicking on 'Buddles' menu
				if( sessionStorage.getItem("custIsBundlesClick") !==null && window.location.pathname.indexOf("all-products") !== -1){
					var checkOrientation  = Math.abs(window.orientation) == 90 ? 'landscape' : 'portrait';
					var intTopOffset = 0;
					setTimeout(function (){
						if(checkOrientation == 'portrait') {
							intTopOffset = jQuery('#MainContent .container .image-cover').siblings('div:contains(BUNDLES)').offset().top-10;
						}
						else{
							intTopOffset = jQuery('#MainContent .container .image-wrapper').siblings('div:contains(BUNDLES)').offset().top;

							//for landscape when the buddle section appears with same selector as like portrait
							if(intTopOffset == 0 && jQuery('#MainContent .container .image-cover').siblings('div:contains(BUNDLES)').length > 0){
								intTopOffset = jQuery('#MainContent .container .image-cover').siblings('div:contains(BUNDLES)').offset().top-10;
							}
						}	
						
						jQuery('html, body').animate({
							scrollTop: intTopOffset
						});
					}, 1750);	
				    	
					sessionStorage.removeItem("custIsBundlesClick");
				}
			}
		}

		jQuery(document).on('click', '.custBundlesLink', function(){
			 sessionStorage.setItem("custIsBundlesClick", "1");
		});

		clearInterval(waitForjQuery);
    }
}, 50);  