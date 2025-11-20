function toggleNav() {
    document.body.classList.toggle("nav-open");
}

// -----------------------------
// ADD TO CART (localStorage)
// -----------------------------
function addToCart(product_id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = cart.find(p => p.product_id === product_id);

    if (item) {
        item.qty += 1;
    } else {
        cart.push({
            product_id,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    showToast("Added to cart");
}

// -----------------------------
// TOAST MESSAGE
// -----------------------------
function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
