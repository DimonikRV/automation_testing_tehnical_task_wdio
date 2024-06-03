const LoginPage = require("../pageobjects/login.page");

describe("Login", () => {
  it("Login with valid password and invalid login", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standarD_user", "secret_sauce");
    await LoginPage.validPasswordInput();
    await LoginPage.login();
    await LoginPage.checkIsError();
  });
});
