var waitForJquery = setInterval(function() {  
if (typeof jQuery != 'undefined') {
	var intCount    = 0;
    var intInterval = setInterval(function (){
      intCount     += 1;
      if(jQuery('.template-index').length > 0 && jQuery('#main').length){
          addCustomHeroBannerV2();
      }

      if( intCount === 100 ) {
          clearInterval(intInterval);
      }
    },30);

  	function addCustomHeroBannerV2() {
      	if (jQuery('.custVideoBrandBannerV2').length == 0) {
          	jQuery('<div class="custVideoBrandBannerV2"><div class="custVideoBlockV2"><video id="custVideoV2" autoplay preload="auto" loop="loop" muted="muted" poster="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/charm-necklace-video-poster-v2.jpg"> <source src="https://cdn4.fireworktv.com/medias/2022/11/25/1669374886-jytsudig/watermarked/540/2022-01-1717.31.562753283949614885318_7030873959.mp4"></video></div><div class="custImageBlockV2"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/woman-with-ring.jpg"></div><div class="custTextBlockV2"><h2>Custom meaningful jewelry</h2><p>Personalize our jewelry with meaningful engravings to celebrate the people, places and moments worth remembering.</p><a href="https://www.customcuff.co/collections/best-sellers" class="custShopButtonV2">SHOP NOW</a></div></div>').prependTo('#main');
      	}
    }
    clearInterval(waitForJquery);  
    }
}, 50);