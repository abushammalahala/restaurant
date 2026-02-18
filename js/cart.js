


// Cart array from previous page



// Function to render cart items
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
             <div class="flex"> 
                <img src="${item.image || 'images/placeholder.jpg'}" alt="${item.item}">
                  <div class="cart-item-info">
                     <p>${item.item}</p>
                     <span>$${item.price} x ${item.quantity}</span>
                   </div>
            </div>
            <div class="qua-remove">
             <div class="quantity-controls">
                <button onclick="changeQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${index}, 1)">+</button>
              </div>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
               
             </div>
        `;
        cartItems.appendChild(div);
    });

    cartTotal.textContent = total.toFixed(2);
}function updateCartCount() {
    const countEl = document.getElementById("count");

    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    countEl.textContent = totalCount;

    // اخفاء العداد اذا صفر
    if (totalCount === 0) {
        countEl.style.display = "none";
    } else {
        countEl.style.display = "inline-block";
    }
}


// Change quantity
function changeQuantity(index, delta) {
    cart[index].quantity = (cart[index].quantity || 1) + delta;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();   // مهم
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();   // مهم
}

// Checkout
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if(cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Simple demo: show order summary
    let summary = 'Your order:\n';
    cart.forEach(i => summary += `${i.quantity} x ${i.item} - $${i.price * i.quantity}\n`);
    let total = cart.reduce((sum,i) => sum + i.price * i.quantity, 0);
    summary += `Total: $${total.toFixed(2)}`;
    alert(summary + "\nProceed to payment (e.g., WhatsApp or PayPal).");

    // Optionally, clear cart after checkout
  cart = [];
localStorage.removeItem('cart');
renderCart();
updateCartCount();

});

// Initial render

renderCart();
updateCartCount();

