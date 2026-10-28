if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function ready(){
document.addEventListener('click', function(event) {
        var buttonClicked = event.target;
                if (buttonClicked.classList.contains('btn-danger')) {
            buttonClicked.parentElement.parentElement.remove();
            uptcartTotal();
        }
            if (buttonClicked.classList.contains('btn-purchase')) {
            alert('Thank you for your purchase!');
            document.querySelector('.cart-items').innerHTML = '';
            uptcartTotal();
        }
        
        if (buttonClicked.classList.contains('shop-item-button')) {
            var shopItem = buttonClicked.parentElement.parentElement;
            var title = shopItem.querySelector('.shop-item-title').innerText;
            var cartTitles = document.querySelectorAll('.cart-items .cart-item-title');

            for (var i = 0; i < cartTitles.length; i++) {
                if (cartTitles[i].innerText === title) {
                    return alert('This item is already added to the cart');
                }
            }
            var price = shopItem.querySelector('.shop-item-price').innerText;
            var img = shopItem.querySelector('.shop-item-image').src;
            var cartRowHtml = '<div class="cart-row"><div class="cart-item cart-column"><img class="cart-item-image" src="' + img + '" width="100" height="100"><span class="cart-item-title">' + title + '</span></div><span class="cart-price cart-column">' + price + '</span><div class="cart-quantity cart-column"><input class="cart-quantity-input" type="number" value="1"><button class="btn btn-danger" type="button">REMOVE</button></div></div>';
            
            document.querySelector('.cart-items').insertAdjacentHTML('beforeend', cartRowHtml);
            uptcartTotal();
        }
    });

  
    document.addEventListener('change', function(event) {
        if (event.target.classList.contains('cart-quantity-input')) {
            var quantityEle = event.target;
            if (isNaN(quantityEle.value) || quantityEle.value <= 0) {
                quantityEle.value = 1;
            }
            uptcartTotal();
        }
    });
}


function uptcartTotal() {
    var cartItemCon = document.querySelector('.cart-items');
    var cartrow = cartItemCon.querySelectorAll('.cart-row');
    var total = 0;
    
    for (var i = 0; i < cartrow.length; i++) {
        var cartrows = cartrow[i];
        
        var priceEle = cartrows.querySelector('.cart-price');
        var quantityEle = cartrows.querySelector('.cart-quantity-input');
        
        var price = parseFloat(priceEle.innerText.replace('$', ''));
        var quantity = quantityEle.value;
        
        total = total + (price * quantity);
    }
    
    document.querySelector('.cart-total-price').innerText = '$' + total;
}


var removeitems = document.getElementsByClassName('btn-danger')
for(var i = 0; i < removeitems.length; i++){
    var button = removeitems[i]
    button.addEventListener('click', function(event){
        var btnclicked = event.target
        btnclicked.parentElement.parentElement.remove()

    })
} 

function uptcartTotal(){
    var cartItemCon = document.getElementsByClassName('cart-items')[0]
    var cartrow = cartItemCon.getElementsByClassName('cart-row')
    var total = 0
    for(var i = 0; i < cartrow.length; i++){
        var cartrows = cartrow[i]
        var priceEle = cartrows.getElementsByClassName('cart-price')[0]
        var quantityEle = cartrows.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceEle.innerText.replace('$', ''))
        var quantity = quantityEle.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
} 