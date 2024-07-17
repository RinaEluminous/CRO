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
        console.log('Response>>>>', response); 
        callSecondApi() 
    } else {
        console.error('Request failed Status >>>>', xhr.status);
    }
};
xhr.send(JSON.stringify({
    id: '35470192050338',
    quantity: 1  
}));

}

function callSecondApi(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.isopurewater.com/search?view=cart&direct=false');  
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);  
            console.log('Response of second api >>>>', response);  
        } else {
            console.error('Request failed Status >>>>', xhr.status);
        }
    };
    xhr.send();
}


