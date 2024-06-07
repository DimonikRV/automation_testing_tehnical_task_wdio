import page from "./page";

class CartPage extends page {
  get cartItem() {
    return $(".cart_item[data-test='inventory-item']");
  }
  get cartItemName() {
    return $('.cart_item [data-test="inventory-item-name"]');
  }
  get checkoutButton() {
    return $("button[data-test='checkout']");
  }
  get removeCartButtons() {
    return $$("button=Remove");
  }
  get errorMessage() {
    return $("aria/Cart is empty");
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
  async removeCardsFromCart() {
    await this.removeCartButtons.forEach((removeButton) =>
      removeButton.click()
    );
  }
  async isCartPage() {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
  }
  async isErrorMessage() {
    await this.errorMessage.isDisplayed();
  }
}

export default new CartPage();
