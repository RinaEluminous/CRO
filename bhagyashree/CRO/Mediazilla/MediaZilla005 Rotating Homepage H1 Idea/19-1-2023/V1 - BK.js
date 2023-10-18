var waitForJquery = setInterval(function() {  

    
    if (typeof jQuery != 'undefined') {

        if(jQuery('.custRotatingBanner').length == 0){
            jQuery('<div class="custRotatingBanner"> <div class="container"> <div class="row"> <div class="col-sm-6"><div class="scrolling-words-box"><ul><li>Event Filmmakers</li><li>Video Producers</li><li>Enterprises</li><li>Schools</li><li>Non-Profits</li><li>Webinar Marketers</li><li>Event Filmmakers</li></ul></div><h1>end-to-end video delivery system</h1> <p>MediaZilla helps organizations engage viewers across any device with a custom branded professional video platform.</p><ul> <li>Send, track, and verify delivery of video content</li><li>Create private video collections with multi-user access</li><li>Showcase videos with a customized interactive menu.</li></ul> <div class="btnsWraper"> <a href="https://mediazilla.com/join-free?start_free" class="custBtn fillBtn">Start Your Free Trial</a> <a href="https://mediazilla.com/book-a-demo" class="custBtn outlineBtn">Request Demo</a> </div></div><div class="col-sm-6"> <div class="videoWraper"> <div class="videoPoster"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/video_poster.png"> </div><div class="videoPlayBtn"> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/play_icon.svg"> </div></div></div></div><div class="custInstitutionalCarousel"><div class="custTitle">Trusted by thousands of institutions</div><div class="custInstutionalLogos"> <div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/make-a-wish.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/harvard-school.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/kaiser-permanente.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cerritos-college.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/cushman-wakefield.png" alt=""> </div><div> <img src="https://growth-hit.s3.us-west-2.amazonaws.com/MediaZilla/robles-video.png" alt=""> </div></div></div></div><div class="custVideoPopup"> <div class="frameWraper"> <iframe frameborder="0" src="https://mediazilla.com/IzSADjEtZJ?autoplay=0"></iframe> </div><div class="custOverlay"></div></div></div>').insertAfter('.banner .container.split-hero');
        }

        jQuery(document).on('click','.custRotatingBanner .videoWraper .videoPlayBtn', function() {
                jQuery(".custRotatingBanner .custVideoPopup").fadeIn().css({
                    'display': 'flex'
                });
            });

        jQuery(document).on('click','.custRotatingBanner .custVideoPopup .custOverlay',function () {
            jQuery(".custRotatingBanner .custVideoPopup").fadeOut();
        });

        clearInterval(waitForJquery);  
    }
}, 50); 