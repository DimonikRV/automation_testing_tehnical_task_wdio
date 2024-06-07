import page from "./page";

class SecurePage extends page {
  get flashAlert() {
    return $('h3[data-test="error"]');
  }

  get xIcon() {
    return $("svg.error_icon");
  }

  async checkIsError() {
    await expect(this.flashAlert).toExist();
    await expect(this.flashAlert).toHaveText(
      expect.stringContaining(
        "Epic sadface: Username and password do not match any user in this service"
      )
    );
    await expect(this.xIcon).toExist();
  }

  async checkErrorMessage(type) {
    await this.flashAlert.waitForExist({ timeout: 5000 });
    if (type === "postal code") {
      return await expect(this.flashAlert).toHaveText(
        expect.stringContaining("Error: Postal Code is required")
      );
    } else if (type === "last name") {
      return await expect(this.flashAlert).toHaveText(
        expect.stringContaining("Error: Last Name is required")
      );
    } else if (type === "first name") {
      return await expect(this.flashAlert).toHaveText(
        expect.stringContaining("Error: First Name is required")
      );
    }
  }
}

export default new SecurePage();
