import loginPage from "../pageobjects/login.page";
import inventoryPage from "../pageobjects/inventory.page";

describe("Logout", () => {
  const standardUser = process.env.STANDARD_USER_NAME;
  const password = process.env.SECRET_PASSWORD;

  it("Logout by clicking on the logout_sidebar_link in the BurgerMenu", async () => {
    await loginPage.open();
    await loginPage.fillOutInputs(standardUser, password);
    await loginPage.login();
    await inventoryPage.isSidebarElements();
    await inventoryPage.logout();
    await loginPage.checkIfEmptyInputFields();
  });
});
