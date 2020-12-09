let name2 = 'Stranger',
    message = `Hello ${name2}`,
    price = 49.99,
    name = 'Hiking Boots',
    discounted = false;

price *= 5;

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

showMessage(message);