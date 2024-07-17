window.onload = function(){
addToCartFunctionality();
};

addToCartFunctionality();
function addToCartFunctionality(){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://www.isopurewater.com/cart/add.js');  
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);  
            var withIcon = document.querySelector('.with-icon');
            if(withIcon){
            withIcon.classList.add('opened');
            }
            console.log('Response>>>>', response);  
        } else {
            console.error('Request failed Status >>>>', xhr.status);
        }
    };
    xhr.send(JSON.stringify({
        id: '35470192050338',
        quantity: 1  
    }));
    
}


