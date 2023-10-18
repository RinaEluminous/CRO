var yearFlag = 0, clientFlag = 0, debtFlag = 0, flag = 0; 
restructuredHomePageHtml();


  function elementInView(elem){
    var elementTop     = jQuery(elem).offset().top;
    var elementBottom  = elementTop + jQuery(elem).outerHeight();
    var viewportTop    = jQuery(window).scrollTop();          
    var viewportBottom = viewportTop + jQuery(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };


	if(jQuery('.custHomePageWrapper .custGoalSection_hp').length > 0 ){
    if (elementInView(jQuery('.custHomePageWrapper .custGoalSection_hp'))) {
      if(flag == 0){
        flag = 1;
        startHpCounters();
      }
    }
  }

	function restructuredHomePageHtml(){
		if(jQuery(".custHomePagebodyWrapper").length == 0 ){
	  	jQuery('<div class="custHomePageWrapper"> <div class="custHomePageFeedbackSection"> <div class="container"> <h3>Hear How We Have Helped Other Canadians Just Like You <span>Follow these 5 clients on their journey from struggling with overwhelming debt to new hope and optimism on the path to rebuilding their worth</span> </h3> <div class="swiper custFeedbackSwiper_hp"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> </div><div class="quotes">Amy, a single mother of 4, struggles to make it through the stress brought on by unmanageable debt while she provides for her family. Amy shares here story of how she found a solution to eliminate her debt and is back on the path to rebuilding her worth.</div><cite>Amy</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/g4JzjMhjUSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> </div><div class="quotes">Adam takes us through his journey of dealing with stress and unmanageable debt brought on by a separation and a period of under employment. </div><cite>Adam</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/IicbbQVz3rs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> </div><div class="quotes">George struggles to keep afloat during a very stressful period of financial hardship, while staying at his wife\'s side during critical illness.</div><cite>George</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/hA8o_pvKeKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> </div><div class="quotes">Struggling with injury and job loss, Linda\'s financial situation deteriorates with unmanageable debt.</div><cite>Linda</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/HkiBb6KJBKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div><div class="swiper-slide"> <div class="row"> <div class="col-sm-6"> <div class="feedbackBox"> <div class="starRatings"> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> <span> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/green_star_icon.svg" alt=""> </span> </div><div class="quotes">Explore Linda\'s story as she recovers from an injury, family hardship and the resulting devastating debt.</div><cite>Linda P</cite> </div></div><div class="col-sm-6"> <div class="videoBox"> <iframe width="560" height="315" src="https://www.youtube.com/embed/3prKnmibfuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></div></div></div></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div></div><div class="custGoalSection_hp"> <div class="container"> <h2>Bromwich+Smith Has Helped Thousands Of Canadians Eliminate Debt Since 2002. We Can Help You Too!</h2> <div class="row"> <div class="col-sm-4"> <div class="box"> <h3> <span class="customCount custHpYearCounter">0</span> years </h3> <p>for over 20 years we have been helping Canadians just like you get out of debt</p></div></div><div class="col-sm-4"> <div class="box"> <h3> <span class="customCount custHpClientsCounter">0</span>+ clients </h3> <p>We have helped 30845 Canadians find debt relief</p></div></div><div class="col-sm-4"> <div class="box"> <h3>$<span class="customCount custHpDebtCounter">0</span> Billion + </h3> <p>We have eliminated $3,340,051,963 in personal Canadian debt</p></div></div></div></div></div><div class="ListendHelpSection"> <div class="container"> <div class="ListendHelpMain"> <div class="custContent"> <h3> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/consulting.png" alt="We Are Here To Listen And Help"/> We Are Here To Listen And Help </h3> <p> <strong>Compassionate & Confidential</strong> Wherever you are, whenever you need us. All services available virtually, 7 days a week. </p></div><div class="custBookBtnWrapper"> <a href="https://www.bromwichandsmith.com/contact-us" class="btn fill">Book A Free Consultation</a> <a href="tel:1-855-884-9243" class="btn outline">Call: 1-855-884-9243</a> </div></div></div></div><div class="reliefSolution_hp"> <div class="container"> <h3>Complete Debt Relief Solutions</h3> <div class="workingCanadian"> <div class="row"> <div class="col-sm-6"> <h4>Working for Canadians</h4> <p>It\'s our mission to work in the best interest of Canadians suffering from overwhelming debt. In 2017, Bromwich+Smith successfully lobbied the federal government to allow us to return excess bankruptcy payments. In 2019 we were the first Canadian trustees to introduce virtual appointments and document signing to provide the best possible service, regardless of location or mobility.</p><p>If you need debt relief across Canada, the team at Bromwich+Smith is the answer.</p><p>We have helped thousands of Canadians eliminate debt since 2002. We can help you too!</p></div><div class="col-sm-6"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/flag_img.png"> </div></div></div></div><div class="custSReliefSolutions"> <div class="row"> <div class="col-sm-6"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/consultation_img.png"> </div></div><div class="col-sm-6"> <div class="greenBox"> <h4>Debt Relief Consultation</h4> <p>Free and confidential debt relief consultation, with no obligation. Spend up to thirty minutes on the phone with one of our trained and experienced Debt Relief Specialists to determine the best solution to get control of your debt. They know how to handle debt relief in Canada, including CRA taxes, credit cards, bills and more. Considering a debt consolidation loan, debt management plan, or payday loan? Call us for debt help first! </p><a href="https://www.bromwichandsmith.com/debt-relief-consultation">Learn More</a> </div></div></div><div class="row reverse"> <div class="col-sm-6"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/consumer_proposal.png"> </div></div><div class="col-sm-6"> <div class="greenBox"> <h4>Consumer Proposal</h4> <p>Pay only a fraction of your debt over 5 years with no additional fees and interest free through a legally binding Consumer Proposal that will stop all collection action. Only Licensed Insolvency Trustees like the debt relief specialists at Bromwich+Smith can make an interest-free debt settlement like this happen.</p><a href="https://www.bromwichandsmith.com/consumer-proposal">Learn More</a> </div></div></div><div class="row"> <div class="col-sm-6"> <div class="imgBox"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/bankruptcy_img.png"> </div></div><div class="col-sm-6"> <div class="greenBox"> <h4>Declare Bankruptcy</h4> <p>Bankruptcy can seem scary, but with the thoughtful, knowledgeable, and helpful team at Bromwich+Smith you can make a fresh start and get busy rebuilding your credit right away. Before recommending filing a bankruptcy, all other debt relief options are explored (including debt consolidation, debt forgiveness, consumer proposals, and credit counseling). In some debt situations, personal bankruptcy is the best solution. The good news is that working with a Debt Relief Specialist Bromwich+Smith, you can start fresh debt-free in as little as 9 months.</p><a href="https://www.bromwichandsmith.com/bankruptcy">Learn More</a> </div></div></div></div></div></div><div class="custTestimonialWraper_hp"> <div class="container"> <iframe src="https://embedsocial.com/api/reviews/widget/6c93c4f3c8e14b81ff6176e125eb52bbf9fcc5dc/"></iframe> </div></div><div class="custConsumerProposal_hp"> <div class="container"> <h2> Consumer Proposal? Bankruptcy? You Have Options! </h2> <h3> Getting out of debt has never been easier <span>Our simple debt relief process is tailored to you and your needs</span> </h3> <div class="row"> <div class="col-sm-4"> <div class="proposalBox_hp"> <div class="icon number"> 1 </div><h5>Book A Call</h5> <p>Wherever you are, whenever you need us. All services available virtually, 7 days a week.</p></div></div><div class="col-sm-4"> <div class="proposalBox_hp"> <div class="icon number"> 2 </div><h5>Speak to a Licensed Debt Trustee</h5> <p>Our friendly, experienced and compassionate team help you understand all your options</p></div></div><div class="col-sm-4"> <div class="proposalBox_hp"> <div class="icon number"> 3 </div><h5>Choose your plan</h5> <p>Select the best fit for you and your circumstances</p></div></div><div class="col-12"> <div class="proposalBox_hp fullwidth"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/bromwichandsmith/speak_icon.svg"> </div><div class="content"> <h5>See how much better you will feel once you speak with us</h5> <p>Secure | Confidential</p></div><div class="btnWrap"> <a href="https://www.bromwichandsmith.com/contact-us" class="btn fill">Book Your Debt Relief Call</a> </div></div></div></div></div></div><div class="awardWinningSection_hp"> <div class="container"> <h3>Award-Winning Service With Integrity. Nationwide.</h3> <div class="row"> <div class="col-sm-6"> <div class="greyBox"> <p>It caught us completely by surprise to be voted the Toronto Star Readers\' Choice in 2019 - we didn\'t even know that we had been nominated - the nomination and award were entirely the work of our clients! We\'re proud of having won that award again in 2020, along with Three Best Rated. In 2021, we have been nominated for the Toronto Star Readers\' Choice and the Alberta Business Awards of Distinction, and we have been voted Top Choice Mark of Excellence in Edmonton and received a Torch Award from the Better Business Bureau of southern Alberta and the Kootenays. Our commitment to earning the trust of our clients is recognized across the country.</p><div class="btnWrap"> <a href="https://www.bromwichandsmith.com/contact-us" class="btn fill">Click to Book A Free Consultation</a> </div></div></div><div class="col-sm-6"> <div class="greyBox"> <p>At Bromwich+Smith, we understand the stress that debt can have on all aspects of your life. Our team of Debt Relief Specialists is here to assist you with unbiased and nonjudgmental help, finding the right solution that will eliminate your debt and get you back on track to rebuilding your worth today. You can rest assured, no matter how complicated you may believe your financial situation to be, there are always options to explore. Your consultation is always free and can take place on the phone from the convenience of your home.</p><p> <a href="https://www.bromwichandsmith.com/contact-us">Ask Us Your Questions</a> | <a href="https://www.bromwichandsmith.com/contact-us">Book Your Free Consultation</a> </p><div class="btnWrap"> <a href="https://www.bromwichandsmith.com/contact-us" class="btn fill">Get Answers To All Your Questions</a> </div></div></div></div></div></div><div class="custNewsSection_hp"></div><div class="custFreeConsultationWraper_hp"> <div class="container"> <div class="row"> <div class="custHomePageBookBanner"> <div class="col-12"> <div class="row"> <div class="innerWraper"> <div class="custBookContent"> <h3>Free Consultation. Never A Cost. No Obligation.</h3> <p>Unbiased | Compassionate | Confidential. Your FREE DEBT RELIEF CONSULTATION takes place on the phone from the comfort of your home.</p></div><div class="custBookBtnWrapper"> <a href="https://www.bromwichandsmith.com/contact-us" class="btn fill">Book A Free Consultation</a> <a href="tel:1-855-884-9243" class="btn outline">Call: 1-855-884-9243</a> </div></div></div></div></div></div></div></div><div class="custHomePageFaqSection"> <div class="container"> <h3>Frequently Asked Questions <span>Here are answers to some of the most common questions asked by people in your situation. Don\'t see your question listed? Please <a href="https://www.bromwichandsmith.com/contact-us">contact us</a> for advice. </span> </h3><div class="tab"> <input type="radio" name="faq" id="chck2"> <label class="tab-label" for="chck2">Will a consumer proposal or bankruptcy affect my credit score?</label> <div class="tab-content"> <p>Consumer proposals will remain on your credit report for three (3) years after you complete your proposal, OR six (6) years from the file date whichever comes first. Read more about consumer proposals</p><p>A Bankruptcy will be reported for six (6) years after you complete your bankruptcy (fourteen (14) years if you have been bankrupt before). Read more about bankruptcy</p><p>Creditors use these ratings to determine risk and to set your cost of borrowing. However, even while in a restructuring program, you can start to rebuild your credit right away, and Bromwich+Smith has the tools and resources to help you do so. </p></div></div><div class="tab"> <input type="radio" name="faq"id="chck3"> <label class="tab-label" for="chck3">How much does a consumer proposal cost?</label> <div class="tab-content"> <p>With a Consumer Proposal, you pay no professional fees. All costs of Bromwich+Smith are paid by the proposal funds, subject to a government mandated tariff. The amount you will offer in a proposal is tailor made and based upon your income, expenses, assets and who your creditors are.</p></div></div><div class="tab"> <input type="radio" name="faq"id="chck4"> <label class="tab-label" for="chck4">How much does a bankruptcy cost?</label> <div class="tab-content"> <p>A first bankruptcy will cost approximately $1,600. A second will cost approximately $1,900. The portion of what you originally owe (and will pay back) is determined by the value of any non-exempt assets, surplus income remaining after exemptions for maintaining a reasonable standard of living, and other sources of income like tax and GST refunds.</p></div></div><div class="tab"> <input type="radio" name="faq"id="chck5"> <label class="tab-label" for="chck5">Is a consumer proposal the same as a consolidation loan?</label> <div class="tab-content"> <p>Consumer proposals are different from <a href="https://www.bromwichandsmith.com/debt-consolidation">consolidation loans</a>. <p>A consolidated loan does not have a negative impact on your credit rating, while a consumer proposal will. However, a consolidation loan will result in you paying back significantly more than the amount you are owing today because of the application of interest, whereas a Consumer Proposal typically allows you to pay back only a percentage of what you owe today, with no interest. Further, a consolidation loan will require that you pledge assets and/or obtain co-signers for the loan, while no such requirements are needed for a Consumer Proposal</p></div></div><div class="tab"> <input type="radio" name="faq"id="chck6"> <label class="tab-label" for="chck6">Will a consumer proposal or bankruptcy affect my spouse, partner, or family members?</label> <div class="tab-content"> <p>Unless someone else has co-signed, guaranteed, or otherwise jointly holds credit cards on the same account as you, your debts are only yours. You are legally responsible for them. Whether you choose a consumer proposal or bankruptcy, it won\'t affect anyone else\'s credit rating, nor will anyone else have to pay for the debt or change their creditor relationships. Read more about it in the <a href="https://www.bromwichandsmith.com/blogs/bankruptcy-protection">bankruptcy protection</a> blog. </p></div></div><div class="tab"> <input type="radio" name="faq"id="chck7"> <label class="tab-label" for="chck7">What happens to co-signers or joint account holders?</label> <div class="tab-content"> <p>When someone co-signs for a debt, they agree to make the payments on the loan or account when you\'re unable to. If a friend or loved one co-signs one of your loans, or if you jointly hold credit cards, the creditor will turn to that person and demand they continue making payments as agreed, or that they pay off the entire balance owed.</p></div></div></div></div></div><div class="custTestimonialSection_hp"> <div class="container"> <div class="row"> <div class="col-md-8 col-md-offset-2"> <div class="view__row"> <p>My wife and I really appreciated all the information provided to us and the way professionals at Bromwich & Smith treated us with dignity. They really helped us to make the right decision, and I would definitely recommend them to anyone who is going through difficult times because of debt.</p><p class="pull-right">- Lawrence K.</p></div></div></div></div></div></div>').insertBefore('.page--front #content-wrapper main article.landing-page .node__content #tile-3164');


        if(jQuery('div[id^=tile-]:contains(In the News)').length > 0){
          jQuery('div[id^=tile-]:contains(In the News)').appendTo('.page--front .custNewsSection_hp');

          if(jQuery('.custsubNewsHeading').length == 0){
              jQuery('<span class="custsubNewsHeading">Stay up to date on all of the Bromwich+Smith news.</span>').appendTo('.page--front .custNewsSection_hp #tile-4861 h3');
          }

          jQuery('.custNewsSection_hp footer a[href="/news"]').text('Read more')

        }


    	  if(jQuery('#custSwiperSliderJS').length == 0){
    		  jQuery( "head" ).append( '<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js" id="custSwiperSliderJS"></script>');
    	  }

    	  if(jQuery('#custSwiperSliderCSS').length == 0){
    		  jQuery( "head" ).append( '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.css" id="custSwiperSliderCSS" />');
    		 
    	  }

        var intTimeCount = 0 ;
        var intInterval = setInterval(function () {
            intTimeCount += 1;
    		    if (typeof Swiper !== 'undefined') {
        			  var swiper = new Swiper(".custFeedbackSwiper_hp", {
        					slidesPerView: 1,
        					spaceBetween: 60,
        				  pagination: {
        					  el: ".swiper-pagination",
        					  clickable: true,
        					  type: 'bullets',
        				  },
        					navigation: {
        					 nextEl: ".swiper-button-next",
        					 prevEl: ".swiper-button-prev",
        				  },
        			  });

                clearInterval(intInterval);
    		  }
          if(intTimeCount === 60){
            clearInterval(intInterval);
          }
	   }, 100);

	  /*Counter*/
	  function startHpCounters(){
	    
        if(jQuery('.custHpYearCounter').length > 0){
	        if (elementInView(jQuery('.custHpYearCounter'))) {
	            if(yearFlag == 0) {
	              yearFlag = 1;
	              
	              jQuery('.custHpYearCounter').prop('Counter',0).animate({
	                    Counter: 20
	              }, {
	                duration: 2000,
	                speed : 'slow',
	                easing: 'swing',
	                step: function (now) {
	                  jQuery('.custHpYearCounter').text(Math.ceil(now));
	                }
	            });
	          }        
	        }
      	}


      if(jQuery('.custHpClientsCounter').length > 0){
        if ( elementInView(jQuery('.custHpClientsCounter')) ){
          if(clientFlag == 0) {
              clientFlag = 1;
             
              jQuery('.custHpClientsCounter').prop('Counter',0).animate({
                    Counter: 30000
                },{
                  duration: 2000,
                  speed : 'slow',
                  easing: 'swing',
                  step: function (now) {
                    jQuery('.custHpClientsCounter').text(Math.ceil(now));
                  }
              });
          }        
        }
      }

      if(jQuery('.custHpDebtCounter').length > 0){
        if (elementInView(jQuery('.custHpDebtCounter'))){
          if(debtFlag == 0){
              debtFlag = 1;

              jQuery('.custHpDebtCounter').prop('Counter',0).animate({
                Counter: 3
              }, {
                duration: 1500,
                speed : 'slow',
                easing: 'swing',
                step: function (now) {

                  jQuery('.custHpDebtCounter').text(Math.ceil(now));
                }
            });
          }        
        }
      }
    }
    /*counter end*/

    jQuery(window).scroll(function() {
        startHpCounters();
    });

	}
}