window.onload = function () {
    newNavTabAddV2();
};

function newNavTabAddV2() {
 //desktop view
 const accessoriesTabCount = Array.from(document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li'))
 .filter(item => item.textContent.includes('Accessories')).length;
var howItWorkHtml = '<li class="nav-item custHowItWorksV2">' +
 '    <a href="/pages/after-care" class="nav-link ">How it Works</a>' +
 '</li>';

if (accessoriesTabCount > 0 && document.querySelectorAll('.custHowItWorksV2').length == 0) {
 const lastAccessoriesTab = Array.from(document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li'))
     .filter(item => item.textContent.includes('Accessories')).pop();
 lastAccessoriesTab.insertAdjacentHTML('afterend', howItWorkHtml);
}

//mobile view
const mobNavbarLinks = document.querySelectorAll('.section-header .offcanvas .offcanvas-body .w-100 .row .col-12 a');
var howItWorkTabHtmlMob = '<div class="col-12">' +
 '    <a class="nav-link p-0 fs-3 font-ibm-mono" href="/pages/after-care">How it Works</a>' +
 '</div>';

mobNavbarLinks.forEach(listItem => {
 if (listItem.textContent.trim().includes('Accessories')) {
     listItem.parentElement.insertAdjacentHTML('afterend', howItWorkTabHtmlMob);
 }
});

//add class to the existing nav bar 
const navBareaderElement = document.querySelector('.shopify-section-group-header-group.position-sticky');
if (navBareaderElement) {
 navBareaderElement.classList.add('custDesktopNavBarV2');
}

//change position

var rowReverseFlexElement = document.querySelector('.flex-row-reverse');
var navPositionStaticElement = document.querySelector('nav.position-static');

if (rowReverseFlexElement && navPositionStaticElement) {
    navPositionStaticElement.insertAdjacentElement('afterend',rowReverseFlexElement );
    rowReverseFlexElement.classList.add('custFlexReverseV2');
}


}