document.addEventListener('DOMContentLoaded', () => {

    // Get the products grid on the page
    const productsGrid = document.querySelector('.products-grid');

    if (!productsGrid) {
        // If there's no products grid, we're not on a category page, so we stop here.
        return;
    }

    // This is the clever part: we figure out the category from the URL.
    // For a URL like /products/bags/bags.html, this will extract "bags".
    const currentPath = window.location.pathname.split('/');
    const categoryName = currentPath[currentPath.length - 2];
    
    // Construct the path to the correct JSON file based on the category.
    const dataFile = `${categoryName}.json`;

    // Fetch the data from the JSON database
    fetch(`data/${dataFile}`)
        .then(response => {
            // Check if the network response was successful
            if (!response.ok) {
                // If it's not successful, throw an error.
                throw new Error(`Failed to fetch data for ${categoryName}.`);
            }
            // Parse the JSON data from the response.
            return response.json();
        })
        .then(products => {
            // Loop through each product we got from the JSON file
            products.forEach(product => {
                // Create a new HTML element for the product card
                const productCard = document.createElement('a');
                productCard.href = `../product-page.html?id=${product.id}`;
                productCard.className = 'product-card';
                
                // Get the lowest price for the "From" display
                const minPrice = Math.min(...product.options.map(option => option.price));
                const currency = product.options[0].currency;
                
                // Set the inner HTML of the card with the product data
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h4>${product.name}</h4>
                        <p>From ${currency} ${minPrice.toFixed(2)}</p>
                    </div>
                `;
                
                // Add the new product card to the grid
                productsGrid.appendChild(productCard);
            });
        })
        .catch(error => {
            // Catch any errors and log them to the console
            console.error('Error fetching data:', error);
            productsGrid.innerHTML = `<p>Error loading products. Please try again later.</p>`;
        });
});

