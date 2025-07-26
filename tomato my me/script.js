let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " added to cart!");
}

if (window.location.pathname.includes("cart.html")) {
  const cartItems = document.getElementById("cartItems");
  const totalAmount = document.getElementById("totalAmount");

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);

    const priceMatch = item.match(/₹(\d+)/);
    if (priceMatch) total += parseInt(priceMatch[1]);
  });

  totalAmount.textContent = "Total: ₹" + total;
}
