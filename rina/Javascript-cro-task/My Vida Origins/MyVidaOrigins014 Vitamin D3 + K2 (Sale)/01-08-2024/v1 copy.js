// Declare global variables
var hostname, saleHeadlineText, shopNowText, maySaleEventSticklyHTML, interval, strBannerCopy, headerBannerText;
var arrPDPUrlWithJulySale, currentPath;

window.onload = function () {
    var hostname = window.location.hostname;
    currentPath = window.location.pathname.replace(/\/$/, '');
    arrPDPUrlWithJulySale = [
        "/products/vitamin-d3",
    ];

    if (hostname.includes('es')) {
        saleHeadlineText = "<a>¡DE NUEVO EN EXISTENCIA!</a>Nuestra vitamina D3 está de vuelta con una fórmula actualizada";
        shopNowText = "COMPRA AHORA";
        headerBannerText = 'VITAMINA D3 </span> <span class="custVitaminD3SaveCopy">está de vuelta con una fórmula actualizada </span><span class="custVitaminD3TimerCopy"> Termina en </span>';
        if (arrPDPUrlWithJulySale.includes(currentPath)) {
            strBannerCopy = '<span>DE NUEVO EN EXISTENCIA</span>CON FÓRMULA ACTUALIZADA';
        } else {
            strBannerCopy = '';
        }

    } else {
        saleHeadlineText = "<a>BACK IN STOCK!</a>Our Vitamin D3 is back with an updated formula.";
        shopNowText = "SHOP NOW";
        headerBannerText = 'VITAMIN D3  </span> <span class="custVitaminD3SaveCopy">is back with an updated formula</span> <span class="custVitaminD3TimerCopy"> Ends in </span>';

        if (arrPDPUrlWithJulySale.includes(currentPath)) {
            strBannerCopy = '<span>BACK IN STOCK</span>WITH UPDATED FORMULA';
        } else {
            strBannerCopy = '';
        }
    }

    if (!window.location.pathname.startsWith("/products/") && !sessionStorage.getItem('custVitaminD3FooterClosed')) {
        addVitaminD3StickyFooter();
    }
    addVitaminD3HeaderBanner();
    vitaminD3HeaderBannerOnPDP();
    clickOperationVitaminD3();


};

//add Sticky Footer
function addVitaminD3StickyFooter() {
    if (document.querySelectorAll('.custVitaminD3Stickly').length == 0) {
        maySaleEventSticklyHTML = '<div class="custVitaminD3Stickly">' +
            '    <div class="custVitaminD3CloseIcon">✕</div> ' +
            '    <div class="custStickyVitaminD3Wrapper">' +
            '        <div class="custMainLeftSide">' +
            '<div class="custRightSection">' +
            '    <img src="' +
            'https://www.myvidaorigins.com/cdn/shop/files/60_Capsule_Bottle_-_Vitamin_D3_A_w-shadow_001_600x.png">' +
            '</div>' +
            '            <div class="custLeftSection">' +
            '                <div class="custVitaminD3BannerHeading">' + saleHeadlineText + '</div>' +
            '            </div>' +
            '        </div>' +
            '        <div class="custCtaWrapper custShopNow">' +
            '            <p><a class="stretched-link btn btn-light" href="/products/vitamin-d3">' + shopNowText + '</a>' +
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
function addVitaminD3HeaderBanner() {
    const endDate = new Date("August 5, 2024 03:00:00 EST").getTime();
    var interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        var barElement = document.querySelector("#fsb_bar");

        if (barElement && headerBannerText != '') {
            barElement.classList.add('custVitaminD3HeaderBanner');
            barElement.innerHTML = '<span class="custVitaminD3heading">' + headerBannerText + '<span class="custVitaminD3Timer">' + addLeadingZero(days) + ":" + addLeadingZero(hours) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds) + '</span>';
        }

        if (timeLeft < 0) {
            clearInterval(interval);
            if (document.querySelector(".custVitaminD3Timer")) {
                document.querySelector(".custVitaminD3Timer").style.display = 'none';
                document.querySelector(".custVitaminD3TimerCopy").style.display = 'none';
                document.querySelector(".custVitaminD3Timer").innerHTML = 'Expired';

            }
        }
    }, 1000);
}

//Add top header Banner On PDP
function vitaminD3HeaderBannerOnPDP() {
    if (arrPDPUrlWithJulySale.includes(currentPath) && strBannerCopy != '') {
        var pdpBannerHtml = '<div class="custVitaminD3TopBanner">' +
            '    <div class="custVitaminD3BannerTopHeading">' + strBannerCopy + '</div>' +
            '</div>';
        var header = document.querySelector("#section-header");
        if (header && document.querySelectorAll('.custVitaminD3TopBanner').length == 0) {
            header.insertAdjacentHTML('afterend', pdpBannerHtml);
        }
    }
}

//all click operations
function clickOperationVitaminD3() {
    const stickyFooterCloseBtn = document.querySelector('.custVitaminD3CloseIcon');
    if (stickyFooterCloseBtn) {
        stickyFooterCloseBtn.addEventListener('click', function () {
            sessionStorage.setItem('custVitaminD3FooterClosed', 'yes');
            document.querySelector('.custVitaminD3Stickly').style.display = 'none';
        });
    }
}