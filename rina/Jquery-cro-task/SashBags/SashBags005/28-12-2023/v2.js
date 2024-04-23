var waitForJquery = setInterval(function() { 
  if (typeof jQuery != 'undefined') {
      //collection all page condition
      if(jQuery("#MainContent .collection").length > 0){
          addCustFilterHtml();
      }
      
      function addCustFilterHtml(){
          if(jQuery("#product-grid").length > 0){
               jQuery('<div id="filters"><div class="material"><h4>Material</h4><label><input type="checkbox" value="Leather">Leather</label><label><input type="checkbox" value="faux Leather">Faux Leather</label></div><div class="fringe"><h4>Fringe</h4><label><input type="checkbox" value="yes">Yes</label><label><input type="checkbox" value="no">No</label></div><div class="color"><h4>Color</h4><label><input type="checkbox" value="yes">Black</label><label><input type="checkbox" value="no">Brown</label><label><input type="checkbox" value="no">Silver</label><label><input type="checkbox" value="no">Gold</label><label><input type="checkbox" value="no">Pink</label><label><input type="checkbox" value="no">Red</label><label><input type="checkbox" value="no">Blue</label><label><input type="checkbox" value="no">Orange</label><label><input type="checkbox" value="no">Yellow</label><label><input type="checkbox" value="no">Green</label><label><input type="checkbox" value="no">Bronze</label><label><input type="checkbox" value="no">Gray</label><label><input type="checkbox" value="no">Tan</label></div></div>').insertBefore('#product-grid');
          }
      }
      
      function filterProducts(){
      var selectedCategories = [];

      // Get selected categories
      jQuery('input[type="checkbox"]:checked').each(function () {
          selectedCategories.push(jQuery(this).val());
      });
      console.log('selectedCategories >>>>>>>>>>>>>',selectedCategories)
      if (selectedCategories.length > 0) {
          // Hide all products
          jQuery('#product-grid .grid__item').hide();

          $('#product-grid .grid__item').filter(function() {

            var materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes($(this).find('.color-item--regular').text());

            var fringeMatch = selectedFringes.length === 0 || selectedFringes.includes($(this).find('.fringe-item').text());
            
            var colorMatch = selectedColors.length === 0 || selectedColors.includes($(this).find('.color-item--regular').text());

            return materialMatch && fringeMatch && colorMatch;
        }).show();
        

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
