const Page = require("./page");

class OverviewPage extends Page {
  get cartItem() {
    return $(".cart_item[data-test='inventory-item']");
  }
  get cartItemName() {
    return $('.cart_item [data-test="inventory-item-name"]');
  }

  get subTotalPrice() {
    return $("[data-test='subtotal-label']");
  }
  get finishButton() {
    return $("#finish");
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

  async finishCheckout() {
    await this.finishButton.click();
  }
}

module.exports = new OverviewPage();
