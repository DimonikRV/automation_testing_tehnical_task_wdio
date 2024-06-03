const Page = require("./page");

class LoginPage extends Page {
  get inputUsername() {
    return $("input[data-test='username']");
  }

  get inputPassword() {
    return $("input[data-test='password']");
  }

  get btnSubmit() {
    return $("input[data-test='login-button']");
  }
  get xIcon() {
    return $("svg.error_icon");
  }
  get inputErrorMessage() {
    return $("h3[data-test='error']");
  }

  open(path) {
    return super.open(path);
  }
  async fillOutInputs(username, password) {
    await browser.setTimeout({ script: 80000 });
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
  }
  async validPasswordInput() {
    const inputType = await this.inputUsername.getAttribute("type");
    return inputType === "password";
  }
  async login() {
    await this.btnSubmit.click();
  }
  async checkIsError() {
    await expect(this.inputErrorMessage).toExist();
    await expect(this.inputErrorMessage).toHaveText(
      expect.stringContaining(
        "Epic sadface: Username and password do not match any user in this service"
      )
    );
    await expect(this.xIcon).toExist();
  }
  async checkIfEmptyInputFields() {
    await expect(this.inputUsername).toHaveValue("", { ignoreCase: true });
    await expect(this.inputPassword).toHaveValue("", { ignoreCase: true });
  }
}

module.exports = new LoginPage();
