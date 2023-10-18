var waitForjQuery = setInterval(function() {
	
	if (typeof jQuery != 'undefined') {
		console.log("%c Emuaid042: Hero Condition Selection (HP)", "background:red;color : white;padding:10px");

		addCustomCtaToHP();

		function addCustomCtaToHP() {
			if(jQuery('.custHeroInsider').length == 0 ) {
				jQuery('<div class="custHeroInsider"> <div class="custHeroRecommendation"> <div class="custRecommendHeader"><div class="custRecommendHeaderLeft"> <div class="custSubTitle"> Doctor Recommended Natural Treatments </div><h1>The Most Advanced Form of Natural Healing Without a Prescription</h1> <h2> What condition would you like to treat? </h2> </div><div class="custRecommendHeaderRight"> </div></div><div class="custConditions"> <a href="https://www.emuaid.com/products/emuaidmax-first-aid-ointment-0-5oz" class="box quarter-spanish-white"> Nail Fungus </a> <a href="#" class="box quarter-spanish-white2"> Toe Nail Fungus </a> <a href="#" class="box frost2"> Genital Warts </a> <a href="#" class="box peppermint"> Hemorrhoids </a> <a href="#" class="box frost"> Anal Itching </a> <a href="#" class="box link-water"> Lichen Sclerosus </a> <a href="#" class="box link-water3"> Athlete\'s foot </a> <a href="#" class="box french-lilac"> Scabies </a> <a href="#" class="box vanilla-ice"> Eczema </a> </div><div class="custPeopleWraper"> <div class="custLeft"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/people.png"> </div><div class="custRight"> <div class="custReviewTitle">3+ Million people served</div><div class="custReviewsBox"> <div class="text"> Over 146,000 </div><div class="jdgm-prev-badge__stars"> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> <span class="jdgm-star jdgm--on"></span> </div><div class="text"> reviews! </div></div></div></div></div></div>').prependTo('body.index .shg-fw .bm-hero-section .bm-container');
			}
		}

  		clearInterval(waitForjQuery);
	}

}, 50);