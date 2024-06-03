const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("Logout", () => {
  it("Logout by clicking on the logout_sidebar_link in the BurgerMenu", async () => {
    await LoginPage.open();
    await LoginPage.fillOutInputs("standard_user", "secret_sauce");
    await LoginPage.login();
    await InventoryPage.isSidebarElements();
    await InventoryPage.logout();
    await LoginPage.checkIfEmptyInputFields();
  });
});
