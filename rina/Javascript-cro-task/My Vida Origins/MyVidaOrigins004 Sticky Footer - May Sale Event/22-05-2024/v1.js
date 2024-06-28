window.onload = function () {
  //add custom sticky  banner
  var currentUrl = window.location.href;
  if (!currentUrl.includes('/products/daily-focus')) {
  console.log('MyVidaOrigins004 Sticky Footer - May Sale Event');
  addStickyMaySaleEvent();
  clickOperation();
  }

  addHeaderBanner();
};

//add sticky  of Double Bundle
function addStickyMaySaleEvent() {

  var strmaySaleEventUrl = "https://www.myvidaorigins.com/products/daily-focus";
 
  if (document.querySelectorAll('.custMaySaleEventStickly').length == 0) {
      maySaleEventSticklyHTML = '<div class="custmaySaleEventStickly">' +
          '<a class="bm-container-link" href="' + strmaySaleEventUrl + '"></a>' +
          '    <div class="custStickyDCBundleWrapper">' +
          '        <div class="custMainLeftSide">' +
          '            <div class="custLeftSection">' +
          '                <div class="custBannerHeading"><a href="' + strmaySaleEventUrl + '">Memorial Day Sale!</a></div>' +
          '                <div class="custSubHeading">' +
          '                    <p>Get up to 50% OFF select products.</p>' +
          '                </div>' +
          '            </div>' +
          '        </div>' +
          '        <div class="custCtaWrapper">' +
          '            <p><a href="' + strmaySaleEventUrl + '" class="stretched-link btn btn-light">SHOP' +
          '                    NOW</a>' +
          '            </p>' +
          '        </div>' +
          '    </div>' +
          '</div>';

      document.body.insertAdjacentHTML('beforeend', maySaleEventSticklyHTML);
  }

}


//add header banner
function addHeaderBanner(){

 // Set the end date and time
let endDate = new Date(2024, 4, 24, 10, 0, 0); // Note: The month is 0-indexed, so May is month 4

// Update the countdown every second
setInterval(() => {
// Calculate the time remaining until the end of the sale
let now = new Date();
let timeRemaining = endDate - now;

if (timeRemaining > 0) {
  // Convert the time remaining to hours, minutes, and seconds
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time remaining
  document.querySelectorAll("#fsb_background").forEach(element => {
    element.textContent = `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  });
} else {
  // Display a message when the countdown is over
  document.querySelectorAll("#fsb_background").forEach(element => {
    element.textContent = "The sale has ended.";
  });
}
}, 1000);

}

//all click operations
function clickOperation() {

//  Shop now functionality
const shopNowButton = document.querySelector('.custShopNow a');

shopNowButton.addEventListener('click', function() {
  console.log('click worki')
    // Get the element with the class mostPopular_product
    const mostPopularProductSection = document.querySelector('.mostPopular_product');
    const bestSellarSection = document.querySelector('#shopify-section-template--16776720416928__featured-collections');

    if (mostPopularProductSection) {
      
        window.scrollTo({
            top: mostPopularProductSection.offsetTop,
            behavior: 'smooth'
        });
    } else if (bestSellarSection) {
     
        window.scrollTo({
            top: bestSellarSection.offsetTop,
            behavior: 'smooth'
        });
    }
});



  
}