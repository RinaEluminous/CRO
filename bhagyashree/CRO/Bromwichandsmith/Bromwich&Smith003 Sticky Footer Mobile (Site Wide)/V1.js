var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {
  	if(jQuery('.custStickyFooterQualifyPopup').length == 0 && sessionStorage.getItem("isFooterQualifyPopupClosed") === null){
  		jQuery('<div class="custStickyFooterQualifyPopup"><span class="close-btn"></span><div class="inner"><h4><span class="icon call"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/call-green-icon.svg"></span>TALK WITH A DEBT RELIEF specialist</h4><h3>Get free advice on how to deal with your debt and get your finances back on track</h3><p>Free consultation or call</p><div class="bookBtnWraper"><a href="https://www.bromwichandsmith.com/contact-us" class="btn fill custFindOutCTA">Find out if you qualify</a><a href="tel:1-855-884-9243" class="btn outline custContactCTA">Call: 1-855-884-9243</a></div></div></div>').appendTo('body');
  	}
  	
  	jQuery(document).on('click','.custStickyFooterQualifyPopup span.close-btn,.custStickyFooterQualifyPopup .bookBtnWraper a.btn.fill.custFindOutCTA,.custStickyFooterQualifyPopup .bookBtnWraper a.btn.outline.custContactCTA', function() {
		jQuery('.custStickyFooterQualifyPopup').fadeOut();
		sessionStorage.setItem('isFooterQualifyPopupClosed','1');
  	});
  
	clearInterval(waitForjQuery);
  }
}, 50);