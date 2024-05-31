const Page = require("./page");

class InventoryPage extends Page {
  get burgerMenuButton() {
    return $("#react-burger-menu-btn");
  }
  get logoutLink() {
    return $("[data-test='logout-sidebar-link']");
  }
  get addToCartBtn() {
    return $("#add-to-cart-sauce-labs-backpack");
  }
  get addToCartSecondBtn() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }
  get removeToCartBtn() {
    return $("#remove-sauce-labs-backpack");
  }
  get cartLink() {
    return $(".shopping_cart_link[data-test='shopping-cart-link']");
  }
  get cartBadge() {
    return $(".shopping_cart_badge");
  }
  get productSortSelect() {
    return $("[data-test='product-sort-container']");
  }
  get inventoryItemsTitles() {
    return $$(".inventory_list [data-test='inventory-item-name']");
  }
  get inventoryItemsPrices() {
    return $$(".inventory_list [data-test='inventory-item-price']");
  }
  get inventoryItemsPrice() {
    return $(".inventory_list [data-test='inventory-item-price']");
  }

  getSocialItem(link) {
    return $(`[data-test="social-${link}"]`);
  }

  getproductSelectOption(value) {
    return $(`option[value=${value}]`);
  }

  open(path) {
    return super.open(path);
  }
  async isRemoveButton() {
    await expect(this.removeToCartBtn).toExist();
  }
  async getSelectedItemName() {
    const inventoryDescriptionItem = await this.removeToCartBtn
      .parentElement()
      .parentElement();
    return await inventoryDescriptionItem
      .$('[data-test="inventory-item-name"]')
      .getText();
  }
  async getSelectedItemPrice() {
    return await this.inventoryItemsPrice.getText();
  }

  async logout() {
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  }

  async addToCart(amount) {
    if (amount === 2) {
      await this.addToCartSecondBtn.click();
      return;
    }
    await this.addToCartBtn.click();
  }
  async verifyCartBage(yes, amount) {
    if (!yes) {
      return await this.cartBadge.waitForExist({
        timeout: 6000,
        reverse: true,
      });
    }
    await this.cartBadge.waitForExist({ timeout: 6000 });
    if (amount === 2) {
      return await expect(this.cartBadge).toHaveText(
        expect.stringContaining("2")
      );
    }
    await expect(this.cartBadge).toHaveText(expect.stringContaining("1"));
  }
  async removeFromCard() {
    await this.removeToCartBtn.click();
  }

  async getToCart() {
    await this.cartLink.click();
  }

  async selectOfSortingInventoryItems(value) {
    await this.productSortSelect.click();
    await this.getproductSelectOption(value).click();
    if (value === "az" || "za") {
      return await this.inventoryItemsTitles.map((element) =>
        element.getText()
      );
    } else if (value === "lohi" || "hilo") {
      return await this.inventoryItemsPrices.map((element) =>
        element.getText()
      );
    }
  }

  async selectSocialLink(link) {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await this.getSocialItem(link).click();
    if (link === "twitter") {
      await browser.switchWindow("https://x.com/saucelabs?mx=2");
      await expect(browser).toHaveUrl("https://x.com/saucelabs?mx=2");
    } else if (link === "facebook") {
      await browser.switchWindow("https://www.facebook.com/saucelabs");
      await expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
    } else if (link === "linkedin") {
      await browser.switchWindow(
        "https://www.linkedin.com/company/sauce-labs/"
      );
      await expect(browser).toHaveUrl(
        "https://www.linkedin.com/company/sauce-labs/"
      );
    }
    await browser.switchWindow("https://www.saucedemo.com/inventory.html");
  }
}

module.exports = new InventoryPage();
