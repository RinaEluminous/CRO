var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
		
		updateNavigation();

		function updateNavigation(){
			//Desktop navigation
			if(jQuery('.custMegaShopNavWraper').length == 0){

				jQuery('<div class="custMegaShopNavWraper"> <div class="row g-0"> <div class="col-6"> <div class="custShopNavLinks"> <ul> <li> <a href="#"> <div class="title">travel PILLOW <span class="lable bestselleer">BEST SELLER</span></div><p>The most comfortable sleep you\'ll ever have traveling</p></a> </li><li> <a href="#"> <div class="title">Pillow Plus</div><p>Height adjustable for your comfort</p></a> </li><li> <a href="#"> <div class="title">PILLOW COOL<span class="lable">NEW IN</span></div><p>Stay cool and comfy on your journey</p></a> </li><li> <a href="#"> <div class="title">Pillow Junior</div><p>Help your kids sleep easier (ages 8+)</p></a> </li><li> </li></ul> <div class="custShopAllBtn"> <a href="https://trtltravel.com/collections/new-years-sale"> Shop All products <i class="fa-regular fa-arrow-right" style="margin-top:2px;"></i> </a> </div></div></div><div class="col-6"> <div class="custNavBundleImgBox"> <a href="https://trtltravel.com/collections/new-years-sale#bundles"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPO_PP_BREAKDOWN_d5792142-8f2b-4fab-9921-2eac6c548abe_620x.png?v=1670591848" alt="NEW YEARS SALE 15% OFF EVERYTHING"> <div class="content"> <div class="custBadge"> <span>GET UP TO 45% OFF</span> </div><div class="custDetail"> <div class="custTitle"> BUNDLES <i class="fa-regular fa-arrow-right" style="margin-top:2px;"></i> </div><div class="custText"> <p>Let\'s bundle up and save $$$</p></div></div></div></a> </div></div></div></div>').insertBefore('.nav-wrapper nav.navbar ul li.nav-item.dropdown.has-megamenu a.nav-link.dropdown-toggle + .dropdown-menu.megamenu  .dropdown-wrapper .col-12 > .row');
			}
//991
			//Mobile navigation
			if(jQuery('.custMegaShopNavWraper').length == 0){
				jQuery('<div class="custMobileShopBundleWraper"> <a href="https://trtltravel.com/collections/new-years-sale#bundles"> <div class="imgBox"> <img src="https://cdn.shopify.com/s/files/1/0071/0911/6022/products/TPO_PP_WRAP_BREAKDOWN_edd7e160-22df-427c-95a7-ea80a30dff51_300x300@2x.png?v=1670591880" alt="GET UP TO 45% OFF"> <div class="custBadge"> <span>GET UP TO 45% OFF</span> </div></div><div class="custDetail"> <div class="custTitle"> BUNDLES <i class="fa-regular fa-arrow-right" style="margin-top:2px;"></i> </div><div class="custText"> <p>Let\'s bundle up and save $$$</p></div></div></a></div>').insertBefore('#nav-offcanvas .offcanvas-body a.nav-link.offcanvas-dropdown-toggle + .collapse > .row');
			}
		}

		clearInterval(waitForjQuery);
    }
}, 50); 
