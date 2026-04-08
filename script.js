let count = 0;
let total = 0;

// Change Quantity
function changeQty(id, value){
    let qty = document.getElementById(id);
    let number = parseInt(qty.innerText);

    if(number + value >= 1){
        qty.innerText = number + value;
    }
}

// Add to Cart
function addToCart(name, price, qtyId){
    let qty = parseInt(document.getElementById(qtyId).innerText);

    count = count + qty;
    total = total + (price * qty);

    document.getElementById("cartCount").innerText = count;
    document.getElementById("total").innerText = total;

    let li = document.createElement("li");
    li.innerText = name + " x " + qty + " = ₹" + (price * qty);

    document.getElementById("cartItems").appendChild(li);
}

// Form Submit
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Form submitted successfully");
});

// Empty Cart
function emptyCart(){
    document.getElementById("cartItems").innerHTML = "";
    count = 0;
    total = 0;

    document.getElementById("cartCount").innerText = 0;
    document.getElementById("total").innerText = 0;
}

// Checkout
function checkout(){
    if(count === 0){
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!");
        emptyCart();
    }
}