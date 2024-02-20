var strURL = window.location.href;

var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined' && strURL.indexOf('/products/trtl-travel-pillow') > 0 && jQuery('form.form.product-form').length > 0) {
    	
	    generateShipingWrapperSection();
	    trtlePillowPdpNewDesign();
	    addVideoSlider();
	    updateImgHeight();

	    jQuery(window).resize(function() {
	        updateImgHeight();
	    });
    	
        clearInterval(waitForJquery);  
    }
}, 50);

// Function to change the structure according to the design
function trtlePillowPdpNewDesign() {
    //custShippingSwiperBadge section 
    if (jQuery('body.template-product #MainContent .product-container .product-media[id*="__main"] .swiper.swiper-media').length > 0 && jQuery('.custShippingSwiperBadge').length == 0) {
        jQuery('<div class="custShippingSwiperBadge">2-5 Day Shipping</div>').prependTo('body.template-product #MainContent .product-container .product-media[id*="__main"] .swiper.swiper-media');

    }

    //custScientficallyProvenMain Section 
    var strScientficallyProvenMainHtml = '<div class="custScientficallyProvenMain">' +
        '    <div class="inside">' +
        '        <div class="imgBox">' +
        '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/scientifically_proven_img.png" alt="">' +
        '        </div>' +
        '        <div class="content">' +
        '            <h2>' +
        '                <div class="icon">' +
        '                    <img src="https://trtltravel.com/cdn/shop/files/Scientifically-proven_5d4cc8f1-03ae-4462-9799-ec544f2e4d83_35x.png?v=1657273799" alt="">' +
        '                </div>' +
        '                Scientifically Proven' +
        '            </h2>' +
        '            <p>Patented design fits any neck shape, jaw, and shoulder. All this combines to give you the most comfortable sleep possible on the move.</p>' +
        '            <p>Trtl Pillow is scientifically proven to hold the head and neck in a better ergonomic position than a traditional travel pillow.</p>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    //desktop and mobile condition 
    if (jQuery(window).width() <= 991) {
        if (jQuery('body.template-product #MainContent .product-description').length > 0 && jQuery('.custScientficallyProvenMain').length == 0) {
            jQuery(strScientficallyProvenMainHtml).insertAfter('body.template-product #MainContent .product-description');
        }
    } else {
        if (jQuery('body.template-product #MainContent [id*="__main"] .product-container .product-media[id*="product-media-template"]').length > 0 && jQuery('.custScientficallyProvenMain').length == 0) {
            jQuery(strScientficallyProvenMainHtml).appendTo('body.template-product #MainContent [id*="__main"] .product-container .product-media[id*="product-media-template"]');
        }
    }

    //custSeeAction
    var strSeeActionHtml = '<div class="custSeeAction">' +
        '    <div class="inside">' +
        '        <h2>SEE IT IN ACTION</h2>' +
        '        <div class="custReviewThumbnails">' +
        '            <div class="profilePic">' +
        '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic1.png" alt="">' +
        '            </div>' +
        '            <div class="profilePic">' +
        '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic2.png" alt="">' +
        '            </div>' +
        '            <div class="profilePic">' +
        '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic3.png" alt="">' +
        '            </div>' +
        '            <div class="profilePic">' +
        '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic4.png" alt="">' +
        '            </div>' +
        '            <div class="profilePic">' +
        '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic5.png" alt="">' +
        '            </div>' +
        '            <div class="profilePic">' +
        '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic6.png" alt="">' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    if (jQuery('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-descriptio   ').length > 0 && jQuery('.custSeeAction').length == 0) {
        jQuery(strSeeActionHtml).insertBefore('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-description');

    }

    //after hero section html
    var strAfterHeroHtml = '<div class="custPDPbrandBodymain">' +
        '    <div class="marquee">' +
        '        <div class="track">' +
        '            <div class="content">' +
        '                <div class="custMarqueeWrapper">' +
        '                    <div class="custMarqueeWrap">' +
        '                        <span>"Its design is unique to anything else"</span>' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist">' +
        '                    </div>' +
        '                    <div class="custMarqueeWrap">' +
        '                        <span>"I\'ve truly never slept better on a plane"</span>' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed">' +
        '                    </div>' +
        '                    <div class="custMarqueeWrap">' +
        '                        <span>"Its design is unique to anything else"</span>' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist">' +
        '                    </div>' +
        '                    <div class="custMarqueeWrap">' +
        '                        <span>"I\'ve truly never slept better on a plane"</span>' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed">' +
        '                    </div>' +
        '                    <div class="custMarqueeWrap">' +
        '                        <span>"Its design is unique to anything else"</span>' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist">' +
        '                    </div>' +
        '                    <div class="custMarqueeWrap">' +
        '                        <span>"I\'ve truly never slept better on a plane"</span>' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed">' +
        '                    </div>' +
        '                    <div class="custMarqueeWrap">' +
        '                        <span>"Its design is unique to anything else"</span>' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/the-stratergist.png" alt="the stratergist">' +
        '                    </div>' +
        '                    <div class="custMarqueeWrap">' +
        '                        <span>"I\'ve truly never slept better on a plane"</span>' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/buzzfeed.png" alt="buzzfeed">' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <section class="custUltimateTravel">' +
        '        <div class="container custContainer1280">' +
        '            <!-- replace this HTML -->' +
        '            <div class="row custMarginBottom80 custUnmatched">' +
        '                <div class="col-lg-7">' +
        '                    <div class="custTextWrapper custUnmatchedDeskImg">' +
        '                        <div class="custText">' +
        '                            <span class="custNumbers">1</span>' +
        '                            <h3 class="custTextTitle">Loop, Wrap, and Nap – It’s That Easy</h3>' +
        '                            <ol>' +
        '                                <li>Undo the hook and loop fastening and extend your Trtl Pillow</li>' +
        '                                <li>Position the internal support comfortably against your neck (to your left, to your right, or under your chin)</li>' +
        '                                <li>Loop, wrap, and nap</li>' +
        '                            </ol>' +
        '                            <p class="custSubTitle">You can even skip all of these steps and place your Trtl Pillow between your neck and chair for support while you read, watch a movie, or daydream out the window.</p>' +
        '                            <div class="custImgBox mob">' +
        '                                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-1.png" alt="">' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="col-lg-5 custUnmatched2Img">' +
        '                    <div class="custImgBox d-flex justify-content-end mob">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-4.png" alt="">' +
        '                    </div>' +
        '                    <div class="custImgBox d-flex justify-content-end desk">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-1.png" alt="">' +
        '                    </div>' +
        '                    <div class="custImgBox mb-0">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-2.png" alt="">' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <!-- // replace this HTML -->' +
        '            <div class="row custMarginBottom80 custCompact">' +
        '                <div class="col-lg-3 order-2 order-lg-1 custCompact2Img">' +
        '                    <div class="custImgBox d-flex justify-content-end custPortableDesk1">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/063-product-img-3.png" alt="">' +
        '                    </div>' +
        '                    <div class="custImgBox mb-0 custPortableDesk2">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-2.png" alt="" class="d-none d-lg-block">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-3.png" alt="" class="d-block d-lg-none">' +
        '                    </div>' +
        '                </div>' +
        '                <div class="col-lg-6 order-1 order-lg-2">' +
        '                    <div class="custTextWrapper">' +
        '                        <div class="custText text-left text-sm-center align-items-start align-items-sm-center">' +
        '                            <span class="custNumbers">2</span>' +
        '                            <h3 class="custTextTitle">The Science of Sleep</h3>' +
        '                            <p class="custSubTitle">The secret of our Trtl Travel Pillow is our internal support system, hidden in our super-soft fleece. Strengthened ribs provide scientifically proven head and neck support. Super soft fleece and foam is stretched to create a comforting hammock effect. <br><br>Trtl Pillow is scientifically proven to hold the head and neck in a better ergonomic position than a traditional travel pillow.</p>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="col-lg-3 order-3 order-lg-3">' +
        '                    <div class="custImgBox d-flex justify-content-end custPortableDesk3">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-3.png" alt="" class="d-none d-lg-block">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-2.png" alt="" class="d-block d-lg-none">' +
        '                    </div>' +
        '                    <div class="custImgBox mb-0 custPortableDesk4 d-none d-lg-block">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/compact-&-portable-desk-4.png" alt="">' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="row custMachine">' +
        '                <div class="col-lg-3 order-3 order-lg-1 custMachine2Img">' +
        '                    <div class="custImgBox d-flex justify-content-end custMachineDesk1">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-1.png" alt="Machine Washable & Easy to clean">' +
        '                    </div>' +
        '                    <div class="custImgBox mb-0 custMachineDesk2">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-2.png" alt="Machine Washable & Easy to clean">' +
        '                    </div>' +
        '                </div>' +
        '                <div class="col-lg-3 order-2 order-lg-2">' +
        '                    <div class="custImgBox d-flex justify-content-end custMachineDesk3">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-3.png" alt="Machine Washable & Easy to clean">' +
        '                    </div>' +
        '                    <div class="custImgBox mb-0 custMachineDesk4 d-none d-lg-block">' +
        '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-4.png" alt="Machine Washable & Easy to clean">' +
        '                    </div>' +
        '                </div>' +
        '                <div class="col-lg-6 order-1 order-lg-3">' +
        '                    <div class="custTextWrapper">' +
        '                        <div class="custText text-left text-sm-center align-items-sm-center">' +
        '                            <span class="custNumbers">3</span>' +
        '                            <h3 class="custTextTitle">Easy to carry and <br>machine washable</h3>' +
        '                            <p class="custSubTitle">We understand that travel can get messy, which is why the Trtl Pillow Original is machine washable. Simply remove the inner support and toss it in the washing machine for a fresh and clean pillow, ready for your next adventure.</p>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </section>' +
        '</div>' +
        '<div class="custBrandReviewMain">' +
        '    <div class="container">' +
        '        <div class="swiper custBrandSwiperReview">' +
        '            <div class="swiper-wrapper">' +
        '                <div class="swiper-slide">' +
        '                    <div class="custReviewBox">' +
        '                        <div class="imgCol">' +
        '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic1.png" alt="Briana">' +
        '                        </div>' +
        '                        <div class="reviewContentBox">' +
        '                            <div class="ratings">' +
        '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">' +
        '                            </div>' +
        '                            <div class="reviewTitle">GREAT NECK SUPPORT</div>' +
        '                            <div class="reviewQuote">I\'m terrible at sleeping on airplanes. But, I had a red eye flight and HAD to get some rest. The turtle pillow allowed me to sleep. I\'m a side sleeper and it was great.</div>' +
        '                            <div class="reviewFooter">' +
        '                                <div class="name">– Briana Lawrence P.</div>' +
        '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="swiper-slide">' +
        '                    <div class="custReviewBox">' +
        '                        <div class="imgCol">' +
        '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic2.png" alt="Gemma">' +
        '                        </div>' +
        '                        <div class="reviewContentBox">' +
        '                            <div class="ratings">' +
        '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">' +
        '                            </div>' +
        '                            <div class="reviewTitle">WORKS LIKE A CHARM</div>' +
        '                            <div class="reviewQuote">I bought this for my trip to Thailand from Sydney. It really helped me get some sleep and I would recommend it. I’ve tried various pillows in the past and have always been disappointed. It took me a while to buy this as I didn’t think it would work, but I’m so happy to be proved wrong!!</div>' +
        '                            <div class="reviewFooter">' +
        '                                <div class="name">– Gemma H.</div>' +
        '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="swiper-slide">' +
        '                    <div class="custReviewBox">' +
        '                        <div class="imgCol">' +
        '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic3.png" alt="Christine">' +
        '                        </div>' +
        '                        <div class="reviewContentBox">' +
        '                            <div class="ratings">' +
        '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">' +
        '                            </div>' +
        '                            <div class="reviewTitle">Best travel pillow</div>' +
        '                            <div class="reviewQuote">This is by far the best travel pillow I\'ve ever used! The built in support holds my head up in all travel situations so I can get the rest I need without the sore neck. And the wrap around "scarf" provides warmth and coziness for an extra bonus.</div>' +
        '                            <div class="reviewFooter">' +
        '                                <div class="name">– Christine K.</div>' +
        '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="swiper-slide">' +
        '                    <div class="custReviewBox">' +
        '                        <div class="imgCol">' +
        '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic4.png" alt="Kat">' +
        '                        </div>' +
        '                        <div class="reviewContentBox">' +
        '                            <div class="ratings">' +
        '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">' +
        '                            </div>' +
        '                            <div class="reviewTitle">super comfortable</div>' +
        '                            <div class="reviewQuote">Yet to use this on a long haul flight but have used it on longer car journeys. Super comfortable. So much better than the typical travel pillows. I also love how compact it is.</div>' +
        '                            <div class="reviewFooter">' +
        '                                <div class="name">– Kate M.</div>' +
        '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="swiper-slide">' +
        '                    <div class="custReviewBox">' +
        '                        <div class="imgCol">' +
        '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic5.png" alt="Elizabeth">' +
        '                        </div>' +
        '                        <div class="reviewContentBox">' +
        '                            <div class="ratings">' +
        '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">' +
        '                            </div>' +
        '                            <div class="reviewTitle">Amazing product!</div>' +
        '                            <div class="reviewQuote">I ordered one for my trip to Europe this summer that involved two overnight flights. The product was so comfortable- I have never slept so well on a flight in coach. I highly recommend!</div>' +
        '                            <div class="reviewFooter">' +
        '                                <div class="name">– Elizabeth D.</div>' +
        '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '                <div class="swiper-slide">' +
        '                    <div class="custReviewBox">' +
        '                        <div class="imgCol">' +
        '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic6.png" alt="Tara">' +
        '                        </div>' +
        '                        <div class="reviewContentBox">' +
        '                            <div class="ratings">' +
        '                                <img src="data:image/svg+xml;charset=UTF-8, %3Csvg%20width%3D%2280%22%20height%3D%2214%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23FFB829%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="customer ratings">' +
        '                            </div>' +
        '                            <div class="reviewTitle">No sore neck!</div>' +
        '                            <div class="reviewQuote">This is a must have on long flights. I always end up with a sore and stiff neck after a long flight but not after using this travel pillow. The design is key to its success.</div>' +
        '                            <div class="reviewFooter">' +
        '                                <div class="name">– Tara C.</div>' +
        '                                <div class="verifyBadge"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/verified_icon.svg" alt="Verified Buyer"> Verified Buyer</div>' +
        '                            </div>' +
        '                            <a href="https://trtltravel.com/pages/reviews" class="custMoreReview">Read more reviews</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="custSliderControls">' +
        '                <div class="swiper-button-next"></div>' +
        '                <div class="swiper-button-prev"></div>' +
        '                <div class="swiper-pagination"></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>' +
        '<div class="custReviewMainBoxWraper">' +
        '    <div class="container custContainer1280">' +
        '        <div class="custTestiWrapper">' +
        '            <div class="custTestiBox order-1">' +
        '                <span class="custTestiStarQuote">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">' +
        '                </span>' +
        '                <p>' +
        '                    <b>I actually slept!</b>Comfortable and very useful. Hated those around the neck pillows and the head bobbing and this erased that. Got some actual sleep on a flight for the first time.' +
        '                </p>' +
        '                <p>– Irma V.</p>' +
        '            </div>' +
        '            <div class="custTestiBox order-4">' +
        '                <span class="custTestiStarQuote">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">' +
        '                </span>' +
        '                <p>' +
        '                    <b>Slept on international flights.</b>I usually can\'t sleep for long on international flights, but with this product, ear plugs and an eye mask, I slept for the majority of my flights to and from India (I live in the Midwest).' +
        '                </p>' +
        '                <p>– Madeline</p>' +
        '            </div>' +
        '            <div class="custTestiBox order-2">' +
        '                <span class="custTestiStarQuote">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">' +
        '                </span>' +
        '                <p>' +
        '                    <b>Love this product!</b>This product made sitting upright in a coach airline seat comfortable! Would definitely recommend to anyone who has a plane right and must sit in coach.' +
        '                </p>' +
        '                <p>– JS Newman</p>' +
        '            </div>' +
        '            <div class="custTestiBox order-5">' +
        '                <span class="custTestiStarQuote">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">' +
        '                </span>' +
        '                <p>' +
        '                    <b>Great neck support.</b>I\'m terrible at sleeping on airplanes. But, I had a red eye flight and HAD to get some rest. The turtle pillow allowed me to sleep. I\'m a side sleeper and it was great.' +
        '                </p>' +
        '                <p> – Briana Lawrence P.</p>' +
        '            </div>' +
        '            <div class="custTestiBox order-3">' +
        '                <span class="custTestiStarQuote">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">' +
        '                </span>' +
        '                <p>' +
        '                    <b>Game changer/ Best travel pillow.</b>It is so comfortable and I actually fell asleep in the middle seat of the plane! I also used it on a long car ride and it was awesome to help me feel comfortable with my neck supported. Game changer !!' +
        '                </p>' +
        '                <p>– Linda T.</p>' +
        '            </div>' +
        '            <div class="custTestiBox order-6">' +
        '                <span class="custTestiStarQuote">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/stars.svg" alt="Stars">' +
        '                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/quote.svg" alt="Quote">' +
        '                </span>' +
        '                <p>' +
        '                    <b>Works like a charm.</b>I bought this for my trip to Thailand from Sydney. It really helped me get some sleep and I would recommend it. I\'ve tried various pillows in the past and have always been disappointed. It took me a while to buy this as I didn\'t think it would work, but I\'m so happy to be proved wrong!!' +
        '                </p>' +
        '                <p>– Gemma H.</p>' +
        '            </div>' +
        '        </div>' +
        '        <div class="custButtonWrapper">' +
        '            <a class="custBtn" href="https://trtltravel.com/pages/reviews">Show more</a>' +
        '        </div>' +
        '    </div>' +
        '</div>' +
        '<div class="custMayAlsoLikeWraper">' +
        '    <div class="container custContainer1280">' +
        '        <h2>You may also like</h2>' +
        '        <div class="row">' +
        '            <div class="col-md-3">' +
        '                <div class="itemBox">' +
        '                    <div class="imgBox">' +
        '                        <span class="flashtag rounded-2 flashtag-discount fade-in d-none">' +
        '                            41% Off!' +
        '                        </span>' +
        '                        <a href="https://trtltravel.com/products/trtl-pillow-plus"><img src="https://trtltravel.com/cdn/shop/products/TPPSLEEPING_d30ff7c0-2d4d-4841-8590-06199b4497e1_620x.jpg" alt="TRTL PILLOW PLUS"></a>' +
        '                    </div>' +
        '                    <div class="itemContent">' +
        '                        <div class="ratings">' +
        '                            <span class="stars grey"></span>' +
        '                            <span class="stars yellow"></span>' +
        '                        </div>' +
        '                        <div class="title">' +
        '                            <a href="https://trtltravel.com/products/trtl-pillow-plus">TRTL PILLOW PLUS</a>' +
        '                        </div>' +
        '                        <div class="price">' +
        '                            <div class="fPrice">' +
        '                                $89.99' +
        '                            </div>' +
        '                        </div>' +
        '                        <div class="available">Available in 2 colours</div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="col-md-3">' +
        '                <div class="itemBox">' +
        '                    <div class="imgBox">' +
        '                        <span class="flashtag rounded-2 flashtag-discount fade-in d-none">' +
        '                            41% Off!' +
        '                        </span>' +
        '                        <a href="https://trtltravel.com/products/trtl-pillow-junior"><img src="https://trtltravel.com/cdn/shop/files/2-TrtlPillowJunior_Zebra_Open_Mcopy_620x.png" alt="TRTL PILLOW JUNIOR"></a>' +
        '                    </div>' +
        '                    <div class="itemContent">' +
        '                        <div class="ratings">' +
        '                            <span class="stars grey"></span>' +
        '                            <span class="stars yellow"></span>' +
        '                        </div>' +
        '                        <div class="title">' +
        '                            <a href="https://trtltravel.com/products/trtl-pillow-junior">TRTL PILLOW JUNIOR</a>' +
        '                        </div>' +
        '                        <div class="price">' +
        '                            <div class="fPrice">' +
        '                                $39.99' +
        '                            </div>' +
        '                        </div>' +
        '                        <div class="available">Available in 3 colours</div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="col-md-3">' +
        '                <div class="itemBox">' +
        '                    <div class="imgBox">' +
        '                        <span class="flashtag rounded-2 flashtag-discount fade-in">' +
        '                            41% Off!' +
        '                        </span>' +
        '                        <a href="https://trtltravel.com/products/packed-to-perfection-bundle"><img src="https://trtltravel.com/cdn/shop/products/TPO_PP_BREAKDOWN_d5792142-8f2b-4fab-9921-2eac6c548abe_620x.png" alt="Frequent Flyer Bundle"></a>' +
        '                    </div>' +
        '                    <div class="itemContent">' +
        '                        <div class="ratings d-none">' +
        '                            <span class="stars grey"></span>' +
        '                            <span class="stars yellow"></span>' +
        '                        </div>' +
        '                        <div class="title">' +
        '                            <a href="https://trtltravel.com/products/packed-to-perfection-bundle">Frequent Flyer Bundle</a>' +
        '                        </div>' +
        '                        <div class="price">' +
        '                            <div class="cPrice">' +
        '                                $214.97' +
        '                            </div>' +
        '                            <div class="oPrice">' +
        '                                $129.96' +
        '                            </div>' +
        '                            <div class="sPrice">' +
        '                                YOU SAVE $90.01' +
        '                            </div>' +
        '                        </div>' +
        '                        <div class="available d-none">Available in 3 colours</div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '            <div class="col-md-3">' +
        '                <div class="itemBox">' +
        '                    <div class="imgBox">' +
        '                        <span class="flashtag rounded-2 flashtag-discount fade-in">' +
        '                            10% Off!' +
        '                        </span>' +
        '                        <a href="https://trtltravel.com/products/all-aboard-bundle"><img src="https://trtltravel.com/cdn/shop/products/TPOTPJBREAKDOWN_32d5707e-46d5-4f2c-b78c-cba388bef62d_620x.png" alt="ALL ABOARD BUNDLE"></a>' +
        '                    </div>' +
        '                    <div class="itemContent">' +
        '                        <div class="ratings d-none">' +
        '                            <span class="stars grey"></span>' +
        '                            <span class="stars yellow"></span>' +
        '                        </div>' +
        '                        <div class="title">' +
        '                            <a href="https://trtltravel.com/products/all-aboard-bundle">ALL ABOARD BUNDLE</a>' +
        '                        </div>' +
        '                        <div class="price">' +
        '                            <div class="cPrice">' +
        '                                $89.98' +
        '                            </div>' +
        '                            <div class="oPrice">' +
        '                                $80.98' +
        '                            </div>' +
        '                            <div class="sPrice">' +
        '                                YOU SAVE $9.00' +
        '                            </div>' +
        '                        </div>' +
        '                        <div class="available d-none">Available in 3 colours</div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    if (jQuery('#shopify-section-template--21678926332097__main').length > 0 && jQuery('.custPDPbrandBodymain').length == 0 && jQuery('.custBrandReviewMain').length == 0 && jQuery('.custReviewMainBoxWraper').length == 0 && jQuery('.custMayAlsoLikeWraper').length == 0) {
        jQuery(strAfterHeroHtml).insertAfter('#shopify-section-template--21678926332097__main');
    }

    //change review section position 
    if (jQuery('.custPDPbrandBodymain .marquee').length > 0 && jQuery('.section-reviews-slider').length > 0) {
        jQuery('.section-reviews-slider').insertAfter('.custPDPbrandBodymain .marquee');
    }

    //hide unwanted sections
    if (jQuery('#shopify-section-template--21678926332097__165788703805077d36').length > 0) {
        jQuery('#shopify-section-template--21678926332097__165788703805077d36').addClass('hideContent');
    }

    if (jQuery('#shopify-section-template--21678926332097__1657887623e3eb6760').length > 0) {
        jQuery('#shopify-section-template--21678926332097__1657887623e3eb6760').addClass('hideContent');
    }

    if (jQuery('#shopify-section-template--21678926332097__1660047417fc8f7dce').length > 0) {
        jQuery('#shopify-section-template--21678926332097__1660047417fc8f7dce').addClass('hideContent');

    }

    if (jQuery('#shopify-section-template--21678926332097__16539988665b72d4db').length > 0) {
        jQuery('#shopify-section-template--21678926332097__16539988665b72d4db').addClass('hideContent');
    }

    //change position 
    if (jQuery('.custPillowProduct .product-description .content > span').length > 0) {
        jQuery('.custPillowProduct .product-description .content > span').insertAfter('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"].product-form h1');
    }

    //add class for free standard shipping 
    if (jQuery('p:contains(Free standard shipping within the U.S.)').parents('.col-12').length > 0) {
        jQuery('p:contains(Free standard shipping within the U.S.)').parents('.col-12').addClass('custFeatures');
    }

    //add class for span tag
    if (jQuery(".hide-content span:contains('Wake up refreshed at your destination.')").length > 0) {
        jQuery(".hide-content span:contains('Wake up refreshed at your destination.')").addClass("custSubPara");
    }

    //change the position of custSubPara
    if (jQuery("#product-form-template--21678926332097__main h1:contains('TRTL TRAVEL PILLOW')").length > 0 && jQuery('.custSubPara').length > 0) {
        jQuery('.custSubPara').insertAfter("#product-form-template--21678926332097__main h1:contains('TRTL TRAVEL PILLOW')");
    }

    //change position of shipping wraper and features
    if (jQuery('.product-description').length > 0 && jQuery('.custShippingWraper').length > 0) {
        jQuery('.custShippingWraper').insertBefore('.product-description');
    }

    if (jQuery('.custFeatures').length > 0 && jQuery('.custShippingWraper').length > 0) {
        jQuery('.custFeatures').insertAfter('.custShippingWraper');
    }

    //add span tag after 10,000
    if (jQuery(".container-fluid .text-center h3:contains('10,000+')").length > 0) {
        jQuery("h3:contains('10,000+')").html(function(_, html) {
            return html.replace(/(10,000\+ 5-STAR REVIEWS)/, '<span>$1</span>');
        });
    }

    //add slider
    if (jQuery('#custSwiperSliderJS').length == 0) {
        jQuery("head").append('<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
    }
    if (jQuery('#custSwiperSliderCSS').length == 0) {
        jQuery("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.css" id="custSwiperSliderCSS" />');
    }

    var intSwiperCnt = 0;
    var intSwiperInterval = setInterval(function() {
        intSwiperCnt += 1;

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
            clearInterval(intSwiperInterval);
        }

        if (intSwiperCnt === 50) {
            clearInterval(intSwiperInterval);
        }
    }, 70);
}

// Function to show Shiping content and purchase count
function generateShipingWrapperSection() {
    //custShippingWraper section 
    var arrPurchaseCount = ['14', '15', '18', '19', '17', '20', '25', '24'];
    var intRandomPurchaseCount = arrPurchaseCount[Math.floor(Math.random() * arrPurchaseCount.length)];

    var strCurrentTime = new Date();
    var strCurrentDay = strCurrentTime.getUTCDay();
    var intCurrentHour = strCurrentTime.getUTCHours();
    var intCurrentMinute = strCurrentTime.getUTCMinutes();

    let strDeliveryDay = '';
    let intRemainingHours = '';
    var arrRemainingHours = [47, 23, 23, 23, 23, 23, 71];

    var intCurrentIndex = strCurrentDay;
    var intNextDayIndex = (intCurrentIndex + 1) % 7;

    // Check if current hour is greater than or equal to 14
    if (intCurrentHour >= 14) {
        intRemainingHours = arrRemainingHours[intNextDayIndex];
        intRemHr = 14 + intRemainingHours - intCurrentHour;
    } else {
        intRemainingHours = arrRemainingHours[intCurrentIndex];
        intRemHr = 13 - intCurrentHour;
    }

    // Calculate remaining minutes
    intRemMin = 60 - intCurrentMinute;
    if (intRemHr !== '' && intRemHr !== undefined && intRemMin !== '' && intRemMin !== undefined && intRandomPurchaseCount !== '' && intRandomPurchaseCount !== undefined) {
            strCurrentTime.setDate(strCurrentTime.getDate() + Math.floor(intRemainingHours / 24));
            strCurrentTime.setHours(strCurrentTime.getHours() + intRemainingHours % 24);
            strCurrentTime.setMinutes(strCurrentTime.getMinutes() + intRemMin);

            strDeliveryDay = strCurrentTime.toLocaleString('en-US', { weekday: 'short' });
            var strDeliveryMonth = strCurrentTime.toLocaleString('en-US', { month: 'short' });
            var strCurrentTimeNum = strCurrentTime.getDate();
            var strShippingWraperHtml = '<div class="custShippingWraper">' +
                '    <div class="inside">' +
                '        <div class="shippingTime">' +
                '            <div class="status available"></div>' +
                '            <div>' +
                '                Ships by <b>' + strDeliveryDay + ', ' + strDeliveryMonth + ' ' + strCurrentTimeNum + 'th</b>' +
                '            </div>' +
                '        </div>' +
                '        <div class="purchaseCount"><b>' + intRandomPurchaseCount + ' purchased</b> in the last 24 hours</div>' +
                '    </div>' +
                '</div>';

    }

    if (jQuery('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-description').length > 0 && jQuery('.custShippingWraper').length == 0) {
        jQuery(strShippingWraperHtml).insertAfter('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-description');
    }
}

// Function to add Video Slider
function addVideoSlider() {
    var videoSliderHtml = '<div class="custVideoSlider">' +
        '    <div class="swiper-container">' +
        '        <div class="swiper-wrapper">' +
        '            <div class="swiper-slide">' +
        '                <div class="playBtn">' +
        '                    <div class="circle">' +
        '                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '                            <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>' +
        '                        </svg>' +
        '                    </div>' +
        '                </div>' +
        '                <video class="video" poster="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-1-poster.jpg" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-1.mp4" preload="auto" loop muted></video>' +
        '            </div>' +
        '            <div class="swiper-slide">' +
        '                <div class="playBtn">' +
        '                    <div class="circle">' +
        '                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '                            <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>' +
        '                        </svg>' +
        '                    </div>' +
        '                </div>' +
        '                <video class="video" poster="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-2-poster.jpg" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-2.mp4" preload="auto" loop muted></video>' +
        '            </div>' +
        '            <div class="swiper-slide">' +
        '                <div class="playBtn">' +
        '                    <div class="circle">' +
        '                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '                            <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>' +
        '                        </svg>' +
        '                    </div>' +
        '                </div>' +
        '                <video class="video" poster="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-3-poster.jpg" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-3.mp4" preload="auto" loop muted></video>' +
        '            </div>' +
        '            <div class="swiper-slide">' +
        '                <div class="playBtn">' +
        '                    <div class="circle">' +
        '                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '                            <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>' +
        '                        </svg>' +
        '                    </div>' +
        '                </div>' +
        '                <video class="video" poster="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-4-poster.jpg" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-4.mp4" preload="auto" loop muted></video>' +
        '            </div>' +
        '            <div class="swiper-slide">' +
        '                <div class="playBtn">' +
        '                    <div class="circle">' +
        '                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '                            <path d="M22.7524 10.0499L3.86361 0.306386C2.30743 -0.489961 0 0.306386 0 2.22699V21.7141C0 23.4941 2.14645 24.5715 3.86361 23.6815L22.7524 13.938C24.4159 13.0479 24.4159 10.94 22.7524 10.0499Z" fill="#FCFCFC"></path>' +
        '                        </svg>' +
        '                    </div>' +
        '                </div>' +
        '                <video class="video" poster="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-5-poster.jpg" src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/videos/video-5.mp4" preload="auto" loop muted></video>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    if (jQuery('.product-description').length > 0 && jQuery('.custVideoSlider').length == 0) {
        jQuery(videoSliderHtml).insertBefore('.product-description');
    }

    jQuery('head').append('<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"><script src="https://unpkg.com/video.js/dist/video.min.js"></script><script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>');

    var swiper = new Swiper(".custVideoSlider .swiper-container", {
        slidesPerView: 2.5,
        spaceBetween: 8,
        loop: true,
        autoplay: {
	      delay: 12000,
	      disableOnInteraction: false,
	    },
        breakpoints: {
            640: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 3.2
            },
        },
    });

    swiper.on("slideChangeTransitionStart", () => {
    	jQuery('.custVideoSlider .swiper-slide.swiper-slide-active .playBtn').trigger('click');
    });

    if (jQuery('.custVideoSlider').length > 0) {
        jQuery('.custVideoSlider').insertBefore('.product-description.mt-3');

        setTimeout(function(){
        	jQuery('.custVideoSlider .swiper-slide.swiper-slide-active .playBtn').trigger('click');
        }, 750);
    }

    jQuery('.custVideoSlider .swiper-slide .playBtn').on('click', function() {
        jQuery('.custVideoSlider .swiper-slide .playBtn').css('display', 'flex');
        jQuery('.custVideoSlider .swiper-slide video.video').trigger('pause');
        jQuery(this).hide();
        jQuery(this).siblings('video').trigger('play');
    });
}

// Function to resize the image height on bullets
function updateImgHeight() {
    var imgHeight = jQuery('.custBrandReviewMain .custReviewBox .imgCol img').outerHeight();
    jQuery('.custBrandReviewMain .custSliderControls').css({
        height: imgHeight + 'px'
    });
}