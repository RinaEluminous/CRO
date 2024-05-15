window.onload = function() {
    //add custom sticky footer banner
    var currentUrl = window.location.href;
    //condition for home page, collection page, and reviews page 
    if (localStorage.getItem('custDCBundleSticklyFooterClosedV1') === null && (document.querySelectorAll('.template-index').length > 0 || document.querySelectorAll('.template-collection').length > 0 || currentUrl.includes('reviews') > 0)) {
      addStickyFooterDoubleBundleV1();
      clickOperationV1();
  }

};

//add sticky footer of Double Bundle
function addStickyFooterDoubleBundleV1(){
      var strDoubleBundleUrl = "https://trtltravel.com/products/double-comfort-bundle-free-gift";
      
      if (document.querySelectorAll('.custDCBundleSticklyFooterV1').length == 0) {
     
          DCBundleSticklyFooterHTML = '<div class="custDCBundleSticklyFooterV1">'+
                  '    <div class="custTrendingBadge">'+
                  '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/trending-icon.svg"> Trending'+
                  '    </div>'+
                  '    <div class="custCloseIcon">✕</div><a class="bm-container-link" href="' + strDoubleBundleUrl + '"></a>'+
                  '    <div class="custStickyDCBundleWrapper">'+
                  '        <div class="custMainLeftSide">'+
                  '            <div class="imgWrapper"><a href="' + strDoubleBundleUrl + '"><img class="imgDesktop" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/brandFocuStickyImg.png" alt="deep-sleep-sticky"><img class="imgMobile" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/brandFocuStickyImg-mob.png" alt="deep-sleep-sticky"></a></div>'+
                  '            <div class="custLeftSection">'+
                  '                <div class="custBannerHeading"><a href="' + strDoubleBundleUrl + '"><span>25% Off + Free Gift</span> with Double Comfort Bundle</a></div>'+
                  '                <div class="custSubHeading">'+
                  '                    <p>Experience relaxation wherever you go. Keep one, gift one.</p>'+
                  '                </div>'+
                  '            </div>'+
                  '        </div>'+
                  '        <div class="custCtaWrapper">'+
                  '            <p><a href="' + strDoubleBundleUrl + '" class="stretched-link btn btn-light">SHOP'+
                  '                    NOW</a>'+
                  '            </p>'+
                  '        </div>'+
                  '    </div>'+
                  '</div>';

             
          document.body.insertAdjacentHTML('beforeend', DCBundleSticklyFooterHTML);
      }
       
}

//cross button click functionality and anchor tag click functionality
function clickOperationV1(){
  var footerCloseButtons = document.querySelectorAll('.custCloseIcon');
      footerCloseButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          document.querySelector('.custDCBundleSticklyFooterV1').style.display = 'none';
          localStorage.setItem('custDCBundleSticklyFooterClosedV1', 'yes');

      });
  });

  var footerAnchButtons = document.querySelectorAll('.custDCBundleSticklyFooterV1 a');
  footerAnchButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          document.querySelector('.custDCBundleSticklyFooterV1').style.display = 'none';
          localStorage.setItem('custDCBundleSticklyFooterClosedV1', 'yes');

      });
  });
}