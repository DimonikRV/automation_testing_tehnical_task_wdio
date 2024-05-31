const Page = require("./page");

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#login-button");
  }
  get xIcon() {
    return $(".error_icon");
  }
  get inputErrorMessage() {
    return $("h3[data-test='error']");
  }

  open(path) {
    return super.open(path);
  }

  async login(username, password) {
    await browser.setTimeout({ script: 70000 });
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
  async checkLoginForm() {
    await expect(this.inputUsername).toHaveElementClass("error", {
      message: "Don't show an error",
    });
    await expect(this.inputErrorMessage).toExist();
    await expect(this.xIcon).toExist();
  }
  async checkIfEmptyInputFields() {
    await expect(this.inputUsername).toHaveValue("", { ignoreCase: true });
    await expect(this.inputPassword).toHaveValue("", { ignoreCase: true });
  }
}

module.exports = new LoginPage();
