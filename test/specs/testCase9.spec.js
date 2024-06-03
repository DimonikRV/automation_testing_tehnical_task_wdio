const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");

describe("Checkout", () => {
  it("Checkout without products", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    await InventoryPage.verifyCartBage();
    await InventoryPage.getToCart();
    await CartPage.openCheckoutForm();
    await CartPage.isCartPage();
    await CartPage.isErrorMessage();
  });
});
