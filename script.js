document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');

    if (productContainer) {
        // Fetch products from Firestore
        db.collection("products").get().then((querySnapshot) => {
            if (querySnapshot.empty) {
                productContainer.innerHTML = '<p>No products to display at this time.</p>';
                return;
            }
            querySnapshot.forEach((doc) => {
                const product = doc.data();
                const productCard = `
                    <a href="product.html?id=${doc.id}" class="product-card-link">
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
        }).catch((error) => {
            console.error("Error getting documents: ", error);
            productContainer.innerHTML = '<p>Error loading products. Please try again later.</p>';
        });
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
