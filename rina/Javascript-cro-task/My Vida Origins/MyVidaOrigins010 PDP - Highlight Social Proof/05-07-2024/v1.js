// window.onload = function(){
    addStickyFooter();
    AllClickOperations();
// }

function addStickyFooter(){

        window.addEventListener('scroll', toggleStickyFooter);
        window.addEventListener('resize', toggleStickyFooter);

}


function toggleStickyFooter() {

    console.log('toggleStickyFooter');
    // const addToCartButton = document.getElementById('addToCart');
    // const stickyFooter = document.getElementById('stickyFooter');

    // const addToCartPosition = addToCartButton.getBoundingClientRect().bottom;
    // const windowHeight = window.innerHeight;

    // if (addToCartPosition < 0) {
    //     stickyFooter.classList.add('visible');
    //     stickyFooter.classList.remove('hidden');
    // } else {
    //     stickyFooter.classList.add('hidden');
    //     stickyFooter.classList.remove('visible');
    // }
}

function AllClickOperations(){

}