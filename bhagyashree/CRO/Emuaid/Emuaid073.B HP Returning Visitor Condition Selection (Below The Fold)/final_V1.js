var intCount = 0;
var intInterval = setInterval(function (){
	intCount += 1;
	if(jQuery('.index').length > 0 && jQuery('.shogun-root').length > 0 ){
	 	addCustHpReturnHeroConditionHtml();
	}

	if(intCount === 100){
		clearInterval(intInterval);
	}
},30);


function addCustHpReturnHeroConditionHtml() {
    if(jQuery('.custHpReturnEmuaidConditionWrapper').length == 0) {
        jQuery('<div class="custHpReturnEmuaidConditionWrapper"><div class="custHpReturnHeroBanner"><div class="custHpReturnNatureMobileImage"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/turn-hope-into-healing-mobile.png"></div><div class="container"><div class="row"><div class="col-md-12"><h1>Turn Hope into Healing™</h1><p>The Most Advanced Form of Natural Healing <em>Without a Prescription</em></p></div><ul><li><div class="custFirstBlocks"><span class="custTagRed">maximum strength</span><h2>EMUAIDMAX® First Aid Ointment 0.5oz</h2><p>Faster and more intensive relief for skin infections:</p></div><div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg?v=1620715257"></div><div class="custProductsCategory"><div class="prod-condition"><span class="peppermint">Nail Fungus</span><span class="frost">Cold Sores</span><span class="frost2">Severe Boils</span><span class="quarter-spanish-white">Bumps &amp; Nodules</span><span class="quarter-spanish-white2">Athlete\'s Foot</span></div></div><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="custOrangeButtonFill">Shop EMUAIDMAX®</a></li><li><div class="custFirstBlocks"><span class="custTagRed">Regular Strength</span><h2>EMUAID® First Aid Ointment 0.5oz</h2><p>Relief for itchy, painful, and resistant skin conditions:</p></div><div class="custProductsImage"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaid_0.5oz_front_E_96de6a22-25ea-4a27-8d57-112ba3ed34cb_2000x.jpg?v=1620715277"></div><div class="custProductsCategory"><div class="prod-condition"><span class="link-water most-popular">Eczema</span><span class="Iceberg">Hemorrhoids</span><span class="Iceberg">Psoriasis</span><span class="Iceberg2">Burns &amp; Blisters</span><span class="Iceberg2">Dermatitis</span></div></div><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz" class="custOrangeButtonFill">Shop EMUAID®</a></li></ul></div></div></div><div class="custHpReturnFormWrapper"><div class="custHpReturnRightEmuaidProduct"><div class="custTreatWrapper"><h2>What condition do you want to treat?</h2><p>Find the right Emuaid product for you:</p></div><div class="custHpReturnFindEmuaid"><h5>I have</h5><div class="custHpReturnSelectDropdown"><button cust-pdp-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="custHpReturnDropMenu">Poison Ivy, Oak &amp; Sumac</button><ul class="custHpReturnConditionDropdown"><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Cold Sores</li><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Rashes</li><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Psoriasis</li><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Severe Boils</li><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Bumps &amp; Nodules</li><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Anal Itching</li><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Poison Ivy, Oak &amp; Sumac</li><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Neuropathy</li><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Athlete\'s Foot</li><li cust-url="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Nail Fungus</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Lichen Planus</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Eczema</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Bed Sores</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Hemorrhoids</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Lichen Sclerosus</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Cellulitis</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Dermatitis</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Burns &amp; Blisters</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Diabetic Ulcers</li><li cust-url="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Cracked Heels</li></ul></div><button class="custHpReturnOrangeBtnOutline">Find My Treatment</button></div></div></div><div class="custHpReturnReviewsFromUsers"><div class="container"><div class="row"><div class="custHpReturnReviewStarRating"><div><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span></div>Over 200,000 5-Star Reviews</div><h2>You\'re Not Alone. Real Reviews From People Like You</h2><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-1.png"><span>Cleared Chronic Nail Fungus</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-2.png"><span>Relieved Psoriasis Symptoms</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-3.png"><span>Eliminated Hemorrhoid Discomfort</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-4.png"><span>Soothed Backaches with Pain Relieving Cream</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-5.png"><span>Eased Pain and Prevented Infection from a 2nd Degree Burn</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-6.png"><span>Reduced Eczema Flare-up</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-7.png"><span>Ended 12 Years of Cystic Acne</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people-8.png"><span>Improved Quality of Life After a Decade of Lichen Sclerosus Pain</span></li></ul></div></div></div><div class="custHpReturnPhysiciansDermatologist"><div class="container"><div class="row"><div class="col-md-6"><h2>Recommended By Physicians. Dermatologist Tested.</h2><p>EMUAID<sup>®</sup> and EMUAIDMAX<sup>®</sup> has been <strong> clinically tested and researched for over 20 years, </strong>and was developed with the help of some of the world\'s industry leading chemists and physicists.</p><p>Our medical advisory board, composed of top professionals in medicine and holistic wellness, strengthens our commitment to researching, developing Return formulations, and exploring clinical applications for our products</p><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_chemicals.svg"><span>NO<br>Chemicals</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_artificial.svg"><span>NO Artificial<br>Preservatives</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_lanolin.svg"><span>NO Lanolin</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_petrochemicals.svg"><span>NO<br>Petrochemicals</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_parabens.svg"><span>NO Parabens</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no-steroids.svg"><span>NO Steroids</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_fragrance.svg"><span>NO<br>Fragrance</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/no_animal_testing.svg"><span>NO Animal<br>Testing</span></li></ul><a href="https://www.emuaid.com/pages/advisory-board" class="customHpReturnOrangeColorCTA">See What Dr\'s Say About EMUAID<span><sup>®</sup> </span></a></div><div class="col-md-6"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/dr-physicians.png"></div></div></div></div><div class="custHpReturnWorldMostVersatileBlock"><div class="container"><div class="row"><h2>The World\'s Most Versatile Treatment For Over 100+ Resistant Skin Conditions</h2><div class="custHpReturnSkinConditions"><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/hp-np-plant.svg"><span>Made With Natural Ingredients</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/dermatologist-tested.svg"><span>Dermatologist Tested & Non-Irritating Formula</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/hp-np-refund.svg"><span>30 Day Money-Back Guarantee</span></li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/improvemen.svg"><span>Get Noticeable Improvement within 24 Hours!</span></li></ul></div><div class="swiper custHpReturnEmuaidTreatmentProdSlider bm-top-prod"><div class="swiper-wrapper"><div class="swiper-slide"><a href="https://www.emuaid.com/products/emuaidmax-3"><div class="bm-most-popular">MOST POPULAR</div><div class="bm-prod"><h2 class="prod-title">EMUAIDMAX<sup>®</sup> First Aid Ointment 2oz</h2><div class="prod-description"><p>Faster and more intensive relief for skin infections:</p></div><div class="prod-condition"><span class="peppermint">Nail Fungus</span><span class="frost">Cold Sores</span><span class="frost2">Severe Boils</span><span class="quarter-spanish-white">Bumps &amp; Nodules</span><span class="quarter-spanish-white2">Athlete\'s Foot</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg?v=1620715257" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/emuaid-2"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup> First Aid Ointment 2oz</h2><div class="prod-description"><p>Relief for itchy, painful, and resistant skin conditions:</p></div><div class="prod-condition"><span class="link-water most-popular">Eczema</span><span class="Iceberg">Hemorrhoids</span><span class="Iceberg">Psoriasis</span><span class="Iceberg2">Burns &amp; Blisters</span><span class="Iceberg2">Dermatitis</span></div><div class="prod-img"><img src="https://www.emuaid.com/cdn/shop/products/2oz-regular-1000x1000_E_5000x.jpg" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/emuaid-pain-relieving-cream"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup> Pain Relieving Cream</h2><div class="prod-description"><p>Fast pain relief for:</p></div><div class="prod-condition"><span class="link-water">Aching muscles &amp; joints</span><span class="link-water2">Backaches</span><span class="link-water3">Nerve Pain</span><span class="link-water3">Inflammation</span><span class="french-lilac">Arthritis</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/Pain-Relieving-Cream.png?v=1662096655" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/therapeutic-moisture-bar"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup> Therapeutic Moisture Bar</h2><div class="prod-description"><p>Ultra-nourishing and cleansing for damaged skin:</p></div><div class="prod-condition"><span class="tara">Dermatitis</span><span class="link-water">Eczema</span><span class="Iceberg3">Psoriasis</span><span class="amour">Rosacea</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/Overnight-Acne-Treatment.png?v=1662096653" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/overnight-acne-treatment"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup> Overnight Acne Treatment</h2><div class="prod-description"><p>Guaranteed To Reduce the Size &amp; Severity of Any Blemish Overnight.</p></div><div class="prod-condition"><span class="amour2">Eliminates most stubborn blemishes</span><span class="link-water4">Blackheads</span><span class="vanilla-ice">Cystic Acne</span><span class="amour">Rosacea</span></div><div class="prod-img"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/overnight-acne-treatment.webp?v=1662096652" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/emuaid-first-defense-inhaler"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup> FIRST DEFENSE Inhaler</h2><div class="prod-description"><p>Essential oils provide:</p></div><div class="prod-condition"><span class="amour">Natural Relief from Seasonal Discomfort</span><span class="quarter-spanish-white2">Environmental Stress</span></div><div class="prod-img"><img src="https://www.emuaid.com/cdn/shop/products/inhaler-1000x1000_E_5000x.jpg" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div><div class="swiper-slide"><a href="https://www.emuaid.com/products/first-defense-probiotic"><div class="bm-prod"><h2 class="prod-title">EMUAID<sup>®</sup> FIRST DEFENSE Probiotic</h2><div class="prod-description"><p>Reduce imflammation and improve digestion with our unique blend of proven probiotics.</p></div><div class="prod-condition"><span class="link-water2">Replenish Healthy Bacteria To Defend Your Immune System From Attacks</span></div><div class="prod-img"><img src="https://www.emuaid.com/cdn/shop/products/IMG-EMA-S445-001_bfdc1d5a-a391-462f-8dff-ba5cfc0fd4c8_5000x.jpg" alt="Product Image"></div><div class="prod-arrow"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/leftarrow.png?v=1662096657" alt="Arrow"></div></div></a></div></div></div></div></div></div><div class="custHpReturnNatureInspired"><div class="container"><div class="row"><div class="custHpReturnNatureMobileImage"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/nature-inspired-mobile.png"></div><h2>Nature Inspired. Clinically Tested. Engineered for Efficacy.</h2><p>We have traveled the world in search of only <strong> scientifically proven ingredients backed by decades of research </strong></p><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/engineered-for-efficacy.png" class="custHpReturnNatureImage"><div class="custHpReturnNatureBannerInspired"><div class="custHpReturnMaximumStrengthBannerProd"><div class="custHpReturnMaximumProductImg"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_b0247168-f184-40fe-9f32-6d6d42ab9380_2000x.jpg?v=1620715257"></div><div class="custHpReturnMaximumProductName"><span>maximum strength</span><h3>EMUAIDMAX<sup>®</sup> First Aid Ointment 0.5oz</h3><p>Faster and more intensive relief for skin infections:</p></div><a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz">Shop EMUAIDMAX<small><sup>®</sup> </small></a></div><div class="custHpReturnMaximumStrengthBannerProd"><div class="custHpReturnMaximumProductImg"><img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaid_0.5oz_front_E_96de6a22-25ea-4a27-8d57-112ba3ed34cb_2000x.jpg?v=1620715277"></div><div class="custHpReturnMaximumProductName"><span>Regular Strength</span><h3>EMUAID<sup>®</sup> First Aid Ointment 0.5oz</h3><p>Relief for itchy, painful, and resistant skin conditions:</p></div><a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz">Shop EMUAID<small><sup>®</sup> </small></a></div></div></div></div></div><div class="custHpReturnMoneyBackGuaranteeBlock"><div class="container"><div class="row"><div class="custHpReturnNatureMobileImage"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/hp-money-back-guarantee-mobile.png"></div><h2>30 Day Money-Back Guarantee</h2><p>If you\'re not satisfied with your initial purchase, just let us know within 30 days of receiving your order and we\'ll give you a full refund. No questions asked.</p></div></div></div></div>').insertBefore('.shogun-root');

        if( jQuery('html body.bm-test-004 .bm-logo-section').length > 0 ){
            jQuery('html body.bm-test-004 .bm-logo-section').insertBefore('.custHpReturnNatureInspired');
        }

        var intSwiperCnt = 0;
        var intSwiperInterval = setInterval(function () {
            intSwiperCnt += 1;
            if (typeof Swiper !== 'undefined'){
                var swiper =  document.querySelector(".custHpReturnEmuaidTreatmentProdSlider");
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


//on button click open/close the dropdown
jQuery(document).on('click','.custHpReturnSelectDropdown .custHpReturnDropMenu', function (){
    jQuery(this).toggleClass('custHpReturnDropMenuActive');
});

//when user clicks outside the dropdown box and dropdown box is open, close it
jQuery(document).on('click', function (e) {
    if (jQuery(e.target).closest(".custHpReturnSelectDropdown .custHpReturnDropMenu").length === 0 && jQuery('.custHpReturnSelectDropdown .custHpReturnDropMenu').hasClass('custHpReturnDropMenuActive')) {
        jQuery('.custHpReturnSelectDropdown .custHpReturnDropMenu').removeClass('custHpReturnDropMenuActive');
    }
}); 

//on click of the li set the selected text to button and close the dropdown
jQuery(document).on('click','.custHpReturnSelectDropdown .custHpReturnConditionDropdown li', function (){
    var strSelectValue = jQuery(this).text().trim();
    var strSelectUrl = jQuery(this).attr('cust-url');
    jQuery('.custHpReturnSelectDropdown .custHpReturnDropMenu').text(strSelectValue);
    jQuery('.custHpReturnSelectDropdown .custHpReturnDropMenu').attr('cust-pdp-url',strSelectUrl);
    jQuery('.custHpReturnSelectDropdown .custHpReturnDropMenu').removeClass('custHpReturnDropMenuActive');
});

//redirect user to PDP on select of condition and 'Find My Treatment' CTA click  
jQuery(document).on('click','.custHpReturnOrangeBtnOutline', function (){
    var strSelectUrl = jQuery('.custHpReturnSelectDropdown .custHpReturnDropMenu').attr('cust-pdp-url');
    if( strSelectUrl!=='' ){
         window.location.href = strSelectUrl;
    }

});

//to horizontal click and drag scroller for the products tags which are below the banner 
const sliders = document.querySelectorAll('.custHpReturnProductCategories .prod-condition');
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

    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
});