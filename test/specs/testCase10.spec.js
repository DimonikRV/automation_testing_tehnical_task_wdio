import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";
import cartPage from "../pageobjects/cart.page";

describe("Cart", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("The 'cart item' is deleted from the 'cart list' by clicking on the 'remove button'", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.addToCart(1);
    await inventoryPage.verifyCartBage("yes", 1);
    await inventoryPage.isRemoveButton();
    await inventoryPage.removeFromCart();
    await inventoryPage.verifyCartBage();
    await inventoryPage.getToCart();
    await cartPage.verifyItemsInCart();
  });
});
