var waitForJquery = setInterval(function () {

  if (typeof jQuery != "undefined") {
  
        if(jQuery(".product").length > 0) {
        var arrExcludedProducts = [
          "/products/dust-bag",
          "/products/honey-leather-cleaner",
          "/products/gift-card",
          "/products/leather-honey-cleaner",
          "/products/elephant-charm-keychain",
          "/products/sunglass-case",
          "/products/luggage-tag",
          "/products/coin-case",
          "/products/fox-charm-keychain",
          "/products/sash-keychain",
        ];

       var strCurrenntLocationPath = window.location.pathname;
        if (jQuery.inArray(strCurrenntLocationPath, arrExcludedProducts) == -1) {
            addCustSocialProofElementOnPDP();
        }
      }
    
    function addCustSocialProofElementOnPDP() {

      var custStockHtml = '';
      if(jQuery(".product .product__description p").eq(0).find('span[style="color: #2b00ff;"]').length > 0){
        custStockHtml = jQuery(".product .product__description p").eq(0).find('span[style="color: #2b00ff;"]').text();
        jQuery(".product .product__description p").eq(0).find('span[style="color: #2b00ff;"]').hide();
      }else if(jQuery(".product .product__description p").eq(0).find('font[color="#2b00ff"]').length > 0){
        custStockHtml = jQuery(".product .product__description p").eq(0).find('font[color="#2b00ff"]').text();
        jQuery(".product .product__description p").eq(0).find('font[color="#2b00ff"]').hide();
      }else if(jQuery(".product .product__description").find('span[style="color: #2b00ff;"]:first').length > 0){
        custStockHtml = jQuery(".product .product__description").find('span[style="color: #2b00ff;"]:first').text();
        jQuery(".product .product__description").find('span[style="color: #2b00ff;"]:first').hide();
      }


      console.log("text",custStockHtml);

      // if( jQuery('main#MainContent .product .product__info-container .product__description p:contains(In stock- ships in 1-3)').length > 0){
      //   jQuery('main#MainContent .product .product__info-container .product__description p:contains(In stock- ships in 1-3)').hide();
      // }
      
      //add product details 

      if(jQuery('.product__info-container .product__description').length > 0 && jQuery('.custReviewMainWraper').length == 0 ){

      
        var custProductDetailsHtml ='<div class="custReviewMainWraper">'+
                                  '    <div class="custShippingMsg">'+
                                  '    <strong>'+custStockHtml+'</strong>'+
                                  '    <strong>30 day money back guarantee.</strong>'+
                                  '    </div>'+
                                  '    <div class="custSeeWhyBox">'+
                                  '        <h4>See why <b>over 250K bags</b> have been sold <span><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/down_direction_hand.svg" alt="down direction emoji"></span></h4>'+
                                  '        <h6>Sash Bags are <b>rated 4.7 out of 1,358 Reviews</b></h6>'+
                                  '    </div>'+
                                  '    <div class="custGreyReviewBox">'+
                                  '        <div class="starRatings">'+
                                  '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                                  '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                                  '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                                  '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                                  '            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                                  '        </div>'+
                                  '        <div class="reviewQuote">'+
                                  '            "I love my sash! <b>Keeps everything so organized and is unbelievably comfortable</b> that I actually forget I am even wearing it. I highly recommend the bag, I use it everyday."'+
                                  '        </div>'+
                                  '        <div class="reviewAuthor">'+
                                  '            <div class="name">– Sharon K.</div>'+
                                  '            <div class="verifyMain">'+
                                  '                <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer">'+
                                  '                Verified Customer'+
                                  '            </div>'+
                                  '        </div>'+
                                  '    </div>'+
                                  '    <button class="showMore">'+
                                  '        Show more reviews'+
                                  '    </button>'+
                                  '</div>';
      
      jQuery(custProductDetailsHtml).prependTo('.product__info-container .product__description');

    }

    //add Reviews
    if(jQuery('main#MainContent [class*="__product-recommendations"]').length > 0 && jQuery('.custReviewMainBoxWraper').length == 0){
      var custReviewsHtml = '<section class="custReviewMainBoxWraper">'+
                            '    <div class="page-width">'+
                            '        <h2>See what the Sash Community is saying</h2>'+
                            '        <div class="custTestiWrapperRow">'+
                            '            <div class="custTestiWrapper">'+
                            '                <div class="custTestiBox order-1">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>Wonderful handbag!</b>"It is the perfect bag for someone with back problems because it’s design make it so you have the weigh distributed! Soft luxurious leather! Very up scale!"'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <!-- <div class="name">– Sharon K.</div> -->'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox  order-4">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>Great quality, very comfortable, and uniquely stylish</b> "I absolutely love all of the pockets on this bag! It makes organizing super easy and I know where everything is now. There is no more digging in my huge purse for my phone, keys, or chapstick. This bag also stays securely on and it would be difficult for a pick pocket or a thief to get this off of you with or without you knowing. I also love that it always lays flat on your hip due to there not being any pockets or bulkiness in the middle."'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <!-- <div class="name">– Beth W.</div> -->'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-7">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>A must have!</b> "This bag is super comfortable to wear and holds a lot of stuff."'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <div class="name">– Andrea</div>'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-10">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>So many compliments.</b> "The beauty of the bag - so many compliments today. It holds everything my big purse did much more comfortably. The RIFD protection really works. Very comfortable to wear."'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <div class="name">– Ruth S.</div>'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-2">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>I just love everything this company stands for!</b> "Great products, from a great company, with a great staff! I don\'t go anywhere without my Sash Bag! I wear it all day at work and never have to worry where I put it down. Everything is at my fingertips, and my credit cards are protected by the RDIF card slots. This is THE bag to own. It is available in many colors and styles to suit your self-expression! Bravo! And thank you!"'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <div class="name">– Beth W.</div>'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-5">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>Best bag I\'ve ever had.</b> "I have 4 now. No longer even interested in other bags."'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <div class="name">– Linda B. </div>'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-8">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>Super soft leather</b> "It is so well worth every penny. It is so comfortable and I hardly know I am wearing it. Once I put it on it was a Duh moment- why didn\'t I get one sooner! I got the reversible black / brown Sash - it is perfect!"'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <div class="name">– M. Short</div>'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-11">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>Several of my friends have switched over too!</b> "I bought my first Sash Bag more than 3 years ago and have not gone back to a regular purse. The bags are very well made, conveniently hold all my necessities, and are extremely comfortable. Several of my friends have switched over to using the Sash bag and they too are thrilled with the quality of the product and the customer service."'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <div class="name">– Christine F.</div>'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-3">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>Love the Sash Bag!!</b> "Frees up the hands . Very functional with a lot of zippered pockets. Delivery was one day early! Very pleased with purse and delivery service."'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <!-- <div class="name">– Beth W.</div> -->'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-6">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>Beauty and function all in one purse! </b> "So much lighter to carry! Excellent quality and customer service!"'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <div class="name">– Whitney B.</div>'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-9">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>Sash is a perfectly balanced bag.</b> "It holds all my things and rests on my shoulder effortlessly. Sometimes I have to check if it’s there. I have neck and back pain and feel none with this bag. The more I use it the better it gets. I love my SASH Bag."'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <div class="name">– Wanda</div>'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '                <div class="custTestiBox order-12">'+
                            '                    <div class="starRatings">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                        <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/star-icon.svg" alt="">'+
                            '                    </div>'+
                            '                    <div class="reviewQuote">'+
                            '                        <p>'+
                            '                            <b>Lives up to the hype!</b> "I have had the black fringe one for years and the quality has lasted and it\'s especially perfect for festivals and theme parks etc. I absolutely do not regret this purchase and prefer it over bulky belt bags by FAR. So nice to buy something that actually lives up to the hype."'+
                            '                        </p>'+
                            '                    </div>'+
                            '                    <div class="reviewAuthor">'+
                            '                        <div class="name">– Victoria H.</div>'+
                            '                        <div class="verifyMain">'+
                            '                            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/Thesashbag/verify-icon.svg" alt="Verified Customer"> Verified Customer'+
                            '                        </div>'+
                            '                    </div>'+
                            '                </div>'+
                            '            </div>'+
                            '        </div>'+
                            '        <div class="custButtonWrapper">'+
                            '            <div class="custBtn">Show more</div>'+
                            '        </div>'+
                            '    </div>'+
                            '</section>';

      jQuery(custReviewsHtml).insertBefore('main#MainContent [class*="__product-recommendations"]');
    }
      
   }
    //show more scrolling effect
   jQuery(document).on("click", ".custReviewMainWraper .showMore", function () {
        jQuery("html, body").animate({
          scrollTop: jQuery(".custReviewMainBoxWraper").offset().top,
        },1000);
    });
    //show more and show less functionality
    jQuery(document).on("click", ".custBtn", function () {
      if(jQuery(this).text().indexOf('Show more') !== -1) {
        jQuery(this).text("Show less");
      }else{
        jQuery(this).text("Show more");
      }
      jQuery('.custTestiWrapperRow').toggleClass('autoHeight');
      
    });

    clearInterval(waitForJquery);
  }
}, 50);