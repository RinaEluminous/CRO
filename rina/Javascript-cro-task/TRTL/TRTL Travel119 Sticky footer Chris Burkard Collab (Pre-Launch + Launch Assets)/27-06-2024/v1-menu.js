window.onload = function() {
    updateBundleNavImg();
};

function updateBundleNavImg(){

    const desktopNavbarLinks = document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li a');
    desktopNavbarLinks.forEach(listItem => {

        console.log('imgtag>>',listItem.parentNode.querySelectorAll('picture img').length);
      
    if (listItem.textContent.trim() === 'Pillows') {

        //highlight the best seller tag products in pillow tabs
        const flashtags = listItem.parentNode.querySelectorAll('[data-tag="Flashtag: BEST SELLER"]');
        if (flashtags.length > 0) {
            flashtags.forEach(flashtag => {
                const tileLineItemMenuParent = flashtag.closest('.tile-line-item-menu');
                if (tileLineItemMenuParent) {
                    tileLineItemMenuParent.classList.add('custBestSellerHighlightV1');
                }
            });
        }
    }


});

//desktop view

var deskProductMenu = document.querySelectorAll('.tile-product-menu');

deskProductMenu.forEach(function(element) {
  //update double bundle image at desktop
    var textElement = element.querySelector('p');
    if (textElement && textElement.textContent.includes('Includes Free Gift')) {
        var imgElement = element.querySelector('img');
        if (imgElement) {
            imgElement.setAttribute('data-src', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_bundle_img.png');
            imgElement.setAttribute('data-srcset', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_bundle_img.png');
            imgElement.setAttribute('src', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_bundle_img.png');
            imgElement.setAttribute('srcset', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_bundle_img.png');
            console.log('Updated img element:', imgElement);
        }
    }

    // Add the "Limited Edition collaboration" text
    var limitedEditionBadges = element.querySelectorAll('.product-flashtags-container');
    limitedEditionBadges.forEach(function (badge) {
        badge.insertAdjacentHTML('afterbegin', '<div class="custLimitedEditionText">Limited Edition collaboration</div>');
    });

     // Add class "DOUBLE COMFORT BUNDLE" for this
     var headingElement = element.querySelector('h5');
     if (headingElement && headingElement.textContent.includes('DOUBLE COMFORT BUNDLE')) {
               headingElement.classList.add('custDCBDeskText');
     }
 
       // Add class "Includes Free Gift" for this
       var headingElement = element.querySelector('p');
       if (headingElement && headingElement.textContent.includes('Includes Free Gift')) {
                 headingElement.classList.add('custFreeGiftDeskText');
       }
    
    
});

//Mobile view

const mobileNavbarLinksElement = document.querySelectorAll('.tab-pane');

mobileNavbarLinksElement.forEach(function(listItem) {
    console.log('listItem>>',listItem);
    const paragraph = listItem.querySelector('p');
    if (paragraph && paragraph.textContent.includes('Includes Free Gift')) {
      // Update img attributes
      console.log('>>>>>>>icludes');
      const imgElement = listItem.querySelector('img');
      if (imgElement) {
        imgElement.setAttribute('data-src', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_bundle_img.png');
        imgElement.setAttribute('data-srcset', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_bundle_img.png');
        imgElement.setAttribute('src', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_bundle_img.png');
        imgElement.setAttribute('srcset', 'https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/burkard_lp_bundle_img.png');
        console.log('Updated Mobile img element:', imgElement);
    
      }

      // Add class to h5 tag
      const h5 = listItem.querySelector('h5');
      if (h5 && h5.textContent.includes('DOUBLE COMFORT BUNDLE')) {
        h5.classList.add('custDCBMobText'); 
      }

      
     // Add class "Includes Free Gift" for this
     var headingElement = listItem.querySelector('p');
     if (headingElement && headingElement.textContent.includes('Includes Free Gift')) {
            headingElement.classList.add('custFreeGiftMobText');
        }
    }
  });


}

