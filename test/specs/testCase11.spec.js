const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");
const CheckoutPage = require("../pageobjects/checkout.page");

describe("Checkout", () => {
  it("Checkout with entered 'first name', 'last name' and empty 'postal code' field", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.addToCart(1);
    await InventoryPage.verifyCartBage("yes", 1);
    await InventoryPage.getToCart();
    await CartPage.openCheckoutForm();
    await CheckoutPage.fillOutTheForm("Dmytro", "Reva", undefined);
    await CheckoutPage.submitForm();
    await CheckoutPage.checkErrorMessage("postal code");
    await CheckoutPage.getBackToCartPage();
    await CartPage.removeCardsFromCart();
  });
  it("Checkout with entered 'first name', 'postal code' and empty 'last name' field", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.addToCart(1);
    await InventoryPage.verifyCartBage("yes", 1);
    await InventoryPage.getToCart();
    await CartPage.openCheckoutForm();
    await CheckoutPage.fillOutTheForm("Dmytro", undefined, 25009);
    await CheckoutPage.submitForm();
    await CheckoutPage.checkErrorMessage("last name");
    await CheckoutPage.getBackToCartPage();
    await CartPage.removeCardsFromCart();
  });
  it("Checkout with entered 'last name', 'post code' and empty 'first name' field", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.addToCart(1);
    await InventoryPage.verifyCartBage("yes", 1);
    await InventoryPage.getToCart();
    await CartPage.openCheckoutForm();
    await CheckoutPage.fillOutTheForm(undefined, "Reva", 25009);
    await CheckoutPage.submitForm();
    await CheckoutPage.checkErrorMessage("first name");
    await CheckoutPage.getBackToCartPage();
    await CartPage.removeCardsFromCart();
  });
});
