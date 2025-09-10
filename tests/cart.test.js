const cart = require("../cart.js");

describe("addItem", function () {
  test("Should add an item to the specified cart in the quantity input.", function () {
    expect(cart.addItem(cart, "pants", 2)).toBe(`[
  { item: 'pants', quantity: 5 }
]`);
  });
});
