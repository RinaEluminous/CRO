window.onload = function () {
    updateBundleNavImg();
    if (localStorage.getItem('custLaunchSticklyFooterClosedV1') === null && (document.querySelectorAll('.template-index').length > 0 || document.querySelectorAll('.template-collection').length > 0)) {
        addStickyFooterLaunch();
        clickOperation();
    }

    if (document.querySelectorAll('.template-collection').length > 0) {
            addBannerOnCollection();
            addSliderOnCollectionNew();
    }

};

//update nav DCB with chris-burkard product 
function updateBundleNavImg() {
    //desktop view
    var deskProductMenu = document.querySelectorAll('.tile-product-menu');
    deskProductMenu.forEach(function (element) {
        element.classList.add('custChrisBurkardPillow');
    });

    var deskChrisBurkardPillowMenu = document.querySelectorAll('.custChrisBurkardPillow');

    deskChrisBurkardPillowMenu.forEach(function (element) {
        //update all link of double bundle with chris burkard product link
        var DCBElementsLink = element.querySelectorAll('[href*="/products/double-comfort-bundle-free-gift"]');

        DCBElementsLink.forEach(function (element) {
            element.href = '/products/chris-burkard-trtl-travel-pillow-cool';
        });

        //update double bundle image at desktop
        var textElement = element.querySelector('p');
        if (textElement && textElement.textContent.includes('Includes Free Gift')) {
            var imgElement = element.querySelector('img');
            if (imgElement) {
                imgElement.setAttribute('data-src', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_pillow_img.png');
                imgElement.setAttribute('data-srcset', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_pillow_img.png');
                imgElement.setAttribute('src', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_pillow_img.png');
                imgElement.setAttribute('srcset', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_pillow_img.png');
                imgElement.setAttribute('alt', 'CHRIS BURKARD X TRTL PILLOW');
            }
        }

        // Add the "Limited Edition collaboration" text
        var limitedEditionBadges = element.querySelectorAll('.product-flashtags-container');
        limitedEditionBadges.forEach(function (badge) {
            if (!badge.querySelector('.custLimitedEditionText')) {
            badge.insertAdjacentHTML('afterbegin', '<div class="custLimitedEditionText">Limited Edition collaboration</div>');
            }
        });

        // Add class "DOUBLE COMFORT BUNDLE" for this
        var headingElement = element.querySelector('h5');
        if (headingElement && headingElement.textContent.includes('DOUBLE COMFORT BUNDLE')) {
            headingElement.classList.add('custDCBDeskText');
            headingElement.innerHTML = 'CHRIS BURKARD <span class="custCrossSpan">X</span> TRTL PILLOW';
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
            element.href = '/products/chris-burkard-trtl-travel-pillow-cool';
        });

        const paragraph = listItem.querySelector('p');
        if (paragraph && paragraph.textContent.includes('Includes Free Gift')) {
            // Update img attributes
            const imgElement = listItem.querySelector('img');
            if (imgElement) {
                imgElement.setAttribute('data-src', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/chris_burkard_img.png');
                imgElement.setAttribute('data-srcset', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/chris_burkard_img.png');
                imgElement.setAttribute('src', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/chris_burkard_img.png');
                imgElement.setAttribute('srcset', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/chris_burkard_img.png');
                imgElement.setAttribute('alt', 'CHRIS BURKARD X TRTL PILLOW');
             
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
                            'CHRIS BURKARD <span class="custCrossSpan">X</span> TRTL PILLOW'
                        );
                        var parentDiv = headingElementBCB.closest('.col-12.mt-2');
                        if (parentDiv) {
                            parentDiv.classList.add('custMobileBurkardLink');
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
    var mobileBurkardLinkDiv = document.querySelector('.custMobileBurkardLink');
    var rowg4Div = document.querySelector('.row.g-4');

    if (mobileBurkardLinkDiv && rowg4Div) {
        var clonedMobileBurkardLinkDiv = mobileBurkardLinkDiv.cloneNode(true);
        rowg4Div.insertBefore(clonedMobileBurkardLinkDiv, rowg4Div.firstChild);
    }
}

//Add a new collection banner
function addBannerOnCollection() {
    //add banner on desktop 
    var collectionBannerHtml = '<div class="custLimitedCollaboration">' +
        '    <div class="container">' +
        '        <div class="custTextContent">' +
        '            <h6>Limited Edition collaboration</h6>' +
        '            <h2>Chris Burkard <span class="custCrossSpan">X</span> TrtL PILLOW</h2>' +
        '            <a href="/products/chris-burkard-trtl-travel-pillow-cool" class="custYellowBtn"><small>LIMITED AVAILABILITY</small>SHOP NOW</a>' +
        '        </div>' +
        '        <div class="custImgContent">' +
        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/chris_burkard_img.png" alt="chris_burkard_img">' +
        '        </div>' +
        '    </div>' +
        '</div>';


    var SlideImgElements = document.querySelectorAll('.gh-left__slideImage');
    SlideImgElements.forEach(function (element) {
        if (element.textContent.includes('Bundles')) {
          
            var parentElement = element.closest('.section-callout-products');
            if (parentElement && document.querySelectorAll('.custLimitedCollaboration').length == 0) {
                if (window.innerWidth <= 767) {
                    parentElement.insertAdjacentHTML('beforebegin', collectionBannerHtml);
                } else {
                    parentElement.insertAdjacentHTML('afterend', collectionBannerHtml);
                }

            }
        }
    });

}

// Add chris-burkard product slider on collection page
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
    var chrisBarkardProductSliderHtml = '<div class="swiper-slide col-md-3 custProSlider" style="height: auto; width: 418.667px; margin-right: 8px;" data-swiper-slide-index="1">' +
        '<a class="custLimitWrapperLink" href="/products/chris-burkard-trtl-travel-pillow-cool"> </a>'+
        '    <div class="custTitle">LIMITED EDITION</div>' +
        '    <div class="custProImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/chris_burkard_img.png"></div>' +
        '    <div class="custWrapperPro">' +
        '        <div class="custStarImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg"></div>' +
        '        <h4><a href="/products/chris-burkard-trtl-travel-pillow-cool">Chris Burkard <span class="custCrossSpan">x</span> TrtL PILLOW</a></h4>' +
        '        <div class="custPrice">' +
        '            <div class="card-footer p-0">' +
        '                <div class="px-2">' +
        '                    <span class="product-price my-2 d-inline-block">' +
        '                       CA$104.99' +
        '                    </span>' +
        '                </div>' +
        '                <a class="d-md-none btn btn-secondary px-4 mt-2 w-100" href="/products/chris-burkard-trtl-travel-pillow-cool">SHOP NOW</a>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    var recomendedProductSwiperElements = document.querySelector('.custRecomendedProductSwiper');
    if (recomendedProductSwiperElements && document.querySelectorAll('.custProSlider').length == 0) {
    recomendedProductSwiperElements.insertAdjacentHTML('afterbegin', chrisBarkardProductSliderHtml);
    }
 
    var slides = document.querySelectorAll('.custRecomendedProductSwiper .swiper-slide.col-md-3');
    slides.forEach(function(slide, index) {
        slide.setAttribute('data-swiper-slide-index', index + 1);
    });

    var intSwiperCnt = 0;
    var intSwiperInterval = setInterval(function() {
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
function addStickyFooterLaunch() {

    var strLaunchUrl = "/products/chris-burkard-trtl-travel-pillow-cool";

    if (document.querySelectorAll('.custLaunchSticklyFooterV1').length == 0) {

        LaunchSticklyFooterHTML = '<div class="custLaunchSticklyFooterV1">' +
            '    <div class="custCloseIcon">✕</div><a class="bm-container-link" href="' + strLaunchUrl + '"></a>' +
            '    <div class="custStickyLaunchWrapperV1">' +
            '        <div class="custMainLeftSide">' +
            '            <div class="imgWrapper"><a href="' + strLaunchUrl + '"><img class="imgDesktop" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/chris_burkard_img.png" alt="deep-sleep-sticky"></a></div>' +
            '            <div class="custLeftSection">' +
            '                <div class="custSubHeading">' +
            '                    <p>LIMITED EDITION COLLABORATION</p>' +
            '                </div>' +
            '                <div class="custBannerHeading"><a href="' + strLaunchUrl + '">CHRIS BURKARD' +
            '<span class="custCrossSpan"> X </span>' +
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
    var footerCloseButtons = document.querySelectorAll('.custCloseIcon');
    footerCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            document.querySelector('.custLaunchSticklyFooterV1').style.display = 'none';
            localStorage.setItem('custLaunchSticklyFooterClosedV1', 'yes');

        });
    });
    var footerAnchButtons = document.querySelectorAll('.custLaunchSticklyFooterV1 a');
    footerAnchButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            localStorage.setItem('custLaunchSticklyFooterClosedV1', 'yes');
        });
    });
}