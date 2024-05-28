const Page = require("./page");

class CheckoutPage extends Page {
  get firstNameInput() {
    return $("#first-name");
  }

  get lastNameInput() {
    return $("#last-name");
  }

  get postalCodeNameInput() {
    return $("#postal-code");
  }
  get submitButton() {
    return $("#continue");
  }

  open(path) {
    return super.open(path);
  }

  async fillOutTheForm() {
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await this.firstNameInput.setValue("Dmytro");
    await this.lastNameInput.setValue("Reva");
    await this.postalCodeNameInput.setValue(25009);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}

module.exports = new CheckoutPage();
