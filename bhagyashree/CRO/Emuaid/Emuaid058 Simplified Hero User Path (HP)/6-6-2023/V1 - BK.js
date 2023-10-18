var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

    	function manageCustomBannerTop(){
        	if(jQuery('#header').length > 0){
        		var intHeaderHt = jQuery('#header').outerHeight();
        		jQuery('.custHeroBanner').attr('style','margin-top:'+ intHeaderHt+'px');
        	}
        }

        addCustomHomePageHTML();

        function addCustomHomePageHTML() {
            if(jQuery('.custEmuaidTurnHealing').length == 0) {
                jQuery('<div class="custEmuaidTurnHealing"><div class="custHeroBanner"><div class="custNatureMobileImage"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/turn-hope-into-healing-mobile.png"></div><div class="container"><div class="row"><div class="col-md-12"><h1>Turn Hope into Healing™</h1><p>The Most Advanced Form of Natural Healing<em> Without a Prescription</em></p></div><ul><li><div class="custFirstBlocks"><span class="custTagRed">maximum strength</span><h2>EMUAIDMAX® First Aid Ointment 0.5oz</h2><p>Faster and more intensive relief for skin infections:</p></div><div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg?v=1620715257"></div><div class="custProductsCategory"><div class="prod-condition"><span class="peppermint">Nail Fungus</span><span class="frost">Cold Sores</span><span class="frost2">Severe Boils</span><span class="quarter-spanish-white">Bumps &amp; Nodules</span><span class="quarter-spanish-white2">Athlete\'s Foot</span></div></div><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="custOrangeButtonFill">Shop EMUAIDMAX<span>®</span></a></li><li><div class="custFirstBlocks"><span class="custTagRed">Regular Strength</span><h2>EMUAID® First Aid Ointment 0.5oz</h2><p>Relief for itchy, painful, and resistant skin conditions:</p></div><div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaid_0.5oz_front_E_96de6a22-25ea-4a27-8d57-112ba3ed34cb_2000x.jpg?v=1620715277"></div><div class="custProductsCategory"><div class="prod-condition"><span class="link-water most-popular">Eczema</span><span class="Iceberg">Hemorrhoids</span><span class="Iceberg">Psoriasis</span><span class="Iceberg2">Burns &amp; Blisters</span><span class="Iceberg2">Dermatitis</span></div></div><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz" class="custOrangeButtonFill">Shop EMUAID<span>®</span></a></li></ul></div></div></div><div class="custReviewsFromPeople"><div class="container"><div class="row"><div class="custRatingStar"><div><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></div>Over 200,000 5-Star Reviews</div><h2>You’re Not Alone. Real Reviews From People Like You</h2><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-1.png"><span>Cleared Chronic Nail Fungus</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-2.png"><span>Relieved Psoriasis Symptoms</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-3.png"><span>Eliminated Hemorrhoid Discomfort</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-4.png"><span>Soothed Backaches with Pain Relieving Cream</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-5.png"><span>Eased Pain and Prevented Infection from a 2nd Degree Burn</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-6.png"><span>Reduced Eczema Flare-up</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-7.png"><span>Ended 12 Years of Cystic Acne</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-8.png"><span>Improved Quality of Life After a Decade of Lichen Sclerosus Pain</span></li></ul><a href="https://www.emuaid.com/pages/customer-reviews" class="custOrangeButtonOutline">See More Reviews</a></div></div></div><div class="custWhatCondition"><div class="container"><div class="row"><h2>What condition do you want to treat?</h2><div class="custStrengthBody"><div class="custLeftSideBody"><div class="custMaximumStrength"><h3>Top 10 Conditions treated with Maximum Strength First Aid Ointment</h3><ul class="custStrengthList"><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Cold Sores</a></li><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Rashes</a></li><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Psoriasis</a></li><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Severe Boils</a></li><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Bumps &amp; Nodules</a></li><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Anal Itching</a></li><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Poison Ivy, Oak &amp; Sumac</a></li><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Neuropathy</a></li><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Athlete’s Foot</a></li><li><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Nail Fungus</a></li></ul><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="custOrangeButtonFill">Learn More About EMUAIDMAX<span>®</span></a><div class="custImageIcon"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/redicon-img.svg?v=1666340791" alt="Human Picture In Red Color"></div></div></div><div class="custRightSideBody"><div class="custMaximumStrength"><h3>Top 10 Conditions treated with Regular Strength First Aid Ointment</h3><ul class="custStrengthList"><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Lichen Planus</a></li><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Eczema</a></li><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Bed Sores</a></li><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Hemorrhoids</a></li><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Lichen Sclerosus</a></li><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Cellulitis</a></li><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Dermatitis</a></li><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Burns &amp; Blisters</a></li><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Diabetic Ulcers</a></li><li><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Cracked Heels</a></li></ul><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz" class="custOrangeButtonFill">Learn More About EMUAID<span>®</span></a><div class="custImageIcon"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/blueicon-img.svg?v=1666340791" alt="Human Picture In Blue Color"></div></div></div></div></div></div></div><div class="custPhysiciansDermatologist"><div class="container"><div class="row"><div class="col-md-6"><h2>Recommended By Physicians. Dermatologist Tested.</h2><p>EMUAID® and EMUAIDMAX® has been<strong> clinically tested and researched for over 20 years,</strong> and was developed with the help of some of the world’s industry leading chemists and physicists.</p><p>Our medical advisory board, composed of top professionals in medicine and holistic wellness, strengthens our commitment to researching, developing new formulations, and exploring clinical applications for our products</p><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_chemicals.svg"><span>NO<br>Chemicals</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_artificial.svg"><span>NO Artificial<br>Preservatives</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_lanolin.svg"><span>NO Lanolin</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_petrochemicals.svg"><span>NO<br>Petrochemicals</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_parabens.svg"><span>NO Parabens</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no-steroids.svg"><span>NO Steroids</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_fragrance.svg"><span>NO<br>Fragrance</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_animal_testing.svg"><span>NO Animal<br>Testing</span></li></ul><a href="https://www.emuaid.com/pages/advisory-board" class="custOrangeButtonFill">See What Dr’s Say About EMUAID<span>®</span></a></div><div class="col-md-6"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/dr-physicians.png"></div></div></div></div><div class="custWorldMostVersatile"><div class="container"><div class="row"><h2>The World\'s Most Versatile Treatment For Over 100+ Resistant Skin Conditions</h2><div class="custSkinConditions"><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/hp-np-plant.svg"><span>Made With Natural Ingredients</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/dermatologist-tested.svg"><span>Dermatologist Tested & Non-Irritating Formula</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/hp-np-refund.svg"><span>30 Day Money-Back Guarantee</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/improvemen.svg"><span>Get Noticeable Improvement within 24 Hours!</span></li></ul></div><div class="swiper custEmuaidProductSlider bm-top-prod"><div class="swiper-wrapper"><div class="swiper-slide"><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz"><div class="bm-most-popular">MOST POPULAR</div><div class="bm-prod"><h2 class="prod-title">EMUAIDMAX<sup>®</sup>First Aid Ointment 0.5oz</h2><div class="prod-description"><p>Faster and more intensive relief for skin infections:</p></div><div class="prod-condition"><span class="peppermint">Nail Fungus</span><span class="frost">Cold Sores</span><span class="frost2">Severe Boils</span><span class="quarter-spanish-white">Bumps &amp; Nodules</span><span class="quarter-spanish-white2">Athlete\'s Foot</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg?v=1620715257" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup>First Aid Ointment 0.5oz</h2><div class="prod-description"><p>Relief for itchy, painful, and resistant skin conditions:</p></div><div class="prod-condition"><span class="link-water most-popular">Eczema</span><span class="Iceberg">Hemorrhoids</span><span class="Iceberg">Psoriasis</span><span class="Iceberg2">Burns &amp; Blisters</span><span class="Iceberg2">Dermatitis</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaid_0.5oz_front_E_96de6a22-25ea-4a27-8d57-112ba3ed34cb_2000x.jpg?v=1620715277" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/emuaidmax-concentrate-serum"><div class="bm-prod"><h2 class="prod-title">EMUAIDMAX<sup>®</sup>Concentrate Serum</h2><div class="prod-description"><p>Concentrated free-flowing serum for deeper infusion:</p></div><div class="prod-condition"><span class="Iceberg">Scalp Issues</span><span class="link-water">Bed Sores</span><span class="Iceberg2">Seborrheic Dermatitis</span><span class="quarter-spanish-white">Folliculitis</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/01-emuaidMAX-Bottle-Front_2000x.jpg?v=1680085878" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/emuaid-pain-relieving-cream"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup>Pain Relieving Cream</h2><div class="prod-description"><p>Fast pain relief for:</p></div><div class="prod-condition"><span class="link-water">Aching muscles &amp; joints</span><span class="link-water2">Backaches</span><span class="link-water3">Nerve Pain</span><span class="link-water3">Inflammation</span><span class="french-lilac">Arthritis</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/Pain-Relieving-Cream.png?v=1662096655" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/therapeutic-moisture-bar"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup>Therapeutic Moisture Bar</h2><div class="prod-description"><p>Ultra-nourishing and cleansing for damaged skin:</p></div><div class="prod-condition"><span class="tara">Dermatitis</span><span class="link-water">Eczema</span><span class="Iceberg3">Psoriasis</span><span class="amour">Rosacea</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/Overnight-Acne-Treatment.png?v=1662096653" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/overnight-acne-treatment"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup>Overnight Acne Treatment</h2><div class="prod-description"><p>Guaranteed To Reduce the Size &amp; Severity of Any Blemish Overnight.</p></div><div class="prod-condition"><span class="amour2">Eliminates most stubborn blemishes</span><span class="link-water4">Blackheads</span><span class="vanilla-ice">Cystic Acne</span><span class="amour">Rosacea</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/overnight-acne-treatment.webp?v=1662096652" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div></div></div></div><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="custOrangeButtonFill">Shop All Products</a></div></div><div class="custNatureInspired"><div class="container"><div class="row"><div class="custNatureMobileImage"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/nature-inspired-mobile.png"></div><h2>Nature Inspired. Clinically Tested. Engineered for Efficacy.</h2><p>We have traveled the world in search of only<strong> scientifically proven ingredients backed by decades of research</strong></p><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/engineered-efficacy.png" class="custNatureDesktopImage"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/engineered-efficacy-mobile.png" class="custNatureMobileImage"><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="custOrangeButtonFill">BUY NOW</a></div></div></div><div class="custMoneyBackGuarantee"><div class="container"><div class="row"><div class="custNatureMobileImage"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/hp-money-back-guarantee-mobile.png"></div><h2>30 Day Money-Back Guarantee</h2><p>If you\'re not satisfied with your initial purchase, just let us know within 30 days of receiving your order and we\'ll give you a full refund. No questions asked.</p><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="custOrangeButtonFill">Shop All Products</a></div></div></div></div>').insertBefore('.shogun-root');

                if( jQuery('.bm-logo-section').length > 0 ) {
                    jQuery('.bm-logo-section').insertAfter('.custNatureInspired');
                }

                if(jQuery(window).width() <= 767){
                	manageCustomBannerTop();
                }
             	

                var intSwiperCnt = 0;
                var intSwiperInterval = setInterval(function () {
                    intSwiperCnt += 1;

                    if (typeof Swiper !== 'undefined'){
                        var swiper =  document.querySelector(".custEmuaidProductSlider");
                        new Swiper(swiper, {
                            slidesPerView: 4.5, 
                            loop: true,
                            infinite: true,
                            spaceBetween: 20,
                            initialSlide: 0,
                            centeredSlides: false,
                            loopedSlides: 8,
                            breakpoints: {
                                1024: {
                                  slidesPerView: 3.5,
                                  spaceBetween: 20,
                                },
                                991: {
                                    slidesPerView: 3.5,
                                    spaceBetweenSlides: 10
                                },
                                767: {
                                    slidesPerView: 2.5,
                                    spaceBetweenSlides: 10
                                },
                                540: {
                                  slidesPerView: 1.5,
                                  spaceBetween: 10,
                                },
                            },
                        });

                        clearInterval(intSwiperInterval);
                    }

                    if(intSwiperCnt === 50){
                        clearInterval(intSwiperInterval);
                    }

                },50);
            }
        }

        jQuery(document).on('click','.custTopQuizBanner button.btn-close', function (){
        	if(jQuery(window).width() <= 767){
				manageCustomBannerTop();
            }
        });
        
        const sliders = document.querySelectorAll('.custProductsCategory .prod-condition');
        sliders.forEach(slider => {
            let mouseDown = false;
            let startX, scrollLeft;

            let startDragging = function (e) {
                mouseDown = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            };
            
            let stopDragging = function (event) {
                mouseDown = false;
            };

            slider.addEventListener('mousemove', (e) => {
                e.preventDefault();
                if(!mouseDown) { return; }
                const x = e.pageX - slider.offsetLeft;
                const scroll = x - startX;
                slider.scrollLeft = scrollLeft - scroll;
            });

            // Add the event listeners
            slider.addEventListener('mousedown', startDragging, false);
            slider.addEventListener('mouseup', stopDragging, false);
            slider.addEventListener('mouseleave', stopDragging, false);
        });

    clearInterval(waitForJquery);  
    }
}, 50);  