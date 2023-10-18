var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {
        
        navigationRedesign();
        addHpRotatingHeadings();

        //rotating headings
        function addHpRotatingHeadings(){
            if(jQuery('.custHpRotatingBanner').length == 0){
                jQuery('<div class="custHpRotatingBanner"> <div class="container"> <div class="row"> <div class="col-sm-6"><div class="scrolling-words-box"><ul><li>Event Filmmakers</li><li>Video Producers</li><li>Enterprises</li><li>Schools</li><li>Non-Profits</li><li>Webinar Marketers</li><li>Event Filmmakers</li></ul></div><h1>end-to-end video delivery system</h1> <p>MediaZilla helps organizations engage viewers across any device with a custom branded professional video platform.</p><ul class="custHpHeroListings"> <li>Send, track, and verify delivery of video content</li><li>Create private video collections with multi-user access</li><li>Showcase videos with a customized interactive menu</li></ul> <div class="custHpBtnsWrapper"> <a href="https://mediazilla.com/join-free?start_free" class="custHpButton fillBtn">Start Your Free Trial</a> <a href="javascript:void(0);" class="custHpButton outlineBtn">Watch Demo</a> </div></div><div class="col-sm-6"> <div class="hpVideoWrapper"> <div class="videoPoster"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/video_poster.png"> </div><div class="videoPlayBtn"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/play_icon.svg"> </div></div></div></div><div class="custHpInstitutionalCarousel"><div class="custTitle">Trusted by thousands of institutions</div><div class="custHpInstitutionalLogos"> <div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/make-a-wish.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/harvard-school.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/kaiser-permanente.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cerritos-college.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cushman-wakefield.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/robles-video.png" alt=""> </div></div></div></div><div class="custVideoPopup"> <div class="frameWraper"> <iframe frameborder="0" src="https://mediazilla.com/IzSADjEtZJ?autoplay=0"></iframe> </div><div class="custVedioOverlay"></div></div></div>').insertAfter('.banner .container.split-hero');
            }
        }

        //navigation
        function navigationRedesign() {
        
            if(jQuery('.custNavigationWrapper').length == 0){
                jQuery('<div class="custNavigationWrapper"> <nav> <div class="wrapper"> <div class="logo"> <a href="/" aria-current="page" class="brand w-nav-brand w--current" aria-label="home"><img src="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/61a672b366924b1cbc0c9bdb_m5x2%20Logo.png" loading="lazy" sizes="150px" srcset="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/61a672b366924b1cbc0c9bdb_m5x2%20Logo-p-500.png 500w, https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/61a672b366924b1cbc0c9bdb_m5x2%20Logo.png 600w" alt="MediaZilla logo" class="logo-1" style="will-change: opacity; opacity: 1;"><img src="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/618d800a6fc5810f72d272d8_m5x2%20Logo.png" loading="lazy" sizes="150px" srcset="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/618d800a6fc5810f72d272d8_m5x2%20Logo-p-500.png 500w, https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/618d800a6fc5810f72d272d8_m5x2%20Logo.png 600w" alt="MediaZilla Logo" class="logo-2" style="will-change: opacity; opacity: 0;"> </a> </div><input type="radio" name="slider" id="menu-btn"> <input type="radio" name="slider" id="close-btn"> <ul class="nav-links"> <div class="custMobileHeader"> <a href="/" aria-current="page" class="brand w-nav-brand w--current" aria-label="home"><img src="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/618d800a6fc5810f72d272d8_m5x2%20Logo.png" loading="lazy" sizes="150px" srcset="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/618d800a6fc5810f72d272d8_m5x2%20Logo-p-500.png 500w, https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/618d800a6fc5810f72d272d8_m5x2%20Logo.png 600w" alt="MediaZilla Logo"> </a> <label for="close-btn" class="btn close-btn"> <div class="w-icon-nav-menu"> <svg focusable="false" aria-hidden="true" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.23251L7.23251 8L4 4.76749L0.767492 8L0 7.23251L3.23251 4L0 0.767492L0.767492 0L4 3.23251L7.23251 0L8 0.767492L4.76749 4L8 7.23251Z" fill="white"></path></svg> </div></label> </div><li> <input name="megamenu" type="checkbox" id="solutions"> <label for="solutions" class="custMainMenuLink"> <div>Solutions</div><img loading="lazy" src="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/61bbc016c29b3a08501990e3_Favicon-3.svg" alt="down chevron" class="dropdown-icon"> </label> <div class="mega-box"> <div class="content"> <a href="https://mediazilla.com/enterprise" class="row"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/enterprise_icon.svg" alt="Enterprise"> </div><div class="hpMenuContent"> <h6>Enterprise</h6> <p>For teams of any size in any country</p></div></a> <a href="https://mediazilla.com/education" class="row"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/education_icon.svg" alt="Education"> </div><div class="hpMenuContent"> <h6>Education</h6> <p>Empowers educators to tackle the challenges of sharing video securely</p></div></a> <a href="https://mediazilla.com/event-cinematography" class="row"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/filmmaker_icon.svg" alt="Event Filmmakers"> </div><div class="hpMenuContent"> <h6>Event Filmmakers</h6> <p>From weddings to dance recitals we have you covered</p></div></a> <a href="https://mediazilla.com/maximize-webinar-conversions" class="row"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/webinar_icon.svg" alt="Webinars"> </div><div class="hpMenuContent"> <h6>Webinars</h6> <p>Distribute recorded webinars and webinar series with ease.</p></div></a> <div class="custHpTrialWrapper"> <h5>Store, package, showcase your work with our all-in-one platform. Try it risk-free for 14 days.</h5> <a href="https://mediazilla.com/join-free?start_free" class="custTrialCta custHpFillBtn">Start Your Free Trial</a> </div></div></div></li><li> <input name="megamenu" type="checkbox" id="features"> <label for="features" class="desktop-item custMainMenuLink"> <div>Features</div><img loading="lazy" src="https://uploads-ssl.webflow.com/6186f8b872122d4658a0d298/61bbc016c29b3a08501990e3_Favicon-3.svg" alt="down chevron" class="dropdown-icon"> </label> <div class="mega-box"> <div class="content"> <a href="https://mediazilla.com/video-content-management" class="row"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/manage_Icon.svg" alt="Video Content Management"> </div><div class="hpMenuContent"> <h6>Video Content Management</h6> <p>A purpose-built system for securely storing and managing video assets at scale.</p></div></a> <a href="https://mediazilla.com/secure-private-delivery" class="row"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/secure_Icon.svg" alt="Secure Private Delivery"> </div><div class="hpMenuContent"> <h6>Secure Private Delivery</h6> <p>Built with security and privacy first. Stop worrying about shared passwords granting unauthorized access.</p></div></a> <a href="https://mediazilla.com/premium-viewing-experience" class="row"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/premium_Icon.svg" alt="Premium Viewing Experience"> </div><div class="hpMenuContent"> <h6>Premium Viewing Experience</h6> <p>Offer an amazing Netflix-style experience your viewers will love.</p></div></a> <a href="https://mediazilla.com/sell-your-videos" class="row"> <div class="icon"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/sell_Icon.svg" alt="Sell Your Videos"> </div><div class="hpMenuContent"> <h6>Sell Your Videos</h6> <p>Sell videos worldwide with a premium experience.</p></div></a> <div class="custHpTrialWrapper"> <h5>Store, package, showcase your work with our all-in-one platform. Try it risk-free for 14 days.</h5> <a href="https://mediazilla.com/join-free?start_free" class="custTrialCta custHpFillBtn">Start Your Free Trial</a> </div></div></div></li><li><a href="https://mediazilla.com/pricing" class="custMainMenuLink">Pricing</a></li><div id="w-node-_7aa2ee18-3558-af80-abef-120a27a40157-27a40122" class="div-block"><a href="https://mediazilla.com/signin" class="navlink signin w-nav-link">sign in</a><a href="https://mediazilla.com/join-free?start_free" class="nav-button get-a-demo w-nav-link custTrialLink">START FREE</a><a href="https://mediazilla.com/book-a-demo" class="nav-button get-a-demo w-nav-link outline">Request Demo</a></div></ul> <label for="menu-btn" class="btn menu-btn"> <div class="w-icon-nav-menu"></div></label> <label for="close-btn" class="custOverlay"></label> </div></nav> </div>').insertBefore('.nav-wrapper:eq(0)');

                if(jQuery(window).width() < 991){
                    jQuery('.custTrialLink').text('Start Your Free Trial');
                }
            }
        }

        //on main menu click uncheck/close previous open menu
        jQuery(document).on('click','.custNavigationWrapper .nav-links li', function (){
            jQuery('.custNavigationWrapper .nav-links li').not(this).find('input[name="megamenu"]').prop('checked', false);

            if(jQuery(this).find('input[name="megamenu"]').is(":checked")){
                jQuery(this).find('input[name="megamenu"]').prop('checked', false);
            }
            else{
                jQuery(this).find('input[name="megamenu"]').prop('checked', true);
            }
        });

        //on CTA click open video popup
        jQuery(document).on('click','.custHpRotatingBanner .hpVideoWrapper .videoPlayBtn,.custHpBtnsWrapper a.custHpButton.outlineBtn', function() {

                if(jQuery('.custVideoPopup').length == 0){
                    jQuery('<div class="custVideoPopup"> <div class="frameWraper"> <iframe frameborder="0" src="https://mediazilla.com/IzSADjEtZJ?autoplay=0"></iframe> </div><div class="custVedioOverlay"></div></div></div>').insertAfter('.custHpRotatingBanner .container');
                }

                jQuery(".custHpRotatingBanner .custVideoPopup").fadeIn().css({
                    'display': 'flex'
                });
        });

        //on overlay click remove the video popup
        jQuery(document).on('click','.custHpRotatingBanner .custVideoPopup .custVedioOverlay',function () {
            jQuery(".custHpRotatingBanner .custVideoPopup").remove();
        });

        clearInterval(waitForJquery);  
    }
}, 50); 