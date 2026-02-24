const translations = {
    bs: {
        nav_menu: 'Jelovnik',
        hero_subtitle: 'Branilaca Bosne bb /kod stare Opštine/',
        hero_title: 'Osjeti <span>Razliku</span>',
        hero_text: 'Najbolji doneri i burgeri. Naručite online za brzu dostavu.',
        hero_cta: 'Naruči Odmah',
        section_title: 'Naš Jelovnik',
        section_subtitle: 'Izaberi svoje omiljeno jelo s našeg bogatog menija.',
        cart_title: 'Tvoja Korpa',
        cart_empty: 'Korpa je prazna',
        cart_total: 'Ukupno:',
        checkout_btn: 'Završi Narudžbu (WhatsApp)',
        add_to_cart: 'Dodaj u korpu',
        added: 'Dodano',
        currency: 'KM',
        footer_rights: 'Sva prava zadržana.',
        whatsapp_order_prefix: 'Novi zahtjev za dostavu:\n\n',
        whatsapp_total: 'Ukupno za platiti:',
        whatsapp_address: 'Molim vas, dostavite na sljedeću adresu: [Upišite adresu]',
        cart_alert_empty: 'Vaša korpa je prazna!'
    },
    en: {
        nav_menu: 'Menu',
        hero_subtitle: 'Branilaca Bosne bb /near Old Municipality/',
        hero_title: 'Feel the <span>Difference</span>',
        hero_text: 'Best doners and burgers. Order online for fast delivery.',
        hero_cta: 'Order Now',
        section_title: 'Our Menu',
        section_subtitle: 'Choose your favorite dish from our rich menu.',
        cart_title: 'Your Cart',
        cart_empty: 'Cart is empty',
        cart_total: 'Total:',
        checkout_btn: 'Complete Order (WhatsApp)',
        add_to_cart: 'Add to cart',
        added: 'Added',
        currency: 'KM',
        footer_rights: 'All rights reserved.',
        whatsapp_order_prefix: 'New delivery request:\n\n',
        whatsapp_total: 'Total to pay:',
        whatsapp_address: 'Please deliver to the following address: [Enter address]',
        cart_alert_empty: 'Your cart is empty!'
    }
};

let currentLang = localStorage.getItem('language') || 'bs';

/**
 * Menu Data Source
 */
const menuData = [
    {
        id: '1',
        name: { bs: 'Doner mali', en: 'Small Doner' },
        desc: { bs: '(pecivo, junetina - piletina, chili sos, bijeli sos, salata)', en: '(bun, beef - chicken, chili sauce, white sauce, salad)' },
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '2',
        name: { bs: 'Doner veliki', en: 'Large Doner' },
        desc: { bs: '(pecivo, junetina - piletina, chili sos, bijeli sos, salata)', en: '(bun, beef - chicken, chili sauce, white sauce, salad)' },
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1662116765994-1e4200c43085?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '3',
        name: { bs: 'Doner box veliki', en: 'Large Doner Box' },
        desc: { bs: '(junetina - piletina, chili sos, bijeli sos, salata)', en: '(beef - chicken, chili sauce, white sauce, salad)' },
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '4',
        name: { bs: 'Doner box + pomfrit', en: 'Doner Box + Fries' },
        desc: { bs: '', en: '' },
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1532634832-68393e8e9e14?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '5',
        name: { bs: 'Durum giros tortilja', en: 'Durum Gyros Tortilla' },
        desc: { bs: '(tortilja, junetina - piletina, chili sos, bijeli sos, salata)', en: '(tortilla, beef - chicken, chili sauce, white sauce, salad)' },
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1628191139360-40835e4d03fd?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '6',
        name: { bs: 'Bosanski sendvič', en: 'Bosnian Sandwich' },
        desc: { bs: '(pecivo, goveđa pečenica, sudžuka, namazi)', en: '(bun, beef prosciutto, sausage, spreads)' },
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1509722747041-0742d1306197?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '7',
        name: { bs: 'Hot Dog', en: 'Hot Dog' },
        desc: { bs: '(pecivo, hrenovka Wudy, namazi)', en: '(bun, Wudy hot dog, spreads)' },
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '8',
        name: { bs: 'Chili kobasice u sosu', en: 'Chili Sausages in Sauce' },
        desc: { bs: '', en: '' },
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1544333346-6071477df506?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '9',
        name: { bs: 'Hamburger', en: 'Hamburger' },
        desc: { bs: '(pecivo, pljeskavica, namazi, salata)', en: '(bun, patty, spreads, salad)' },
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '10',
        name: { bs: 'Cheeseburger', en: 'Cheeseburger' },
        desc: { bs: '(pecivo, pljeskavica, trapist, namazi, salata)', en: '(bun, patty, cheese, spreads, salad)' },
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '11',
        name: { bs: 'Double Burger', en: 'Double Burger' },
        desc: { bs: '(pecivo, 2 x pljeskavica, namazi, salata)', en: '(bun, 2 x patty, spreads, salad)' },
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '12',
        name: { bs: 'Double Cheeseburger', en: 'Double Cheeseburger' },
        desc: { bs: '(pecivo, 2 x pljeskavica, 2 x trapist, namazi, salata)', en: '(bun, 2 x patty, 2 x cheese, spreads, salad)' },
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1456327192253-8dd7f1007324?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '13',
        name: { bs: 'Double Cheeseburger u prušcanović lepini', en: 'Double Cheeseburger in Prušcanović Bun' },
        desc: { bs: '(lepina, 2 x pljeskavica, 2 x trapist, namazi, salata)', en: '(flatbread, 2 x patty, 2 x cheese, spreads, salad)' },
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '14',
        name: { bs: 'Pljeskavica mala + pomfrit', en: 'Small Patty + Fries' },
        desc: { bs: '(pljeskavica, pomfrit, namazi, salata, pecivo)', en: '(patty, fries, spreads, salad, bun)' },
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '15',
        name: { bs: 'Pljeskavica velika + pomfrit', en: 'Large Patty + Fries' },
        desc: { bs: '(2 x pljeskavica, pomfrit, namazi, salata, pecivo)', en: '(2 x patty, fries, spreads, salad, bun)' },
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '16',
        name: { bs: 'Pljeskavica velika + kajmak', en: 'Large Patty + Cream Cheese' },
        desc: { bs: '', en: '' },
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '17',
        name: { bs: 'Pileći ražnjići čili + pomfrit', en: 'Chili Chicken Skewers + Fries' },
        desc: { bs: '(pileći ražnjići, pomfrit, čili, namazi, salata, pecivo)', en: '(chicken skewers, fries, chili, spreads, salad, bun)' },
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '18',
        name: { bs: 'Čiken', en: 'Chicken Burger' },
        desc: { bs: '(pileće meso, namazi, salata, pecivo)', en: '(chicken meat, spreads, salad, bun)' },
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '19',
        name: { bs: 'Čiken veliki', en: 'Large Chicken Burger' },
        desc: { bs: '', en: '' },
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1513639725746-c563c8f2269e?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '20',
        name: { bs: 'Grilovana piletina + pomfrit', en: 'Grilled Chicken + Fries' },
        desc: { bs: '(pileće meso, pomfrit, namazi, salata, pecivo)', en: '(chicken meat, fries, spreads, salad, bun)' },
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1632778149975-420e0e75ee08?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '21',
        name: { bs: 'Otkošteni batak karabatak + pomfrit', en: 'Boneless Chicken Thigh + Fries' },
        desc: { bs: '(otkošteni pileći batak, pomfrit, namazi, salata, pecivo)', en: '(boneless chicken thigh, fries, spreads, salad, bun)' },
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '22',
        name: { bs: 'Pileća salata', en: 'Chicken Salad' },
        desc: { bs: '', en: '' },
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '23',
        name: { bs: 'Lepina Pruščanović, domaći kajmak', en: 'Pruščanović Bun, Homemade Cream' },
        desc: { bs: '', en: '' },
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1598511726623-d30900350731?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '24',
        name: { bs: 'Lepina Pruščanović, domaći kajmak + suho meso', en: 'Pruščanović Bun, Cream + Smoked Meat' },
        desc: { bs: '', en: '' },
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1626132646545-36423cc81a07?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '25',
        name: { bs: 'Pomfrit', en: 'French Fries' },
        desc: { bs: '(namazi po izboru)', en: '(spreads of choice)' },
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '26',
        name: { bs: 'Pekarski krompir u sosu', en: 'Baked Potatoes in Sauce' },
        desc: { bs: '', en: '' },
        price: 4.00,
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '27',
        name: { bs: 'Dodatna lepina', en: 'Extra Bun' },
        desc: { bs: '', en: '' },
        price: 2.00,
        image: 'https://images.unsplash.com/photo-1593560734541-584a822ad16c?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '28',
        name: { bs: 'Kupus/sezonska salata', en: 'Cabbage/Seasonal Salad' },
        desc: { bs: '', en: '' },
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600'
    }
];

// Cart State
let cart = [];

/**
 * Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
    // Set Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Init language
    updateContent();

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Render Menu
    renderMenu();

    // Event Listeners for Cart
    setupCartUI();

    // Language Toggle Listener
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'bs' ? 'en' : 'bs';
            localStorage.setItem('language', currentLang);
            updateContent();
            renderMenu();
            updateCartUI();
        });
    }
});

/**
 * Update static content based on language
 */
function updateContent() {
    const t = translations[currentLang];

    // Update HTML elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Update Language Button Text
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'bs' ? 'EN' : 'BS';
    }

    // Update document title and lang
    document.documentElement.lang = currentLang;
}

/**
 * Render Menu to DOM
 */
function renderMenu() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    grid.innerHTML = ''; // Clear

    menuData.forEach(item => {
        const card = document.createElement('article');
        card.className = 'menu-card';

        const name = item.name[currentLang];
        const desc = item.desc[currentLang];

        const imageHtml = item.image ? `
            <div class="card-image">
                <img src="${item.image}" alt="${name}" loading="lazy">
            </div>` : '';

        card.innerHTML = `
            ${imageHtml}
            <div class="card-body">
                <div class="card-header">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-price">${item.price.toFixed(2)} ${translations[currentLang].currency}</span>
                </div>
                <p class="card-desc">${desc}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                    <i class="ph ph-shopping-cart-simple"></i> ${translations[currentLang].add_to_cart}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

/**
 * Cart Logic
 */
function setupCartUI() {
    const cartToggle = document.getElementById('cart-btn');
    const closeCart = document.getElementById('close-cart');
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    const checkoutBtn = document.getElementById('checkout-btn');

    const toggleCart = () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        if (sidebar.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    cartToggle.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);

    checkoutBtn.addEventListener('click', handleCheckout);
}

function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    // Animation feedback
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="ph ph-check"></i> ${translations[currentLang].added}`;
    btn.style.background = 'var(--color-primary)';
    btn.style.color = 'white';

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.color = '';
    }, 1000);

    updateCartUI();
}

function updateQuantity(itemId, change) {
    const itemIndex = cart.findIndex(i => i.id === itemId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;

        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const t = translations[currentLang];
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;

    // Render Items
    const cartContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="ph ph-shopping-cart-simple"></i>
                <p>${t.cart_empty}</p>
            </div>
        `;
    } else {
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name[currentLang]}</h4>
                    <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)} ${t.currency}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
            </div>
        `).join('');
    }

    // Update Total
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total-price').textContent = `${totalPrice.toFixed(2)} ${t.currency}`;
}

/**
 * Checkout logic via WhatsApp Link sharing
 */
function handleCheckout() {
    const t = translations[currentLang];
    if (cart.length === 0) {
        alert(t.cart_alert_empty);
        return;
    }

    const businessPhone = "38761123456"; // Placeholder phone number

    let message = t.whatsapp_order_prefix;

    cart.forEach(item => {
        message += `${item.quantity}x ${item.name[currentLang]} - ${(item.price * item.quantity).toFixed(2)} ${t.currency}\n`;
    });

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n${t.whatsapp_total} *${totalPrice.toFixed(2)} ${t.currency}*\n`;

    message += `\n${t.whatsapp_address}`;

    // Create WhatsApp URI
    const encodeMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeMessage}`;

    // Open link
    window.open(whatsappUrl, '_blank');
}
