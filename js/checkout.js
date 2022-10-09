if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeCartItems = document.getElementsByClassName("delete-button");

    for (var i = 0; i < removeCartItems.length; i++) {
        var button = removeCartItems[i];
        button.addEventListener("click", removeCartItem);
   }

   var quantityInputs = document.getElementsByClassName("item-quantity");
   for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
   }

   var addToCartBtns = document.getElementsByClassName("product-item-button");
   for (var i = 0; i < addToCartBtns.length; i++) {
        var button = addToCartBtns[i];
        button.addEventListener("click", addToCartClicked);
   }

   document.getElementsByClassName("checkout-button")[0].addEventListener("click", checkoutCicked);
}

function checkoutCicked() {
    alert("Your purchase has been completed!");
    var cartItems = document.getElementsByClassName("cart-items");
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotal();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
    var imageSource = shopItem.getElementsByClassName("shop-item-image")[0].src;
    addItemToCart(title,price,imageSource);
    updateTotal();
}

function addItemToCart(title,price,imageSource) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("shop-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("Item alreeady added to cart");
            return;
        }
    }
    var cartRowContents = `<div class="shop-item">
                             <figure>
                                <a href="/product-specific.html">
                                <img src="${imageSource}" alt="Image of Normandy high performance jacket" class="product-image shop-item-image" /></a>
                                <h1 class="shop-item-title">${title}</h1>
                                <div class="shop-item-details">
                                    <p>Itemnnumber: 123456-A</p>
                                    <h2 class="shop-item-price">${price}</h2>
                                    <div>
                                        <input class="item-quantity" type="number" min="1" value="1" />
                                        <button class="delete-button" type="button">DELETE ITEM</button>
                                    </div>
                                </div>
                              </figure>
                            </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("delete-button")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("item-quantity")[0].addEventListener("change", quantityChanged);
}

function updateTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row")
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("item-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total;
}