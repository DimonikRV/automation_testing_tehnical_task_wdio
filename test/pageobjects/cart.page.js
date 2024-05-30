const Page = require("./page");

class CartPage extends Page {
  get cartItem() {
    return $(".cart_item[data-test='inventory-item']");
  }
  get cartItemName() {
    return $('.cart_item [data-test="inventory-item-name"]');
  }
  get checkoutButton() {
    return $("#checkout");
  }

  open(path) {
    return super.open(path);
  }

  async verifyItemsInCart(text) {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
    if (!text) {
      return await this.cartItem.waitForExist({ timeout: 6000, reverse: true });
    }
    await expect(this.cartItem).toExist();
    await expect(this.cartItemName).toHaveText(expect.stringContaining(text));
  }

  async openCheckoutForm() {
    await this.checkoutButton.click();
  }
}

module.exports = new CartPage();
