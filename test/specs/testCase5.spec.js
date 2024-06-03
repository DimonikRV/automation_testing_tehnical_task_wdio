const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");
const inventoryPage = require("../pageobjects/inventory.page");

describe("Cart", () => {
  it("Saving the card after logout", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    await InventoryPage.addToCart(1);
    await InventoryPage.verifyCartBage("yes", 1);
    const selectedItemName = await InventoryPage.getSelectedItemName();
    await InventoryPage.getToCart();
    await CartPage.verifyItemsInCart(selectedItemName);
    await inventoryPage.isSidebarElements();
    await InventoryPage.logout();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    await InventoryPage.getToCart();
    await CartPage.verifyItemsInCart(selectedItemName);
  });
});
