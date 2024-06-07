import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";
import cartPage from "../pageobjects/cart.page";
import checkoutPage from "../pageobjects/checkout.page";
import securePage from "../pageobjects/secure.page";

describe("Checkout", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("Checkout with entered 'first name', 'last name' and empty 'postal code' field", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.addToCart(1);
    await inventoryPage.verifyCartBage("yes", 1);
    await inventoryPage.getToCart();
    await cartPage.openCheckoutForm();
    await checkoutPage.fillOutTheForm("Dmytro", "Reva", undefined);
    await checkoutPage.submitForm();
    await securePage.checkErrorMessage("postal code");
    await checkoutPage.getBackToCartPage();
    await cartPage.removeCardsFromCart();
  });
  it("Checkout with entered 'first name', 'postal code' and empty 'last name' field", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.addToCart(1);
    await inventoryPage.verifyCartBage("yes", 1);
    await inventoryPage.getToCart();
    await cartPage.openCheckoutForm();
    await checkoutPage.fillOutTheForm("Dmytro", undefined, 25009);
    await checkoutPage.submitForm();
    await securePage.checkErrorMessage("last name");
    await checkoutPage.getBackToCartPage();
    await cartPage.removeCardsFromCart();
  });
  it("Checkout with entered 'last name', 'post code' and empty 'first name' field", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.addToCart(1);
    await inventoryPage.verifyCartBage("yes", 1);
    await inventoryPage.getToCart();
    await cartPage.openCheckoutForm();
    await checkoutPage.fillOutTheForm(undefined, "Reva", 25009);
    await checkoutPage.submitForm();
    await securePage.checkErrorMessage("first name");
    await checkoutPage.getBackToCartPage();
    await cartPage.removeCardsFromCart();
  });
});
