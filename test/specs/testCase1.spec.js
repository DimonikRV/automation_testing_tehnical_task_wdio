import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";

describe("Login", () => {
  it("Login with valid login and password", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs("standard_user", "secret_sauce");
    await loginPage.validPasswordInput();
    await loginPage.login();
    await inventoryPage.isInventoryPage();
  });
});
