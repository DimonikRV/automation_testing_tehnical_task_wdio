import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";
import cartPage from "../pageobjects/cart.page";
import securePage from "../pageobjects/secure.page";

describe("Checkout", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("Checkout without products", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.verifyCartBage();
    await inventoryPage.getToCart();
    await cartPage.openCheckoutForm();
    await cartPage.isCartPage();
    await securePage.isErrorMessage();
  });
});
