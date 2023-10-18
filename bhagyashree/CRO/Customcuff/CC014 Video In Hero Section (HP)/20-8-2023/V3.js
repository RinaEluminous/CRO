var waitForJquery = setInterval(function() {  
if (typeof jQuery != 'undefined') {

	var intCount    = 0;
    var intInterval = setInterval(function (){
      intCount     += 1;
      if(jQuery('.template-index').length > 0 && jQuery('#main').length){
          addCustomHeroBannerV3();
      }

      if( intCount === 100 ) {
          clearInterval(intInterval);
      }
    },30);

  	function addCustomHeroBannerV3() {
      	if (jQuery('.custVideoBrandBannerV3').length == 0) {
          	jQuery('<div class="custVideoBrandBannerV3"><div class="custVideoBlockV3"><video id="custVideoV3" autoplay preload="auto" loop="loop" muted="muted" poster="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/custom-bar-necklace-video-poster-v3.jpg"> <source src="https://cdn4.fireworktv.com/medias/2023/3/23/1679579127-ckybogxa/watermarked/540/97febbe33eb540e3b783348862d6eb64.mp4"></video></div><div class="custImageBlockV3"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/man-with-bar-necklace.jpg"></div><div class="custTextBlockV3"><h2>Custom meaningful jewelry</h2><p>Personalize our jewelry with meaningful engravings to celebrate the people, places and moments worth remembering.</p><a href="https://www.customcuff.co/collections/best-sellers" class="custShopButtonV3">SHOP NOW</a></div></div>').prependTo('#main');
		}
  	}
  	clearInterval(waitForJquery);  
    }
}, 50);