import loginPage from "../pageobjects/login.page";
import securePage from "../pageobjects/secure.page";

describe("Login", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const invalidPassword = process.env.INVALID_SECRET_PASSWORD;

  it("Login with valid login and invalid password", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, invalidPassword);
    await loginPage.validPasswordInput();
    await loginPage.login();
    await securePage.checkIsError();
  });
});
