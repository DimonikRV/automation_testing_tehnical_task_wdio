const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");
const CheckoutPage = require("../pageobjects/checkout.page");

describe("Checkout", () => {
  it("Checkout with entered 'first name', 'last name' and empty 'postal code' field", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.isProductsInCart();
    await InventoryPage.getToCart();
    await CartPage.openCheckoutForm();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await CheckoutPage.fillOutTheForm("Dmytro", "Reva", undefined);
    await CheckoutPage.submitForm();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await CheckoutPage.checkErrorMessage("postal code");
  });
  it("Checkout with entered 'first name', 'postal code' and empty 'last name' field", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.isProductsInCart();
    await InventoryPage.getToCart();
    await CartPage.openCheckoutForm();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await CheckoutPage.fillOutTheForm("Dmytro", undefined, 25009);
    await CheckoutPage.submitForm();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await CheckoutPage.checkErrorMessage("last name");
  });
  it("Checkout with entered 'last name', 'post code' and empty 'first name' field", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.isProductsInCart();
    await InventoryPage.getToCart();
    await CartPage.openCheckoutForm();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await CheckoutPage.fillOutTheForm(undefined, "Reva", 25009);
    await CheckoutPage.submitForm();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await CheckoutPage.checkErrorMessage("first name");
  });
});
