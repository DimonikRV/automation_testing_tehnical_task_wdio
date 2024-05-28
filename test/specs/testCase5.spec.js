const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");

describe("Cart", () => {
  it("Saving the card after logout", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.addToCart();
    const selectedItemName = await InventoryPage.getSelectedItemName();
    await InventoryPage.getToCart();
    await CartPage.verifyItemsInCart(selectedItemName);
    await InventoryPage.logout();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.getToCart();
    await CartPage.verifyItemsInCart(selectedItemName);
  });
});
