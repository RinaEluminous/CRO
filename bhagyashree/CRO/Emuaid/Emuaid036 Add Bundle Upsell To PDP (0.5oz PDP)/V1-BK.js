var waitForJquery = setInterval(function() {  
    if (typeof jQuery != 'undefined') {

        console.log('%c Emuaid036 Add Bundle Upsell To PDP Fired...', 'background: green; color: #fff; padding: 10px;');

        if(jQuery('.custFasterResultWraper').length == 0 ){

            jQuery('<div class="custFasterResultWraper"><h4>Faster results for Nail Fungus</h4><div class="resultBox"><div class="imbBox"><img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/nail-fungus-img.png" alt="Nail Fungus Kit"></div><div class="contentBox"><div class="custHeader"><h6>Nail Fungus Kit</h6><div class="saveBadge">Save 25%</div></div><p>The best way to maximize the effectiveness of your nail fungus treatment for faster results.</p></div></div></div>').insertBefore('.product_section .product_form');
        }
        clearInterval(waitForJquery);  
    }
}, 50);