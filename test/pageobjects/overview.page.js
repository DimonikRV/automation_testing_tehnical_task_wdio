import page from "./page";

class OverviewPage extends page {
  get cartItem() {
    return $(".cart_item[data-test='inventory-item']");
  }
  get cartItemName() {
    return $('.cart_item [data-test="inventory-item-name"]');
  }
  get selectedItemPrices() {
    return $$("[data-test='inventory-item-price']");
  }
  get subTotalPrice() {
    return $("[data-test='subtotal-label']");
  }
  get finishButton() {
    return $("button[data-test='finish']");
  }

  open(path) {
    return super.open(path);
  }

  async verifyItemsInOverview(text) {
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    await expect(this.cartItem).toExist();
    await expect(this.cartItemName).toHaveText(expect.stringContaining(text));
  }

  async checkSubTotalPrice(selectedItemPrice) {
    await expect(this.subTotalPrice).toHaveText(
      expect.stringContaining(selectedItemPrice)
    );
  }
  async getItemPricesSum() {
    const arr = await this.selectedItemPrices.map((price) => price.getText());
    return String(
      arr.reduce((sum, element) => parseFloat(element.slice(1)) + sum, 0)
    );
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
}

export default new OverviewPage();
