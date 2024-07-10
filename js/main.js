//open & close cart 

var cart = document.querySelector('.cart');
function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}
/*add items in cart*/
var all_products_jeson