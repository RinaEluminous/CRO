window.onload = function () {
    newNavTabAdd();
};

function newNavTabAdd() {
 //desktop view
 const accessoriesTabCount = Array.from(document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li'))
 .filter(item => item.textContent.includes('Accessories')).length;
var howItWorkHtml = '<li class="nav-item custHowItWorks">' +
 '    <a href="/pages/how-it-work" class="nav-link ">How it Works</a>' +
 '</li>';

if (accessoriesTabCount > 0 && document.querySelectorAll('.custHowItWorks').length == 0) {
 const lastAccessoriesTab = Array.from(document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li'))
     .filter(item => item.textContent.includes('Accessories')).pop();
 lastAccessoriesTab.insertAdjacentHTML('afterend', howItWorkHtml);
}

//mobile view
const mobNavbarLinks = document.querySelectorAll('.section-header .offcanvas .offcanvas-body .w-100 .row .col-12 a');
var howItWorkTabHtmlMob = '<div class="col-12">' +
 '    <a class="nav-link p-0 fs-3 font-ibm-mono" href="/pages/how-it-work">How it Works</a>' +
 '</div>';

mobNavbarLinks.forEach(listItem => {
 if (listItem.textContent.trim().includes('Accessories')) {
     listItem.parentElement.insertAdjacentHTML('afterend', howItWorkTabHtmlMob);
 }
});
//add class to the existing nav bar 
const navBareaderElement = document.getElementById('shopify-section-sections--22096068477121__static-header-alt-trtl');
if (navBareaderElement) {
 navBareaderElement.classList.add('custDesktopNavBar');
}

//change position

var rowReverseFlexElement = document.querySelector('.flex-row-reverse');
var navPositionStaticElement = document.querySelector('nav.position-static');

if (rowReverseFlexElement && navPositionStaticElement) {
    navPositionStaticElement.insertAdjacentElement('afterend',rowReverseFlexElement );
    rowReverseFlexElement.classList.add('custFlexReverse');
}


}