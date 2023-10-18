var waitForjQuery = setInterval(function() {
	if (typeof jQuery != 'undefined') {

		addCustomCtaToHP();

		function addCustomCtaToHP() {
			
			if(jQuery('.custHeroInsider').length == 0 ) {
				jQuery('<div class="custHeroInsider"> <div class="custHeroRecommendation"> <div class="custRecommendHeader"> <div class="custRecommendHeaderLeft"> <div class="custSubTitle"> Doctor Recommended Natural Treatments </div><h1>The Most Advanced Form of Natural Healing Without a Prescription</h1> <h2> What condition would you like to treat? </h2> </div><div class="custRecommendHeaderRight"> </div></div><div class="custConditions"> <a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="box quarter-spanish-white"> Nail Fungus </a> <a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="box quarter-spanish-white2"> Toe Nail Fungus </a> <a href="https://www.emuaid.com/products/emuaid-2" class="box frost2"> Genital Warts </a> <a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz" class="box peppermint"> Hemorrhoids </a> <a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="box frost"> Anal Itching </a> <a href="https://www.emuaid.com/collections/shop/products/emuaidmax-3" class="box link-water"> Lichen Sclerosus </a> <a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="box link-water3"> Athlete\'s foot </a> <a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="box french-lilac"> Scabies </a> <a href="https://www.emuaid.com/collections/shop/products/emuaidmax-3" class="box vanilla-ice"> Eczema </a> </div><div class="custPeopleWraper"> <div class="custLeft"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people.png"> </div><div class="custRight"> <div class="custReviewTitle">3+ Million people served</div><div class="custReviewsBox"> <div class="text"> Over 146,000 </div><div class="jdgm-prev-badge__stars"> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> </div><div class="text"> reviews! </div></div></div></div></div></div>').prependTo('body.index .shg-fw .bm-hero-section .bm-container');

			//manage the subtitle margin-top
			if(jQuery( window ).width() <= 767){
				if(jQuery('.custQuizeBanner').length > 0){
					jQuery('.custHeroInsider .custRecommendHeader .custRecommendHeaderLeft .custSubTitle').css('margin-top','30px');
				}
				else{
					jQuery('.custHeroInsider .custRecommendHeader .custRecommendHeaderLeft .custSubTitle').css('margin-top','0');
				}

				var timesRun = 0;
				var interval = setInterval(function(){
				    timesRun += 1;
				    if(jQuery('.custQuizeBanner').length == 0){
						jQuery('.custHeroInsider .custRecommendHeader .custRecommendHeaderLeft .custSubTitle').css('margin-top','0');
						clearInterval(interval);
					}
				    if(timesRun === 60){
				        clearInterval(interval);
				    }
				}, 120);

			}

		}

		jQuery(document).on('click','.custQuizeBanner button.btn-close', function() {
			jQuery('.custHeroInsider .custRecommendHeader .custRecommendHeaderLeft .custSubTitle').css('margin-top','0');
		});
  
    }

  clearInterval(waitForjQuery);
}

}, 50);