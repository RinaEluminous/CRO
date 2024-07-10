window.onload = function () {
    if (document.querySelectorAll('.template-index').length > 0) {
        redesignAboveFoldOnHP();
        if (window.innerWidth <= 767) {
            redesignAboveFoldOnHPMob();
        }
        allClickOperation();
    }
};

function redesignAboveFoldOnHP() {
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
                loop: true,

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
    if (secHeaderElement && document.querySelectorAll('.custResultText').length == 0) {
        secHeaderElement.insertAdjacentHTML('beforebegin', '<h4 class="custResultText">RESULTS YOUR CAN SEE AND FEEL</h4>');
    }

    var h2PopularproductElement = document.querySelector('body.template-index .mostPopular_product h2');
    if (h2PopularproductElement && document.querySelectorAll('.custProdPara').length == 0) {
        h2PopularproductElement.insertAdjacentHTML('afterend', '<p class="popularProdPara custProdPara">Improve your health from the inside-out with our range of organic, clinically effective supplements.</p>');

    }


    var reviewsHtml = '<div class="rating_meta custRatingMeta"><img src="//www.myvidaorigins.com/cdn/shop/files/stars_1.png?v=1714718129" height="100" width="100">' +
        '    <div class="metafield-rich_text_field">' +
        '        <p>Join over<strong>900,000</strong>people who have made the switch</p>' +
        '    </div>' +
        '</div>';
    if (secHeaderElement && document.querySelectorAll('.custRatingMeta').length == 0) {
        secHeaderElement.insertAdjacentHTML('afterend', reviewsHtml);
    }

    var bestSellarproduct = document.querySelector('body.template-index .best_seller_product');
    var asFeatureInHtml = '<div class="partners_logos custPartnerLogos">' +
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


    if (bestSellarproduct && document.querySelectorAll('.custPartnerLogos').length == 0) {
        bestSellarproduct.insertAdjacentHTML('afterend', asFeatureInHtml);
    }

    var headingElement = document.querySelector('.custMostPopularSection h2');
    headingElement.innerHTML = 'Cleaner, natural supplements';

    var shopAllAnchorElement = document.querySelectorAll('.custMostPopularSection a');

    shopAllAnchorElement.forEach(function (anchor) {
        if (anchor.textContent.includes('SHOP ALL')) {
            anchor.textContent = 'SHOP NOW';
        }
    });
   
     
    //-----Our customer stories section -----
    var customerContentElement = document.querySelector('.customer-content');
    customerContentElement.outerHTML = '<div class="custCustomerContent">' +
        '    <div class="custVideoDetails custFirstVideo">' +
        '        <video id="firstVideo" class="custVideoPlayer" autoplay playsinline muted poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-1.png">' +
        '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles.mov" type="video/mp4">' +
        '        </video>' +
        '        <p>"The difference in my skin was exceptional."</p>' +
        '    </div>' +
        '    <div class="custVideoDetails custSecondVideo">' +
        '        <video id="secondVideo" class="custVideoPlayer" playsinline poster="https://growth-hit.s3.us-west-2.amazonaws.com/myVidaOrigins/video-poster-2.png">' +
        '            <source src="https://bm-test-dev.s3.us-east-2.amazonaws.com/growthHit/MyVida/02/Spanish+Audio+English+Subtitles+2.mov" type="video/mp4">' +
        '        </video>' +
        '        <p>"My hair is shinier, thicker, and growing faster."</p>' +
        '    </div>' +
        '</div>';
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

// Function to check if the video is playing
function isVideoPlaying(video) {
   
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
}

function allClickOperation() {
    var firstVideo = document.querySelector('#firstVideo');
    var secondVideo = document.querySelector('#secondVideo');

    // Autoplay first video if not already playing
    if (!isVideoPlaying(firstVideo)) {
        firstVideo.play().catch(error => {
        });
    }

    // Event listener for clicks
    document.addEventListener('click', function (event) {
        if (event.target === firstVideo) {
            // Toggle play/pause for first video only
            if (firstVideo.paused) {
                firstVideo.play().catch(error => {
                  
                });
            } else {
                console.log('Pausing first video...');
                firstVideo.pause();
            }
        } else if (event.target === secondVideo) {
            // Toggle play/pause for second video only
            if (secondVideo.paused) {
               
                secondVideo.play().catch(error => {
                  
                });
            } else {
               
                secondVideo.pause();
            }
        }
    });
}