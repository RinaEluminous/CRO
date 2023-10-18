var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        var arrUserName = ["Benjamin & Archie","Murray","Richardson","Cooper","Walker"];
        var arrLocation = ["Riverside","Wakefield","Dunwich","Newsham","Acton"];
        var arrDiet     = ["Wood Diet","Fire Diet","Earth Diet","Metal Diet","Water Diet"];
        var arrTime     = ["12 minutes ago","1 hour ago","30 minutes ago","45 minutes ago","3 hours ago"];
        var intIndex    = '';

        var timer;
        var timerStart;
        var timeSpentOnSite = getTimeSpentOnSite();
        
        if(sessionStorage.getItem('custSlideShownCnt') < 2){
            if(sessionStorage.getItem('custSlideClosed') === null){
                customSliderBlock();
                customUpdateSlideInfo();
                pdpPurchaseFOMOSlideIn();
            }
        }


        //call only on PDP
        if(jQuery('.product-container').length > 0){
            startCountingPdpSpentTime();
        }
        
        function pdpPurchaseFOMOSlideIn() {
            //show first slide after 50 seconds
            setTimeout(function () {
                jQuery('.custSlidePurchaseDiet').addClass('custSlideOpen');
                sessionStorage.custSlideShownCnt = (+sessionStorage.custSlideShownCnt || 0) + 1;

                //hide first slide 5 seconds
                setTimeout(function () {
                    jQuery('.custSlidePurchaseDiet').removeClass('custSlideOpen');
                } ,5000);
                
                //show second slide after 2 minutes
                setTimeout(function () {
                    customUpdateSlideInfo();
                    jQuery('.custSlidePurchaseDiet').addClass('custSlideOpen');
                    sessionStorage.custSlideShownCnt = (+sessionStorage.custSlideShownCnt || 0) + 1;

                    //hide second slide with after 5 seconds
                    setTimeout(function () { 
                       jQuery('.custSlidePurchaseDiet').removeClass('custSlideOpen');
                       sessionStorage.setItem('custSlideClosed','1');

                    } ,5000);

                },120000);
                
            },50000);
        }

        function customSliderBlock(){
            
            if(jQuery('.custSlidePurchaseDiet').length == 0){
                jQuery('<div class="custSlidePurchaseDiet"><div class="custTextWrapper"><h2><span class="custUserName">Benjamin & Archie</span><span class="custUserLocation">from Riverside just bought</span><span class="custSelectDite"><a href="#">Wood diet</a></span></h2><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/its-populer-iocn.png"> Its popular</li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/baasket-icon.png"> <span class="custTimming">12 minutes ago</span></li></ul></div><div class="custImageWrapper"><img src="https://cdn.shopify.com/s/files/1/0550/7543/8658/files/fire-diet.svg" class="custDiteImage"></div></div>').appendTo('body');
            }
        }

        function customUpdateSlideInfo(){
            var strUserName = getRandomArrayElement(arrUserName);
            if(intIndex === arrUserName.indexOf(strUserName)){
                //console.log('recall random item');
                strUserName = getRandomArrayElement(arrUserName);
            }
            intIndex = arrUserName.indexOf(strUserName);
            
            var strLocation = getRandomArrayElement(arrLocation);
            var strDiet     = getRandomArrayElement(arrDiet);
            var strDietText = strDiet.toLowerCase().replace(' ','-');
            var strImageSrc = 'https://cdn.shopify.com/s/files/1/0550/7543/8658/files/'+strDietText+'.svg';
            var strUrl      = 'https://chidog.com/products/'+strDietText;
            var strTime     = getRandomArrayElement(arrTime);

            if(jQuery('.custSlidePurchaseDiet').length > 0) {
                jQuery('.custSlidePurchaseDiet span.custUserName').html(strUserName);
                jQuery('.custSlidePurchaseDiet span.custUserLocation').html(' from ' +strLocation+' just bought ');
                jQuery('.custSlidePurchaseDiet span.custSelectDite a').html(strDiet);
                jQuery('.custSlidePurchaseDiet span.custSelectDite a').attr('href',strUrl);
                jQuery('.custSlidePurchaseDiet .custImageWrapper img.custDiteImage').attr('src',strImageSrc);
                jQuery('.custSlidePurchaseDiet ul li span.custTimming').text(strTime);
            }
        }

        function getRandomArrayElement(items){
            return items[Math.floor(Math.random()*items.length)];
        }

        /*Time spent on a PDP page*/
        function getTimeSpentOnSite(){
            timeSpentOnSite = parseInt(sessionStorage.getItem('timeSpentOnSite'));
            timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
            return timeSpentOnSite;
        }

        function startCountingPdpSpentTime(){
            var intCount = 0; 
            timerStart = Date.now();
            timer = setInterval(function(){
                intCount +=1;
                timeSpentOnSite = getTimeSpentOnSite()+(Date.now()-timerStart);
                sessionStorage.setItem('timeSpentOnSite',timeSpentOnSite);
                timerStart = parseInt(Date.now());

                //Convert to seconds
                intTimeInSec = parseInt(timeSpentOnSite/1000);
                sessionStorage.setItem('custFinalTimeInSeconds',intTimeInSec);
            },1000);
        }
        
       clearInterval(waitForJquery);
    }
}, 50);   