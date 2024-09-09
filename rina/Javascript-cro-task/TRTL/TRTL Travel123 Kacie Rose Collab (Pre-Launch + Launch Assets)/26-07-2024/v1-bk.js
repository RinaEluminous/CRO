window.onload = function() {
    //condition for home page, collection page
    if (localStorage.getItem('custKacieRoseCollabPreLaunchSticklyFooterClosed') === null && (document.querySelectorAll('.template-index').length > 0 || document.querySelectorAll('.template-collection').length > 0)) {
      addKacieRoseCollabPreLaunchStickyFooter();
      allClickOperation();
  }
};

//add sticky footer of Double Bundle
function addKacieRoseCollabPreLaunchStickyFooter(){
      var strPreLaunchUrl = "https://trtltravel.com/products/kacie-rose-trtl-travel-pillow-cool";
      
      if (document.querySelectorAll('.custKacieRoseCollabPreLaunchSticklyFooter').length == 0) {
          preLaunchSticklyFooterHTML = '<div class="custKacieRoseCollabPreLaunchSticklyFooter">'+
                  '    <div class="custCloseIcon">✕</div><a class="bm-container-link" href="' + strPreLaunchUrl + '"></a>'+
                  '    <div class="custKacieRoseCollabStickyPreLaunchWrapper">'+
                  '        <div class="custMainLeftSide">'+
                  '            <div class="imgWrapper"><a href="' + strPreLaunchUrl + '"><img class="imgDesktop" src="" alt="kacie rose"></a></div>'+
                  '            <div class="custLeftSection">'+
                  '                <div class="custSubHeading">'+
                  '                    <p>LIMITED EDITION COLLABORATION</p>'+
                  '                </div>'+
                  '                <div class="custBannerHeading"><a href="' + strPreLaunchUrl + '">KACIE ROSE'+
                  '<span> X </span>'+
                  'TRTL PILLOW</a></div>'+
                  '            </div>'+
                  '        </div>'+
                  '        <div class="custCtaWrapper">'+
                  '            <p><a href="' + strPreLaunchUrl + '" class="stretched-link btn btn-light">FIND OUT MORE'+
                  '                    </a>'+
                  '            </p>'+
                  '        </div>'+
                  '    </div>'+
                  '</div>';

             
          document.body.insertAdjacentHTML('beforeend', preLaunchSticklyFooterHTML);
      }
       
}

//cross button click functionality and anchor tag click functionality
function allClickOperation(){
  var footerCloseButtons = document.querySelectorAll('.custCloseIcon');
      footerCloseButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          document.querySelector('.custKacieRoseCollabPreLaunchSticklyFooter').style.display = 'none';
          localStorage.setItem('custKacieRoseCollabPreLaunchSticklyFooterClosed', 'yes');

      });
  });

  var footerAnchButtons = document.querySelectorAll('.custKacieRoseCollabPreLaunchSticklyFooter a');
  footerAnchButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        localStorage.setItem('custKacieRoseCollabPreLaunchSticklyFooterClosed', 'yes');
      });
  });
}