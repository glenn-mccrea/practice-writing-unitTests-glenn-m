let cart = [];

function addItem(cart, item, quantity) {
  cart.push({ item, quantity });
  return cart;
}

function removeItem(cart, item) {
  const index = cart.findIndex((cartItem) => cartItem.name === item.name);
  if (index !== -1) {
    cart.splice(index, 1);
    return cart;
  }
}

function getTotalItems(cart) {
  return;
  cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0 /*init accumlulator to zero*/
  );
}

module.exports = { addItem, removeItem, getTotalItems };
