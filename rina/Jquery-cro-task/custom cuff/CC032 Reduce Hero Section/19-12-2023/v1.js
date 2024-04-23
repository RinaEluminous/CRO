if (jQuery('.template-index').length > 0) {
    replaceTextOnHeroSection();
}

function replaceTextOnHeroSection() {
    var intCount = 0;
    var intHeroSectionInterval = setInterval(function() {
        intCount += 1;

        if (jQuery('.custVideoBrandBanner .custTextBlock h2').length > 0 && jQuery('.custOffer').length == 0) {
            if (jQuery(window).width() >= 768) {
                jQuery('.custVideoBrandBanner .custTextBlock h2').text('New Year New You');
            }
            jQuery('<h4 class="custOffer">Up To 60% Off </h4>').insertAfter('.custVideoBrandBanner .custTextBlock h2');
        }

        if (jQuery('.custVideoBrandBanner .custTextBlock p').length > 0) {
            jQuery('.custVideoBrandBanner .custTextBlock p').text('Jewelry with Meaning | We craft Moments into Timeless Treasures');
        }
        //add span for custom word

        if (jQuery('.custTextBlock h2').length > 0) {
            jQuery('.custTextBlock h2').html(function(_, oldHtml) {
                return oldHtml.replace(/\b(Custom)\b/g, '<span>$1</span>');
            });
        }
        if (intCount === 80) {
            clearInterval(intHeroSectionInterval);
        }
    }, 30);

}