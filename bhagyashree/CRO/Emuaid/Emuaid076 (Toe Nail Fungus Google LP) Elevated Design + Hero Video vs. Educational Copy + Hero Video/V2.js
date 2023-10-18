onToeNailFungusLpV2();

function onToeNailFungusLpV2(){
	var timesRun = 0;
	var interval = setInterval(function(){
		timesRun += 1;
		
		if(jQuery('.page-shogun-default .shogun-root').length > 0){
			//function to add custom Video section
			addCustNewVideoToToeNailFungusLpV2();
		}
		
		if(timesRun === 80){
			clearInterval(interval);
		}
	}, 30);	
}


function addCustNewVideoToToeNailFungusLpV2(){
	if(jQuery('#s-d4f4d888-0570-4ed8-b560-d86c77cac3ed .shg-box-content').first().length > 0){
		jQuery('#s-d4f4d888-0570-4ed8-b560-d86c77cac3ed .shg-box-content').first().addClass('custMainLpV2');
	}
    
	if(jQuery('#s-94ed6428-eaed-4448-95b6-1656e7a70b0f .bm_rightbox_content').length > 0){
	    jQuery('#s-94ed6428-eaed-4448-95b6-1656e7a70b0f .bm_rightbox_content').addClass('custVideoText');
	}

    
    if(jQuery('.custVideoText').length > 0 && jQuery('.custEmuaidVideoLpV2').length == 0 && jQuery('.custEmuaidVideoLpV2').length == 0){

        jQuery('<video class="custEmuaidVideoLpV2" autoplay="" preload="auto" loop="loop" muted="muted" playsinline="" poster="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid_edited-poster.png"><source src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/emuaid_edited.mp4" type="video/mp4"></video><div class="custReviewLpV2"><p>"I\'ve had bad to nails for over 10 years. I hated wearing flip flops. I\'ve tried all kind of remedies and I decided to give it a shot...this stuff actually works! It\'s the real deal. Anyway hope this helps someone. Give it a try."</p><div><div class="custTextWrapperBlocksLpV2"><div class="custBlueTextLpV2">- Alejandro</div><span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/np_verified-oran.png"></span><span>Emuaid Verified Buyer</span></div><div class="custBlueStarLpV1"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/dark-blue-stars.png"></div></div></div>').appendTo('#s-94ed6428-eaed-4448-95b6-1656e7a70b0f .bm_rightbox_content');
    }

}
