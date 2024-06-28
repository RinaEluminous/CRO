window.onload = function () {
    //target test only on gold era page
    if (window.location.pathname === "/gold-ira") {
        console.log("gold-ira page.");
    addSocialProof();
    }
};

function addSocialProof() {

//replace date with new date June 30th
  var pElements = document.querySelectorAll('#hs_cos_wrapper_module_168117188280316_ p');
  pElements.forEach(function(p) {
   if (p.textContent.includes("Offer valid until April 30th, 2024.")) {
    p.classList.add('custOfferDate');
    }
});

var regex = /\b(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}(st|nd|rd|th), \d{4}\b/;

var offerDateElement = document.querySelector('.custOfferDate');
if(offerDateElement){
    offerDateElement.innerHTML = offerDateElement.innerHTML.replace(regex, "June 30th, 2024");
}

//change position of logos

var hsCosWrapperWidgetElement = document.querySelector('#hs_cos_wrapper_widget_1668141656049');
var offerDateElement =document.querySelector('.custOfferDate');
if(hsCosWrapperWidgetElement && offerDateElement){
  document.querySelector('.custOfferDate').insertAdjacentElement('afterend', hsCosWrapperWidgetElement);
}

//display none of 5th logo PMA

var fifthLogo = document.querySelector("#hs_cos_wrapper_widget_1668141656049 .logo-cols:nth-child(5)");
fifthLogo.style.display = "none";


}