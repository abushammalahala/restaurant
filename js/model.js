// ----- Cart array -----
const modal = document.getElementById('orderModal');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const quantityInput = document.getElementById('quantity');
const confirmBtn = document.getElementById('confirmOrder');
const closeBtn = document.querySelector('.close');
const countEl = document.getElementById('count');

// ----- دوال Cart -----
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    if (!countEl) return;

    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEl.textContent = total;
}

// ----- تهيئة Cart عند التحميل -----
let cart = getCart();
window.cart = cart;
updateCartCount();

// ----- Order buttons -----
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = btn.dataset.price;

        modalTitle.textContent = name;
        modalPrice.textContent = `$${price}`;
        quantityInput.value = 1;
        modal.style.display = 'flex';
    });
});

// ----- إغلاق Modal -----
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});

// ----- تأكيد الطلب وإضافة للـ cart -----
confirmBtn.addEventListener('click', () => {
    const item = modalTitle.textContent;
    const price = parseFloat(modalPrice.textContent.replace('$', ''));
    const quantity = parseInt(quantityInput.value);

    const currentCard = Array.from(document.querySelectorAll('.order-btn'))
        .find(btn => btn.dataset.name === item)
        .closest('.card-menu');

    const image = currentCard.querySelector('img').src;

    // إضافة العنصر للـ cart
    cart.push({ item, price, quantity, image });
    saveCart(cart);        // حفظ الكارت بعد الإضافة
    updateCartCount();     // تحديث العداد

    alert(`${quantity} x ${item} added to cart!`);
    modal.style.display = 'none';

    console.log('Current Cart:', cart);
});
