// Get the HTML element where we want to display the products
const productContainer = document.getElementById('product-container');

// Check if the actionFigures data exists and is an array
if (typeof actionFigures !== 'undefined' && Array.isArray(actionFigures)) {
    // Loop through each product in the actionFigures array
    actionFigures.forEach(product => {
        // Create the HTML for a single product card
        const productCard = `
            <a href="https://wa.me/8801540649467?text=Hi%2C%20I%27m%20interested%20in%20pre-ordering%20the%20${encodeURIComponent(product.name)}!" target="_blank" class="product-card-link">
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
        
        // Add the new product card HTML to the product container
        productContainer.innerHTML += productCard;
    });
} else {
    // Display an error message if the data is not found
    productContainer.innerHTML = '<p>No products to display at this time.</p>';
}
