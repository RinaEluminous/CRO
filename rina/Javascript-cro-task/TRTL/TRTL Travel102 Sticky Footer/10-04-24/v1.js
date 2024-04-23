window.onload = function() {
    //add custom sticky footer banner
    var currentUrl = window.location.href;
    //condition for home page, collection page, and reviews page 
    if (localStorage.getItem('custDCBundleSticklyFooterClosed') === null && (document.querySelectorAll('.template-index').length > 0 || document.querySelectorAll('.template-collection').length > 0 || currentUrl.includes('reviews') > 0)) {
      addStickyFooterDoubleBundle();
      clickOperation();
  }

};

//add sticky footer of Double Bundle
function addStickyFooterDoubleBundle(){
      var strDoubleBundleUrl = "https://trtltravel.com/products/double-comfort-bundle-free-gift";
      
      if (document.querySelectorAll('.custDCBundleSticklyFooter').length == 0) {
     
          DCBundleSticklyFooterHTML = '<div class="custDCBundleSticklyFooter">'+
                  '    <div class="custTrendingBadge">'+
                  '        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/trending-icon.svg"> Trending'+
                  '    </div>'+
                  '    <div class="custCloseIcon">✕</div><a class="bm-container-link" href="' + strDoubleBundleUrl + '"></a>'+
                  '    <div class="custStickyDCBundleWrapper">'+
                  '        <div class="custMainLeftSide">'+
                  '            <div class="imgWrapper"><a href="' + strDoubleBundleUrl + '"><img class="imgDesktop" src="https://trtltravel.com/cdn/shop/files/TPO_Grey_TPO_Grey_Passportcover_400x400_crop_center.jpg" alt="deep-sleep-sticky"></a></div>'+
                  '            <div class="custLeftSection">'+
                  '                <div class="custBannerHeading"><a href="' + strDoubleBundleUrl + '">DOUBLE'+
                  '                        COMFORT BUNDLE'+
                  '                        + FREE GIFT</a></div>'+
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
function clickOperation(){
  var footerCloseButtons = document.querySelectorAll('.custCloseIcon');
      footerCloseButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          document.querySelector('.custDCBundleSticklyFooter').style.display = 'none';
          localStorage.setItem('custDCBundleSticklyFooterClosed', 'yes');

      });
  });

  var footerAnchButtons = document.querySelectorAll('.custDCBundleSticklyFooter a');
  footerAnchButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          document.querySelector('.custDCBundleSticklyFooter').style.display = 'none';
          localStorage.setItem('custDCBundleSticklyFooterClosed', 'yes');

      });
  });
}