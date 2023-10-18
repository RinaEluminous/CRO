var waitForJquery = setInterval(function() {  

    if (typeof jQuery != 'undefined') {
       
       // console.log("Add Premium Len >> " +jQuery("section.Product .ProductForm .product-add-on-wrapper").length);

       // console.log("Add BRACELET Len >> " +jQuery('section.Product #Product__Clone').length);

       console.log("upsell Len >> " +jQuery('section.Product .product-page-upsell').length);

       clearInterval(waitForJquery);  
    }
}, 50); 