const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const CartPage = require("../pageobjects/cart.page");

describe("Cart", () => {
  it("The 'cart item' is deleted from the 'cart list' by clicking on the 'remove button'", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.addToCart();
    await InventoryPage.isProductsInCart("yes");
    await InventoryPage.isRemoveButton();
    await InventoryPage.removeFromCard();
    await InventoryPage.isProductsInCart();
    await InventoryPage.getToCart();
    await CartPage.verifyItemsInCart();
  });
});
