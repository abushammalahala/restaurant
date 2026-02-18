

// -----Navbar / Header Scroll) 
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const mainmenu = document.getElementById("img-hero")
function changeImg(smalimg){
    mainmenu.src = smalimg.src
}



// قراءة السلة
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// تحديث عداد الهيدر
function updateCartCount() {
    const countEl = document.getElementById("count");
    if (!countEl) return;

    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    countEl.textContent = totalCount;

    if (totalCount === 0) {
        countEl.style.display = "none";
    } else {
        countEl.style.display = "inline-block";
    }
}

// عند تحميل الصفحة
updateCartCount();

// عند تغيّر localStorage من أي صفحة أخرى
window.addEventListener('storage', updateCartCount);
