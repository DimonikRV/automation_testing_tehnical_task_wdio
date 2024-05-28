const LoginPage = require("../pageobjects/login.page");

describe("Login", () => {
  it("Login with valid login and invalid password", async () => {
    await LoginPage.open();
    await LoginPage.login("standarD_user", "secret_sauce");
    await LoginPage.checkLoginForm();
  });
});
