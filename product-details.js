document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = actionFigures.find(item => item.id === productId);

    if (product) {
        const productPageTitle = document.getElementById('product-page-title');
        const productName = document.getElementById('product-detail-name');
        const productPrice = document.getElementById('product-detail-price');
        const productDescription = document.getElementById('product-detail-description');
        const mainProductImage = document.getElementById('main-product-image');
        const thumbnailGallery = document.getElementById('thumbnail-gallery');
        const preOrderButton = document.querySelector('.pre-order-button');

        productPageTitle.textContent = product.name;
        productName.textContent = product.name;
        productPrice.textContent = product.price;
        productDescription.textContent = product.description;
        mainProductImage.src = product.images[0];
        mainProductImage.alt = product.name;

        product.images.forEach((imageSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imageSrc;
            thumbnail.alt = `${product.name} image ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            if (index === 0) {
                thumbnail.classList.add('active');
            }
            thumbnail.addEventListener('click', () => {
                mainProductImage.src = imageSrc;
                document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            thumbnailGallery.appendChild(thumbnail);
        });

        preOrderButton.addEventListener('click', () => {
            const productUrl = encodeURIComponent(window.location.href);
            window.open(`https://wa.me/8801540649467?text=Hello,%20I'd%20like%20to%20pre-order%20the%20${encodeURIComponent(product.name)}!%0A%0AProduct%20Link:%20${productUrl}`, '_blank');
        });

    } else {
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = '<p class="not-found">Product not found.</p>';
    }
});
