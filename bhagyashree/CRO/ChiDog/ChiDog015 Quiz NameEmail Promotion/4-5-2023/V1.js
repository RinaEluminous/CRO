var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {
    	
    	if(jQuery('.quiz_mainContainer').length > 0){
			addCustomBannerToQuiz();
    	}
		
		function addCustomBannerToQuiz(){

			if(jQuery('.custOffersBanner').length == 0){
				jQuery('<div class="custOffersBanner"><h4>RECEIVE 20% OFF</h4><small>Your First Order Today!!!</small></div>').insertBefore('.quiz_mainContainer .dog_quizWrapper[step-name="yourInfo"] .quiz_leftColumn .quiz_stepHeading').length;
			}
		}

 		clearInterval(waitForjQuery);
    } 
}, 50);
