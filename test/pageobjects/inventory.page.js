import page from "./page";

class InventoryPage extends page {
  get inventoryItem() {
    return $('.inventory-item[data-test="inventory-item"]');
  }
  get burgerMenuButton() {
    return $("#react-burger-menu-btn");
  }
  get logoutLink() {
    return $("a[data-test='logout-sidebar-link']");
  }
  get inventoryLink() {
    return $("a[data-test='inventory-sidebar-link']");
  }
  get aboutLink() {
    return $("a[data-test='about-sidebar-link']");
  }
  get resetLink() {
    return $("a[data-test='reset-sidebar-link']");
  }
  get addCartButtons() {
    return $$("button=Add to cart");
  }
  get removeCartButton() {
    return $("button=Remove");
  }
  get removeCartButtons() {
    return $$("button=Remove");
  }
  get cartLink() {
    return $(".shopping_cart_link[data-test='shopping-cart-link']");
  }
  get cartBadge() {
    return $("span[data-test='shopping-cart-badge']");
  }
  get productSortSelect() {
    return $("[data-test='product-sort-container']");
  }
  get inventoryItemsTitles() {
    return $$(".inventory_item [data-test='inventory-item-name']");
  }
  get inventoryItemsPrices() {
    return $$(".inventory_item [data-test='inventory-item-price']");
  }
  get inventoryItemsPrice() {
    return $(".inventory_item [data-test='inventory-item-price']");
  }

  open(path) {
    return super.open(path);
  }

  getSocialItem(link) {
    return $(`[data-test="social-${link}"]`);
  }

  getproductSelectOption(value) {
    return $(`option[value=${value}]`);
  }

  isAscSorted(textArray) {
    return textArray.every((value, index, array) => {
      if (index === 0) return true;
      return value >= array[index - 1];
    });
  }

  isDescSorted(textArray) {
    return textArray.every((value, index, array) => {
      if (index === 0) return true;
      return value <= array[index - 1];
    });
  }
  async isInventoryPage() {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await expect(this.inventoryItem).toExist();
    await expect(this.cartLink).toExist();
  }

  async isSidebarElements() {
    await this.burgerMenuButton.click();
    const logoutLinkElem = await this.logoutLink;
    const inventoryLinkElem = await this.inventoryLink;
    const aboutLinkElem = await this.aboutLink;
    const resetLinkElem = await this.resetLink;
    const sidebarElements = $$([
      logoutLinkElem,
      inventoryLinkElem,
      aboutLinkElem,
      resetLinkElem,
    ]);
    await sidebarElements.forEach((elem) => elem.isDisplayed());
  }
  async isRemoveButton() {
    await expect(this.removeCartButton).toExist();
  }

  async getSelectedItemName() {
    const inventoryDescriptionItem = await this.removeCartButton
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
    await this.logoutLink.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  }

  async addToCart(amount) {
    if (amount === 2) {
      await this.addCartButtons[1].click();
      return;
    }
    await this.addCartButtons[0].click();
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

  async removeFromCart() {
    await this.removeCartButtons.forEach((element) => element.click());
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

export default new InventoryPage();
