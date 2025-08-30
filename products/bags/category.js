document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');

    if (!productsGrid) return; 

    // Get the category name from the page URL
    const currentPath = window.location.pathname.split('/');
    const categoryName = currentPath[currentPath.length - 2];
    
    // The fetch call needs to go up one level to find the JSON file
    const dataFile = `../${categoryName}.json`;

    fetch(dataFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data for ${categoryName}.`);
            }
            return response.json();
        })
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('a');
                productCard.href = `../product-page.html?id=${product.id}`;
                productCard.className = 'product-card';
                
                const minPrice = Math.min(...product.options.map(option => option.price));
                const currency = product.options[0].currency;
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h4>${product.name}</h4>
                        <p>From ${currency} ${minPrice.toFixed(2)}</p>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            productsGrid.innerHTML = `<p>Error loading products. Please try again later.</p>`;
        });
});
