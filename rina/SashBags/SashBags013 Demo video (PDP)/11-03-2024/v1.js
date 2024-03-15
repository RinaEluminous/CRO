
window.onload = function () {

    addCustVideo();

    function addCustVideo() {

        var buttons = document.querySelectorAll('.product-gallery__thumbnail');
        buttons.forEach(function(button) {
            var img = button.querySelector('img');
            if (img) {
                var src = img.getAttribute('src');
                if (src.includes('HowToPack_side')) {
                    button.style.display = 'none';
                }
            }
        });

        var imgDiv = document.querySelectorAll('.product-gallery__media');

        var foundHowToPackSide = false;

        imgDiv.forEach(function(button) {

            var img = button.querySelector('img');

            if (img) {
                var src = img.getAttribute('src');
                if (src.includes('HowToPack_side')) {
                    imgDiv.style.display = 'none';
                    foundHowToPackSide = true;
                }
            }

        });

        if (foundHowToPackSide) {
          
            // var videoDiv = document.createElement('div');
            // videoDiv.textContent = 'Your video content here'; 
            // var lastImgDiv = imgDiv[imgDiv.length - 1];
            // lastImgDiv.parentNode.appendChild(videoDiv);
            var videoHTML = '<div>Your video content here</div>'; 
            var lastImgDiv = imgDiv[imgDiv.length - 1];
            lastImgDiv.parentNode.insertAdjacentHTML('beforeend', videoHTML);
        }

    }


};