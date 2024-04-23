window.onload = function() {
    console.log('TRTL Travel099: PDP Brand Redesign (Followup 063)');
    var strURL = window.location.href;
    if(strURL.indexOf('/products/trtl-travel-pillow') > 0 && document.querySelectorAll('form.form.product-form').length > 0){
        addPDPClass();
        // generateShipingWrapperPDPSection();
        trtlePillowPDPRedesign();
        addVideoSlider();
        //windows resize function
        window.addEventListener('resize', function() {
            // updatePDPImgHeight();
        });
    }

};

function addPDPClass(){

    var productContainerSelector = document.querySelector('[id*="__main"] .product-container [id*="product-media-template"]');
    var parentproductContainer = productContainerSelector.closest('[id*="__main"].shopify-section');
    if (parentproductContainer) {
        parentproductContainer?.classList.add('custBrandFocusProductHero');
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
                parentElement?.classList.add('hideContent');
            }
        }
    });

    //add class for span tag
    document.querySelectorAll('.hide-content span').forEach(spanElement => {
        if (spanElement.textContent.includes("Wake up refreshed at your destination.")) {
           spanElement?.classList.add('custSubPara');
         
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

    console.log('strDeliveryMonthShort >>>',strDeliveryMonthShort);
    console.log('intRandomPurchaseCount >>>',intRandomPurchaseCount);
    console.log('strDeliveryDay >>>',strDeliveryDay);
    console.log('strDay >>>',strDay);

    if (strDay !== '' && strDeliveryMonthShort !== '' && intRandomPurchaseCount !== '' && strDeliveryDay !== undefined && strDeliveryDay !== '') {

           var strShippingWraperHtml   = '<div class="custShippingFocusWraper">'+
            '    <div class="inside">'+
            '        <div class="shippingTime">'+
            '            <div class="status available"></div>'+
            '            <div>'+
            '                Ships by <b>' + strDeliveryDay + ', ' + strDeliveryMonthShort + ' ' + strDay + '</b>'+
            '            </div>'+
            '        </div>'+
            '        <div class="purchaseCount"><b>' + intRandomPurchaseCount + '</b> in the last 24 hours</div>'+
            '    </div>'+
            '</div>';
    }
    const productDescriptionElement = document.querySelector('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-description');
    if (productDescriptionElement && !document.querySelector('.custShippingFocusWraper')){
                console.log('Product description');
                productDescriptionElement.insertAdjacentHTML('beforebegin',strShippingWraperHtml);
            }
}

//Page new design

function trtlePillowPDPRedesign(){
    
    //Add Shipping Focus Badge
    const shippingFocusBadgeElement = document.querySelector('body.template-product #MainContent .product-container .product-media[id*="__main"] .swiper.swiper-media');
    if (shippingFocusBadgeElement && !document.querySelector('.custShippingFocusBadge')){
        console.log('html 1');
        shippingFocusBadgeElement.insertAdjacentHTML('afterbegin','<div class="custShippingFocusBadge">2-5 Day Shipping</div>');
    }
    
    //FAQ section 
    const faqSectionHtml ='<div class="custPDPfeatureFocusTabs">'+
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
    if (faqSectionElement && !document.querySelector('.custPDPfeatureFocusTabs')){

        faqSectionElement.insertAdjacentHTML('beforebegin',faqSectionHtml);
    }

    //add PDP brand FocusBody ,PartnersMain ,ReviewMainBoxFocus ,MayAlsoLikeFocus
    const pdpFourSectionHtml = '<div class="custPDPbrandFocusBody">'+
    '    <div class="marquee">'+
    '        <div class="track">'+
    '            <div class="content">'+
    '                <div class="custMarqueeFocus">'+
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
    '    <section class="custUltimateFocusTravel">'+
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
    '<div class="custPartnersMain">'+
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
    '<div class="custReviewMainBoxFocus">'+
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
    '<div class="custMayAlsoLikeFocus">'+
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


    const pdpFourSectionElement = document.querySelector('.custBrandFocusProductHero');
    if (pdpFourSectionElement && !document.querySelector('.custPDPbrandFocusBody') && !document.querySelector('.custPartnersMain') && !document.querySelector('.custReviewMainBoxFocus') && !document.querySelector('.custMayAlsoLikeFocus')){
        console.log('html 2');
        pdpFourSectionElement.insertAdjacentHTML('beforeend',pdpFourSectionHtml);
    }



    //change review section position 
    // const reviewSectionElement = document.querySelector('.section-reviews-slider');
    // const marqueeBodyMainElement = document.querySelector('.custPDPbrandFocusBody .marquee');

    // if (marqueeBodyMainElement && reviewSectionElement) {
    //     console.log('html 3');
    // marqueeBodyMainElement.insertAdjacentElement('afterend', reviewSectionElement);
    // }

    //change position 
    // const custBrandFocusElement = document.querySelector('.custBrandFocusProductHero .product-container .product-description .content > span');
    // const productFormH1Element = document.querySelector('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"].product-form h1');

    // if (custBrandFocusElement && productFormH1Element) {
    //     console.log('html 4');
    //     productFormH1Element.insertAdjacentElement('afterend', custBrandFocusElement);
    // }

    // Select the h1 element containing the specified text
    // const h1Element = document.querySelector('#product-form-template--21678926332097__main h1');
    // if (h1Element && h1Element.textContent.includes('TRTL TRAVEL PILLOW')) {
    //     const custSubParaElement = document.querySelector('.custSubPara');
    //     if (custSubParaElement) {
    //         console.log('html 5');
    //         h1Element.insertAdjacentElement('afterend', custSubParaElement);
    //     }
    // }


}

//add video slider 
function addVideoSlider() {
    console.log('html 6');
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
                slidesPerView: 4,
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
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                },
              });

            clearInterval(intSwiperInterval);
        }

        if (intSwiperCnt === 50) {
            clearInterval(intSwiperInterval);
        }

        setTimeout(() => {
            document.querySelector('.custCollectionSliderTop2').style.display = 'block';
        }, 2500);

    }, 70);

}
