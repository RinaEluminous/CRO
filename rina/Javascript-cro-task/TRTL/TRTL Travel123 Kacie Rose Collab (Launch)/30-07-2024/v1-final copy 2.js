console.log('before load >>>>>>>>>>');

document.addEventListener("DOMContentLoaded", function () {
    console.log('testing the experience');
    updateBundleNavImgNew();
    if (localStorage.getItem('custLaunchKacieRoseSticklyFooterClosedV1') === null && (document.querySelectorAll('.template-index').length > 0 || document.querySelectorAll('.template-collection').length > 0)) {
        addStickyFooterLaunchNew();
        clickOperation();
    }

    if (document.querySelectorAll('.template-collection').length > 0) {
        addBannerOnCollectionNew();


        
        addSliderOnCollectionNew();
    }
});



//update nav DCB with kacie-rose product 
function updateBundleNavImgNew() {
    //desktop view
    var deskProductMenu = document.querySelectorAll('.tile-product-menu');
    deskProductMenu.forEach(function (element) {
        element.classList.add('custkacieRosePillow');
    });

    var deskKacieRosePillowMenu = document.querySelectorAll('.custkacieRosePillow');

    deskKacieRosePillowMenu.forEach(function (element) {
        //update all link of double bundle with chris burkard product link
        var DCBElementsLink = element.querySelectorAll('[href*="/products/double-comfort-bundle-free-gift"]');

        DCBElementsLink.forEach(function (element) {
            element.href = '/products/kacie-rose-x-trtl-travel-pillow-cool';
        });

        //update double bundle image at desktop
        var textElement = element.querySelector('p');
        if (textElement && textElement.textContent.includes('Includes Free Gift')) {
            var imgElement = element.querySelector('img');
            if (imgElement) {
                imgElement.setAttribute('data-src', 'https://trtltravel.com/cdn/shop/files/kacie_lp_pillow_img-pink.png');
                imgElement.setAttribute('data-srcset', 'https://trtltravel.com/cdn/shop/files/kacie_lp_pillow_img-pink.png');
                imgElement.setAttribute('src', 'https://trtltravel.com/cdn/shop/files/kacie_lp_pillow_img-pink.png');
                imgElement.setAttribute('srcset', 'https://trtltravel.com/cdn/shop/files/kacie_lp_pillow_img-pink.png');
                imgElement.setAttribute('alt', 'KACIE ROSE X TRTL PILLOW');
            }
        }

        // Add the "Limited Edition collaboration" text
        var limitedEditionBadges = element.querySelectorAll('.product-flashtags-container');
        limitedEditionBadges.forEach(function (badge) {
            if (!badge.querySelector('.custLimitedEditionTextNew')) {
                badge.insertAdjacentHTML('afterbegin', '<div class="custLimitedEditionTextNew">Limited Edition collaboration</div>');
            }
        });

        // Add class "DOUBLE COMFORT BUNDLE" for this
        var headingElement = element.querySelector('h5');
        if (headingElement && headingElement.textContent.includes('DOUBLE COMFORT BUNDLE')) {
            headingElement.classList.add('custDCBDeskText');
            headingElement.innerHTML = 'KACIE ROSE <span class="custCrossSpanNew"> X </span> TRTL PILLOW';
        }
        // Add class "Includes Free Gift" for this
        var headingElement = element.querySelector('p');
        if (headingElement && headingElement.textContent.includes('Includes Free Gift')) {
            headingElement.classList.add('custFreeGiftDeskText');
        }


    });

    //Mobile view
    const mobileNavbarLinksElement = document.querySelectorAll('.tab-pane');
    mobileNavbarLinksElement.forEach(function (listItem) {
        //update all link of double bundle with chris burkard product link
        var DCBElementsLink = listItem.querySelectorAll('[href*="/products/double-comfort-bundle-free-gift"]');
        DCBElementsLink.forEach(function (element) {
            element.href = '/products/kacie-rose-x-trtl-travel-pillow-cool';
        });

        const paragraph = listItem.querySelector('p');
        if (paragraph && paragraph.textContent.includes('Includes Free Gift')) {
            // Update img attributes
            const imgElement = listItem.querySelector('img');
            if (imgElement) {
                imgElement.setAttribute('data-src', 'https://trtltravel.com/cdn/shop/files/kacie_footer.png');
                imgElement.setAttribute('data-srcset', 'https://trtltravel.com/cdn/shop/files/kacie_footer.png');
                imgElement.setAttribute('src', 'https://trtltravel.com/cdn/shop/files/kacie_footer.png');
                imgElement.setAttribute('srcset', 'https://trtltravel.com/cdn/shop/files/kacie_footer.png');
                imgElement.setAttribute('alt', 'KACIE ROSE X TRTL PILLOW');

            }
            // Add class to h5 tag
            const h5 = listItem.querySelector('h5');
            if (h5) {
                // Replace the text content after the icon
                h5.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('TRENDING')) {
                        node.textContent = node.textContent.replace('TRENDING', 'Trending Product');
                    }
                });
            }

            var headingElementBCB = listItem.querySelector('h5.fs-6.m-0.fw-bolder.text-md-uppercase.d-flex.position-relative.me-2');
            if (headingElementBCB) {
                headingElementBCB.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('DOUBLE COMFORT BUNDLE')) {
                        node.textContent = node.textContent.replace('DOUBLE COMFORT BUNDLE', '');
                        headingElementBCB.innerHTML = headingElementBCB.innerHTML.replace(
                            node.textContent,
                            'KACIE ROSE<span class="custCrossSpanNew"> X </span> TRTL PILLOW'
                        );
                        var parentDiv = headingElementBCB.closest('.col-12.mt-2');
                        if (parentDiv) {
                            parentDiv.classList.add('custMobileKacieRoseLinkNew');
                        }
                    }
                });
            }
            // Add class "Includes Free Gift" for this
            var headingElement = listItem.querySelector('p');
            if (headingElement && headingElement.textContent.includes('Includes Free Gift')) {
                headingElement.classList.add('custFreeGiftMobText');
                headingElement.textContent = 'Limited Edition collaboration';
            }
        }
    });

    //add Burkard section before menu
    var mobileBurkardLinkDiv = document.querySelector('.custMobileKacieRoseLinkNew');
    var rowg4Div = document.querySelector('.row.g-4');

    if (mobileBurkardLinkDiv && rowg4Div) {
        var clonedMobileBurkardLinkDiv = mobileBurkardLinkDiv.cloneNode(true);
        rowg4Div.insertBefore(clonedMobileBurkardLinkDiv, rowg4Div.firstChild);
    }
}

//Add a new collection banner
function addBannerOnCollectionNew() {
    //add banner on desktop 
    var collectionBannerHtml = '<div class="custLimitedCollaborationNew">' +
        '    <div class="container">' +
        '        <div class="custTextContentNew">' +
        '            <h6>Limited Edition collaboration</h6>' +
        '            <h2>KACIE ROSE <span class="custCrossSpanNew"> X </span> TrtL PILLOW</h2>' +
        '            <a href="/products/kacie-rose-x-trtl-travel-pillow-cool" class="custYellowBtnNew"><small>LIMITED AVAILABILITY</small>SHOP NOW</a>' +
        '        </div>' +
        '        <div class="custImgContentNew">' +
        '            <img src="https://trtltravel.com/cdn/shop/files/kacie_footer.png" alt="kacie_rose_img">' +
        '        </div>' +
        '    </div>' +
        '</div>';


    var SlideImgElements = document.querySelectorAll('.gh-left__slideImage');
    SlideImgElements.forEach(function (element) {
        if (element.textContent.includes('Bundles')) {

            var parentElement = element.closest('.section-callout-products');
            if (parentElement && document.querySelectorAll('.custLimitedCollaborationNew').length == 0) {
                if (window.innerWidth <= 767) {
                    parentElement.insertAdjacentHTML('beforebegin', collectionBannerHtml);
                } else {
                    parentElement.insertAdjacentHTML('afterend', collectionBannerHtml);
                }

            }
        }
    });

}

// Add kacie-rose product slider on collection page
function addSliderOnCollectionNew() {

    var categoryTab = document.querySelector('.categories-tab-0');
    if (categoryTab) {
        var childDiv = categoryTab.querySelector('div');
        if (childDiv) {
            childDiv.classList.add('custRecomendedProduct');
        }
    }
    //add class to the swiper slider 
    var swiperSliderElements = document.querySelector('.custRecomendedProduct .swiper-wrapper.w-100');
    if (swiperSliderElements) {
        swiperSliderElements.classList.add('custRecomendedProductSwiper');
    }
    var kacieRoseProductSliderHtml = '<div class="swiper-slide col-md-3 custProSliderNew" style="height: auto; width: 418.667px; margin-right: 8px;" data-swiper-slide-index="1">' +
        '<a class="custLimitWrapperLink" href="/products/kacie-rose-x-trtl-travel-pillow-cool"> </a>' +
        '    <div class="custTitleNew">LIMITED EDITION</div>' +
        '    <div class="custProImgNew"><img src="https://trtltravel.com/cdn/shop/files/kacie_footer.png"></div>' +
        '    <div class="custWrapperProNew">' +
        '        <div class="custStarImgNew"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg"></div>' +
        '    <div class="custTrendingBadge">' +
        '        <img src="https://trtltravel.com/cdn/shop/files/white-fire-icon.svg"> ONLY 45 LEFT' +
        '    </div>' +
        '        <h4><a href="/products/kacie-rose-x-trtl-travel-pillow-cool">KACIE ROSE <span class="custCrossSpanNew"> X </span> TrtL PILLOW</a></h4>' +
        '        <div class="custPrice">' +
        '            <div class="card-footer p-0">' +
        '                <div class="px-2">' +
        '                    <span class="product-price my-2 d-inline-block">' +
        '                        $79.99' +
        '                    </span>' +
        '                </div>' +
        '                <a class="d-md-none btn btn-secondary px-4 mt-2 w-100" href="/products/kacie-rose-x-trtl-travel-pillow-cool">SHOP NOW</a>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    var recomendedProductSwiperElements = document.querySelector('.custRecomendedProductSwiper');
    if (recomendedProductSwiperElements && document.querySelectorAll('.custProSliderNew').length == 0) {
        recomendedProductSwiperElements.insertAdjacentHTML('afterbegin', kacieRoseProductSliderHtml);
    }

    var slides = document.querySelectorAll('.custRecomendedProductSwiper .swiper-slide.col-md-3');
    slides.forEach(function (slide, index) {
        slide.setAttribute('data-swiper-slide-index', index + 1);
    });

    var intSwiperCnt = 0;
    var intSwiperInterval = setInterval(function () {
        intSwiperCnt += 1;

        if (typeof Swiper !== 'undefined') {
            var swiper = new Swiper(".custRecomendedProduct", {
                slidesPerView: 2,
                spaceBetween: 8,
                breakpoints: {
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },

                },
            });
            clearInterval(intSwiperInterval);
        }

        if (intSwiperCnt === 50) {
            clearInterval(intSwiperInterval);
        }
    }, 70);


}
//add sticky footer of Double Bundle
function addStickyFooterLaunchNew() {

    var strLaunchUrl = "/products/kacie-rose-x-trtl-travel-pillow-cool";

    if (document.querySelectorAll('.custLaunchKacieRoseSticklyFooterV1').length == 0) {

        LaunchSticklyFooterHTML = '<div class="custLaunchKacieRoseSticklyFooterV1">' +
            '    <div class="custTrendingBadge">' +
            '        <img src="https://trtltravel.com/cdn/shop/files/white-fire-icon.svg"> ONLY 45 LEFT' +
            '    </div>' +
            '    <div class="custCloseIconNew">✕</div><a class="bm-container-link" href="' + strLaunchUrl + '"></a>' +
            '    <div class="custStickyLaunchWrapperV1">' +
            '        <div class="custMainLeftSide">' +
            '            <div class="imgWrapper"><a href="' + strLaunchUrl + '"><img class="imgDesktop" src="https://trtltravel.com/cdn/shop/files/kacie_footer.png" alt="deep-sleep-sticky"></a></div>' +
            '            <div class="custLeftSection">' +
            '                <div class="custSubHeading">' +
            '                    <p>LIMITED EDITION <span class="custCollabText">COLLABORATION</span></p>' +
            '                </div>' +
            '                <div class="custBannerHeading"><a href="' + strLaunchUrl + '">KACIE ROSE' +
            '<span class="custCrossSpanNew"> X </span>' +
            'TRTL PILLOW</a></div>' +
            '            </div>' +
            '        </div>' +
            '        <div class="custCtaWrapper">' +
            '            <p><a href="' + strLaunchUrl + '" class="stretched-link btn btn-light">SHOP NOW' +
            '                    </a>' +
            '            </p>' +
            '        </div>' +
            '    </div>' +
            '</div>';


        document.body.insertAdjacentHTML('beforeend', LaunchSticklyFooterHTML);
    }
}
//cross button click functionality and anchor tag click functionality
function clickOperation() {
    var footerCloseButtons = document.querySelectorAll('.custCloseIconNew');
    footerCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            document.querySelector('.custLaunchKacieRoseSticklyFooterV1').style.display = 'none';
            localStorage.setItem('custLaunchKacieRoseSticklyFooterClosedV1', 'yes');

        });
    });
    var footerAnchButtons = document.querySelectorAll('.custLaunchKacieRoseSticklyFooterV1 a');
    footerAnchButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            localStorage.setItem('custLaunchKacieRoseSticklyFooterClosedV1', 'yes');
        });
    });
}