var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        
        var flag = 0;
        customHtmlToHomePage();

        function customHtmlToHomePage(){
            if(jQuery('.custMainBlocks').length == 0 ){
                jQuery('<div class="custMainBlocks"><div class="custMainbanner"><div class="custLeftproducts"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/designed-for-men.jpg" alt="men-banner"><a href="https://www.alvies.com/collections/mens-boots">Shop Men</a></div><div class="custrighttproducts"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/designed-for-women.jpg" alt="women-banner"><a href="https://www.alvies.com/collections/womens-boots">Shop Women</a></div><div class="text-wrapper"><h1>Boots for all walks</h1> <p>Hand-crafted to make everyone feel comfortable in a pair of their own.</p></div></div><div class="custBootsIsUnmatched"><h2>“The Quality Of The Boots Is Unmatched”</h2><ul><li class="custLogoItemList"><img src="//cdn.shopify.com/s/files/1/1145/2636/files/logo-05.png?v=1677145378"></li><li class="custLogoItemList"><img src="//cdn.shopify.com/s/files/1/1145/2636/files/logo-04.png?v=1677145468"></li><li class="custLogoItemList"><img src="//cdn.shopify.com/s/files/1/1145/2636/files/logo-01.png?v=1677145442"></li><li class="custLogoItemList"><img src="//cdn.shopify.com/s/files/1/1145/2636/files/logo-02.png?v=1677145342"></li><li class="custLogoItemList"><img src="//cdn.shopify.com/s/files/1/1145/2636/files/logo-06.png?v=1677145487"></li><li class="custLogoItemList"><img src="//cdn.shopify.com/s/files/1/1145/2636/files/Untitled_design_7.jpg?v=1678918243"></li></ul></div><div class="custCategories"><div class="custProductCategories"><div class="custMobileSpaceBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/shop-mens-boots.jpg"><a href="https://www.alvies.com/collections/mens-boots"> <div><span>Shop</span>men\'s boots</div></a></div></div><div class="custProductCategories"><div class="custMobileSpaceBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/shop-womens-boots.jpg"> <a href="https://www.alvies.com/collections/womens-boots"><div><span>Shop</span>women\'s boots</div></a> </div></div><div class="custProductCategories"> <div class="custMobileSpaceBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/shop-flip-flops.jpg"><a href="https://www.alvies.com/collections/flops"> <div><span>shop</span>flip-flops</div></a></div></div><div class="custProductCategories"><div class="custMobileSpaceBlocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/shop-artist-series.jpg"><a href="https://www.alvies.com/collections/artist-series"><div><span>shop</span>artist series</div></a></div></div></div><div class="custShopBestSellers"><h2>Shop best sellers</h2><div class="custCategoriesSlider"><div class="tabset"><input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked="checked"><label for="tab1">Men\'s</label><input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"><label for="tab2">Women\'s</label><div class="tab-panels"> <section id="marzen" class="tab-panel"> <div class="custMaleBoots"><div><a href="https://www.alvies.com/products/the-congress?color=nyc-asphalt"><div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-congress-596829_900x.jpg?v=1677871141" alt="congress"></div><div class="custProtital"><h6>THE congress</h6><div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>4.9 (20 Reviews)</span></div><div class="custPrice">$615</div></div></a></div><div><a href="https://www.alvies.com/products/the-6th-street?color=vintage-limo"><div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-6th-street-837397_900x.jpg?v=1677871071" alt="congress"></div><div class="custProtital"><h6>THE 6TH STREET</h6><div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>4.8 (35 Reviews)</span></div><div class="custPrice">$655</div></div></a></div><div><a href="https://www.alvies.com/products/the-lamar?color=hidalgo-honey"> <div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-lamar-392278_900x.jpg?v=1677871462" alt="congress"></div><div class="custProtital"><h6>THE LAMAR</h6><div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>4.9 (71 Reviews)</span></div><div class="custPrice">$325</div></div></a> </div><div> <a href="https://www.alvies.com/products/the-manchaca?color=glass-of-pappy"> <div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-manchaca-837060_900x.png?v=1677871485" alt="congress"></div><div class="custProtital"> <h6>THE manchaca</h6> <div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>5.0 (22 Reviews)</span></div><div class="custPrice">$345</div></div></a></div><div><a href="https://www.alvies.com/products/the-comal?color="><div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-comal-866674_900x.jpg?v=1677871107" alt="congress"></div><div class="custProtital"><h6>THE COMAL</h6><div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>4.9 (63 Reviews)</span></div><div class="custPrice">$325</div></div></a></div><div><a href="https://www.alvies.com/products/bfg?color=sharp-dressed"><div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/gsmith_20210926_0156_900x.png?v=1677868852" alt="congress"><div class="custBadges"><img class="badges__image" src="//cdn.shopify.com/s/files/1/1145/2636/t/26/assets/badge__bfg-limited-edition.svg?v=38364426679268954011681250519" alt="Bfg limited edition"></div></div><div class="custProtital"><h6>BFG</h6><div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>4.9 (198 Reviews)</span></div><div class="custPrice">$450</div></div></a></div></div></section><section id="rauchbier" class="tab-panel"> <div class="custFemaleBoots"><div><a href="https://www.alvies.com/products/the-rainey?color=marfa-in-the-70s"><div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-rainey-785562_900x.jpg?v=1677870944" alt="congress"></div><div class="custProtital"><h6>THE RAINEY</h6><div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>4.9 (175 Reviews)</span></div><div class="custPrice">$265</div></div></a></div><div><a href="https://www.alvies.com/products/trinity?color=snowpocalypse"><div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/gsmith_20221024_0003_900x.jpg?v=1677195433" alt="congress"><div class="custBadges"><img class="badges__image" src="//cdn.shopify.com/s/files/1/1145/2636/t/26/assets/badge__new-boot.svg?v=32050024874676846901681250519" alt="New boot"></div></div><div class="custProtital"><h6>THE TRINITY</h6><div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>5.0 (9 Reviews)</span></div><div class="custPrice">$295</div></div></a></div><div><a href="https://www.alvies.com/products/the-rio-grande?color=irish-wake"> <div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-rio-grande-132523_900x.jpg?v=1677870976" alt="congress"></div><div class="custProtital"> <h6>THE RIO GRANDE</h6><div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>4.9 (34 Reviews)</span></div><div class="custPrice">$315</div></div></a> </div><div><a href="https://www.alvies.com/products/the-guadalupe?color=cask-strength"><div class="custProPhoto"><img src="https://cdn.shopify.com/s/files/1/1145/2636/products/the-guadalupe-355620_900x.jpg?v=1677870922" alt="congress"></div><div class="custProtital"><h6>THE GUADALUPE</h6><div class="custRating"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><span>4.9 (67 Reviews)</span></div><div class="custPrice">$285</div></div></a> </div></div></section></div></div></div></div><div class="custstarreview"><div class=""> <h3>Over 3000 5-star reviews</h3><div class="custReviews"><div><div class="slide-content"><div class="custratingblocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><p>These boots are absolutely beautiful and comfortable. My husband is jealous! We will soon be ordering him boots from you.I recently spent a lot of money on another brand of boots and they were built very poorly.Your boots are a class act!</p><div class="custName">Aaron M.</div></div></div></div><div><div class="slide-content"><div class="custratingblocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><p>I love em this is my second pair and I\'m going to buy a third pair</p><div class="custName">Christina E.</div></div></div></div><div> <div class="slide-content"><div class="custratingblocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><p>I\'ve had these boots for a couple of years now. I\'ve worn boots for 50 years and I have to tell you I have never had a boot that fit so well. These are the best no question about it.</p><div class="custName">Griffin M.</div></div></div></div><div><div class="slide-content"><div class="custratingblocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"> <p>Just as promised, way more comfortable than I expected. Love my ALVIES! Looking forward to getting a 2nd pair...</p><div class="custName">Stormin N.</div></div></div></div><div><div class="slide-content"><div class="custratingblocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"> <p>Fast shipping and wonderful shipping presentation. The smell of the leather was the best part! Love the fit, comfort, and look of these boots.</p><div class="custName"></div>Gabriella L.</div></div></div><div><div class="slide-content"> <div class="custratingblocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><p>I bought this boots a month ago and everything about them is high-quality workmanship. They fit perfectly right out of the box. I\'m pretty sure I will be buying many others from Alvies. Thanks Alvies for such amazing boots.</p><div class="custName">Cindy M.</div></div></div></div><div><div class="slide-content"><div class="custratingblocks"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/starRating.svg"><p>This is the first pair of Cowboy boots I\'ve ever purchased, I\'ve done some research and landed here. The packaging was great and the smell coming out of the box was A+. They fit perfectly right out of the box.</p><div class="custName">Andrew S.</div></div></div></div></div></div></div><div class="custBreakInFast"><div class="custBreakSlider"><div class="custDesktopNoSlider"> <div class="custBreakWraper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/break-in-fast.png" class="custMobileSlider"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/handmade.png" class="custDesktopSlider"><h3>Break in fast</h3><p>Usually, boots and flops can take a while to fully break in and become comfortable. Alvie designed these to break in fast. Real fast. After just a few days, they\'ll feel like they\'ve been part of your life for years.</p></div></div><div class="custDesktopNoSlider"><div class="custBreakWraper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/built-to-fast.png" class="custMobileSlider"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/fast-break.png" class="custDesktopSlider"> <h3>Built to last</h3> <p>Real craftsmanship means having something you can pass down to the next generation. Break the vicious two-year cycle of shoe buying, and invest that extra cash in going somewhere you\'ve never been or doing something you\'ve never done.</p></div></div><div class="custDesktopNoSlider"> <div class="custBreakWraper"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/designed-for-life.png" class="custMobileSlider"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Alvies/designed-for-life-large.png" class="custDesktopSlider"><h3>Designed for life</h3><p>Usually, boots and flops can take a while to fully break in and become comfortable. Alvie designed these to break in fast. Real fast. After just a few days, they\'ll feel like they\'ve been part of your life for years.</p></div></div></div></div></div>').insertBefore('#main');

                    if(jQuery('.bfg.bfg__home-promo').parents('.shopify-section').length > 0 ){
                        jQuery('.bfg.bfg__home-promo').parents('.shopify-section').insertAfter('.custMainBlocks .custShopBestSellers');
                    }
                    if(jQuery('.shopify-section:contains(a message from our founder)').length > 0){
                        jQuery('.shopify-section:contains(a message from our founder)').insertAfter('.custBreakInFast');
                    }
                    var intMenCount = 0 , intWomenCount = 0 ;
                    jQuery(".custMaleBoots").slick({
                        slidesToShow: 4,
                        infinite: true,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    arrows: false,
                                    centerMode: true,
                                    centerPadding: '10px',
                                    slidesToShow: 2
                                }
                            },
                            {
                              breakpoint: 767,
                              settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '10px',
                                slidesToShow: 1
                              }
                            }
                        ]
                    });
                   
                    var intMenBootsInterval = setInterval(function () {
                        var intWidth = jQuery('.custMaleBoots .slick-track').css('width').replace(/[^-\d\.]/g, '');
                        intMenCount    += 1;
                        if( intWidth == 0) {
                            jQuery('.custMaleBoots').slick("refresh");
                            clearInterval(intMenBootsInterval);
                        }
                        if(intMenCount === 70) {
                            clearInterval(intMenBootsInterval);
                        }
                    },50);

                    jQuery(".custFemaleBoots").slick({
                        slidesToShow: 4,
                        infinite: true,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    arrows: false,
                                    centerMode: true,
                                    centerPadding: '10px',
                                    slidesToShow: 2
                                }
                            },
                            {
                              breakpoint: 767,
                              settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '10px',
                                slidesToShow: 1
                              }
                            }
                        ]
                    });

                    var intWomenBootsInterval = setInterval(function () {
                        var intWidth = jQuery('.custFemaleBoots .slick-track').css('width').replace(/[^-\d\.]/g, '');
                        intWomenCount    += 1;
                        if( intWidth == 0) {
                            jQuery('.custFemaleBoots').slick("refresh");
                            clearInterval(intWomenBootsInterval);
                        }
                        if(intWomenCount === 70) {
                            clearInterval(intWomenBootsInterval);
                        }
                    },50);

                    jQuery('.custReviews').slick({
                        slidesToShow: 1,
                        infinite: true,
                        slidesToScroll: 1,
                        centerPadding: "0px",
                        dots: true, 
                    });
                    
                    if( jQuery(window).width() <= 767 ){
                        jQuery('.custCategories').slick({
                            centerMode: true,
                            infinite: true,
                            centerPadding: '40px',
                            slidesToShow: 1,
                            responsive: [
                                {
                                    breakpoint: 768,
                                    settings: {
                                        arrows: false,
                                        centerMode: true,
                                        centerPadding: '40px',
                                        slidesToShow: 2
                                    }
                                },
                                {
                                  breakpoint: 767,
                                  settings: {
                                    arrows: false,
                                    centerMode: true,
                                    centerPadding: '40px',
                                    slidesToShow: 1
                                  }
                                }
                            ]
                        });

                        jQuery('.custBreakSlider').slick({
                            slidesToShow: 3,
                            infinite: true,
                            slidesToScroll: 1,
                            centerPadding: "0",
                            centerMode: true,
                            dots: true, 
                            responsive: [
                                {
                                    breakpoint: 991,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                        centerMode: true,
                                        centerPadding: '0',
                                    }
                                },
                                {
                                    breakpoint: 860,
                                    settings: {
                                        arrows: false,
                                        centerMode: true,
                                        centerPadding: '0',
                                        slidesToShow: 1
                                    }
                                }
                            ]
                        });
                }
            }
        }

        jQuery(document).on('click','.tabset > input + label' , function () {
            var strAttr = jQuery(this).attr('for');
            if(strAttr == 'tab1'){
                var intWidth = jQuery('.custMaleBoots .slick-track').css('width').replace(/[^-\d\.]/g, '');
                if(intWidth == 0){
                    jQuery('.custMaleBoots').slick("refresh");
                }
            }
            if(strAttr == 'tab2'){
                jQuery('.custFemaleBoots').slick("refresh");
                var intWidth = jQuery('.custFemaleBoots .slick-track').css('width').replace(/[^-\d\.]/g, '');
                if(intWidth == 0){
                    jQuery('.custFemaleBoots').slick("refresh");
                }
            }
        });

        clearInterval(waitForjQuery);
    } 
}, 50);