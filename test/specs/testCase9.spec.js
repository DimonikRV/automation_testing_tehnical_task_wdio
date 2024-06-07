import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";
import cartPage from "../pageobjects/cart.page";

describe("Checkout", () => {
  it("Checkout without products", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs("standard_user", "secret_sauce");
    await loginPage.login();
    await inventoryPage.verifyCartBage();
    await inventoryPage.getToCart();
    await cartPage.openCheckoutForm();
    await cartPage.isCartPage();
    await cartPage.isErrorMessage();
  });
});
