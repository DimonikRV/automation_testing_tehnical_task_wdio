const LoginPage = require("../pageobjects/login.page");

describe("Login", () => {
  it("Login with valid login and password", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.validPasswordInput();
    await LoginPage.login();
  });
});
