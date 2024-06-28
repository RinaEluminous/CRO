window.onload = function () {

    if (!window.location.pathname.startsWith("/products/")) {
      addStickyMaySaleEvent();
    }
    addHeaderBanner();
    headerBannerOnPDP();
    clickOperation();
  
    const redirectedFrom = sessionStorage.getItem('redirectedFrom');
    if (redirectedFrom) {
      sessionStorage.removeItem('redirectedFrom');
      shopNowFunctionality();
    }
  };
  
  //add sticky  of Double Bundle
  function addStickyMaySaleEvent() {
  
     if (document.querySelectorAll('.custMaySaleEventStickly').length == 0) {
      maySaleEventSticklyHTML = '<div class="custmaySaleEventStickly">' +
        '<a class="bm-container-link"></a>' +
        '    <div class="custStickyDCBundleWrapper">' +
        '        <div class="custMainLeftSide">' +
        '            <div class="custLeftSection">' +
        '                <div class="custBannerHeading"><a>Memorial Day Sale!</a>Get up to 50% OFF select products.</div>' +
        '            </div>' +
        '        </div>' +
        '        <div class="custCtaWrapper custShopNow">' +
        '            <p><a class="stretched-link btn btn-light">SHOP' +
        '                    NOW</a>' +
        '            </p>' +
        '        </div>' +
        '    </div>' +
        '</div>';
  
      document.body.insertAdjacentHTML('beforeend', maySaleEventSticklyHTML);
    }
  
  }
  
  //add header banner
  function addHeaderBanner() {
  
      const endDate = new Date("2024-05-28T03:00:00Z").getTime();
      var interval = setInterval(() => {
        const now = new Date().getTime();
                  const timeLeft = endDate - now;
        // Calculate  hours, minutes, and seconds
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
        // Display the time remaining
        var barElement=document.querySelector("#fsb_bar");
        if (barElement) {
          barElement.innerHTML = '<span class="custDaySaleheading">Memorial Day Sale! </span> Save up to 50%! &nbsp;&nbsp;&nbsp;&ndash;&nbsp;&nbsp;&nbsp; Ends in <span class="custTimer">' + hours + ':' + minutes + ':' + seconds + '</span>';
        }
  
        // If the countdown is over, display a message
        if (timeLeft < 0) {
          clearInterval(interval);
          document.querySelector(".custTimer").innerHTML = 'Expired';
      }
    }, 1000);  
  }
  
  //Add 50% Banner On PDP
  function headerBannerOnPDP(){
  
    const validPDPUrls = [
      "/products/lymphatic",
      "/products/childrens-parasite",
  ];
  
  const currentPath = window.location.pathname.replace(/\/$/, ''); 
  
  var pdpBannerHtml ='<div class="custmaySaleEventTopBanner">'+
    '    <div class="custBannerTopHeading">'+
    '        <a href="">'+
    '            LIMITED TIME ONLY</a>Save up to 50% on this product'+
    '    </div>'+
    '</div>';
  
  if (validPDPUrls.includes(currentPath)) {
  var header = document.querySelector("#section-header");
    if (header
    && document.querySelectorAll('.custmaySaleEventTopBanner').length == 0) {
      header.insertAdjacentHTML('afterend',pdpBannerHtml);
    }
  } 
  
  }
  
  //Add Banner On PDP
  function headerBannerOnPDP(){
  
    const validPDPUrls = [
      "/products/adult-parasite",
      "/products/wild-oregano-oil",
      "/products/daily-nourish",
      "/products/daily-protein",
      "/products/liver-detox",
      "/products/organic-sulfur-granules",
      "/products/diabetic-support"
  ];
  
  const currentPath = window.location.pathname.replace(/\/$/, ''); 
  
  var pdpBannerHtml ='<div class="custmaySaleEventTopBanner">'+
    '    <div class="custBannerTopHeading">'+
    '        <a href="">'+
    '            LIMITED TIME ONLY</a>Memorial Day Sale!'+
    '    </div>'+
    '</div>';
  
  if (validPDPUrls.includes(currentPath)) {
  var header = document.querySelector("#section-header");
    if (header
    && document.querySelectorAll('.custmaySaleEventTopBanner').length == 0) {
      header.insertAdjacentHTML('afterend',pdpBannerHtml);
    }
  } 
  
  }
  
  
  //Shop now functionality
  function shopNowFunctionality(){
    const mostPopularProductSection = document.querySelector('.mostPopular_product');
    const bestSellarSection = document.querySelector('#shopify-section-template--16776720416928__featured-collections');
    if (mostPopularProductSection) {
      var offsetTop = mostPopularProductSection.offsetTop;
    } else if (bestSellarSection) {
      var offsetTop = bestSellarSection.offsetTop;
    }
    window.scrollTo({ 
        top: offsetTop,
        behavior: 'smooth' 
    });
  
  }
  
  //all click operations
  function clickOperation() {
  const shopNowButton = document.querySelector('.custShopNow a');
  shopNowButton.addEventListener('click', function() {
    var homePageUrl = "https://www.myvidaorigins.com/";
    if(document.querySelectorAll('.template-index').length > 0){
      shopNowFunctionality();
    }else{
      sessionStorage.setItem('redirectedFrom', window.location.href);
      window.location.href = homePageUrl;
    }
  
  });
  
  }