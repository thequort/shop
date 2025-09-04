document.addEventListener('DOMContentLoaded', () => {
    // Check if the actionFigures data exists and is an array
    if (typeof actionFigures !== 'undefined' && Array.isArray(actionFigures)) {
        const productContainer = document.getElementById('product-container');
        if (productContainer) {
            // Loop through each product in the actionFigures array
            actionFigures.forEach(product => {
                const productCard = `
                    <a href="product.html?id=${product.id}" class="product-card-link">
                        <div class="product-card">
                            <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                            <div class="product-info">
                                <h3>${product.name}</h3>
                                <p>${product.description}</p>
                                <p class="price">${product.price}</p>
                            </div>
                        </div>
                    </a>
                `;
                productContainer.innerHTML += productCard;
            });
        }
    } else {
        const productContainer = document.getElementById('product-container');
        if (productContainer) {
            productContainer.innerHTML = '<p>No products to display at this time.</p>';
        }
    }

    // Menu Bar Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const menuBar = document.getElementById('menu-bar');
    const closeBtn = document.querySelector('.close-btn');

    if (menuToggle && menuBar && closeBtn) {
        menuToggle.addEventListener('click', () => {
            menuBar.classList.toggle('active');
        });

        closeBtn.addEventListener('click', () => {
            menuBar.classList.remove('active');
        });
    }
});
