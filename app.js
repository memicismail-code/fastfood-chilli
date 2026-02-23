/**
 * Menu Data Source based on the image
 */
const menuData = [
    {
        id: '1',
        name: 'Doner mali',
        desc: '(pecivo, junetina - piletina, chili sos, bijeli sos, salata)',
        price: 6.00
    },
    {
        id: '2',
        name: 'Doner veliki',
        desc: '(pecivo, junetina - piletina, chili sos, bijeli sos, salata)',
        price: 8.00
    },
    {
        id: '3',
        name: 'Doner box veliki',
        desc: '(junetina - piletina, chili sos, bijeli sos, salata)',
        price: 8.00
    },
    {
        id: '4',
        name: 'Doner box + pomfrit',
        desc: '',
        price: 10.00
    },
    {
        id: '5',
        name: 'Durum giros tortilja',
        desc: '(tortilja, junetina - piletina, chili sos, bijeli sos, salata)',
        price: 7.00
    },
    {
        id: '6',
        name: 'Bosanski sendvič',
        desc: '(pecivo, goveđa pečenica, sudžuka, namazi)',
        price: 5.00
    },
    {
        id: '7',
        name: 'Hot Dog',
        desc: '(pecivo, hrenovka Wudy, namazi)',
        price: 3.00
    },
    {
        id: '8',
        name: 'Chili kobasice u sosu',
        desc: '',
        price: 8.00
    },
    {
        id: '9',
        name: 'Hamburger',
        desc: '(pecivo, pljeskavica, namazi, salata)',
        price: 5.00
    },
    {
        id: '10',
        name: 'Cheeseburger',
        desc: '(pecivo, pljeskavica, trapist, namazi, salata)',
        price: 6.00
    },
    {
        id: '11',
        name: 'Double Burger',
        desc: '(pecivo, 2 x pljeskavica, namazi, salata)',
        price: 8.00
    },
    {
        id: '12',
        name: 'Double Cheeseburger',
        desc: '(pecivo, 2 x pljeskavica, 2 x trapist, namazi, salata)',
        price: 8.00
    },
    {
        id: '13',
        name: 'Double Cheeseburger u prušcanović lepini',
        desc: '(lepina, 2 x pljeskavica, 2 x trapist, namazi, salata)',
        price: 10.00
    },
    {
        id: '14',
        name: 'Pljeskavica mala + pomfrit',
        desc: '(pljeskavica, pomfrit, namazi, salata, pecivo)',
        price: 6.00
    },
    {
        id: '15',
        name: 'Pljeskavica velika + pomfrit',
        desc: '(2 x pljeskavica, pomfrit, namazi, salata, pecivo)',
        price: 10.00
    },
    {
        id: '16',
        name: 'Pljeskavica velika + kajmak',
        desc: '',
        price: 10.00
    },
    {
        id: '17',
        name: 'Pileći ražnjići čili + pomfrit',
        desc: '(pileći ražnjići, pomfrit, čili, namazi, salata, pecivo)',
        price: 8.00
    },
    {
        id: '18',
        name: 'Čiken',
        desc: '(pileće meso, namazi, salata, pecivo)',
        price: 5.00
    },
    {
        id: '19',
        name: 'Čiken veliki',
        desc: '',
        price: 10.00
    },
    {
        id: '20',
        name: 'Grilovana piletina + pomfrit',
        desc: '(pileće meso, pomfrit, namazi, salata, pecivo)',
        price: 6.00
    },
    {
        id: '21',
        name: 'Otkošteni batak karabatak + pomfrit',
        desc: '(otkošteni pileći batak, pomfrit, namazi, salata, pecivo)',
        price: 7.00
    },
    {
        id: '22',
        name: 'Pileća salata',
        desc: '',
        price: 10.00
    },
    {
        id: '23',
        name: 'Lepina Pruščanović, domaći kajmak',
        desc: '',
        price: 5.00
    },
    {
        id: '24',
        name: 'Lepina Pruščanović, domaći kajmak + suho meso',
        desc: '',
        price: 7.00
    },
    {
        id: '25',
        name: 'Pomfrit',
        desc: '(namazi po izboru)',
        price: 3.00
    },
    {
        id: '26',
        name: 'Pekarski krompir u sosu',
        desc: '',
        price: 4.00
    },
    {
        id: '27',
        name: 'Dodatna lepina',
        desc: '',
        price: 2.00
    },
    {
        id: '28',
        name: 'Kupus/sezonska salata',
        desc: '',
        price: 3.00
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
});

/**
 * Render Menu to DOM
 */
function renderMenu() {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = ''; // Clear

    menuData.forEach(item => {
        const card = document.createElement('article');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${item.name}</h3>
                <span class="card-price">${item.price.toFixed(2)} KM</span>
            </div>
            <p class="card-desc">${item.desc}</p>
            <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                <i class="ph ph-shopping-cart-simple"></i> Dodaj u korpu
            </button>
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
    btn.innerHTML = '<i class="ph ph-check"></i> Dodano';
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
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;

    // Render Items
    const cartContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="ph ph-shopping-cart-simple"></i>
                <p>Korpa je prazna</p>
            </div>
        `;
    } else {
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)} KM</span>
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
    document.getElementById('cart-total-price').textContent = `${totalPrice.toFixed(2)} KM`;
}

/**
 * Checkout logic via WhatsApp Link sharing
 */
function handleCheckout() {
    if (cart.length === 0) {
        alert("Vaša korpa je prazna!");
        return;
    }

    const businessPhone = "38761123456"; // Placeholder phone number

    let message = "Novi zahtjev za dostavu:\n\n";

    cart.forEach(item => {
        message += `${item.quantity}x ${item.name} - ${(item.price * item.quantity).toFixed(2)} KM\n`;
    });

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nUkupno za platiti: *${totalPrice.toFixed(2)} KM*\n`;

    message += "\nMolim vas, dostavite na sljedeću adresu: [Upišite adresu]";

    // Create WhatsApp URI
    const encodeMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeMessage}`;

    // Open link
    window.open(whatsappUrl, '_blank');
}
