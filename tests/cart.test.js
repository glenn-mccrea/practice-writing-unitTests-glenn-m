const cartTest = require("../cart.js");

let cart = [];

describe("addItem", function () {
  test("Should add an item to the specified cart in the quantity input.", function () {
    expect(cartTest.addItem(cart, "pants", 2)).toStrictEqual([
      { item: "pants", quantity: 2 },
    ]);
  });
});

describe("removeItem", function () {
  test("Should remove items from the cart", function () {
    expect(cartTest.removeItem(cart, "pants")).toStrictEqual([]);
  });
});

describe("getTotalItems", function () {
  test("Should add an item to the specified cart in the quantity input.", function () {
    expect(cartTest.addItem(cart, "pants", 2)).toBe(`[
      { item: "pants", quantity: 2 },
    ]`);
  });
});
