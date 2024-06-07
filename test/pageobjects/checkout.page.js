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
  get errorMessage() {
    return $('h3[data-test="error"]');
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
  async checkErrorMessage(type) {
    await this.errorMessage.waitForExist({ timeout: 5000 });
    if (type === "postal code") {
      return await expect(this.errorMessage).toHaveText(
        expect.stringContaining("Error: Postal Code is required")
      );
    } else if (type === "last name") {
      return await expect(this.errorMessage).toHaveText(
        expect.stringContaining("Error: Last Name is required")
      );
    } else if (type === "first name") {
      return await expect(this.errorMessage).toHaveText(
        expect.stringContaining("Error: First Name is required")
      );
    }
  }
  async getBackToCartPage() {
    await this.cancelButton.click();
  }
}

export default new CheckoutPage();
