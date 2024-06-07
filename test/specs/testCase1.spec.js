import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";

describe("Login", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("Login with valid login and password", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.validPasswordInput();
    await loginPage.login();
    await inventoryPage.isInventoryPage();
  });
});
