// window.onload = function() {
    //condition for home page, collection page
    if (localStorage.getItem('custPreLaunchSticklyFooterClosedV1') === null && (document.querySelectorAll('.template-index').length > 0 || document.querySelectorAll('.template-collection').length > 0)) {
      addStickyFooterPreLaunch();
      clickOperation();
  }
// };

//add sticky footer of Double Bundle
function addStickyFooterPreLaunch(){
      var strPreLaunchUrl = "https://trtltravel.com/products/chris-burkard-trtl-travel-pillow-cool";
      
      if (document.querySelectorAll('.custPreLaunchSticklyFooterV1').length == 0) {
     
          preLaunchSticklyFooterHTML = '<div class="custPreLaunchSticklyFooterV1">'+
                  '    <div class="custCloseIcon">✕</div><a class="bm-container-link" href="' + strPreLaunchUrl + '"></a>'+
                  '    <div class="custStickyPreLaunchWrapperV1">'+
                  '        <div class="custMainLeftSide">'+
                  '            <div class="imgWrapper"><a href="' + strPreLaunchUrl + '"><img class="imgDesktop" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/chris_burkard_img.png" alt="deep-sleep-sticky"></a></div>'+
                  '            <div class="custLeftSection">'+
                  '                <div class="custSubHeading">'+
                  '                    <p>LIMITED EDITION COLLABORATION</p>'+
                  '                </div>'+
                  '                <div class="custBannerHeading"><a href="' + strPreLaunchUrl + '">CHRIS BURKARD'+
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
function clickOperation(){
  var footerCloseButtons = document.querySelectorAll('.custCloseIcon');
      footerCloseButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          document.querySelector('.custPreLaunchSticklyFooterV1').style.display = 'none';
          localStorage.setItem('custPreLaunchSticklyFooterClosedV1', 'yes');

      });
  });

  var footerAnchButtons = document.querySelectorAll('.custPreLaunchSticklyFooterV1 a');
  footerAnchButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        localStorage.setItem('custPreLaunchSticklyFooterClosedV1', 'yes');
      });
  });
}