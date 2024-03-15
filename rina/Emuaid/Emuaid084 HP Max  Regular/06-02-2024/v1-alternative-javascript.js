document.addEventListener('DOMContentLoaded', function () {
    const variationName = "test84";

    // Function to add a class to an element
    function addClass(element, className) {
        element.classList.add(className);
    }

    // Function to insert HTML after an element
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    // Function to initialize the variation
    function init() {
        const body = document.querySelector('body');
        if (body) {
            addClass(body, variationName);
        }

        const maxHeroHeaderHtml = `<div class="custMax_bmHeroHeader">...</div>`;
        const bmHeroHeader = document.querySelector('html body.index .bm-hero-header');
        if (bmHeroHeader && !bmHeroHeader.querySelector('.custMax_bmHeroHeader')) {
            insertAfter(maxHeroHeaderHtml, bmHeroHeader);
        }

        const heroProductWraperHtml = `<div class="custMax_bmHeroProductWraper">...</div>`;
        const bmTopProd = document.querySelector('html body.index .bm-top-prod');
        if (bmTopProd && !bmTopProd.querySelector('.custMax_bmHeroProductWraper')) {
            insertAfter(heroProductWraperHtml, bmTopProd);
        }
    }

    // Wait for the DOM to be fully loaded, then initialize the variation
    init();
});
