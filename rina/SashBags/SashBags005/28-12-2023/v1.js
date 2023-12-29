var waitForJquery = setInterval(function() { 
  if (typeof jQuery != 'undefined') {
      //collection all page condition
      if(jQuery("#MainContent .collection").length > 0){
          addCustFilterHtml();
      }
      
      function addCustFilterHtml(){
          if(jQuery("#product-grid").length > 0){
               jQuery('<div id="filters"><div class="material"><h4>Material</h4><label><input type="checkbox" value="Leather">Leather</label><label><input type="checkbox" value="faux Leather">Faux Leather</label></div><div class="fringe"><h4>Fringe</h4><label><input type="checkbox" value="fringe">Yes</label><label><input type="checkbox" value="nofringe">No</label></div></div>').insertBefore('#product-grid');
          }
      }
      
      function filterProducts(){
      var selectedCategories = [];

      // Get selected categories
      jQuery('input[type="checkbox"]:checked').each(function () {
          selectedCategories.push(jQuery(this).val().toLowerCase());
      });

      
      console.log('selectedCategories >>>>>>>>>>>>>',selectedCategories)
      if (selectedCategories.length > 0) {
          // Hide all products
          jQuery('#product-grid .grid__item').hide();
          selectedCategories.forEach(function (category) {
            console.log('category >>',category)
            jQuery('#product-grid .grid__item:contains(' + category + ')').show();
          });
        } else {
          jQuery('#product-grid .grid__item').show();
        }
      }

       // filter change
       jQuery(document).on('change', 'input[type="checkbox"]', function() {
        filterProducts();
      });

      //sort by change
      jQuery(document).on('change', '#SortBy', function() {
        addCustFilterHtml();
      });
      
      clearInterval(waitForJquery);
  }
}, 50);
