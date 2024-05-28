const LoginPage = require("../pageobjects/login.page");

describe("Login", () => {
  it("Login with valid login and password", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
  });
});
