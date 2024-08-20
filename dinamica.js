// Auto-pase del slider
$('#productSlider').carousel({
    interval: 3000,
    pause: false
});

// Confirmación de compra
function confirmPurchase(productId) {
    let confirmMessage = `¿Estás seguro de que deseas comprar el producto ${productId}?`;
    let result = confirm(confirmMessage);
    if (result) {
        window.location.href = `pagina_compra.html?producto=${productId}`;
    }
}
