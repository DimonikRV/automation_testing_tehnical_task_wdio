const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");
const CheckoutPage = require("../pageobjects/checkout.page");
const OverviewPage = require("../pageobjects/overview.page");

describe("Checkout overview", () => {
  it("The total price is counted correctly", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    await InventoryPage.addToCart(1);
    await InventoryPage.verifyCartBage("yes", 1);
    await InventoryPage.addToCart(2);
    await InventoryPage.verifyCartBage("yes", 2);
    await InventoryPage.getToCart();
    await CartPage.openCheckoutForm();
    await CheckoutPage.fillOutTheForm("Dmytro", "Reva", 25009);
    await CheckoutPage.submitForm();
    const itemPricesSum = await OverviewPage.getItemPricesSum();
    await OverviewPage.checkSubTotalPrice(itemPricesSum);
  });
});
