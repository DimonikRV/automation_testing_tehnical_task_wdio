const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("Logout", () => {
  it("Logout by clicking on the logout_sidebar_link in the BurgerMenu", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await InventoryPage.logout();
    await LoginPage.checkIfEmptyInputFields();
  });
});
