const LoginPage = require("../pageobjects/login.page");

describe("Login", () => {
  it("Login with valid login and invalid password", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "any_random_value");
    await LoginPage.validPasswordInput();
    await LoginPage.login();
    await LoginPage.checkIsError();
  });
});
