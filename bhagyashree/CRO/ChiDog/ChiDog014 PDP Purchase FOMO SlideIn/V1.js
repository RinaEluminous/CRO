var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        
        var arrUserName = ["Benjamin & Archie","Murray","Richardson","Cooper","Walker"];
        var arrLocation = ["Riverside","Wakefield","Dunwich","Newsham","Acton"];
        var arrDiet     = ["Wood Diet","Fire Diet","Earth Diet","Metal Diet","Water Diet"];
        var arrImage    = [
        "https://cdn.shopify.com/s/files/1/0550/7543/8658/files/wood-diet.svg",
        "https://cdn.shopify.com/s/files/1/0550/7543/8658/files/fire-diet.svg",
        "https://cdn.shopify.com/s/files/1/0550/7543/8658/files/earth-diet.svg",
        "https://cdn.shopify.com/s/files/1/0550/7543/8658/files/metal-diet.svg",
        "https://cdn.shopify.com/s/files/1/0550/7543/8658/files/water-diet.svg"];

        customSliderBlock();
        customUpdateSlideInfo();
        pdpPurchaseFOMOSlideIn();
        
        function pdpPurchaseFOMOSlideIn() {
            
            jQuery('.custSlidePopupWoodDite').addClass('custSlideOpen');

            setTimeout(function (){
                

                setTimeout(function (){
                   jQuery('.custSlidePopupWoodDite').removeClass('custSlideOpen');
                    
                    setTimeout(function (){ 
                       customUpdateSlideInfo();
                       jQuery('.custSlidePopupWoodDite').addClass('custSlideOpen');
                    } ,2000);

                },20000);
                
            },5000);
        }

        function customSliderBlock(){
            
            if(jQuery('.custSlidePopupWoodDite').length == 0){
                jQuery('<div class="custSlidePopupWoodDite custSlideOpen"><div class="custTextWrapper"><h2><span class="custUserName">Benjamin & Archie</span><span class="custUserLocation">from Riverside just bought</span><span class="custSelectDite"><a href="#">Wood diet</a></span></h2><ul><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/its-populer-iocn.png"> Its popular</li><li><img src="https://growth-hit.s3.us-west-2.amazonaws.com/Chidog/baasket-icon.png"> 12 minutes ago</li></ul></div><div class="custImageWrapper"><img src="https://cdn.shopify.com/s/files/1/0550/7543/8658/files/fire-diet.svg" class="custDiteImage"></div></div>').appendTo('body');
                   
            }
        }

        function customUpdateSlideInfo(){
            var strUserName = random_item(arrUserName);
            
            var index = arrUserName.indexOf(strUserName)
            console.log("index >>> " + index);
            
            var strLocation = random_item(arrLocation);
            var strDiet     = random_item(arrDiet);
            var strImage    = random_item(arrImage);

            console.log("strUserName >>> " + strUserName);
            console.log("strLocation >>> " + strLocation);
            console.log("strDiet >>> " + strDiet);
            console.log("strImage >>> " + strImage);

            if(jQuery('.custSlidePopupWoodDite').length > 0){
                jQuery('.custSlidePopupWoodDite span.custUserName').html(strUserName);
                jQuery('.custSlidePopupWoodDite span.custUserLocation').html(' from ' +strLocation+' just bought ');
                jQuery('.custSlidePopupWoodDite span.custSelectDite a').html(strDiet);
                jQuery('.custSlidePopupWoodDite .custImageWrapper img.custDiteImage').attr('src',strImage);

            }
        }

        function random_item(items){
            return items[Math.floor(Math.random()*items.length)];
        }


       clearInterval(waitForJquery);
    }
}, 50);   