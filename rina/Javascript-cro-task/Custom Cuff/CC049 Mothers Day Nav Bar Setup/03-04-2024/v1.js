window.onload = function (){

        console.log('CC049: Mothers Day Nav Bar Setup');
        
        //add text shop by occasion with image replacement in trending section
        var shopTrendingListItem = document.querySelector('.custMegaMenuShop .custMenuList .shop-by-occasions');
        if (shopTrendingListItem) {
            
            var newHTML ='<a href="/collections/mom">' + 
            '    <div class="img_icon">' +
            '        <img width="500" height="300" decoding="async" loading="lazy" src="https://growth-hit.s3.us-west-2.amazonaws.com/custom-cuff/mother-icon.png">' + 
            '    </div>Mother’s day' + 
            '</a>';
            shopTrendingListItem.innerHTML  = newHTML;
        
        }
        
        //add text shop by occasion
        var shopbyOccasionHeading = document.querySelector('.custMegaMenuShop .shop-by-occasions h6');
        
        if (shopbyOccasionHeading) {
            shopbyOccasionHeading.textContent = 'Mother’s Day';
        }
        
        //shop all change text and update links
        
        var shopAllForHerItem = document.querySelector('.custMegaMenuShop .custMenuList li.for-her a');
        
        if (shopAllForHerItem) {
                shopAllForHerItem.textContent = 'Mom necklaces';
                shopAllForHerItem.href = '/collections/mom-necklaces';
        }
        
        var shopAllForHerItem = document.querySelector('.custMegaMenuShop .custMenuList li.for-him a');
        
        if (shopAllForHerItem) {
                shopAllForHerItem.textContent = 'Mom Bracelets';
         
         
                shopAllForHerItem.href = '/collections/mom-bracelets';
        }
        
        var shopAllForHerItem = document.querySelector('.custMegaMenuShop .custMenuList li.couples-gifts a');
        
        if (shopAllForHerItem) {
                shopAllForHerItem.textContent = 'Mom rings';
                shopAllForHerItem.href = '/collections/mom-rings ';
        }

        //replace text url and images of Shop By Occasions section

        var replacements = {
                'https://www.customcuff.co/collections/for-her': '/collections/mom-necklaces',
                'https://www.customcuff.co/collections/for-him': '/collections/mom-bracelets',
                'https://www.customcuff.co/collections/couples-gifts': '/collections/mom-rings ',
                'For Her': 'Mom Necklaces',
                'For Him': 'Mom Bracelets',
                'Anniversary Gifts': 'Mom Rings',
                '//www.customcuff.co/cdn/shop/files/SNOWB-0991.png?v=1705420229': 'https://www.customcuff.co/cdn/shop/products/customengravedcoordinatesjewelrycuffgiftbundlecouplesgift2_b6267abb-c232-4021-bce1-e3136b66f3b3_500x.jpg?v=1673303729',
                '//www.customcuff.co/cdn/shop/files/IMG_2814.png?v=1705420295': 'https://www.customcuff.co/cdn/shop/products/Untitled-80_500x.jpg?v=1699024806',
                '//www.customcuff.co/cdn/shop/files/DSC09085.png?v=1705420381': 'https://www.customcuff.co/cdn/shop/products/Screenshot2021-11-03at10.41.28_500x.png?v=1681813038'
              };

         // Function to perform find and replace
        function findAndReplace() {
        var tabContentWrappers = document.querySelectorAll('.what_fits_inside_inner .tab_content .category_collection_product_tab');
       
        if (tabContentWrappers.length >= 2) {
        var secondTabContentWrapper = tabContentWrappers[1];
        var swiperWrapper = secondTabContentWrapper.querySelector('.swiper-slide');

        // Loop through each content div
        swiperWrapper.forEach(function(content) {
          // Find and replace URLs
          var urls = content.querySelectorAll('.product_block a');
          urls.forEach(function(url) {
            var oldUrl = url.href;      
            console.log(oldUrl)
            if (replacements.hasOwnProperty(oldUrl)) {
              url.href = replacements[oldUrl];
            }
          });
      
          // Find and replace labels
          var labels = content.querySelectorAll('h3');
          labels.forEach(function(label) {
            var oldLabel = label.textContent;
            if (replacements.hasOwnProperty(oldLabel)) {
              label.textContent = replacements[oldLabel];
            }
          });
      
          // Find and replace image sources
          var images = content.querySelectorAll('.product_image img');
          images.forEach(function(image) {
            var oldSrc = image.getAttribute('src');
            if (replacements.hasOwnProperty(oldSrc)) {
              image.setAttribute('src', replacements[oldSrc]);
            }
          });
        });

        }

      }
      
      findAndReplace();     
        
        
};