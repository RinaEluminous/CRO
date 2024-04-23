window.onload = function() {
    var strURL = window.location.href;
    if(strURL.indexOf('/products/trtl-travel-pillow') > 0 && document.querySelectorAll('form.form.product-form').length > 0){
        addPDPClass();
        generateShipingWrapperPDPSection();
        trtlePillowPDPRedesign();
        addVideoSlider();
        stickyFooter();
        addMainSlider();
         allclicks();
        //windows resize function
        window.addEventListener('resize', function() {
            updatePDPImgHeight();
        });
    }

};

function addPDPClass(){

    var productContainerSelector = document.querySelector('[id*="__main"] .product-container [id*="product-media-template"]');
    var parentproductContainer = productContainerSelector.closest('[id*="__main"].shopify-section');
    if (parentproductContainer) {
        parentproductContainer?.classList.add('custBrandFocusProductHeroV2');
    }
   
    //hide unwanted sections
    document.querySelectorAll('h2').forEach(h2Element => {
        if (h2Element.textContent.includes("Over 30,000 Reviews on Amazon Globally")) {
                const parentElement = h2Element.closest('[id*="shopify-section-template"]');
                if (parentElement) {
                    parentElement?.classList.add('hideContent');
                }
            }
    
        if (h2Element.textContent.includes("What Our Community Thinks")) {
                const parentElement = h2Element.closest('[id*="shopify-section-template"]');
                if (parentElement) {
                    parentElement?.classList.add('hideContent');
                }
        }
        
        if (h2Element.textContent.includes("Testimonials")) {
            const parentElement = h2Element.closest('[id*="shopify-section-template"]');
            if (parentElement) {
                parentElement?.classList.add('hideContent');
            }
        }  
    
        });

        document.querySelectorAll('a').forEach(anchElement => {
            if (anchElement.textContent.includes("Write a Review")) {
                const parentElement = anchElement.closest('[id*="shopify-section-template"]');
                if (parentElement) {
                    parentElement?.classList.add('hideContent');
                }
            }
        });
      //add class for free standard shipping 
      document.querySelectorAll('p').forEach(paraElement => {
        if (paraElement.textContent.includes("Free standard shipping within the U.S.")) {
            const parentElement = paraElement.closest('.col-12');
            if (parentElement) {
                parentElement?.classList.add('custFeatures');
            }
        }
    });

    //add class for span tag
    document.querySelectorAll('.hide-content span').forEach(spanElement => {
        if (spanElement.textContent.includes("Wake up refreshed at your destination.")) {
           spanElement?.classList.add('custSubPara');
         
        }
    });

    //add Id Why it’s special description

    document.querySelectorAll('h6').forEach(h6whySpecialElement => {
        if (h6whySpecialElement.textContent.includes("Why it’s special:")) {
            const parentElement = h6whySpecialElement.closest('.product-description');
            if (parentElement) {
                parentElement.setAttribute('id', 'custWhySpecialContent');
            }
         
        }

     });
    

}

// Function to show Shiping content and purchase count
function generateShipingWrapperPDPSection(){
  
    var arrPurchaseCount = ['185', '215', '165', '193', '178', '208', '226', '234'];
    var intRandomPurchaseCount = arrPurchaseCount[Math.floor(Math.random() * arrPurchaseCount.length)];

    var strCurrentTime = new Date();
    strCurrentTime.setUTCHours(new Date().getUTCHours());
    strCurrentTime.setUTCMinutes(new Date().getUTCMinutes());

    const cstDate = new Date(strCurrentTime.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
    var strCurrentDay = cstDate.getDay();
    var intCurrentHour = cstDate.getHours();
    let strDeliveryDay = '';
    let intDeliveryDayIndex = '';
    let arrDeliveryDays = ['Wed', 'Thu', 'Fri', 'Mon', 'Tue', 'Wed', 'Wed'];
    let arrDeliveryDaysIndex = ['3', '4', '5', '1', '2', '3', '3'];

    var intCurrentIndex = strCurrentDay;
    var intNextDayIndex = (intCurrentIndex + 1) % 7;

    // Check if current hour is greater than or equal to 11
    if (intCurrentHour >= 11) {
        strDeliveryDay = arrDeliveryDays[intNextDayIndex];
        intDeliveryDayIndex = arrDeliveryDaysIndex[intNextDayIndex];
    } else {
        strDeliveryDay = arrDeliveryDays[intCurrentIndex];
        intDeliveryDayIndex = arrDeliveryDaysIndex[intCurrentIndex];
    }

    let dayDifference = intDeliveryDayIndex - strCurrentDay;
    if (dayDifference <= 0) {
        dayDifference += 7;
    }

    let upcomingDate = new Date(strCurrentTime);
    upcomingDate.setDate(upcomingDate.getDate() + dayDifference);
    let upcomingDateNumber = upcomingDate.getDate();
    let strDeliveryMonthShort = upcomingDate.toLocaleString('default', { month: 'short' });

    var strDay = '';

    if (upcomingDateNumber >= 5 && upcomingDateNumber <= 20) {
        strDay = upcomingDateNumber + 'th';
    } else {
        const lastDigit = upcomingDateNumber % 10;
        switch (lastDigit) {
            case 1:
                strDay = upcomingDateNumber + 'st';
                break;
            case 2:
                strDay = upcomingDateNumber + 'nd';
                break;
            case 3:
                strDay = upcomingDateNumber + 'rd';
                break;
            default:
                strDay = upcomingDateNumber + 'th';
                break;
        }
    }

    if (strDay !== '' && strDeliveryMonthShort !== '' && intRandomPurchaseCount !== '' && strDeliveryDay !== undefined && strDeliveryDay !== '') {

        var strShippingWraperHtml = `
        <div class="custShippingFocusWraperV2">
          <div class="inside">
            <div class="shippingTime">
              <div class="status available"></div>
              <div>
                Ships by <b>${strDeliveryDay}, ${strDeliveryMonthShort} ${strDay}</b>
              </div>
            </div>
            <div class="purchaseCount">
              <b>Plus, receive a FREE Pillow Carry Bag ($7.99 value)</b>
            </div>
          </div>
        </div>
      `;
    }

    const productDescriptionElement = document.querySelector('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-description');
    if (productDescriptionElement && !document.querySelector('.custShippingFocusWraperV2')){
         productDescriptionElement.insertAdjacentHTML('beforebegin',strShippingWraperHtml);
    }
}

//Page new design

function trtlePillowPDPRedesign(){
    
    //Add Shipping Focus Badge
    const shippingFocusBadgeElement = document.querySelector('body.template-product #MainContent .product-container .product-media[id*="__main"] .swiper.swiper-media');
    if (shippingFocusBadgeElement && !document.querySelector('.custShippingFocusWraperV2')){
       shippingFocusBadgeElement.insertAdjacentHTML('afterbegin','<div class="custShippingFocusWraperV2">2-5 Day Shipping</div>');
    }
    
    //FAQ section 
    const faqSectionHtml ='<div class="custPDPfeatureFocusTabsV2">'+
    '    <div id="faq" class="tab active">FAQ</div>'+
    '    <div id="whySpecial" class="tab">Why it\'s speacial</div>'+
    '</div>'+
    '<div id="custFAQcontent">'+
    '    <ul class="faqListing">'+
    '        <li>'+
    '            <input type="radio" name="accordion-1" id="cb1" checked>'+
    '            <label for="cb1" class="question">'+
    '                What makes it better than other travel pillows?'+
    '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                    <path d="M20.5 16.25L12 7.75L3.5 16.25" stroke="#1A1A1A" stroke-width="2"></path>'+
    '                </svg>'+
    '            </label>'+
    '            <div class="answer">'+
    '                Unlike traditional travel pillows, Trtl provides complete head support without the bobbing, neck pain, or discomfort often experienced with other options. Its scientifically-proven internal support system ensures better head and neck alignment, promoting a more restful sleep experience. Additionally, it\'s lightweight, compact, and easy to carry - making it the best choice for travelers who want quality rest on the go.'+
    '            </div>'+
    '        </li>'+
    '        <li>'+
    '            <input type="radio" name="accordion-1" id="cb2">'+
    '            <label for="cb2" class="question">'+
    '                How do I wear the Trtl Pillow?'+
    '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                    <path d="M20.5 16.25L12 7.75L3.5 16.25" stroke="#1A1A1A" stroke-width="2"></path>'+
    '                </svg>'+
    '            </label>'+
    '            <div class="answer">'+
    '                Using the Trtl Travel Pillow is incredibly easy. Simply undo the fastening, position the internal support comfortably against your neck, and wrap like a scarf. Alternatively, you can place the Trtl Pillow between your neck and seat for support while reading, watching a movie, or daydreaming out the window.'+
    '            </div>'+
    '        </li>'+
    '        <li>'+
    '            <input type="radio" name="accordion-1" id="cb3">'+
    '            <label for="cb3" class="question">'+
    '                How easy is it to carry and clean?'+
    '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                    <path d="M20.5 16.25L12 7.75L3.5 16.25" stroke="#1A1A1A" stroke-width="2"></path>'+
    '                </svg>'+
    '            </label>'+
    '            <div class="answer">'+
    '                The Trtl Travel Pillow is designed to be super lightweight and easy to carry, pack, or wrap around. It\'s also conveniently machine washable, thanks to its super-soft, hypoallergenic fabric. Unlike regular U-shaped pillows constructed with memory foam, Trtl Pillows are fast-drying, making them easy to keep fresh for your next adventure. Taking up less than half the size and weight of a classic travel pillow, it\'s the ideal choice for easy travelling.'+
    '            </div>'+
    '        </li>'+
    '        <li>'+
    '            <input type="radio" name="accordion-1" id="cb4">'+
    '            <label for="cb4" class="question">'+
    '                Can I return it if I don\'t like it?'+
    '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                    <path d="M20.5 16.25L12 7.75L3.5 16.25" stroke="#1A1A1A" stroke-width="2"></path>'+
    '                </svg>'+
    '            </label>'+
    '            <div class="answer">'+
    '                We are so confident that you\'ll love the Trtl Pillow that we offer a 100-day risk-free trial. Try it out on your travels, and if it doesn\'t meet your expectations, simply return it for a full refund. Your satisfaction is our top priority.'+
    '            </div>'+
    '        </li>'+
    '        <li>'+
    '            <input type="radio" name="accordion-1" id="cb5">'+
    '            <label for="cb5" class="question">'+
    '                Does it come in different sizes?'+
    '                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                    <path d="M20.5 16.25L12 7.75L3.5 16.25" stroke="#1A1A1A" stroke-width="2"></path>'+
    '                </svg>'+
    '            </label>'+
    '            <div class="answer">'+
    '                Its patented design fits any neck shape, jaw, and shoulder, ensuring the most comfortable sleep possible on the move. The Trtl Pillow is scientifically proven to hold any head and neck in a better ergonomic position compared to traditional travel pillows.'+
    '            </div>'+
    '        </li>'+
    '    </ul>'+
    '</div>';

    const faqSectionElement = document.querySelector('body.template-product #MainContent .product-description');
    if (faqSectionElement && !document.querySelector('.custPDPfeatureFocusTabsV2')){

        faqSectionElement.insertAdjacentHTML('beforebegin',faqSectionHtml);
    }

    //add PDP brand FocusBody ,BrandReviewFocus ,PartnersMain ,ReviewMainBoxFocus ,MayAlsoLikeFocus
    const pdpFourSectionHtml = '<div class="custPDPbrandFocusBodyV2">'+
    '    <div class="marquee">'+
    '        <div class="track">'+
    '            <div class="content">'+
    '                <div class="custMarqueeFocusV2">'+
    '                    <div class="custMarqueeWrap">'+
    '                        <span>"Its design is unique to anything else"</span>'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist">'+
    '                    </div>'+
    '                    <div class="custMarqueeWrap">'+
    '                        <span>"I\'ve truly never slept better on a plane"</span>'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed">'+
    '                    </div>'+
    '                    <div class="custMarqueeWrap">'+
    '                        <span>"Its design is unique to anything else"</span>'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist">'+
    '                    </div>'+
    '                    <div class="custMarqueeWrap">'+
    '                        <span>"I\'ve truly never slept better on a plane"</span>'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed">'+
    '                    </div>'+
    '                    <div class="custMarqueeWrap">'+
    '                        <span>"Its design is unique to anything else"</span>'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist">'+
    '                    </div>'+
    '                    <div class="custMarqueeWrap">'+
    '                        <span>"I\'ve truly never slept better on a plane"</span>'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed">'+
    '                    </div>'+
    '                    <div class="custMarqueeWrap">'+
    '                        <span>"Its design is unique to anything else"</span>'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist">'+
    '                    </div>'+
    '                    <div class="custMarqueeWrap">'+
    '                        <span>"I\'ve truly never slept better on a plane"</span>'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed">'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '    <section class="custUltimateFocusTravelV2">'+
    '        <div class="container custContainer1280">'+
    '            <!-- replace this HTML -->'+
    '            <div class="row custMarginBottom80 custUnmatched">'+
    '                <div class="col-lg-7">'+
    '                    <div class="custTextWrapper custUnmatchedDeskImg">'+
    '                        <div class="custText">'+
    '                            <span class="custNumbers">1</span>'+
    '                            <h3 class="custTextTitle">Loop, Wrap, and Nap – It’s That Easy</h3>'+
    '                            <ol>'+
    '                                <li>Undo the hook and loop fastening and extend your Trtl Pillow</li>'+
    '                                <li>Position the internal support comfortably against your neck (to your left, to your right, or under your chin)</li>'+
    '                                <li>Loop, wrap, and nap</li>'+
    '                            </ol>'+
    '                            <p class="custSubTitle">You can even skip all of these steps and place your Trtl Pillow between your neck and chair for support while you read, watch a movie, or daydream out the window.</p>'+
    '                            <div class="custImgBox mob">'+
    '                                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-1.png" alt="">'+
    '                            </div>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="col-lg-5 custUnmatched2Img">'+
    '                    <div class="custImgBox d-flex justify-content-end mob">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-4.png" alt="">'+
    '                    </div>'+
    '                    <div class="custImgBox d-flex justify-content-end desk">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-1.png" alt="">'+
    '                    </div>'+
    '                    <div class="custImgBox mb-0">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-2.png" alt="">'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '            <!-- // replace this HTML -->'+
    '            <div class="row custMarginBottom80 custCompact">'+
    '                <div class="col-lg-3 order-2 order-lg-1 custCompact2Img">'+
    '                    <div class="custImgBox d-flex justify-content-end custPortableDesk1">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-3.png" alt="">'+
    '                    </div>'+
    '                    <div class="custImgBox mb-0 custPortableDesk2">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-2.png" alt="" class="d-none d-lg-block">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-3.png" alt="" class="d-block d-lg-none">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="col-lg-6 order-1 order-lg-2">'+
    '                    <div class="custTextWrapper">'+
    '                        <div class="custText text-left text-sm-center align-items-start align-items-sm-center">'+
    '                            <span class="custNumbers">2</span>'+
    '                            <h3 class="custTextTitle">The Science of Sleep</h3>'+
    '                            <p class="custSubTitle">The secret of our Trtl Travel Pillow is our internal support system, hidden in our super-soft fleece. Strengthened ribs provide scientifically proven head and neck support. Super soft fleece and foam is stretched to create a comforting hammock effect. <br><br>Trtl Pillow is scientifically proven to hold the head and neck in a better ergonomic position than a traditional travel pillow.</p>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="col-lg-3 order-3 order-lg-3">'+
    '                    <div class="custImgBox d-flex justify-content-end custPortableDesk3">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-3.png" alt="" class="d-none d-lg-block">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-2.png" alt="" class="d-block d-lg-none">'+
    '                    </div>'+
    '                    <div class="custImgBox mb-0 custPortableDesk4 d-none d-lg-block">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-4.png" alt="">'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '            <div class="row custFocusMachine">'+
    '                <div class="col-lg-3 order-3 order-lg-1 custFocusMachine2Img">'+
    '                    <div class="custImgBox d-flex justify-content-end custFocusMachineDesk1">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-1.png" alt="Machine Washable & Easy to clean">'+
    '                    </div>'+
    '                    <div class="custImgBox mb-0 custFocusMachineDesk2">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-2.png" alt="Machine Washable & Easy to clean">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="col-lg-3 order-2 order-lg-2">'+
    '                    <div class="custImgBox d-flex justify-content-end custFocusMachineDesk3">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-3.png" alt="Machine Washable & Easy to clean">'+
    '                    </div>'+
    '                    <div class="custImgBox mb-0 custFocusMachineDesk4 d-none d-lg-block">'+
    '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-4.png" alt="Machine Washable & Easy to clean">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="col-lg-6 order-1 order-lg-3">'+
    '                    <div class="custTextWrapper">'+
    '                        <div class="custText text-left text-sm-center align-items-sm-center">'+
    '                            <span class="custNumbers">3</span>'+
    '                            <h3 class="custTextTitle">Easy to carry and <br>machine washable</h3>'+
    '                            <p class="custSubTitle">We understand that travel can get messy, which is why the Trtl Pillow Original is machine washable. Simply remove the inner support and toss it in the washing machine for a fresh and clean pillow, ready for your next adventure.</p>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </section>'+
    '</div>'+
    '<div class="custBrandReviewFocusV2">'+
    '    <div class="container">'+
    '        <div class="swiper custBrandSwiperReview">'+
    '            <div class="swiper-wrapper">'+
    '                <div class="swiper-slide">'+
    '                    <div class="custReviewBox">'+
    '                        <div class="imgCol">'+
    '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic1.png" alt="Briana">'+
    '                        </div>'+
    '                        <div class="reviewContentBox">'+
    '                            <div class="ratings">'+
    '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">'+
    '                            </div>'+
    '                            <div class="reviewTitle">GREAT NECK SUPPORT</div>'+
    '                            <div class="reviewQuote">I\'m terrible at sleeping on airplanes. But, I had a red eye flight and HAD to get some rest. The turtle pillow allowed me to sleep. I\'m a side sleeper and it was great.</div>'+
    '                            <div class="reviewFooter">'+
    '                                <div class="name">– Briana Lawrence P.</div>'+
    '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>'+
    '                            </div>'+
    '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custReviewBox">'+
    '                        <div class="imgCol">'+
    '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic2.png" alt="Gemma">'+
    '                        </div>'+
    '                        <div class="reviewContentBox">'+
    '                            <div class="ratings">'+
    '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">'+
    '                            </div>'+
    '                            <div class="reviewTitle">WORKS LIKE A CHARM</div>'+
    '                            <div class="reviewQuote">I bought this for my trip to Thailand from Sydney. It really helped me get some sleep and I would recommend it. I\'ve tried various pillows in the past and have always been disappointed. It took me a while to buy this as I didn\'t think it would work, but I\'m so happy to be proved wrong!!</div>'+
    '                            <div class="reviewFooter">'+
    '                                <div class="name">– Gemma H.</div>'+
    '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>'+
    '                            </div>'+
    '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custReviewBox">'+
    '                        <div class="imgCol">'+
    '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic3.png" alt="Christine">'+
    '                        </div>'+
    '                        <div class="reviewContentBox">'+
    '                            <div class="ratings">'+
    '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">'+
    '                            </div>'+
    '                            <div class="reviewTitle">Best travel pillow</div>'+
    '                            <div class="reviewQuote">This is by far the best travel pillow I\'ve ever used! The built in support holds my head up in all travel situations so I can get the rest I need without the sore neck. And the wrap around "scarf" provides warmth and coziness for an extra bonus.</div>'+
    '                            <div class="reviewFooter">'+
    '                                <div class="name">– Christine K.</div>'+
    '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>'+
    '                            </div>'+
    '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custReviewBox">'+
    '                        <div class="imgCol">'+
    '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic4.png" alt="Kat">'+
    '                        </div>'+
    '                        <div class="reviewContentBox">'+
    '                            <div class="ratings">'+
    '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">'+
    '                            </div>'+
    '                            <div class="reviewTitle">super comfortable</div>'+
    '                            <div class="reviewQuote">Yet to use this on a long haul flight but have used it on longer car journeys. Super comfortable. So much better than the typical travel pillows. I also love how compact it is.</div>'+
    '                            <div class="reviewFooter">'+
    '                                <div class="name">– Kate M.</div>'+
    '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>'+
    '                            </div>'+
    '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custReviewBox">'+
    '                        <div class="imgCol">'+
    '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic5.png" alt="Elizabeth">'+
    '                        </div>'+
    '                        <div class="reviewContentBox">'+
    '                            <div class="ratings">'+
    '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">'+
    '                            </div>'+
    '                            <div class="reviewTitle">Amazing product!</div>'+
    '                            <div class="reviewQuote">I ordered one for my trip to Europe this summer that involved two overnight flights. The product was so comfortable- I have never slept so well on a flight in coach. I highly recommend!</div>'+
    '                            <div class="reviewFooter">'+
    '                                <div class="name">– Elizabeth D.</div>'+
    '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>'+
    '                            </div>'+
    '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custReviewBox">'+
    '                        <div class="imgCol">'+
    '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic6.png" alt="Tara">'+
    '                        </div>'+
    '                        <div class="reviewContentBox">'+
    '                            <div class="ratings">'+
    '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">'+
    '                            </div>'+
    '                            <div class="reviewTitle">No sore neck!</div>'+
    '                            <div class="reviewQuote">This is a must have on long flights. I always end up with a sore and stiff neck after a long flight but not after using this travel pillow. The design is key to its success.</div>'+
    '                            <div class="reviewFooter">'+
    '                                <div class="name">– Tara C.</div>'+
    '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>'+
    '                            </div>'+
    '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '            <div class="custSliderControls">'+
    '                <div class="swiper-button-next"></div>'+
    '                <div class="swiper-button-prev"></div>'+
    '                <div class="swiper-pagination"></div>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>'+
    '<div class="custPartnersMainV2">'+
    '    <div class="container">'+
    '        <div class="swiper custPartnerslider">'+
    '            <div class="swiper-wrapper">'+
    '                <div class="swiper-slide">'+
    '                    <div class="custPartnerBox">'+
    '                        <p>"Makes the middle seat feel like first class"</p>'+
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_9_100x.png" alt="">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custPartnerBox">'+
    '                        <p>"I\'ve truly never slept better on a plane"</p>'+
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_5_b41e0ca1-e8ee-47e2-9cd2-d49d2ea1c9fa_100x.png" alt="">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custPartnerBox">'+
    '                        <p>"Its design is unique to anything else"</p>'+
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_4_100x.png" alt="">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custPartnerBox">'+
    '                        <p>"Don\'t know how I ever flew without it"</p>'+
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_7_3b26cb49-0e0a-4438-88f6-946b96e95680_100x.png" alt="">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custPartnerBox">'+
    '                        <p>"I never travel without my Trtl Pillow"</p>'+
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_6_c3e8ebd1-bcff-4bae-857f-9be9c4c55eb0_100x.png" alt="">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="swiper-slide">'+
    '                    <div class="custPartnerBox">'+
    '                        <p>"The Trtl Pillow will be your sleep savior"</p>'+
    '                        <img src="https://trtltravel.com/cdn/shop/files/Untitled_design_2_100x.png" alt="">'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '            <div class="custSliderControls">'+
    '                <div class="swiper-pagination"></div>'+
    '            </div>'+
    '        </div>'+
    '        <div class="custGlobalReview">'+
    '            <span class="stars"></span>'+
    '            Over 30,000 reviews on Amazon globally'+
    '        </div>'+
    '    </div>'+
    '</div>'+
    '<div class="custReviewMainBoxFocusV2">'+
    '    <div class="container custContainer1280">'+
    '        <div class="custTestiWrapper">'+
    '            <div class="custTestiBox order-1">'+
    '                <span class="custTestiStarQuote">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">'+
    '                </span>'+
    '                <p>'+
    '                    <b>I actually slept!</b>Comfortable and very useful. Hated those around the neck pillows and the head bobbing and this erased that. Got some actual sleep on a flight for the first time.'+
    '                </p>'+
    '                <p>– Irma V.</p>'+
    '            </div>'+
    '            <div class="custTestiBox order-4">'+
    '                <span class="custTestiStarQuote">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">'+
    '                </span>'+
    '                <p>'+
    '                    <b>Slept on international flights.</b>I usually can\'t sleep for long on international flights, but with this product, ear plugs and an eye mask, I slept for the majority of my flights to and from India (I live in the Midwest).'+
    '                </p>'+
    '                <p>– Madeline</p>'+
    '            </div>'+
    '            <div class="custTestiBox order-2">'+
    '                <span class="custTestiStarQuote">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">'+
    '                </span>'+
    '                <p>'+
    '                    <b>Love this product!</b>This product made sitting upright in a coach airline seat comfortable! Would definitely recommend to anyone who has a plane right and must sit in coach.'+
    '                </p>'+
    '                <p>– JS Newman</p>'+
    '            </div>'+
    '            <div class="custTestiBox order-5">'+
    '                <span class="custTestiStarQuote">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">'+
    '                </span>'+
    '                <p>'+
    '                    <b>Great neck support.</b>I\'m terrible at sleeping on airplanes. But, I had a red eye flight and HAD to get some rest. The turtle pillow allowed me to sleep. I\'m a side sleeper and it was great.'+
    '                </p>'+
    '                <p> – Briana Lawrence P.</p>'+
    '            </div>'+
    '            <div class="custTestiBox order-3">'+
    '                <span class="custTestiStarQuote">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">'+
    '                </span>'+
    '                <p>'+
    '                    <b>Game changer/ Best travel pillow.</b>It is so comfortable and I actually fell asleep in the middle seat of the plane! I also used it on a long car ride and it was awesome to help me feel comfortable with my neck supported. Game changer !!'+
    '                </p>'+
    '                <p>– Linda T.</p>'+
    '            </div>'+
    '            <div class="custTestiBox order-6">'+
    '                <span class="custTestiStarQuote">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">'+
    '                </span>'+
    '                <p>'+
    '                    <b>Works like a charm.</b>I bought this for my trip to Thailand from Sydney. It really helped me get some sleep and I would recommend it. I\'ve tried various pillows in the past and have always been disappointed. It took me a while to buy this as I didn\'t think it would work, but I\'m so happy to be proved wrong!!'+
    '                </p>'+
    '                <p>– Gemma H.</p>'+
    '            </div>'+
    '        </div>'+
    '        <div class="custButtonWrapper">'+
    '            <a class="custBtn" href="https://trtltravel.com/pages/reviews">Show more</a>'+
    '        </div>'+
    '    </div>'+
    '</div>'+
    '<div class="custMayAlsoLikeFocusV2">'+
    '    <div class="container custContainer1280">'+
    '        <h2>You may also like</h2>'+
    '        <div class="row">'+
    '            <div class="col-md-3">'+
    '                <div class="itemBox">'+
    '                    <div class="imgBox">'+
    '                        <span class="flashtag rounded-2 flashtag-discount fade-in d-none">'+
    '                            41% Off!'+
    '                        </span>'+
    '                        <a href="https://trtltravel.com/products/trtl-pillow-plus"><img src="https://trtltravel.com/cdn/shop/products/TPPSLEEPING_d30ff7c0-2d4d-4841-8590-06199b4497e1_620x.jpg" alt="TRTL PILLOW PLUS"></a>'+
    '                    </div>'+
    '                    <div class="itemContent">'+
    '                        <div class="ratings">'+
    '                            <span class="stars grey"></span>'+
    '                            <span class="stars yellow"></span>'+
    '                        </div>'+
    '                        <div class="title">'+
    '                            <a href="https://trtltravel.com/products/trtl-pillow-plus">TRTL PILLOW PLUS</a>'+
    '                        </div>'+
    '                        <div class="price">'+
    '                            <div class="fPrice">'+
    '                                $89.99'+
    '                            </div>'+
    '                        </div>'+
    '                        <div class="available">Available in 2 colours</div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '            <div class="col-md-3">'+
    '                <div class="itemBox">'+
    '                    <div class="imgBox">'+
    '                        <span class="flashtag rounded-2 flashtag-discount fade-in d-none">'+
    '                            41% Off!'+
    '                        </span>'+
    '                        <a href="https://trtltravel.com/products/trtl-pillow-junior"><img src="https://trtltravel.com/cdn/shop/files/2-TrtlPillowJunior_Zebra_Open_Mcopy_620x.png" alt="TRTL PILLOW JUNIOR"></a>'+
    '                    </div>'+
    '                    <div class="itemContent">'+
    '                        <div class="ratings">'+
    '                            <span class="stars grey"></span>'+
    '                            <span class="stars yellow"></span>'+
    '                        </div>'+
    '                        <div class="title">'+
    '                            <a href="https://trtltravel.com/products/trtl-pillow-junior">TRTL PILLOW JUNIOR</a>'+
    '                        </div>'+
    '                        <div class="price">'+
    '                            <div class="fPrice">'+
    '                                $39.99'+
    '                            </div>'+
    '                        </div>'+
    '                        <div class="available">Available in 3 colours</div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '            <div class="col-md-3">'+
    '                <div class="itemBox">'+
    '                    <div class="imgBox">'+
    '                        <span class="flashtag rounded-2 flashtag-discount fade-in">'+
    '                            41% Off!'+
    '                        </span>'+
    '                        <a href="https://trtltravel.com/products/packed-to-perfection-bundle"><img src="https://trtltravel.com/cdn/shop/products/TPO_PP_BREAKDOWN_d5792142-8f2b-4fab-9921-2eac6c548abe_620x.png" alt="Frequent Flyer Bundle"></a>'+
    '                    </div>'+
    '                    <div class="itemContent">'+
    '                        <div class="ratings d-none">'+
    '                            <span class="stars grey"></span>'+
    '                            <span class="stars yellow"></span>'+
    '                        </div>'+
    '                        <div class="title">'+
    '                            <a href="https://trtltravel.com/products/packed-to-perfection-bundle">Frequent Flyer Bundle</a>'+
    '                        </div>'+
    '                        <div class="price">'+
    '                            <div class="cPrice">'+
    '                                $214.97'+
    '                            </div>'+
    '                            <div class="oPrice">'+
    '                                $129.96'+
    '                            </div>'+
    '                            <div class="sPrice">'+
    '                                YOU SAVE $90.01'+
    '                            </div>'+
    '                        </div>'+
    '                        <div class="available d-none">Available in 3 colours</div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '            <div class="col-md-3">'+
    '                <div class="itemBox">'+
    '                    <div class="imgBox">'+
    '                        <span class="flashtag rounded-2 flashtag-discount fade-in">'+
    '                            10% Off!'+
    '                        </span>'+
    '                        <a href="https://trtltravel.com/products/all-aboard-bundle"><img src="https://trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png" alt="ALL ABOARD BUNDLE"></a>'+
    '                    </div>'+
    '                    <div class="itemContent">'+
    '                        <div class="ratings d-none">'+
    '                            <span class="stars grey"></span>'+
    '                            <span class="stars yellow"></span>'+
    '                        </div>'+
    '                        <div class="title">'+
    '                            <a href="https://trtltravel.com/products/all-aboard-bundle">ALL ABOARD BUNDLE</a>'+
    '                        </div>'+
    '                        <div class="price">'+
    '                            <div class="cPrice">'+
    '                                $89.98'+
    '                            </div>'+
    '                            <div class="oPrice">'+
    '                                $80.98'+
    '                            </div>'+
    '                            <div class="sPrice">'+
    '                                YOU SAVE $9.00'+
    '                            </div>'+
    '                        </div>'+
    '                        <div class="available d-none">Available in 3 colours</div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>';


    const pdpFourSectionElement = document.querySelector('.custBrandFocusProductHeroV2');
    if (pdpFourSectionElement && !document.querySelector('.custPDPbrandFocusBodyV2') && !document.querySelector('.custPartnersMainV2') && !document.querySelector('.custReviewMainBoxFocusV2') && !document.querySelector('.custMayAlsoLikeFocusV2')){
        pdpFourSectionElement.insertAdjacentHTML('beforeend',pdpFourSectionHtml);
    }

      //change review section position 
    const reviewSectionElement = document.querySelector('.section-reviews-slider');
    const marqueeBodyMainElement = document.querySelector('.custPDPbrandFocusBodyV2 .marquee');

    if (marqueeBodyMainElement && reviewSectionElement) {
        marqueeBodyMainElement.insertAdjacentElement('afterend', reviewSectionElement);
    }

    //change position 
    const custBrandFocusElement = document.querySelector('.custBrandFocusProductHeroV2 .product-container .product-description .content > span');
    const productFormH1Element = document.querySelector('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"].product-form h1');

    if (custBrandFocusElement && productFormH1Element) {
        productFormH1Element.insertAdjacentElement('afterend', custBrandFocusElement);
    }

    //change the position of custSubPara
    document.querySelectorAll('h1').forEach(productFormH1Element => {
        if (productFormH1Element.textContent.includes("TRTL TRAVEL PILLOW")) {
                const parentElement = productFormH1Element.closest('#product-form-template--21678926332097__main');
                if (parentElement) {
                    const custSubParaElement = document.querySelector('.custSubPara');
                if (custSubParaElement) {
                  productFormH1Element.insertAdjacentElement('afterend', custSubParaElement);
                }
                }
            }

    });

    //change position of shipping wraper and features
    const featuresElement = document.querySelector('.custFeatures');
    const WhySpecialElement = document.querySelector('#custWhySpecialContent');
 
    if (featuresElement && WhySpecialElement) {
        WhySpecialElement.parentNode.insertBefore(featuresElement, WhySpecialElement.nextSibling);
    }
    
    //add span tag after 10,000

    document.querySelectorAll('h3').forEach(h3Element => {
        if (h3Element.textContent.includes("10,000+")) {
                const parentElement = h3Element.closest('.container-fluid .text-center');
                if (parentElement) {
                    parentElement.innerHTML = parentElement.innerHTML.replace(/(10,000\+ 5-STAR REVIEWS)/, '<span>$1</span>');
                }
            }

    });

    //change position of Over 30,000 reviews on Amazon globally
    const partnersMainElement = document.querySelector('.custPartnersMainV2');
    const ultimateFocusTravelElement = document.querySelector('.custUltimateFocusTravelV2');
    if (partnersMainElement && ultimateFocusTravelElement) {
        ultimateFocusTravelElement.parentNode.insertBefore(partnersMainElement, ultimateFocusTravelElement);
    }

    //change position for mobile devices
    if(window.screen.width <= 767){
     
        //add class TRTL TRAVEL PILLOW
        let firstFound = false;
        document.querySelectorAll('h1').forEach(productFormH1Element => {
            if (!firstFound && productFormH1Element.textContent.includes("TRTL TRAVEL PILLOW")) {
                productFormH1Element.classList.add('custProTitle');
                firstFound = true;
            }
        });

        //change position of paragraph of title
        const shippingFocusWraperElement = document.querySelector('.custShippingFocusWraperV2');
        const subParaElement = document.querySelector('.custSubPara');
        if (shippingFocusWraperElement && subParaElement) {
            shippingFocusWraperElement.insertAdjacentElement('afterend', subParaElement);
        }

    }

    //add Great Neck Support Slider 

    if (document.querySelectorAll('.custSwiperSliderJS').length == 0) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js';
        scriptElement.id = 'custSwiperSliderJS';
        document.head.appendChild(scriptElement);
    }

    if (document.querySelectorAll('.custSwiperSliderCSS').length ==0) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.css';
        linkElement.id = 'custSwiperSliderCSS';
        document.head.appendChild(linkElement);
    }

    var intSwiperGreatCnt = 0;
    var intSwiperGreatInterval = setInterval(function() {
        intSwiperGreatCnt += 1;

        if (typeof Swiper !== 'undefined') {
            var swiper = new Swiper(".custBrandSwiperReview", {
                //cssMode: true,
                spaceBetween: 40,
                autoHeight: true,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });
            clearInterval(intSwiperGreatInterval);
        }

        if (intSwiperGreatCnt === 50) {
            clearInterval(intSwiperGreatInterval);
        }
    }, 70);

}

//add video slider 
function addVideoSlider() { 
   
    if (document.querySelectorAll('.custSwiperSliderJS').length == 0) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js';
        scriptElement.id = 'custSwiperSliderJS';
        document.head.appendChild(scriptElement);
    }

    if (document.querySelectorAll('.custSwiperSliderCSS').length ==0) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.css';
        linkElement.id = 'custSwiperSliderCSS';
        document.head.appendChild(linkElement);
    }

    let intSwiperCnt = 0;
    const intSwiperInterval = setInterval(() => {
        intSwiperCnt += 1;

        if (typeof Swiper !== 'undefined') {
            var swiper = new Swiper(".custPartnerslider", {
                cssMode: true,
                slidesPerView: 1,
                spaceBetween: 50,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: ".swiper-pagination",
                },
                mousewheel: true,
                keyboard: true,
                breakpoints: {
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                },
              });

            clearInterval(intSwiperInterval);
        }

        if (intSwiperCnt === 50) {
            clearInterval(intSwiperInterval);
        }

      }, 70);

}

// Function to resize the image height on bullets
function updatePDPImgHeight(){
const imgElement = document.querySelector('.custBrandReviewFocusV2 .custReviewBox .imgCol img');
const imgHeight = imgElement ? parseFloat(window.getComputedStyle(imgElement).height) : 0;
const sliderControlsElement = document.querySelector('.custBrandReviewFocusV2 .custSliderControls');
// Set the height of the .custSliderControls element
if (sliderControlsElement) {
    sliderControlsElement.style.height = imgHeight + 'px';
}

}

function stickyFooter(){
  const regularPriceSpan = document.querySelector('.price > div > span:not(.visually-hidden):not(.text-danger)');
  const regularPriceValue = regularPriceSpan.textContent.trim();
    
    const stickyFooterHtml = '<div class="custStickyProductBuyV2 bg-beige">'+
    '    <div class="container container-lg-fixed">'+
    '        <div class="top">'+
    '            <div class="name">TRTL TRAVEL PILLOW</div>'+
    '            <div class="price">'+ regularPriceValue +'</div>'+
    '        </div>'+
    '        <div class="colorWraper">'+
    '            <div class="colorCat">Pillow colour:</div>'+
    '            <div class="colorName">Grey</div>'+
    '        </div>'+
    '        <div class="btnWraper">'+
    '            <div class="colorPalet">'+
    '                <ul>'+
    '                    <li>'+
    '                        <div class="colorSwatch grey active" data-color="Grey"></div>'+
    '                    </li>'+
    '                    <li>'+
    '                        <div class="colorSwatch black" data-color="Black"></div>'+
    '                    </li>'+
    '                    <li>'+
    '                        <div class="colorSwatch red" data-color="Red"></div>'+
    '                    </li>'+
    '                    <li>'+
    '                        <div class="colorSwatch pink" data-color="Coral"></div>'+
    '                    </li>'+
    '                </ul>'+
    '            </div>'+
    '            <div class="btnWraper">'+
    '                <button type="button" id="custStickyATC" name="add" class="btn btn-secondary position-relative w-100 h-100 text-uppercase font-heading add-to-cart-button" data-disable-on-add="">'+
    '                    <span>Add to cart'+
    '                    </span>'+
    '                    <div class="spinner-overlay d-none d-flex position-absolute top-0 start-0 w-100 h-100 justify-content-center align-items-center">'+
    '                        <div class="spinner-grow spinner-grow-sm d-block" role="status">'+
    '                            <span class="visually-hidden">Loading...</span>'+
    '                        </div>'+
    '                    </div>'+
    '                </button>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>';

  
    const bodyHasTemplateProductClass = document.body.classList.contains('template-product');
    const productStickyBuyElement = document.getElementById('product-sticky-buy');

    if (bodyHasTemplateProductClass && productStickyBuyElement) {
      
        productStickyBuyElement.insertAdjacentHTML('beforeend', stickyFooterHtml);
    }

    // if (document.body.classList.contains('template-product #product-sticky-bu') && !document.querySelector('.custStickyProductBuyV2')) {
    //   document.body.insertAdjacentHTML('beforeend', stickyFooterHtml);
    // }


}

function addMainSlider(){
    var mailSliderHtml ='<div class="custMainProductSliderWrapperV2">'+
    '    <div class="swiper custMainProductSliderCarousel">'+
    '        <div class="custSliderMainFooter">'+
    '            <div class="footerBox">'+
    '                <p class="quote">"Makes the middle seat feel like first class"</p>'+
    '                <p class="cite"><small>–&nbsp;<i>Lonely Planet Magazine</i></small></p>'+
    '            </div>'+
    '        </div>'+
    '        <div class="swiper-wrapper">'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/TPOSLEEPING_69cf0c63-c67d-41db-9fe3-d1acfb07aec6_620x.jpg?v=1675342145" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/free-pillow-img.png" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <button class="playBtn">'+
    '                        <div class="circle">'+
    '                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                                <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>'+
    '                            </svg>'+
    '                        </div>'+
    '                    </button>'+
    '                    <video muted="" loop="" preload="" playsinline=""  class="video" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-2.mp4" preload="auto" loop muted></video>'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/TPO_GREY_LINDA_SLEEP_620x.jpg?v=1677083776" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/TPO_GREY_LINDA_OPEN_400x@2x.jpg?v=1677083776" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <button class="playBtn">'+
    '                        <div class="circle">'+
    '                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                                <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>'+
    '                            </svg>'+
    '                        </div>'+
    '                    </button>'+
    '                    <video muted="" loop="" preload="" playsinline=""  class="video" src="https://cdn.shopify.com/videos/c/vp/bcd5dd8162f042aa81ffeafcd207c51d/bcd5dd8162f042aa81ffeafcd207c51d.HD-1080p-7.2Mbps-12585426.mp4" preload="auto" loop muted></video>'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <button class="playBtn">'+
    '                        <div class="circle">'+
    '                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                                <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>'+
    '                            </svg>'+
    '                        </div>'+
    '                    </button>'+
    '                    <video muted="" loop="" preload="" playsinline=""  class="video" src="https://cdn.shopify.com/videos/c/vp/a364dcb842c0438098881962843c588f/a364dcb842c0438098881962843c588f.HD-1080p-7.2Mbps-12585427.mp4" preload="auto" loop muted></video>'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/DSC03092_c6ff24bf-caed-484c-9265-404bb3796ebe_400x@2x.jpg?v=1677083776" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/DSC03048_62c8caf2-86f1-4627-8a6d-4afef48bba6d_400x@2x.jpg?v=1677083776" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <button class="playBtn">'+
    '                        <div class="circle">'+
    '                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                                <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>'+
    '                            </svg>'+
    '                        </div>'+
    '                    </button>'+
    '                    <video muted="" loop="" preload="" playsinline=""  class="video" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-3.mp4" preload="auto" loop muted></video>'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/TPO_BLACK_LINDA_SLEEP_400x@2x.jpg?v=1677083776" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/TPO_BLACK_LINDA_OPEN_400x@2x.jpg?v=1680094939" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <button class="playBtn">'+
    '                        <div class="circle">'+
    '                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                                <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>'+
    '                            </svg>'+
    '                        </div>'+
    '                    </button>'+
    '                    <video muted="" loop="" preload="" playsinline=""  class="video" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-4.mp4" preload="auto" loop muted></video>'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/DSC03098_2d54c6d0-4834-48a9-bf7a-01816f078bf9_400x@2x.jpg?v=1680094939" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/DSC03029_1c6349c7-237b-4d1e-990b-def1dae9845e_400x@2x.jpg?v=1680094939" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <button class="playBtn">'+
    '                        <div class="circle">'+
    '                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'+
    '                                <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>'+
    '                            </svg>'+
    '                        </div>'+
    '                    </button>'+
    '                    <video muted="" loop="" preload="" playsinline=""  class="video" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-5.mp4" preload="auto" loop muted></video>'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/4_8428e06f-e0fa-4e06-beaf-bdb58c4b5050_620x.png?v=1680101982" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/4_9101e4a7-4789-4673-9133-4b92d4feb0e8_620x.png?v=1680101982" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/4_e764ae1c-21ff-484c-bd0c-9d698cd91b2d_620x.png?v=1680101982" />'+
    '                </div>'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <div class="imageWraper">'+
    '                    <img src="https://trtltravel.com/cdn/shop/products/4_3c72307f-5181-4973-a91b-b9bb78a9e0c4_620x.png?v=1680101982" />'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '        <div class="swiper-button-next"></div>'+
    '        <div class="swiper-button-prev"></div>'+
    '    </div>'+
    '    <div thumbsSlider="" class="swiper custMainProductSliderThumb">'+
    '        <div class="swiper-wrapper">'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/TPOSLEEPING_69cf0c63-c67d-41db-9fe3-d1acfb07aec6_620x.jpg?v=1675342145" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/free-pillow-img.png" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/thum-video-slider-1.png" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/TPO_GREY_LINDA_SLEEP_400x@2x.jpg?v=1677083776" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/TPO_GREY_LINDA_OPEN_400x@2x.jpg?v=1677083776" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/bcd5dd8162f042aa81ffeafcd207c51d.thumbnail.0000000000_150x150_crop_center@2x.jpg?v=1677083512" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/a364dcb842c0438098881962843c588f.thumbnail.0000000000_150x150_crop_center@2x.jpg?v=1677083515" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/DSC03092_c6ff24bf-caed-484c-9265-404bb3796ebe_620x.jpg?v=1677083776" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/DSC03048_62c8caf2-86f1-4627-8a6d-4afef48bba6d_620x.jpg?v=1677083776" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/thum-video-slider-2.png" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/TPO_BLACK_LINDA_SLEEP_620x.jpg?v=1677083776" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/TPO_BLACK_LINDA_OPEN_620x.jpg?v=1680094939" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/thum-video-slider-3.png" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/DSC03098_2d54c6d0-4834-48a9-bf7a-01816f078bf9_400x@2x.jpg?v=1680094939" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/DSC03029_1c6349c7-237b-4d1e-990b-def1dae9845e_400x@2x.jpg?v=1680094939" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/thum-video-slider-4.png" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/4_8428e06f-e0fa-4e06-beaf-bdb58c4b5050_620x.png?v=1680101982" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/4_9101e4a7-4789-4673-9133-4b92d4feb0e8_620x.png?v=1680101982" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/4_e764ae1c-21ff-484c-bd0c-9d698cd91b2d_620x.png?v=1680101982" />'+
    '            </div>'+
    '            <div class="swiper-slide">'+
    '                <img src="https://trtltravel.com/cdn/shop/products/4_3c72307f-5181-4973-a91b-b9bb78a9e0c4_620x.png?v=1680101982" />'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>';

    var mainContentElement =document.querySelector('body.template-product #MainContent [id*="__main"] .container-xxl .col-lg-7');
    if (mainContentElement && !document.querySelector('.custMainProductSliderWrapperV2')) {
        mainContentElement.insertAdjacentHTML('beforeend', mailSliderHtml);
      }

        
    if (document.querySelectorAll('.custSwiperSliderJS').length == 0) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js';
        scriptElement.id = 'custSwiperSliderJS';
        document.head.appendChild(scriptElement);
    }
    if (document.querySelectorAll('.custSwiperVideoSliderJS').length == 0) {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://unpkg.com/video.js/dist/video.min.js';
        scriptElement.id = 'custSwiperVideoSliderJS';
        document.head.appendChild(scriptElement);
    }

    if (document.querySelectorAll('.custSwiperSliderCSS').length ==0) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.css';
        linkElement.id = 'custSwiperSliderCSS';
        document.head.appendChild(linkElement);
    }

    let intSwiperVideoCnt = 0;
    const intSwiperVideoInterval = setInterval(() => {
        intSwiperVideoCnt += 1;

        

        if (typeof Swiper !== 'undefined') {
            var swiper = new Swiper(".custMainProductSliderThumb", {
                spaceBetween: 15,
                slidesPerView: 6,
                autoplay: false,
              });
              var swiper2 = new Swiper(".custMainProductSliderCarousel", {
                spaceBetween: 15,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                thumbs: {
                  swiper: swiper,
                },
              });
        // ???
        
         var videos = document.querySelectorAll(".custMainProductSliderCarousel .video");
    
        videos.forEach((video, index) => {
        video.addEventListener("loadeddata", () => {
            // if (index === 0) {
            video.play();
            // }
        });
        });
 
        swiper.on("slideChangeTransitionStart", () => {
        var currentVideo = swiper.slides[swiper.realIndex].querySelector(".custMainProductSliderCarousel .video");
        var videos = document.querySelectorAll(".custMainProductSliderCarousel .video");
    
        videos.forEach((video) => {
            video.pause();
            video.currentTime = 0;
        });
    
        if (currentVideo) {
            currentVideo.play();
        }
        });

         //video slider end
             clearInterval(intSwiperVideoInterval);
        }

        if (intSwiperVideoCnt === 50) {
            clearInterval(intSwiperVideoInterval);
        }

      }, 70);

   
}

//click functions
function allclicks(){

    //cust Faq and why its special tab clicks
  const tabs = document.querySelectorAll('.custPDPfeatureFocusTabsV2 .tab');
  const faqContent = document.getElementById('custFAQcontent');
  const whySpecialContent = document.getElementById('custWhySpecialContent');

   tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        // Remove the 'active' class from all tabs
        tabs.forEach(function(t) {
            t.classList.remove('active');
        });
          // Add the 'active' class to the clicked tab
        tab?.classList.add('active');

        // Hide all content divs
        faqContent.style.display = 'none';
        whySpecialContent.style.display = 'none';
        
        if (tab.id === 'faq') {
            faqContent.style.display = 'block';
        } else if (tab.id === 'whySpecial') {
            whySpecialContent.style.display = 'block';
        }

    });
});

//color swatches click 
var swatchesButtons = document.querySelectorAll('.custStickyProductBuyV2 .colorSwatch');
swatchesButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var allSwatches = document.querySelectorAll('.custStickyProductBuyV2 .colorSwatch');
        allSwatches.forEach(function(swatch) {
            swatch.classList.remove('active');
        });
        btn.classList.add('active');
        const colorSwatch = document.querySelector('.colorSwatch.active');
        const dataColorValue = colorSwatch.getAttribute('data-color');
        document.querySelector('.colorName').innerHTML = dataColorValue;
        var selectedElement = document.querySelector("#product-sticky-buy select.form-select");
        selectedElement.value = dataColorValue;
        var changeEvent = new Event('change', {
            bubbles: true,
            cancelable: true
        });

        // Dispatch the event on the select element
        selectedElement.dispatchEvent(changeEvent);

    });

});

//add to cart event 

var addToCartButtons = document.querySelectorAll('#custStickyATC');
addToCartButtons.forEach(function(addToCartbtn) {
    addToCartbtn.addEventListener('click', function() {
        var addToCartButton = document.querySelector('#product-sticky-buy button.sticky-add-to-cart');
        var clickEvent = new Event('click', {
            bubbles: true,
            cancelable: true
        });
        
        // Dispatch the event on the select element
        addToCartButton.dispatchEvent(clickEvent);

    });

});
}