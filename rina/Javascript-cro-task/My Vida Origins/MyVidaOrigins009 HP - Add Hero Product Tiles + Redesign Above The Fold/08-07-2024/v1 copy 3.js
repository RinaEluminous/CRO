window.onload = function () {
    if (document.querySelectorAll('.template-index').length > 0) {
        console.log("home page >>>>>");
        redesignAboveFoldOnHP();
        //allClickOperation();
        if (window.innerWidth <= 767) {
            redesignAboveFoldOnHPMob();
        }

    }

};

function redesignAboveFoldOnHP() {

    console.log("redesignAboveFoldOnHP >>>>>");

    // ---Most popular section -----
    //add class to the Most popular section
    var mostPopularSection = document.querySelector('.mostPopular_product');
    if (mostPopularSection) {
        mostPopularSection.classList.add('custMostPopularSection');
    }
    var swiperWrapperElement = document.querySelector('.custMostPopularSection .swiper-wrapper');
    if (swiperWrapperElement) {
        swiperWrapperElement.classList.add('custMostPopularSectionSwiperWrapper');
    }
    //-----slider section------
    var intSwiperCnt = 0;
    var intSwiperInterval = setInterval(function () {
        intSwiperCnt += 1;

        if (typeof Swiper !== 'undefined') {
            var swiper = new Swiper('.custMostPopularSection .swiper', {
                slidesPerView: 5,
                spaceBetween: 30,

            });
            clearInterval(intSwiperInterval);
        }

        if (intSwiperCnt === 50) {
            clearInterval(intSwiperInterval);
        }
    }, 70);


    var productBlockElement = document.querySelectorAll('.custMostPopularSection .product_block');

    productBlockElement.forEach(function (element) {
        var anchorElement = element.querySelector('a');
        var reviewsElement = element.querySelector('.reviews');
        var productNameElement = element.querySelector('.product_name');
        anchorElement.appendChild(reviewsElement);
        anchorElement.appendChild(productNameElement);
    });

    //add text

    var secHeaderElement = document.querySelector('body.template-index .mostPopular_product .sec_header');

    secHeaderElement.insertAdjacentHTML('beforebegin', '<h4>RESULTS YOUR CAN SEE AND FEEL</h4>');

    var h2PopularproductElement = document.querySelector('body.template-index .mostPopular_product h2');

    var h2PopularproductElement = document.querySelector('body.template-index .mostPopular_product h2');

    h2PopularproductElement.insertAdjacentHTML('afterend', '<p class="popularProdPara">Improve your health from the inside-out with our range of organic, clinically effective supplements.</p>');

    var reviewsHtml = '<div class="rating_meta"><img src="//www.myvidaorigins.com/cdn/shop/files/stars_1.png?v=1714718129" height="100" width="100">' +
        '    <div class="metafield-rich_text_field">' +
        '        <p>Join over<strong>900,000</strong>people who have made the switch</p>' +
        '    </div>' +
        '</div>';

    secHeaderElement.insertAdjacentHTML('afterend', reviewsHtml);

    var bestSellarproduct = document.querySelector('body.template-index .best_seller_product');

    var asFeatureInHtml = '<div class="partners_logos">' +
        '    <p class="partner-text"> As featured in</p>' +
        '    <div class="img_container">' +
        '        <img src="//www.myvidaorigins.com/cdn/shop/files/Frame_3.png?v=1714994949">' +
        '    </div>' +
        '    <div class="img_container">' +
        '        <img src="//www.myvidaorigins.com/cdn/shop/files/Frame_4.png?v=1714994956">' +
        '    </div>' +
        '    <div class="img_container">' +
        '        <img src="//www.myvidaorigins.com/cdn/shop/files/dhLogoSVG_1.png?v=1714994956">' +
        '    </div>' +
        '</div>';

    bestSellarproduct.insertAdjacentHTML('afterend', asFeatureInHtml);

    var headingElement = document.querySelector('.custMostPopularSection h2');
    headingElement.innerHTML = 'Cleaner, natural supplements';

    var shopAllAnchorElement = document.querySelectorAll('.custMostPopularSection a');

    shopAllAnchorElement.forEach(function (anchor) {
        if (anchor.textContent.includes('SHOP ALL')) {
            anchor.textContent = 'SHOP NOW';
        }
    });

    //-----Our customer stories section -----

    //replace image 
    var firstVideoImgDiv = document.querySelector('.template-index .customer-content .first-video img');

    if (firstVideoImgDiv) {
        firstVideoImgDiv.src = "https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png";
    }

    var secondVideoImgDiv = document.querySelector('.template-index .customer-content .second-video img');

    if (secondVideoImgDiv) {
        secondVideoImgDiv.src = "https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-2.png";

    }

}

function redesignAboveFoldOnHPMob() {

    const popularProdParaMobElement = document.querySelector('body.template-index .mostPopular_product p.popularProdPara');
    const bestSellerProductMobElement = document.querySelector('body.template-index .mostPopular_product .best_seller_product');

    if (popularProdParaMobElement && bestSellerProductMobElement) {
        bestSellerProductMobElement.insertAdjacentElement('afterend', popularProdParaMobElement);
    }


    const shopLinkMobElement = document.querySelector('body.template-index .mostPopular_product a.shop_link.mob_link');

    if (popularProdParaMobElement && shopLinkMobElement) {
        popularProdParaMobElement.insertAdjacentElement('beforeend', shopLinkMobElement);
    }


    const ratingMetaMobElement = document.querySelector('body.template-index .mostPopular_product .rating_meta');
    const partnersLogoMobElement = document.querySelector('body.template-index .partners_logos');

    if (partnersLogoMobElement && ratingMetaMobElement) {
        partnersLogoMobElement.insertAdjacentElement('beforebegin', ratingMetaMobElement);
    }

}

function allClickOperation() {

    var firstVideoImgDiv = document.querySelector('.template-index .customer-content .first-video img');

    var firstVideoDivElement = document.querySelector('.video-content');

    firstVideoImgDiv.insertAdjacentElement('afterend', firstVideoDivElement);

    if (firstVideoImgDiv) {
        firstVideoImgDiv.addEventListener('click', function () {
            var videoTagElement = document.querySelectorAll('.video-content video');
            var sourceTagElement = document.querySelectorAll('.video-content video source');
           //sourceTagElement.src = 

                videoTagElement.forEach(function (video) {
                    video.play();
                });

            // secondVideoContainer.click();
        });
    }


}