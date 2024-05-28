const LoginPage = require("../pageobjects/login.page");

describe("Login", () => {
  it("Login with valid login and invalid password", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "any_random_value");
    await LoginPage.checkLoginForm();
  });
});
