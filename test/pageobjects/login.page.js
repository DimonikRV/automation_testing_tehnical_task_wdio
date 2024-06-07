import page from "./page";

class LoginPage extends page {
  get inputUsername() {
    return $("input[data-test='username']");
  }

  get inputPassword() {
    return $("input[data-test='password']");
  }

  get btnSubmit() {
    return $("input[data-test='login-button']");
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

  async checkIfEmptyInputFields() {
    await expect(this.inputUsername).toHaveValue("", { ignoreCase: true });
    await expect(this.inputPassword).toHaveValue("", { ignoreCase: true });
  }
}

export default new LoginPage();
