import faker from 'faker';
const cartText = `<div> Ypu have ${faker.random.number()} items in cart`;
document.getElementById('dev-cart').innerHTML = cartText;
