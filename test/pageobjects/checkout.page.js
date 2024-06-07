import page from "./page";

class CheckoutPage extends page {
  get firstNameInput() {
    return $("input[data-test='firstName']");
  }

  get lastNameInput() {
    return $("input[data-test='lastName']");
  }

  get postalCodeInput() {
    return $("input[data-test='postalCode']");
  }

  get submitButton() {
    return $("input[data-test='continue']");
  }

  get cancelButton() {
    return $("button[data-test='cancel']");
  }

  open(path) {
    return super.open(path);
  }

  async fillOutTheForm(firstName, lastName, postCode) {
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    if (!firstName) {
      await this.lastNameInput.setValue(lastName);
      await this.postalCodeInput.setValue(postCode);
      return;
    }
    if (!lastName) {
      await this.firstNameInput.setValue(firstName);
      await this.postalCodeInput.setValue(postCode);
      return;
    }
    if (!postCode) {
      await this.firstNameInput.setValue(firstName);
      await this.lastNameInput.setValue(lastName);
      return;
    }
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postCode);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async getBackToCartPage() {
    await this.cancelButton.click();
  }
}

export default new CheckoutPage();
