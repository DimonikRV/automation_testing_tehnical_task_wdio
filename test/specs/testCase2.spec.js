import loginPage from "../pageobjects/login.page";

describe("Login", () => {
  it("Login with valid login and invalid password", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs("standard_user", "any_random_value");
    await loginPage.validPasswordInput();
    await loginPage.login();
    await loginPage.checkIsError();
  });
});
