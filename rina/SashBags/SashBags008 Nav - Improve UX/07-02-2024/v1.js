var waitForJquery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        addNavImproveUx();
        
        function addNavImproveUx() {
            //for desktop
            var addHomeTabHtml ='<li class="header__primary-nav-item" data-title="HOME" class="custHomeTab">'+
            '    <a href="https://www.thesashbag.com/" class="block h6" aria-current="page">'+
            '        HOME'+
            '    </a>'+
            '</li>';

            if(jQuery('header nav ul li[data-title="SHOP"]').length >  0 && jQuery('.custHomeTab').length == 0){
                jQuery(addHomeTabHtml).insertBefore('header nav ul li[data-title="SHOP"]');
            }
            //desktop Arrow down
            var downArrayHtml = '<div class="yotpo custYotpo">'+
            '    <span class="yotpo-page-element yotpo-icon yotpo-icon-down-arrow"></span>'+
            '</div>';

            if(jQuery('header nav ul li[data-title="SHOP"] [data-follow-link="/collections/frontpage"]').length > 0 && jQuery('.custYotpo').length == 0){
                jQuery(downArrayHtml).appendTo('header nav ul li[data-title="SHOP"] [data-follow-link="/collections/frontpage"]');
                jQuery(downArrayHtml).appendTo('header nav ul li[data-title="ABOUT SASH"] [data-follow-link="/pages/what-is-sash"]');
                jQuery(downArrayHtml).appendTo('header nav ul li[data-title="NEED TO KNOW"] [data-follow-link="/pages/faq"]');
            }

            var shopMegaMenuDeskhtml ='<div class="custShopMegaMenuDesk">'+
            '    <div class="custIconLinks">'+
            '        <ul>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/frontpage">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/shop-all-icon.svg" alt="Shop all">'+
            '                    </span>'+
            '                    Shop all'+
            '                </a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/best-sellers">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/bestseller-icon.svg" alt="Best selleres">'+
            '                    </span>'+
            '                    Best selleres'+
            '                </a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/sale?filter.p.m.custom.new_category=New+Arrivals">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/new-arrival-icon.svg" alt="New Arrivals">'+
            '                    </span>'+
            '                    New Arrivals'+
            '                </a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/sale">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/sale-icon.svg" alt="Sale">'+
            '                    </span>'+
            '                    Sale'+
            '                </a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/sash-accessories">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/addon-icon.svg" alt="Add ons">'+
            '                    </span>'+
            '                    Add ons'+
            '                </a>'+
            '            </li>'+
            '        </ul>'+
            '    </div>'+
            '    <div class="custCategoryLinks">'+
            '        <div class="categoryLinkCol">'+
            '            <ul>'+
            '                <li class="title">Material</li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/sale?filter.p.product_type=Leather+Classic">LEATHER</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/sale?filter.p.product_type=Faux+Leather+Classic&filter.p.product_type=Faux+Leather+Fringe">Faux LEATHER</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="#">Cloth</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '        <div class="categoryLinkCol">'+
            '            <ul>'+
            '                <li class="title">Color</li>'+
            '                <li>'+
            '                    <a href="#">Core COLORS</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/limited-edition-colors-faux-leather">LIMITED EDITION COLORS</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '        <div class="categoryLinkCol">'+
            '            <ul>'+
            '                <li class="title">Style</li>'+
            '                <li>'+
            '                    <a href="#">CLASSIC (NON FRINGE)</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/fringe-leather">FRINGE</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '    </div>'+
            '    <div class="custTrendingCol">'+
            '        <a href="#">'+
            '            <div class="imgBox">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/shop-all-trending-img.png" alt="">'+
            '            </div>'+
            '            <div class="title">Trending Now</div>'+
            '        </a>'+
            '    </div>'+
            '</div>';

            if(jQuery('header nav ul li[data-title="SHOP"] ul.header__dropdown-menu').length > 0 && jQuery('.custShopMegaMenuDesk').length == 0){
                jQuery(shopMegaMenuDeskhtml).insertAfter('header nav ul li[data-title="SHOP"] ul.header__dropdown-menu');
            }

            //for mobile back arrow button
            if(jQuery('.header-sidebar.drawer #header-panel-1 .header-sidebar__back-button').length > 0 && jQuery('.custBackArrowImg').length == 0){
                jQuery('<img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/back-arrow-icon.svg" class="custBackArrowImg"/>').prependTo('.header-sidebar.drawer #header-panel-1 .header-sidebar__back-button');
            }

            //for mobile Shop Mega Menu

            var shopMegaMenuMobhtml ='<div class="custShopMegaMenuMob">'+
            '    <div class="custIconLinks">'+
            '        <ul>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/frontpage">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/shop-all-icon.svg" alt="Shop all">'+
            '                    </span>'+
            '                    Shop all'+
            '                </a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/best-sellers">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/bestseller-icon.svg" alt="Best selleres">'+
            '                    </span>'+
            '                    Best selleres'+
            '                </a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/sale?filter.p.m.custom.new_category=New+Arrivals">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/new-arrival-icon.svg" alt="New Arrivals">'+
            '                    </span>'+
            '                    New Arrivals'+
            '                </a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/sale">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/sale-icon.svg" alt="Sale">'+
            '                    </span>'+
            '                    Sale'+
            '                </a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/collections/sash-accessories">'+
            '                    <span class="icon">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/addon-icon.svg" alt="Add ons">'+
            '                    </span>'+
            '                    Add ons'+
            '                </a>'+
            '            </li>'+
            '        </ul>'+
            '    </div>'+
            '    <div class="custCategoryLinks">'+
            '        <div class="categoryLinkCol">'+
            '            <input type="checkbox" id="material">'+
            '            <label for="material">'+
            '                <span>Material</span>'+
            '                <span class="accordIcon"></span>'+
            '            </label>'+
            '            <ul>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/limited-edition-colors-faux-leather?filter.p.product_type=Faux+Leather+Classic">LEATHER</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="#">Faux LEATHER</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="#">Cloth</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '        <div class="categoryLinkCol">'+
            '            <input type="checkbox" id="color">'+
            '            <label for="color">'+
            '                <span>Color</span>'+
            '                <span class="accordIcon"></span>'+
            '            </label>'+
            '            <ul>'+
            '                <li>'+
            '                    <a href="#">Core COLORS</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/limited-edition-colors-faux-leather">LIMITED EDITION COLORS</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '        <div class="categoryLinkCol">'+
            '            <input type="checkbox" id="style">'+
            '            <label for="style">'+
            '                <span>Style</span>'+
            '                <span class="accordIcon"></span>'+
            '            </label>'+
            '            <ul>'+
            '                <li>'+
            '                    <a href="#">CLASSIC (NON FRINGE)</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/fringe-leather">FRINGE</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '    </div>'+
            '    <div class="custTrendingCol">'+
            '        <a href="#">'+
            '            <div class="imgBox">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/shop-all-trending-img.png" alt="">'+
            '            </div>'+
            '            <div class="title">Trending Now</div>'+
            '        </a>'+
            '    </div>'+
            '</div>';

            if(jQuery('.header-sidebar.drawer #header-panel-1 ul.header-sidebar__linklist').length > 0 && jQuery('.custShopMegaMenuMob').length == 0){
                jQuery(shopMegaMenuMobhtml).insertAfter('.header-sidebar.drawer #header-panel-1 ul.header-sidebar__linklist');
            }
            
       }
       
    clearInterval(waitForJquery);
    }
  }, 50);