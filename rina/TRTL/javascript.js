//Add custom class "Flashtag: NEW IN" 

// const navbarLinks = document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li a');
// navbarLinks.forEach(listItem => {
   
//     const newInFlashtags = document.querySelectorAll('[data-tag="Flashtag: NEW IN"]');
//     newInFlashtags.forEach(flashtag => {
//         const parentDiv = flashtag.closest('.tile-line-item-menu');
//         if (parentDiv) {
//             parentDiv.classList.add('custHighlight');   
//         }
// });

// });

// *************************************************************************************************************

const navbarLinks = document.querySelectorAll('.section-header nav.navbar ul.navbar-nav li a');

    navbarLinks.forEach(listItem => {
    
        const newInFlashtags = document.querySelectorAll('[data-tag="Flashtag: NEW IN"]');
        newInFlashtags.forEach(flashtag => {
            const parentDiv = flashtag.closest('.tile-line-item-menu');
            if (parentDiv) {
                parentDiv.classList.add('custHighlight');   
            }
    });

});