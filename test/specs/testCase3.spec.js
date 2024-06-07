import loginPage from "../pageobjects/login.page";
import securePage from "../pageobjects/secure.page";

describe("Login", () => {
  const invalidUser = process.env.INVALID_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("Login with valid password and invalid login", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(invalidUser, password);
    await loginPage.validPasswordInput();
    await loginPage.login();
    await securePage.checkIsError();
  });
});
