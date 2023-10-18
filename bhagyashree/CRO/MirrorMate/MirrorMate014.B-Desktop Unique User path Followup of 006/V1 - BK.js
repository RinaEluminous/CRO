var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
				
		updateHpFrameCtaLinkDesktop();
		
    	function updateHpFrameCtaLinkDesktop(){
    		var strLink = 'https://www.mirrormate.com/collections';

			if(jQuery('.shopify-section .fab--content .fab--link .btn-theme:contains( Shop Frame Kits)').length > 0){
				jQuery('.shopify-section .fab--content .fab--link .btn-theme:contains( Shop Frame Kits)').attr('href',strLink);
			}

			if(jQuery('.shopify-section .frame-background .frame-button a.btn.btn-theme:contains(Shop Frames)').length > 0 ){
				jQuery('.shopify-section .frame-background .frame-button a.btn.btn-theme:contains(Shop Frames)').attr('href',strLink);
			}
    	}
    	
		clearInterval(waitForJquery);
    }
}, 50);   