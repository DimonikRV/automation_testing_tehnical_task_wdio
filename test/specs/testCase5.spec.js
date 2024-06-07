import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";
import cartPage from "../pageobjects/cart.page";

describe("Cart", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("Saving the card after logout", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.addToCart(1);
    await inventoryPage.verifyCartBage("yes", 1);
    const selectedItemName = await inventoryPage.getSelectedItemName();
    await inventoryPage.getToCart();
    await cartPage.verifyItemsInCart(selectedItemName);
    await inventoryPage.isSidebarElements();
    await inventoryPage.logout();
    await loginPage.fillOutInputs("standard_user", "secret_sauce");
    await loginPage.login();
    await inventoryPage.getToCart();
    await cartPage.verifyItemsInCart(selectedItemName);
  });
});
