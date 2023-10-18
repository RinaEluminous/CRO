var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
		
		updateShopAllNavigation();

		function updateShopAllNavigation(){
			
			if(jQuery(window).width() < 991){

				//Mobile navigation
				if(jQuery('.custMobileShopNavCompListings').length == 0){
					jQuery('<div class="custMobileShopNavCompListings"> <div class="custShopAllBtn"> <a href="https://trtltravel.com/collections/all-products"> Shop All <i class="fa-regular fa-arrow-right"></i> </a> </div><ul> <li> <a href="https://trtltravel.com/products/trtl-travel-pillow"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/TPO_SLEEPING_300x.jpg?v=1669372025" alt="Travel PILLOW" class="img-fluid"> </div><div class="shopListContent"> <div class="title">Travel PILLOW <span class="lable bestselleer">BEST SELLER</span></div><p>Our most popular travel pillow at a cozy price.</p></div></a> </li><li> <a href="https://trtltravel.com/products/trtl-pillow-plus"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/TPP_SLEEPING_300x.jpg?v=1669371945" alt="Pillow Plus" class="img-fluid"> </div><div class="shopListContent"> <div class="title">Pillow Plus</div><p>Max comfort with adjustable neck support.</p></div></a> </li><li> <a href="https://trtltravel.com/products/trtl-pillow-cool"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPCSLEEPING_300x300.jpg?v=1671526549" alt="PILLOW COOL" class="img-fluid"> </div><div class="shopListContent"> <div class="title">PILLOW COOL<span class="lable">NEW IN</span></div><p>Stay cool and sweat-free with breathable fabric.</p></div></a> </li><li> <a href="https://trtltravel.com/products/trtl-pillow-junior"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/Trtl_Pillow_Junior_Zebra_Open_M_copy_300x.png?v=1673278591" alt="Pillow Junior" class="img-fluid"> </div><div class="shopListContent"> <div class="title">Pillow Junior</div><p>Help your kids sleep easier (ages 8+).</p></div></a> </li><li class="custBundlesLink"> <a href="https://trtltravel.com/collections/all-products"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/files/TPO_PP_WRAP_BREAKDOWN_300x.png?v=1669372720" alt="Bundles" class="img-fluid"> </div><div class="shopListContent"> <div class="title">Bundles</div><p>Our best offers. Bundle up and save $$$ and get free gifts.</p></div></a> </li></ul> </div>').insertBefore('#nav-offcanvas .offcanvas-body a.nav-link.offcanvas-dropdown-toggle + .collapse > .row');
				}

				if( sessionStorage.getItem("custIsBundlesClick") !==null && window.location.pathname.indexOf("all-products") !== -1){
					jQuery('html, body').animate({scrollTop: jQuery('.container .image-cover').siblings('div:contains(BUNDLES)').offset().top-10}, 1000);
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