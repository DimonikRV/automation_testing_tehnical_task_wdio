const Page = require("./page");

class CheckoutCompletePage extends Page {
  get backHomeButton() {
    return $("button[data-test='back-to-products']");
  }
  get subTitle() {
    return $("h2[data-test='complete-header']");
  }

  open(path) {
    return super.open(path);
  }

  async verifyCheckoutCompleteTitle() {
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await expect(this.subTitle).toHaveText(
      expect.stringContaining("Thank you for your order!")
    );
  }

  async getBackToInventoryPage() {
    await this.backHomeButton.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  }
}

module.exports = new CheckoutCompletePage();
