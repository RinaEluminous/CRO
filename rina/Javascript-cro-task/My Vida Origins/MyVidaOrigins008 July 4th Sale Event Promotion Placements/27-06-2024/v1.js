// Declare global variables
var hostname, saleHeadlineText, shopNowText, maySaleEventSticklyHTML, interval, strBannerCopy, headerBannerText;
var arrPDPUrlWithJulySale, currentPath;

window.onload = function () {

    var hostname = window.location.hostname;
    currentPath = window.location.pathname.replace(/\/$/, '');

    arrPDPUrlWithJulySale = [
        "/products/organic-sulfur-granules",
        "/products/hair-skin-nails",
        "/products/liver-detox",
        "/products/daily-nourish",
        "/products/ionic-b12",
        "/products/daily-focus",
        "/products/wild-oregano-oil",
        "/products/daily-protein",
        "/products/ionic-magnesium",
        "/products/childrens-parasite",
        "/products/lymphatic",
        "/products/diabetic-support",
    ];

    if (hostname.includes('es')) {
        saleHeadlineText = "<a>¡Oferta del 4 de julio!</a>Obtenga hasta un 50 % de descuento en productos seleccionados.";
        shopNowText = "COMPRA AHORA";

        //headerBannerText = '¡Oferta del 4 de julio! </span> ¡Ahorra hasta un 50%! &nbsp;&nbsp;&nbsp;&ndash;&nbsp;&nbsp;&nbsp; Termina en';
        headerBannerText = '¡Oferta del 4 de julio! </span> <span class="custSaveCopy">¡Ahorra hasta un 50%! </span><span class="custTimerCopy"> Termina en </span>';

        if (arrPDPUrlWithJulySale.includes(currentPath)) {
            strBannerCopy = '<span>SOLO POR TIEMPO LIMITADO</span>Oferta del 4 de julio';
        } else {
            strBannerCopy = '';
        }

    } else {
        saleHeadlineText = "<a>July 4th Sale!</a>Get up to 50% OFF select products.";
        shopNowText = "SHOP NOW";

        //headerBannerText = 'July 4th Sale! </span> Save up to 50%! &nbsp;&nbsp;&nbsp;&ndash;&nbsp;&nbsp;&nbsp; Ends in';
        headerBannerText = 'July 4th Sale! </span> <span class="custSaveCopy">Save up to 50%!</span> <span class="custTimerCopy">Ends in </span>';

        if (arrPDPUrlWithJulySale.includes(currentPath)) {
            strBannerCopy = '<span>LIMITED TIME ONLY</span>July 4th Sale';
        } else {
            strBannerCopy = '';
        }
    }

    if (!window.location.pathname.startsWith("/products/") && !sessionStorage.getItem('custMemorialFooterClosedSEPro')) {
        addStickyFooterSEPro();
    }
    addHeaderBannerSEPro();
    headerBannerOnPDPSEPro();
    clickOperationSEPro();

    const redirectedFromSEPro = sessionStorage.getItem('redirectedFromSEPro');
    if (redirectedFromSEPro) {
        sessionStorage.removeItem('redirectedFromSEPro');
        shopNowFunctionalitySEPro();
    }
};

//add Sticky Footer
function addStickyFooterSEPro() {

    if (document.querySelectorAll('.custMaySaleEventSticklySEPro').length == 0) {
        maySaleEventSticklyHTML = '<div class="custMaySaleEventSticklySEPro">' +
            '    <div class="custCloseIcon">✕</div> ' +
            '    <div class="custStickyDCBundleWrapperSEPro">' +
            '        <div class="custMainLeftSide">' +
            '            <div class="custLeftSection">' +
            '                <div class="custBannerHeadingSEPro">' + saleHeadlineText + '</div>' +
            '            </div>' +
            '        </div>' +
            '        <div class="custCtaWrapper custShopNow">' +
            '            <p><a class="stretched-link btn btn-light">' + shopNowText + '</a>' +
            '            </p>' +
            '        </div>' +
            '    </div>' +
            '</div>';

        document.body.insertAdjacentHTML('beforeend', maySaleEventSticklyHTML);
    }

}
// Function to add leading zeroes
function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

//add header banner
function addHeaderBannerSEPro() {
    //const endDate = new Date("2024-05-28T03:00:00Z").getTime();
    //const endDate = new Date("2024-07-05T03:00:00Z").getTime();
    const endDate = new Date("July 5, 2024 03:00:00 EST").getTime();
    var interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = endDate - now;
        // Calculate  hours, minutes, and seconds
        /*const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);*/
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        // Display the time remaining
        var barElement = document.querySelector("#fsb_bar");

        if (barElement && headerBannerText != '') {
            barElement.classList.add('custHeaderBannerSale'); 
            barElement.innerHTML = '<span class="custDaySaleheadingSEPro">' + headerBannerText + '<span class="custTimerSEPro">' + addLeadingZero(days) + ":" + addLeadingZero(hours) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds) + '</span>';
        }

        // If the countdown is over, display a message
        if (timeLeft < 0) {
            clearInterval(interval);
            if (document.querySelector(".custTimerSEPro")) {
                document.querySelector(".custTimerSEPro").innerHTML = 'Expired';
            }
        }
    }, 1000);
}

//Add top header Banner On PDP
function headerBannerOnPDPSEPro() {

    if (arrPDPUrlWithJulySale.includes(currentPath) && strBannerCopy != '') {
        var pdpBannerHtml = '<div class="custmaySaleEventTopBannerSEPro">' +
            '    <div class="custBannerTopHeadingSEPro">' + strBannerCopy + '</div>' +
            '</div>';
        var header = document.querySelector("#section-header");
        if (header && document.querySelectorAll('.custmaySaleEventTopBannerSEPro').length == 0) {
            header.insertAdjacentHTML('afterend', pdpBannerHtml);
        }
    }
}

//Shop now functionality
function shopNowFunctionalitySEPro() {

    const mostPopularProductSection = document.querySelector('.mostPopular_product');
    const bestSellarSection = document.querySelector('#shopify-section-template--16776720416928__featured-collections');
    if (mostPopularProductSection) {
        var offsetTop = mostPopularProductSection.offsetTop;
    } else if (bestSellarSection) {
        var offsetTop = bestSellarSection.offsetTop;
    }
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
 
}

//all click operations
function clickOperationSEPro() {
    const shopNowButton = document.querySelector('.custShopNow a');
    if (shopNowButton) {
        var hostname = window.location.hostname;
        shopNowButton.addEventListener('click', function () {
            
            if (hostname.includes('es')) {
                var homePageUrl = "https://es.myvidaorigins.com/";
            } else {
                var homePageUrl = "https://www.myvidaorigins.com/";
            }
            if (document.querySelectorAll('.template-index').length > 0) {
                shopNowFunctionalitySEPro();
            } else {
                sessionStorage.setItem('redirectedFromSEPro', window.location.href);
                window.location.href = homePageUrl;
            }

        });
    }

    const stickyFooterCloseBtn = document.querySelector('.custCloseIcon');
    if (stickyFooterCloseBtn) {
        stickyFooterCloseBtn.addEventListener('click', function () {
            sessionStorage.setItem('custMemorialFooterClosedSEPro', 'yes');
            document.querySelector('.custMaySaleEventSticklySEPro').style.display = 'none';
        });
    }

}