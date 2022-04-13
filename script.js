let productName = document.querySelector('.product-name');
let productLink = document.getElementById('link');
let productPrice = document.getElementById('price');

productName.addEventListener('input', changeBackground);
productLink.addEventListener('input', changeBackground);
productPrice.addEventListener('input', changeBackground);

function changeBackground() {
    if(productName.value == '' || productLink.value == '' || productPrice.value == '') {
        document.querySelector('.click-button').style.backgroundColor = '#EEEEEE';
        document.querySelector('#button').classList.remove('white')
    } else {
        document.querySelector('.click-button').style.backgroundColor = '#7BAE73'
        document.querySelector('#button').classList.add('white')
    }
}

// function checkValidation(e) {
//     console.log('hi')
//     if(productName.value == '' || productLink.value == '' || productPrice.value == '') {
//         productName.style.border = '1px solid #ff8484';
//         document.querySelector('.validation').style.display = 'block'
//     } else {
//         document.querySelector('.validation').style.display = 'none'
//     }
// }