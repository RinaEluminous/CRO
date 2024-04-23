window.onload = function() {
  // update navigation 
  if(window.screen.width > 1139){
		updateDesktopNavigation();
	}else{
		updateMobileNavigation();
	}
  //update home page section
	updateHomePageSection();
};

//update Desktop navigation 
function updateDesktopNavigation() {
    //add text shop by occasion with image replacement in trending section
    var shopTrendingListItem = document.querySelector('.custMegaMenuShop .custMenuList .shop-by-occasions');
    if (shopTrendingListItem) {

        var newHTML = '<a href="/collections/mom">' +
            '    <div class="img_icon">' +
            '        <img width="500" height="300" decoding="async" loading="lazy" src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/mother-icon.png">' +
            '    </div>Mother’s day' +
            '</a>';
        shopTrendingListItem.innerHTML = newHTML;
    }

    //add text shop by occasion
    var shopbyOccasionHeading = document.querySelector('.custMegaMenuShop .shop-by-occasions h6');

    if (shopbyOccasionHeading) {
        shopbyOccasionHeading.textContent = 'Mother’s Day';
    }

    //shop all change text and update links
    var shopAllForHerItem = document.querySelector('.custMegaMenuShop .custMenuList li.for-her a');

    if (shopAllForHerItem) {
        shopAllForHerItem.textContent = 'Mom necklaces';
        shopAllForHerItem.href = '/collections/mom-necklaces';
    }

    var shopAllForHerItem = document.querySelector('.custMegaMenuShop .custMenuList li.for-him a');

    if (shopAllForHerItem) {
        shopAllForHerItem.textContent = 'Mom Bracelets';
        shopAllForHerItem.href = '/collections/mom-bracelets';
    }

    var shopAllForHerItem = document.querySelector('.custMegaMenuShop .custMenuList li.couples-gifts a');

    if (shopAllForHerItem) {
        shopAllForHerItem.textContent = 'Mom rings';
        shopAllForHerItem.href = '/collections/mom-rings ';
    }
}

//update Shop By Occasions section 
function updateHomePageSection() {
    var arrReplaceContents = {
        'https://www.customcuff.co/collections/for-her': '/collections/mom-necklaces',
        'https://www.customcuff.co/collections/for-him': '/collections/mom-bracelets',
        'https://www.customcuff.co/collections/couples-gifts': '/collections/mom-rings ',
        'For Her': 'Mom Necklaces',
        'For Him': 'Mom Bracelets',
        'Anniversary Gifts': 'Mom Rings',
        '//www.customcuff.co/cdn/shop/files/SNOWB-0991.png?v=1705420229': 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/mom-necklace.png',
        '//www.customcuff.co/cdn/shop/files/IMG_2814.png?v=1705420295': 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/mom-bracelets.png',
        '//www.customcuff.co/cdn/shop/files/DSC09085.png?v=1705420381': 'https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/mom-ring.png'
    };

    var tabContentWrappers = document.querySelectorAll('.template-index .tab_content_wrapper .tab_content .category_collection_product_tab');

    if (tabContentWrappers.length >= 2) {

        var secondTabContentWrapper = tabContentWrappers[1];
        var swiperWrapper = secondTabContentWrapper.querySelector('.swiper-wrapper');
        if (swiperWrapper) {
            swiperWrapper.childNodes.forEach(function(child) {
                if (child.classList && child.classList.contains('swiper-slide')) {
                    //Lables
                    var labels = child.querySelector('.product_title h3');
                    var oldLabel = labels.textContent;
                    if (arrReplaceContents.hasOwnProperty(oldLabel)) {
                        labels.textContent = arrReplaceContents[oldLabel];
                    }

                    //url
                    var urls = child.querySelectorAll('.product_block a');
                    urls.forEach(function(url) {
                        var oldUrl = url.href;
                        if (arrReplaceContents.hasOwnProperty(oldUrl)) {
                            url.href = arrReplaceContents[oldUrl];
                        }
                    });

                    //image
                    var images = child.querySelector('.product_image img');
                    var oldSrc = images.getAttribute('src');
                    if (arrReplaceContents.hasOwnProperty(oldSrc)) {
                        images.setAttribute('src', arrReplaceContents[oldSrc]);
                    }

                }
            });
        }
    }
}

//function for replace text for all shop list
function replaceTextAndLink(selector, searchText, newText, newLink) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
        if (element.textContent.trim() === searchText) {
           element.textContent = newText;
            if (element.tagName.toLowerCase() === 'a') {
                element.href = newLink;
            }
        }
    });
}

//function for replace 'Shop By Occasions' tab with new one
function replaceButtonHTML(buttonText, newHTML) {
    var buttons = document.querySelectorAll('nav[aria-label="Sidebar navigation"] .Collapsible__Button');
    buttons.forEach(function(button) {
        if (button.textContent.trim() === buttonText) {
            button.outerHTML = newHTML;
        }
    });
}

//function for replace trending tab 'Shop By Occasions' text with new one
function replaceTrendingButtonHTML(buttonText, newButtonText, newLink) {
    var collapsibleSections = document.querySelectorAll('.SidebarMenu__Nav--primary .Collapsible');
    collapsibleSections.forEach(function(collapsibleSection) {
        var sectionTitle = collapsibleSection.querySelector('.Collapsible__Button');
        if (sectionTitle && sectionTitle.textContent.trim() === "Trending") {
            var shopByOccasionsButton = collapsibleSection.querySelector('a.Link--primary');
            if (shopByOccasionsButton && shopByOccasionsButton.textContent.trim() === buttonText) {
                shopByOccasionsButton.href = newLink;
                shopByOccasionsButton.textContent = newButtonText;
            }
        }
    });
}

//update mobile navigation 
function updateMobileNavigation(){
	  // Replace FOR HER text and link
    replaceTextAndLink('nav[aria-label="Sidebar navigation"] .Linklist__Item:nth-child(2) .Link', 'FOR HER', 'Mom necklaces', '/collections/mom-necklaces');

    // Replace FOR HIM text and link
    replaceTextAndLink('nav[aria-label="Sidebar navigation"] .Linklist__Item:nth-child(3) .Link', 'FOR HIM', 'Mom Bracelets', '/collections/mom-bracelets');

    // Replace COUPLES GIFTS text and link
    replaceTextAndLink('nav[aria-label="Sidebar navigation"] .Linklist__Item:nth-child(4) .Link', 'COUPLES GIFTS', 'Mom rings', '/collections/mom-rings');

    // Replace the HTML content of the button with the specified text content
    replaceButtonHTML('Shop By Occasions', '<button class="Collapsible__Button Heading u-h6" data-action="toggle-collapsible" aria-expanded="false">' +
        '<div class="img_icon"><img width="500" height="300" decoding="async" loading="lazy" src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/mother-icon.png">' +
        '</div>Mother’s day<span class="Collapsible__Plus"></span>' +
        '</button>');

    // Replace Link in trending Section
    replaceTrendingButtonHTML('Shop By Occasions', 'Mother’s Day', '/collections/mom');
}