const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");

describe("Checkout", () => {
  it("Checkout without products", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.isProductsInCart();
    await InventoryPage.getToCart();
    await CartPage.openCheckoutForm();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
  });
});
