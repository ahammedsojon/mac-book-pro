function extraCost(variant, cost) {
    document.getElementById(variant).innerText = cost;
    // update price
    document.getElementById('total-price').innerText = updatePrice();
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

// extra memory cost
document.getElementById('memory').addEventListener('click', function (e) {
    const id = e.target.getAttribute('id');
    if (id == 'memory-8gb') {
        extraCost('memory-cost', '0');
    }

    if (id == 'memory-16gb') {
        extraCost('memory-cost', '180');
    }
})

// extra storage cost
document.getElementById('storage').addEventListener('click', function (e) {
    const id = e.target.getAttribute('id');
    if (id == 'storage-256gb') {
        extraCost('storage-cost', '0');
    }
    if (id == 'storage-512gb') {
        extraCost('storage-cost', '100');
    }
    if (id == 'storage-1tb') {
        extraCost('storage-cost', '180');
    }
})
// delivery charge
document.getElementById('delivery').addEventListener('click', function (e) {
    const id = e.target.getAttribute('id');
    if (id == 'delivery-25-aug') {
        extraCost('delivery-charge', '0');
    }
    if (id == 'delivery-21-aug') {
        extraCost('delivery-charge', '20');
    }
})
