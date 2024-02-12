var waitForJquery = setInterval(function() {
         var strURL = window.location.href;
        if (strURL.indexOf('/products/trtl-travel-pillow') > 0) {
            console.log('PDP Page: TRTL Travel Pillow');

            // var intRunCount = 0;
            // var intRunInterval = setInterval(function() {
            //     intRunCount += 1;

            trtlePillowPdpNewDesign();

        //     if (intRunCount === 150) {
        //         clearInterval(intRunInterval);
        //     }

        // }, 30);
            
        }

        function trtlePillowPdpNewDesign(){
            //custShippingSwiperBadge section 
            if(jQuery('body.template-product #MainContent .product-container .product-media[id*="__main"] .swiper.swiper-media').length > 0 && jQuery('.custShippingSwiperBadge').length == 0){

                jQuery('<div class="custShippingSwiperBadge">2-5 Day Shipping</div>').prependTo('body.template-product #MainContent .product-container .product-media[id*="__main"] .swiper.swiper-media');

            }
            //custShippingWraper section 

            var strShippingWraperHtml ='<div class="custShippingWraper">'+
            '    <div class="inside">'+
            '        <div class="shippingTime">'+
            '            <div class="status available"></div>'+
            '            <div>'+
            '                Ships by <b>Thu, Aug 17th</b>'+
            '            </div>'+
            '        </div>'+
            '        <div class="purchaseCount"><b>20 purchased</b> in the last 24 hours</div>'+
            '    </div>'+
            '</div>';

            if(jQuery('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-description').length > 0 && jQuery('.custShippingWraper').length == 0){
                jQuery(strShippingWraperHtml).insertAfter('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-description');

            }

            //custScientficallyProvenMain Section 
            
            var strScientficallyProvenMainHtml = '<div class="custScientficallyProvenMain">'+
                                                '    <div class="inside">'+
                                                '        <div class="imgBox">'+
                                                '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/scientifically_proven_img.png" alt="">'+
                                                '        </div>'+
                                                '        <div class="content">'+
                                                '            <h2>'+
                                                '                <div class="icon">'+
                                                '                    <img src="https://trtltravel.com/cdn/shop/files/Scientifically-proven_5d4cc8f1-03ae-4462-9799-ec544f2e4d83_35x.png?v=1657273799" alt="">'+
                                                '                </div>'+
                                                '                Scientifically Proven'+
                                                '            </h2>'+
                                                '            <p>Patented design fits any neck shape, jaw, and shoulder. All this combines to give you the most comfortable sleep possible on the move.</p>'+
                                                '            <p>Trtl Pillow is scientifically proven to hold the head and neck in a better ergonomic position than a traditional travel pillow.</p>'+
                                                '        </div>'+
                                                '    </div>'+
                                                '</div>';

            //desktop and mobile condition 
            if(jQuery(window).width() <= 991){
                console.log('Mobile');
                console.log('length >>>>>>>>>>>>>>>>>>>>',jQuery('body.template-product #MainContent .product-description').length);
                  if(jQuery('body.template-product #MainContent .product-description').length > 0 && jQuery('.custScientficallyProvenMain').length == 0){
                    console.log('>>>>>>>>>>>>>>>valid condition');
                    jQuery(strScientficallyProvenMainHtml).insertAfter('body.template-product #MainContent .product-description');

                }

                }else{
                    console.log('desktop');
                    if(jQuery('body.template-product #MainContent [id*="__main"] .product-container .product-media[id*="product-media-template"]').length > 0 && jQuery('.custScientficallyProvenMain').length == 0){
                        jQuery(strScientficallyProvenMainHtml).appendTo('body.template-product #MainContent [id*="__main"] .product-container .product-media[id*="product-media-template"]');

                }

            }
            
            //custSeeAction
            
            var strSeeActionHtml = '<div class="custSeeAction">'+
                                '    <div class="inside">'+
                                '        <h2>SEE IT IN ACTION</h2>'+
                                '        <div class="custReviewThumbnails">'+
                                '            <div class="profilePic">'+
                                '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic1.png" alt="">'+
                                '            </div>'+
                                '            <div class="profilePic">'+
                                '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic2.png" alt="">'+
                                '            </div>'+
                                '            <div class="profilePic">'+
                                '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic3.png" alt="">'+
                                '            </div>'+
                                '            <div class="profilePic">'+
                                '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic4.png" alt="">'+
                                '            </div>'+
                                '            <div class="profilePic">'+
                                '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic5.png" alt="">'+
                                '            </div>'+
                                '            <div class="profilePic">'+
                                '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/profilePic6.png" alt="">'+
                                '            </div>'+
                                '        </div>'+
                                '    </div>'+
                                '</div>';
                  
            if(jQuery('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-descriptio   ').length > 0 && jQuery('.custSeeAction').length == 0){
                jQuery(strSeeActionHtml).insertBefore('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"] .product-description');

            }

            //after hero section html

            var strAfterHeroHtml = '<div class="custPDPbrandBodymain">'+
            '    <div class="marquee">'+
            '        <div class="track">'+
            '            <div class="content">'+
            '                <div class="custMarqueeWrapper">'+
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
            '    <section class="custUltimateTravel">'+
            '        <div class="container custContainer1280">'+
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
            '            <div class="row custMachine">'+
            '                <div class="col-lg-3 order-3 order-lg-1 custMachine2Img">'+
            '                    <div class="custImgBox d-flex justify-content-end custMachineDesk1">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-1.png" alt="Machine Washable & Easy to clean">'+
            '                    </div>'+
            '                    <div class="custImgBox mb-0 custMachineDesk2">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-2.png" alt="Machine Washable & Easy to clean">'+
            '                    </div>'+
            '                </div>'+
            '                <div class="col-lg-3 order-2 order-lg-2">'+
            '                    <div class="custImgBox d-flex justify-content-end custMachineDesk3">'+
            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/machine-washable-&-easy-to-clean-desk-3.png" alt="Machine Washable & Easy to clean">'+
            '                    </div>'+
            '                    <div class="custImgBox mb-0 custMachineDesk4 d-none d-lg-block">'+
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
            '</div>';

            if(jQuery('#shopify-section-template--21678926332097__main').length > 0 && jQuery('.custPDPbrandBodymain').length == 0  && jQuery('.custBrandReviewMain').length == 0 && jQuery('.custReviewMainBoxWraper').length == 0 && jQuery('.custMayAlsoLikeWraper').length == 0){  
                jQuery(strAfterHeroHtml).insertAfter('#shopify-section-template--21678926332097__main');
            }

            //change review section position 
            if(jQuery('.custPDPbrandBodymain .marquee').length > 0 && jQuery('.section-reviews-slider').length > 0){
                jQuery('.section-reviews-slider').insertAfter('.custPDPbrandBodymain .marquee');
            }

            //hide unwanted sections

            if(jQuery('#shopify-section-template--21678926332097__165788703805077d36').length > 0){
                jQuery('#shopify-section-template--21678926332097__165788703805077d36').addClass('hideContent');
            }

            if(jQuery('#shopify-section-template--21678926332097__1657887623e3eb6760').length > 0){
                jQuery('#shopify-section-template--21678926332097__1657887623e3eb6760').addClass('hideContent');
            }

           if(jQuery('#shopify-section-template--21678926332097__1660047417fc8f7dce').length > 0){
                jQuery('#shopify-section-template--21678926332097__1660047417fc8f7dce').addClass('hideContent');
            
           }
           
           if(jQuery('#shopify-section-template--21678926332097__16539988665b72d4db').length > 0){
                jQuery('#shopify-section-template--21678926332097__16539988665b72d4db').addClass('hideContent');
            }

            //change position 

            if(jQuery('.custPillowProduct .product-description .content > span').length > 0){
                jQuery('.custPillowProduct .product-description .content > span').insertAfter('body.template-product #MainContent [id*="__main"] .product-container form[id*="__main"].product-form h1');
            }

            if(jQuery('.custShippingWraper').length > 0 && jQuery('.product-description').length > 0){
                jQuery('.custShippingWraper').insertBefore('.product-description');
            }

        
            //add class for free standard shipping 
            if(jQuery('p:contains(Free standard shipping within the U.S.)').parents('.col-12').length > 0){
                jQuery('p:contains(Free standard shipping within the U.S.)').parents('.col-12').addClass('custFeatures');   
            }
            
            if(jQuery('.custFeatures').length > 0 && jQuery('.custShippingWraper').length > 0 ){
                jQuery('.custFeatures').insertAfter('.custShippingWraper');
            }
         
        }
        clearInterval(waitForJquery);
  
  }, 50);