    function manageNavTop() {
        var intHeaderHt = 0, intQContainerHt = 0, intTotalHt = 0;
          
        if (jQuery('#shopify-section-header').length > 0) {
            intHeaderHt = parseInt(jQuery('#shopify-section-header').outerHeight() + 1);
             jQuery('html body #page #shopify-section-header #menu.panel[role="navigation"]').attr('style', 'top: ' + intHeaderHt + 'px !important');
            }
    }

    addCustSubMenuForShopOrder();

    function addCustSubMenuForShopOrder() {
      var custHTML = '' +
        '  <div class="custTabsShopOrder">' +
        '      <ul class="custTabsWrapper">' +
        '          <li class="custActive custProductsList" rel="tabitem1">By Color</li>' +
        '          <li rel="tabitem2" class="custProductsList">By Decor</li>' +
        '          <li rel="tabitem3" class="custProductsList">By Collection</li>' +
        '          <li rel="tabitem4" class="custProductsList">By Price</li>' +
        '          <li><a href="https://www.mirrormate.com/collections/samples">Samples</a></li>' +
        '          <li><a href="https://www.mirrormate.com/collections/all-frames">Best Sellers</a></li>' +
        '          <li><a href="https://www.mirrormate.com/collections/shop-new-styles">New Arrivals</a></li>' +
        '          <li><a href="https://www.mirrormate.com/products/gift-card">Gift Cards</a></li>' +
        '      </ul>' +
        '      <div class="custTabContainer">' +
        '          <ul class="custMobileMenuLinks">' +
        '              <li><a href="https://www.mirrormate.com/collections/samples">Samples</a></li>' +
        '          </ul>' +
        '          <h3 class="custTabDrawerHeading" rel="tabitem1">By Color</h3>' +
        '          <div id="tabitem1" class="custTabContent">' +
        '              <a href="https://www.mirrormate.com/pages/shop-by-color" class="custViewAllButton">View All</a>' +
        '              <ol class="custByColorProducts">' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/wood-tones"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/WoodTones_Frames_Assembled_Simpler.jpg?v=1651500746"><span>Shop Wood Tones</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/white"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/files/White_d24c015a-f598-4b43-a718-8f07edc3b3472.jpg?v=1647972205"><span>Shop White</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/silver-grey"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/silver-home3.png"><span>Shop Silver</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/black"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/black-home.png"><span>Shop Black</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/bronze"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/Bronze_Assembled_Simpler.png"><span>Shop Bronze</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/cherry-red"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/corner-0004_medium.jpg?v=1581190171"><span>Shop Cherry/Red</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/gold-champagne"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/GoldFrames_Assembled_Simpler.png"><span>Shop GOLD/Champagne</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/metallic"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/Metallic_Group-tmp_medium.jpg?v=1635882856"><span>SHop Metallic</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/metallic"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/products/Highline_SlimPaintable_CornerSLIM_97e5f01e-c51a-4343-8155-0dd8249d6afd_1500x.jpg?v=1667588271"><span>Shop Paintable</span></a>' +
        '                  </li>' +
        '              </ol>' +
        '          </div>' +
        '          <h3 class="custTabDrawerHeading" rel="tabitem2">By Decor</h3>' +
        '          <div id="tabitem2" class="custTabContent">' +
        '              <a href="https://www.mirrormate.com/pages/shop-by-decor" class="custViewAllButton">View All</a>' +
        '              <ol class="custByDecorProducts">' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/traditional"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/TraditionalFrames_Assembled_medium.jpg?v=1588602192"><span>Traditional</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/transitional"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/TransitionalFrames_Assembled_medium.jpg?v=1589289774"><span>Transitional</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/contemporary"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/ContemporaryFrames_Assembled_medium.jpg?v=1588602067"><span>Modern & Contemporary</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/farmhouse-rustic-lodge-cabin"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/038-Rustic-iStock-1211003958_square-min_medium.jpg?v=1589289737"><span>Farmhouse & Rustic</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/industrial"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/sbd-industrial-min_medium.jpg?v=1588602947"><span>Industrial</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/cottage"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/sbd-cottage-min_medium.jpg?v=1588602103"><span>Cottage</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/coastal"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/sbd-coastal-min_medium.jpg?v=1588602098"><span>Coastal</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/glam"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/038-Glam-iStock-467176390_square-min_medium.jpg?v=1589289754"><span>Glam</span></a>' +
        '                  </li>' +
        '              </ol>' +
        '          </div>' +
        '          <h3 class="custTabDrawerHeading" rel="tabitem3">By Collection</h3>' +
        '          <div id="tabitem3" class="custTabContent">' +
        '              <a href="https://www.mirrormate.com/collections/all-frames" class="custViewAllButton">View All</a>' +
        '              <ol class="custByNameProducts">' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/acadia"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Acadia-Group_medium.jpg?v=1581189581"><span>Acadia</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/annandale"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/Annandale-Group_medium.jpg?v=1668023947"><span>Annandale</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/austin"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/Austin_Group2_medium.jpg?v=1636038654"><span>Austin</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/bellemeade"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Bellemeade-Group_medium.jpg?v=1604342374"><span>Bellemeade</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/big-sur"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/BigSur_zGroup_m_medium.jpg?v=1677091986"><span>Big Sur</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/broadway"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Broadway-Group_medium.jpg?v=1666111221"><span>Broadway</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/chelsea"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Chelsea-Group_medium.jpg?v=1638474397"><span>Chelsea</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/cherokee"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Cherokee-Group_medium.jpg?v=1667499897"><span>Cherokee</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/cherokee-rustic"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/042019-Cherokee-Rustic_NewerGrouping-compressor_medium.jpg?v=1638302325"><span>Cherokee Rustic</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/corner-woods"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/WoodsWhite-CornerS_medium.jpg?v=1667568306"><span>Corner Woods</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/essex"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/Biltmore-Group_medium.jpg?v=1665515709"><span>Essex</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/grandezza"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Grandezza-Group_medium.jpg?v=1677777070"><span>Grandezza</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/highline"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/042019-HighlineGroup2-compressor_medium.jpg?v=1667499899"><span>Highline</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/lexington"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/g-lexington-metallicash_lrg_1_medium.jpg?v=1581189731"><span>Lexington</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/newport"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/042019-NewportGroup-compressor_medium.jpg?v=1671553549"><span>Newport</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/pacifica"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Pacifica-Group_medium.jpg?v=1638303675"><span>Pacifica</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/paintable"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Paintable-Group_medium.jpg?v=1628519281"><span>Paintable Mirror Frames</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/pemaquid"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/042019-Pemaquid_Group-compressor_medium.jpg?v=1667499893"><span>Pemaquid</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/perrin"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/g-Perrin_group_medium.jpg?v=1604342446"><span>Perrin</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/portage"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Portage-Group_medium.jpg?v=1644256519"><span>Portage</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/providence"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/prov-group2019x500-min_medium.jpg?v=1677680328"><span>Providence</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/soho"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/04A612-Soho-Group_medium.jpg?v=1619453443"><span>Soho</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/solana"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/g-SolanaModern_group_medium.jpg?v=1581189952"><span>Solana</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/tuscany"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/Tuscany_Travertine_Corner_m_medium.jpg?v=1677091987"><span>Tuscany</span></a>' +
        '                  </li>' +
        '              </ol>' +
        '          </div>' +
        '          <h3 class="custTabDrawerHeading" rel="tabitem4">By Price</h3>' +
        '          <div id="tabitem4" class="custTabContent">' +
        '              <a href="https://www.mirrormate.com/pages/shop-by-price" class="custViewAllButton">View All</a>' +
        '              <ol class="custByPriceProducts">' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/price-a"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/corner-0047_medium.jpg?v=1581190258"><span>Simple ($102+)</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/price-b"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/corner-0021_medium.jpg?v=1581190267"><span>Classic ($123+)</span></a>' +
        '                  </li>' +
        '                  <li>' +
        '                      <a href="https://www.mirrormate.com/collections/price-c"><img src="https://cdn.shopify.com/s/files/1/0090/5183/2386/collections/corner-0042_medium.jpg?v=1581190275"><span>Decorative ($145+)</span></a>' +
        '                  </li>' +
        '              </ol>' +
        '          </div>' +
        '          <ul class="custMobileMenuLinks">' +
        '              <li><a href="https://www.mirrormate.com/collections/all-frames">Best Sellers</a></li>' +
        '              <li><a href="https://www.mirrormate.com/collections/shop-new-styles">New Arrivals</a></li>' +
        '              <li><a href="https://www.mirrormate.com/products/gift-card">Gift Cards</a></li>' +
        '          </ul>' +
        '      </div>' +
        '  </div>';

      if (jQuery(window).width() <= 1023) {
        if (jQuery('.custTakeQuiz').length == 0) {
          jQuery('<li class="custTakeQuiz"><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np-poll-down.svg" class="custAkeStyleImg"><a href="https://www.mirrormate.com/#mmquiz-MTU=" target="_blank">TAKE QUIZ &amp; FIND YOUR STYLE<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/left-arrow.svg"></span></a></div></li>').prependTo('nav .account .text-links');
        }

        if (jQuery('.custShopOrderMobile').length == 0) {
          jQuery('<div class="custShopOrderMobile"><button class="custTogleButton">Shop / Order</button></div>').insertAfter('#menu li.has-dropdown.has-dropdown--mega-menu.mainmenu-2');
        }

        if (jQuery('.custTabsShopOrder').length == 0) {
          jQuery(custHTML).appendTo('.custShopOrderMobile');
          jQuery('.custTabsShopOrder').hide();
          if (jQuery('#shopify-section-header #menu ul.site-nav > li').length > 3) {
            jQuery('#shopify-section-header #menu ul.site-nav > li').slice(-3).addClass('custRoundButtonBlock');
          }
        }

        if (jQuery('.custProductsList:first').hasClass('custActive')) {
          jQuery('.custProductsList:first').removeClass('custActive');
        }


        if (jQuery('.custMobileMenuBtn').length == 0) {
          jQuery('<button class="custMobileMenuBtn"><span></span></button>').prependTo('#shopify-section-header .mobile-menu');
        }

        if (jQuery('#shopify-section-header #menu.panel ul.site-nav .has-dropdown .dropdown > li[role="presentation"] > a[href="/pages/how-it-works"]').length > 0) {
          var strText = jQuery('#shopify-section-header #menu.panel ul.site-nav .has-dropdown .dropdown > li[role="presentation"] > a[href="/pages/how-it-works"]').text().toLowerCase();
          jQuery('#shopify-section-header #menu.panel ul.site-nav .has-dropdown .dropdown > li[role="presentation"] > a[href="/pages/how-it-works"]').text(strText);
        }

        if(jQuery('#shopify-section-header #menu.panel ul.site-nav li a.m-d-menu:contains(MULTIFAMILY)').length > 0 ){
            jQuery('#shopify-section-header #menu.panel ul.site-nav li a.m-d-menu:contains(MULTIFAMILY)').attr('href','https://www.mirrormate.com/pages/multi-family-mirror-kits');
        }
        
        manageNavTop();
      }
      else {
        if (jQuery('.custTakeQuiz').length == 0) {
          jQuery('<li class="custTakeQuiz"><div><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/np-poll-down.svg" class="custAkeStyleImg"><a href="https://www.mirrormate.com/#mmquiz-MTU=" target="_blank">TAKE QUIZ &amp; FIND YOUR STYLE<span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/left-arrow.svg"></span></a></div></li>').appendTo('header .left-wrapper .text-links');
        }

        if (jQuery('.custTabsShopOrder').length === 0) {
          jQuery(custHTML).appendTo('header.site-header nav.nav-bar ul.dropdown.dropdown--mega-menu.menu-1');
          jQuery(".custTabContent").hide();
          jQuery(".custTabContent:first").show();
        }
      }
    }


    jQuery(document).on({
      mouseover: function () {
        var activeTab = jQuery(this).attr("rel");
        jQuery("ul.custTabsWrapper li.custProductsList").not(this).removeClass("custActive");
        jQuery(".custTabContent").not(".custTabContainer #" + activeTab).hide();
        jQuery(this).addClass("custActive");
        jQuery(".custTabContainer #" + activeTab).fadeIn();
      }
    }, "ul.custTabsWrapper li.custProductsList");


    jQuery(document).on({
      mouseenter: function () {
        jQuery("ul.custTabsWrapper li.custProductsList").removeClass("custActive");
        jQuery("ul.custTabsWrapper li.custProductsList").first().addClass("custActive");
        jQuery(".custTabContent").hide();
        jQuery(".custTabContainer #tabitem1").fadeIn();
      }
    }, "header.site-header nav.nav-bar ul.site-nav li.mainmenu-1");


    /* if in tab mode */
    jQuery("ul.custTabsWrapper li.custProductsList").click(function () {
      var activeTab = jQuery(this).attr("rel");
      jQuery("ul.custTabsWrapper li.custProductsList").not(this).removeClass("custActive");

      if (jQuery(this).hasClass("custActive")) {
        jQuery(this).removeClass("custActive");
        jQuery(".custTabContainer #" + activeTab).fadeOut();
      }
      else {
        jQuery(this).addClass("custActive");
        jQuery(".custTabContent").hide();
        jQuery(".custTabContainer #" + activeTab).fadeIn();

      }
    });


    /* if in drawer mode */
    jQuery(".custTabDrawerHeading").on("click", function () {
      var d_activeTab = jQuery(this).attr("rel");

      jQuery(".custTabDrawerHeading").not(this).removeClass("custMobileActive");
      if (jQuery(this).hasClass("custMobileActive")) {
        jQuery(this).removeClass("custMobileActive");
        jQuery("#" + d_activeTab).fadeOut();
      }
      else {
        jQuery(this).addClass("custMobileActive");
        jQuery(".custTabContent").hide();
        jQuery("#" + d_activeTab).fadeIn();
      }
    });

    jQuery('.custShopOrderMobile .custTogleButton').on('click', function () {
      jQuery('.custShopOrderMobile .custTogleButton').toggleClass("custMainMenuShopShow");
      jQuery('.custTabsShopOrder').slideToggle();

      if (!jQuery(this).hasClass('custMainMenuShopShow')) {
        jQuery(".custTabDrawerHeading").removeClass("custMobileActive");
        jQuery('.custTabContainer .custTabContent').fadeOut();
      }
    });

    jQuery('.custMobileMenuBtn').on("click", function () {
      jQuery(this).toggleClass("customMenuShow");
      jQuery("body").toggleClass("customBodyCls");
      jQuery("#page nav#menu").toggleClass("customNavShow");
    });