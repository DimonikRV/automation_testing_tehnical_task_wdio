const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");
const CheckoutPage = require("../pageobjects/checkout.page");
const OverviewPage = require("../pageobjects/overview.page");
const CheckoutCompletePage = require("../pageobjects/checkoutComplete.page");

describe("e2e", () => {
  it("Valid checkout", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.addToCart();
    await InventoryPage.isRemoveButton();
    const selectedItemName = await InventoryPage.getSelectedItemName();
    const selectedItemPrice = await InventoryPage.getSelectedItemPrice();
    await InventoryPage.getToCart();
    await CartPage.verifyItemsInCart(selectedItemName);
    await CartPage.openCheckoutForm();
    await CheckoutPage.fillOutTheForm("Dmytro", "Reva", 25009);
    await CheckoutPage.submitForm();
    await OverviewPage.verifyItemsInOverview(selectedItemName);
    await OverviewPage.checkSubTotalPrice(selectedItemPrice);
    await OverviewPage.finishCheckout();
    await CheckoutCompletePage.verifyCheckoutCompleteTitle();
    await CheckoutCompletePage.getBackToInventoryPage();
    await InventoryPage.isProductsInCart();
  });
});
