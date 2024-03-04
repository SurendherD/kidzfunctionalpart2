var cart = [];
var total = 0;
var quantity = 0;
var count=0;
var url = `https://wa.me/917995908720?text=Order details This was our `;

function render(cart) {
  var cart = document.getElementById("cart-value");
  cart.innerText = quantity;
}
function addToCart(target) {
    count=count+1;
    document.getElementById("cart-value").innerHTML=count;
  var closest = target.closest("div[id]");
  var id = closest.id;
  var element = document.getElementById(id);
  var Name_html = document.querySelector(`#${element.id} div h3`);
  var price_html = document.querySelector(`#${element.id} .buy p`);
  var Name = Name_html.innerText;
  var price_$ = price_html.innerText;
  var price = parseFloat(price_$.replace("$", ""));
  quantity += 1;
  var index = cart.findIndex(function (cartItem) {
    return cartItem.name.indexOf(Name) > -1;
  });
  if (index === -1) {
    var tempcart = { name: Name, price: price, quantity: 1 };
    cart.push(tempcart);
  } else {

    cart[index].quantity++;
  }
  render(cart);
}

function printCart(cart) {
  cart.forEach(function (item) {
    console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
    total += item.price * item.quantity;
    url += `${item.name} ${item.quantity} `;
  });
  printTotal(total);
}

function printTotal(total) {
  var doller = Math.floor(total);
  var cent = Math.floor((total - doller) * 100);
  url += `Total price:$${doller} ${cent}c`;
  console.log(`the total amount is ${doller}$ and ${cent} cents`);
}

function new_tab() {
  window.open(url, "_blank");
}
