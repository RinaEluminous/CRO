window.onload = function () {

    addNavigationOnDeskSimplify();
    addNavigationOnMobileSimplify();


    function addNavigationOnDeskSimplify() {
            //desktop Arrow down
            var downArrowHtml = '<div class="yotpo custYotpo">'+
            '    <span class="yotpo-page-element yotpo-icon yotpo-icon-down-arrow"></span>'+
            '</div>';


            if (document.querySelectorAll('header nav ul li[data-title="SHOP"] [data-follow-link="/collections/frontpage"]').length > 0 && document.querySelectorAll('.custYotpo').length == 0) {
               
                var shopNavItem = document.querySelector('header nav ul li[data-title="SHOP"] [data-follow-link="/collections/frontpage"]');
                var aboutSashNavItem = document.querySelector('header nav ul li[data-title="ABOUT SASH"] [data-follow-link="/pages/what-is-sash"]');
                var needToKnowNavItem = document.querySelector('header nav ul li[data-title="NEED TO KNOW"] [data-follow-link="/pages/faq"]');
            
                if (shopNavItem) {
                    shopNavItem.insertAdjacentHTML('beforeend',  downArrowHtml);
                }
                if (aboutSashNavItem) {
                    aboutSashNavItem.insertAdjacentHTML('beforeend',  downArrowHtml);
                }
                if (needToKnowNavItem) {
                    needToKnowNavItem.insertAdjacentHTML('beforeend',  downArrowHtml);
                }
            }
            
            //add RewardBadge 
            var rewardBadgeHtml ='<span class="custRewardBadge">New</span>';

            if(document.querySelectorAll('header nav ul li[data-title="REWARDS"] a').length > 0 && document.querySelectorAll('.custRewardBadge').length ==0 ){
        
                var rewardBadgeMenu = document.querySelector('header nav ul li[data-title="REWARDS"] a');
                rewardBadgeMenu.insertAdjacentHTML('beforeend', rewardBadgeHtml);
    
            }

            //add shop html 

            var shopMegaMenuDeskhtml ='<div class="custShopMegaMenuDeskNew">'+
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
            '                <a href="https://www.thesashbag.com/collections/see-whats-new">'+
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
            '                    <a href="https://www.thesashbag.com/collections/classic">LEATHER</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/faux-leather">Faux LEATHER</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/fabric">Cloth</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '        <div class="categoryLinkCol">'+
            '            <ul>'+
            '                <li class="title">Color</li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/core-colors">Core COLORS</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/limited-edition">LIMITED EDITION COLORS</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '        <div class="categoryLinkCol">'+
            '            <ul>'+
            '                <li class="title">Style</li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/classic-2">CLASSIC (NON FRINGE)</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/fringe-1">FRINGE</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '    </div>'+
            '    <div class="custTrendingCol">'+
            '        <a href="https://www.thesashbag.com/products/durga-leather-fringe-sash-bag">'+
            '            <div class="imgBox">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/shop-all-trending-img.png" alt="">'+
            '            </div>'+
            '            <div class="title">Trending Now</div>'+
            '        </a>'+
            '    </div>'+
            '</div>';

            if (document.querySelectorAll('header nav ul li[data-title="SHOP"] ul.header__dropdown-menu').length > 0 && document.querySelectorAll('.custShopMegaMenuDeskNew').length == 0) {

                var shopDropdownMenu = document.querySelector('header nav ul li[data-title="SHOP"] ul.header__dropdown-menu');
              
                if (shopDropdownMenu) {
                    shopDropdownMenu.insertAdjacentHTML('afterend', shopMegaMenuDeskhtml);
                }
            }

        //add blog tab in About sash menu

        var blogItemhtml = '<li style="opacity: 1; transform: translateY(0px)" class="custBlogDiv">' +
            '<a href="/blogs/news" class="link-faded-reverse">Blog</a>' +
            '</li>';

        if(document.querySelectorAll('header nav ul li[data-title="ABOUT SASH"] ul.header__dropdown-menu').length > 0 && document.querySelectorAll('.custBlogDiv').length ==0 ){
      
        var aboutSashDropdownMenu = document.querySelector('header nav ul li[data-title="ABOUT SASH"] ul.header__dropdown-menu');
        aboutSashDropdownMenu.insertAdjacentHTML('beforeend', blogItemhtml);

        }

        //add help centre menu in Need to know tab

            var helpCenterhtml = '<li style="opacity: 1; transform: translateY(0px)"  class="custHelpCenterDiv">' +
            '<a href="https://the-sash-bag.gorgias.help/en-US" class="link-faded-reverse">Help Center</a>' +
            '</li>';


            if(document.querySelectorAll('header nav ul li[data-title="NEED TO KNOW"] ul.header__dropdown-menu').length > 0 && document.querySelectorAll('.custHelpCenterDiv').length ==0 ){
        
            var needToKnowDropdownMenu = document.querySelector('header nav ul li[data-title="NEED TO KNOW"] ul.header__dropdown-menu');
            needToKnowDropdownMenu.insertAdjacentHTML('beforeend', helpCenterhtml);

            }
     
            var footerHtml ='<div class="footer__block footer__block--links custAboutFooter">'+
            '    <div class="v-stack gap-4 sm:gap-5">'+
            '        <p class="h6">About Us</p>'+
            '        <ul class="v-stack gap-2.5 unstyled-list" role="list">'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/pages/about-us" class="link-faded">What is Sash?</a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/pages/faq" class="link-faded">FAQ</a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/blogs/news" class="link-faded">Blog</a>'+
            '            </li>'+
            '        </ul>'+
            '    </div>'+
            '</div>'+
            '<div class="footer__block footer__block--links custAboutFooter">'+
            '    <div class="v-stack gap-4 sm:gap-5">'+
            '        <p class="h6">Help</p>'+
            '        <ul class="v-stack gap-2.5 unstyled-list" role="list">'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/pages/the-fine-print" class="link-faded">Return Policy</a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://the-sash-bag.gorgias.help/en-US" class="link-faded">Help Center</a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/pages/contact-us" class="link-faded">Contact us</a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/pages/privacy-policy" class="link-faded">Privacy Policy</a>'+
            '            </li>'+
            '            <li>'+
            '                <a href="https://www.thesashbag.com/pages/terms-and-conditions" class="link-faded">Terms and Conditions</a>'+
            '            </li>'+
            '        </ul>'+
            '    </div>'+
            '</div>';

            var newsletterElement = document.querySelector('.footer .footer__block--newsletter');

            if (newsletterElement && document.querySelectorAll('.custAboutFooter').length == 0) {
                newsletterElement.insertAdjacentHTML('afterend', footerHtml);
            }


    }

    function addNavigationOnMobileSimplify() {

        //for mobile back arrow button
        if (document.querySelectorAll('.header-sidebar.drawer #header-panel-1 .header-sidebar__back-button').length > 0 && document.querySelectorAll('.custBackArrowImg').length == 0) {

            var imgElement = document.createElement('img');
            imgElement.src = "https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/back-arrow-icon.svg";
            imgElement.classList.add('custBackArrowImg');
        
            var backButton = document.querySelector('.header-sidebar.drawer #header-panel-1 .header-sidebar__back-button');
            if (backButton) {
                backButton.prepend(imgElement);
            }
        }

        
            //for mobile Shop Mega Menu

            var shopMegaMenuMobhtml ='<div class="custShopMegaMenuMobNew">'+
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
            '                <a href="https://www.thesashbag.com/collections/see-whats-new">'+
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
            '                    <a href="https://www.thesashbag.com/collections/classic">LEATHER</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/faux-leather">Faux LEATHER</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/fabric">Cloth</a>'+
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
            '                    <a href="https://www.thesashbag.com/collections/core-colors">Core COLORS</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/limited-edition">LIMITED EDITION COLORS</a>'+
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
            '                    <a href="https://www.thesashbag.com/collections/classic-2">CLASSIC (NON FRINGE)</a>'+
            '                </li>'+
            '                <li>'+
            '                    <a href="https://www.thesashbag.com/collections/fringe-1">FRINGE</a>'+
            '                </li>'+
            '            </ul>'+
            '        </div>'+
            '    </div>'+
            '    <div class="custTrendingCol">'+
            '        <a href="https://www.thesashbag.com/products/durga-leather-fringe-sash-bag">'+
            '            <div class="imgBox">'+
            '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/shop-all-trending-img.png" alt="">'+
            '            </div>'+
            '            <div class="title">Trending Now</div>'+
            '        </a>'+
            '    </div>'+
            '</div>';

        if (document.querySelectorAll('.header-sidebar.drawer #header-panel-1 ul.header-sidebar__linklist').length > 0 && document.querySelectorAll('.custShopMegaMenuMobNew').length == 0 ){
            
            var headerPanel = document.querySelector('.header-sidebar.drawer #header-panel-1 ul.header-sidebar__linklist');
            
            if (headerPanel) {
                headerPanel.insertAdjacentHTML('afterend', shopMegaMenuMobhtml);
            }
        }

         //add blog tab in About sash menu

         var blogItemMobHtml = '<li style="opacity: 1; transform: translateY(0px)" class="custBlogMobDiv">' +
         '<a href="/blogs/news" class="header-sidebar__linklist-button h6">Blog</a>' +
         '</li>';

        if(document.querySelectorAll('.header-sidebar.drawer #header-panel-2 ul.header-sidebar__linklist').length > 0 && document.querySelectorAll('.custBlogMobDiv').length ==0 ){
    
        var aboutSashDropdownMenu = document.querySelector('.header-sidebar.drawer #header-panel-2 ul.header-sidebar__linklist');
        aboutSashDropdownMenu.insertAdjacentHTML('beforeend',  blogItemMobHtml);

        }

        //add help centre menu in Need to know tab

         var helpCenterMobhtml = '<li style="opacity: 1; transform: translateY(0px)"  class="custHelpCenterMobDiv">' +
         '<a href="https://the-sash-bag.gorgias.help/en-US" class="header-sidebar__linklist-button h6">Help Center</a>' +
         '</li>';


         if(document.querySelectorAll('.header-sidebar.drawer #header-panel-3 ul.header-sidebar__linklist').length > 0 && document.querySelectorAll('.custHelpCenterMobDiv').length == 0 ){
     
         var needToKnowDropdownMenu = document.querySelector('.header-sidebar.drawer #header-panel-3 ul.header-sidebar__linklist');
         needToKnowDropdownMenu.insertAdjacentHTML('beforeend', helpCenterMobhtml);

         }

         //add RewardBadge 

         var linkListMobItems = document.querySelectorAll('.header-sidebar__linklist a');
         var rewardBadgeHtml ='<span class="custRewardBadgeMobHtml">New</span>';

         linkListMobItems.forEach(function(anchor) {
            if (anchor.innerText.trim() === 'REWARDS' && document.querySelectorAll('.custRewardBadgeMobHtml').length == 0) {
                anchor.insertAdjacentHTML('beforeend', rewardBadgeHtml);
            }

            switch (anchor.innerText.trim()) {
                case 'CONTACT US':
                case 'REWARDS':
                case 'HELP CENTER':
                case 'BLOG':
                    anchor.parentNode.classList.add('custHideElement');
                    break;
                default:
                    break;
            }
        });

        //add footer html

        var footerMobHtml ='<ul class="custMobSocialIcons">'+
        '    <li>'+
        '        <a href="https://www.facebook.com/sashbag" target="_blank">'+
        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/facebook.svg" alt="facebook">'+
        '        </a>'+
        '    </li>'+
        '    <li>'+
        '        <a href="https://www.pinterest.com/thesashbag/" target="_blank">'+
        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/pinterest.svg" alt="pinterest">'+
        '        </a>'+
        '    </li>'+
        '    <li>'+
        '        <a href="https://www.instagram.com/sashbag/" target="_blank">'+
        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/instagram.svg" alt="instagram">'+
        '        </a>'+
        '    </li>'+
        '    <li>'+
        '        <a href="https://www.tiktok.com/@thesashbag" target="_blank">'+
        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/tiktok.svg" alt="tiktok">'+
        '        </a>'+
        '    </li>'+
        '    <li>'+
        '        <a href="https://www.youtube.com/@thesashbag/featured" target="_blank">'+
        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/youtube.svg" alt="youtube">'+
        '        </a>'+
        '    </li>'+
        '</ul>';

       
        if (document.querySelectorAll('.header-sidebar__footer a[href="/account/login"]').length > 0 && document.querySelectorAll('.custMobSocialIcons').length == 0 ) {
            var loginAnchors = document.querySelectorAll('.header-sidebar__footer a[href="/account/login"]');
         
                loginAnchors.forEach(function(loginAnchor) {
                    loginAnchor.textContent = loginAnchor.textContent.replace(/Login/g, 'Log in');
                loginAnchor.insertAdjacentHTML('afterend', footerMobHtml);
            });
        }

    }

   
};