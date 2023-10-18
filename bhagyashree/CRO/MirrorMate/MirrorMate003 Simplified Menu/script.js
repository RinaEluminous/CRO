    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.custTabsWrapper li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.custTabsWrapper li").removeClass("custActive");
      $(this).addClass("custActive");

	  $(".tab_drawer_heading").removeClass("custMobileActive");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("custMobileActive");
	  
    /*$(".custTabsWrapper").css("margin-top", function(){ 
       return ($(".tab_container").outerHeight() - $(".custTabsWrapper").outerHeight() ) / 2;
    });*/
    });
    $(".tab_container").css("min-height", function(){ 
      return $(".custTabsWrapper").outerHeight() + 50;
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("custMobileActive");
      $(this).addClass("custMobileActive");
	  
	  $("ul.custTabsWrapper li").removeClass("custActive");
	  $("ul.custTabsWrapper li[rel^='"+d_activeTab+"']").addClass("custActive");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to bottom side
	   of last tab 
	$('ul.custTabsWrapper li').last().addClass("tab_last");*/