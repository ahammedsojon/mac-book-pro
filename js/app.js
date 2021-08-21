function extraCost(variant, cost) {
    document.getElementById(variant).innerText = cost;
    // update price
    document.getElementById('total-price').innerText = updatePrice();
    document.getElementById('price-center').innerText = updatePrice();
}
function updatePrice() {
    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCostPrice = parseInt(memoryCostText);
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCostPrice = parseInt(storageCostText);
    const deliveryChargeText = document.getElementById('delivery-charge').innerText;
    const deliveryCharge = parseInt(deliveryChargeText);
    const totalPrice = 1299 + memoryCostPrice + storageCostPrice + deliveryCharge;
    return totalPrice;
}
function addPromoCode() {
    const promoInput = document.getElementById('promo-input');
    let totalPriceText = document.getElementById('price-center');
    const totalPrice = parseInt(totalPriceText.innerText);
    if (promoInput.value == 'stevekaku') {
        const discount = (totalPrice * 20) / 100;
        totalPriceText.innerText = totalPrice - discount;
        promoInput.value = '';
        document.getElementById('promo-btn').disabled = true;
    }
}
// extra memory cost
document.getElementById('memory').addEventListener('click', function (e) {
    const id = e.target.getAttribute('id');
    if (id == 'memory-8gb') {
        extraCost('memory-cost', '0');
        document.getElementById('promo-btn').disabled = false;
    }

    if (id == 'memory-16gb') {
        extraCost('memory-cost', '180');
        document.getElementById('promo-btn').disabled = false;
    }
})

// extra storage cost
document.getElementById('storage').addEventListener('click', function (e) {
    const id = e.target.getAttribute('id');
    if (id == 'storage-256gb') {
        extraCost('storage-cost', '0');
        document.getElementById('promo-btn').disabled = false;
    }
    if (id == 'storage-512gb') {
        extraCost('storage-cost', '100');
        document.getElementById('promo-btn').disabled = false;
    }
    if (id == 'storage-1tb') {
        extraCost('storage-cost', '180');
        document.getElementById('promo-btn').disabled = false;
    }
})
// delivery charge
document.getElementById('delivery').addEventListener('click', function (e) {
    const id = e.target.getAttribute('id');
    if (id == 'delivery-25-aug') {
        extraCost('delivery-charge', '0');
        document.getElementById('promo-btn').disabled = false;
    }
    if (id == 'delivery-21-aug') {
        extraCost('delivery-charge', '20');
        document.getElementById('promo-btn').disabled = false;
    }
})

// add promo code
document.getElementById('promo-btn').addEventListener('click', function (e) {
    addPromoCode();
})
