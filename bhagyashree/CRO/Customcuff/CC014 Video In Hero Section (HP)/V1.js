	if(jQuery('.template-index').length > 0){
		addCustomHeroBanner();
	}

	function addCustomHeroBanner(){
		if(jQuery('.custVideoBrandBanner').length == 0 ) {
			jQuery('<div class="custVideoBrandBanner"><div class="custImageBlock"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/woman-with-jewelry.jpg"></div><div class="custVideoBlock"><video id="custVideo" autoplay preload="auto" loop="loop" muted="muted"> <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374705-hqkwiuoe/watermarked/540/2022-11-0117.11.372962009533729020191_7030873959.mp4"> Your browser does not support the video tag.</video></div><div class="custTextBlock"><h2>Custom meaningful jewelry</h2><p>Personalize our jewelry with meaningful engravings to celebrate the people, places and moments worth remembering.</p><a href="#" class="custShopButton">SHOP NOW</a></div></div>').prependTo('#main');
		}

		setTimeout(function () {
			jQuery('body').css('opacity','1');
		},2000);
	}