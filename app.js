/**
 * Menu Data Source based on the image
 */
const menuData = [
    {
        id: '1',
        name: 'Doner mali',
        desc: '(pecivo, junetina - piletina, chili sos, bijeli sos, salata)',
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '2',
        name: 'Doner veliki',
        desc: '(pecivo, junetina - piletina, chili sos, bijeli sos, salata)',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '3',
        name: 'Doner box veliki',
        desc: '(junetina - piletina, chili sos, bijeli sos, salata)',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '4',
        name: 'Doner box + pomfrit',
        desc: '',
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '5',
        name: 'Durum giros tortilja',
        desc: '(tortilja, junetina - piletina, chili sos, bijeli sos, salata)',
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1628191139360-40835e4d03fd?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '6',
        name: 'Bosanski sendvič',
        desc: '(pecivo, goveđa pečenica, sudžuka, namazi)',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1524338785184-10a1bd93c39a?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '7',
        name: 'Hot Dog',
        desc: '(pecivo, hrenovka Wudy, namazi)',
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '8',
        name: 'Chili kobasice u sosu',
        desc: '',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1532634832-68393e8e9e14?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '9',
        name: 'Hamburger',
        desc: '(pecivo, pljeskavica, namazi, salata)',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '10',
        name: 'Cheeseburger',
        desc: '(pecivo, pljeskavica, trapist, namazi, salata)',
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '11',
        name: 'Double Burger',
        desc: '(pecivo, 2 x pljeskavica, namazi, salata)',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '12',
        name: 'Double Cheeseburger',
        desc: '(pecivo, 2 x pljeskavica, 2 x trapist, namazi, salata)',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '13',
        name: 'Double Cheeseburger u prušcanović lepini',
        desc: '(lepina, 2 x pljeskavica, 2 x trapist, namazi, salata)',
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '14',
        name: 'Pljeskavica mala + pomfrit',
        desc: '(pljeskavica, pomfrit, namazi, salata, pecivo)',
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '15',
        name: 'Pljeskavica velika + pomfrit',
        desc: '(2 x pljeskavica, pomfrit, namazi, salata, pecivo)',
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '16',
        name: 'Pljeskavica velika + kajmak',
        desc: '',
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '17',
        name: 'Pileći ražnjići čili + pomfrit',
        desc: '(pileći ražnjići, pomfrit, čili, namazi, salata, pecivo)',
        price: 8.00,
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '18',
        name: 'Čiken',
        desc: '(pileće meso, namazi, salata, pecivo)',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '19',
        name: 'Čiken veliki',
        desc: '',
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '20',
        name: 'Grilovana piletina + pomfrit',
        desc: '(pileće meso, pomfrit, namazi, salata, pecivo)',
        price: 6.00,
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '21',
        name: 'Otkošteni batak karabatak + pomfrit',
        desc: '(otkošteni pileći batak, pomfrit, namazi, salata, pecivo)',
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '22',
        name: 'Pileća salata',
        desc: '',
        price: 10.00,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '23',
        name: 'Lepina Pruščanović, domaći kajmak',
        desc: '',
        price: 5.00,
        image: 'https://images.unsplash.com/photo-1598511726623-d30900350731?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '24',
        name: 'Lepina Pruščanović, domaći kajmak + suho meso',
        desc: '',
        price: 7.00,
        image: 'https://images.unsplash.com/photo-1598511726623-d30900350731?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '25',
        name: 'Pomfrit',
        desc: '(namazi po izboru)',
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '26',
        name: 'Pekarski krompir u sosu',
        desc: '',
        price: 4.00,
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '27',
        name: 'Dodatna lepina',
        desc: '',
        price: 2.00,
        image: 'https://images.unsplash.com/photo-1598511726623-d30900350731?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: '28',
        name: 'Kupus/sezonska salata',
        desc: '',
        price: 3.00,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400'
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
            <div class="card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="card-body">
                <div class="card-header">
                    <h3 class="card-title">${item.name}</h3>
                    <span class="card-price">${item.price.toFixed(2)} KM</span>
                </div>
                <p class="card-desc">${item.desc}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                    <i class="ph ph-shopping-cart-simple"></i> Dodaj u korpu
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
