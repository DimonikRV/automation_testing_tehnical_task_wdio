import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";
import cartPage from "../pageobjects/cart.page";
import checkoutPage from "../pageobjects/checkout.page";
import overviewPage from "../pageobjects/overview.page";

describe("Checkout overview", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("The total price is counted correctly", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.addToCart(1);
    await inventoryPage.verifyCartBage("yes", 1);
    await inventoryPage.addToCart(2);
    await inventoryPage.verifyCartBage("yes", 2);
    await inventoryPage.getToCart();
    await cartPage.openCheckoutForm();
    await checkoutPage.fillOutTheForm("Dmytro", "Reva", 25009);
    await checkoutPage.submitForm();
    const itemPricesSum = await overviewPage.getItemPricesSum();
    await overviewPage.checkSubTotalPrice(itemPricesSum);
  });
});
