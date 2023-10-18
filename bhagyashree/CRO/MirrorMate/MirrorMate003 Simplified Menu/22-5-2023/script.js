    $(".custTabContent").hide();
    $(".custTabContent:first").show();

  /* if in tab mode */
    $("ul.custTabsWrapper li.custProductsList").click(function() {
		
      $(".custTabContent").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.custTabsWrapper li.custProductsList").removeClass("custActive");
      $(this).addClass("custActive");

	  $(".custTabDrawerHeading").removeClass("custMobileActive");
	  $(".custTabDrawerHeading[rel^='"+activeTab+"']").addClass("custMobileActive");
	   
    });
    $(".custTabContainer").css("min-height", function(){ 
      return $(".custTabsWrapper").outerHeight() + 50;
    });
	/* if in drawer mode */
	$(".custTabDrawerHeading").click(function() {
      
      $(".custTabContent").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".custTabDrawerHeading").removeClass("custMobileActive");
      $(this).addClass("custMobileActive");
	  
	  $("ul.custTabsWrapper li.custProductsList").removeClass("custActive");
	  $("ul.custTabsWrapper li.custProductsList[rel^='"+d_activeTab+"']").addClass("custActive");
    }); 