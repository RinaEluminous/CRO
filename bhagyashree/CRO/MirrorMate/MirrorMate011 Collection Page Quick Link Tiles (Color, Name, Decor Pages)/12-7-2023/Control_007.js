var waitForJquery = setInterval(function() { 
    if (typeof jQuery != 'undefined') {
        
        //call function only on Collection page
        if(jQuery('.template-collection').length > 0) {
            addCustTestimonalToPlpControl();
        }

        function addCustTestimonalToPlpControl(){

            var intCount       = 0;
            var intPlpInterval = setInterval(function (){
                intCount      += 1;

                //check if there are products on the collection page
                if( jQuery('.collection .products.products-grid div.spf-col-6').length > 0) {
                    
                    //check if there are 3 or more than 3 products on the collection page, show first testimonal
                    if( jQuery('.collection .products.products-grid div.spf-col-6').length >= 3 && jQuery('.custReviewFeedbackBoxControl').length == 0 ){
                        jQuery('<div class="spf-col-xl-4 spf-col-lg-4 spf-col-md-6 spf-col-sm-12 spf-col-6 custFeedbackSectionControl"><div class="custReviewFeedbackBoxControl"><div class="custStartImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/rating-stars.svg"></div><h5>Wow! Super easy to order.</h5><p>Wow! Super easy to order, prep and install. And it looks awesome!</p><span>– Amy M.</span></div></div>').insertAfter('.products.products-grid div.spf-col-6:eq(1)');
                    }

                    //check if there are 9 products on the collection page, show second testimonal
                    if( jQuery('.collection .products.products-grid div.spf-col-6').length > 9 && jQuery('.custSecondTestimonialControl').length == 0 ){
                        jQuery('<div class="spf-col-xl-4 spf-col-lg-4 spf-col-md-6 spf-col-sm-12 spf-col-6 custFeedbackSectionControl"><div class="custReviewFeedbackBoxControl custSecondTestimonialControl"><div class="custStartImg"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/mirrormate/rating-stars.svg"></div><h5>Wow Factor!</h5><p>Ours eyes popped as we put it up and saw the difference right away! Love it and now ordering for another mirror!</p><span>– Leticia H.</span></div></div>').insertAfter('.products.products-grid div.spf-col-6:eq(8)');
                    }
                }
                
                if(intCount === 80){
                    clearInterval(intPlpInterval);
                }

            }, 50);
        }

        //on click of the pagination, sorting, filter and clear CTA, call testimonal function again
        jQuery(document).on('click','.gf-filter-contents ul.gf-option-box li a,#globo-dropdown-sort_options span,.collection .collection-container .pagination span,.collection-container #gf-tree a.gf-refine-toggle,.collection #gf-controls-container .selected-item.gf-option-label,#gf-tree .globo-selected-items-wrapper button.clear-refinements,div#gf-tree .selected-item.gf-option-label', function (){
            addCustTestimonalToPlpControl();
        });

        //on change of the show record limit CTA, call testimonal function again
        jQuery(document).on('change','.collection select#setLimit', function (){
            addCustTestimonalToPlpControl();
        });

        clearInterval(waitForJquery);
    }
}, 50);   