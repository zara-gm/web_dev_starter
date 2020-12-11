// let name2 = 'Stranger',
//     message = `Hello ${name2}`,
//     price = 49.99,
//     name = 'Hiking Boots',
//     discounted = false;

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

/* When you are working with floating points, you always need to convert the floating point number to a fixed amount of decimal places if you're going to compare it to a literal. Such as 2.4
*/
// Otherwise your calculations could be off
//The plus sign is a simple way to convert a string returned by toFixed back into a number
if (+(1.1 + 1.3).toFixed(2) === 2.4) {
    let message = 'hello';
    showMessage(message);
}