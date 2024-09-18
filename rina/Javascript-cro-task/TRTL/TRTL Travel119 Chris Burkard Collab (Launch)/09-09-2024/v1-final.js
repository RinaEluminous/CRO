function checkAndInitialize() {
    if (localStorage.getItem('custLaunchSticklyFooterClosedV1') === null && (document.querySelectorAll('.template-index').length > 0 || document.querySelectorAll('.template-collection').length > 0)) {
        addStickyFooterLaunch();
        clickOperation();
    }
    if (document.querySelectorAll('.template-collection').length > 0) {
        addBadgeOnChrisBurkardProduct();
    }
}

// Use window.onload to ensure all resources are fully loaded
window.onload = function () {
    checkAndInitialize();
};


document.addEventListener('DOMContentLoaded', function () {
    checkAndInitialize();
});

// In case the DOMContentLoaded event is already fired before the script loads
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    checkAndInitialize();

}

function getCount() {
    return fetch('https://trtltravel.com/products/chris-burkard-trtl-travel-pillow-cool?view=inventory')
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

// Add chris-burkard product badge html 
function addBadgeOnChrisBurkardProduct() {
  getCount().then(count => {
        if (count) {
            var productLeftCountHtml = '<div class="custChrisTrendingBadge">' +
                '        <img src="https://trtltravel.com/cdn/shop/files/white-fire-icon.svg"> ONLY ' + count + ' LEFT' +
                '    </div>';
        }
        if (window.innerWidth <= 767) {
            var travelPillowSecElement = document.querySelectorAll('.row.g-3 .d-md-none.col-6');
        } else {
            var travelPillowSecElement = document.querySelectorAll('.row.g-3');
        }

        if (travelPillowSecElement) {
            travelPillowSecElement.forEach(function (element) {
                var headingElement = element.querySelector('h5');
                if (headingElement && headingElement.textContent.includes('Chris Burkard x TRTL Travel Pillow Cool')) {
                   if (document.querySelectorAll('.custChrisTrendingBadge').length == 0) {
                        headingElement.insertAdjacentHTML('beforebegin', productLeftCountHtml);
                    }

                }

            });
        }

    });

}

//add sticky footer of Double Bundle
function addStickyFooterLaunch() {
 
    var strLaunchUrl = "/products/chris-burkard-trtl-travel-pillow-cool";
    getCount().then(count => {
        if (count && document.querySelectorAll('.custLaunchSticklyFooterV1').length == 0) {

            LaunchSticklyFooterHTML = '<div class="custLaunchSticklyFooterV1">' +
                '    <div class="custTrendingBadge">' +
                '        <img src="https://trtltravel.com/cdn/shop/files/white-fire-icon.svg"> ONLY ' + count + ' LEFT' +
                '    </div>' +
                '    <div class="custCloseIcon">✕</div><a class="bm-container-link" href="' + strLaunchUrl + '"></a>' +
                '    <div class="custStickyLaunchWrapperV1">' +
                '        <div class="custMainLeftSide">' +
                '            <div class="imgWrapper"><a href="' + strLaunchUrl + '"><img class="imgDesktop" src="https://trtltravel.com/cdn/shop/files/chris_burkard_img.png" alt="deep-sleep-sticky"></a></div>' +
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
    });
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