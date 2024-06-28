window.onload = function () {
  updateHeroSectionTextV2();
};

function updateHeroSectionTextV2() {
  var checkExperienceExist = document.querySelectorAll(".custBody");
  if (checkExperienceExist.length > 0) {
      
      //hero Heading
      var heroTitleElement = document.querySelector(".custHeroWrapper .custHeroTitle");
      if (heroTitleElement) {
          heroTitleElement.textContent =
              "THE TRAVEL PILLOW THAT ACTUALLY WORKS";
      }

      //hero Sub Heading
      var heroSubTitleElement = document.querySelector(".custHeroWrapper .custHeroSubTitle");
      if (heroSubTitleElement) {
          heroSubTitleElement.textContent =
              "Scientifically proven to help you drift off anywhere, anytime. Effective for all kinds of travel.";
      }

      //reviews copy change
     var reviewElement = document.querySelector('.custHeroReview');
      if (reviewElement) {
          reviewElement.childNodes.forEach(function(node) {
                  if (node.nodeType === Node.TEXT_NODE) {
                          node.textContent = "5000+ 5-STAR REVIEWS";
              }
          });
      }

      //add social proofing headline 
      var socialProofingHtml = '<div class="custSocialProof">' +
          '    <p><span>OVER 1 Million </span>relaxed Traveller\'s can\'t be wrong</p>' +
          '</div>';

      var productWrapperElement = document.querySelector('.custProductsWrapper');
      if (productWrapperElement && document.querySelectorAll('.custSocialProof').length == 0) {
          productWrapperElement.insertAdjacentHTML('afterbegin', socialProofingHtml);
      }

  }

}